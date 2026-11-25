/* Per-page dashboard screens.
 *
 * Founder instruction, 17 Nov 2026: roll the hero across every page and
 * "make each page dashboard design unique so it's different from each
 * other and gives the page a different experience based on the offer."
 *
 * So these are FOUR DIFFERENT SCREENS OF ONE PRODUCT, not four skins:
 *   Overview       -> the care AI Workforce pages
 *   Patient Access -> the practices pages
 *   Work queue     -> the two homepages
 *   Audit trail    -> the two why-novada pages
 * Each has its own nav selection, headline, KPI set and main panel, and
 * the panel TYPE changes too (role list vs table), so the pages do not
 * read as the same picture with the words moved around.
 *
 * care-au-calib is the untouched copy of the real Figma export, kept only so
 * metrics.py can diff the replica against that ground truth. care-au is
 * SHIPPED from here since 18 Nov 2026: the export says "AI employees" and
 * "Coordinator", which the founder renamed to AI Operations Agents / Agent.
 *
 * NOTE: the shared nav now says "AI Agents", so the calibration copy
 * differs from the export by that one nav label. It sits outside every
 * probe metrics.py takes.
 *
 * ⚠️ ORG NAMES ARE INVENTED PLACEHOLDERS. Never put a real provider's
 * name in a product mock: it reads as a customer claim.
 */
var B = '#2357F5', P = '#7547F5', T = '#3287B6', V = '#8484E0', D = '#0F7B8A';
var K = ['#2357F5', '#7547F5', '#1487AD', '#8792A9', '#D94158'];

var NAV_CARE = function (on) {
  return [['Overview', 'grid'], ['AI Workforce', 'diamond'],
          ['Tasks & Exceptions', 'list'], ['Calls & Messages', 'target'],
          ['Integrations', 'dna'], ['Reports', 'doc'], ['Settings', 'gear']]
    .map(function (n) { return [n[0], n[1], n[0] === on]; });
};
var NAV_PRAC = function (on) {
  return [['Overview', 'grid'], ['Patient Access', 'phone'],
          ['AI Workforce', 'diamond'], ['Appointments', 'cal'],
          ['Billing & Claims', 'card'], ['Reports', 'doc'], ['Settings', 'gear']]
    .map(function (n) { return [n[0], n[1], n[0] === on]; });
};

