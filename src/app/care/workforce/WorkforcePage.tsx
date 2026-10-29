"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Quote,
  Star,
} from "lucide-react";

import DeskNav from "@/components/desk/DeskNav";
import DeskFooter from "@/components/desk/DeskFooter";
import BookingEmbed from "@/components/desk/BookingEmbed";
import StickyCta from "@/components/desk/StickyCta";
import { Band, BandHeading } from "@/components/desk/Band";
import {
  BODY,
  BTN_PRIMARY,
  DISPLAY,
  D2,
  FRAME,
  GUTTER,
  MICRO,
  MICRO_TIGHT,
  RAIL_GRID,
  SMALL,
} from "@/components/desk/tokens";

/*
 * ══════════════════════════════════════════════════════════════════════
 * /care/workforce — pillar two of the care offer.
 *
 * 🔴 BUILT AS THE TWIN OF /care/rostering, on the founder's instruction
 * (29 October 2026): same shape, same components, same section rhythm,
 * different content. It replaced the PillarPage build ENTIRELY, the way
 * the rostering page did a few hours earlier. If you change the shape of
 * one of these two pages, look at the other.
 *
 * ⚠️ IT IS A CLIENT COMPONENT, so its metadata CANNOT live in this file.
 * It is exported from page.tsx, which wraps this. Do not add a
 * layout.tsx to this folder: /care/workforce/confirmed has one of its
 * own, and two layouts declaring metadata in the same subtree is how a
 * confirmation page ends up titled like a sales page.
 *
 * ⚠️ NO CALCULATOR HERE, unlike the rostering page. The supplied copy
 * has no arithmetic section, and there is no honest sum to show: this
 * offer's value is capacity and readiness, not a recoverable figure.
 * CONTINUITY_CALC in calculators.ts is now unused by any page.
 *
 * 🔴 PRICE REMOVED FROM THE FAQ. The supplied copy carried "from
 * A$3,500 per month plus GST". It is not printed, for two reasons that
 * agree: the founder stripped the equivalent figure out of the
 * rostering FAQ in the same session, and the standing rule for this
 * offer is that price never appears in writing before a call. The FAQ
 * still answers the question, it just answers it the way the rest of
 * the estate does. Do not reintroduce a figure without the founder
 * saying so.
 *
 * 🔴 THE INDUCEMENT WALL IS CRIMINAL-LAW BACKED (2026 NDIS changes).
 * No referral arrangements, incentives, gifts or growth promises, in
 * any client-facing text, ever. "Prepare for growth" on this page is
 * about the PROVIDER opening new services, which is workforce planning
 * and not an inducement. Keep it that way.
 *
 * 🔴 WE NEVER PROMISE A FILL. The FAQ says outright that no shift or
 * vacancy is guaranteed, and the benefits section says agency cover may
 * still be necessary. Both are load-bearing. Sell the sequence that
 * runs when a shift goes vacant, never the outcome.
 *
 * ⚠️ THIS REVERSES AN EARLIER STANDING NOTE. The previous build said:
 * "do not add 'we do not supply labour' or any other legal
 * characterisation of the arrangement, in either direction." The
 * founder's own copy now characterises it directly, in the FAQ "Is
 * Novada Tech a staffing agency?". Their copy, their call, and it is
 * consistent with the model, in which the provider employs and deploys.
 *
 * ⚠️ MEASURE IS DELIBERATELY WIDE, as on the rostering page. The rest of
 * the estate sets body copy at 68ch. These two pages run to roughly
 * 90ch because the founder asked for the right-hand space filled. Do
 * not propagate it to the pages built for reading.
 *
 * ⚠️ THE TESTIMONIALS ARE VERBATIM AND FOUNDER-SUPPLIED. Do not reword
 * them. The only edit made was replacing an em dash with a full stop in
 * the Maxicare quote, to hold the house no-em-dash rule. No words were
 * changed.
 * ══════════════════════════════════════════════════════════════════════
 */

/* 🔴 VERBATIM, FOUNDER-SUPPLIED. Do not reword.
   ⚠️ THE NAME IS EMMANUELLA, two Ls. Founder-confirmed 29 October
   after /care/rostering was found carrying one L. All three care
   pages now agree. Do not "correct" it back. */
const TESTIMONIALS = [
  {
    org: "Maxicare Plus",
    quote:
      "One thing we value about Novada Tech is that they understand the operational challenges NDIS providers face. Building a care business requires more than finding workers. It requires reliable processes, proper planning and consistent support. Novada brings a practical, proactive approach and genuinely takes the time to understand what our organisation needs.",
    name: "Founder, Josh",
  },
  {
    org: "Morning Star Community Services",
    quote:
      "In the care sector, having reliable people and well-managed processes makes a real difference. What stands out about Novada Tech is their professionalism, attention to detail and focus on making operations more manageable. They understand the importance of accountability, consistency and having the right support behind service delivery.",
    name: "Founder, Emmanuella",
  },
  {
    org: "Support Link",
    quote:
      "Novada Tech takes a structured and professional approach to understanding business needs. They recognise the importance of strong workforce processes, clear communication and dependable administrative support. Their commitment to practical solutions and ongoing improvement is what makes them a valuable partner.",
    name: "Founder, Peter",
  },
];

const AREAS = [
  {
    n: "1",
    h: "Build your workforce",
    b: "Maintain an active recruitment pipeline so hiring does not begin only when a position becomes vacant.",
  },
  {
    n: "2",
    h: "Prepare workers for service delivery",
    b: "Coordinate screening, clearances, onboarding, induction and training administration to support workforce readiness.",
  },
  {
    n: "3",
    h: "Maintain workforce continuity",
    b: "Track credentials, monitor relevant compliance requirements and maintain workforce records to support ongoing staffing decisions.",
  },
];

