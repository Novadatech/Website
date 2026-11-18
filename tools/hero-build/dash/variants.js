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
  return [['Overview', 'grid'], ['AI Agents', 'diamond'],
          ['Tasks & Exceptions', 'list'], ['Calls & Messages', 'target'],
          ['Integrations', 'dna'], ['Reports', 'doc'], ['Settings', 'gear']]
    .map(function (n) { return [n[0], n[1], n[0] === on]; });
};
var NAV_PRAC = function (on) {
  return [['Overview', 'grid'], ['Patient Access', 'phone'],
          ['AI Agents', 'diamond'], ['Appointments', 'cal'],
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
    kind: 'roles', title: 'Your AI Operations Agents', link: 'View all agents',
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
    kind: 'roles', title: 'Your AI Operations Agents', link: 'View all agents',
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
