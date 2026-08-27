/*
 * /terms-of-service : website terms of use for Novada Tech.
 *
 * REBUILT 2026-08-27. The previous version was inherited boilerplate from
 * a different business (US SMS short codes, an AI model training licence,
 * "all payments strictly non-refundable", a chargeback penalty clause, a
 * blanket "we may terminate for any reason whatsoever" right, and a
 * liability clause that excluded warranties outright). Several of those
 * terms were unsafe under the Australian Consumer Law and were live
 * candidates for the unfair contract terms regime. They are gone.
 *
 * ─────────────────────────────────────────────────────────────────────
 * DEPLOYMENT BLOCKER, one line, in a file this rewrite was not permitted
 * to touch:
 *   src/components/ConditionalNav.tsx does NOT list "/terms-of-service"
 *   in BARE_ROUTES, so this route is still wrapped in the LEGACY dark
 *   Navbar + Footer. This page now carries DeskNav and DeskFooter, so
 *   until "/terms-of-service" is added to BARE_ROUTES the page renders
 *   with two navs and two footers, and the legacy nav advertises retired
 *   offers ("Growth Infrastructure", "15+ qualified sales meetings every
 *   month, guaranteed") directly above a clause that says we guarantee
 *   no outcomes. Add the route before shipping.
 * ─────────────────────────────────────────────────────────────────────
 *
 * DESIGN: the Desk system, same tokens as src/app/page.tsx and
 * src/app/why-novada/page.tsx. White canvas, #003DDB as the only
 * chromatic accent, one continuous 1px hairline frame down the page
 * (border-x on every band), font-condensed bold caps for display,
 * font-supply micro-caps for interface labels, Inter for body. Legal
 * pages get the quiet treatment: no motion, no ink surfaces, no imagery,
 * generous leading (1.75), a sticky on-page contents rail, and a visible
 * last-updated date. Deliberately a server component so the page can
 * carry its own metadata; there is no layout.tsx on this route.
 *
 * DRAFTING NOTES, so the next person does not undo them by accident:
 *  1. Clause 15 is the load-bearing one. 15.1 preserves non-excludable
 *     rights and every other part of clause 15 is expressed subject to
 *     it. 15.3 uses the s64A resupply limit and, correctly, carries the
 *     two statutory conditions on it: the services must not be of a kind
 *     ordinarily acquired for personal, domestic or household use, and
 *     the limit does not apply where reliance would not be fair or
 *     reasonable (s64A(3)). Do not "tidy" those conditions away.
 *  2. Clause 8 exists because the business cannot promise outcomes.
 *     Nothing anywhere on this page may imply a filled shift, a booked
 *     appointment, a service level or an uptime figure. See ACL s18.
 *  3. Clause 16 is written for the unfair contract terms regime as it
 *     has stood since 9 November 2023. Consequently: no unilateral
 *     variation of a signed agreement, no automatic rollover, no one way
 *     indemnity, no "terminate for any reason", mutual consequential
 *     loss exclusion, and non-exclusive jurisdiction.
 *  4. Placeholders are deliberate and marked in square brackets. Do not
 *     fill them with a plausible guess. The list is in PLACEHOLDERS
 *     below.
 *
 * BINDING COPY RULES: Australian spelling, no em dashes anywhere, no
 * pricing, nothing clinical, no guarantees, and no claim that this page
 * has been legally reviewed. The two dollar figures on this page are
 * statutory thresholds under the Australian Consumer Law, not Novada
 * pricing.
 *
 * PLACEHOLDERS THE FOUNDER MUST FILL BEFORE THIS PAGE IS PUBLISHED:
 *   [Legal entity name: to be inserted]
 *   [ABN: to be inserted]
 *   [Registered office address: to be inserted]
 *   [Booking tool provider: to be inserted]
 *   [Postal address for notices: to be inserted]
 * Also confirm: governing law state (Victoria is carried over from the
 * previous published version, unverified), and the seven year retention
 * standard in clause 3.4.
 */

import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import DeskNav from "@/components/desk/DeskNav";
import DeskFooter from "@/components/desk/DeskFooter";

