// Case-study content. Ordered so LinkedIn-Growth cases appear first on
// the grid page (per user direction). The non-LinkedIn cases are real
// stories from a different Novada Tech offering (custom AI builds /
// operations automation) — written true to the actual video, not
// reframed as LinkedIn.

export type CaseStudyOffering = "linkedin-growth" | "custom-ai";

export interface SolutionBullet {
  title: string;
  desc: string;
}

export interface CaseStudy {
  slug: string;
  videoId: string;
  // Card
  customerName: string;
  customerRole: string;
  customerCompany: string;
  offering: CaseStudyOffering;
  offeringLabel: string;
  cardHeadline: string;
  // Page
  pageTitle: string;
  pageSubtitle: string;
  overview: string;
  challenge: string;
  solutionIntro: string;
  solutionBullets: SolutionBullet[];
  results: string[];
}

const LINKEDIN_GROWTH: CaseStudyOffering = "linkedin-growth";
const CUSTOM_AI: CaseStudyOffering = "custom-ai";

export const CASE_STUDIES: CaseStudy[] = [
  // ─── LinkedIn Growth (shown first per user direction) ──────────────
  {
    slug: "nicola-morasco-media",
    videoId: "CBL83P7OYgI",
    customerName: "Nicola",
    customerRole: "Founder",
    customerCompany: "Morasco Media Services",
    offering: LINKEDIN_GROWTH,
    offeringLabel: "LinkedIn Growth System™",
    cardHeadline: "Signed 3 high-value clients in 30 days using LinkedIn Growth.",
    pageTitle: "How Morasco Media Signed 3 High-Value Clients in 30 Days",
    pageSubtitle:
      "Nicola turned an inconsistent referral pipeline into a calendar of pre-qualified decision-maker meetings — and closed three high-value clients in the first month.",
    overview:
      "Within 30 days of installing the LinkedIn Growth System, Nicola at Morasco Media Services signed three new high-value clients — without referrals, paid ads, or chasing prospects. The combination of authority video content and done-for-you LinkedIn outreach turned cold LinkedIn traffic into pre-sold, qualified meetings on her calendar.",
    challenge:
      "Like most media services founders, Nicola's pipeline was inconsistent. New business came from word-of-mouth and referrals — which dried up unpredictably. Posting on LinkedIn occasionally drove some attention but no consistent meetings. Cold outreach felt spammy, the responses were thin, and the prospects who did book were usually under-qualified or window-shopping. Every month started at zero, and every signed client felt like luck rather than process.",
    solutionIntro:
      "We installed the full LinkedIn Growth System into Nicola's business — built around her, run by us, owned by her.",
    solutionBullets: [
      {
        title: "Authority Video Engine",
        desc: "4–6 short videos a month featuring Nicola, scripted around her expertise. Pre-sells her authority across LinkedIn, YouTube and short-form before any outreach lands.",
      },
      {
        title: "Done-For-You LinkedIn Outreach",
        desc: "Daily targeted outreach to ICP-matched prospects, sequences trained on her voice, with reply handling fully managed.",
      },
      {
        title: "Pre-Qualified Booking",
        desc: "Only decision-makers with budget and fit hit her calendar. Pre-sold before the call ever starts.",
      },
      {
        title: "Performance Guarantee",
        desc: "Written into the agreement: 15+ qualified meetings every month — or she doesn't pay.",
      },
    ],
    results: [
      "3 high-value clients signed in the first 30 days",
      "Pre-qualified, decision-maker meetings filling her calendar weekly",
      "A predictable monthly pipeline she could forecast revenue from",
      "Zero ad spend required",
      "Under 30 minutes per week of her time invested",
      "A system she keeps — built into her business, owned forever",
    ],
  },
  {
    slug: "tony-south-line-media",
    videoId: "upgMW2nwwpk",
    customerName: "Tony",
    customerRole: "Founder",
    customerCompany: "South Line Media",
    offering: LINKEDIN_GROWTH,
    offeringLabel: "LinkedIn Growth System™",
    cardHeadline: "Grew monthly revenue from $20K to over $100K using LinkedIn Growth.",
    pageTitle: "How South Line Media 5x'd Monthly Revenue — From $20K to $100K+",
    pageSubtitle:
      "Tony broke through a stubborn $20K-per-month plateau and scaled past $100K monthly revenue — without changing the offer, hiring SDRs, or spending on ads.",
    overview:
      "Tony at South Line Media was stuck at $20K per month with no clear way to scale. After installing the LinkedIn Growth System, his pipeline became predictable, qualified meetings landed weekly, and monthly revenue grew over 5x — to more than $100K per month — without changing the offer or hiring a sales team.",
    challenge:
      "For Tony, the $20K-per-month ceiling was a process problem. Revenue was happening but unpredictably — driven by hustle, sporadic content, and the occasional referral. To scale past $20K he needed two things he didn't have: a consistent flow of qualified meetings, and authority positioning that pre-sold prospects before the first call. Without those, he'd be stuck no matter how many hours he worked.",
    solutionIntro:
      "The LinkedIn Growth System gave Tony the missing front-end system — built into his business, run for him.",
    solutionBullets: [
      {
        title: "Authority Video Engine",
        desc: "Monthly authority content that positioned Tony as the obvious choice in his market, so prospects arrived already pre-sold.",
      },
      {
        title: "Targeted LinkedIn Outreach",
        desc: "Done-for-you outreach to decision-makers fitting his exact ICP, daily, optimised weekly.",
      },
      {
        title: "Reply Handling & Pre-Qualified Booking",
        desc: "Every reply professionally managed; only qualified prospects pre-sold on the offer made it to his calendar.",
      },
      {
        title: "CRM + Pipeline Visibility",
        desc: "Full visibility into every stage so revenue became forecastable rather than felt.",
      },
      {
        title: "Performance Guarantee",
        desc: "15+ qualified meetings every month — or no payment. Written into the agreement.",
      },
    ],
    results: [
      "Revenue grew from $20K/month to over $100K/month — a 5x increase",
      "Predictable, forecastable pipeline replacing feast-and-famine cycles",
      "Decision-maker meetings on the calendar every week",
      "Zero ad spend, zero SDR team needed",
      "Sub-30-minutes-per-week time investment from Tony",
      "A system installed into the business — owned forever",
    ],
  },
  {
    slug: "michael-aaronson-investigations",
    videoId: "G44OKPVh3Uk",
    customerName: "Michael",
    customerRole: "Founder",
    customerCompany: "Aaronson Investigations",
    offering: LINKEDIN_GROWTH,
    offeringLabel: "LinkedIn Growth System™",
    cardHeadline: "10x'd monthly revenue in 30 days using LinkedIn Growth.",
    pageTitle: "How Michael 10x'd His Investigations Firm's Revenue in 30 Days",
    pageSubtitle:
      "Michael went from a referral-only investigations firm to direct access to corporate decision-makers — and 10x'd monthly revenue in the first 30 days.",
    overview:
      "Within 30 days of partnering with Novada Tech, Michael 10x'd his investigations firm's monthly revenue. The LinkedIn Growth System gave him systematic access to the decision-makers — corporate counsel, HR directors, and security heads — who needed his services but didn't know he existed.",
    challenge:
      "Investigations is a service business where buyers don't search for you when they need you — they ask around. That meant Michael was effectively invisible to most of his target market. Referrals trickled in but couldn't be scaled. Cold outreach felt impossible — decision-makers don't open emails from strangers, and Michael's expertise wasn't visible enough at first contact to earn trust. The result: a great service that was massively under-utilised because the right buyers couldn't find it.",
    solutionIntro:
      "We installed the LinkedIn Growth System to give Michael systematic, repeatable access to the decision-makers he was previously invisible to.",
    solutionBullets: [
      {
        title: "Authority Video Engine",
        desc: "Short-form video content built around real (anonymised) cases — positioning Michael as the credible expert before any outreach landed.",
      },
      {
        title: "Decision-Maker Outreach",
        desc: "Daily targeted outreach to corporate counsel, HR directors and security heads matching his exact ICP.",
      },
      {
        title: "Reply Handling & Pre-Qualified Booking",
        desc: "Every reply professionally handled; qualified prospects booked into pre-sold meetings, no chasing required.",
      },
      {
        title: "Performance Guarantee",
        desc: "Written: 15+ qualified meetings every month — or zero payment.",
      },
    ],
    results: [
      "10x monthly revenue growth in 30 days",
      "Direct, repeatable access to decision-makers who'd previously been unreachable",
      "Pre-qualified prospects arriving at calls already pre-sold on his expertise",
      "Predictable monthly pipeline replacing referral roulette",
      "Under 30 minutes per week of Michael's time invested",
      "No ad spend, no SDR team",
    ],
  },
  {
    slug: "jeff-vertical-axis",
    videoId: "Ef4YTXOnCP0",
    customerName: "Jeff",
    customerRole: "Founder",
    customerCompany: "Vertical Axis",
    offering: LINKEDIN_GROWTH,
    offeringLabel: "LinkedIn Growth System™",
    cardHeadline: "From 1–2 sales calls a week to 30–60 qualified calls a month.",
    pageTitle: "How Jeff Went From 1–2 Calls a Week to 30–60 Qualified Sales Calls a Month",
    pageSubtitle:
      "Jeff's B2B service business went from a near-empty calendar to 30–60 qualified sales calls every month — a 6x+ jump in pipeline, without changing the offer or running ads.",
    overview:
      "Jeff at Vertical Axis was booking 1–2 sales calls a week — barely enough to keep the business running, nowhere near enough to scale. After installing the LinkedIn Growth System, his calendar filled with 30–60 qualified sales calls every month — pre-qualified, decision-maker conversations that converted into closed clients. A 6x+ jump in qualified meeting flow, in weeks.",
    challenge:
      "Jeff was doing what most B2B founders do: posting on LinkedIn, sending the occasional cold message, attending events, hoping. The result was inconsistent — 1–2 calls a week if the wind was right, fewer if it wasn't. He couldn't forecast revenue. He couldn't hire confidently. He couldn't plan growth. The offer was strong; the bottleneck was meeting flow. The front-end system simply wasn't working.",
    solutionIntro:
      "The LinkedIn Growth System replaced Jeff's manual hustle with a turnkey acquisition engine — installed into his business, run for him.",
    solutionBullets: [
      {
        title: "Authority Video Engine",
        desc: "Monthly video content that pre-sold prospects on Jeff before any outreach arrived.",
      },
      {
        title: "Daily Targeted Outreach",
        desc: "Done-for-you outreach to ICP-matched prospects, sequences trained on Jeff's voice and offer.",
      },
      {
        title: "Reply Handling & Pre-Qualified Booking",
        desc: "Every reply managed; only qualified, pre-sold prospects made it to his calendar.",
      },
      {
        title: "CRM + Pipeline Visibility",
        desc: "Full reporting on every stage — pipeline became something Jeff could forecast and plan against.",
      },
      {
        title: "Performance Guarantee",
        desc: "15+ qualified meetings every month — or he doesn't pay. Written into the agreement.",
      },
    ],
    results: [
      "From 1–2 calls/week to 30–60 qualified sales calls/month — a 6x+ jump",
      "Calendar consistently full with decision-maker meetings",
      "Predictable pipeline he could forecast revenue from",
      "Under 30 minutes per week of his time",
      "Zero ad spend, zero SDR team",
      "A system Jeff owns — built into his business forever",
    ],
  },

  // ─── Custom AI / Automation (shown after the LinkedIn cases) ────────
  {
    slug: "anthony-ripple-clarke",
    videoId: "0qabR5mfAfQ",
    customerName: "Anthony",
    customerRole: "Founder",
    customerCompany: "Ripple Clarke",
    offering: CUSTOM_AI,
    offeringLabel: "Custom AI Build",
    cardHeadline: "Transformed construction procurement with custom AI.",
    pageTitle: "How Ripple Clarke Transformed Construction Procurement With Custom AI",
    pageSubtitle:
      "Anthony's construction firm used Novada Tech's custom AI procurement engine to eliminate supply-chain firefighting and negotiate better deals — at scale.",
    overview:
      "Ripple Clarke partnered with Novada Tech to install a custom AI procurement solution that continuously analyses market trends, negotiates supplier deals, and streamlines the entire procurement workflow. The result: a predictable supply chain, better-priced materials, and operations free from constant procurement firefighting.",
    challenge:
      "For Anthony, procurement was the daily fire. Construction margins live or die on materials cost and delivery timing. Manual procurement meant chasing quotes, tracking shifting market prices, and managing supplier risk by spreadsheet. Supply-chain disruptions hit unpredictably — and every delay translated into project overruns. The fundamental problem: too much human time spent on procurement tasks that an AI could do faster, better, and continuously.",
    solutionIntro:
      "Novada Tech built Anthony a custom AI procurement engine tailored to Ripple Clarke's supply chain — not an off-the-shelf tool, a system built for his business.",
    solutionBullets: [
      {
        title: "Market Trend Analysis",
        desc: "Continuously scanning material prices and supplier availability across the construction supply chain.",
      },
      {
        title: "Automated Supplier Negotiation",
        desc: "AI-driven quote comparison and negotiation against historical market data — better deals, less back-and-forth.",
      },
      {
        title: "Supply-Chain Risk Monitoring",
        desc: "Early-warning alerts on potential delivery delays before they impact projects.",
      },
      {
        title: "End-to-End Procurement Workflow",
        desc: "From RFQ through to PO and delivery tracking, automated and integrated into the existing operation.",
      },
    ],
    results: [
      "Eliminated reactive procurement firefighting",
      "Better-negotiated material deals across the board",
      "Supply-chain disruptions caught and managed before they impacted projects",
      "Hours of weekly procurement work automated away",
      "Anthony's team freed up for higher-value work — site management, business development, client relationships",
    ],
  },
  {
    slug: "damian-groundwork-ventures",
    videoId: "JXEvONrDaOk",
    customerName: "Damian",
    customerRole: "Founder",
    customerCompany: "Groundwork Ventures",
    offering: CUSTOM_AI,
    offeringLabel: "Custom AI Build",
    cardHeadline: "Cut operational time by over 80% with AI automation.",
    pageTitle: "How Groundwork Ventures Reduced Operational Time by Over 80% With AI Automation",
    pageSubtitle:
      "Damian partnered with Novada Tech to automate the operational workload eating his team — cutting operational time by more than 80% and freeing his team for growth work.",
    overview:
      "Groundwork Ventures was spending the majority of team time on operational tasks — admin, coordination, data entry, internal reporting. Novada Tech built a custom AI automation stack that replaced the manual work end-to-end, reducing operational time by more than 80% and freeing Damian's team to focus on growth.",
    challenge:
      "Like most service businesses scaling past their first chapter, Groundwork was drowning in operations. Manual processes that worked at small scale couldn't keep up. Admin, coordination, internal reporting and routine decision support was eating 80% of the team's time. Hiring more humans would have worked — but it was expensive, slow to ramp, and didn't scale. Damian needed a system, not more headcount.",
    solutionIntro:
      "Novada Tech designed a custom AI automation stack for Groundwork's specific workflows — built around how the business actually operated.",
    solutionBullets: [
      {
        title: "Process Discovery",
        desc: "Mapping every recurring operational task that was eating team time — before building anything.",
      },
      {
        title: "Custom AI Automation Build",
        desc: "AI workflows replacing the manual work, embedded directly into the existing systems the team already used.",
      },
      {
        title: "Continuous Optimisation",
        desc: "Iterating on the automations as the business scaled, keeping them effective rather than letting them stagnate.",
      },
      {
        title: "Team Enablement",
        desc: "Training the team to operate the AI stack confidently — owning it rather than depending on us.",
      },
    ],
    results: [
      "Operational time reduced by over 80%",
      "Team freed up from admin work to focus on growth and clients",
      "No additional operational headcount needed to scale",
      "Automation stack scales with the business rather than against it",
      "Damian regained leadership bandwidth previously lost to operational firefighting",
    ],
  },
  {
    slug: "jack-house-valley",
    videoId: "O3HUPQyflH8",
    customerName: "Jack",
    customerRole: "Founder",
    customerCompany: "House Valley",
    offering: CUSTOM_AI,
    offeringLabel: "Custom AI Build",
    cardHeadline: "Automated property appraisals end-to-end with custom AI.",
    pageTitle: "How House Valley Automated Property Appraisals With Custom AI",
    pageSubtitle:
      "Jack at House Valley replaced labour-intensive property valuations with a Novada Tech-built custom AI appraisal model — fast, accurate, and reliably consistent at scale.",
    overview:
      "House Valley's property valuations had become a bottleneck — every appraisal took human hours of analysis, comparison and reporting. Novada Tech built House Valley a custom AI-powered appraisal model that delivers fast, accurate property valuations end-to-end. The result: faster turnaround, consistent accuracy, and the capacity to scale without adding headcount.",
    challenge:
      "Property valuation is detail-intensive work. For House Valley's clients, every appraisal required pulling comparable sales, analysing market trends, accounting for property-specific factors, and producing a defensible report. At small volume, manual processing was fine. At scale, it became the bottleneck — turnaround times stretched, valuations sat in queue, and growth was constrained by appraiser capacity. Jack needed valuations to be faster and more consistent — without sacrificing the accuracy his clients trusted.",
    solutionIntro:
      "Novada Tech built House Valley a custom AI appraisal model — purpose-built for the property types and markets they actually work in.",
    solutionBullets: [
      {
        title: "Custom Appraisal Model",
        desc: "Trained specifically for House Valley's property types, geographies and reporting standards — not a generic tool.",
      },
      {
        title: "Automated Comparable Analysis",
        desc: "AI-powered identification and weighting of comparable sales, with consistent methodology across every appraisal.",
      },
      {
        title: "Market Trend Integration",
        desc: "Continuous incorporation of current market data into valuations — so reports reflect today's market, not last quarter's.",
      },
      {
        title: "Client-Ready Report Generation",
        desc: "End-to-end appraisal output formatted directly to House Valley's client-ready standards.",
      },
    ],
    results: [
      "Valuations completed in a fraction of the previous turnaround time",
      "Consistent accuracy maintained at scale",
      "Capacity unlocked without hiring more appraisers",
      "Jack's team freed to focus on client relationships and edge-case appraisals",
      "A custom AI asset owned by House Valley — built into the business",
    ],
  },
  {
    slug: "nate-larsky-tack-feed",
    videoId: "w5iJNOADdXU",
    customerName: "Nate",
    customerRole: "Founder",
    customerCompany: "Larsky Tack and Feed",
    offering: CUSTOM_AI,
    offeringLabel: "Custom Operations Build",
    cardHeadline: "Streamlined inventory tracking and logistics across the business.",
    pageTitle: "How Larsky Tack and Feed Streamlined Logistics With Novada Tech",
    pageSubtitle:
      "Nate transformed Larsky's logistics operations — making inventory tracking smoother, more efficient, and reliably accurate across the business.",
    overview:
      "Larsky Tack and Feed partnered with Novada Tech to install a custom logistics and inventory management solution. The result: inventory tracking that just works, smoother day-to-day logistics, and the operational reliability Nate needed to scale the business.",
    challenge:
      "For Nate, the daily operational reality was familiar to any growing retail and supply business: inventory tracking that fell behind, stock discrepancies, fulfilment delays, and reporting that was always one step behind reality. Manual processes that worked when the business was smaller couldn't keep up with growth. Every operational gap cost time, money, or customer satisfaction — and stacked into a ceiling on what the business could deliver.",
    solutionIntro:
      "Novada Tech built Larsky a custom logistics and inventory management solution — designed for the operational reality of tack and feed retail, not off-the-shelf software.",
    solutionBullets: [
      {
        title: "Inventory Tracking Automation",
        desc: "Real-time visibility into stock levels and movement across the business.",
      },
      {
        title: "Logistics Workflow Optimisation",
        desc: "Streamlined fulfilment and shipping processes that scale with order volume.",
      },
      {
        title: "Operational Reporting",
        desc: "Accurate, current-state visibility for decision-making — no more reports one week behind reality.",
      },
      {
        title: "Built For Larsky Specifically",
        desc: "A custom solution that fits the operational realities of tack and feed retail, not a generic SaaS tool.",
      },
    ],
    results: [
      "Inventory tracking that operates reliably day-to-day",
      "Smoother logistics — fewer fulfilment hiccups, faster response to issues",
      "Operational reliability that enables growth rather than constraining it",
      "Reduced friction across the business",
      "A custom solution Larsky owns — improving over time as the business scales",
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