/* The five triggers that start the scramble. Deliberately bare: each
   one is a sentence a provider has lived through. */
const TRIGGERS = [
  "A worker calls in sick.",
  "A support worker resigns unexpectedly.",
  "A new participant requires additional support.",
  "An existing worker becomes unavailable.",
  "A service expands into a new location.",
];

const CYCLE = [
  {
    h: "Recruitment starts too late",
    b: "Hiring begins only after a vacancy affects the roster.",
  },
  {
    h: "Managers become recruitment coordinators",
    b: "Owners and operations managers spend valuable time reviewing applicants, following up on documents and chasing onboarding requirements.",
  },
  {
    h: "Agency spend becomes a recurring expense",
    b: "External workers may be needed because internal workforce capacity has not been developed sufficiently ahead of demand.",
  },
  {
    h: "Worker readiness delays deployment",
    b: "A candidate may be interested and available but still require screening, clearances, induction or training before they can safely and appropriately work.",
  },
  {
    h: "Compliance administration becomes difficult to maintain",
    b: "Worker documents, qualifications, clearances and training records need continuous monitoring.",
  },
];

/* The six service components. Each one keeps its own boundary line,
   because each one has a different thing the provider must retain. */
const SERVICE = [
  {
    n: "1",
    eyebrow: "Proactive recruitment & workforce pipeline",
    lead: "Stop waiting for a vacancy before looking for your next worker.",
    items: [
      "Ongoing recruitment activity for agreed frontline roles.",
      "Job advertising and candidate sourcing.",
      "Application management and initial screening.",
      "Candidate shortlisting and interview coordination.",
      "Recruitment pipeline tracking.",
      "Forward planning for expected workforce demand.",
      "Recruitment support for new services and business growth.",
    ],
    note: "Our ongoing service model is designed to support recruitment requests without charging a separate Novada recruitment fee for each vacancy covered under the agreement.",
    benefit:
      "a more consistent recruitment pipeline and less dependence on emergency hiring.",
  },
  {
    n: "2",
    eyebrow: "Screening & clearance coordination",
    lead: "Help ensure suitable candidates complete the necessary checks before deployment.",
    items: [
      "Reference-check administration.",
      "NDIS worker screening coordination where applicable.",
      "Police-check administration where appropriate.",
      "Working With Children Check coordination where relevant.",
      "Right-to-work documentation.",
      "Qualification and credential collection.",
      "Screening progress and outstanding-document tracking.",
    ],
    note: "Required checks depend on the role, service setting and applicable legislation.",
    benefit:
      "better visibility over worker suitability documentation and fewer avoidable administrative delays.",
  },
  {
    n: "3",
    eyebrow: "Worker onboarding & induction",
    lead: "Turn successful candidates into appropriately prepared team members.",
    items: [
      "New-worker onboarding workflows.",
      "Employment documentation and information collection.",
      "Policy acknowledgement tracking.",
      "Induction scheduling and completion records.",
      "System access request coordination.",
      "Required onboarding documentation.",
      "Outstanding onboarding task follow-up.",
      "Worker readiness status reporting.",
    ],
    note: "Your organisation remains responsible for employment decisions, competency verification and final approval for deployment.",
    benefit:
      "more consistent onboarding and less administrative workload for your managers.",
  },
  {
    n: "4",
    eyebrow: "Training administration & workforce readiness",
    lead: "A worker is not necessarily ready to support someone just because they have been recruited.",
    items: [
      "Training schedules and enrolments.",
      "Required training records.",
      "Mandatory learning completion tracking.",
      "Refresher training reminders.",
      "Outstanding training follow-ups.",
      "Qualification and certification record management.",
      "Reporting on training completion and readiness.",
    ],
    note: "Clinical competency decisions and specialist training must remain with appropriately qualified and authorised personnel.",
    benefit:
      "better visibility over training requirements and worker readiness.",
  },
  {
    n: "5",
    eyebrow: "Ongoing compliance tracking & monitoring",
    lead: "Workforce compliance does not stop when onboarding is complete.",
    items: [
      "Worker screening and clearance expiry dates.",
      "Relevant credential and qualification records.",
      "Training completion and renewal requirements.",
      "Outstanding workforce documentation.",
      "Required employee record updates.",
      "Compliance tracking registers.",
      "Exception reporting and escalation.",
    ],
    note: "Monitoring supports the provider's compliance responsibilities but does not replace the provider's own oversight or guarantee regulatory compliance.",
    benefit:
      "a more organised, consistently monitored workforce documentation process.",
  },
  {
    n: "6",
    eyebrow: "Workforce administration & reporting",
    lead: "Give your team a clearer picture of workforce readiness.",
    items: [
      "Recruitment and onboarding status reporting.",
      "Worker availability record coordination.",
      "Workforce capacity and vacancy tracking.",
      "Recruitment pipeline summaries.",
      "Outstanding documentation reporting.",
      "Payroll-related workforce administration.",
      "Routine management updates.",
      "Escalation of unresolved workforce readiness issues.",
    ],
    note: "Depending on the agreed service scope.",
    benefit:
      "better operational visibility and fewer repetitive administrative tasks for your internal team.",
  },
];

const BENEFITS = [
  {
    h: "Reduce avoidable agency dependence",
    b: "Build a stronger internal recruitment pipeline and improve worker readiness so external agency support is less frequently required for preventable staffing gaps.",
  },
  {
    h: "Take pressure off your managers",
    b: "Reduce the time your leadership and coordination teams spend chasing applicants, onboarding documents, training records and workforce administration.",
  },
  {
    h: "Prepare for growth",
    b: "Support workforce planning when opening new services, expanding into additional locations or increasing participant and resident capacity.",
  },
  {
    h: "Improve worker readiness",
    b: "Establish clearer processes for identifying which workers have completed relevant screening, onboarding, induction and training requirements.",
  },
  {
    h: "Strengthen workforce administration",
    b: "Maintain more consistent recruitment, onboarding and compliance records with clearer ownership and reporting.",
  },
  {
    h: "Support more reliable service delivery",
    b: "Help build the internal capacity needed to support scheduled care and reduce avoidable service disruption.",
  },
];

