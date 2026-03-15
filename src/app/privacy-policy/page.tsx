"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-10 md:pt-40 md:pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950" />
        <div className="relative max-container section-padding text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-white/40 text-sm"
          >
            Last Updated: March 2026
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding pb-20">
        <div className="max-container max-w-3xl">
          <div className="prose-policy space-y-10">
            {/* Intro */}
            <p className="text-white/60 leading-relaxed">
              At Novada Tech (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we are committed to
              protecting your privacy. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you visit our website or use our AI-powered
              services (&quot;Services&quot;). Please read this policy carefully. If you do not agree with the
              terms of this Privacy Policy, please do not access the site or use our Services.
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                We may collect information about you in a variety of ways, including:
              </p>
              <ul className="space-y-3">
                <li className="text-white/60 leading-relaxed">
                  <span className="text-white font-semibold">Personal Data:</span> Information such as your
                  name, email address, phone number, or other details you voluntarily provide when
                  contacting us, signing up for our Services, or opting into communications like SMS updates.
                </li>
                <li className="text-white/60 leading-relaxed">
                  <span className="text-white font-semibold">Usage Data:</span> Information about how you
                  interact with our website or Services, such as IP address, browser type, pages visited,
                  and time spent on the site.
                </li>
                <li className="text-white/60 leading-relaxed">
                  <span className="text-white font-semibold">Cookies:</span> We may use cookies and similar
                  tracking technologies to enhance your experience. You can manage cookie preferences
                  through your browser settings.
                </li>
                <li className="text-white/60 leading-relaxed">
                  <span className="text-white font-semibold">SMS Data:</span> If you opt into our SMS
                  program, we collect your phone number and any information you provide via text messages.
                </li>
                <li className="text-white/60 leading-relaxed">
                  <span className="text-white font-semibold">Social Media Data:</span> If you choose to link
                  your account with a social media platform (e.g., Facebook Login), we may collect information
                  you have authorized the platform to share with us, such as your name, email address, and
                  profile picture.
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="space-y-2">
                <li className="text-white/60 leading-relaxed">
                  Provide, operate, and maintain our website and Services, including AI-driven tools and
                  automation services for lead generation and operational optimisation.
                </li>
                <li className="text-white/60 leading-relaxed">
                  Respond to your inquiries, comments, or requests.
                </li>
                <li className="text-white/60 leading-relaxed">
                  Send you updates, marketing communications, promotional offers, or service notifications
                  (e.g., via SMS or email). You may opt out at any time.
                </li>
                <li className="text-white/60 leading-relaxed">
                  Analyse usage trends to improve our website and Services.
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">3. SMS Program Terms</h2>

              <h3 className="text-base font-semibold text-white/80 mb-2">3.1. SMS Program Overview</h3>
              <p className="text-white/60 leading-relaxed mb-4">
                The Novada Tech SMS Program provides updates, promotional offers, and service notifications
                related to our AI-powered solutions. By opting in, you may receive exclusive offers, lead
                generation insights, and automation updates. Message frequency varies.
              </p>

              <h3 className="text-base font-semibold text-white/80 mb-2">3.2. Opting Out of SMS Messages</h3>
              <p className="text-white/60 leading-relaxed mb-4">
                You can cancel the SMS service at any time by texting &quot;STOP&quot; to the shortcode. Upon
                sending &quot;STOP,&quot; we will confirm your unsubscribe status via SMS, and you will no longer
                receive SMS messages from us. To rejoin, sign up as you did initially.
              </p>

              <h3 className="text-base font-semibold text-white/80 mb-2">3.3. Support and Assistance</h3>
              <p className="text-white/60 leading-relaxed mb-4">
                If you experience issues with the SMS program, reply with &quot;HELP&quot; for assistance, or
                contact us at{" "}
                <a href="mailto:support@novadatech.com.au" className="text-gold-400 hover:text-gold-300 transition-colors">
                  support@novadatech.com.au
                </a>.
              </p>

              <h3 className="text-base font-semibold text-white/80 mb-2">3.4. Carrier Liability Disclaimer</h3>
              <p className="text-white/60 leading-relaxed mb-4">
                Carriers are not liable for delayed or undelivered messages.
              </p>

              <h3 className="text-base font-semibold text-white/80 mb-2">3.5. Message &amp; Data Rates</h3>
              <p className="text-white/60 leading-relaxed">
                Message and data rates may apply for SMS messages sent to or from us. For questions about
                your text or data plan, contact your wireless provider.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">4. Sharing Your Information</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                We may share data with trusted service providers and subcontractors (including advertising
                platforms like Meta/Facebook) strictly for the purpose of delivering our services and relevant
                advertisements to you. We do not sell your mobile data to third parties for their own
                independent marketing purposes.
              </p>
              <p className="text-white/60 leading-relaxed">
                Information sharing to subcontractors in support services, such as customer service, is
                permitted. All other use case categories exclude text messaging originator opt-in data and
                consent; this information will not be shared with any third parties for their own independent
                marketing purposes.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">5. Security of Your Information</h2>
              <p className="text-white/60 leading-relaxed">
                We use reasonable administrative, technical, and physical measures to protect your information.
                However, no method of transmission over the internet or electronic storage is 100% secure, and
                we cannot guarantee absolute security.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">6. Your Choices</h2>
              <ul className="space-y-3">
                <li className="text-white/60 leading-relaxed">
                  <span className="text-white font-semibold">Opt-Out:</span> You may unsubscribe from
                  marketing emails by clicking the &quot;unsubscribe&quot; link in any email or emailing us at{" "}
                  <a href="mailto:support@novadatech.com.au" className="text-gold-400 hover:text-gold-300 transition-colors">
                    support@novadatech.com.au
                  </a>. For SMS opt-out, see Section 3.2.
                </li>
                <li className="text-white/60 leading-relaxed">
                  <span className="text-white font-semibold">Cookies:</span> You can disable cookies via
                  your browser settings, though this may affect website functionality.
                </li>
                <li className="text-white/60 leading-relaxed">
                  <span className="text-white font-semibold">Data Compliance:</span> You are responsible
                  for ensuring any data you provide complies with applicable privacy laws.
                </li>
              </ul>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">7. Data Deletion</h2>
              <p className="text-white/60 leading-relaxed">
                You have the right to request the deletion of your personal data at any time. To request the
                deletion of your account and all associated data, please email us at{" "}
                <a href="mailto:support@novadatech.com.au" className="text-gold-400 hover:text-gold-300 transition-colors">
                  support@novadatech.com.au
                </a>{" "}
                with the subject line &quot;Data Deletion Request.&quot; We will verify your identity and
                permanently delete your data within 30 days, confirming the action via email.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">8. Third-Party Links</h2>
              <p className="text-white/60 leading-relaxed">
                Our website may contain links to third-party sites. We are not responsible for the privacy
                practices or content of those sites.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">9. Intellectual Property Notice</h2>
              <p className="text-white/60 leading-relaxed">
                All content, software, and technology provided through our Services are the intellectual
                property of Novada Tech or its licensors. You may not reproduce, distribute, or create
                derivative works without prior written consent.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-white/60 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page
                with an updated &quot;Last Updated&quot; date.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">11. Contact Us</h2>
              <p className="text-white/60 leading-relaxed">
                If you have questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-white/60">
                  <span className="text-white font-semibold">Email:</span>{" "}
                  <a href="mailto:support@novadatech.com.au" className="text-gold-400 hover:text-gold-300 transition-colors">
                    support@novadatech.com.au
                  </a>
                </p>
                <p className="text-white/60">
                  <span className="text-white font-semibold">Phone:</span>{" "}
                  <a href="tel:+61485000813" className="text-gold-400 hover:text-gold-300 transition-colors">
                    (+61) 485 000 813
                  </a>
                </p>
                <p className="text-white/60">
                  <span className="text-white font-semibold">Address:</span>{" "}
                  Suite 23/220 Collins Street, Melbourne VIC 3000
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
