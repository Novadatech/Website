/*
 * ══════════════════════════════════════════════════════════════════════
 * THE VIZ DEVICES.
 *
 * A device carries an argument the page would otherwise have to make in
 * prose: a diagram, a timeline, a matrix, a state machine, an annotated
 * schematic. An icon beside a heading is not a device.
 *
 * All of these are SERVER COMPONENTS. None ships client JavaScript, none
 * imports framer-motion, none renders at opacity:0, and each is complete
 * and readable in the server HTML. Motion is CSS in viz.module.css,
 * gated on the `.anim` flag and the reveal observer that the root layout
 * already mounts, so reduced motion and JavaScript-off both produce a
 * static, complete diagram rather than an empty box.
 *
 * ⚠️ NOT WIRED INTO ANY PAGE. Placement is deliberately somebody else's
 * decision. Suggested homes, for whoever does it:
 *
 *   SingleThreadedDesk   home band 01 "Why it happens", under the
 *                        BandHeading, replacing nothing (the prose stays
 *                        and the device carries it). Also correct on
 *                        /patient-access-desk band 02.
 *   ComplianceHorizon    /workforce-desk band 02 "Why it happens". It is
 *                        that page's thesis and it currently has no
 *                        visual form at all.
 *   BaselineReport       both service pages, band 04 "What gets
 *                        measured", in place of the four numbered boxes.
 *                        Pass that page's own `measured` array.
 *
 * ⚠️ EVERY ONE OF THEM DEFAULTS TO `reveal` TRUE, which puts `.reveal`
 * on its own root. If you wrap one in <AnimatedSection>, or place one
 * above the fold, pass `reveal={false}`. Nothing above the fold on this
 * site animates.
 *
 * The figure rules these devices are built to are in the header of
 * ./Primitives.tsx. The copy rules are in src/content/offers.ts. Read
 * both before adding a fourth device.
 * ══════════════════════════════════════════════════════════════════════
 */

export { default as SingleThreadedDesk } from "./SingleThreadedDesk";
export { default as ComplianceHorizon } from "./ComplianceHorizon";
export { default as BaselineReport } from "./BaselineReport";
export { default as OvernightEvent } from "./OvernightEvent";

export {
  VizCard,
  Stat,
  Legend,
  TableTwin,
  VizNote,
  SW,
  type LegendItem,
} from "./Primitives";
