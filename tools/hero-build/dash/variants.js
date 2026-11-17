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
 * ⚠️ care-au is NOT shipped from here. The AU care hero was approved on
 * the REAL Figma export and stays as it is. care-au exists only so the
 * replica can be diffed against that ground truth.
 *
 * ⚠️ ORG NAMES ARE INVENTED PLACEHOLDERS. Never put a real provider's
 * name in a product mock: it reads as a customer claim.
 */
var B = '#2357F5', P = '#7547F5', T = '#3287B6', V = '#8484E0', D = '#0F7B8A';
var K = ['#2357F5', '#7547F5', '#1487AD', '#8792A9', '#D94158'];

var NAV_CARE = function (on) {
  return [['Overview', 'grid'], ['AI Employees', 'diamond'],
          ['Tasks & Exceptions', 'list'], ['Calls & Messages', 'target'],
          ['Integrations', 'dna'], ['Reports', 'doc'], ['Settings', 'gear']]
    .map(function (n) { return [n[0], n[1], n[0] === on]; });
};
var NAV_PRAC = function (on) {
  return [['Overview', 'grid'], ['Patient Access', 'phone'],
          ['AI Employees', 'diamond'], ['Appointments', 'cal'],
          ['Billing & Claims', 'card'], ['Reports', 'doc'], ['Settings', 'gear']]
    .map(function (n) { return [n[0], n[1], n[0] === on]; });
};