window.VARIANTS = {

/* ══ SCREEN 1 · OVERVIEW ════════════════════ care AI Workforce ══ */

'care-au-calib': {   /* calibration copy of the real Figma export */
  nav: NAV_CARE('Overview'), crumb: 'Overview', org: 'Harmony Community Care',
  search: 'Search tasks, employees...', me: 'JD',
  date: 'WEDNESDAY 11 NOVEMBER 2026', asof: 'As of 06:50 AEDT',
  h1: 'Your AI Workforce overview',
  sub: 'Verified work and exceptions across five AI employees.',
  chips: ['Site: All locations', 'AI employee: All'],
  health: '5 of 6 sources healthy · Payroll degraded',
  live: 'Source issue · affected work held',
  kpis: [
    { c: K[0], lab: 'Verified completed', val: '143', foot: 'Last 7 days · +12%' },
    { c: K[1], lab: 'Autonomous completion', val: '88.1%', foot: '141 of 160 eligible' },
    { c: K[2], lab: 'In progress now', val: '6', foot: '3 running · 3 awaiting reply' },
    { c: K[3], lab: 'Overdue now', val: '0', foot: 'All cases on time' },
    { c: K[4], lab: 'Critical exceptions', val: '1', foot: 'ROS-2048 · Ack by 06:52', crit: 1 }
  ],
  left: {
    kind: 'roles', title: 'Your AI workforce', link: 'View all employees',
    rows: [
      { l: 'R', c: B, n: 'Rostering Coordinator', s: '3 shifts verified · 1 critical', st: 'Active · export held', hold: 1 },
      { l: 'C', c: P, n: 'Compliance Coordinator', s: 'Training sync verified', st: 'Active' },
      { l: 'H', c: T, n: 'HR Coordinator', s: 'Timesheets reconciled · 1 review', st: 'Active' },
      { l: 'A', c: V, n: 'After-Hours Coordinator', s: '4 contacts · 1 escalated', st: 'Active' },
      { l: 'O', c: D, n: 'Operations Coordinator', s: 'Daily readiness prepared', st: 'Active' }
    ],
    hub: { n: 'Voice & Communications Hub', s: 'Shared calls and SMS · Healthy', a: 'Manage communications' }
  },
  right: {
    title: 'Needs your attention', link: 'View all',
    cards: [
      { tone: 'crit', lab: 'CRITICAL · ROS-2048', h: 'No cover · SIL North 07:00',
        p: ['SH-704 · 2:1 protected', 'Jordan Davies · on-call', 'Ack by 06:52 · 2 min'], lk: 'Open case' },
      { tone: 'warn', lab: 'NEEDS REVIEW · HR-1807', h: 'Payroll variance · $346',
        p: ['2 records held · pay run continues', 'Taylor Nguyen · due 12 Nov 12:00'], lk: 'Review' }
    ]
  }
},
'care-au': {   /* calibration copy of the real Figma export */
  nav: NAV_CARE('Overview'), crumb: 'Overview', org: 'Harmony Community Care',
  search: 'Search tasks, agents...', me: 'JD',
  date: 'WEDNESDAY 11 NOVEMBER 2026', asof: 'As of 06:50 AEDT',
  h1: 'Your operations overview',
  sub: 'Verified work and exceptions across five agents.',
  chips: ['Site: All locations', 'Agent: All'],
  health: '5 of 6 sources healthy · Payroll degraded',
  live: 'Source issue · affected work held',
  kpis: [
    { c: K[0], lab: 'Verified completed', val: '143', foot: 'Last 7 days · +12%' },
    { c: K[1], lab: 'Autonomous completion', val: '88.1%', foot: '141 of 160 eligible' },
    { c: K[2], lab: 'In progress now', val: '6', foot: '3 running · 3 awaiting reply' },
    { c: K[3], lab: 'Overdue now', val: '0', foot: 'All cases on time' },
    { c: K[4], lab: 'Critical exceptions', val: '1', foot: 'ROS-2048 · Ack by 06:52', crit: 1 }
  ],
  left: {
    kind: 'roles', title: 'Your AI Workforce', link: 'View all agents',
    rows: [
      { l: 'R', c: B, n: 'Rostering Agent', s: '3 shifts verified · 1 critical', st: 'Active · export held', hold: 1 },
      { l: 'C', c: P, n: 'Compliance Agent', s: 'Training sync verified', st: 'Active' },
      { l: 'H', c: T, n: 'HR Agent', s: 'Timesheets reconciled · 1 review', st: 'Active' },
      { l: 'A', c: V, n: 'After-Hours Agent', s: '4 contacts · 1 escalated', st: 'Active' },
      { l: 'O', c: D, n: 'Operations Lead Agent', s: 'Daily readiness prepared', st: 'Active' }
    ],
    hub: { n: 'Voice & Communications Hub', s: 'Shared calls and SMS · Healthy', a: 'Manage communications' }
  },
  right: {
    title: 'Needs your attention', link: 'View all',
    cards: [
      { tone: 'crit', lab: 'CRITICAL · ROS-2048', h: 'No cover · SIL North 07:00',
        p: ['SH-704 · 2:1 protected', 'Jordan Davies · on-call', 'Ack by 06:52 · 2 min'], lk: 'Open case' },
      { tone: 'warn', lab: 'NEEDS REVIEW · HR-1807', h: 'Payroll variance · $346',
        p: ['2 records held · pay run continues', 'Taylor Nguyen · due 12 Nov 12:00'], lk: 'Review' }
    ]
  }
},

'care-us': {
  nav: NAV_CARE('Overview'), crumb: 'Overview', org: 'Northvale Home Care',
  search: 'Search tasks, agents...', me: 'DM',
  date: 'TUESDAY, NOVEMBER 17, 2026', asof: 'As of 6:50 AM CST',
  h1: 'Your operations overview',
  sub: 'Verified work and exceptions across five agents.',
  chips: ['Location: All', 'Agent: All'],
  health: '5 of 6 sources healthy · Payroll degraded',
  live: 'Source issue · affected work held',
  kpis: [
    { c: K[0], lab: 'Verified completed', val: '138', foot: 'Last 7 days · +9%' },
    { c: K[1], lab: 'Autonomous completion', val: '87.4%', foot: '138 of 158 eligible' },
    { c: K[2], lab: 'In progress now', val: '5', foot: '3 running · 2 awaiting reply' },
    { c: K[3], lab: 'Overdue now', val: '0', foot: 'All cases on time' },
    { c: K[4], lab: 'Critical exceptions', val: '1', foot: 'SCH-2048 · Ack by 6:52', crit: 1 }
  ],
  left: {
    kind: 'roles', title: 'Your AI Workforce', link: 'View all agents',
    rows: [
      { l: 'S', c: B, n: 'Scheduling Agent', s: '3 shifts verified · 1 critical', st: 'Active · export held', hold: 1 },
      { l: 'C', c: P, n: 'Compliance Agent', s: 'Credential sync verified', st: 'Active' },
      { l: 'H', c: T, n: 'HR Agent', s: 'Timesheets reconciled · 1 review', st: 'Active' },
      { l: 'A', c: V, n: 'After-Hours Agent', s: '4 contacts · 1 escalated', st: 'Active' },
      { l: 'O', c: D, n: 'Operations Lead Agent', s: 'Daily readiness prepared', st: 'Active' }
    ],
    hub: { n: 'Voice & Communications Hub', s: 'Shared calls and SMS · Healthy', a: 'Manage communications' }
  },
  right: {
    title: 'Needs your attention', link: 'View all',
    cards: [
      { tone: 'crit', lab: 'CRITICAL · SCH-2048', h: 'No cover · Cedar North 7:00',
        p: ['SH-704 · 2:1 staffing', 'Jordan Davies · on-call', 'Ack by 6:52 · 2 min'], lk: 'Open case' },
      { tone: 'warn', lab: 'NEEDS REVIEW · HR-1807', h: 'Payroll variance · $346',
        p: ['2 records held · pay run continues', 'Taylor Nguyen · due Nov 18, 12:00'], lk: 'Review' }
    ]
  }
},

/* ══ SCREEN 2 · FRONT DESK PERFORMANCE ═══════════════ practices ══
 * Founder, 18 Nov 2026: the practices headline screen is an ANALYTICS
 * screen with a graph. Stacked bars: what the AI answered, and what it
 * passed to reception, so the people stay in the picture. */
'practices-au': {
  nav: NAV_PRAC('Reports'), crumb: 'Reports / Front desk performance', org: 'Marlowe Family Practice',
  search: 'Search patients, calls...', me: 'SR',
  date: 'THIS WEEK · 10-15 NOVEMBER', asof: 'As of 08:50 AEDT',
  h1: 'Front desk performance',
  sub: 'Every call answered, and who handled it.',
  chips: ['Clinic: All sites', 'Agent: All'],
  health: '6 of 6 sources healthy · Best Practice read-back current',
  live: 'All sources healthy · nothing held',
  kpis: [
    { c: K[0], lab: 'Calls answered', val: '412', foot: '0 missed this week' },
    { c: K[1], lab: 'Handled by the AI', val: '87.6%', foot: '361 of 412 calls' },
    { c: K[2], lab: 'Slots refilled', val: '59', foot: 'From the waitlist' },
    { c: K[3], lab: 'Recalls booked', val: '31', foot: 'Of 44 due' },
    { c: K[4], lab: 'Claims held', val: '2', foot: 'BIL-1807 · rejection', crit: 1 }
  ],
  left: {
    kind: 'bars', title: 'Calls answered by day', link: 'View report',
    sub: 'Answered by the AI, and passed to reception.',
    legend: ['Answered by the AI', 'Passed to reception'], max: 80, ticks: [0, 20, 40, 60, 80],
    days: [['Mon', 66, 9], ['Tue', 63, 8], ['Wed', 58, 11], ['Thu', 65, 7], ['Fri', 61, 10], ['Sat', 48, 6]]
  },
  right: {
    title: 'Needs your attention', link: 'View all',
    cards: [
      { tone: 'crit', lab: 'TRANSFERRED · CALL-2048', h: 'Urgent symptoms reported',
        p: ['Passed to the practice nurse', '08:12 · within 40 seconds'], lk: 'Open call' },
      { tone: 'warn', lab: 'NEEDS REVIEW · BIL-1807', h: 'Medicare claim rejected',
        p: ['1 item rejected · claim held', 'Billing · due today'], lk: 'Review' }
    ]
  }
},

'practices-us': {
  nav: NAV_PRAC('Reports'), crumb: 'Reports / Front desk performance', org: 'Westbrook Family Medicine',
  search: 'Search patients, calls...', me: 'SR',
  date: 'THIS WEEK · NOVEMBER 10-15', asof: 'As of 8:50 AM CST',
  h1: 'Front desk performance',
  sub: 'Every call answered, and who handled it.',
  chips: ['Location: All', 'Agent: All'],
  health: '7 of 7 sources healthy · EHR read-back current',
  live: 'All sources healthy · nothing held',
  kpis: [
    { c: K[0], lab: 'Calls answered', val: '412', foot: '0 missed this week' },
    { c: K[1], lab: 'Handled by the AI', val: '87.6%', foot: '361 of 412 calls' },
    { c: K[2], lab: 'Slots refilled', val: '59', foot: 'From the waitlist' },
    { c: K[3], lab: 'Eligibility verified', val: '284', foot: 'Before the visit' },
    { c: K[4], lab: 'Claims held', val: '2', foot: 'RCM-1807 · denial', crit: 1 }
  ],
  left: {
    kind: 'bars', title: 'Calls answered by day', link: 'View report',
    sub: 'Answered by the AI, and passed to your front desk.',
    legend: ['Answered by the AI', 'Passed to front desk'], max: 80, ticks: [0, 20, 40, 60, 80],
    days: [['Mon', 66, 9], ['Tue', 63, 8], ['Wed', 58, 11], ['Thu', 65, 7], ['Fri', 61, 10], ['Sat', 48, 6]]
  },
  right: {
    title: 'Needs your attention', link: 'View all',
    cards: [
      { tone: 'crit', lab: 'TRANSFERRED · CALL-2048', h: 'Urgent symptoms reported',
        p: ['Passed to the nurse line', '8:12 AM · within 40 seconds'], lk: 'Open call' },
      { tone: 'warn', lab: 'NEEDS REVIEW · RCM-1807', h: 'Claim denied · CO-16',
        p: ['Missing information · claim held', 'Revenue cycle · due today'], lk: 'Review' }
    ]
  }
},

/* ══ SCREEN 3 · WORKFORCE PERFORMANCE ═══════════════ homepages ══
 * Founder, 18 Nov 2026: the homepage headline screen is an ANALYTICS
 * screen with a graph, not another list like the care page's. */
'home-au': {
  nav: NAV_CARE('Reports'), crumb: 'Reports / Performance', org: 'Riverlea Health Group',
  search: 'Search tasks, agents...', me: 'AK',
  date: 'LAST 7 DAYS · 11-17 NOVEMBER', asof: 'As of 06:50 AEDT',
  h1: 'Work completed, verified',
  sub: 'Every task read back from the system it ran in.',
  chips: ['Period: 7 days', 'Agent: All'],
  health: 'All 7 sources healthy · read-back current',
  live: 'All sources healthy · nothing held',
  kpis: [
    { c: K[0], lab: 'Verified complete', val: '89.4%', foot: '143 of 160 tasks' },
    { c: K[1], lab: 'Finished without you', val: '88.1%', foot: '141 of 160 eligible' },
    { c: K[2], lab: 'Admin time released', val: '38.5 h', foot: 'Estimate, not a saving' },
    { c: K[3], lab: 'Open exceptions', val: '2', foot: '1 critical · 1 review' },
    { c: K[4], lab: 'Reversed by a human', val: '0', foot: 'Since go-live' }
  ],
  left: {
    kind: 'line', title: 'Verified completions per day', link: 'View report',
    sub: 'Read back from the source system.',
    big: '143', delta: '+12% on last week', max: 30, ticks: [0, 10, 20, 30],
    series: [12, 15, 18, 21, 22, 26, 29], days: ['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue']
  },
  right: {
    title: 'Task outcome mix', link: 'View all',
    cards: [
      { tone: 'info', lab: 'VERIFIED COMPLETE', h: '143 tasks · 89.4%',
        p: ['Read back from the source system'], lk: 'See the evidence' },
      { tone: 'warn', lab: 'HELD FOR A PERSON', h: '2 open exceptions',
        p: ['1 critical · 1 needs review'], lk: 'Review' }
    ]
  }
},

'home-us': {
  nav: NAV_CARE('Reports'), crumb: 'Reports / Performance', org: 'Averly Health Group',
  search: 'Search tasks, agents...', me: 'AK',
  date: 'LAST 7 DAYS · NOVEMBER 11-17', asof: 'As of 6:50 AM CST',
  h1: 'Work completed, verified',
  sub: 'Every task read back from the system it ran in.',
  chips: ['Period: 7 days', 'Agent: All'],
  health: 'All 7 sources healthy · read-back current',
  live: 'All sources healthy · nothing held',
  kpis: [
    { c: K[0], lab: 'Verified complete', val: '89.4%', foot: '143 of 160 tasks' },
    { c: K[1], lab: 'Finished without you', val: '88.1%', foot: '141 of 160 eligible' },
    { c: K[2], lab: 'Admin time released', val: '38.5 h', foot: 'Estimate, not a saving' },
    { c: K[3], lab: 'Open exceptions', val: '2', foot: '1 critical · 1 review' },
    { c: K[4], lab: 'Reversed by a human', val: '0', foot: 'Since go-live' }
  ],
  left: {
    kind: 'line', title: 'Verified completions per day', link: 'View report',
    sub: 'Read back from the source system.',
    big: '143', delta: '+12% on last week', max: 30, ticks: [0, 10, 20, 30],
    series: [12, 15, 18, 21, 22, 26, 29], days: ['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue']
  },
  right: {
    title: 'Task outcome mix', link: 'View all',
    cards: [
      { tone: 'info', lab: 'VERIFIED COMPLETE', h: '143 tasks · 89.4%',
        p: ['Read back from the source system'], lk: 'See the evidence' },
      { tone: 'warn', lab: 'HELD FOR A PERSON', h: '2 open exceptions',
        p: ['1 critical · 1 needs review'], lk: 'Review' }
    ]
  }
},

/* ══ SCREEN 4 · ONE TASK, STEP BY STEP ══════════════ why-novada ══
 * Founder, 18 Nov 2026: find another screen for the About page. This
 * is the export's Task Execution Detail: the evidence trail of one task,
 * which is the page's argument (measured, recorded, verified). */
'why-au': {
  nav: NAV_CARE('Tasks & Exceptions'), crumb: 'Tasks & Exceptions / ROS-2050', org: 'Hartwell Care Group',
  search: 'Search tasks, agents...', me: 'MO',
  date: 'AI ROSTERING AGENT / TASK ROS-2050', asof: 'Shift 07:00-15:00',
  h1: 'Replace cancelled shift',
  sub: 'Covered and verified by read-back. No approval needed.',
  chips: ['Export'],
  health: 'Verified complete · ShiftCare read-back 06:21',
  live: 'All sources healthy · nothing held',
  kpis: [
    { c: K[0], lab: 'Execution duration', val: '13 min', foot: '06:08 to 06:21' },
    { c: '#067A52', lab: 'Suitable replacement', val: '1', foot: 'Worker acceptance recorded' },
    { c: K[1], lab: 'Policy checks passed', val: '6 / 6', foot: 'No eligibility exceptions' },
    { c: K[2], lab: 'Manager interventions', val: '0', foot: 'Within authorised scope' },
    { c: K[3], lab: 'Source verified', val: 'Yes', foot: 'ShiftCare · SRC-2050' }
  ],
  left: {
    kind: 'timeline', title: 'Autonomous execution timeline', link: 'Audit trail',
    sub: 'Times AEDT · each step logged',
    rows: [
      { t: '06:08', h: 'Sick call received', d: 'Identity checked · matched to shift' },
      { t: '06:09', h: 'Shift and service identified', d: 'ShiftCare shift lookup' },
      { t: '06:10', h: 'Worker eligibility evaluated', d: 'Rules engine · 6/6 passed' },
      { t: '06:12', h: 'Offers sent to eligible workers', d: 'SMS and voice' },
      { t: '06:17', h: 'Replacement accepted', d: 'Conditions re-checked' },
      { t: '06:21', h: 'Outcome verified in ShiftCare', d: 'Read-back matched worker and shift' }
    ]
  },
  right: {
    title: 'Task summary', link: 'Export',
    cards: [
      { tone: 'info', lab: 'OPERATING MODE', h: 'Autonomous',
        p: ['Within standing policy v2.4'], lk: 'See the policy' },
      { tone: 'info', lab: 'SOURCE OF TRUTH', h: 'ShiftCare roster',
        p: ['Read-back verified 06:21'], lk: 'See the evidence' }
    ]
  }
},

'why-us': {
  nav: NAV_CARE('Tasks & Exceptions'), crumb: 'Tasks & Exceptions / SCH-2050', org: 'Northvale Health Partners',
  search: 'Search tasks, agents...', me: 'MO',
  date: 'AI SCHEDULING AGENT / TASK SCH-2050', asof: 'Visit 7:00 AM-3:00 PM',
  h1: 'Replace canceled visit',
  sub: 'Covered and verified by read-back. No approval needed.',
  chips: ['Export'],
  health: 'Verified complete · AxisCare read-back 6:21 AM',
  live: 'All sources healthy · nothing held',
  kpis: [
    { c: K[0], lab: 'Execution duration', val: '13 min', foot: '6:08 to 6:21 AM' },
    { c: '#067A52', lab: 'Suitable replacement', val: '1', foot: 'Caregiver acceptance recorded' },
    { c: K[1], lab: 'Policy checks passed', val: '6 / 6', foot: 'No eligibility exceptions' },
    { c: K[2], lab: 'Manager interventions', val: '0', foot: 'Within authorized scope' },
    { c: K[3], lab: 'Source verified', val: 'Yes', foot: 'AxisCare · SRC-2050' }
  ],
  left: {
    kind: 'timeline', title: 'Autonomous execution timeline', link: 'Audit trail',
    sub: 'Times CST · each step logged',
    rows: [
      { t: '6:08', h: 'Caregiver call-off received', d: 'Identity checked · matched to visit' },
      { t: '6:09', h: 'Client and visit identified', d: 'AxisCare visit lookup' },
      { t: '6:10', h: 'Caregiver eligibility evaluated', d: 'Rules engine · 6/6 passed' },
      { t: '6:12', h: 'Offers sent to eligible caregivers', d: 'Text and voice' },
      { t: '6:17', h: 'Replacement accepted', d: 'Conditions re-checked' },
      { t: '6:21', h: 'Outcome verified in AxisCare', d: 'Read-back matched caregiver and visit' }
    ]
  },
  right: {
    title: 'Task summary', link: 'Export',
    cards: [
      { tone: 'info', lab: 'OPERATING MODE', h: 'Autonomous',
        p: ['Within standing policy v2.4'], lk: 'See the policy' },
      { tone: 'info', lab: 'SOURCE OF TRUTH', h: 'AxisCare schedule',
        p: ['Read-back verified 6:21 AM'], lk: 'See the evidence' }
    ]
  }
}

};

