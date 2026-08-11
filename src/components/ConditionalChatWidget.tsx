"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

// Route-aware LeadConnector chat widget. /workforce gets the Novada
// Workforce widget (AfterHours sub-account 7qfGwLsYul56Y0gpsnCd) so its
// chats land in that sub-account's inbox; every other page keeps the main
// Novada Tech widget. The widget is chosen at initial page load — the
// loader can't re-initialise on client-side navigation, which is fine
// because these are entry-page landers.
//
// NOTE: the legacy api.gohighlevel.com/message/get_chat_widget/<location>
// iframe embed is DEAD (renders a blank shell for every location) — only
// the widgets.leadconnectorhq.com loader with a data-widget-id works.
const WORKFORCE_WIDGET_ID = "6a7a8e3c3bbada174306fa61";
const MAIN_WIDGET_ID = "6990bcc66dc9bb4de7bd8e7e";

export default function ConditionalChatWidget() {
  const pathname = usePathname();
  const widgetId =
    pathname === "/workforce" ? WORKFORCE_WIDGET_ID : MAIN_WIDGET_ID;

  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id={widgetId}
      strategy="afterInteractive"
    />
  );
}