const DIFFERENT = [
  {
    h: "Proactive, not just reactive",
    b: "We support ongoing recruitment planning rather than waiting until staffing gaps become urgent.",
  },
  {
    h: "Recruitment through to readiness",
    b: "We coordinate the administrative steps that connect candidate selection with appropriate workforce preparation.",
  },
  {
    h: "Ongoing administrative support",
    b: "Our service continues beyond an individual hire, helping maintain training, credential and compliance records.",
  },
  {
    h: "Works alongside your existing systems",
    b: "We aim to integrate with your current recruitment, HR and workforce processes where practical, rather than requiring unnecessary system changes.",
  },
  {
    h: "You retain control",
    b: "Your organisation retains responsibility for hiring, employment, staff suitability, clinical and care decisions, and worker deployment.",
  },
  {
    h: "A continuing partnership",
    b: "The service is designed as ongoing workforce support rather than a one-off recruitment project.",
  },
];

const WHO = [
  {
    h: "NDIS service providers",
    b: "Organisations recruiting and managing disability support workers across supported independent living, in-home disability support, community participation, community access and social support, and other applicable disability support services. We help coordinate recruitment, onboarding, screening and training administration to support workforce readiness.",
  },
  {
    h: "Support at Home providers",
    b: "Organisations with dispersed care teams delivering home and community-based services. We help maintain recruitment pipelines, coordinate worker preparation and support administrative visibility across different locations.",
  },
  {
    h: "Residential aged care providers",
    b: "Organisations that need ongoing recruitment, worker readiness administration and staffing capacity across their care workforce. The specific roles, qualification requirements and screening processes are agreed with the provider.",
  },
  {
    h: "Growing care businesses",
    b: "Providers opening new service locations, expanding their participant or resident base, or building additional frontline capacity. Whether you are strengthening an existing workforce or preparing for growth, we tailor the service to your operational needs.",
  },
];

const STEPS = [
  {
    n: "1",
    h: "Workforce discovery & planning",
    b: "We begin with a complimentary discovery conversation to understand your organisation's workforce structure, current recruitment challenges, vacancies, systems and future staffing requirements. We identify the administrative functions where ongoing workforce support may deliver the greatest value.",
  },
  {
    n: "2",
    h: "Establish your workforce support process",
    b: "We agree on the service scope, roles, locations, operational responsibilities, recruitment priorities, communication arrangements and reporting requirements. We then establish the recruitment, screening, onboarding and workforce tracking processes that will support your organisation.",
  },
  {
    n: "3",
    h: "Manage recruitment & worker readiness",
    b: "Our team provides ongoing support with agreed recruitment activity, candidate tracking, clearance coordination, onboarding administration, induction and training records. Your organisation continues to approve recruitment, assess suitability and authorise workers for deployment.",
  },
  {
    n: "4",
    h: "Monitor, report & continuously improve",
    b: "We maintain administrative visibility over recruitment progress, outstanding onboarding requirements, worker readiness records and relevant compliance dates. We provide regular updates and work with your team to improve the agreed processes as workforce needs change.",
  },
];

const RECEIVE = [
  {
    h: "Ongoing recruitment support",
    b: "Continuous support for recruitment requests within agreed roles, locations and operating arrangements.",
  },
  {
    h: "Recruitment pipeline visibility",
    b: "Clear tracking of candidates, recruitment stages, vacancies and outstanding actions.",
  },
  {
    h: "Coordinated worker onboarding",
    b: "Structured onboarding workflows and follow-up of incomplete documentation.",
  },
  {
    h: "Screening & clearance administration",
    b: "Coordination and tracking of relevant screening, verification and credential requirements.",
  },
  {
    h: "Training & induction tracking",
    b: "Administrative coordination of induction, training completion and required refresher activities.",
  },
  {
    h: "Workforce compliance monitoring",
    b: "Tracking of relevant clearance, credential and training expiry dates, with escalation of exceptions.",
  },
  {
    h: "Workforce reporting",
    b: "Regular summaries of recruitment progress, onboarding status and workforce-readiness issues.",
  },
  {
    h: "An ongoing operational support partner",
    b: "A defined support function with agreed responsibilities, communication channels and performance reporting.",
  },
];

const AUDIT_COVERS = [
  "Avoidable overtime and workforce costs.",
  "Inefficient rostering and agency expenditure.",
  "Workforce utilisation and service delivery records.",
  "Billing and claims discrepancies.",
  "Legitimate revenue assurance opportunities.",
];

const CONTINUITY_COVERS = [
  "Proactive recruitment.",
  "Screening and clearance coordination.",
  "Onboarding and induction.",
  "Training administration.",
  "Compliance tracking.",
  "Workforce readiness and operational reporting.",
];

