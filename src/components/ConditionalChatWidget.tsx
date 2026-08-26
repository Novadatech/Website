"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

// Route-aware LeadConnector chat widget. The Novada Workforce routes get
// the Workforce widget (AfterHours sub-account 7qfGwLsYul56Y0gpsnCd) so
// their chats land in that sub-account's inbox; every other page keeps the
// main Novada Tech widget. The widget is chosen at initial page load — the
// loader can't re-initialise on client-side navigation, which is fine
// because these are entry-page landers.
//
// NOTE: the legacy api.gohighlevel.com/message/get_chat_widget/<location>
// iframe embed is DEAD (renders a blank shell for every location) — only
// the widgets.leadconnectorhq.com loader with a data-widget-id works.
const WORKFORCE_WIDGET_ID = "6a7ac67d3bbada174311b459";
const MAIN_WIDGET_ID = "6990bcc66dc9bb4de7bd8e7e";

// Website Rebuild Brief section 6: "No live-chat bot on the new pages
// unless the founder explicitly approves its script (claims risk)." The
// Desk pages therefore load no widget at all. Remove a route from this
// list only once its script has been approved.
const NO_CHAT_ROUTES = [
  "/",
  "/patient-access-desk",
  "/workforce-ops-desk",
  "/why-novada",
];

export default function ConditionalChatWidget() {
  const pathname = usePathname();

  if (NO_CHAT_ROUTES.includes(pathname)) return null;

  const isWorkforce =
    pathname.startsWith("/workforce") || pathname.startsWith("/assessment-calculator");
  const widgetId = isWorkforce ? WORKFORCE_WIDGET_ID : MAIN_WIDGET_ID;

  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id={widgetId}
      strategy="afterInteractive"
    />
  );
}