/* ══ WORKFORCE CONTINUITY HEROES (AU), 25 Nov 2026 ══════════════════
 * Founder: build the Workforce Continuity pages exactly like the care
 * page, with the dashboard-and-person hero, and make every page's
 * screen unique. So each page below uses a DIFFERENT panel kind:
 *   wc-home pool · wc-wwd kanban · wc-hiw timeline · wc-wws heatmap
 *   wc-ndis shifts · wc-hosp bars · wc-con table · wc-mfg line
 *   wc-min roles · home-both (the "/" landing page) pool+agents
 * Same product, the Workforce Continuity side of it. Org names invented.
 */
var NAV_WC = function (on) {
  return [['Overview', 'grid'], ['Casual pool', 'users'], ['Recruitment', 'list'],
          ['Cover requests', 'target'], ['Readiness', 'shield'], ['Reports', 'doc'], ['Settings', 'gear']]
    .map(function (n) { return [n[0], n[1], n[0] === on]; });
};
var WCB = { brandSub: 'WORKFORCE CONTINUITY', liveHd: 'Cover service live' };
function wc(o) { for (var k in WCB) if (!(k in o)) o[k] = WCB[k]; return o; }

window.VARIANTS['wc-home'] = wc({
  nav: NAV_WC('Overview'), crumb: 'Overview', org: 'Brightwater Group',
  search: 'Search workers, requests...', me: 'KL',
  date: 'TUESDAY 25 NOVEMBER 2026', asof: 'As of 06:50 AEDT',
  h1: 'Your casual pool, ready',
  sub: 'Readiness and cover across your own team.',
  chips: ['Site: All', 'Role: All'],
  health: 'Roster handover current · nothing waiting',
  live: 'All requests have an owner',
  kpis: [
    { c: K[0], lab: 'Pool members', val: '84', foot: 'Directly employed' },
    { c: K[1], lab: 'Ready today', val: '76', foot: 'Credential-eligible' },
    { c: K[2], lab: 'Cover confirmed', val: '31', foot: 'Last 7 days' },
    { c: K[3], lab: 'Open gaps', val: '1', foot: 'With your contact' },
    { c: K[4], lab: 'Renewals due', val: '9', foot: 'Next 30 days' }
  ],
  left: { kind: 'pool', title: 'Pool readiness', link: 'View pool', sub: 'Checked against role and site.',
    pct: 90, big: '90%', cap: 'ready',
    rows: [
      { l: 'O', c: B, n: 'Olivia Hart', s: 'Support worker · North', st: 'Ready' },
      { l: 'D', c: P, n: 'Daniel Lee', s: 'Support worker · North', st: 'Ready' },
      { l: 'C', c: T, n: 'Chris Reid', s: 'Induction expired', st: 'Held', hold: 1 },
      { l: 'A', c: V, n: 'Ava Nguyen', s: 'Team leader · All sites', st: 'Ready' },
      { l: 'J', c: D, n: 'Jamie Patel', s: 'Onboarding in progress', st: 'Pending', hold: 1 }
    ] },
  right: { title: 'Needs your attention', link: 'View all', cards: [
    { tone: 'crit', lab: 'OPEN GAP · CR-2048', h: 'Fri 07:00 · north site', p: ['3 contacted · no acceptance yet', 'Sent to your contact 05:40'], lk: 'Open request' },
    { tone: 'warn', lab: 'RENEWAL · WRK-119', h: 'Induction expired', p: ['Held from new cover'], lk: 'Follow up' }] }
});