const FAQ = [
  {
    q: "What is Workforce Continuity?",
    a: "Workforce Continuity is an ongoing managed workforce support service for NDIS and aged care providers. It covers agreed recruitment, screening coordination, onboarding, induction, training administration, compliance tracking and workforce reporting activities. Its purpose is to help organisations build and maintain reliable internal workforce capacity.",
  },
  {
    q: "Is Novada Tech a staffing agency?",
    a: "Our Workforce Continuity service is designed to support your organisation's own recruitment and workforce administration processes. You remain responsible for employing or engaging workers, making hiring decisions, verifying suitability and approving deployment. We are not promising to supply agency-employed workers for individual shifts under this service.",
  },
  {
    q: "Does the service include unlimited recruitment?",
    a: "Our ongoing service model is designed to support recruitment requests for agreed roles and locations without a separate Novada recruitment charge for each vacancy. The agreement defines service capacity, operational requirements, recruitment activities and any applicable fair-use conditions. Unlimited recruitment support does not mean guaranteed placements, unlimited simultaneous delivery capacity or an assurance that every vacancy will be filled.",
  },
  {
    q: "Can you help us reduce agency staffing costs?",
    a: "Our service can support this objective by strengthening your internal recruitment pipeline and worker readiness. The extent of any savings will depend on your circumstances, recruitment outcomes, existing agency use and staffing requirements. We do not guarantee that agency costs will be eliminated.",
  },
  {
    q: "Do you handle NDIS worker screening?",
    a: "We coordinate relevant administrative steps and maintain tracking records as agreed. The provider retains responsibility for identifying risk-assessed roles, confirming required clearances and meeting applicable worker screening requirements.",
  },
  {
    q: "Do you support aged care worker screening?",
    a: "Yes, we can coordinate relevant screening documentation and tracking processes as part of the agreed service. Screening requirements depend on the aged care role, applicable rules and the provider's responsibilities.",
  },
  {
    q: "Do you manage onboarding and induction?",
    a: "Yes. We support onboarding and induction administration, including documentation, coordination, completion tracking and outstanding-task follow-up. Your organisation retains responsibility for role suitability, competency assessment and approval for service delivery.",
  },
  {
    q: "Does Novada provide clinical training?",
    a: "Our standard Workforce Continuity positioning focuses on training coordination, scheduling and administration. Clinical training and professional competency assessment must be undertaken by suitably qualified and authorised personnel. Any separate training delivery arrangements must be expressly agreed.",
  },
  {
    q: "Can Workforce Continuity help when we are opening a new service?",
    a: "Yes. We can support workforce recruitment planning, candidate sourcing, onboarding preparation and readiness tracking for new services or additional locations.",
  },
  {
    q: "Can you work with our existing HR or rostering software?",
    a: "Our approach is intended to work alongside existing systems where practical. We confirm available integrations, access arrangements and relevant workflows during onboarding.",
  },
  {
    q: "Does the service include payroll?",
    a: "Payroll-related workforce administration may be included where expressly agreed. The specific tasks, approval arrangements, access permissions and responsibilities are defined in the service agreement. The provider remains responsible for meeting its employment, wage payment, superannuation, taxation and recordkeeping obligations.",
  },
  {
    /* 🔴 NO FIGURE. See the header note: the founder removed the
       equivalent price from the rostering FAQ in the same session, and
       price does not appear in writing before a call. */
    q: "How much does Workforce Continuity cost?",
    a: "Pricing depends on the agreed scope, workforce volume, roles, service locations and administrative requirements, so we confirm it with you before any engagement begins. Any separate advertising, screening, external training or third-party costs are clarified beforehand. The initial discovery conversation is complimentary.",
  },
  {
    q: "Is there a minimum contract period?",
    a: "Contract duration, notice periods and service commitments are confirmed in the agreed service proposal.",
  },
  {
    q: "Can you guarantee every shift will be covered?",
    a: "No. Workforce Continuity is designed to improve recruitment readiness and internal staffing capacity, but it does not guarantee that every vacancy or shift can be filled. Your organisation retains responsibility for maintaining safe and appropriate staffing arrangements.",
  },
  {
    q: "Is this suitable for a provider with an existing HR or recruitment team?",
    a: "Yes. The service may support existing internal teams by taking responsibility for agreed administrative tasks, recruitment coordination and workforce-readiness tracking. It does not necessarily require replacing your current team or processes.",
  },
  {
    q: "How do we get started?",
    a: "Book a complimentary discovery conversation. We will discuss your workforce needs, existing systems, current administrative workload and whether ongoing managed support would be suitable.",
  },
];

/* ── building blocks ────────────────────────────────────────────── */

const WIDE = "max-w-[90ch]";

function Cta({
  children,
  tone = "light",
  href = "#book",
}: {
  children: React.ReactNode;
  tone?: "light" | "brand";
  href?: string;
}) {
  /* 🔴 "brand" IS BTN_PRIMARY ON AN INK SURFACE, which tokens.ts
     explicitly warns against: brand-500 #003DDB on canvas-ink #0A0D14 is
     about 2:1, so the button's own edge all but disappears. The founder
     asked for the same blue on the hero as the other CTAs, so the FILL
     is exactly brand-500 and a light ring carries the boundary instead.
     White on brand-500 is 7.81:1, so the label was never the problem.
     ⚠️ Remove the ring and the button stops reading as a button on this
     background. */
  const cls =
    tone === "brand"
      ? `${BTN_PRIMARY} min-h-12 px-6 shadow-cta ring-1 ring-white/25 hover:ring-white/40`
      : BTN_PRIMARY;
  return (
    <a href={href} className={`${cls} w-full text-base sm:w-auto`}>
      {children}
      <ArrowRight
        aria-hidden
        className="h-4 w-4 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
      />
    </a>
  );
}

/* ⚠️ ELEVATED AND SEPARATED, matching /care/rostering. The site's own
   reveal class rather than a new animation system. */
