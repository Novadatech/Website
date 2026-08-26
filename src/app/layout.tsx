import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk, Barlow_Condensed } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ConditionalNav from "@/components/ConditionalNav";
import ConditionalChatWidget from "@/components/ConditionalChatWidget";
import LeadFormProvider from "@/components/LeadFormProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Poppins at light weights — used by the home page's Morningside-style
// design test (thin display type). Other pages keep Inter.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  display: "swap",
  variable: "--font-poppins",
});

// Space Grotesk — stand-in for Morningside's "PP Supply Sans" (labels,
// buttons, small-caps tags on the home design test).
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-space-grotesk",
});

// Bold condensed display face for the Desk brand headlines.
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-barlow-condensed",
});

// Root metadata per the Website Rebuild Brief (26 Aug 2026), section 10.
// Australian English, no pricing, no "virtual receptionist"/"answering
// service" targeting.
export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  title: "Novada | The Desk for Australian Healthcare: Clinics & Care Providers",
  description:
    "Novada runs the front desk for Australian clinics and the coordination desk for care providers. Calls answered, bookings made in your systems, rosters covered, everything measured monthly.",
  keywords: [
    "patient access",
    "practice front desk support",
    "after-hours coordination for care providers",
    "NDIS workforce operations",
    "roster coordination",
    "clinic phone and schedule support",
    "Australia",
  ],
  openGraph: {
    title: "Novada | The Desk for Australian Healthcare: Clinics & Care Providers",
    description:
      "Revenue is won or lost at the desk. Novada runs the front desk for Australian clinics and the coordination desk for care providers. Alongside your team, not instead of them.",
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
    <html
      lang="en-AU"
      className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} ${barlowCondensed.variable}`}
    >
      <head>
        {/* Google Tag Manager — main snippet, in <head> only.
            Using a raw <script> tag (not next/script) so it lives ONLY in
            <head>. next/script with strategy="beforeInteractive" was
            causing Next.js to inject the snippet into both <head> AND
            <body>, which interferes with GTM tag firing. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5CL2Q8M8');`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager (noscript) — body has ONLY this, no JS script */}
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

        {/* NOTE: Removed direct gtag.js loader for AW-16650862607.
            GTM (above) now loads the Google Ads tag via the container,
            so a hardcoded loader here would cause double-firing. All
            Google Ads / GA4 tags are now managed inside GTM. */}

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

        {/* Chat Widget — route-aware: /workforce loads the Novada
            Workforce (AfterHours sub-account) widget, everything else
            the main Novada Tech widget. */}
        <ConditionalChatWidget />
      </body>
    </html>
  );
}