window.VARIANTS['wc-wwd'] = wc({
  nav: NAV_WC('Recruitment'), crumb: 'Recruitment / Pipeline', org: 'Coastal Care Group',
  search: 'Search candidates...', me: 'RS',
  date: 'RECRUITMENT · THIS MONTH', asof: 'As of 09:10 AEDT',
  h1: 'Recruiting into your gaps',
  sub: 'You interview and approve. We run the rest.',
  chips: ['Role: All', 'Site: All'],
  health: 'Job board receipts current · 2 awaiting approval',
  live: 'Pipeline current',
  kpis: [
    { c: K[0], lab: 'Applications', val: '46', foot: 'This month' },
    { c: K[1], lab: 'Screened', val: '19', foot: 'Against your criteria' },
    { c: K[2], lab: 'Interviews', val: '8', foot: 'Booked with you' },
    { c: K[3], lab: 'Onboarding', val: '5', foot: 'Documents in progress' },
    { c: K[4], lab: 'Hired by you', val: '4', foot: 'Your decision' }
  ],
  left: { kind: 'kanban', title: 'Candidate pipeline', link: 'View all', sub: 'Every move to Hired is your decision.',
    cols: [
      { h: 'Screening', cards: [{ n: 'Priya S.', s: 'Support worker · North', tag: 'References', bg: '#EEF3FF', fg: '#2357F5' }, { n: 'Tom W.', s: 'Support worker · East', tag: 'Checks', bg: '#EEF3FF', fg: '#2357F5' }] },
      { h: 'Interview', cards: [{ n: 'Hana K.', s: 'Thu 10:30 with you', tag: 'Booked', bg: '#E9FAF3', fg: '#067A52' }, { n: 'Leo M.', s: 'Awaiting your slot', tag: 'Pending', bg: '#FFF5DC', fg: '#8F5A00' }] },
      { h: 'Onboarding', cards: [{ n: 'Grace T.', s: 'Induction 2 of 4', tag: 'In progress', bg: '#EEF3FF', fg: '#2357F5' }] },
      { h: 'Ready', cards: [{ n: 'Sam B.', s: 'Joined the pool', tag: 'Ready', bg: '#E9FAF3', fg: '#067A52' }] }
    ] },
  right: { title: 'Waiting on you', link: 'View all', cards: [
    { tone: 'info', lab: 'INTERVIEW · LEO M.', h: 'Pick a time', p: ['Support worker · east site'], lk: 'Choose slot' },
    { tone: 'warn', lab: 'HIRING DECISION', h: 'Hana K. interviewed', p: ['Evidence packet ready'], lk: 'Decide' }] }
});

