// Second batch of testimonial photos. Same resize pipeline as the original
// (max 1000x1200 box, JPEG q82, mozjpeg + progressive) so the cards stay
// fast on mobile.
//
// Run: node scripts/resize-testimonials-batch2.cjs

const path = require("node:path");
const fs = require("node:fs");
const sharp = require("sharp");

const SRC_DIR = path.resolve(__dirname, "..", "..", "Testimonial Images");
const DST_DIR = path.resolve(__dirname, "..", "public", "testimonials");

const FILES = [
  ["Nicola - Morasco Media.png", "nicola-morasco.jpg"],
  ["Michael - Aaron's Investigation.png", "michael-aarons.jpg"],
  ["Jeff - Vertical Access.png", "jeff-verticalaccess.jpg"],
];

(async () => {
  fs.mkdirSync(DST_DIR, { recursive: true });
  for (const [src, dst] of FILES) {
    const srcPath = path.join(SRC_DIR, src);
    const dstPath = path.join(DST_DIR, dst);
    const srcSize = fs.statSync(srcPath).size;
    await sharp(srcPath)
      .resize(1000, 1200, { fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 82, progressive: true, mozjpeg: true })
      .toFile(dstPath);
    const dstSize = fs.statSync(dstPath).size;
    console.log(
      `${src.padEnd(40)} -> ${dst.padEnd(28)}  ${(srcSize / 1024 / 1024).toFixed(1)} MB -> ${(dstSize / 1024).toFixed(0)} KB`,
    );
  }
  console.log("Done.");
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
