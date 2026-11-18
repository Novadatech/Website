/* Card content per offer and market. See panels.html.
 *
 * care-au is a WORD-FOR-WORD copy of the Figma export (old names
 * included), kept only to calibrate the replica against the real crops.
 * The AU care, home and why-novada pages ship the REAL crops, not this.
 *
 * ⚠️ US: scheduling not rostering, caregivers, 12-hour clock, CST,
 * "canceled", EVV. US systems only from the US integrations list.
 * ⚠️ Practices: never a clinical decision by the AI. Urgent or clinical
 * content goes to a person, and the screens show that.
 * ⚠️ Org and people are invented. Never a real provider's name.
 */
var B = '#2357F5', P = '#7547F5', T = '#1487AD', V = '#8484E0', D = '#0F7B8A', A = '#A0640B', M = '#5B4DCB';
var W = { timeline: [708, 768], checklist: [376, 283], table: [688, 658], bars: [698, 419],
          systems: [364, 200], queue: [698, 619], recovery: [385, 234], history: [640, 358], confirmation: [376, 213] };
function card(kind, o) { o.kind = kind; o.w = W[kind][0]; o.h = W[kind][1]; return o; }
function ev(t, h, d, src, s, state) { return { t: t, h: h, d: d, src: src, s: s, state: state }; }
function row(t, d, a, c, st) { return { t: t, d: d, a: a, c: c, st: st }; }