window.VARIANTS['wc-hiw'] = wc({
  nav: NAV_WC('Cover requests'), crumb: 'Cover requests / CR-2050', org: 'Ashford Community Care',
  search: 'Search requests...', me: 'MO',
  date: 'COVER REQUEST · CR-2050', asof: 'Fri 17:00–23:00',
  h1: 'Friday evening, covered',
  sub: 'Request to recorded outcome in 24 minutes.',
  chips: ['Export'],
  health: 'Accepted · roster handover sent 15:12',
  live: 'All requests have an owner',
  kpis: [
    { c: K[0], lab: 'Request to cover', val: '24 min', foot: '14:48 to 15:12' },
    { c: '#067A52', lab: 'Workers contacted', val: '3', foot: 'All eligible' },
    { c: K[1], lab: 'Checks passed', val: '4 / 4', foot: 'Role, site, hours, evidence' },
    { c: K[2], lab: 'Your time needed', val: '0 min', foot: 'Within the agreed rules' },
    { c: K[3], lab: 'Outcome', val: 'Covered', foot: 'Handover sent' }
  ],
  left: { kind: 'timeline', title: 'Request timeline', link: 'History', sub: 'Every step recorded',
    rows: [
      { t: '14:48', h: 'Request received', d: 'Friday evening · north location' },
      { t: '14:50', h: 'Pool checked', d: 'Preparation, availability, commitments' },
      { t: '14:51', h: 'Offers sent to 3 workers', d: 'SMS and phone' },
      { t: '15:06', h: 'Sam accepted the shift', d: 'Requirements re-checked' },
      { t: '15:08', h: 'Assignment recorded', d: 'You and the worker notified' },
      { t: '15:12', h: 'Roster handover sent', d: 'To your roster owner' }
    ] },
  right: { title: 'Request detail', link: 'Export', cards: [
    { tone: 'info', lab: 'REQUESTED BY', h: 'Operations lead', p: ['Through Novada'], lk: 'View request' },
    { tone: 'info', lab: 'ESCALATION', h: 'Not needed', p: ['Deadline was 15:00 Fri'], lk: 'See the rules' }] }
});

