import { ImageResponse } from "next/og";

/*
 * THE SHARE CARD. 1200x630, generated at build time.
 *
 * ⚠️ WHY THIS FILE EXISTS. Paid traffic reaches this site from Meta, and
 * every time the link was shared, pasted into a message or previewed in
 * an ad tool, it rendered as a bare grey box with a URL under it. There
 * was no opengraph-image on the site at all. That is the first thing a
 * proportion of the audience sees of this business.
 *
 * ⚠️ THE TYPEFACE IS NOT BARLOW CONDENSED, on purpose. Satori, which
 * renders this, needs a ttf/otf/woff buffer, and next/font ships the
 * brand faces only as hashed .woff2 build artefacts with no stable path.
 * Rather than fetch a font over the network at build time, which adds a
 * failure mode to every deploy for a cosmetic gain, this uses the default
 * face and carries the brand in the surface, the colour and the layout.
 * If a real .ttf is ever committed to /public, load it here.
 *
 * ⚠️ THIS CARD IS UNITED STATES. It governs the same rules as the
 * pages: nothing clinical, no pricing, and no figure without a source.
 * The Australian domain renders its own card from its own content.
 */

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Novada. We run everything except the care. Managed operations for Australian practices and care providers.";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "68px 72px",
          backgroundColor: "#0A0D14",
          backgroundImage:
            "radial-gradient(900px 520px at 6% -8%, rgba(0,61,219,0.34), transparent 62%), radial-gradient(760px 460px at 104% 112%, rgba(180,80,26,0.16), transparent 60%)",
        }}
      >
        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "center", fontSize: 30, fontWeight: 700, letterSpacing: "-0.01em" }}>
          <span style={{ color: "#FFFFFF" }}>Novada</span>
          <span style={{ color: "#A6BEFF", marginLeft: 10 }}>Tech</span>
        </div>

        {/* The position. The one sentence the whole site is built around. */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              width: 64,
              height: 4,
              backgroundColor: "#A6BEFF",
              marginBottom: 34,
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 78,
              lineHeight: 1.04,
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "-0.022em",
              maxWidth: 940,
            }}
          >
            We run everything except the care.
          </div>
        </div>

        {/* The two desks, and the boundary that answers the first
            objection this business meets. */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              width: "100%",
              height: 1,
              backgroundColor: "rgba(255,255,255,0.16)",
              marginBottom: 26,
            }}
          />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
            <div style={{ display: "flex", fontSize: 25, color: "rgba(255,255,255,0.80)" }}>
              For practices &nbsp;·&nbsp; For care providers
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 19,
                fontWeight: 700,
                color: "#A6BEFF",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Nothing clinical
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
