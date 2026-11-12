"use client";

/* Live-chat widget. Mounted on the two Care offer landing pages ONLY.
 *
 * History, so nobody widens this by accident:
 *  - 2026-09-02: the chat widget was removed from the ENTIRE website on
 *    founder instruction, and the Website Rebuild Brief (section 6) bans a
 *    live-chat bot on these pages "unless the founder explicitly approves
 *    its script (claims risk)".
 *  - 2026-11-05: the Conversation AI script was rewritten for the two Care
 *    offers (Rostering Audit & Efficiency, Workforce Continuity) and the
 *    founder approved the widget for the Care offer landing pages. That
 *    approval covers those two pages, nothing else.
 *
 * ⚠️ The scope below is an ALLOW-LIST on purpose. It used to be a deny-list
 * (NO_CHAT_ROUTES). Do not switch back: a deny-list silently puts the widget
 * on every route that is not explicitly excluded — /practices, /book,
 * /case-study, /meetings-3 and the rest — which is not approved.
 */

import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

const WIDGETS = {
  // Main Novada Tech widget. Feeds the Live chat channel of the PRIMARY
  // Conversation AI agent ("Novada Tech AI Employee"), whose Live chat is set
  // to "All widgets". That agent works out which of the two Care offers the
  // visitor means and sends the matching booking link, so one widget serves
  // both pages — a second widget would be answered by the same agent anyway,
  // because only the primary agent ever replies.
  main: "6990bcc66dc9bb4de7bd8e7e",
  // Workforce widget, AfterHours sub-account 7qfGwLsYul56Y0gpsnCd. Kept only
  // so the ID is not lost: /workforce used this before the 2026-09-02 removal
  // so its chats landed in that sub-account's inbox. Not currently mounted.
  workforce: "6a7ac67d3bbada174311b459",
} as const;

// The only routes that load a widget. Add a route here ONLY with founder
// approval for that page's bot script.
/*
 * EVERY PAGE ON THE SITE, on founder instruction, 10 November 2026.
 * That is six routes, because the site is six pages.
 *
 * 🔴 THE BOT HAS NOT BEEN BRIEFED ON THE AI WORKFORCE OFFER YET. The
 * founder is updating it separately and knows this. Until then the
 * PRIMARY Conversation AI answers every one of these, and it still
 * knows the retired Care offers: a visitor who asks it to book may be
 * sent a link to a calendar that is now disabled.
 *
 * ⚠️ ONLY THE PRIMARY AGENT EVER REPLIES, whatever widget id is
 * mounted, so a second widget would not give a page its own bot.
 */
const CHAT_ROUTES: Record<string, keyof typeof WIDGETS> = {
  "/": "main",
  "/care/ai-workforce": "main",
  /* ✅ THE META ADS LANDING PAGE, added 13 November 2026 on founder
     instruction. It is the same page as /care/ai-workforce and the
     same approved bot script, so the approval that covers the offer
     page covers this one.

     ⚠️ IT HAD TO BE ADDED HERE EXPLICITLY. This map is an ALLOW-LIST,
     so a new route gets no widget until it is listed, and the CSS gate
     hides one that appears anyway. That is why the widget was missing
     from the paid page: gated, not broken. Do NOT answer a missing
     widget by switching this back to a deny-list. */
  "/care/ai-workforce/lp": "main",
  "/practices/ai-workforce": "main",
  "/why-novada": "main",
  "/privacy-policy": "main",
  "/terms-of-service": "main",
};

const GATE_STYLE_ID = "chat-widget-route-gate";

export default function ConditionalChatWidget() {
  const pathname = usePathname();
  // Tolerate a trailing slash; match nothing else.
  const route =
    pathname && pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const widget = route ? CHAT_ROUTES[route] : undefined;

  /* ⚠️ Unmounting this component does NOT remove the widget. next/script
   * injects the loader into the document, and the loader appends its own
   * <chat-widget> element to <body>; both survive client-side navigation.
   * Verified 2026-11-05: landing on /care/rostering and clicking through to
   * /practices left the bubble live on /practices.
   *
   * So the route gate is a stylesheet, not a conditional render. A CSS rule
   * also wins the race where the widget is created a moment AFTER we have
   * already navigated away. Hiding (rather than deleting) keeps it
   * reversible: the loader cannot re-initialise on client-side navigation,
   * so a deleted widget would never come back on return to a Care page. */
  useEffect(() => {
    const existing = document.getElementById(GATE_STYLE_ID);
    if (widget) {
      existing?.remove();
      return;
    }
    if (!existing) {
      const style = document.createElement("style");
      style.id = GATE_STYLE_ID;
      style.textContent = "chat-widget{display:none !important}";
      document.head.appendChild(style);
    }
  }, [widget]);

  if (!widget) return null;

  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id={WIDGETS[widget]}
      strategy="afterInteractive"
    />
  );
}