function BoxCards({
  items,
  cols = 2,
}: {
  items: { h: string; b: string; n?: string }[];
  cols?: 2 | 3;
}) {
  return (
    <div
      className={`mt-10 grid gap-5 md:gap-6 ${
        cols === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
      }`}
    >
      {items.map((c, i) => (
        <div
          key={c.h}
          className="reveal flex flex-col rounded-xl border border-ink-100 bg-white p-6 shadow-raise transition-[transform,box-shadow] duration-200 ease-standard hover:-translate-y-0.5 hover:shadow-lift md:p-7"
          style={{ ["--reveal-delay" as string]: `${Math.min(i, 4) * 70}ms` }}
        >
          {c.n ? (
            <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-sm font-bold text-white">
              {c.n}
            </span>
          ) : null}
          <h3 className="text-base font-semibold text-ink-950">{c.h}</h3>
          <p className="mt-2.5 text-sm leading-relaxed text-ink-600">{c.b}</p>
        </div>
      ))}
    </div>
  );
}

function Bullets({
  items,
  tone = "light",
}: {
  items: string[];
  tone?: "light" | "dark";
}) {
  return (
    <ul className="mt-5 flex flex-col gap-2.5">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-3">
          <Check
            aria-hidden
            strokeWidth={2.4}
            className={`mt-1 h-3.5 w-3.5 flex-shrink-0 ${
              tone === "dark" ? "text-brand-200" : "text-brand-500"
            }`}
          />
          <span
            className={`text-sm leading-relaxed ${
              tone === "dark" ? "text-white/80" : "text-ink-600"
            }`}
          >
            {t}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* 🔴 BLUE, NOT GREEN, on the founder's instruction (29 October
   2026): a five-star row in Trustpilot's green invites a brand
   complaint we have already had two notices about, whatever the exact
   hex. Trustpilot green is #00B67A and this was #0CC481, close enough
   to be the problem.

   ⚠️ BUT NOT brand-500. The raw brand blue #003DDB on canvas-ink
   #0A0D14 is about 2:1 and the stars all but vanish, the same trap
   tokens.ts flags for buttons. brand-200 #A6BEFF is 10.58:1 on that
   ground and is the brand's own on-ink blue, already used by the
   eyebrow directly above this bar.

   ⚠️ The PROOF STRIP passes brand-500 explicitly, because those
   cards sit on white. Light surface gets the deep blue, ink surface
   gets the light one. Do not unify them. */
function Stars({ className = "h-4 w-4 fill-brand-200 text-brand-200" }) {
  return (
    <span aria-hidden className="flex items-center gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className={className} strokeWidth={0} />
      ))}
    </span>
  );
}

/* ⚠️ UNBRANDED BY NECESSITY. No platform name, no wordmark, no
   #00B67A, and 🔴 NOT A LINK: the founder had the /case-study link
   taken off the rostering page on 29 October, so this twin never had
   one. Nothing here is clickable. */
function RatingBar() {
  return (
    <div className="inline-flex min-h-11 flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5">
      <Stars />
      <span className="text-sm font-semibold text-white">5.0</span>
      <span className="text-sm text-white/70">from 77 provider reviews</span>
    </div>
  );
}

