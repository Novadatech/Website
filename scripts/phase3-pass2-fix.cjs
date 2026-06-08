// Fix the failed Pass 2 run:
//   - The previous script removed const BENEFITS / const OUTCOMES but failed
//     to match the section (the end marker had a '(Differentiation)' /
//     condensed-to-3-bullets suffix I didn't account for), leaving orphan
//     {BENEFITS.map(...)} JSX references and a type error.
//   - This pass restores the const (empty), then does a more robust section
//     replacement using a generic 'next comment marker' lookahead, then
//     removes the now-unused const.

const path = require("node:path");
const fs = require("node:fs");

const ROOT = path.resolve(__dirname, "..");

const CONFIGS = require("./phase3-pass2-config.cjs");

function buildSection(c) {
  const tilesJs = c.tiles
    .map((t) => `              { icon: ${t.icon}, title: ${JSON.stringify(t.title)}, desc: ${JSON.stringify(t.desc)} }`)
    .join(",\n");

  return `      {/* ── What You Walk Away With (featured + tile grid) ── */}
      <section className="section-padding py-24 md:py-32">
        <div className="max-container max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-3">${c.eyebrow}</p>
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">${c.headline}</h2>
            <p className="mt-4 text-base text-white/70 max-w-2xl mx-auto leading-relaxed">${c.subhead}</p>
          </div>

          {/* Featured outcome */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-3xl border border-ember-500/25 bg-gradient-to-br from-ember-500/[0.08] via-ember-500/[0.02] to-transparent p-8 md:p-10 mb-6 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-ember-500/10 blur-3xl pointer-events-none" />
            <div className="relative grid md:grid-cols-5 gap-8 md:gap-10 items-center">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-ember-500/15 border border-ember-500/35 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-ember-500" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.18em] text-ember-500/85 font-semibold">${c.featured.eyebrowLabel}</p>
                </div>
                <p className="text-6xl md:text-7xl font-bold text-white tracking-tight leading-none">${c.featured.metric}</p>
                <p className="mt-3 text-lg text-white/80 font-medium leading-snug">${c.featured.metricLabel}</p>
              </div>
              <div className="md:col-span-3 md:border-l md:border-white/[0.10] md:pl-10">
                <h3 className="text-xl md:text-2xl font-bold text-white leading-snug mb-4">${c.featured.title}</h3>
                <p className="text-base text-white/75 leading-relaxed">${c.featured.desc}</p>
              </div>
            </div>
          </motion.div>

          {/* Supporting tiles */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
${tilesJs}
            ].map((o, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-ember-500/30 hover:bg-white/[0.035] transition-colors">
                <div className="w-11 h-11 rounded-xl bg-ember-500/10 border border-ember-500/20 flex items-center justify-center mb-4 group-hover:bg-ember-500/15 transition-colors">
                  <o.icon className="w-5 h-5 text-ember-500" />
                </div>
                <h4 className="text-base md:text-lg font-bold text-white mb-2 leading-snug">{o.title}</h4>
                <p className="text-sm text-white/65 leading-relaxed">{o.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button onClick={scrollToForm} className="btn-primary mx-auto">
              ${c.ctaText}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
`;
}

for (const [file, c] of Object.entries(CONFIGS)) {
  const full = path.resolve(ROOT, file);
  if (!fs.existsSync(full)) {
    console.error(`Missing: ${file}`);
    continue;
  }
  let src = fs.readFileSync(full, "utf8");
  const changes = [];

  // 1. Build start-marker regex; use a *generic* next-marker for end
  const startMarkerEsc = c.sectionCommentMarker.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  const sectionRe = new RegExp(
    `\\s*\\{\\/\\* ── ${startMarkerEsc} ── \\*\\/\\}[\\s\\S]*?(?=\\s*\\{\\/\\* ── )`,
  );

  if (sectionRe.test(src)) {
    src = src.replace(sectionRe, "\n\n" + buildSection(c) + "\n");
    changes.push("section rewritten");
  } else {
    changes.push(`SECTION NOT FOUND: ${c.sectionCommentMarker}`);
  }

  // 2. Remove orphan BENEFITS / OUTCOMES const if section was rewritten
  // (the new section no longer references it)
  if (changes.includes("section rewritten") && c.oldConstName) {
    const constRe = new RegExp(`\\nconst ${c.oldConstName} = \\[[\\s\\S]*?\\n\\];\\n`);
    if (constRe.test(src)) {
      src = src.replace(constRe, "\n");
      changes.push(`-const ${c.oldConstName}`);
    }
  }

  fs.writeFileSync(full, src, "utf8");
  console.log(`${file.padEnd(48)} ${changes.join(", ")}`);
}