window.VARIANTS['wc-wws'] = wc({
  nav: NAV_WC('Reports'), crumb: 'Reports / Demand', org: 'Meridian Group',
  search: 'Search the record...', me: 'AK',
  date: 'LAST 12 WEEKS', asof: 'As of 08:00 AEDT',
  h1: 'Where cover is needed',
  sub: 'Recurring requests, by location and day.',
  chips: ['Period: 12 weeks', 'Role: All'],
  health: 'Demand recalculated weekly',
  live: 'Pool plan current',
  kpis: [
    { c: K[0], lab: 'Requests', val: '148', foot: 'Last 12 weeks' },
    { c: K[1], lab: 'Busiest day', val: 'Sat', foot: 'Evenings' },
    { c: K[2], lab: 'Locations', val: '4', foot: 'In scope' },
    { c: K[3], lab: 'Pool target', val: '24', foot: 'Workers' },
    { c: K[4], lab: 'To recruit', val: '10', foot: 'Weekend gaps' }
  ],
  left: { kind: 'heatmap', title: 'Demand by location', link: 'View report', sub: 'Darker means more requests.',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    rows: [['North', [1, 1, 2, 1, 3, 4, 3]], ['Central', [0, 1, 1, 1, 2, 3, 2]], ['East', [1, 0, 1, 2, 2, 4, 4]], ['South', [0, 0, 1, 1, 1, 2, 1]], ['West', [0, 1, 0, 1, 2, 3, 2]]] },
  right: { title: 'Pool plan', link: 'Edit', cards: [
    { tone: 'info', lab: 'START WITH', h: 'Weekend evenings', p: ['North and east first'], lk: 'See the plan' },
    { tone: 'warn', lab: 'GAP', h: '10 workers to recruit', p: ['Support worker roles'], lk: 'Start recruiting' }] }
});

window.VARIANTS['wc-ndis'] = wc({
  nav: NAV_WC('Cover requests'), crumb: 'Cover requests / Open', org: 'Harbourside Support',
  search: 'Search shifts, workers...', me: 'JD',
  date: 'TODAY · 25 NOVEMBER', asof: 'As of 06:50 AEDT',
  h1: 'Shift cover, this morning',
  sub: 'From your own casual support team.',
  chips: ['Service: All', 'Site: All'],
  health: 'ShiftCare handover current',
  live: 'All requests have an owner',
  kpis: [
    { c: K[0], lab: 'Requests today', val: '6', foot: 'Since 05:00' },
    { c: K[1], lab: 'Covered', val: '4', foot: 'Worker accepted' },
    { c: K[2], lab: 'Contacting', val: '1', foot: '3 eligible workers' },
    { c: K[3], lab: 'With your contact', val: '1', foot: 'Before deadline' },
    { c: K[4], lab: 'Pool ready', val: '18', foot: 'Of 30 target' }
  ],
  left: { kind: 'shifts', title: 'Open and recent shifts', link: 'View all', sub: 'Confirmed only after the worker accepts.',
    cards: [
      { tone: 'ok', tag: 'COVERED', h: 'SIL North · 07:00', s: 'Olivia H. accepted 05:58', s2: 'Handover sent' },
      { tone: 'info', tag: 'CONTACTING', h: 'Community · 09:00', s: '3 eligible workers', s2: 'Offers sent 06:31' },
      { tone: 'crit', tag: 'OPEN GAP', h: 'SIL East · 14:00', s: 'No acceptance yet', s2: 'Sent to Jordan 06:40' },
      { tone: 'ok', tag: 'COVERED', h: 'Home care · 08:30', s: 'Daniel L. accepted', s2: 'Handover sent' },
      { tone: 'ok', tag: 'COVERED', h: 'SIL South · 15:00', s: 'Ava N. accepted', s2: 'Handover sent' },
      { tone: 'warn', tag: 'PLANNED', h: 'Community · Sat 10:00', s: 'Requested in advance', s2: 'Offers go out Thu' }
    ] },
  right: { title: 'Needs your attention', link: 'View all', cards: [
    { tone: 'crit', lab: 'OPEN GAP · CR-2061', h: 'SIL East 14:00', p: ['2:1 support · 1 confirmed'], lk: 'Open request' },
    { tone: 'warn', lab: 'READINESS', h: '3 renewals due', p: ['First aid · this month'], lk: 'Follow up' }] }
});

window.VARIANTS['wc-hosp'] = wc({
  nav: NAV_WC('Reports'), crumb: 'Reports / Event staffing', org: 'The Quayside Hotel',
  search: 'Search staff, events...', me: 'EM',
  date: 'THIS WEEK · 24-30 NOVEMBER', asof: 'As of 10:00 AEDT',
  h1: 'Busy week, staffed',
  sub: 'Your casual team, ready for every function.',
  chips: ['Venue: All', 'Role: All'],
  health: 'Venue inductions current',
  live: 'All requests have an owner',
  kpis: [
    { c: K[0], lab: 'Shifts requested', val: '42', foot: 'This week' },
    { c: K[1], lab: 'Accepted', val: '39', foot: 'From your pool' },
    { c: K[2], lab: 'Functions', val: '5', foot: 'Incl. Saturday gala' },
    { c: K[3], lab: 'Open positions', val: '1', foot: 'With your manager' },
    { c: K[4], lab: 'Casuals inducted', val: '26', foot: 'Venue ready' }
  ],
  left: { kind: 'bars', title: 'Shifts by day', link: 'View report', sub: 'Accepted, and still open.',
    legend: ['Accepted', 'Still open'], max: 12, ticks: [0, 4, 8, 12],
    days: [['Mon', 4, 0], ['Tue', 5, 0], ['Wed', 6, 0], ['Thu', 7, 0], ['Fri', 8, 0], ['Sat', 9, 1]] },
  right: { title: 'Saturday gala', link: 'Open', cards: [
    { tone: 'warn', lab: 'F&B ATTENDANTS', h: '1 of 2 confirmed', p: ['3 casuals contacted'], lk: 'View request' },
    { tone: 'info', lab: 'BAR STAFF', h: '3 of 3 confirmed', p: ['Venue induction current'], lk: 'View' }] }
});

