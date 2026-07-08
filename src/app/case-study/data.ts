// Case-study content. Ordered so LinkedIn-Growth cases appear first on
// the grid page (per user direction). Non-LinkedIn cases are real stories
// for a different Novada Tech offering — written true to the video, not
// reframed.
//
// Each case study follows the narrative case-study structure from the
// Tascoss Library reference example: Introduction, The Founder, The
// Challenge, The Solution, The Results (with metrics), In Their Words.
// Chronological voice, business-context detail, results-led headline.

export type CaseStudyOffering = "linkedin-growth" | "custom-ai";

export interface CaseStudy {
  slug: string;
  videoId: string;

  // Customer + grid card
  customerName: string;
  customerRole: string;
  customerCompany: string;
  offering: CaseStudyOffering;
  offeringLabel: string;
  cardHeadline: string;

  // Detail-page heading + subtitle
  pageTitle: string;
  pageSubtitle: string;

  // Narrative case-study body (each array = paragraphs)
  introduction: string;
  theFounder: string[];
  theChallenge: string[];
  theSolution: string[];
  theResults: string[];
  resultsMetrics: string[];
  inTheirWords: string;
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
    offeringLabel: "Growth Infrastructure™",
    cardHeadline: "Signed 3 high-value clients in 30 days with Growth Infrastructure.",
    pageTitle: "How Morasco Media Signed 3 High-Value Clients in 30 Days",
    pageSubtitle:
      "Nicola turned an inconsistent referral pipeline into a calendar of pre-qualified decision-maker meetings — and closed three high-value clients in the first month.",
    introduction:
      "Nicola is the founder of Morasco Media Services. When he partnered with Novada Tech, his business was being held back by an inconsistent referral pipeline. Within 30 days of installing the LinkedIn Growth System, he had signed three new high-value clients.",
    theFounder: [
      "Nicola built Morasco Media as a creative services agency — brand, content, and production work for growing businesses. The craft was strong. The clients he worked with were happy. Word-of-mouth had carried the business through its early years.",
      "But like most founder-led agencies, Nicola wore every hat. Strategist. Producer. Account manager. The unofficial head of sales. When he was deep in client delivery, business development stalled. When he made time to hunt for new clients, project delivery slowed. The trade-off was constant — and the quiet question underneath it was always the same: where's the next client coming from?",
    ],
    theChallenge: [
      "Referrals had been the engine of growth, and for years they were enough. But referrals are slow, unreliable, and impossible to scale. They arrive when they arrive. They dry up without warning. As a strategy for stepping a business up to its next chapter, they top out fast.",
      "The symptoms were familiar. Long stretches with no new client conversations. Weeks with no discovery calls booked. The persistent uncertainty about whether next month's revenue would match this one's. Nicola had tried the usual remedies. Posting on LinkedIn — drawing likes from peers rather than meetings from buyers. Sending the occasional cold message — forced, low-response. Attending events — generating a few warm introductions but nothing systematic.",
      "The fundamental problem wasn't effort. Nicola was working hard. The fundamental problem was the absence of a system — a repeatable, dependable process that turned the right prospects into the right conversations on a predictable cadence. Without that, every month started at zero.",
    ],
    theSolution: [
      "Nicola signed up for the LinkedIn Growth System — Novada Tech's done-for-you client acquisition partnership built for B2B service businesses.",
      "In the first week, we audited his offer and his positioning. We mapped his ideal client profile down to the level of company size, industry, role, and buying signal. We rewrote his LinkedIn profile so that the first impression it made on a decision-maker was credible and unmistakably expert. We outlined his authority video content plan — short, sharp videos shot remotely, in his voice, on his expertise.",
      "By week two, the system was live. Authority videos began publishing across LinkedIn, YouTube, and short-form distribution. Daily targeted outreach — sequences trained on Nicola's voice — started landing in decision-maker inboxes matched to his ICP. Every reply was handled by our team. Every qualifying conversation was triaged. Only pre-qualified, decision-maker meetings made it through to Nicola's calendar.",
      "Throughout, the principle was straightforward: free Nicola to do the work he does best — creative strategy, client delivery, leadership — while we ran the front-end engine that filled his pipeline. Fewer than 30 minutes a week of his time was needed.",
      "His goals were agreed and documented before activation: a predictable, forecastable pipeline of qualified meetings; decision-maker conversations rather than gatekeeper calls; reduced time spent on business development; and the contractual minimum of 15+ qualified meetings every month — or no payment.",
    ],
    theResults: [
      "Within 30 days of activation, Nicola had signed three new high-value clients. Pre-qualified meetings filled his calendar weekly. His pipeline became something he could forecast — not just feel.",
      "Beyond the numbers, the deeper shift was operational. Nicola no longer needed to wonder where the next client was coming from. The system answered that question — predictably — every month.",
    ],
    resultsMetrics: [
      "3 high-value clients signed in the first 30 days",
      "Pre-qualified decision-maker meetings booked into the calendar consistently",
      "A predictable monthly pipeline that revenue could be planned around",
      "Zero ad spend required",
      "Under 30 minutes per week of Nicola's time invested",
      "The authority content + acquisition system owned by Morasco Media permanently",
    ],
    inTheirWords:
      "Nicola's summary of the partnership is straightforward: three high-value clients signed in 30 days, a predictable pipeline for the first time, and a system that continues to fill his calendar with the right decision-makers. The change wasn't just commercial; it was operational. The business now runs with a front-end engine that doesn't depend on his hustle to function.",
  },

  {
    slug: "tony-south-line-media",
    videoId: "upgMW2nwwpk",
    customerName: "Tony",
    customerRole: "Founder",
    customerCompany: "South Line Media",
    offering: LINKEDIN_GROWTH,
    offeringLabel: "Growth Infrastructure™",
    cardHeadline: "Grew monthly revenue from $20K to over $100K with Growth Infrastructure.",
    pageTitle: "How South Line Media 5x'd Monthly Revenue — From $20K to $100K+",
    pageSubtitle:
      "Tony broke through a stubborn $20K-per-month plateau and scaled past $100K monthly revenue — without changing the offer, hiring SDRs, or spending on ads.",
    introduction:
      "Tony is the founder of South Line Media, a B2B media company. When he came to Novada Tech, monthly revenue had stalled at $20K. After installing the LinkedIn Growth System, he scaled past $100K per month — a 5x increase.",
    theFounder: [
      "Tony had built South Line Media into a credible, working business. The team was small but capable. The offer was strong. The clients he had brought him good work and steady revenue — roughly $20K a month, month in, month out.",
      "For most founders, $20K a month is success. For Tony, it had become a ceiling. He'd been trying to break through it for over a year. Every month he hit the same number. Every month he hit the same wall. The business wasn't failing; it was stuck.",
    ],
    theChallenge: [
      "The plateau, when Tony looked closely at it, wasn't a marketing problem in the conventional sense. The offer worked. The work was good. Clients renewed. What Tony was missing was a way to bring new conversations into the business reliably, at volume, with the right kind of buyer.",
      "His pipeline was a patchwork. Word of mouth produced a trickle. The occasional LinkedIn post brought a few inbound nibbles. A cold outreach attempt produced minimal results. There was no system, no daily flow of qualified meetings, no authority engine that pre-sold prospects before the first conversation.",
      "To scale past $20K, Tony needed two things he didn't have: consistent qualified-meeting flow that he could plan around, and authority positioning that made prospects arrive at the first call already convinced he was the right partner. Without both, he could work harder — but he couldn't scale.",
    ],
    theSolution: [
      "Tony signed up for the LinkedIn Growth System. We started with a foundational audit — his offer, his market, his ideal client profile, his current acquisition funnel (or lack of one).",
      "We rewrote his LinkedIn profile so any decision-maker who landed on it read it as a credible authority within thirty seconds. We built his authority video content plan around the specific expertise his ICP cared about. We mapped daily outbound sequences to the precise decision-makers — by role, company size, and signal — most likely to need his services.",
      "Inside two weeks, the system went live. Authority videos began publishing. Daily outreach started landing in inboxes. Replies were handled by our team. Qualifying calls were triaged. Pre-qualified, decision-maker meetings began booking into Tony's calendar.",
      "Crucially, we also built out Tony's CRM and pipeline tracking. For the first time, he had visibility into where every prospect was in the cycle — from outreach sent, through reply, through qualified meeting, through closed deal. The pipeline became something he could forecast, not feel.",
      "The agreement was clear from day one: 15+ qualified meetings every month, or Tony didn't pay. We documented his goals — break past the $20K ceiling, reduce time spent on business development, build a system the business could rely on permanently.",
    ],
    theResults: [
      "Tony's revenue grew from $20K per month to over $100K per month — a 5x increase. The plateau, after sitting unbroken for over a year, was gone.",
      "The shift was driven by a few things working together. The authority videos meant prospects who landed on Tony's profile during outreach saw him positioned as the obvious expert. The daily outreach meant decision-maker conversations happened consistently, not occasionally. The reply handling meant Tony's time wasn't drained by managing the inbox. The pre-qualification meant only buyers who fit landed on his calendar. And the CRM gave him the visibility to plan revenue and capacity around the actual numbers.",
    ],
    resultsMetrics: [
      "Monthly revenue grew from $20K to over $100K — a 5x jump",
      "Predictable, forecastable pipeline replacing feast-and-famine cycles",
      "Decision-maker meetings on the calendar every week",
      "Zero ad spend, no SDR team needed",
      "Less than 30 minutes per week of Tony's time",
      "The full system installed into the business — owned by him, run for him",
    ],
    inTheirWords:
      "Tony's reflection on the work is direct: South Line Media broke through the $20K ceiling that had held it down for over a year, and in months it had crossed the $100K mark. The business he runs today doesn't look like the one he ran before — it has a working acquisition engine. The change wasn't ten small improvements; it was one system that did the work he'd been trying to do manually, and did it consistently.",
  },

  {
    slug: "michael-aaronson-investigations",
    videoId: "G44OKPVh3Uk",
    customerName: "Michael",
    customerRole: "Founder",
    customerCompany: "Aaronson Investigations",
    offering: LINKEDIN_GROWTH,
    offeringLabel: "Growth Infrastructure™",
    cardHeadline: "10x'd monthly revenue in 30 days with Growth Infrastructure.",
    pageTitle: "How Michael 10x'd His Investigations Firm's Revenue in 30 Days",
    pageSubtitle:
      "Michael went from a referral-only investigations firm to direct access to corporate decision-makers — and 10x'd monthly revenue in the first 30 days.",
    introduction:
      "Michael is the founder of Aaronson Investigations. Before working with Novada Tech, his firm was almost entirely referral-driven. After installing the LinkedIn Growth System, monthly revenue grew 10x within 30 days.",
    theFounder: [
      "Michael had spent years building a respected investigations firm — corporate, legal, due diligence, and security-related work. The credentials were real. The casework was strong. Clients who'd worked with Aaronson Investigations once tended to come back.",
      "But growing the business meant reaching corporate counsel, HR directors, legal teams, and security heads — and the people who needed Michael's services rarely searched for them ahead of time. They asked around when something happened. That meant a great firm doing serious work was effectively invisible to most of its market — until something went wrong inside one of those companies and a colleague made an introduction.",
    ],
    theChallenge: [
      "Investigations is a business of buyer behaviour: clients don't shop, they wait for a problem and phone someone they trust. That makes cold outreach hard. Decision-makers don't read messages from unknown investigators. Trust isn't built in three sentences of email copy.",
      "For Michael, that meant the front of the funnel was permanently constricted. Referrals trickled in — sometimes — but couldn't be scaled. Cold outreach felt impossible because the trust gap couldn't be closed in the first contact. Posting on LinkedIn might earn attention but couldn't earn meetings. The result: a serious service, massively under-utilised, because the right buyers couldn't find it and Michael couldn't reach them reliably.",
      "He had a credibility problem to solve before he could have an outreach conversation at all.",
    ],
    theSolution: [
      "We installed the LinkedIn Growth System with a particular emphasis on credibility-building. Authority content came first. Michael's expertise — anonymised, of course — was packaged into short video case discussions that showed the kind of work Aaronson Investigations does. Insights on workplace investigations, due diligence frameworks, security threat patterns. Content that read as expertise, not promotion.",
      "In parallel, we rewrote Michael's LinkedIn profile to position him as a credible authority within seconds. We mapped his ICP — corporate counsel, HR directors, security heads, legal teams in companies large enough to need this kind of work. We built daily outbound sequences trained on Michael's voice, with messaging that didn't ask for the meeting first; it offered the expertise.",
      "When prospects engaged, our reply-handling team triaged the conversation, qualified the fit, and booked only decision-makers into Michael's calendar — pre-sold on his expertise from the content they'd seen before the message arrived.",
      "The agreement, documented at activation: 15+ qualified meetings per month, or no payment. Goals: open access to decision-makers Michael had previously been invisible to; turn referral roulette into a predictable monthly pipeline.",
    ],
    theResults: [
      "Within 30 days of going live, Michael's monthly revenue grew 10x. Decision-maker meetings — the kind that turned into casework — were now arriving on his calendar weekly, from the exact buyers he'd been trying to reach for years.",
      "What had changed wasn't Michael's expertise; it was access. The combination of authority content and decision-maker outreach gave him a way through the trust barrier without compromising the seriousness of the work. Prospects arrived at calls already understanding what Aaronson Investigations did and why it mattered. The conversation didn't have to start from zero.",
    ],
    resultsMetrics: [
      "10x revenue growth in 30 days",
      "Direct, repeatable access to decision-makers previously unreachable",
      "Pre-qualified prospects arriving at calls already pre-sold on Michael's expertise",
      "Predictable monthly pipeline replacing referral-only flow",
      "Under 30 minutes per week of Michael's time",
      "Zero ad spend, no SDR team",
    ],
    inTheirWords:
      "Michael's reflection on the work is precise: in 30 days, his investigations firm went from referral-only to a calendar of qualified, decision-maker meetings, and revenue grew tenfold. The shift wasn't promotional; it was structural. He's no longer waiting for buyers to find him. He has a system that reaches them — credibly — and a pipeline that operates regardless of who happens to remember his name this week.",
  },

  {
    slug: "jeff-vertical-axis",
    videoId: "Ef4YTXOnCP0",
    customerName: "Jeff",
    customerRole: "Founder",
    customerCompany: "Vertical Axis",
    offering: LINKEDIN_GROWTH,
    offeringLabel: "Growth Infrastructure™",
    cardHeadline: "From 1–2 sales calls a week to 30–60 qualified calls a month.",
    pageTitle: "How Jeff Went From 1–2 Calls a Week to 30–60 Qualified Sales Calls a Month",
    pageSubtitle:
      "Jeff's B2B service business went from a near-empty calendar to 30–60 qualified sales calls every month — a 6x+ jump in pipeline, without changing the offer or running ads.",
    introduction:
      "Jeff is the founder of Vertical Axis, a B2B service business. When he came to Novada Tech, his calendar was holding 1–2 sales calls per week. Within weeks of installing the LinkedIn Growth System, he was running 30–60 qualified sales calls every month — a 6x+ jump in pipeline.",
    theFounder: [
      "Jeff had built Vertical Axis on the strength of his work. Clients who experienced the offer signed long-term. The business was capable, the team was competent, the delivery was strong. What was missing wasn't anything in the back-end of the company; it was the front-end.",
      "Jeff was doing what most B2B founders do. Posting on LinkedIn when he had time. Sending the occasional cold message. Attending events. Hoping. The output of all that effort: 1–2 sales calls a week, on a good week. Some weeks none. A few times — when an event panned out or a referral came in — a small surge. None of it was forecastable.",
    ],
    theChallenge: [
      "1–2 calls a week is just enough to keep the lights on. It isn't enough to scale. It isn't enough to forecast revenue. It isn't enough to hire confidently or plan growth. And the fundamental issue wasn't a lack of effort or a weak offer — the offer worked when it got in front of buyers. The issue was that the offer rarely got in front of buyers in volume.",
      "Jeff had tried fixes. He'd posted more content. He'd reached out manually. He'd asked clients for referrals. The output never compounded. Whatever he did this week didn't carry into next week. Every cycle restarted from the beginning. The business was capped not by ability but by acquisition.",
    ],
    theSolution: [
      "We installed the LinkedIn Growth System with one explicit aim: replace Jeff's manual hustle with a turnkey acquisition engine that produced qualified meetings consistently, without his daily involvement.",
      "Week one: audit, ICP mapping, profile rewrite, content plan. Week two: authority video content began publishing across LinkedIn and short-form. Daily outbound — sequences trained on Jeff's voice — started landing in decision-maker inboxes. Replies were handled by our team. Pre-qualified meetings began booking into his calendar.",
      "The CRM and pipeline tracking we built gave Jeff visibility he'd never had before — outreach sent, reply rates, qualified meetings booked, deals progressing. The data became a forecasting tool, not a guessing game.",
      "Throughout, Jeff's involvement stayed under 30 minutes a week. We ran the system; he ran the calls and the delivery. Goals documented at activation: 15+ qualified meetings monthly minimum, a forecastable pipeline, and a system the business could rely on without his daily input.",
    ],
    theResults: [
      "The 1–2 calls a week pattern broke quickly. Within weeks of go-live, Jeff's calendar was filling with 30–60 qualified sales calls every month — a 6x+ increase. Decision-maker conversations replaced the occasional gatekeeper call. The pipeline became forecastable for the first time in the business's history.",
      "The shift mattered for more than just the call count. Jeff could now plan revenue, plan hiring, plan capacity. The acquisition engine ran in the background. His time went to closing the deals it generated and delivering the work.",
    ],
    resultsMetrics: [
      "From 1–2 calls/week to 30–60 qualified sales calls/month — a 6x+ jump",
      "Calendar consistently full with decision-maker meetings",
      "Predictable pipeline he could forecast revenue from",
      "Less than 30 minutes per week of his time",
      "Zero ad spend, zero SDR team",
      "The system installed permanently into Vertical Axis — owned, run, future-proof",
    ],
    inTheirWords:
      "Jeff's summary is operational: 1–2 calls a week became 30–60 qualified calls a month, and the business now runs with a working front-end. The acquisition function that used to depend on his weekly hustle now runs as a system. The change isn't a marketing tactic; it's a structural shift in how the business operates.",
  },

  // ─── Custom AI / Automation (shown after the LinkedIn cases) ────────
  {
    slug: "anthony-ripple-clarke",
    videoId: "0qabR5mfAfQ",
    customerName: "Anthony",
    customerRole: "Founder",
    customerCompany: "Ripple Clarke",
    offering: CUSTOM_AI,
    offeringLabel: "Operations Infrastructure™",
    cardHeadline: "Transformed construction procurement with custom AI.",
    pageTitle: "How Ripple Clarke Transformed Construction Procurement With Custom AI",
    pageSubtitle:
      "Anthony's construction firm used Novada Tech's custom AI procurement engine to eliminate supply-chain firefighting and negotiate better deals — at scale.",
    introduction:
      "Anthony is the founder of Ripple Clarke, a construction business. He partnered with Novada Tech to install a custom AI procurement engine. The result: an end to supply-chain firefighting, better-negotiated material deals, and procurement that runs continuously without constant human intervention.",
    theFounder: [
      "Construction is a margin business. Materials cost, supplier reliability, and delivery timing make or break a project. Anthony had built Ripple Clarke around a strong delivery team and a reputation for getting projects done well — but as the business scaled, the front-end of every job, procurement, was becoming the bottleneck.",
      "The work was good. The team was capable. The clients were happy. But every month, Anthony's team was spending an outsized portion of its hours on procurement tasks that didn't require human judgement — they required tireless, continuous attention.",
    ],
    theChallenge: [
      "Procurement in construction is a moving target. Materials prices shift weekly. Supplier availability changes by region and season. Lead times fluctuate. Supply-chain disruption — when it happens — can hit project margins hard and fast.",
      "Manually, that meant Anthony's team was constantly chasing quotes, comparing supplier offers, tracking shifting prices, and managing supplier risk through spreadsheets. The volume of attention required was relentless. When something went wrong — a delivery delay, a supplier issue, a price shift — the team scrambled. When everything went right, the team was still spending hours doing analysis that an AI could do faster, more thoroughly, and continuously.",
      "The problem wasn't the team's skill. The team was excellent. The problem was that human attention couldn't keep up with the volume and pace of decisions a modern construction supply chain demands.",
    ],
    theSolution: [
      "Novada Tech built Ripple Clarke a custom AI procurement engine, designed specifically for the supply chain they operate in. This wasn't off-the-shelf software; it was a system built around the business.",
      "We started with discovery — mapping how Anthony's team currently handled procurement, where the time was being spent, where the failures occurred, what categories of materials and suppliers mattered most. From there, we designed an AI layer that handled the continuous-attention tasks: market trend analysis across construction materials, supplier quote comparison weighted against historical performance and current market data, early-warning monitoring for supply-chain disruption, and end-to-end procurement workflow automation from RFQ through delivery tracking.",
      "The system was integrated into the tools Anthony's team already used — not bolted on. Training was minimal because the team's existing workflow was preserved; the AI handled the heavy analytical lifting underneath it.",
      "Goals documented at activation: eliminate reactive procurement firefighting, secure better-negotiated material deals through continuous market analysis, reduce the human hours spent on procurement, and give Anthony's team back the bandwidth to focus on higher-value work.",
    ],
    theResults: [
      "Procurement at Ripple Clarke now runs continuously. Market prices and supplier availability are tracked in real time. Quote comparison runs automatically against historical and current market data. Supply-chain risks are flagged before they hit projects, not after. The reactive firefighting that defined the team's procurement work is gone.",
    ],
    resultsMetrics: [
      "Reactive procurement firefighting eliminated",
      "Better-negotiated material deals across the board",
      "Supply-chain disruptions caught and managed early — before project impact",
      "Hours of weekly procurement work automated away",
      "Team time freed for higher-value work — site management, business development, client relationships",
      "A custom AI procurement engine owned by Ripple Clarke, embedded in the business",
    ],
    inTheirWords:
      "Anthony's reflection captures the shift: managing procurement and navigating supply-chain issues was a constant challenge, and now Novada Tech's AI handles the analytical and operational heavy lifting underneath the procurement function. The team is no longer reactive — they're proactive. The business runs smoother, the margins are healthier, and the procurement function scales as the business does.",
  },

  {
    slug: "damian-groundwork-ventures",
    videoId: "JXEvONrDaOk",
    customerName: "Damian",
    customerRole: "Founder",
    customerCompany: "Groundwork Ventures",
    offering: CUSTOM_AI,
    offeringLabel: "Operations Infrastructure™",
    cardHeadline: "Cut operational time by over 80% with AI automation.",
    pageTitle: "How Groundwork Ventures Reduced Operational Time by Over 80% With AI Automation",
    pageSubtitle:
      "Damian partnered with Novada Tech to automate the operational workload eating his team — cutting operational time by more than 80% and freeing his team for growth work.",
    introduction:
      "Damian is the founder of Groundwork Ventures. His team was being consumed by operational work — admin, coordination, reporting, routine decision support. Novada Tech designed a custom AI automation stack for his business, and operational time was reduced by over 80%.",
    theFounder: [
      "Damian had built Groundwork Ventures into a working service business. The clients were strong. The delivery team was good. The business was growing. And — like most service businesses growing past their first chapter — the operational backbone of the business was creaking under the weight of scale.",
      "Manual processes that had worked when the team was small had become bottlenecks now that it was bigger. Damian's people were spending more time on admin than on the work the business was actually built around. Every new piece of growth made the operational burden worse.",
    ],
    theChallenge: [
      "The numbers were stark. By Damian's own count, 80% of the team's time was being spent on operations: admin, coordination across projects, internal reporting, routine decisions that didn't require human judgement, status updates, document preparation, data entry across multiple systems.",
      "The team was good. The work itself wasn't the problem. The problem was that the volume of operational work had outpaced what manual processes could handle without burning out the team. Hiring more people would have worked — eventually — but it was expensive, slow to ramp, and didn't actually solve the underlying problem. More humans doing the same manual work would just delay the same ceiling.",
      "Damian needed a system that took the operational load off the team and didn't depend on adding more headcount to function.",
    ],
    theSolution: [
      "Novada Tech designed and built a custom AI automation stack for Groundwork Ventures, focused on the specific operational workflows eating the team's time.",
      "We started with process discovery. Before building anything, we mapped every recurring operational task that the team performed week to week — how long each took, how often, by whom, with what tools, and what decisions it required. Some tasks were straightforward candidates for automation. Others required AI judgement in the loop. A small number genuinely required human attention.",
      "From the map, we designed automation workflows that replaced the manual work end-to-end. The AI handled coordination across projects, automated report generation, routine decision-making in defined boundaries, status updates, and data movement between the systems the team already used. The automations were embedded into Groundwork's existing tools, not built as a separate layer the team had to learn.",
      "Critically, we trained Damian's team to operate the system confidently. The goal wasn't to make Groundwork dependent on us; it was to install an automation stack the business owned and ran.",
      "Goals at activation: reduce operational time substantially, free team capacity for growth work, scale operations without proportional headcount increases, and give Damian back leadership bandwidth.",
    ],
    theResults: [
      "Operational time at Groundwork Ventures was reduced by over 80%. The team's hours, previously consumed by routine admin and coordination, were freed for growth work — client delivery, business development, strategic project work. The bottleneck that had threatened to cap the business broke.",
    ],
    resultsMetrics: [
      "Operational time reduced by over 80%",
      "Team capacity freed from admin to focus on growth and client work",
      "No additional operational headcount required to scale",
      "Automation stack scales with the business rather than against it",
      "Damian regained leadership bandwidth previously lost to operational firefighting",
      "A custom AI automation asset owned by Groundwork Ventures, embedded in the business",
    ],
    inTheirWords:
      "Damian's reflection is direct: partnering with Novada Tech was a game-changer for Groundwork Ventures. The 80% reduction in operational time changed how the team spends its days. The business now runs leaner without sacrificing capacity, and the growth that was previously gated by ops bandwidth can now actually happen.",
  },

  {
    slug: "jack-house-valley",
    videoId: "O3HUPQyflH8",
    customerName: "Jack",
    customerRole: "Founder",
    customerCompany: "House Valley",
    offering: CUSTOM_AI,
    offeringLabel: "Operations Infrastructure™",
    cardHeadline: "Automated property appraisals end-to-end with custom AI.",
    pageTitle: "How House Valley Automated Property Appraisals With Custom AI",
    pageSubtitle:
      "Jack at House Valley replaced labour-intensive property valuations with a Novada Tech-built custom AI appraisal model — fast, accurate, and reliably consistent at scale.",
    introduction:
      "Jack runs House Valley. Property valuations — central to the business — had become a manual bottleneck that capped how fast the business could grow. Novada Tech built House Valley a custom AI-powered appraisal model. The result: fast, accurate valuations delivered at scale, without adding human headcount.",
    theFounder: [
      "Jack had built House Valley around a clear value proposition: reliable, defensible property valuations clients could trust. The work was detailed. The standards were high. The clients were loyal. And as the business scaled — more clients, more appraisals, more geography — the appraisal function had become the operational bottleneck.",
      "Each valuation required real analytical work. Comparable sales had to be pulled and weighted. Market trends had to be incorporated. Property-specific factors had to be accounted for. A defensible report had to be produced. Done well, it took meaningful human hours. Done at scale, those hours added up to constrained capacity and stretched turnaround times.",
    ],
    theChallenge: [
      "At low volume, the manual process worked. At scale, it became the limiter. Turnaround times stretched as appraisal volume grew. Valuations sat in queue. Clients waited longer. Growth was constrained by appraiser capacity — and adding appraisers was expensive, slow to onboard, and only delayed the same ceiling.",
      "Worse, the manual process — even when handled by experienced appraisers — was inherently variable. Different appraisers weighted comparables differently. Reports varied in structure. At scale, consistency became as much of a challenge as speed.",
      "Jack needed two things: faster valuations and more consistent ones — without sacrificing the accuracy and defensibility his clients trusted.",
    ],
    theSolution: [
      "Novada Tech built House Valley a custom AI appraisal model — designed specifically for the property types and markets House Valley actually operates in. Not a generic valuation tool; a system built around the way Jack's team works and the standards his clients expect.",
      "We started with the data. We trained the model on House Valley's appraisal history — what comparables were used, how they were weighted, what factors influenced final valuations, how reports were structured. The model learned the methodology that defined House Valley's work.",
      "From there, we built the automation layer. Comparable analysis ran automatically against current market data. Trend integration kept valuations reflective of today's market rather than last quarter's. Report generation produced client-ready output in House Valley's format and standards. Human appraisers stayed in the loop for edge cases and final review; the AI handled the analytical heavy lifting underneath.",
      "The system was built to scale with House Valley — not replace the team but multiply what the team could deliver.",
      "Goals at activation: faster valuation turnaround, consistent methodology at scale, capacity unlocked without proportional headcount increases, and reports clients could continue to trust.",
    ],
    theResults: [
      "Valuations at House Valley are now completed in a fraction of the previous turnaround time. Consistency at scale is no longer a manual challenge; the model produces methodologically consistent appraisals across geographies and property types. Capacity has been unlocked without adding appraisers. Jack's team is freed to focus on client relationships and edge-case valuations where their judgement matters most.",
    ],
    resultsMetrics: [
      "Valuations completed in a fraction of previous turnaround time",
      "Consistent methodology maintained at scale",
      "Capacity unlocked without adding appraisers",
      "Team time freed for client relationships and complex/edge-case appraisals",
      "A custom AI appraisal asset owned by House Valley — built into the business",
    ],
    inTheirWords:
      "Jack's reflection captures it: Novada Tech's custom AI solution transformed property appraisals for House Valley's clients. Previously, valuations were time-consuming and labour-intensive; now, the process is efficient, accurate, and fast. The team can do more, faster, without compromising the standards that built the business.",
  },

  {
    slug: "nate-larsky-tack-feed",
    videoId: "w5iJNOADdXU",
    customerName: "Nate",
    customerRole: "Founder",
    customerCompany: "Larsky Tack and Feed",
    offering: CUSTOM_AI,
    offeringLabel: "Operations Infrastructure™",
    cardHeadline: "Streamlined inventory tracking and logistics across the business.",
    pageTitle: "How Larsky Tack and Feed Streamlined Logistics With Novada Tech",
    pageSubtitle:
      "Nate transformed Larsky's logistics operations — making inventory tracking smoother, more efficient, and reliably accurate across the business.",
    introduction:
      "Nate runs Larsky Tack and Feed. Growth had outpaced the inventory and logistics systems holding the business together. Novada Tech built Larsky a custom logistics and inventory management solution. The result: tracking that operates reliably day to day, smoother logistics, and the operational foundation Nate needed to keep scaling.",
    theFounder: [
      "Larsky Tack and Feed had grown the way most successful small-business retail and supply businesses do: by getting the product right, building local trust, and managing the operational complexity through hustle. The customers were loyal. The product mix was strong. The business was growing.",
      "What had grown alongside it, though, was operational complexity. Inventory across multiple categories. Fulfilment volume that was higher than the manual systems were really built for. Logistics decisions that needed faster, better information. The systems that had worked when the business was smaller couldn't keep up with where the business was now — and the gap was getting wider.",
    ],
    theChallenge: [
      "The day-to-day reality was familiar to anyone running a growing retail or supply business. Inventory tracking that fell behind reality. Stock discrepancies between system and shelf. Fulfilment delays caused by reactive coordination instead of planned workflow. Reporting that was always one step behind. Every operational gap cost time, money, or customer satisfaction. None of them were business-ending. All of them were business-limiting.",
      "Nate had tried off-the-shelf software. Generic inventory management tools didn't fit the operational realities of tack and feed retail. They were either too simplistic for the volume Larsky was handling or too complex for what Nate's team actually needed. The middle ground — a system designed for the way the business actually ran — didn't exist as a product.",
      "What Nate needed wasn't software. He needed a system, built around his business.",
    ],
    theSolution: [
      "Novada Tech designed and built a custom logistics and inventory management solution for Larsky Tack and Feed — purpose-built for the operational realities of tack and feed retail, not adapted from a generic SaaS template.",
      "We started with operational discovery: how inventory moved through the business, how customers ordered, how fulfilment happened, where the friction was, where the operational gaps cost the most. From the map, we designed automation around the workflows that mattered.",
      "Real-time inventory tracking was built first — giving Nate's team current-state visibility into stock levels and movement, not yesterday's snapshot. Fulfilment workflow was streamlined to scale with order volume. Operational reporting was built so that Nate could see today's state today, not next week. And the whole system was built specifically for Larsky — not a configured version of someone else's product.",
      "Goals at activation: reliable inventory tracking day to day, smoother logistics, accurate operational reporting, and an operational foundation the business could actually scale on.",
    ],
    theResults: [
      "Inventory tracking at Larsky now operates reliably. Stock discrepancies are caught quickly. Fulfilment runs more smoothly. Operational reporting reflects current reality, not last week's. The friction that had been quietly capping the business has been reduced across the operation.",
    ],
    resultsMetrics: [
      "Inventory tracking that operates reliably day-to-day",
      "Smoother logistics — fewer fulfilment hiccups, faster response to issues",
      "Operational reliability that enables growth rather than constraining it",
      "Reduced operational friction across the business",
      "A custom solution Larsky owns — improving over time as the business scales",
    ],
    inTheirWords:
      "Nate's reflection on the partnership is straightforward: Novada Tech transformed his logistics operations. Inventory tracking has never been smoother, and the operational reliability the business gained gives Larsky the foundation to keep growing. The systems are no longer limiting the business; they're enabling it.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
