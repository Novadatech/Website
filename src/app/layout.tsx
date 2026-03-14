import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFormProvider from "@/components/LeadFormProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Novada Tech — We Build Your Client Acquisition System",
  description:
    "We build complete AI-powered client acquisition systems for businesses ready to scale. Pay only for results. No retainers. No guesswork. Melbourne, Australia.",
  keywords: [
    "client acquisition",
    "AI sales engine",
    "growth partnership",
    "revenue growth",
    "lead generation",
    "Melbourne",
    "Australia",
  ],
  openGraph: {
    title: "Novada Tech — We Build Your Client Acquisition System",
    description:
      "Pay-for-results growth partnership. We build, run, and scale your entire client acquisition engine.",
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
        <LeadFormProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LeadFormProvider>
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