window.VARIANTS['wc-con'] = wc({
  nav: NAV_WC('Cover requests'), crumb: 'Cover requests / Sites', org: 'Ridgeline Builders',
  search: 'Search crew, sites...', me: 'BT',
  date: 'MONDAY · 07:00 STARTS', asof: 'As of 05:30 AEDT',
  h1: 'Monday crew, confirmed',
  sub: 'Readiness checked by task and site.',
  chips: ['Site: All', 'Trade: All'],
  health: 'Site inductions current · 1 replacement',
  live: 'All requests have an owner',
  kpis: [
    { c: K[0], lab: 'Crew requested', val: '14', foot: '3 sites' },
    { c: K[1], lab: 'Confirmed', val: '13', foot: 'Worker accepted' },
    { c: K[2], lab: 'Replacements', val: '1', foot: 'Withdrawal Sun' },
    { c: K[3], lab: 'Site-ready pool', val: '22', foot: 'Inducted' },
    { c: K[4], lab: 'Tickets due', val: '3', foot: 'Next 30 days' }
  ],
  left: { kind: 'table', title: 'Monday assignments', link: 'View all', sub: 'Confirmed only after acceptance.',
    rows: [
      { t: '07:00', a: 'Riverside', d: 'Labourer · D. Moore (replacement)', s: 'Site induction', k: 'Confirmed' },
      { t: '07:00', a: 'Riverside', d: 'Labourer · J. Lee', s: 'Site induction', k: 'Confirmed' },
      { t: '07:00', a: 'Riverside', d: 'Trade assistant · A. Singh', s: 'Task briefing', k: 'Confirmed' },
      { t: '06:30', a: 'Hilltop', d: 'Plant operator · R. Ford', s: 'Licence current', k: 'Confirmed' },
      { t: '07:30', a: 'Bayview', d: 'Site clean-up · P. Wood', s: 'Site induction', k: 'Confirmed' },
      { t: '07:30', a: 'Bayview', d: 'Labourer · open', s: '4 contacted', k: 'Open', hold: 1 }
    ] },
  right: { title: 'Site contacts', link: 'View all', cards: [
    { tone: 'warn', lab: 'OPEN · BAYVIEW', h: 'Labourer 07:30', p: ['Deadline 06:00'], lk: 'Open request' },
    { tone: 'info', lab: 'REPLACED · RIVERSIDE', h: 'D. Moore accepted', p: ['Sun 17:02'], lk: 'View' }] }
});

