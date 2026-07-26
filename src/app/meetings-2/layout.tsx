import type { Metadata } from "next";

// Paid-ads lander (US Google Ads cold traffic). noindex: this page exists
// for ad campaigns, not organic search — keeps it out of SEO/duplicate-content
// consideration while the funnel runs.
//
// COMPLIANCE (developer brief, Google Ads 2026-07): no "$0 upfront" /
// "$0 activation" claims anywhere on this page — the offer includes a
// commitment deposit, so those claims trip Google's Misrepresentation
// policy. Approved framing: "No retainer. No setup fee. No lock-in."
export const metadata: Metadata = {
  title:
    "15+ Qualified Sales Meetings A Month, Guaranteed — No Retainer | Novada Tech",
  description:
    "We book 15+ qualified sales meetings a month straight onto your calendar — guaranteed in writing. No retainer. No setup fee. No lock-in. Pay only per booked meeting. You never pay for a meeting that doesn't happen.",
  robots: { index: false, follow: false },
};

// Google Ads click-ID capture (developer brief Task 1.1). Runs during HTML
// parse — before the booking iframe exists — so the click ID is stored
// before anything reads it. Persists gclid/wbraid/gbraid + UTMs for 90 days
// (B2B buyers click Monday, book Thursday). Only overwrites when this visit
// actually carries a click ID: a returning direct visitor must NOT wipe the
// attribution from their original ad click.
const CLICK_ID_CAPTURE = `(function () {
  try {
    var params = new URLSearchParams(window.location.search);
    var ids = {
      gclid: params.get('gclid'),
      wbraid: params.get('wbraid'),
      gbraid: params.get('gbraid')
    };
    if (!ids.gclid && !ids.wbraid && !ids.gbraid) return;
    var payload = JSON.stringify({
      ids: ids,
      utm: {
        utm_source: params.get('utm_source'),
        utm_medium: params.get('utm_medium'),
        utm_campaign: params.get('utm_campaign'),
        utm_term: params.get('utm_term'),
        utm_content: params.get('utm_content')
      },
      landing: window.location.pathname,
      ts: Date.now()
    });
    try { localStorage.setItem('nvt_click', payload); } catch (e) {}
    document.cookie = 'nvt_click=' + encodeURIComponent(payload) +
      ';path=/;max-age=' + (90 * 24 * 60 * 60) + ';SameSite=Lax;Secure';
  } catch (e) {}
})();`;

export default function Meetings2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: CLICK_ID_CAPTURE }} />
      {children}
    </>
  );
}