export const metadata: Metadata = {
  title: "Website Terms of Use | Novada Tech",
  description:
    "The terms that apply to your use of novadatech.com.au. Separate from the services agreement that governs a Novada Tech engagement.",
  robots: { index: true, follow: true },
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
  "font-condensed font-bold uppercase leading-[0.92] tracking-[-0.012em]";

/* Legal body copy. 1.75 leading is the whole point of the page. */
const BODY = "text-[15px] leading-[1.75] text-[#454E5C] md:text-[16px]";

const LINK =
  "text-[#003DDB] underline decoration-[#003DDB]/30 underline-offset-[3px] transition-colors hover:decoration-[#003DDB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003DDB] focus-visible:ring-offset-2";

const LAST_UPDATED = "27 August 2026";

/* ══════════════════════════════════════════════════════════════════
   CLAUSE NUMBERING
   Order is declared once, here. Cross references in the clause text
   read their number out of this map, so reordering a clause cannot
   leave a stale "see clause 12" behind.
   ══════════════════════════════════════════════════════════════════ */

const ORDER = [
  "about",
  "boundary",
  "desk",
  "alongside",
  "clinical",
  "workers",
  "regulatory",
  "outcomes",
  "website",
  "enquiries",
  "messages",
  "privacy",
  "ip",
  "thirdparty",
  "liability",
  "unfair",
  "changes",
  "law",
  "general",
  "contact",
] as const;

type ClauseId = (typeof ORDER)[number];

const NO: Record<ClauseId, number> = ORDER.reduce(
  (acc, id, i) => {
    acc[id] = i + 1;
    return acc;
  },
  {} as Record<ClauseId, number>,
);

/* ══════════════════════════════════════════════════════════════════
   PRIMITIVES
   ══════════════════════════════════════════════════════════════════ */

/** A marked placeholder. Visually obvious so it cannot ship unnoticed. */
function Fill({ children }: { children: ReactNode }) {
  return (
    <span className={`${MICRO_TIGHT} rounded-[3px] border border-dashed border-[#C9B79E] bg-[#FBF5EE] px-1.5 py-[2px] normal-case text-[#8A5A22]`}>
      {children}
    </span>
  );
}

/** A lettered list inside a sub-clause. */
function Items({ items }: { items: ReactNode[] }) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  return (
    <ul className="mt-3 space-y-2.5">
      {items.map((item, i) => (
        <li
          key={i}
          className="grid grid-cols-[22px_minmax(0,1fr)] gap-x-2 sm:grid-cols-[26px_minmax(0,1fr)]"
        >
          <span className={`${NUM} pt-[1px] text-[13px] text-[#9AA3B1]`}>
            ({letters[i]})
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * A pulled out notice. Used three times only: the scope boundary, the
 * clinical exclusion, and the emergency line. Scarcity is the point.
 */
function Notice({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-6 border-l-2 border-[#003DDB] bg-[#F5F8FF] py-4 pl-5 pr-5">
      <p className={`${MICRO} text-[#003DDB]`}>{label}</p>
      <div className={`${BODY} mt-2.5 text-[#2B3340]`}>{children}</div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   CLAUSE CONTENT
   `subs` are auto numbered n.1, n.2 ... from the clause's position in
   ORDER, so the printed numbering and the cross references cannot
   drift apart.
   ══════════════════════════════════════════════════════════════════ */

type Clause = {
  id: ClauseId;
  title: string;
  subs: ReactNode[];
  notice?: { label: string; body: ReactNode };
};

const CLAUSES: Clause[] = [
  {
    id: "about",
    title: "Who we are and what these terms cover",
    subs: [
      <>
        This website, novadatech.com.au, is operated by Novada Tech,{" "}
        <Fill>[Legal entity name: to be inserted]</Fill>, ABN{" "}
        <Fill>[ABN: to be inserted]</Fill>, of{" "}
        <Fill>[Registered office address: to be inserted]</Fill> (in these
        terms, &ldquo;Novada Tech&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;
        and &ldquo;our&rdquo;).
      </>,
      <>
        These terms of use (the &ldquo;Terms&rdquo;) apply to your access to
        and use of this website, to any enquiry you send us through it, and to
        any review call you book through it. &ldquo;You&rdquo; means the person
        or organisation using the website.
      </>,
      <>
        By using this website you agree to these Terms. If you do not agree to
        them, please do not use the website.
      </>,
      <>
        We may publish additional terms next to a particular page, form or
        tool. Where that happens, those additional terms apply in addition to
        these Terms, and if there is an inconsistency the additional terms
        apply to that page, form or tool only.
      </>,
      <>
        In these Terms, a reference to a statute includes any statute that
        amends or replaces it, headings are for convenience and do not affect
        meaning, and &ldquo;including&rdquo; and similar words are not words of
        limitation.
      </>,
    ],
  },

  {
    id: "boundary",
    title: "These Terms are not your services agreement",
    subs: [
      <>
        These Terms govern the website. They do not govern the services we
        provide to clients.
      </>,
      <>
        If we work together, the engagement is governed by a separate written
        services agreement signed by both of us, together with the onboarding
        documents it refers to. Those documents, and not this page, set out
        scope, delegated authority, escalation protocols, hours of cover, fees,
        term, renewal, exit, confidentiality, data handling, insurance and
        liability for the services.
      </>,
      <>
        Where anything in these Terms conflicts with a signed services
        agreement between you and us, the signed services agreement prevails to
        the extent of the inconsistency.
      </>,
      <>
        Nothing on this website is an offer capable of acceptance. Sending an
        enquiry, booking a call or speaking with us does not create a services
        agreement and does not oblige either of us to enter one.
      </>,
      <>
        We are not attempting to set out the terms of an engagement on this
        page. Please do not treat a description on this website as a substitute
        for reading the services agreement.
      </>,
    ],
    notice: {
      label: "Read this first",
      body: (
        <>
          These are website terms. If you are a client, or you are considering
          becoming one, the services agreement you sign is the document that
          governs the work, and it prevails over this page wherever the two
          differ.
        </>
      ),
    },
  },

  {
    id: "desk",
    title: "What the desk does",
    subs: [
      <>
        We run the desk for Australian healthcare businesses. This website
        describes two service lines.
      </>,
      <>
        The Patient Access Desk is for private healthcare clinics, including
        dental, physiotherapy, occupational therapy, psychology, podiatry,
        speech pathology and veterinary practices. Coordinators answer the
        clinic&apos;s calls, web enquiries and messages, including in the
        evenings and on Saturday; make, reschedule and cancel bookings inside
        the clinic&apos;s own practice management software; run recall and
        reactivation lists; recover cancellations; follow up missed
        appointments; and deliver a monthly report.
      </>,
      <>
        The Workforce Ops Desk is for NDIS, home care and aged care providers.
        It covers rostering administration, after-hours call handling and
        call-off coordination, intake administration, onboarding, induction and
        training records, and the maintenance of compliance records, worked
        inside the provider&apos;s own systems.
      </>,
      <>
        Records we maintain on your behalf are kept for the retention period
        recorded in your services agreement. For the Workforce Ops Desk that
        period is set to a seven year standard, so that it sits with the record
        keeping periods our care sector clients work to. The period that binds
        us is the one written into your services agreement.
      </>,
      <>
        The descriptions on this website are a general summary, written for
        people deciding whether to speak with us. The scope that binds us is
        the scope written into your services agreement.
      </>,
    ],
  },

  {
    id: "alongside",
    title: "Alongside your team, not instead of it",
    subs: [
      <>
        We work alongside your people. We do not replace your front desk, your
        coordinators, or any other role in your organisation, and we do not
        describe our service as doing so.
      </>,
      <>
        We act within delegated authority that is documented at onboarding.
        That document records what we may do, what we may not do, and who we
        escalate to. We do not act outside it.
      </>,
      <>
        We work inside your systems. You remain the system of record for your
        patient, client and participant information, and you remain the entity
        responsible for that information under privacy law. Nothing migrates to
        us and nothing of yours is replaced.
      </>,
      <>Our coordinators are located onshore in Australia.</>,
    ],
  },

  {
    id: "clinical",
    title: "Nothing clinical",
    subs: [
      <>
        We do not provide clinical services of any kind. We do not triage. We
        do not assess. We do not give clinical, medical, health, allied health,
        veterinary or care advice, and we do not make or contribute to clinical
        decisions.
      </>,
      <>
        Anything clinical, and any emergency, is routed to your own people
        under an escalation protocol agreed in writing before we take a single
        call.
      </>,
      <>
        Nothing on this website is clinical, medical, veterinary, legal,
        financial or tax advice, and nothing on it should be relied on as
        advice of any kind.
      </>,
      <>
        Do not use this website, our contact forms, our booking tool or our
        chat to report an emergency, a safeguarding concern, a reportable
        incident or a clinical event. Those channels are not monitored for that
        purpose.
      </>,
    ],
    notice: {
      label: "In an emergency",
      body: (
        <>
          If you or another person needs urgent help, call{" "}
          <span className={`${NUM} font-semibold text-[#0B0E14]`}>000</span>.
          This website is not a channel for urgent or clinical matters.
        </>
      ),
    },
  },

  {
    id: "workers",
    title: "We do not supply workers",
    subs: [
      <>
        We are not a staffing agency, a labour hire provider, an employment
        agency or a recruitment agency. We do not supply workers to you and we
        do not recruit workers for you.
      </>,
      <>
        Our coordinators are our own personnel. Providing the services does not
        make them your employees, contractors or workers, and does not create
        an employment, labour hire or agency relationship between you and them.
      </>,
      <>
        Where we coordinate a shift, we are administering your roster, your
        worker records and your communications with your own workforce. The
        engagement of those workers, their pay, their supervision and their
        conduct remain yours.
      </>,
    ],
  },

  {
    id: "regulatory",
    title: "Your own regulatory obligations",
    subs: [
      <>
        If you are an NDIS provider, you retain your own obligations under the
        National Disability Insurance Scheme Act 2013 (Cth) and the rules made
        under it, including the National Disability Insurance Scheme (Code of
        Conduct) Rules 2018 (Cth) and the National Disability Insurance Scheme
        (Provider Registration and Practice Standards) Rules 2018 (Cth).
      </>,
      <>
        If you are an aged care or home care provider, you retain your own
        obligations under the Aged Care Act 2024 (Cth), which commenced on 1
        November 2025 and replaced the Aged Care Act 1997 (Cth), and under the
        rules and standards made under it.
      </>,
      <>
        If you are a healthcare clinic, you retain your own obligations under
        the Health Practitioner Regulation National Law as it applies in your
        state or territory, and under any professional, accreditation or
        registration standards that apply to your practice.
      </>,
      <>
        Our role is back-office administration carried out under delegated
        authority. In providing the services we do not act as a registered NDIS
        provider, an approved aged care provider or a registered health
        practitioner, we do not hold ourselves out as any of those, and we do
        not assume your obligations.
      </>,
      <>
        Quality and safeguarding, clinical governance, incident management and
        reporting, complaints handling, restrictive practices and worker
        screening remain yours. Where your delegated authority records an
        administrative step we take in support of one of those processes, we
        take that step as your agent and to your instructions, and the
        obligation itself stays with you.
      </>,
      <>
        You are responsible for making sure that the delegated authority you
        give us, and the access you give us to your systems, is lawful and
        consistent with your own obligations and with your agreements with your
        patients, clients, participants and workers.
      </>,
    ],
  },

  {
    id: "outcomes",
    title: "No guarantee of outcomes",
    subs: [
      <>
        We do not guarantee outcomes. We do not guarantee that a shift will be
        filled, that a call-off will be covered, that an appointment will be
        booked or kept, that a recall or reactivation list will convert, or
        that your revenue will change.
      </>,
      <>
        Outcomes depend on matters outside our control, including the
        availability of workers and carers, the availability of your
        practitioners, the decisions of your patients, clients and
        participants, your own staffing, rosters and systems, and the
        performance of third party software and telecommunications.
      </>,
      <>
        Nothing on this website is a guarantee, a warranty, a service level, a
        response time commitment or an uptime commitment. Any service level or
        availability commitment we make will be written into your services
        agreement. If it is not written there, we have not made it.
      </>,
      <>
        Descriptions of process, examples and illustrations on this website are
        general. They are not a representation that you will achieve any
        particular result.
      </>,
      <>
        This clause does not exclude, restrict or modify any right or remedy
        you have under the Australian Consumer Law or under any other law where
        that would be unlawful. See clause{" "}
        <span className={NUM}>{NO.liability}</span>.
      </>,
    ],
  },

  {
    id: "website",
    title: "Using this website",
    subs: [
      <>
        You may view, download and print pages of this website for your own
        internal business purposes.
      </>,
      <>
        You must not:
        <Items
          items={[
            <>use the website unlawfully or for an unlawful purpose;</>,
            <>
              interfere with, or attempt to interfere with, the security or
              proper operation of the website;
            </>,
            <>
              scrape, harvest or systematically extract content or contact
              details from the website;
            </>,
            <>
              use automated means to submit forms or bookings, or to generate
              traffic;
            </>,
            <>impersonate another person or organisation; or</>,
            <>
              reproduce, republish, sell or otherwise commercially exploit our
              content without our written permission.
            </>,
          ]}
        />
      </>,
      <>
        We aim to keep the website available, current and accurate, but we do
        not commit to it being available at all times or free of errors, and we
        may change, suspend or withdraw any part of it. Clause{" "}
        <span className={NUM}>{NO.liability}</span> applies to this clause.
      </>,
      <>
        We may restrict or block access to the website where your use breaches
        these Terms, is unlawful, or threatens the security or operation of the
        website or the use of it by others. Where it is reasonable and lawful
        to do so, we will tell you why.
      </>,
    ],
  },

  {
    id: "enquiries",
    title: "Enquiries, bookings and the third party booking tool",
    subs: [
      <>
        You can book a review call through a scheduling tool embedded on this
        website and operated by a third party,{" "}
        <Fill>[Booking tool provider: to be inserted]</Fill>. Information you
        submit through that tool is collected and processed by that provider as
        well as by us, under that provider&apos;s own terms and privacy policy
        as well as ours.
      </>,
      <>
        You must give us accurate information, and you must be authorised to
        provide any information you submit about another person or
        organisation.
      </>,
      <>
        Do not submit patient, client or participant personal information
        through any form, booking tool or chat on this website, and in
        particular do not submit health information. Those channels are not set
        up to receive it. If information of that kind needs to reach us, we
        will agree a secure channel with you in writing first.
      </>,
      <>
        Booking a call is not an application, an engagement or a commitment by
        either of us, and we may decline or reschedule a call.
      </>,
      <>
        If we record a call, we will tell you at the time, and you may ask us
        not to.
      </>,
    ],
  },

  {
    id: "messages",
    title: "Electronic messages",
    subs: [
      <>
        If you contact us, you agree that we may reply using the channel you
        used and the contact details you gave us.
      </>,
      <>
        Where you consent to receive SMS or email updates from us, message
        frequency varies, and your carrier&apos;s standard message and data
        charges may apply. Carriers are not responsible for delayed or
        undelivered messages.
      </>,
      <>
        You can opt out of our marketing messages at any time by replying STOP
        to an SMS, using the unsubscribe link in an email, or emailing us at{" "}
        <a href="mailto:support@novadatech.com.au" className={LINK}>
          support@novadatech.com.au
        </a>
        . We handle commercial electronic messages in accordance with the Spam
        Act 2003 (Cth).
      </>,
      <>
        Opting out of marketing does not stop operational messages we need to
        send you about services you are already receiving.
      </>,
    ],
  },

  {
    id: "privacy",
    title: "Privacy",
    subs: [
      <>
        How we handle personal information is set out in our{" "}
        <Link href="/privacy-policy" className={LINK}>
          Privacy Policy
        </Link>
        , which forms part of these Terms. We are not restating it here.
      </>,
      <>
        We handle personal information in accordance with the Privacy Act 1988
        (Cth) and the Australian Privacy Principles.
      </>,
      <>
        For the services, you hold the relationship with your patients, clients
        and participants, you remain the entity responsible for their
        information, and our handling of it is governed by your services
        agreement rather than by these Terms.
      </>,
      <>
        If you have a privacy concern, raise it with us first at{" "}
        <a href="mailto:support@novadatech.com.au" className={LINK}>
          support@novadatech.com.au
        </a>
        . If you are not satisfied with our response, you can complain to the
        Office of the Australian Information Commissioner.
      </>,
    ],
  },

  {
    id: "ip",
    title: "Intellectual property",
    subs: [
      <>
        We or our licensors own the content of this website, including its
        text, layout, graphics, photographs, video, code and the arrangement of
        them, and the templates, checklists, report formats and process
        documents we use in delivering the services.
      </>,
      <>
        We grant you a limited, non-exclusive, revocable licence to access and
        view the website for the purposes described in clause{" "}
        <span className={NUM}>{NO.website}.1</span>. No other rights are
        granted.
      </>,
      <>
        &ldquo;Novada&rdquo;, &ldquo;Novada Tech&rdquo;, &ldquo;The Patient
        Access Desk&rdquo; and &ldquo;The Workforce Ops Desk&rdquo; are used by
        us as trade marks. You must not use them without our written
        permission, except to refer to us fairly and accurately.
      </>,
      <>
        Ownership of your data, and of material we create for you in the course
        of the services, is dealt with in your services agreement. Nothing in
        these Terms transfers ownership of your data to us, and nothing in
        these Terms gives us a licence to use your data to train any model.
      </>,
      <>
        If you send us an unsolicited suggestion about the website, we may act
        on it without any obligation to you. We do not claim ownership of
        anything you already own.
      </>,
    ],
  },

  {
    id: "thirdparty",
    title: "Third party websites and services",
    subs: [
      <>
        This website links to, and embeds, services operated by others,
        including the scheduling tool described in clause{" "}
        <span className={NUM}>{NO.enquiries}.1</span> and the analytics and
        advertising tools described in our{" "}
        <Link href="/privacy-policy" className={LINK}>
          Privacy Policy
        </Link>
        .
      </>,
      <>
        We do not control those services and we are not responsible for their
        content, their terms, their availability or their handling of your
        information. A link is not an endorsement.
      </>,
      <>
        Access to any client portal we make available is governed by your
        services agreement and by any access terms provided with it.
      </>,
    ],
  },

  {
    id: "liability",
    title: "Consumer guarantees and our liability",
    subs: [
      <>
        <span className="font-semibold text-[#0B0E14]">
          Non-excludable rights.
        </span>{" "}
        Nothing in these Terms excludes, restricts or modifies any guarantee,
        condition, warranty, right or remedy that applies to you under the
        Australian Consumer Law, being Schedule 2 to the Competition and
        Consumer Act 2010 (Cth), or under any other law, where doing so would
        be unlawful. Every other part of this clause is read subject to this
        sub-clause and is limited so far as is necessary to give effect to it.
      </>,
      <>
        <span className="font-semibold text-[#0B0E14]">
          You may be a consumer even though you are a business.
        </span>{" "}
        Under the Australian Consumer Law, services can be acquired as a
        consumer in more than one way. One of them is where the amount paid or
        payable for the services does not exceed the amount prescribed for
        that purpose, which has been{" "}
        <span className={`${NUM} font-medium text-[#0B0E14]`}>$100,000</span>{" "}
        since 1 July 2021. Whether you are a consumer in a particular case is a
        question of law, and this clause does not decide it.
      </>,
      <>
        <span className="font-semibold text-[#0B0E14]">
          Limit permitted for business services.
        </span>{" "}
        Where the law allows us to limit our liability for a failure to comply
        with a consumer guarantee, and the services are not of a kind
        ordinarily acquired for personal, domestic or household use or
        consumption, our liability for that failure is limited, at our option,
        to supplying the services again or paying the cost of having the
        services supplied again. That limit is the one permitted by section 64A
        of the Australian Consumer Law, and it does not apply where you
        establish that it would not be fair or reasonable for us to rely on it.
      </>,
      <>
        Subject to sub-clauses{" "}
        <span className={NUM}>
          {NO.liability}.1 to {NO.liability}.3
        </span>{" "}
        and to the extent the law permits, we are not liable to you for loss
        arising out of your access to, use of, or inability to use this
        website, or your reliance on anything published on it.
      </>,
      <>
        Subject to sub-clauses{" "}
        <span className={NUM}>
          {NO.liability}.1 to {NO.liability}.3
        </span>{" "}
        and to the extent the law permits, neither you nor we are liable to the
        other under these Terms for indirect or consequential loss, or for loss
        of profit, loss of revenue, loss of goodwill, loss of anticipated
        savings, loss of opportunity, or loss of or corruption of data.
      </>,
      <>
        Either party&apos;s liability is reduced to the extent that the other
        party, or a person that other party is responsible for, caused or
        contributed to the loss.
      </>,
      <>
        Nothing in these Terms limits liability for fraud, or for death or
        personal injury, to the extent that liability cannot lawfully be
        limited.
      </>,
      <>
        Liability for the services we supply to clients is dealt with in the
        services agreement, not in these Terms.
      </>,
    ],
  },

  {
    id: "unfair",
    title: "Standard form contract and unfair terms",
    subs: [
      <>
        These Terms are a standard form contract. We publish them and you do
        not negotiate them.
      </>,
      <>
        If you are a consumer, or a small business, for the purposes of Part
        2-3 of the Australian Consumer Law, the unfair contract terms
        provisions apply to these Terms. Since 9 November 2023 it has been
        unlawful, and not merely ineffective, to propose, apply or rely on an
        unfair term in a standard form consumer or small business contract.
      </>,
      <>
        Under the test that has applied since that date, a business is a small
        business for this purpose if it employs fewer than 100 people, or if
        its turnover for the previous income year was less than{" "}
        <span className={`${NUM} font-medium text-[#0B0E14]`}>$10 million</span>
        .
      </>,
      <>
        A term that is unfair is void. If a term of these Terms is found to be
        unfair, it is severed and the rest of these Terms continue to apply.
      </>,
      <>
        We have written these Terms to avoid one sided rights. They do not give
        us a right to vary a signed services agreement on our own, they do not
        create an automatic renewal without an exit, they do not contain an
        indemnity that runs only one way, and they do not let us terminate for
        any reason at all. If you think a term here is unfair, tell us at{" "}
        <a href="mailto:support@novadatech.com.au" className={LINK}>
          support@novadatech.com.au
        </a>{" "}
        and we will look at it.
      </>,
    ],
  },

  {
    id: "changes",
    title: "Changes to these Terms",
    subs: [
      <>
        We may update these Terms. The version published on this page at the
        time you use the website is the version that applies to that use, and
        changes do not apply retrospectively.
      </>,
      <>
        The date of the current version is shown at the top of this page. Where
        a change is material we will note it there.
      </>,
      <>
        A change to these Terms does not vary a signed services agreement. That
        agreement can only be varied in the way it says it can be varied.
      </>,
      <>
        If you do not agree with an updated version, you can stop using the
        website. This clause gives us no right to change what you have already
        agreed or already paid for.
      </>,
    ],
  },

  {
    id: "law",
    title: "Governing law and jurisdiction",
    subs: [
      <>
        These Terms are governed by the laws in force in Victoria, Australia,
        and by the Commonwealth laws that apply there.
      </>,
      <>
        You and we submit to the non-exclusive jurisdiction of the courts of
        Victoria and of the courts entitled to hear appeals from them.
      </>,
      <>
        Nothing in this clause prevents you from taking a matter to a court,
        tribunal, ombudsman or regulator that has jurisdiction where you are.
      </>,
    ],
  },

  {
    id: "general",
    title: "General",
    subs: [
      <>
        If a provision of these Terms is void, unenforceable or unlawful, it is
        severed and the remaining provisions continue in force.
      </>,
      <>
        A failure or delay by either of us in exercising a right under these
        Terms is not a waiver of that right.
      </>,
      <>
        These Terms, and the documents they refer to, are the whole of what is
        agreed between us about this website. This sub-clause does not limit
        our responsibility for a statement we have made that is misleading or
        deceptive.
      </>,
      <>
        We may assign or novate these Terms as part of a sale or restructure of
        our business, and we will tell you if we do. Otherwise neither of us
        may assign these Terms without the other&apos;s consent, which must not
        be unreasonably withheld.
      </>,
    ],
  },

  {
    id: "contact",
    title: "Complaints and contact",
    subs: [
      <>
        If something is wrong, please tell us first. Email{" "}
        <a href="mailto:support@novadatech.com.au" className={LINK}>
          support@novadatech.com.au
        </a>{" "}
        or call{" "}
        <a href="tel:+61485000813" className={`${LINK} ${NUM}`}>
          +61 485 000 813
        </a>
        . We will acknowledge your complaint and tell you who is handling it.
      </>,
      <>
        Notices to us under these Terms must be in writing, by email to the
        address above or by post to{" "}
        <Fill>[Postal address for notices: to be inserted]</Fill>.
      </>,
      <>
        If we cannot resolve a consumer law matter with you, you can contact
        the Australian Competition and Consumer Commission or the consumer
        protection agency in your state or territory. For privacy matters, see
        clause <span className={NUM}>{NO.privacy}.4</span>.
      </>,
    ],
  },
];

/* ══════════════════════════════════════════════════════════════════
   LAYOUT
   ══════════════════════════════════════════════════════════════════ */

function StatusStrip() {
  return (
    <div className="border-b border-[#E3E6EC] bg-[#F7F8FA]">
      <div
        className={`${WRAP} ${PAD} flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-x border-[#E3E6EC] py-2.5`}
      >
        <span className={`${MICRO} text-[#5B6472]`}>
          <span className="font-semibold text-[#0B0E14]">Legal</span>{" "}
          <span className="text-[#C3CAD5]">·</span> Website terms of use
        </span>
        <span className={`${MICRO_TIGHT} text-[#5B6472]`}>
          Last updated{" "}
          <span className={`${NUM} font-semibold text-[#0B0E14]`}>
            {LAST_UPDATED}
          </span>
        </span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="border-t border-[#E3E6EC] bg-white">
      <div className={`${WRAP} ${PAD} border-x border-[#E3E6EC] py-12 md:py-16`}>
        <p className={`${MICRO_TIGHT} text-[#003DDB]`}>
          Novada Tech <span className="text-[#C3CAD5]">·</span> Australia
        </p>

        <h1
          className={`${DISPLAY} mt-5 max-w-[900px] text-[40px] text-[#0B0E14] sm:text-[54px] lg:text-[64px]`}
        >
          Website terms of use
        </h1>

        <p className="mt-6 max-w-[680px] text-[16px] leading-[1.7] text-[#454E5C] md:text-[17px]">
          These terms apply to your use of novadatech.com.au. They are not the
          agreement under which we run a desk for your clinic or your care
          organisation. That work is governed by a separate services agreement
          you sign with us.
        </p>

        <dl className="mt-9 grid max-w-[760px] gap-x-10 gap-y-5 border-t border-[#E3E6EC] pt-6 sm:grid-cols-3">
          <div>
            <dt className={`${MICRO} text-[#9AA3B1]`}>Last updated</dt>
            <dd className={`${NUM} mt-2 text-[15px] text-[#0B0E14]`}>
              {LAST_UPDATED}
            </dd>
          </div>
          <div>
            <dt className={`${MICRO} text-[#9AA3B1]`}>Applies to</dt>
            <dd className="mt-2 text-[15px] text-[#0B0E14]">
              novadatech.com.au
            </dd>
          </div>
          <div>
            <dt className={`${MICRO} text-[#9AA3B1]`}>Governing law</dt>
            <dd className="mt-2 text-[15px] text-[#0B0E14]">
              Victoria, Australia
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function Contents() {
  return (
    <nav aria-labelledby="contents-heading" className="lg:sticky lg:top-28">
      <h2 id="contents-heading" className={`${MICRO} text-[#0B0E14]`}>
        Contents
      </h2>
      <span
        aria-hidden
        className="mt-3 block h-px w-6 bg-[#E3E6EC] lg:h-6 lg:w-px"
      />
      <ol className="mt-4 space-y-2.5 lg:mt-5">
        {CLAUSES.map((c) => (
          <li key={c.id}>
            <a
              href={`#${c.id}`}
              className="group grid grid-cols-[26px_minmax(0,1fr)] gap-x-2 text-[13px] leading-[1.5] text-[#5B6472] transition-colors hover:text-[#003DDB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003DDB] focus-visible:ring-offset-2"
            >
              <span className={`${NUM} text-[#9AA3B1] group-hover:text-[#003DDB]`}>
                {NO[c.id]}.
              </span>
              <span>{c.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function ClauseBlock({ clause }: { clause: Clause }) {
  const n = NO[clause.id];
  return (
    <section id={clause.id} className="scroll-mt-28 border-t border-[#E3E6EC] py-9 first:border-t-0 first:pt-0 md:py-11">
      <h2 className="flex items-baseline gap-3">
        <span className={`${NUM} ${MICRO} text-[#003DDB]`}>{n}</span>
        <span className="text-[20px] font-semibold tracking-tight text-[#0B0E14] md:text-[22px]">
          {clause.title}
        </span>
      </h2>

      <div className="mt-6 space-y-5">
        {clause.subs.map((sub, i) => (
          <div
            key={i}
            className="grid grid-cols-[42px_minmax(0,1fr)] gap-x-3 sm:grid-cols-[52px_minmax(0,1fr)] sm:gap-x-4"
          >
            <span className={`${NUM} pt-[3px] text-[13px] text-[#9AA3B1]`}>
              {n}.{i + 1}
            </span>
            <div className={`${BODY} max-w-[680px]`}>{sub}</div>
          </div>
        ))}
      </div>

      {clause.notice ? (
        <div className="sm:pl-[52px]">
          <div className="max-w-[680px]">
            <Notice label={clause.notice.label}>{clause.notice.body}</Notice>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function Body() {
  return (
    <section className="border-t border-[#E3E6EC] bg-white">
      <div className={`${WRAP} ${PAD} border-x border-[#E3E6EC] py-12 md:py-16`}>
        <div className="grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
          <div className="lg:self-start">
            <Contents />
          </div>

          <div className="min-w-0">
            {CLAUSES.map((c) => (
              <ClauseBlock key={c.id} clause={c} />
            ))}

            {/* Closing note. Deliberately not a claim of legal review. */}
            <div className="mt-12 border-t border-[#E3E6EC] pt-8">
              <p className={`${MICRO} text-[#9AA3B1]`}>About this page</p>
              <p className="mt-3 max-w-[680px] text-[15px] leading-[1.75] text-[#5B6472]">
                These Terms describe how we operate this website and where the
                boundary sits between the website and a signed services
                agreement. They do not set out the full extent of your rights
                under Australian law, and they are not advice about your
                situation. If a term here matters to a decision you are making,
                take your own advice on it.
              </p>
              <p className={`${MICRO_TIGHT} mt-6 text-[#9AA3B1]`}>
                Novada Tech <span className="text-[#C3CAD5]">·</span> Last
                updated{" "}
                <span className={`${NUM} text-[#5B6472]`}>{LAST_UPDATED}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════════════════════════ */

export default function TermsOfServicePage() {
  return (
    <div data-theme="desk" className="min-h-screen bg-white font-sans">
      <DeskNav />
      <StatusStrip />

      <main>
        <Hero />
        <Body />
      </main>

      <DeskFooter />
    </div>
  );
}
