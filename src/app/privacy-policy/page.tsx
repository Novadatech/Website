/*
 * /privacy-policy : Australian Privacy Act privacy policy for Novada Tech.
 *
 * REWRITTEN 2026-08-27. The previous version was a generic US-style SaaS
 * template (SMS shortcodes, "Facebook Login", a 30-day deletion promise,
 * an IP notice) that described a business Novada does not run and never
 * mentioned the Privacy Act 1988 (Cth), the Australian Privacy Principles,
 * health information, or the Notifiable Data Breaches scheme. It is
 * replaced entirely.
 *
 * DESIGN: the Desk system from src/app/page.tsx and
 * src/app/why-novada/page.tsx. White canvas, one continuous 1px hairline
 * frame (border-x on every band), #003DDB as the only chromatic accent,
 * #B4501A as the scarce signal colour (here it marks every unfinished
 * placeholder so the founder can see them at a glance), Barlow Condensed
 * bold caps for display, Space Grotesk for micro-caps labels, Inter for
 * body. A legal page is deliberately quieter than a marketing page: no
 * animation, no booking embed, no sticky CTA, a sticky contents rail, a
 * visible last-updated date and generous line height.
 *
 * This file is a SERVER component on purpose. It renders no motion, so it
 * needs no "use client", and that lets the route export its own metadata.
 * DeskNav and DeskFooter are client components and import fine from here.
 *
 * ⚠️ ONE-LINE CHANGE REQUIRED OUTSIDE THIS FILE, NOT MADE HERE:
 * src/components/ConditionalNav.tsx wraps every route that is not listed
 * in BARE_ROUTES with the LEGACY dark Navbar + Footer. "/privacy-policy"
 * is not in that list, so this page will currently render the legacy dark
 * chrome AND the DeskNav/DeskFooter below it. Add "/privacy-policy" to
 * BARE_ROUTES to fix it. The brief for this rewrite forbade editing any
 * other file, so the change is flagged rather than made.
 *
 * DRAFTING RULES APPLIED:
 *  - Australian spelling. No em dashes anywhere.
 *  - No invented facts. Every detail the drafter could not verify is a
 *    visible [bracketed placeholder] in the signal colour, not a
 *    plausible-looking guess. ABN, address, privacy officer, retention
 *    periods other than the 7-year statutory one, and vendor hosting
 *    locations are all placeholders.
 *  - No security certification, accreditation or "fully compliant" claim.
 *  - No legal advice in the page voice, and no claim that this document
 *    has been reviewed by a lawyer.
 *  - Tracking disclosure matches what src/app/layout.tsx actually loads:
 *    Google Tag Manager (container in <head>), Google Analytics and
 *    Google Ads conversion tags managed inside that container, and the
 *    Meta pixel. Nothing else is listed because nothing else runs. The
 *    LeadConnector booking iframe and the route-aware chat widget are
 *    disclosed separately in section 9.
 *  - Legal position verified against the OAIC, AustLII and legislation
 *    registers on 27 August 2026. Statements about what has and has not
 *    commenced are deliberately conservative.
 */

import type { Metadata } from "next";
import DeskNav from "@/components/desk/DeskNav";
import DeskFooter from "@/components/desk/DeskFooter";

export const metadata: Metadata = {
  title: "Privacy Policy | Novada Tech",
  description:
    "How Novada Tech collects, uses, discloses and protects personal information and health information under the Privacy Act 1988 (Cth) and the Australian Privacy Principles.",
};

/* ══════════════════════════════════════════════════════════════════
   DESIGN TOKENS
   Complete class strings so the Tailwind scanner sees the literal
   arbitrary values. Never interpolate a colour into a class.
   ══════════════════════════════════════════════════════════════════ */

const WRAP = "mx-auto w-full max-w-[1240px]";
const PAD = "px-5 sm:px-8 lg:px-12";

const MICRO =
  "font-supply text-[12px] font-medium uppercase tracking-[0.14em]";
const MICRO_TIGHT =
  "font-supply text-[12px] font-medium uppercase tracking-[0.07em]";
const NUM = "font-supply tabular-nums";

const DISPLAY =
  "font-condensed font-bold uppercase leading-[0.95] tracking-[-0.012em]";

/* A legal page is read, not scanned. Line height is the whole design. */
const BODY = "text-[15.5px] leading-[1.78] text-[#454E5C] md:text-[16px]";
const LEAD = "text-[16px] leading-[1.7] text-[#454E5C] md:text-[17.5px]";

const LINK =
  "text-[#003DDB] underline decoration-[#B9CBFF] underline-offset-[3px] transition-colors hover:decoration-[#003DDB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003DDB] focus-visible:ring-offset-2";

/** Effective date. Update this and the version line together. */
const LAST_UPDATED = "27 August 2026";

/* ══════════════════════════════════════════════════════════════════
   SECTION REGISTER
   One source of truth for the contents rail and the section headings,
   so a number can never drift away from its heading.
   ══════════════════════════════════════════════════════════════════ */

type SectionDef = { id: string; title: string };

const SECTIONS: SectionDef[] = [
  { id: "about", title: "About this policy" },
  { id: "who", title: "Who we are, and the two roles we play" },
  { id: "laws", title: "The laws that apply to us" },
  { id: "collect", title: "The information we collect" },
  { id: "health", title: "Health information and other sensitive information" },
  { id: "how", title: "How we collect it" },
  { id: "use", title: "How we use it, and who we disclose it to" },
  { id: "tracking", title: "Cookies, analytics and advertising tracking" },
  { id: "embeds", title: "Third party tools embedded in this website" },
  { id: "overseas", title: "Sending information overseas" },
  { id: "marketing", title: "Marketing, email and SMS" },
  { id: "security", title: "How we protect information" },
  { id: "retention", title: "How long we keep information" },
  { id: "breach", title: "Data breaches" },
  { id: "access", title: "Accessing and correcting your information" },
  { id: "anonymity", title: "Dealing with us anonymously" },
  { id: "adm", title: "Automated decision making" },
  { id: "complaints", title: "Complaints" },
  { id: "changes", title: "Changes to this policy" },
  { id: "contact", title: "How to contact us" },
];

const indexOf = (id: string) => SECTIONS.findIndex((s) => s.id === id);
const numberOf = (id: string) => String(indexOf(id) + 1).padStart(2, "0");
const titleOf = (id: string) => SECTIONS[indexOf(id)]?.title ?? "";

/* ══════════════════════════════════════════════════════════════════
   PRIMITIVES
   ══════════════════════════════════════════════════════════════════ */

