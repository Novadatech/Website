import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ConditionalNav from "@/components/ConditionalNav";
import LeadFormProvider from "@/components/LeadFormProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  title: "Client Acquisition for Service Businesses | Performance-Based Growth | Novada Tech",
  description:
    "Get more high-value clients with a performance-based growth partnership. No retainers. No ad spend. You only pay when we deliver results. 350+ businesses scaled across Australia.",
  keywords: [
    "client acquisition",
    "performance-based growth",
    "growth partnership",
    "revenue growth",
    "lead generation",
    "get more clients",
    "service business growth",
    "Melbourne",
    "Australia",
  ],
  openGraph: {
    title: "Client Acquisition for Service Businesses | Performance-Based Growth | Novada Tech",
    description:
      "Get more high-value clients with a performance-based growth partnership. No retainers. No ad spend. You only pay when we deliver results.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5CL2Q8M8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <LeadFormProvider>
          <ConditionalNav>
            {children}
          </ConditionalNav>
        </LeadFormProvider>

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16650862607"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-16650862607');`}
        </Script>

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '3515804598723791');
fbq('track', 'PageView');`}
        </Script>

        {/* Chat Widget */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6990bcc66dc9bb4de7bd8e7e"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
