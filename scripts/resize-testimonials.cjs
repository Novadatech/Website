// One-shot: resize + convert the uploaded testimonial PNGs into web-ready JPGs.
// Source PNGs are 7.5-9 MB each (35 MB total). Output targets ~150-250 KB each
// so the /linkedin-growth page loads fast on mobile.
//
// Run: node scripts/resize-testimonials.cjs
const path = require("node:path");
const fs = require("node:fs");
const sharp = require("sharp");

const SRC_DIR = path.resolve(
  __dirname,
  "..",
  "..",
  "Testimonial Picture",
);
const DST_DIR = path.resolve(__dirname, "..", "public", "testimonials");

const FILES = [
  ["Testimonial 1 Josh MaxiCare.png", "josh-maxicare.jpg"],
  ["Testimonial 2 Malkin Support24.png", "malkin-support24.jpg"],
  ["Testimonial 3 Uche.png", "uche-morningstar.jpg"],
  ["Testimonial 4 Jessica.png", "jessica-teds.jpg"],
];

(async () => {
  fs.mkdirSync(DST_DIR, { recursive: true });

  for (const [src, dst] of FILES) {
    const srcPath = path.join(SRC_DIR, src);
    const dstPath = path.join(DST_DIR, dst);
    const srcSize = fs.statSync(srcPath).size;

    await sharp(srcPath)
      // Card displays at ~5:4 aspect, ~500px wide on desktop, so 1000px max
      // covers retina without overshoot. fit:inside preserves aspect.
      .resize(1000, 1200, { fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 82, progressive: true, mozjpeg: true })
      .toFile(dstPath);

    const dstSize = fs.statSync(dstPath).size;
    const ratio = ((dstSize / srcSize) * 100).toFixed(1);
    console.log(
      `${src.padEnd(38)} -> ${dst.padEnd(28)}  ${(srcSize / 1024 / 1024).toFixed(1)} MB -> ${(dstSize / 1024).toFixed(0)} KB  (${ratio}%)`,
    );
  }

  console.log("\nDone.");
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