/** A numbered section. Heading text is looked up, never retyped. */
function S({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-[#E3E6EC] pt-10 first:border-t-0 first:pt-0"
    >
      <div className="flex items-baseline gap-3">
        <span className={`${MICRO} ${NUM} shrink-0 text-[#9AA3B1]`}>
          {numberOf(id)}
        </span>
        <h2
          className={`${DISPLAY} text-[24px] text-[#0B0E14] sm:text-[28px] md:text-[32px]`}
        >
          {titleOf(id)}
        </h2>
      </div>
      <div className="mt-5 space-y-4">{children}</div>
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className={`${BODY} max-w-[68ch]`}>{children}</p>;
}

/** Sub-heading inside a numbered section. */
function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="pt-2 text-[16px] font-semibold tracking-tight text-[#0B0E14] md:text-[17px]">
      {children}
    </h3>
  );
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="max-w-[68ch] space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className={`${BODY} flex gap-3`}>
          <span
            aria-hidden
            className="mt-[0.72em] h-px w-3 shrink-0 bg-[#C3CAD5]"
          />
          <span className="min-w-0">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Statute citation. Italic title is the Australian citation convention. */
function Act({ name, juris }: { name: string; juris: string }) {
  return (
    <>
      <em className="font-medium text-[#0B0E14]">{name}</em> ({juris})
    </>
  );
}

/** Emphasis for the operative sentence of a section. */
function Key({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-[#0B0E14]">{children}</strong>;
}

/**
 * An unfinished field. Rendered in the scarce signal colour so every gap
 * in this document is visible from across the room and cannot ship by
 * accident. Do not replace one of these with a guess.
 */
function Fill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={`${MICRO_TIGHT} inline-flex rounded-[4px] border border-dashed border-[#E0C3AE] bg-[#FBF2EC] px-[6px] py-[2px] align-baseline normal-case text-[#B4501A]`}
    >
      {children}
    </span>
  );
}

/** A bordered aside for a routing instruction or a boundary statement. */
function Note({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-[68ch] border-l-2 border-[#003DDB] bg-[#F7F8FA] px-5 py-4">
      <p className={`${MICRO} text-[#003DDB]`}>{label}</p>
      <div className="mt-2.5 space-y-3">{children}</div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   HERO
   ══════════════════════════════════════════════════════════════════ */

function Hero() {
  return (
    <section className="border-t border-[#E3E6EC] bg-white">
      <div className={`${WRAP} ${PAD} border-x border-[#E3E6EC] py-12 md:py-16`}>
        <p className={`${MICRO_TIGHT} text-[#003DDB]`}>
          Legal <span className="text-[#C3CAD5]">·</span> Privacy{" "}
          <span className="text-[#C3CAD5]">·</span> Australia
        </p>

        <h1
          className={`${DISPLAY} mt-5 text-[42px] text-[#0B0E14] sm:text-[54px] lg:text-[66px]`}
        >
          Privacy Policy
        </h1>

        <p className={`${LEAD} mt-6 max-w-[68ch]`}>
          Novada Tech runs the desk for Australian healthcare businesses. We
          answer calls and enquiries, make and change bookings, coordinate
          rosters and maintain records, and we do that work inside the systems
          our clients already run. That means we come into contact with{" "}
          <Key>health information</Key> about their patients and participants,
          which Australian privacy law treats as sensitive information and
          protects more strictly than ordinary personal information.
        </p>

        <p className={`${BODY} mt-4 max-w-[68ch]`}>
          This policy explains what we collect, why we collect it, who we
          disclose it to, how long we keep it and what you can do about it. It
          is written for two different readers: someone using this website, and
          someone whose information we handle because their clinic or care
          provider engaged us. Section {numberOf("who")} explains which one you
          are.
        </p>

        <dl className="mt-9 grid gap-px overflow-hidden border border-[#E3E6EC] bg-[#E3E6EC] sm:grid-cols-3">
          {[
            { k: "Last updated", v: LAST_UPDATED },
            { k: "Applies to", v: "novadatech.com.au and our desk services" },
            { k: "Governing law", v: "Privacy Act 1988 (Cth)" },
          ].map((row) => (
            <div key={row.k} className="bg-white px-5 py-4">
              <dt className={`${MICRO} text-[#9AA3B1]`}>{row.k}</dt>
              <dd className="mt-2 text-[14px] font-medium leading-[1.5] text-[#0B0E14]">
                {row.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   CONTENTS RAIL
   Sticky on large screens, a plain list on small ones. Pure anchors,
   no JavaScript, so it works on a printed page and with JS disabled.
   ══════════════════════════════════════════════════════════════════ */

function Contents() {
  return (
    <nav aria-label="Contents" className="lg:sticky lg:top-28 lg:self-start">
      <p className={`${MICRO} text-[#0B0E14]`}>Contents</p>
      <ol className="mt-4 space-y-1.5 border-t border-[#E3E6EC] pt-4 lg:max-h-[70vh] lg:overflow-y-auto">
        {SECTIONS.map((s, i) => (
          <li key={s.id} className="flex gap-2.5">
            <span className={`${MICRO_TIGHT} ${NUM} pt-[3px] text-[#C3CAD5]`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <a
              href={`#${s.id}`}
              className="text-[13.5px] leading-[1.5] text-[#5B6472] transition-colors hover:text-[#003DDB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003DDB] focus-visible:ring-offset-2"
            >
              {s.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ══════════════════════════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════════════════════════ */

export default function PrivacyPolicyPage() {
  return (
    <div data-theme="desk" className="min-h-screen bg-white font-sans">
      <DeskNav />

      <main>
        <Hero />

        <section className="border-t border-[#E3E6EC] bg-white">
          <div
            className={`${WRAP} ${PAD} border-x border-[#E3E6EC] py-12 md:py-16`}
          >
            <div className="grid gap-10 lg:grid-cols-[248px_minmax(0,1fr)] lg:gap-16">
              <Contents />

              <div className="min-w-0 space-y-10">
                {/* ══════════════ 01 ══════════════ */}
                <S id="about">
                  <P>
                    This policy sets out how Novada Tech handles personal
                    information, including health information. It applies to
                    this website, to enquiries and bookings made through it, and
                    to the desk services we provide to Australian clinics and
                    care providers.
                  </P>
                  <P>
                    It describes our practices. It is not legal advice, and it
                    does not replace the privacy policy of the clinic or care
                    provider that holds your record. Where we handle information
                    on behalf of a client, that client&apos;s own policy and
                    consent arrangements govern the record itself, and this
                    policy explains our part in it.
                  </P>
                  <P>
                    This policy is not a collection notice. Where the{" "}
                    <Act name="Privacy Act 1988" juris="Cth" /> requires us to
                    tell you specific things at the moment we collect your
                    information, we do that separately, at that moment.
                  </P>
                </S>

                {/* ══════════════ 02 ══════════════ */}
                <S id="who">
                  <P>
                    Novada Tech is an Australian owned and operated business.
                    Our coordinators are onshore in Australia. We do not
                    offshore the desk work.
                  </P>
                  <List
                    items={[
                      <>
                        <Key>Legal entity and ABN:</Key>{" "}
                        <Fill>[Registered entity name and ABN: to be inserted]</Fill>
                      </>,
                      <>
                        <Key>Registered and postal address:</Key>{" "}
                        <Fill>[Business address: to be inserted]</Fill>
                      </>,
                      <>
                        <Key>Privacy contact:</Key>{" "}
                        <a href="mailto:support@novadatech.com.au" className={LINK}>
                          support@novadatech.com.au
                        </a>{" "}
                        <span className="text-[#C3CAD5]">·</span>{" "}
                        <a href="tel:+61485000813" className={LINK}>
                          +61 485 000 813
                        </a>
                      </>,
                    ]}
                  />

                  <H3>Role one: information we hold in our own right</H3>
                  <P>
                    This covers people who visit this website, people who make
                    an enquiry or a booking with us, our business clients and
                    the people who work for them, our suppliers, and our own
                    workers and job applicants. We decide how that information
                    is handled, and this policy governs it.
                  </P>

                  <H3>Role two: information we handle for a client</H3>
                  <P>
                    This is the larger part of what we do, and it works
                    differently. We work{" "}
                    <Key>inside the client&apos;s own systems</Key>, using
                    access the client grants us, under the client&apos;s
                    instructions and the terms of our service agreement. For
                    clinics that means practice management software such as
                    Cliniko, Halaxy, Dental4Windows, ezyVet or Best Practice.
                    For care providers it means platforms such as ShiftCare,
                    FlowLogic, Brevity or Carelink. Nothing migrates to a Novada
                    system. The client keeps the system of record.
                  </P>
                  <P>
                    In that role the clinic or care provider is generally the
                    organisation with the primary relationship to the patient or
                    participant, and the organisation that holds the record. We
                    handle that information as a service provider, for the
                    client&apos;s purposes, and not for our own.
                  </P>

                  <Note label="If you are a patient or a participant">
                    <P>
                      Your record belongs to your clinic or care provider, not
                      to Novada. Requests to see it, correct it or complain
                      about it should go to them first, because they hold it and
                      they can act on it. If you contact us instead, we will
                      pass your request on to them promptly and tell you we have
                      done so.
                    </P>
                  </Note>

                  <H3>What we do not do</H3>
                  <P>
                    <Key>
                      Novada does not provide clinical services of any kind.
                    </Key>{" "}
                    No triage, no clinical advice, no assessment, no diagnosis
                    and no treatment decision. Anything clinical is escalated to
                    the client&apos;s own team under an escalation protocol
                    agreed with that client in writing. That boundary is a term
                    of our service agreements.
                  </P>
                  <P>
                    <Fill>
                      [My Health Record and healthcare identifiers: confirm
                      whether coordinators ever access the My Health Record
                      system or handle an Individual Healthcare Identifier. If
                      they do, this policy must also address the Healthcare
                      Identifiers Act 2010 (Cth) and the My Health Records Act
                      2012 (Cth)]
                    </Fill>
                  </P>
                </S>

                {/* ══════════════ 03 ══════════════ */}
                <S id="laws">
                  <P>
                    The primary law is the{" "}
                    <Act name="Privacy Act 1988" juris="Cth" /> and the thirteen
                    Australian Privacy Principles in Schedule 1 to that Act,
                    which cover open and transparent management (APP 1),
                    anonymity (APP 2), collection (APPs 3 to 5), use and
                    disclosure (APP 6), direct marketing (APP 7), cross border
                    disclosure (APP 8), identifiers and quality (APPs 9 and 10),
                    security (APP 11) and access and correction (APPs 12 and
                    13).
                  </P>

                  <H3>The small business exemption, and why we do not use it</H3>
                  <P>
                    Section 6D of the{" "}
                    <Act name="Privacy Act 1988" juris="Cth" /> exempts many
                    businesses with an annual turnover of $3 million or less.
                    Two things about that exemption matter here.
                  </P>
                  <List
                    items={[
                      <>
                        <Key>
                          It does not apply to health service providers.
                        </Key>{" "}
                        Section 6D(4)(b) removes the exemption from an entity
                        that provides a health service to another individual and
                        holds health information other than in an employee
                        record. Turnover is irrelevant. Our clinic and care
                        provider clients are covered by the Privacy Act whatever
                        their size.
                      </>,
                      <>
                        <Key>
                          The definition of a health service is broad.
                        </Key>{" "}
                        Section 6FB defines a health service to include an
                        activity performed in relation to an individual that is
                        intended to assess, record, maintain or improve that
                        individual&apos;s health. The line between a clinical
                        service and an administrative service performed on a
                        health record is not always obvious.
                      </>,
                    ]}
                  />
                  <P>
                    For those reasons <Key>we do not rely on the small
                    business exemption</Key>. We handle health information to
                    the standard the Australian Privacy Principles set,
                    regardless of whether a court would find the exemption
                    available to us, and our service agreements require the same
                    thing.
                  </P>
                  <P>
                    Removing the small business exemption generally is a
                    proposed second tranche reform that the Australian
                    Government has agreed to in principle. As at the date of
                    this policy it has not been legislated and no commencement
                    date has been set, so the exemption remains part of the Act.
                  </P>

                  <H3>Amendments in force</H3>
                  <P>
                    The{" "}
                    <Act
                      name="Privacy and Other Legislation Amendment Act 2024"
                      juris="Cth"
                    />{" "}
                    received assent on 10 December 2024 and commenced most of
                    its provisions on that day. Three consequences are relevant
                    to this policy:
                  </P>
                  <List
                    items={[
                      <>
                        APP 11.3 now states expressly that the reasonable steps
                        required to secure personal information include
                        technical and organisational measures.
                      </>,
                      <>
                        A statutory cause of action for serious invasions of
                        privacy, in Schedule 2 to the Privacy Act, commenced on
                        10 June 2025. It allows an individual to sue for
                        intrusion upon seclusion or misuse of information, and
                        it applies more widely than the Australian Privacy
                        Principles do.
                      </>,
                      <>
                        New transparency obligations about automated decision
                        making, in APPs 1.7 to 1.9, commence on 10 December
                        2026. See section {numberOf("adm")}.
                      </>,
                    ]}
                  />

                  <H3>State and territory health records law</H3>
                  <P>
                    State and territory health privacy legislation can apply{" "}
                    <Key>in addition to</Key> the Commonwealth Act, not instead
                    of it, so a single record can be covered by both. The laws
                    most likely to be relevant to our clients are:
                  </P>
                  <List
                    items={[
                      <>
                        <Act
                          name="Health Records and Information Privacy Act 2002"
                          juris="NSW"
                        />
                        , which sets fifteen Health Privacy Principles and
                        applies to private sector persons in New South Wales who
                        are health service providers or who collect, hold or use
                        health information.
                      </>,
                      <>
                        <Act name="Health Records Act 2001" juris="Vic" />, which
                        sets eleven Health Privacy Principles and applies to
                        organisations that handle health information in
                        Victoria.
                      </>,
                      <>
                        <Act
                          name="Health Records (Privacy and Access) Act 1997"
                          juris="ACT"
                        />
                        , which covers health records in the Australian Capital
                        Territory.
                      </>,
                    ]}
                  />

                  <H3>Sector rules our clients pass on to us</H3>
                  <P>
                    Our care provider clients are subject to obligations we
                    support but do not hold ourselves, including the{" "}
                    <Act
                      name="National Disability Insurance Scheme Act 2013"
                      juris="Cth"
                    />{" "}
                    together with the NDIS Code of Conduct and the NDIS Practice
                    Standards, and the{" "}
                    <Act name="Aged Care Act 2024" juris="Cth" />, which
                    commenced on 1 November 2025 and restricts the use and
                    disclosure of protected information. Where a client passes
                    such a requirement to us in our service agreement, we work
                    to it.
                  </P>
                  <P>
                    Electronic and telephone marketing is separately governed by
                    the <Act name="Spam Act 2003" juris="Cth" /> and the{" "}
                    <Act name="Do Not Call Register Act 2006" juris="Cth" />. See
                    section {numberOf("marketing")}.
                  </P>
                </S>

                {/* ══════════════ 04 ══════════════ */}
                <S id="collect">
                  <H3>a. Website visitors</H3>
                  <P>
                    When you open a page on novadatech.com.au, the tools in
                    section {numberOf("tracking")} collect your IP address and
                    the approximate location it suggests, your device type,
                    browser and operating system, the pages you view and how
                    long you spend on them, the page or advertisement that sent
                    you, and cookie and advertising identifiers.
                  </P>

                  <H3>b. Enquiries and bookings</H3>
                  <P>
                    If you contact us or book a review, we collect your name,
                    email address, phone number, business name and role, the
                    type of clinic or care service you run, the appointment time
                    you choose, anything you write to us and the answers to any
                    questions the booking form asks. We also record which page
                    of this website produced the booking, so we know which
                    enquiry came from where.
                  </P>

                  <H3>c. Clients, suppliers and their people</H3>
                  <P>
                    For the businesses we work with, we collect contact details
                    and roles, the system access arrangements the client sets
                    up, and contract and billing information.
                  </P>

                  <H3>
                    d. Information we handle for a client, inside the
                    client&apos;s systems
                  </H3>
                  <P>
                    For the <Key>Patient Access Desk</Key>, working inside a
                    clinic&apos;s practice management software, this can
                    include: patient names and contact details; the reason given
                    for an appointment; the practitioner, service and
                    appointment date and time; referral details and health fund
                    or scheme details where the clinic&apos;s system captures
                    them; cancellation, no-show, recall and reactivation status;
                    and the notes we record in the clinic&apos;s system about
                    each contact. Much of this is health information.
                  </P>
                  <P>
                    For the <Key>Workforce Ops Desk</Key>, working inside a
                    provider&apos;s care management platform, this can include:
                    participant and client names and contact details; service,
                    shift and rostering details; call-off and availability
                    records; notes and escalations recorded during after-hours
                    calls; intake administration records; and worker records
                    covering onboarding, induction, training, qualifications,
                    screening and compliance. Screening records can include
                    criminal record information, which is also sensitive
                    information under the Privacy Act.
                  </P>
                  <P>
                    The employee records exemption in section 7B(3) of the{" "}
                    <Act name="Privacy Act 1988" juris="Cth" /> concerns an
                    organisation&apos;s own current and former employees. We do
                    not treat worker records we handle for a client as exempt
                    employee records.
                  </P>

                  <H3>e. Telephone calls</H3>
                  <P>
                    We answer calls for our clients, so we receive whatever the
                    caller tells us and record the outcome in the client&apos;s
                    system.
                  </P>
                  <P>
                    <Fill>
                      [Call recording: to be confirmed. State plainly whether
                      calls are recorded, who records them, on which numbers,
                      how callers are told before the recording starts, how long
                      recordings are kept and who can listen to them. Recording
                      a call engages the Telecommunications (Interception and
                      Access) Act 1979 (Cth) and the surveillance and listening
                      devices legislation of each State and Territory, so this
                      paragraph must be written from the facts, not assumed]
                    </Fill>
                  </P>

                  <H3>f. Our own people</H3>
                  <P>
                    We collect the information we need to recruit, employ or
                    engage our coordinators and to meet our obligations as an
                    employer.
                  </P>
                </S>

                {/* ══════════════ 05 ══════════════ */}
                <S id="health">
                  <P>
                    Section 6FA of the{" "}
                    <Act name="Privacy Act 1988" juris="Cth" /> defines health
                    information broadly. It includes information or an opinion
                    about an individual&apos;s health or disability, information
                    about a health service provided or to be provided to them,
                    and other personal information collected in the course of
                    providing a health service. An appointment record that names
                    a patient and the practitioner they are seeing is health
                    information.
                  </P>
                  <P>
                    Health information is <Key>sensitive information</Key> under
                    section 6(1) of that Act, and sensitive information carries
                    a higher bar. Under APP 3.3, an organisation must not
                    collect sensitive information unless the individual consents
                    and the collection is reasonably necessary for one or more
                    of the organisation&apos;s functions or activities, unless
                    an exception in the Act applies. Under APP 7.4, sensitive
                    information may only be used or disclosed for direct
                    marketing with the individual&apos;s consent.
                  </P>

                  <H3>How that works in practice for us</H3>
                  <List
                    items={[
                      <>
                        Where we collect or record health information, we do so{" "}
                        <Key>
                          on behalf of and at the direction of the client
                        </Key>
                        , inside the client&apos;s system, for the purpose the
                        client engaged us for. The consent framework covering
                        that record is the client&apos;s, obtained under the
                        client&apos;s own privacy arrangements.
                      </>,
                      <>
                        We use it only for that purpose, and for directly
                        related purposes the individual would reasonably expect,
                        consistent with APP 6.
                      </>,
                      <>
                        We do not sell personal information or health
                        information, and we do not use health information we
                        handle for a client for our own marketing or business
                        development.
                      </>,
                      <>
                        We do not configure the analytics and advertising tools
                        described in section {numberOf("tracking")} to receive
                        health information, and health information from a
                        client&apos;s system is not sent to them.
                      </>,
                    ]}
                  />
                  <Note label="The clinical boundary">
                    <P>
                      Nothing we do is a clinical act. We do not triage, assess,
                      diagnose, advise or treat. If a call raises anything
                      clinical, it goes to the client&apos;s own team under the
                      escalation protocol agreed with that client.
                    </P>
                  </Note>
                </S>

                {/* ══════════════ 06 ══════════════ */}
                <S id="how">
                  <P>
                    Under APP 3.6, an organisation must collect personal
                    information about an individual only from that individual,
                    unless the individual consents to collection from someone
                    else or it is unreasonable or impracticable to collect it
                    directly. We collect information:
                  </P>
                  <List
                    items={[
                      <>
                        <Key>Directly from you</Key>, when you call us, email
                        us, use the booking widget or the chat widget on this
                        website, or speak to one of our coordinators.
                      </>,
                      <>
                        <Key>Automatically from your device</Key>, through the
                        cookies, tags and pixels described in section{" "}
                        {numberOf("tracking")}.
                      </>,
                      <>
                        <Key>From our client, or from the client&apos;s
                        system</Key>, where we are working on that
                        client&apos;s behalf under access the client has granted
                        us.
                      </>,
                      <>
                        <Key>From a third party at a client&apos;s
                        direction</Key>, for example a referrer or another
                        provider, where the client&apos;s own arrangements allow
                        it.
                      </>,
                    ]}
                  />
                  <P>
                    Where we collect a patient&apos;s or participant&apos;s
                    information, we are collecting it for the client, into the
                    client&apos;s record, and the client is responsible for the
                    collection notice that goes with it.
                  </P>
                </S>

                {/* ══════════════ 07 ══════════════ */}
                <S id="use">
                  <P>We use personal information to:</P>
                  <List
                    items={[
                      "answer calls, messages and enquiries for our clients and for ourselves;",
                      "make, reschedule and cancel bookings in a client's system, run recall and reactivation lists, recover cancellations and follow up no-shows;",
                      "administer rosters, coordinate call-offs and after-hours cover, process intake administration and maintain onboarding, induction, training and compliance records for care providers;",
                      "produce the monthly report we give each client, covering enquiries, response times, booking outcomes and reasons lost;",
                      "respond to your enquiry, prepare for a review call and follow up with you;",
                      "operate, secure, measure and improve this website;",
                      "invoice, keep our own business records and meet our legal and tax obligations; and",
                      "handle complaints, disputes and insurance matters.",
                    ]}
                  />

                  <H3>Who we disclose it to</H3>
                  <List
                    items={[
                      <>
                        <Key>The client</Key>, for anything we handle on their
                        behalf. This is the main disclosure, and in most cases
                        the information never leaves the client&apos;s own
                        system.
                      </>,
                      <>
                        <Key>Our coordinators and staff</Key>, limited to the
                        people assigned to that client, under written
                        confidentiality obligations.
                      </>,
                      <>
                        <Key>Technology suppliers</Key> that run this website,
                        our customer relationship management and booking
                        platform, and the analytics and advertising tools in
                        sections {numberOf("tracking")} and{" "}
                        {numberOf("embeds")}.{" "}
                        <Fill>
                          [Other suppliers used to run the desk, for example
                          telephony, email and document storage: to be
                          confirmed and listed by category]
                        </Fill>
                      </>,
                      <>
                        <Key>Professional advisers</Key>, such as our
                        accountants and lawyers, where they need it.
                      </>,
                      <>
                        <Key>Anyone we are required or authorised by law to
                        disclose to</Key>, including a court, tribunal or
                        regulator, or where disclosure is necessary to lessen or
                        prevent a serious threat to life, health or safety.
                      </>,
                    ]}
                  />
                  <P>
                    We do not sell personal information, and we do not disclose
                    it to third parties for their own independent marketing
                    purposes.
                  </P>
                </S>

                {/* ══════════════ 08 ══════════════ */}
                <S id="tracking">
                  <P>
                    This website loads four tracking tools, and only these four:
                  </P>
                  <List
                    items={[
                      <>
                        <Key>Google Tag Manager</Key>, a container that loads
                        the Google tags below.
                      </>,
                      <>
                        <Key>Google Analytics</Key>, which measures how the
                        website is used, managed through that container.
                      </>,
                      <>
                        <Key>Google Ads conversion tracking</Key>, which tells
                        us which advertisement produced an enquiry or a booking,
                        also managed through that container.
                      </>,
                      <>
                        <Key>The Meta pixel</Key>, which measures the
                        performance of advertising on Facebook and Instagram and
                        can be used to build advertising audiences.
                      </>,
                    ]}
                  />
                  <P>
                    Between them these tools collect the website visitor
                    information listed in section {numberOf("collect")}, set
                    cookies and similar identifiers in your browser, and share
                    that information with Google and Meta, who process it on
                    their own infrastructure. See section {numberOf("overseas")}{" "}
                    for where that infrastructure is.
                  </P>
                  <P>
                    <Key>
                      These tools load when a page opens, and this website does
                      not currently present a cookie consent banner.
                    </Key>{" "}
                    If you do not want this collection, you can:
                  </P>
                  <List
                    items={[
                      "block or delete cookies, or use private browsing, through your browser settings;",
                      <>
                        install the Google Analytics opt-out browser add-on from{" "}
                        <a
                          href="https://tools.google.com/dlpage/gaoptout"
                          className={LINK}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          tools.google.com/dlpage/gaoptout
                        </a>
                        ;
                      </>,
                      "adjust the advertising settings in your Google account and your Meta account; or",
                      "use a browser or extension that blocks tracking scripts.",
                    ]}
                  />
                  <P>
                    Blocking cookies and scripts may stop parts of this website
                    working, including the booking widget. The privacy policies
                    of the two providers are at{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      className={LINK}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      policies.google.com/privacy
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://www.facebook.com/privacy/policy"
                      className={LINK}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      facebook.com/privacy/policy
                    </a>
                    .
                  </P>
                  <P>
                    The Office of the Australian Information Commissioner
                    published guidance on tracking pixels and privacy
                    obligations in November 2024. It makes clear that
                    responsibility for a pixel sits with the organisation that
                    deploys it, not with the provider whose code is being used.
                    We treat that responsibility as ours.
                  </P>
                </S>

                {/* ══════════════ 09 ══════════════ */}
                <S id="embeds">
                  <H3>The booking widget</H3>
                  <P>
                    Our booking calendar is embedded from{" "}
                    <span className="font-medium text-[#0B0E14]">
                      link.novadatech.com
                    </span>
                    , which is our customer relationship management and booking
                    platform, LeadConnector. The calendar is an iframe served
                    from that domain, so anything you enter into it goes to that
                    platform and then into our customer records. The widget sets
                    its own cookies and receives the campaign parameters we
                    attach to the embed address, which is how we know which page
                    produced a booking.
                  </P>
                  <P>
                    The booking embed also writes a short value to your
                    browser&apos;s session storage recording which page you
                    booked from, so the confirmation page can greet you
                    correctly. It is cleared when you close the tab.
                  </P>

                  <H3>The chat widget</H3>
                  <P>
                    On some pages of this website, but not all of them, we load
                    a chat widget from{" "}
                    <span className="font-medium text-[#0B0E14]">
                      widgets.leadconnectorhq.com
                    </span>
                    , which is part of the same platform. Where it appears,
                    anything you type into it, including your name and contact
                    details, goes into that platform and becomes an enquiry
                    record.
                  </P>

                  <H3>Links to other sites</H3>
                  <P>
                    This website links to sites we do not run. We are not
                    responsible for their content or their privacy practices,
                    and this policy does not apply to them.
                  </P>
                </S>

                {/* ══════════════ 10 ══════════════ */}
                <S id="overseas">
                  <P>
                    APP 8 and section 16C of the{" "}
                    <Act name="Privacy Act 1988" juris="Cth" /> govern disclosure
                    of personal information to an overseas recipient. Before we
                    disclose, we must take reasonable steps to ensure the
                    recipient does not breach the Australian Privacy Principles,
                    and if the recipient then mishandles the information we can
                    be held accountable for that act as though we had done it
                    ourselves. Reasonable steps is an obligation to act
                    carefully, not a guarantee about what an overseas company
                    will do.
                  </P>
                  <P>The overseas processing that applies to us is:</P>
                  <List
                    items={[
                      <>
                        <Key>Google and Meta.</Key> The website tracking
                        described in section {numberOf("tracking")} sends
                        information to Google and to Meta, who process and store
                        it on infrastructure outside Australia, including in the
                        United States.
                      </>,
                      <>
                        <Key>
                          Our customer relationship management and booking
                          platform.
                        </Key>{" "}
                        Enquiries, bookings and chat messages made through this
                        website are stored in that platform.{" "}
                        <Fill>
                          [Hosting and storage location for the CRM and booking
                          platform, and the countries its support staff operate
                          from: to be confirmed with the provider and stated
                          here]
                        </Fill>
                      </>,
                    ]}
                  />
                  <P>
                    <Key>
                      The desk service itself is delivered onshore.
                    </Key>{" "}
                    Our coordinators are in Australia, and patient and
                    participant records stay in the client&apos;s own system. We
                    do not export a client&apos;s records overseas as part of
                    delivering the service, and we do not send health
                    information to the tracking tools in section{" "}
                    {numberOf("tracking")}.
                  </P>
                </S>

                {/* ══════════════ 11 ══════════════ */}
                <S id="marketing">
                  <H3>Our own marketing</H3>
                  <P>
                    We may send you information about our services if you gave
                    us your details or you would reasonably expect to hear from
                    us, and every message carries a way to stop. Under APP 7.4,
                    sensitive information, including health information, may
                    only be used for direct marketing with consent. To opt out
                    of our marketing, use the unsubscribe link in any email,
                    reply STOP to any SMS, or email{" "}
                    <a href="mailto:support@novadatech.com.au" className={LINK}>
                      support@novadatech.com.au
                    </a>
                    .
                  </P>
                  <P>
                    Commercial electronic messages are governed by the{" "}
                    <Act name="Spam Act 2003" juris="Cth" />, which requires
                    consent, accurate identification of the sender with contact
                    details that stay current for at least thirty days, and a
                    functional unsubscribe facility that works for at least
                    thirty days after the message is sent. Opt-outs must be
                    actioned within five working days, and we action them
                    sooner where we can. Telemarketing calls are governed by the{" "}
                    <Act name="Do Not Call Register Act 2006" juris="Cth" />.
                    Under APP 7.8, APP 7 does not apply to the extent that those
                    Acts apply.
                  </P>

                  <H3>
                    Recalls, reminders and reactivation messages sent for a
                    clinic
                  </H3>
                  <P>
                    When we run a recall list, a reactivation campaign, an
                    appointment reminder or a no-show follow-up, we do it{" "}
                    <Key>as the clinic, not as Novada</Key>. Those are the
                    clinic&apos;s messages, sent from the clinic&apos;s system,
                    to the clinic&apos;s patients, under the clinic&apos;s own
                    consent records and instructions, and opt-outs are recorded
                    in the clinic&apos;s system.
                  </P>
                  <Note label="If you want a clinic's messages to stop">
                    <P>
                      Reply as the message tells you, or contact the clinic
                      directly, because the consent record lives with them. You
                      can also tell us at{" "}
                      <a
                        href="mailto:support@novadatech.com.au"
                        className={LINK}
                      >
                        support@novadatech.com.au
                      </a>{" "}
                      and we will pass it on to the clinic and record it in
                      their system.
                    </P>
                  </Note>
                </S>

                {/* ══════════════ 12 ══════════════ */}
                <S id="security">
                  <P>
                    APP 11 requires us to take reasonable steps to protect
                    personal information from misuse, interference and loss and
                    from unauthorised access, modification or disclosure. Since
                    10 December 2024, APP 11.3 states expressly that those
                    reasonable steps include technical and organisational
                    measures.
                  </P>
                  <P>The measures we rely on are:</P>
                  <List
                    items={[
                      "working inside the client's own system, using credentials the client issues and permissions the client sets, so the record stays in the client's system of record rather than being copied into ours;",
                      "limiting access to the coordinators assigned to that client;",
                      "written confidentiality obligations on everyone who works for us, and onshore Australian staffing;",
                      "access controls and authentication on the systems we use, and encryption in transit on this website; and",
                      "returning or revoking system access at the end of an engagement.",
                    ]}
                  />
                  <Note label="What we are not claiming">
                    <P>
                      We hold no security certification or accreditation, and
                      this policy does not claim one. We do not describe our
                      controls as bank grade, military grade or fully compliant,
                      because those phrases mean nothing and promise everything.
                      No system connected to the internet can be made completely
                      secure, and we cannot guarantee absolute security.
                    </P>
                  </Note>
                </S>

                {/* ══════════════ 13 ══════════════ */}
                <S id="retention">
                  <P>
                    APP 11.2 requires us to take reasonable steps to destroy or
                    de-identify personal information once we no longer need it
                    for any purpose for which it may be used or disclosed, and
                    we are not required by law or a court order to keep it.
                  </P>
                  <List
                    items={[
                      <>
                        <Key>Workforce Ops Desk compliance records.</Key>{" "}
                        Onboarding, induction, training and compliance records
                        we maintain for care provider clients are kept to a{" "}
                        <Key>seven year statutory retention standard</Key>.
                      </>,
                      <>
                        <Key>Records inside a client&apos;s system.</Key> These
                        are kept by the client, under the client&apos;s own
                        retention obligations, which can be long. For example,
                        section 25 of the{" "}
                        <Act
                          name="Health Records and Information Privacy Act 2002"
                          juris="NSW"
                        />{" "}
                        generally requires a health service provider to keep
                        health information for seven years from the last
                        occasion a health service was provided to an adult, and
                        where it was collected while the individual was under
                        eighteen, until that person turns twenty-five. Health
                        Privacy Principle 4 under the{" "}
                        <Act name="Health Records Act 2001" juris="Vic" /> sets a
                        comparable standard.
                      </>,
                      <>
                        <Key>Website enquiries and bookings.</Key>{" "}
                        <Fill>
                          [Retention period for enquiry, booking and chat
                          records held in our CRM: to be confirmed]
                        </Fill>
                      </>,
                      <>
                        <Key>
                          Patient Access Desk working records held by us.
                        </Key>{" "}
                        <Fill>
                          [Retention period for any operational record Novada
                          keeps outside the client&apos;s system, including
                          reporting data and call notes: to be confirmed]
                        </Fill>
                      </>,
                      <>
                        <Key>Business records.</Key> Contracts, invoices and
                        accounting records are kept for as long as our tax,
                        corporate and limitation period obligations require.
                      </>,
                    ]}
                  />
                </S>

                {/* ══════════════ 14 ══════════════ */}
                <S id="breach">
                  <P>
                    The Notifiable Data Breaches scheme in Part IIIC of the{" "}
                    <Act name="Privacy Act 1988" juris="Cth" /> applies to us. An{" "}
                    <Key>eligible data breach</Key> occurs where there is
                    unauthorised access to, unauthorised disclosure of, or loss
                    of personal information, that is likely to result in serious
                    harm to one or more individuals, and the harm has not been
                    prevented by remedial action.
                  </P>
                  <P>Our pathway is:</P>
                  <List
                    items={[
                      "contain the breach and assess it. Where we suspect an eligible data breach, we take all reasonable steps to complete that assessment within thirty days of becoming aware of the grounds for suspicion, and faster wherever we can, because the risk of harm grows with time;",
                      "where we have reasonable grounds to believe an eligible data breach has occurred, notify the Office of the Australian Information Commissioner and the affected individuals as soon as practicable, with what happened, the kinds of information involved and what those individuals should do; and",
                      "where the breach concerns information we handle for a client, notify that client without delay so they can meet their own obligations, and agree with them who notifies the individuals so nobody is told twice and nobody is missed.",
                    ]}
                  />
                  <P>
                    The sensitivity of the information affected is one of the
                    factors in whether serious harm is likely. Health
                    information is among the most sensitive kinds of personal
                    information there is, and we treat any incident involving it
                    accordingly.
                  </P>
                </S>

                {/* ══════════════ 15 ══════════════ */}
                <S id="access">
                  <P>
                    Under APP 12 you may ask for access to the personal
                    information we hold about you, and under APP 13 you may ask
                    us to correct it if it is inaccurate, out of date,
                    incomplete, irrelevant or misleading. We respond within a
                    reasonable period, which the Office of the Australian
                    Information Commissioner considers should generally not
                    exceed thirty days.
                  </P>
                  <P>
                    There is no charge for making an access request, and no
                    charge for a correction. We may charge for the reasonable
                    cost of giving access, and any such charge will not be
                    excessive. We may need to verify your identity first, and if
                    we refuse a request we will tell you why in writing and how
                    to complain.
                  </P>
                  <Note label="Which organisation to ask">
                    <P>
                      If the information is in a <Key>patient or participant
                      record held in a clinic&apos;s or provider&apos;s
                      system</Key>, ask that clinic or provider. They hold the
                      record and they can act on it. Equivalent access and
                      correction rights exist under Health Privacy Principles 6
                      and 7 of the{" "}
                      <Act
                        name="Health Records and Information Privacy Act 2002"
                        juris="NSW"
                      />{" "}
                      and under Part 5 and Health Privacy Principle 6 of the{" "}
                      <Act name="Health Records Act 2001" juris="Vic" />.
                    </P>
                    <P>
                      If the information is something{" "}
                      <Key>Novada holds in its own right</Key>, such as an
                      enquiry you made through this website, email{" "}
                      <a
                        href="mailto:support@novadatech.com.au"
                        className={LINK}
                      >
                        support@novadatech.com.au
                      </a>{" "}
                      and tell us what you are looking for.
                    </P>
                  </Note>
                </S>

                {/* ══════════════ 16 ══════════════ */}
                <S id="anonymity">
                  <P>
                    APP 2 gives you the option of dealing with us anonymously or
                    under a pseudonym where that is lawful and practicable. You
                    can read this website without telling us who you are,
                    subject to the tracking described in section{" "}
                    {numberOf("tracking")}, and you can ask us a general
                    question by phone without giving your name.
                  </P>
                  <P>
                    We cannot make or change a booking in a clinic&apos;s system
                    anonymously, because the clinic&apos;s record has to
                    identify the patient it belongs to.
                  </P>
                </S>

                {/* ══════════════ 17 ══════════════ */}
                <S id="adm">
                  <P>
                    From 10 December 2026, APPs 1.7 to 1.9 of the{" "}
                    <Act name="Privacy Act 1988" juris="Cth" />, inserted by the{" "}
                    <Act
                      name="Privacy and Other Legislation Amendment Act 2024"
                      juris="Cth"
                    />
                    , require an organisation to state in its privacy policy
                    whether it uses a computer program to make, or to do a thing
                    substantially and directly related to making, a decision
                    that could reasonably be expected to significantly affect an
                    individual&apos;s rights or interests, where personal
                    information about that individual is used in the operation
                    of the program. If it does, the policy must set out the
                    kinds of personal information and the kinds of decisions
                    involved. The obligation is a transparency measure.
                  </P>
                  <P>
                    <Fill>
                      [Automated decision making: to be confirmed and completed
                      before 10 December 2026. Establish whether any system
                      Novada or its clients use, including workflow automation,
                      routing logic, scheduling rules or any AI feature in the
                      CRM or a client platform, makes or substantially
                      contributes to a decision significantly affecting an
                      individual, and if so state the kinds of information and
                      decisions here]
                    </Fill>
                  </P>
                </S>

                {/* ══════════════ 18 ══════════════ */}
                <S id="complaints">
                  <H3>Step one: tell us</H3>
                  <P>
                    If you think we have mishandled your personal information,
                    contact us first. Email{" "}
                    <a href="mailto:support@novadatech.com.au" className={LINK}>
                      support@novadatech.com.au
                    </a>{" "}
                    with the subject line{" "}
                    <span className="font-medium text-[#0B0E14]">
                      Privacy complaint
                    </span>
                    , or call{" "}
                    <a href="tel:+61485000813" className={LINK}>
                      +61 485 000 813
                    </a>
                    . We will acknowledge your complaint, investigate it and
                    give you a written response, and we aim to do that within
                    thirty days. Complaints are handled by{" "}
                    <Fill>[Privacy Officer name and title: to be inserted]</Fill>
                    .
                  </P>

                  <H3>Step two: escalate</H3>
                  <P>
                    If you are not satisfied with our response, or we do not
                    respond, you can take it further. These offices generally
                    expect you to have complained to the organisation first and
                    given it about thirty days to respond.
                  </P>
                  <List
                    items={[
                      <>
                        <Key>
                          Office of the Australian Information Commissioner
                        </Key>{" "}
                        for complaints under the{" "}
                        <Act name="Privacy Act 1988" juris="Cth" />.{" "}
                        <a
                          href="https://www.oaic.gov.au"
                          className={LINK}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          oaic.gov.au
                        </a>{" "}
                        <span className="text-[#C3CAD5]">·</span> 1300 363 992{" "}
                        <span className="text-[#C3CAD5]">·</span> online
                        complaint form at webform.oaic.gov.au{" "}
                        <span className="text-[#C3CAD5]">·</span> GPO Box 5288,
                        Sydney NSW 2001.
                      </>,
                      <>
                        <Key>
                          Privacy Commissioner, Information and Privacy
                          Commission NSW
                        </Key>{" "}
                        for health information complaints under the{" "}
                        <Act
                          name="Health Records and Information Privacy Act 2002"
                          juris="NSW"
                        />
                        . 1800 472 679{" "}
                        <span className="text-[#C3CAD5]">·</span>{" "}
                        ipcinfo@ipc.nsw.gov.au{" "}
                        <span className="text-[#C3CAD5]">·</span> ipc.nsw.gov.au.
                      </>,
                      <>
                        <Key>Health Complaints Commissioner, Victoria</Key> for
                        health information complaints under the{" "}
                        <Act name="Health Records Act 2001" juris="Vic" />. 1300
                        582 113 <span className="text-[#C3CAD5]">·</span>{" "}
                        hcc.vic.gov.au.
                      </>,
                    ]}
                  />
                  <P>
                    If your complaint is about a record held by your clinic or
                    care provider rather than by us, raise it with them first.
                    They hold the record.
                  </P>
                </S>

                {/* ══════════════ 19 ══════════════ */}
                <S id="changes">
                  <P>
                    We review this policy from time to time and will update it
                    when our practices, our services or the law change. The
                    current version is always published on this page with the
                    date it took effect, shown at the top and repeated below.
                    Where a change is significant, we will say so on this page.
                  </P>
                  <P>
                    This version took effect on {LAST_UPDATED}. It replaces all
                    earlier versions.
                  </P>
                </S>

                {/* ══════════════ 20 ══════════════ */}
                <S id="contact">
                  <P>
                    For anything in this policy, including access, correction
                    and complaints:
                  </P>
                  <dl className="grid max-w-[68ch] gap-px overflow-hidden border border-[#E3E6EC] bg-[#E3E6EC] sm:grid-cols-2">
                    {[
                      {
                        k: "Email",
                        v: (
                          <a
                            href="mailto:support@novadatech.com.au"
                            className={LINK}
                          >
                            support@novadatech.com.au
                          </a>
                        ),
                      },
                      {
                        k: "Phone",
                        v: (
                          <a href="tel:+61485000813" className={LINK}>
                            +61 485 000 813
                          </a>
                        ),
                      },
                      {
                        k: "Privacy Officer",
                        v: (
                          <Fill>
                            [Privacy Officer name and title: to be inserted]
                          </Fill>
                        ),
                      },
                      {
                        k: "Postal address",
                        v: (
                          <Fill>[Business address: to be inserted]</Fill>
                        ),
                      },
                      {
                        k: "Entity and ABN",
                        v: (
                          <Fill>
                            [Registered entity name and ABN: to be inserted]
                          </Fill>
                        ),
                      },
                      { k: "Effective", v: LAST_UPDATED },
                    ].map((row) => (
                      <div key={row.k} className="bg-white px-5 py-4">
                        <dt className={`${MICRO} text-[#9AA3B1]`}>{row.k}</dt>
                        <dd className="mt-2 text-[14px] leading-[1.55] text-[#0B0E14]">
                          {row.v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <P>
                    You can read the Australian Privacy Principles and the
                    Commissioner&apos;s guidance at{" "}
                    <a
                      href="https://www.oaic.gov.au"
                      className={LINK}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      oaic.gov.au
                    </a>
                    , and the legislation named throughout this policy at{" "}
                    <a
                      href="https://www.legislation.gov.au"
                      className={LINK}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      legislation.gov.au
                    </a>{" "}
                    and on the relevant State legislation registers.
                  </P>
                </S>

                <p
                  className={`${MICRO_TIGHT} max-w-[68ch] border-t border-[#E3E6EC] pt-5 text-[#9AA3B1]`}
                >
                  Real people, onshore{" "}
                  <span className="text-[#C3CAD5]">·</span> Australian owned{" "}
                  <span className="text-[#C3CAD5]">·</span> Nothing clinical,
                  ever
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <DeskFooter />
    </div>
  );
}