window.VARIANTS = {

/* ══ SCREEN 1 · OVERVIEW ════════════════════ care AI Workforce ══ */

'care-au': {   /* calibration copy of the real Figma export */
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

'care-us': {
  nav: NAV_CARE('Overview'), crumb: 'Overview', org: 'Northvale Home Care',
  search: 'Search tasks, employees...', me: 'DM',
  date: 'TUESDAY, NOVEMBER 17, 2026', asof: 'As of 6:50 AM CST',
  h1: 'Your AI Workforce overview',
  sub: 'Verified work and exceptions across five AI employees.',
  chips: ['Location: All', 'AI employee: All'],
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
    kind: 'roles', title: 'Your AI workforce', link: 'View all employees',
    rows: [
      { l: 'S', c: B, n: 'Scheduling Coordinator', s: '3 shifts verified · 1 critical', st: 'Active · export held', hold: 1 },
      { l: 'C', c: P, n: 'Compliance Coordinator', s: 'Credential sync verified', st: 'Active' },
      { l: 'H', c: T, n: 'HR Coordinator', s: 'Timesheets reconciled · 1 review', st: 'Active' },
      { l: 'A', c: V, n: 'After-Hours Coordinator', s: '4 contacts · 1 escalated', st: 'Active' },
      { l: 'O', c: D, n: 'Operations Coordinator', s: 'Daily readiness prepared', st: 'Active' }
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

/* ══ SCREEN 2 · PATIENT ACCESS ═══════════════════ practices ═════ */

'practices-au': {
  nav: NAV_PRAC('Patient Access'), crumb: 'Patient Access', org: 'Marlowe Family Practice',
  search: 'Search patients, calls...', me: 'SR',
  date: 'TUESDAY 17 NOVEMBER 2026', asof: 'As of 11:40 AEDT',
  h1: 'Your front desk this morning',
  sub: 'Calls, bookings and referrals, across six AI employees.',
  chips: ['Clinic: All sites', 'AI employee: All'],
  health: '6 of 7 sources healthy · Claims queue degraded',
  live: 'Claims queue slow · affected work held',
  kpis: [
    { c: K[0], lab: 'Calls answered', val: '86', foot: 'Since 07:00 · 0 missed' },
    { c: K[1], lab: 'Handled without you', val: '91.4%', foot: '79 of 86 calls' },
    { c: K[2], lab: 'Slots refilled', val: '14', foot: 'From the waitlist' },
    { c: K[3], lab: 'Referrals waiting', val: '0', foot: 'Every file complete' },
    { c: K[4], lab: 'Claims held', val: '2', foot: 'BIL-4411 · above limit', crit: 1 }
  ],
  left: {
    kind: 'roles', title: 'Your AI employees', link: 'View all employees',
    rows: [
      { l: 'R', c: B, n: 'Reception & Patient Access', s: '86 calls · 0 missed', st: 'Active' },
      { l: 'A', c: P, n: 'Appointment & Cancellation Recovery', s: '14 slots refilled today', st: 'Active' },
      { l: 'I', c: T, n: 'Referrals & Intake', s: '7 referrals · all complete', st: 'Active' },
      { l: 'F', c: V, n: 'Recalls & Follow-Up', s: '31 recalls booked', st: 'Active' },
      { l: 'B', c: D, n: 'Billing & Claims', s: '2 exceptions · 1 rejection', st: 'Active · 2 held', hold: 1 },
      { l: 'P', c: '#5B4DCB', n: 'Practice Operations', s: 'Daily summary prepared', st: 'Active' }
    ]
  },
  right: {
    title: 'Needs your attention', link: 'View all',
    cards: [
      { tone: 'crit', lab: 'REJECTED · BIL-4411', h: 'Claim rejected · $212',
        p: ['Item 23 · referral date mismatch', 'Nothing resubmitted without you', 'Dr Ellery · due today 15:00'], lk: 'Open claim' },
      { tone: 'warn', lab: 'NEEDS APPROVAL · REF-0912', h: 'Referral missing a provider number',
        p: ['Requested twice · no reply', 'Patient booked · Thu 09:20'], lk: 'Review' }
    ]
  }
},

'practices-us': {
  nav: NAV_PRAC('Patient Access'), crumb: 'Patient Access', org: 'Westbrook Family Medicine',
  search: 'Search patients, calls...', me: 'SR',
  date: 'TUESDAY, NOVEMBER 17, 2026', asof: 'As of 11:40 AM CST',
  h1: 'Your front desk this morning',
  sub: 'Calls, bookings and claims, across seven AI employees.',
  chips: ['Location: All', 'AI employee: All'],
  health: '6 of 7 sources healthy · Claims queue degraded',
  live: 'Claims queue slow · affected work held',
  kpis: [
    { c: K[0], lab: 'Calls answered', val: '86', foot: 'Since 7:00 AM · 0 missed' },
    { c: K[1], lab: 'Handled without you', val: '91.4%', foot: '79 of 86 calls' },
    { c: K[2], lab: 'Slots refilled', val: '14', foot: 'From the waitlist' },
    { c: K[3], lab: 'Auths pending', val: '0', foot: 'Every request current' },
    { c: K[4], lab: 'Claims held', val: '2', foot: 'RCM-4411 · above limit', crit: 1 }
  ],
  left: {
    kind: 'roles', title: 'Your AI employees', link: 'View all employees',
    rows: [
      { l: 'F', c: B, n: 'Front Desk & Patient Access', s: '86 calls · 0 missed', st: 'Active' },
      { l: 'S', c: P, n: 'Scheduling & Cancellation Recovery', s: '14 slots refilled today', st: 'Active' },
      { l: 'I', c: T, n: 'Referrals & Patient Intake', s: '7 referrals · all complete', st: 'Active' },
      { l: 'V', c: V, n: 'Insurance Verification & Prior Auth', s: '22 verified · 0 pending', st: 'Active' },
      { l: 'C', c: D, n: 'Patient Follow-Up & Care Gaps', s: '31 outreach tasks closed', st: 'Active' },
      { l: 'R', c: '#5B4DCB', n: 'Revenue Cycle & Claims', s: '2 exceptions · 1 denial', st: 'Active · 2 held', hold: 1 },
      { l: 'P', c: '#1487AD', n: 'Practice Operations', s: 'Daily summary prepared', st: 'Active' }
    ]
  },
  right: {
    title: 'Needs your attention', link: 'View all',
    cards: [
      { tone: 'crit', lab: 'DENIED · RCM-4411', h: 'Claim denied · $212',
        p: ['CO-16 · missing referral date', 'Nothing resubmitted without you', 'Dr Ellery · due today 3:00 PM'], lk: 'Open claim' },
      { tone: 'warn', lab: 'NEEDS APPROVAL · AUTH-0912', h: 'Prior auth awaiting a decision',
        p: ['Requested twice · no reply', 'Patient booked · Thu 9:20 AM'], lk: 'Review' }
    ]
  }
},

/* ══ SCREEN 3 · WORK QUEUE ═══════════════════════ homepages ═════ */

'home-au': {
  nav: NAV_CARE('Tasks & Exceptions'), crumb: 'Tasks & Exceptions', org: 'Riverlea Health Group',
  search: 'Search tasks, employees...', me: 'AK',
  date: 'TUESDAY 17 NOVEMBER 2026', asof: 'As of 06:50 AEDT',
  h1: 'Overnight work, already done',
  sub: 'What they finished, and the three they held for you.',
  chips: ['Team: All', 'Status: All'],
  health: 'All 7 sources healthy · nothing waiting on a system',
  live: 'All sources healthy · nothing held',
  kpis: [
    { c: K[0], lab: 'Tasks completed', val: '143', foot: 'Since 18:00 · +12%' },
    { c: K[1], lab: 'Finished without you', val: '88.1%', foot: '126 of 143 tasks' },
    { c: K[2], lab: 'Held for a person', val: '3', foot: 'Waiting on approval' },
    { c: K[3], lab: 'Escalated to on-call', val: '1', foot: 'Rostering · 06:52' },
    { c: K[4], lab: 'Reversed by a human', val: '0', foot: 'Since go-live' }
  ],
  left: {
    kind: 'table', title: 'Overnight work queue', link: 'View audit trail',
    sub: 'Confirmed by the source system, not by us.',
    rows: [
      { t: '23:14', a: 'After-Hours', d: 'Call answered · message logged', s: 'Telephony', k: 'Verified' },
      { t: '01:02', a: 'Rostering', d: 'Shift replaced · ROS-2050', s: 'Rostering platform', k: 'Verified' },
      { t: '03:40', a: 'Compliance', d: 'Training records synced (12)', s: 'HR register', k: 'Verified' },
      { t: '04:15', a: 'HR', d: 'Leave recorded · 2 workers', s: 'HR register', k: 'Verified' },
      { t: '05:58', a: 'Finance', d: 'Invoice above your limit', s: 'Accounting', k: 'Held', hold: 1 },
      { t: '06:21', a: 'Operations', d: 'Daily readiness prepared', s: 'Operations', k: 'Verified' },
      { t: '06:44', a: 'Rostering', d: 'Open shift offered · 4 workers', s: 'Rostering platform', k: 'Verified' }
    ]
  },
  right: {
    title: 'Held for you', link: 'View all',
    cards: [
      { tone: 'crit', lab: 'NEEDS A DECISION · ROS-2048', h: 'No cover · SIL North 07:00',
        p: ['2:1 protected · Jordan Davies on-call', 'Ack by 06:52 · 2 min'], lk: 'Open case' },
      { tone: 'warn', lab: 'NEEDS APPROVAL · FIN-1807', h: 'Invoice above your limit · $346',
        p: ['Held · nothing sent', 'Taylor Nguyen · due 18 Nov 12:00'], lk: 'Review' }
    ]
  }
},

'home-us': {
  nav: NAV_CARE('Tasks & Exceptions'), crumb: 'Tasks & Exceptions', org: 'Averly Health Group',
  search: 'Search tasks, employees...', me: 'AK',
  date: 'TUESDAY, NOVEMBER 17, 2026', asof: 'As of 6:50 AM CST',
  h1: 'Overnight work, already done',
  sub: 'What they finished, and the three they held for you.',
  chips: ['Team: All', 'Status: All'],
  health: 'All 7 sources healthy · nothing waiting on a system',
  live: 'All sources healthy · nothing held',
  kpis: [
    { c: K[0], lab: 'Tasks completed', val: '143', foot: 'Since 6:00 PM · +12%' },
    { c: K[1], lab: 'Finished without you', val: '88.1%', foot: '126 of 143 tasks' },
    { c: K[2], lab: 'Held for a person', val: '3', foot: 'Waiting on approval' },
    { c: K[3], lab: 'Escalated to on-call', val: '1', foot: 'Scheduling · 6:52' },
    { c: K[4], lab: 'Reversed by a human', val: '0', foot: 'Since go-live' }
  ],
  left: {
    kind: 'table', title: 'Overnight work queue', link: 'View audit trail',
    sub: 'Confirmed by the source system, not by us.',
    rows: [
      { t: '11:14p', a: 'After-Hours', d: 'Call answered · message logged', s: 'Telephony', k: 'Verified' },
      { t: '1:02a', a: 'Scheduling', d: 'Shift replaced · SCH-2050', s: 'Scheduling platform', k: 'Verified' },
      { t: '3:40a', a: 'Compliance', d: 'Credentials synced (12)', s: 'HR register', k: 'Verified' },
      { t: '4:15a', a: 'HR', d: 'Time off recorded · 2 staff', s: 'HR register', k: 'Verified' },
      { t: '5:58a', a: 'Finance', d: 'Invoice above your limit', s: 'Accounting', k: 'Held', hold: 1 },
      { t: '6:21a', a: 'Operations', d: 'Daily readiness prepared', s: 'Operations', k: 'Verified' },
      { t: '6:44a', a: 'Scheduling', d: 'Open shift offered · 4 staff', s: 'Scheduling platform', k: 'Verified' }
    ]
  },
  right: {
    title: 'Held for you', link: 'View all',
    cards: [
      { tone: 'crit', lab: 'NEEDS A DECISION · SCH-2048', h: 'No cover · Cedar North 7:00',
        p: ['2:1 staffing · Jordan Davies on-call', 'Ack by 6:52 · 2 min'], lk: 'Open case' },
      { tone: 'warn', lab: 'NEEDS APPROVAL · FIN-1807', h: 'Invoice above your limit · $346',
        p: ['Held · nothing sent', 'Taylor Nguyen · due Nov 18, 12:00'], lk: 'Review' }
    ]
  }
},

/* ══ SCREEN 4 · AUDIT TRAIL ════════════════════ why-novada ══════ */

'why-au': {
  nav: NAV_CARE('Reports'), crumb: 'Reports', org: 'Hartwell Care Group',
  search: 'Search the record...', me: 'MO',
  date: 'LAST 30 DAYS · TO 17 NOVEMBER 2026', asof: 'Updated 06:50 AEDT',
  h1: 'Every action, with its evidence',
  sub: 'Every record confirmed by the system it happened in.',
  chips: ['Period: 30 days', 'AI employee: All'],
  health: '4,182 of 4,182 actions confirmed at source',
  live: 'Recording · nothing unconfirmed',
  kpis: [
    { c: K[0], lab: 'Actions recorded', val: '4,182', foot: 'Last 30 days' },
    { c: K[1], lab: 'Confirmed at source', val: '100%', foot: '4,182 of 4,182' },
    { c: K[2], lab: 'Held for a person', val: '37', foot: '0.9% of actions' },
    { c: K[3], lab: 'Median hold time', val: '4 min', foot: 'Held to decided' },
    { c: K[4], lab: 'Reversed by a human', val: '0', foot: 'Since go-live' }
  ],
  left: {
    kind: 'table', title: 'Audit trail', link: 'Export the record',
    sub: 'Every row names the system that confirmed it.',
    rows: [
      { t: '06:21', a: 'Rostering', d: 'Shift replaced · ROS-2050', s: 'Rostering platform', k: 'Confirmed' },
      { t: '05:58', a: 'Compliance', d: 'Training records synced (12)', s: 'HR register', k: 'Confirmed' },
      { t: '04:15', a: 'HR', d: 'Leave recorded · 2 workers', s: 'HR register', k: 'Confirmed' },
      { t: '03:02', a: 'After-Hours', d: 'Call answered · message logged', s: 'Telephony', k: 'Confirmed' },
      { t: '01:44', a: 'Operations', d: 'Readiness summary prepared', s: 'Operations', k: 'Confirmed' },
      { t: '23:50', a: 'Finance', d: 'Invoice above approval limit', s: 'Accounting', k: 'Held', hold: 1 },
      { t: '22:19', a: 'Rostering', d: 'Open shift offered · 4 workers', s: 'Rostering platform', k: 'Confirmed' }
    ]
  },
  right: {
    title: 'Controls in force', link: 'View all',
    cards: [
      { tone: 'info', lab: 'STANDING RULE', h: 'Nothing clinical. Ever.',
        p: ['The workforce stops at the line where care begins.', 'Set by Hartwell · locked'], lk: 'See the rules' },
      { tone: 'info', lab: 'APPROVAL LIMIT', h: 'Anything consequential waits',
        p: ['Payments, contracts and exits are held for a named person.', 'Escalates to on-call after 2 minutes.'], lk: 'See the limits' }
    ]
  }
},

'why-us': {
  nav: NAV_CARE('Reports'), crumb: 'Reports', org: 'Northvale Health Partners',
  search: 'Search the record...', me: 'MO',
  date: 'LAST 30 DAYS · TO NOVEMBER 17, 2026', asof: 'Updated 6:50 AM CST',
  h1: 'Every action, with its evidence',
  sub: 'Every record confirmed by the system it happened in.',
  chips: ['Period: 30 days', 'AI employee: All'],
  health: '4,182 of 4,182 actions confirmed at source',
  live: 'Recording · nothing unconfirmed',
  kpis: [
    { c: K[0], lab: 'Actions recorded', val: '4,182', foot: 'Last 30 days' },
    { c: K[1], lab: 'Confirmed at source', val: '100%', foot: '4,182 of 4,182' },
    { c: K[2], lab: 'Held for a person', val: '37', foot: '0.9% of actions' },
    { c: K[3], lab: 'Median hold time', val: '4 min', foot: 'Held to decided' },
    { c: K[4], lab: 'Reversed by a human', val: '0', foot: 'Since go-live' }
  ],
  left: {
    kind: 'table', title: 'Audit trail', link: 'Export the record',
    sub: 'Every row names the system that confirmed it.',
    rows: [
      { t: '6:21a', a: 'Scheduling', d: 'Shift replaced · SCH-2050', s: 'Scheduling platform', k: 'Confirmed' },
      { t: '5:58a', a: 'Compliance', d: 'Credentials synced (12)', s: 'HR register', k: 'Confirmed' },
      { t: '4:15a', a: 'HR', d: 'Time off recorded · 2 staff', s: 'HR register', k: 'Confirmed' },
      { t: '3:02a', a: 'After-Hours', d: 'Call answered · message logged', s: 'Telephony', k: 'Confirmed' },
      { t: '1:44a', a: 'Operations', d: 'Readiness summary prepared', s: 'Operations', k: 'Confirmed' },
      { t: '11:50p', a: 'Finance', d: 'Invoice above approval limit', s: 'Accounting', k: 'Held', hold: 1 },
      { t: '10:19p', a: 'Scheduling', d: 'Open shift offered · 4 staff', s: 'Scheduling platform', k: 'Confirmed' }
    ]
  },
  right: {
    title: 'Controls in force', link: 'View all',
    cards: [
      { tone: 'info', lab: 'STANDING RULE', h: 'Nothing clinical. Ever.',
        p: ['The workforce stops at the line where care begins.', 'Set by Northvale · locked'], lk: 'See the rules' },
      { tone: 'info', lab: 'APPROVAL LIMIT', h: 'Anything consequential waits',
        p: ['Payments, contracts and exits are held for a named person.', 'Escalates to on-call after 2 minutes.'], lk: 'See the limits' }
    ]
  }
}

};