window.VARIANTS['wc-mfg'] = wc({
  nav: NAV_WC('Reports'), crumb: 'Reports / Cover trend', org: 'Northgate Logistics',
  search: 'Search workers, shifts...', me: 'PK',
  date: 'LAST 7 WEEKS', asof: 'As of 06:00 AEDT',
  h1: 'Cover across three sites',
  sub: 'Factory, warehouse and north depot.',
  chips: ['Site: All', 'Shift: All'],
  health: 'Induction records current · 1 licence due',
  live: 'All requests have an owner',
  kpis: [
    { c: K[0], lab: 'Shifts covered', val: '212', foot: 'Last 7 weeks' },
    { c: K[1], lab: 'From your pool', val: '100%', foot: 'Directly employed' },
    { c: K[2], lab: 'Ready workers', val: '34', foot: 'Inducted by site' },
    { c: K[3], lab: 'Open now', val: '1', foot: 'North depot' },
    { c: K[4], lab: 'Expiring items', val: '4', foot: 'Flagged' }
  ],
  left: { kind: 'line', title: 'Shifts covered per week', link: 'View report', sub: 'Accepted and recorded.',
    big: '212', delta: '+18% on the prior 7 weeks', max: 40, ticks: [0, 10, 20, 30, 40],
    series: [22, 26, 28, 30, 33, 35, 38], days: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'] },
  right: { title: 'North depot · today', link: 'Open', cards: [
    { tone: 'warn', lab: 'WAREHOUSE ASSISTANT', h: '1 of 2 confirmed', p: ['06:00–14:00'], lk: 'View request' },
    { tone: 'crit', lab: 'FORKLIFT LICENCE', h: 'K. Brown expires 12 Dec', p: ['Held from forklift shifts'], lk: 'Follow up' }] }
});

window.VARIANTS['wc-min'] = wc({
  nav: NAV_WC('Readiness'), crumb: 'Readiness / By site', org: 'Red Range Resources',
  search: 'Search workers, sites...', me: 'GH',
  date: 'SITE READINESS', asof: 'As of 05:00 AWST',
  h1: 'Ready for the right site',
  sub: 'Credentials and induction, by location.',
  chips: ['Site: All', 'Role: All'],
  health: 'Site requirements current · 2 items expiring',
  live: 'All requests have an owner',
  kpis: [
    { c: K[0], lab: 'Pool members', val: '28', foot: 'Directly employed' },
    { c: K[1], lab: 'Ready for Site A', val: '19', foot: 'All items current' },
    { c: K[2], lab: 'Ready for Site B', val: '12', foot: 'Confined space' },
    { c: K[3], lab: 'Expiring', val: '2', foot: 'Next 14 days' },
    { c: K[4], lab: 'Lead time', val: '72 h', foot: 'Agreed' }
  ],
  left: { kind: 'roles', title: 'Readiness by worker', link: 'View all',
    rows: [
      { l: 'R', c: B, n: 'R. Clarke · stores', s: 'Site A · Site B · Camp', st: 'Ready' },
      { l: 'T', c: P, n: 'T. Nguyen · trade assist', s: 'Site B medical expiring', st: 'Expiring', hold: 1 },
      { l: 'M', c: T, n: 'M. Evans · maintenance', s: 'Site A only', st: 'Ready' },
      { l: 'S', c: V, n: 'S. Patel · site admin', s: 'Site B induction missing', st: 'Held', hold: 1 },
      { l: 'K', c: D, n: 'K. Doyle · camp services', s: 'All sites', st: 'Ready' }
    ] },
  right: { title: 'Site A · next day shift', link: 'Open', cards: [
    { tone: 'info', lab: 'STORES WORKER', h: 'R. Clarke accepted', p: ['Mobilisation confirmed'], lk: 'View request' },
    { tone: 'warn', lab: 'EXPIRING', h: 'Site B medical', p: ['T. Nguyen · 9 days'], lk: 'Follow up' }] }
});

/* the "/" landing page: both services in one view */
window.VARIANTS['home-both'] = wc({
  brandSub: 'OPERATIONS', liveHd: 'All services live',
  nav: [['Overview', 'grid', true], ['AI Workforce', 'diamond', false], ['Casual pool', 'users', false], ['Cover requests', 'target', false], ['Reports', 'doc', false], ['Settings', 'gear', false]],
  crumb: 'Overview', org: 'Brightwater Group',
  search: 'Search work, people...', me: 'KL',
  date: 'THIS MORNING', asof: 'As of 06:50 AEDT',
  h1: 'Work done. Shifts covered.',
  sub: 'AI agents and your own people, in one view.',
  chips: ['Site: All'],
  health: 'All sources healthy',
  live: 'Nothing waiting on a system',
  kpis: [
    { c: K[0], lab: 'Tasks verified', val: '143', foot: 'AI Workforce' },
    { c: K[1], lab: 'Shifts covered', val: '31', foot: 'Your casual pool' },
    { c: K[2], lab: 'Held for you', val: '2', foot: 'Needs a decision' },
    { c: K[3], lab: 'Pool ready', val: '76', foot: 'Of 84 workers' },
    { c: K[4], lab: 'Reversed', val: '0', foot: 'Since go-live' }
  ],
  left: { kind: 'pool', title: 'Overnight, at a glance', link: 'View all', sub: 'Both services report here.',
    pct: 94, big: '94%', cap: 'handled',
    rows: [
      { l: 'R', c: B, n: 'Rostering Agent', s: 'Evening shift reassigned', st: 'Done' },
      { l: 'S', c: P, n: 'Sam B. · casual pool', s: 'Accepted Fri 17:00', st: 'Covered' },
      { l: 'C', c: T, n: 'Compliance Agent', s: 'Clearance reminder sent', st: 'Done' },
      { l: 'O', c: V, n: 'Olivia H. · casual pool', s: 'Accepted Sat 07:00', st: 'Covered' },
      { l: 'F', c: D, n: 'Finance', s: 'Invoice above your limit', st: 'Held', hold: 1 }
    ] },
  right: { title: 'Held for you', link: 'View all', cards: [
    { tone: 'warn', lab: 'APPROVAL · FIN-1807', h: 'Invoice above your limit', p: ['Held · nothing sent'], lk: 'Review' },
    { tone: 'crit', lab: 'OPEN GAP · CR-2048', h: 'Fri 07:00 · north', p: ['With your contact'], lk: 'Open' }] }
});

/* ── US versions of the WC + home dashboards (novadatech.com) ──────────
 * Same layouts, US terms: flex not casual, orientation not induction,
 * US spelling, 12-hour times, US time zones, US date order. */
function usify(v, extra) {
  var R = [
    ['TUESDAY 25 NOVEMBER 2026', 'TUESDAY, NOVEMBER 25, 2026'], ['TODAY · 25 NOVEMBER', 'TODAY · NOVEMBER 25'],
    ['THIS WEEK · 24-30 NOVEMBER', 'THIS WEEK · NOV 24-30'], ['expires 12 Dec', 'expires Dec 12'],
    ['AEDT', 'ET'], ['AWST', 'MT'],
    ['Casuals inducted', 'Flex staff oriented'], ['casuals contacted', 'flex staff contacted'],
    ['Casual pool', 'Flex pool'], ['casual pool', 'flex pool'], ['casual support team', 'flex care team'],
    ['casual team', 'flex team'], ['Casual', 'Flex'], ['casual', 'flex'],
    ['Inductions', 'Orientations'], ['inductions', 'orientations'], ['Induction', 'Orientation'],
    ['induction', 'orientation'], ['Inducted', 'Oriented'], ['inducted', 'oriented'],
    ['Roster handover', 'Schedule handover'], ['roster handover', 'schedule handover'], ['roster owner', 'scheduler'],
    ['ShiftCare handover', 'Scheduling system handover'], ['SMS and phone', 'Text and phone'],
    ['SIL North', 'Home care North'], ['SIL East', 'Senior living East'], ['SIL South', 'Home care South'],
    ['Home care · 08:30', 'Memory care · 08:30'], ['2:1 support', 'Two-person assist'], ['First aid', 'CPR and first aid'],
    ['Labourer', 'Laborer'], ['Trade assistant', 'Trade helper'], ['trade assist', 'trade helper'],
    ['Plant operator', 'Equipment operator'], ['Site clean-up', 'Site cleanup'], ['Licence current', 'License current'],
    ['Tickets due', 'Certifications due'], ['F&B ATTENDANTS', 'BANQUET SERVERS'], ['Functions', 'Events'],
    ['every function', 'every event'], ['Factory, warehouse and north depot', 'Plant, warehouse and north DC'],
    ['North depot', 'North DC'], ['WAREHOUSE ASSISTANT', 'WAREHOUSE ASSOCIATE'], ['FORKLIFT LICENCE', 'FORKLIFT CERTIFICATION'],
    ['licence', 'license'], ['Mobilisation', 'Mobilization'], ['STORES WORKER', 'WAREHOUSE WORKER'], [' · stores', ' · warehouse'],
    ['Camp', 'Yard'], ['camp services', 'yard services'], ['Site B medical', 'Site B MSHA training'],
    ['medical expiring', 'MSHA training expiring'], ['Job board receipts', 'Job board postings']
  ];
  var s = JSON.stringify(v);
  R.forEach(function (r) { s = s.split(r[0]).join(r[1]); });
  // 24-hour clock to 12-hour, US style
  s = s.replace(/\b([01]\d|2[0-3]):([0-5]\d)\b/g, function (m, h, mm) {
    h = +h; var ap = h < 12 ? 'AM' : 'PM'; var hh = h % 12 === 0 ? 12 : h % 12;
    return hh + ':' + mm + ' ' + ap;
  });
  var o = JSON.parse(s);
  if (extra) for (var k in extra) o[k] = extra[k];
  return o;
}
window.VARIANTS['wc-us-home'] = usify(window.VARIANTS['wc-home'], { org: 'Brightwater Senior Living' });
window.VARIANTS['wc-us-wwd'] = usify(window.VARIANTS['wc-wwd'], { org: 'Lakeshore Home Care' });
window.VARIANTS['wc-us-hiw'] = usify(window.VARIANTS['wc-hiw'], { org: 'Ashford Home Health' });
window.VARIANTS['wc-us-wws'] = usify(window.VARIANTS['wc-wws'], { org: 'Meridian Group' });
window.VARIANTS['wc-us-ndis'] = usify(window.VARIANTS['wc-ndis'], { org: 'Harborview Senior Care' });
window.VARIANTS['wc-us-hosp'] = usify(window.VARIANTS['wc-hosp'], { org: 'The Quayside Hotel' });
window.VARIANTS['wc-us-con'] = usify(window.VARIANTS['wc-con'], { org: 'Ridgeline Builders' });
window.VARIANTS['wc-us-mfg'] = usify(window.VARIANTS['wc-mfg'], { org: 'Northgate Logistics' });
window.VARIANTS['wc-us-min'] = usify(window.VARIANTS['wc-min'], { org: 'Red Mesa Resources' });
window.VARIANTS['home-both-us'] = usify(window.VARIANTS['home-both'], {});