window.VARIANTS = {

/* ══ CALIBRATION ONLY: the export, verbatim ═══════════════════════════ */
'care-au': {
  timeline: card('timeline', { title: 'Autonomous execution timeline', sub: 'Times AEDT · each step logged', events: [
    ev('06:08', 'Sick call received · identity checked', 'Inbound cancellation matched to shift', 'Twilio call event', 'Received'),
    ev('06:09', 'Affected service and shift identified', 'Roster record and site needs retrieved', 'ShiftCare shift lookup', 'Verified'),
    ev('06:10', 'Worker eligibility evaluated', 'Availability, credentials, rest and rules', 'Rules engine · 6/6 passed', 'Verified'),
    ev('06:12', 'Replacement offers coordinated', 'SMS and voice to eligible workers', 'Twilio delivery evidence', 'Contacted'),
    ev('06:17', 'Eligible worker accepted', 'Acceptance captured · conditions re-checked', 'Worker response event', 'Accepted'),
    ev('06:20', 'Shift assignment write submitted', 'Write sent to ShiftCare', 'ShiftCare shift assignment write', 'Submitted', 'go'),
    ev('06:21', 'Source-system outcome verified', 'Read-back matched worker and shift', 'ShiftCare read-back', 'Complete')] }),
  checklist: card('checklist', { title: 'Operating policy validation', sub: 'All checks passed', items: [
    'Correct role & site requirements', 'Worker availability confirmed', 'Credentials & suitability checked',
    'Rest and scheduling rules passed', 'Worker accepted assignment', 'Write permission within policy'] }),
  table: card('table', { title: 'All task activity', sub: 'As of 06:50 AEDT · exceptions first', foot: 'Showing 8 of 160 tasks · last 7 days', rows: [
    row('Cover unfilled SIL morning shift', 'ROS-2048 · AHR-0194 · offers unanswered', 'Rostering', B, 'crit'),
    row('Resolve payroll timesheet variance', 'HR-1807 · $346 variance · 2 records held', 'HR', T, 'rev'),
    row('Confirm afternoon shift replacement', 'ROS-2059 · Accepted · roster write submitted', 'Rostering', B, 'prog'),
    row('Reconcile delivered support records', 'OPS-1902 · 8 of 12 synced', 'Operations', D, 'prog'),
    row('Follow up mandatory training evidence', 'COM-1330 · SMS reminder delivered 06:30', 'Compliance', P, 'wait'),
    row('Complete worker onboarding records', 'HR-1803 · Onboarding record read back', 'HR', T, 'done'),
    row('Replace cancelled morning shift', 'ROS-2050 · assignment read back', 'Rostering', B, 'done'),
    row('Complete overnight operations handover', 'AFT-1105 · sent to Alex Martin', 'After-Hours', A, 'done')] }),
  bars: card('bars', { title: 'Shift coverage by day', sub: 'Scheduled vs covered · to 06:50', chip: 'Last 7 days', legend: ['Scheduled', 'Covered'], scale: 10,
    foot: 'Covered = accepted, ratio-checked, read back',
    days: [['Thu', 13, 13], ['Fri', 14, 14], ['Sat', 15, 15], ['Sun', 12, 12], ['Mon', 17, 17], ['Tue', 16, 16], ['Wed', 14, 13]] }),
  systems: card('systems', { title: 'Connected systems', sub: 'Source health · 06:50', rows: [
    { n: 'Rostering platform', d: 'Read-back verified 06:21', c: B, ok: 1 },
    { n: 'Communications gateway', d: 'Calls and SMS · delivery receipts', c: P, ok: 1 },
    { n: 'Payroll & timesheets', d: 'Writes held since 10 Nov 16:20', c: D, ok: 0 }] }),
  queue: card('queue', { title: 'Active exception queue', sub: 'Sorted by impact', search: 'Search case, worker or location', filter: 'All agents', cases: [
    { k: 'c', id: 'ROS-2048 · AHR-0194 · 06:42', h: 'No cover · SIL North 07:00', a: 'SH-704 · CL-1042 (2:1)', b: '1 of 2 confirmed · offers unanswered 06:42',
      owner: 'Jordan Davies · on-call · backup Maya Patel', cta: 'Review critical case' },
    { k: 'r', id: 'HR-1807 · 05:30', h: 'Payroll variance · $346', a: '2 timesheets held · over $250 threshold', b: 'Pay run continues · no adjustment posted',
      owner: 'Taylor Nguyen · due 12 Nov 12:00', cta: 'Review exception' }] }),
  recovery: card('recovery', { eyebrow: 'AUTONOMOUS RECOVERY ATTEMPTED', steps: [[1, '06:40 · Eligibility checked'], [1, '06:41 · Offers sent to 2 eligible workers'], [0, '06:42 · No acceptance in offer window']],
    alert: ['Acknowledge by 06:52', 'Backup Maya Patel notified at 06:52 if unacknowledged.'] }),
  history: card('history', { title: 'State history', sub: 'Actor, time, rule and evidence · policy v2.4', foot: 'Retries 0 · closed autonomously · policy v2.4', rows: [
    ['06:08', 'RECEIVED', 'Voice Hub'], ['06:09', 'IDENTIFIED', 'AI Rostering Agent'], ['06:10', 'RULES_CHECKED', 'Rules engine'],
    ['06:12', 'EXECUTING', 'AI Rostering Agent'], ['06:17', 'EXECUTING', 'Worker (SMS reply)'], ['06:20', 'VERIFYING', 'AI Rostering Agent'], ['06:21', 'VERIFIED', 'ShiftCare read-back']] }),
  confirmation: card('confirmation', { title: 'Authoritative confirmation', badge: 'Source verified',
    kv: [['Source system', 'ShiftCare'], ['Event reference', 'SRC-2050'], ['Last confirmed', '06:21 AEDT']], note: 'Read-back matched the requested worker and shift.' }),
},

/* ══ US CARE: home care, scheduling, CST ═════════════════════════════ */
'care-us': {
  timeline: card('timeline', { title: 'Autonomous execution timeline', sub: 'Times CST · each step logged', events: [
    ev('6:08 AM', 'Call-off received · identity checked', 'Caregiver call-off matched to visit', 'Twilio call event', 'Received'),
    ev('6:09 AM', 'Affected client and visit identified', 'Schedule record and client needs retrieved', 'AxisCare visit lookup', 'Verified'),
    ev('6:10 AM', 'Caregiver eligibility evaluated', 'Availability, credentials, overtime and rules', 'Rules engine · 6/6 passed', 'Verified'),
    ev('6:12 AM', 'Replacement offers coordinated', 'Text and voice to eligible caregivers', 'Twilio delivery evidence', 'Contacted'),
    ev('6:17 AM', 'Eligible caregiver accepted', 'Acceptance captured · conditions re-checked', 'Caregiver response event', 'Accepted'),
    ev('6:20 AM', 'Visit assignment write submitted', 'Write sent to AxisCare', 'AxisCare visit assignment write', 'Submitted', 'go'),
    ev('6:21 AM', 'Source-system outcome verified', 'Read-back matched caregiver and visit', 'AxisCare read-back', 'Complete')] }),
  checklist: card('checklist', { title: 'Operating policy validation', sub: 'All checks passed', items: [
    'Correct skills & client requirements', 'Caregiver availability confirmed', 'Credentials & background check current',
    'Overtime and scheduling rules passed', 'Caregiver accepted assignment', 'Write permission within policy'] }),
  table: card('table', { title: 'All task activity', sub: 'As of 6:50 AM CST · exceptions first', foot: 'Showing 8 of 160 tasks · last 7 days', rows: [
    row('Cover unfilled 7:00 AM visit', 'SCH-2048 · AHR-0194 · offers unanswered', 'Scheduling', B, 'crit'),
    row('Resolve timesheet variance', 'HR-1807 · $346 variance · 2 records held', 'HR', T, 'rev'),
    row('Confirm afternoon visit replacement', 'SCH-2059 · Accepted · schedule write submitted', 'Scheduling', B, 'prog'),
    row('Reconcile EVV visit records', 'OPS-1902 · 8 of 12 synced', 'Operations', D, 'prog'),
    row('Follow up expiring CPR certification', 'COM-1330 · text reminder delivered 6:30 AM', 'Compliance', P, 'wait'),
    row('Complete caregiver onboarding records', 'HR-1803 · Onboarding record read back', 'HR', T, 'done'),
    row('Replace canceled morning visit', 'SCH-2050 · assignment read back', 'Scheduling', B, 'done'),
    row('Send overnight on-call handover', 'AFT-1105 · sent to Alex Martin', 'After-Hours', A, 'done')] }),
  bars: card('bars', { title: 'Visit coverage by day', sub: 'Scheduled vs covered · to 6:50 AM', chip: 'Last 7 days', legend: ['Scheduled', 'Covered'], scale: 10,
    foot: 'Covered = accepted, credential-checked, read back',
    days: [['Thu', 13, 13], ['Fri', 14, 14], ['Sat', 15, 15], ['Sun', 12, 12], ['Mon', 17, 17], ['Tue', 16, 16], ['Wed', 14, 13]] }),
  systems: card('systems', { title: 'Connected systems', sub: 'Source health · 6:50 AM', rows: [
    { n: 'Scheduling platform', d: 'Read-back verified 6:21 AM', c: B, ok: 1 },
    { n: 'Communications gateway', d: 'Calls and texts · delivery receipts', c: P, ok: 1 },
    { n: 'Payroll & timesheets', d: 'Writes held since Nov 10, 4:20 PM', c: D, ok: 0 }] }),
  queue: card('queue', { title: 'Active exception queue', sub: 'Sorted by impact', search: 'Search case, caregiver or client', filter: 'All agents', cases: [
    { k: 'c', id: 'SCH-2048 · AHR-0194 · 6:42 AM', h: 'No cover · 7:00 AM client visit', a: 'Visit V-704 · client C-1042 · 2-person assist', b: '1 of 2 confirmed · offers unanswered 6:42 AM',
      owner: 'Jordan Davies · on-call · backup Maya Patel', cta: 'Review critical case' },
    { k: 'r', id: 'HR-1807 · 5:30 AM', h: 'Timesheet variance · $346', a: '2 timesheets held · over $250 threshold', b: 'Payroll continues · no adjustment posted',
      owner: 'Taylor Nguyen · due Nov 12, 12:00 PM', cta: 'Review exception' }] }),
  recovery: card('recovery', { eyebrow: 'AUTONOMOUS RECOVERY ATTEMPTED', steps: [[1, '6:40 AM · Eligibility checked'], [1, '6:41 AM · Offers sent to 2 eligible caregivers'], [0, '6:42 AM · No acceptance in offer window']],
    alert: ['Acknowledge by 6:52 AM', 'Backup Maya Patel notified at 6:52 AM if unacknowledged.'] }),
  history: card('history', { title: 'State history', sub: 'Actor, time, rule and evidence · policy v2.4', foot: 'Retries 0 · closed autonomously · policy v2.4', rows: [
    ['6:08 AM', 'RECEIVED', 'Voice Hub'], ['6:09 AM', 'IDENTIFIED', 'AI Scheduling Agent'], ['6:10 AM', 'RULES_CHECKED', 'Rules engine'],
    ['6:12 AM', 'EXECUTING', 'AI Scheduling Agent'], ['6:17 AM', 'EXECUTING', 'Caregiver (text reply)'], ['6:20 AM', 'VERIFYING', 'AI Scheduling Agent'], ['6:21 AM', 'VERIFIED', 'AxisCare read-back']] }),
  confirmation: card('confirmation', { title: 'Authoritative confirmation', badge: 'Source verified',
    kv: [['Source system', 'AxisCare'], ['Event reference', 'SRC-2050'], ['Last confirmed', '6:21 AM CST']], note: 'Read-back matched the requested caregiver and visit.' }),
},

/* ══ AU PRACTICES: front desk, Best Practice, AEDT ═══════════════════ */
'practices-au': {
  timeline: card('timeline', { title: 'Call handling timeline', sub: 'Times AEDT · each step logged', events: [
    ev('08:02', 'Inbound call answered · AI identified itself', 'Patient calling to book a standard consult', 'Twilio call event', 'Answered'),
    ev('08:02', 'Caller identified · patient record matched', 'Name and date of birth confirmed', 'Best Practice patient lookup', 'Verified'),
    ev('08:03', 'Reason for call checked', 'Routine booking · nothing urgent or clinical', 'Rules engine · 4/4 passed', 'Verified'),
    ev('08:03', 'Available appointments found', "Patient's usual GP · next 3 days", 'Best Practice appointment book', 'Verified'),
    ev('08:04', 'Appointment offered and accepted', 'Tuesday 9:40am with Dr Ellery', 'Confirmed by caller on the call', 'Accepted'),
    ev('08:04', 'Booking write submitted', 'Write sent to Best Practice', 'Best Practice booking write', 'Submitted', 'go'),
    ev('08:05', 'Booking verified · SMS confirmation sent', 'Read-back matched patient and slot', 'Best Practice read-back', 'Complete')] }),
  checklist: card('checklist', { title: 'Call handling policy', sub: 'All checks passed', items: [
    'AI disclosed at the start of the call', 'Patient identity confirmed', 'Nothing urgent or clinical raised',
    'Booking within practitioner rules', 'Patient confirmed the appointment', 'Write permission within policy'] }),
  table: card('table', { title: 'All task activity', sub: 'As of 08:50 AEDT · exceptions first', foot: 'Showing 8 of 214 tasks · last 7 days', rows: [
    row('Caller reported urgent symptoms', 'CALL-2048 · transferred to nurse 08:12', 'Reception', B, 'crit'),
    row('Resolve rejected Medicare claim', 'BIL-1807 · 1 item rejected · claim held', 'Billing', D, 'rev'),
    row('Refill cancelled 2:15pm appointment', 'APT-2059 · waitlist offers sent', 'Appointments', P, 'prog'),
    row('Book diabetes cycle of care recalls', 'REC-1902 · 8 of 14 booked', 'Recalls', V, 'prog'),
    row('Chase specialist referral letter', 'REF-1330 · request sent 08:30', 'Referrals', T, 'wait'),
    row('Register new patient', 'REC-1803 · details read back', 'Reception', B, 'done'),
    row("Send tomorrow's appointment reminders", 'APT-2050 · 61 SMS delivered', 'Appointments', P, 'done'),
    row('Prepare daily practice summary', 'OPS-1105 · sent to practice manager', 'Operations', M, 'done')] }),
  bars: card('bars', { title: 'Cancelled appointments refilled', sub: 'Cancelled vs refilled · to 08:50', chip: 'Last 7 days', legend: ['Cancelled', 'Refilled'], scale: 17,
    foot: 'Refilled = rebooked from the waitlist, read back from Best Practice',
    days: [['Thu', 8, 8], ['Fri', 10, 10], ['Sat', 5, 5], ['Mon', 11, 11], ['Tue', 9, 9], ['Wed', 7, 7], ['Thu', 9, 8]] }),
  systems: card('systems', { title: 'Connected systems', sub: 'Source health · 08:50', rows: [
    { n: 'Practice management', d: 'Read-back verified 08:21', c: B, ok: 1 },
    { n: 'Telephony & SMS', d: 'Calls and SMS · delivery receipts', c: P, ok: 1 },
    { n: 'Billing & claims', d: 'Claim writes held since 10 Nov 16:20', c: D, ok: 0 }] }),
},

/* ══ US PRACTICES: front desk, athenahealth, CST ═════════════════════ */
'practices-us': {
  timeline: card('timeline', { title: 'Call handling timeline', sub: 'Times CST · each step logged', events: [
    ev('8:02 AM', 'Inbound call answered · AI identified itself', 'Patient calling to schedule a follow-up', 'Twilio call event', 'Answered'),
    ev('8:02 AM', 'Caller identified · patient chart matched', 'Name and date of birth confirmed', 'athenahealth patient lookup', 'Verified'),
    ev('8:03 AM', 'Reason for call checked', 'Routine scheduling · nothing urgent or clinical', 'Rules engine · 4/4 passed', 'Verified'),
    ev('8:03 AM', 'Insurance eligibility confirmed', 'Active coverage for the visit type', 'Clearinghouse eligibility response', 'Verified'),
    ev('8:04 AM', 'Appointment offered and accepted', 'Tuesday 9:40 AM with Dr. Ellery', 'Confirmed by caller on the call', 'Accepted'),
    ev('8:04 AM', 'Scheduling write submitted', 'Write sent to athenahealth', 'athenahealth appointment write', 'Submitted', 'go'),
    ev('8:05 AM', 'Appointment verified · text confirmation sent', 'Read-back matched patient and slot', 'athenahealth read-back', 'Complete')] }),
  checklist: card('checklist', { title: 'Call handling policy', sub: 'All checks passed', items: [
    'AI disclosed at the start of the call', 'Patient identity confirmed', 'Nothing urgent or clinical raised',
    'Coverage verified for the visit type', 'Patient confirmed the appointment', 'Write permission within policy'] }),
  table: card('table', { title: 'All task activity', sub: 'As of 8:50 AM CST · exceptions first', foot: 'Showing 8 of 214 tasks · last 7 days', rows: [
    row('Caller reported urgent symptoms', 'CALL-2048 · transferred to nurse 8:12 AM', 'Front Desk', B, 'crit'),
    row('Work claim denial CO-16', 'RCM-1807 · missing information · claim held', 'Revenue Cycle', M, 'rev'),
    row('Refill canceled 2:15 PM appointment', 'SCH-2059 · waitlist offers sent', 'Scheduling', P, 'prog'),
    row('Submit prior authorization for MRI', 'AUTH-1902 · documents attached', 'Prior Auth', V, 'prog'),
    row('Close annual wellness visit gaps', 'GAP-1330 · outreach sent 8:30 AM', 'Follow-Up', D, 'wait'),
    row('Complete new patient intake', 'INT-1803 · forms read back', 'Intake', T, 'done'),
    row("Verify tomorrow's insurance eligibility", 'ELG-2050 · 58 of 58 verified', 'Prior Auth', V, 'done'),
    row('Prepare daily practice summary', 'OPS-1105 · sent to practice manager', 'Operations', '#1487AD', 'done')] }),
  bars: card('bars', { title: 'Canceled appointments refilled', sub: 'Canceled vs refilled · to 8:50 AM', chip: 'Last 7 days', legend: ['Canceled', 'Refilled'], scale: 17,
    foot: 'Refilled = rescheduled from the waitlist, read back from athenahealth',
    days: [['Thu', 8, 8], ['Fri', 10, 10], ['Sat', 5, 5], ['Mon', 11, 11], ['Tue', 9, 9], ['Wed', 7, 7], ['Thu', 9, 8]] }),
  systems: card('systems', { title: 'Connected systems', sub: 'Source health · 8:50 AM', rows: [
    { n: 'EHR & scheduling', d: 'Read-back verified 8:21 AM', c: B, ok: 1 },
    { n: 'Telephony & texting', d: 'Calls and texts · delivery receipts', c: P, ok: 1 },
    { n: 'Clearinghouse', d: 'Claim submissions held since Nov 10, 4:20 PM', c: D, ok: 0 }] }),
},
};