function TestimonialSlider() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const go = (d: number) =>
    setI((v) => (v + d + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <div className="relative mt-10">
      <div className="overflow-hidden rounded-xl bg-brand-500 p-7 shadow-raise md:p-12 lg:p-16">
        <Quote
          aria-hidden
          className="h-9 w-9 fill-white/90 text-white/90"
          strokeWidth={0}
        />
        <blockquote className="mt-6 max-w-[46ch] text-xl font-medium leading-snug text-white md:text-2xl lg:max-w-[52ch] lg:text-[32px] lg:leading-[1.3]">
          {t.quote}
        </blockquote>
        <figcaption className="mt-8">
          <p className="text-base font-semibold text-white">{t.name}</p>
          <p className={`${MICRO_TIGHT} mt-1.5 text-white/75`}>{t.org}</p>
        </figcaption>
      </div>

      <div className="mt-5 flex items-center justify-between">
        {/* ⚠️ -ml cancels the first dot button's own padding so the
            row still lines up with the quote above it. */}
        <div className="-ml-[13px] flex items-center">
          {TESTIMONIALS.map((x, n) => (
            <button
              key={x.org}
              type="button"
              aria-label={`Show the quote from ${x.org}`}
              aria-current={n === i ? "true" : undefined}
              onClick={() => setI(n)}
              /* ⚠️ The HIT AREA is 36x44 and the dot inside it is 10px.
                 An 8px button is not tappable on a phone. */
              className="group/dot flex h-11 w-9 items-center justify-center"
            >
              <span
                aria-hidden
                className={`block h-2.5 rounded-full transition-all duration-200 ${
                  n === i
                    ? "w-7 bg-brand-500"
                    : "w-2.5 bg-ink-200 group-hover/dot:bg-ink-300"
                }`}
              />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous quote"
            onClick={() => go(-1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-ink-200 bg-white text-ink-700 transition-colors duration-150 hover:border-brand-500 hover:text-brand-500"
          >
            <ArrowLeft aria-hidden className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next quote"
            onClick={() => go(1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-ink-200 bg-white text-ink-700 transition-colors duration-150 hover:border-brand-500 hover:text-brand-500"
          >
            <ArrowRight aria-hidden className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ⚠️ NATIVE <details>. No JS, keyboard and screen reader support for
   free, and it still works if hydration never finishes. */
function Faq() {
  return (
    <div className="mt-10 flex flex-col gap-3">
      {FAQ.map((f, i) => (
        <details
          key={f.q}
          className="reveal group rounded-xl border border-ink-100 bg-white shadow-raise [&_summary::-webkit-details-marker]:hidden"
          style={{ ["--reveal-delay" as string]: `${Math.min(i, 4) * 50}ms` }}
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 p-6 text-base font-semibold text-ink-950 md:p-7">
            <span>{f.q}</span>
            <ChevronDown
              aria-hidden
              className="mt-0.5 h-5 w-5 flex-shrink-0 text-ink-400 transition-transform duration-200 ease-standard group-open:rotate-180"
            />
          </summary>
          <p className="px-6 pb-6 text-sm leading-relaxed text-ink-600 md:px-7 md:pb-7">
            {f.a}
          </p>
        </details>
      ))}
    </div>
  );
}

export default function WorkforcePage() {
  return (
    <div data-theme="desk" className="min-h-screen bg-white font-sans">
      <DeskNav tone="dark" audience="care" bookHref="#book" />

      <main>
        {/* ── 1 HERO ───────────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-white/10 bg-canvas-ink">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -left-40 -top-56 h-[620px] w-[620px] rounded-full bg-brand-500/20 blur-[130px]" />
            <div className="absolute -bottom-72 -right-40 h-[560px] w-[560px] rounded-full bg-signal-600/10 blur-[140px]" />
          </div>

          <div
            className={`${FRAME} ${GUTTER} relative border-x border-white/10 pb-16 pt-10 md:pb-20 md:pt-14`}
          >
            <RatingBar />

            <p className={`${MICRO} mt-7 text-brand-200`}>
              For NDIS &amp; aged care providers
            </p>

            {/* ⚠️ NOT the d1 token, for the reason set out on
                /care/rostering: d1's clamp floor is 42px, which puts a
                headline this long over five lines on a phone and pushes
                the CTA off the first screen. Same clamp as the twin, so
                the two heroes are the same size at every width. */}
            <h1
              className={`${DISPLAY} mt-5 text-[clamp(2rem,0.89rem+4.83vw,4.75rem)] leading-[0.93] tracking-[-0.015em] text-white`}
            >
              Stop the roster headaches. Build a workforce you can rely on.
            </h1>

            {/* ⚠️ ONE BLOCK, matching the twin. Keeping the hero short is
                what brings the first CTA above the fold on a phone. */}
            <div
              className={`mt-7 flex ${WIDE} flex-col gap-5 text-base text-white/75`}
            >
              <p>
                Stop constantly chasing workers, filling last-minute vacancies
                and relying on expensive staffing agencies. Novada Tech&apos;s
                Workforce Continuity service helps NDIS and aged care providers
                build and maintain a reliable internal workforce through
                proactive recruitment, screening, clearance coordination,
                onboarding, induction, training administration and ongoing
                compliance monitoring. The result is less pressure on your
                management team, a more dependable workforce and greater
                confidence in your ability to continue delivering care.
              </p>
            </div>

            <div className="mt-10">
              <Cta tone="brand">Book your Workforce Continuity call</Cta>
            </div>
            <p className="mt-5 text-sm text-white/55">
              Free 30-minute discovery conversation. No obligation to proceed.
            </p>
          </div>
        </section>

        {/* ── PROOF STRIP ──────────────────────────────────────────── */}
        <section className="border-b border-ink-100 bg-ink-50">
          <div
            className={`${FRAME} ${GUTTER} border-x border-ink-100 py-10 md:py-12`}
          >
            <div className="grid gap-5 md:grid-cols-3 md:gap-6">
              {[
                { v: "5.0", l: "Average client rating", stars: true },
                { v: "77", l: "Provider reviews", stars: false },
                {
                  v: "205",
                  l: "NDIS and aged care providers across Australia",
                  stars: false,
                },
              ].map((s, i) => (
                <div
                  key={s.l}
                  className="reveal rounded-xl border border-ink-100 bg-white p-6 text-center shadow-raise md:p-7"
                  style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
                >
                  <p className={`${D2} text-brand-500`}>{s.v}</p>
                  {s.stars ? (
                    <div className="mt-3 flex justify-center">
                      <Stars className="h-4 w-4 fill-brand-500 text-brand-500" />
                    </div>
                  ) : null}
                  <p className="mt-3 text-sm font-medium text-ink-600">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 2 WHY NOVADA TECH ────────────────────────────────────── */}
        <Band index="01" label="Why Novada Tech">
          <h2 className={`${D2} text-ink-950`}>
            Your team should be focused on delivering care, not constantly
            chasing workers
          </h2>
          <div className={`mt-6 flex ${WIDE} flex-col gap-4`}>
            <p className={`${BODY} ${WIDE}`}>
              Running an NDIS or aged care organisation requires more than
              having enough workers on the roster today. You need a workforce
              that can support your organisation tomorrow, next month and as
              your services grow.
            </p>
            <p className={`${BODY} ${WIDE}`}>
              But finding suitable workers is only the beginning. There is
              advertising, screening, clearance checks, onboarding, induction,
              training, documentation and ongoing compliance administration.
              When these responsibilities sit entirely with already-busy
              managers and coordinators, recruitment becomes reactive and
              workforce gaps become harder to manage.
            </p>
            <p className={`${BODY} ${WIDE}`}>
              Novada Tech helps take that administrative burden off your team.
              We provide ongoing workforce support to help your organisation
              recruit proactively, prepare new workers efficiently and maintain
              a clearer picture of who is available and ready to work.
            </p>
          </div>

          <p className={`${MICRO} mt-10 text-brand-500`}>
            Three areas we help strengthen
          </p>
          <BoxCards items={AREAS} cols={3} />

          <p className="mt-10 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            Our objective is simple: help you build a dependable workforce
            instead of constantly reacting to staffing emergencies.
          </p>
        </Band>

        {/* ── 3 CUSTOMER PROOF ─────────────────────────────────────── */}
        <Band index="02" label="Customer proof" tone="tint">
          <h2 className={`${D2} text-ink-950`}>
            Supporting organisations across the care sector
          </h2>
          <TestimonialSlider />
        </Band>

        {/* ── 4 THE PROBLEM ────────────────────────────────────────── */}
        <Band index="03" label="The problem">
          <h2 className={`${D2} text-ink-950`}>
            Every staffing gap creates more work for someone else
          </h2>

          <ul className="mt-8 flex flex-col gap-3">
            {TRIGGERS.map((t) => (
              <li
                key={t}
                className="reveal border-l-2 border-ink-200 pl-5 text-base text-ink-700"
              >
                {t}
              </li>
            ))}
          </ul>

          <p className={`${BODY} ${WIDE} mt-8`}>
            Suddenly, someone in your organisation is scrambling to find
            available staff, organise onboarding or arrange external agency
            cover. For many providers, this creates a familiar cycle.
          </p>

          <BoxCards items={CYCLE} cols={2} />

          <p className="mt-10 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            The problem is not always a lack of applicants. Sometimes it is the
            absence of a dependable process for turning suitable applicants
            into appropriately prepared workers, and keeping that workforce
            ready.
          </p>
          <p className={`${BODY} ${WIDE} mt-6`}>
            That is what our Workforce Continuity service is designed to
            improve.
          </p>

          <div className="mt-10">
            <Cta>Let&apos;s strengthen your workforce</Cta>
          </div>
        </Band>

        {/* ── 5 THE SERVICE ────────────────────────────────────────── */}
        <Band index="04" label="The service">
          <h2 className={`${D2} text-ink-950`}>
            Workforce Continuity: a managed workforce support service
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Build a reliable workforce with proactive recruitment, onboarding,
            induction and training. Our Workforce Continuity service provides
            ongoing administrative and operational support across the worker
            lifecycle. Rather than relying on isolated recruitment campaigns or
            repeatedly starting from scratch, we help you establish a more
            consistent approach to recruitment, worker readiness and workforce
            administration.
          </p>

          {/* Six components. Each one carries its own boundary line,
              because each one has a different thing the provider keeps. */}
          <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-6">
            {SERVICE.map((s, i) => (
              <div
                key={s.eyebrow}
                className="reveal flex flex-col rounded-xl border border-ink-100 bg-white p-6 shadow-raise transition-[transform,box-shadow] duration-200 ease-standard hover:-translate-y-0.5 hover:shadow-lift md:p-8"
                style={{
                  ["--reveal-delay" as string]: `${Math.min(i, 4) * 70}ms`,
                }}
              >
                <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-sm font-bold text-white">
                  {s.n}
                </span>
                <p className={`${MICRO} text-brand-500`}>{s.eyebrow}</p>
                <h3 className="mt-3 text-base font-semibold italic text-ink-950">
                  {s.lead}
                </h3>
                <Bullets items={s.items} />
                <p className={`${SMALL} mt-6`}>{s.note}</p>
                <p className={`${SMALL} mt-4 border-t border-ink-100 pt-4`}>
                  <span className="font-semibold text-ink-950">
                    The benefit:
                  </span>{" "}
                  {s.benefit}
                </p>
              </div>
            ))}
          </div>
        </Band>

        {/* ── 6 THE BENEFITS ───────────────────────────────────────── */}
        <Band index="05" label="The benefits">
          <h2 className={`${D2} text-ink-950`}>
            What would a more reliable workforce mean for your organisation?
          </h2>
          <BoxCards items={BENEFITS} cols={3} />

          {/* 🔴 NEVER PROMISE THE FILL. This qualifier is load-bearing and
              sits directly under the agency-dependence claim. */}
          <p className={`${SMALL} ${WIDE} mt-8`}>
            Agency services may still be necessary in some circumstances. Our
            objective is to reduce avoidable reliance, not promise its
            elimination.
          </p>

          <p className="mt-10 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            A stronger workforce does not happen by accident. It comes from
            having consistent recruitment, preparation and administration
            processes.
          </p>

          <div className="mt-10">
            <Cta>Build your workforce plan</Cta>
          </div>
        </Band>

        {/* ── 7 OUR APPROACH ───────────────────────────────────────── */}
        <Band index="06" label="Our approach">
          <h2 className={`${D2} text-ink-950`}>
            We are not just helping you recruit workers. We are helping you
            build workforce continuity.
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Traditional recruitment often focuses on filling a vacancy. But a
            new worker is only useful to your organisation when they are
            suitable for the role, appropriately screened, inducted, trained
            and ready for deployment. That is why our approach considers more
            than recruitment alone.
          </p>
          <BoxCards items={DIFFERENT} cols={3} />
          <p className="mt-10 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            We help manage the work behind your workforce so your organisation
            can focus on delivering care.
          </p>
        </Band>

        {/* ── 8 WHO WE HELP ────────────────────────────────────────── */}
        <Band index="07" label="Who we help">
          <h2 className={`${D2} text-ink-950`}>
            Workforce Continuity for NDIS and aged care providers across
            Australia
          </h2>
          <BoxCards items={WHO} cols={2} />
          <div className="mt-10">
            <Cta>Discuss your workforce needs</Cta>
          </div>
        </Band>

        {/* ── 9 HOW IT WORKS ───────────────────────────────────────── */}
        <Band index="08" label="How it works" tone="tint">
          <h2 className={`${D2} text-ink-950`}>
            Four steps to building a more dependable workforce
          </h2>
          <BoxCards items={STEPS} cols={2} />
          <p className={`${BODY} ${WIDE} mt-10`}>
            The objective is to move from repeated last-minute recruitment
            activity to a more consistent, proactive workforce support model.
          </p>
        </Band>

        {/* ── 10 WHAT YOU RECEIVE ──────────────────────────────────── */}
        <Band index="09" label="What you receive">
          <h2 className={`${D2} text-ink-950`}>
            Ongoing workforce support without building another full internal
            administration function
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Depending on your agreed service scope, Workforce Continuity
            provides:
          </p>
          <BoxCards items={RECEIVE} cols={2} />
          <p className="mt-10 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            You gain a more structured workforce administration process without
            having to manage every step internally.
          </p>
        </Band>

        {/* ── 11 WITH THE ROSTERING AUDIT ──────────────────────────── */}
        <Band index="10" label="With the audit">
          <h2 className={`${D2} text-ink-950`}>
            Two complementary services. One stronger operation.
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Novada Tech provides two distinct solutions for NDIS and aged care
            providers.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-6">
            <div className="reveal flex flex-col rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8">
              <p className={`${MICRO} text-brand-500`}>
                Rostering Audit &amp; Efficiency
              </p>
              <h3 className="mt-3 text-base font-semibold italic text-ink-950">
                Understand where financial and operational improvements may be
                possible.
              </h3>
              <Bullets items={AUDIT_COVERS} />
              <p className={`${SMALL} mt-6 border-t border-ink-100 pt-4`}>
                The audit provides evidence-based findings and an improvement
                roadmap.
              </p>
            </div>

            <div
              className="reveal flex flex-col rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8"
              style={{ ["--reveal-delay" as string]: "70ms" }}
            >
              <p className={`${MICRO} text-brand-500`}>Workforce Continuity</p>
              <h3 className="mt-3 text-base font-semibold italic text-ink-950">
                Build and maintain the workforce capacity needed to support
                ongoing care.
              </h3>
              <Bullets items={CONTINUITY_COVERS} />
              <p className={`${SMALL} mt-6 border-t border-ink-100 pt-4`}>
                A managed service, delivered as ongoing support rather than a
                one-off project.
              </p>
            </div>
          </div>

          {/* ⚠️ NOT A GATE. The audit is not a prerequisite, and saying so
              plainly is what stops the two pillars reading as a funnel. */}
          <p className={`${BODY} ${WIDE} mt-10`}>
            You do not need to purchase a Rostering Audit before engaging
            Workforce Continuity. Both services can be engaged separately based
            on your organisation&apos;s requirements.
          </p>

          <div className="mt-8">
            <Link
              href="/care/rostering"
              className={`${BTN_PRIMARY} w-full text-base sm:w-auto`}
            >
              Explore our Rostering Audit
              <ArrowRight
                aria-hidden
                className="h-4 w-4 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </Band>

        {/* ── 12 FAQ ───────────────────────────────────────────────── */}
        <Band index="11" label="Questions" tone="tint">
          <h2 className={`${D2} text-ink-950`}>Frequently asked questions</h2>
          <Faq />
        </Band>

        {/* ── 13 BOOK. Same layout as /care/rostering#book: rail label,
             full-width embed in the main column. ──────────────────── */}
        <section id="book" className="border-t border-white/10 bg-canvas-ink">
          <div
            className={`${FRAME} ${GUTTER} border-x border-white/10 py-16 md:py-24 lg:py-32`}
          >
            <div className={RAIL_GRID}>
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="flex items-center gap-3 lg:block">
                  <span className={`${MICRO} tabular text-white/55`}>12</span>
                  <span
                    aria-hidden
                    className="h-px w-6 bg-white/20 lg:my-3 lg:h-6 lg:w-px"
                  />
                  <h2 className={`${MICRO} text-white/85`}>Book</h2>
                </div>
              </div>

              <div className="min-w-0">
                <BandHeading dark>
                  Stop waiting for the next staffing problem to start building
                  your workforce.
                </BandHeading>

                <div
                  className={`mt-7 flex ${WIDE} flex-col gap-5 text-base text-white/75`}
                >
                  <p>
                    Every care provider needs people they can rely on. But
                    reliable staffing requires more than advertising vacancies
                    and hoping suitable candidates are available when the roster
                    needs them. It takes consistent recruitment, worker
                    preparation, administrative follow-through and ongoing
                    workforce visibility. That is the work Novada Tech helps you
                    manage.
                  </p>
                </div>

                <p className={`${WIDE} mt-7 text-base text-white/75`}>
                  Book a complimentary 30-minute Workforce Continuity discovery
                  conversation. During the call, we will:
                </p>
                <Bullets
                  tone="dark"
                  items={[
                    "Understand your current workforce structure and recruitment challenges.",
                    "Discuss your existing recruitment, onboarding and compliance processes.",
                    "Identify areas where ongoing administrative support could help.",
                    "Explain our Workforce Continuity service and how it works.",
                    "Discuss suitable next steps, service scope and pricing.",
                  ]}
                />

                <div className="mt-10">
                  {/* ⚠️ desk="care-continuity" resolves to the WORKFORCE
                      calendar 8J16HJQJHvwiqzmxaEEm in BookingEmbed. The
                      rostering page uses care-rostering. Swapping these
                      sends every booking to the wrong coordinator. */}
                  <BookingEmbed
                    desk="care-continuity"
                    source="care-workforce"
                    tone="dark"
                    title="Book your Workforce Continuity call"
                  />
                </div>

                <p className="mt-6 text-sm text-white/55">
                  Free initial consultation. No obligation to proceed.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <DeskFooter />

      {/* ⚠️ CLEARANCE FOR THE STICKY BAR. Without it the bar covers the
          last line of the footer on a phone, where it is tallest because
          the tagline wraps above a full-width button. */}
      <div aria-hidden className="h-28 sm:h-20" />

      {/* 🔴 The calendar sits at the foot of a long page, so a bold action
          has to travel with the reader. Do not remove while it does. */}
      <StickyCta
        label="Book your Workforce Continuity call"
        tagline="Free 30-minute discovery conversation."
        href="#book"
      />
    </div>
  );
}
