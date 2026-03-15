"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsOfServicePage() {
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
            Terms &amp; Conditions
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
          <div className="space-y-10">
            {/* Intro */}
            <p className="text-white/60 leading-relaxed">
              Welcome to Novada Tech (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
              These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of our website,
              software, and AI-powered services (&quot;Services&quot;). By accessing or using our Services,
              you agree to be bound by these Terms. If you disagree with any part of the terms, you may
              not access the Service.
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-white/60 leading-relaxed">
                By accessing or using the services provided by Novada Tech, you agree to be bound by these
                Terms. If you disagree with any part of the terms, you may not access the Service.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">2. Accounts</h2>
              <p className="text-white/60 leading-relaxed">
                When you create an account with us, you must provide us with information that is accurate,
                complete, and current at all times. Failure to do so constitutes a breach of the Terms,
                which may result in immediate termination of your account on our Service.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">3. Mobile Messaging Terms &amp; Conditions</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                By consenting to Novada Tech&apos;s SMS/text messaging service, you agree to receive
                recurring SMS/text messages from and on behalf of Novada Tech through your wireless
                provider to the mobile number you provided.
              </p>
              <div className="space-y-4 pl-4">
                <div>
                  <h3 className="text-base font-semibold text-white/80 mb-2">3.1. Service Description</h3>
                  <p className="text-white/60 leading-relaxed">
                    We send text messages regarding lead generation alerts, appointment reminders, security
                    codes, and service updates.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white/80 mb-2">3.2. Opt-Out</h3>
                  <p className="text-white/60 leading-relaxed">
                    You can cancel the SMS service at any time. Just text &quot;STOP&quot; to the short code.
                    After you send the SMS message &quot;STOP&quot; to us, we will send you an SMS message to
                    confirm that you have been unsubscribed. After this, you will no longer receive SMS messages
                    from us. If you want to join again, just sign up as you did the first time and we will start
                    sending SMS messages to you again.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white/80 mb-2">3.3. Help</h3>
                  <p className="text-white/60 leading-relaxed">
                    If you are experiencing issues with the messaging program you can reply with the keyword
                    &quot;HELP&quot; for more assistance, or you can get help directly at{" "}
                    <a href="mailto:support@novadatech.com.au" className="text-gold-400 hover:text-gold-300 transition-colors">
                      support@novadatech.com.au
                    </a>.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white/80 mb-2">3.4. Carrier Liability</h3>
                  <p className="text-white/60 leading-relaxed">
                    Carriers are not liable for delayed or undelivered messages.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white/80 mb-2">3.5. Rates</h3>
                  <p className="text-white/60 leading-relaxed">
                    As always, message and data rates may apply for any messages sent to you from us and to us
                    from you. Message frequency varies. If you have any questions about your text plan or data
                    plan, it is best to contact your wireless provider.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">4. Use of AI Services</h2>
              <h3 className="text-base font-semibold text-white/80 mb-2">AI Services Disclaimer</h3>
              <p className="text-white/60 leading-relaxed mb-4">
                Our Services utilise Artificial Intelligence (AI) and machine learning technologies.
                You acknowledge that:
              </p>
              <ul className="space-y-2">
                <li className="text-white/60 leading-relaxed">
                  AI may produce inaccurate, offensive, or inappropriate content (&quot;Hallucinations&quot;).
                  You are responsible for verifying any output before using it for professional or commercial purposes.
                </li>
                <li className="text-white/60 leading-relaxed">
                  We do not guarantee that the AI Services will be error-free or uninterrupted.
                </li>
                <li className="text-white/60 leading-relaxed">
                  You retain ownership of the input you provide, but you grant us a licence to use it to
                  improve our models and services.
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">5. Intellectual Property</h2>
              <p className="text-white/60 leading-relaxed">
                The Service and its original content (excluding Content provided by users), features, and
                functionality are and will remain the exclusive property of Novada Tech and its licensors.
                All content, templates, frameworks, software, and intellectual property provided through
                the Services are owned by the Company or its licensors. You may not reproduce, redistribute,
                modify, or create derivative works without prior written consent.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">6. Fees and Payment</h2>
              <ul className="space-y-3">
                <li className="text-white/60 leading-relaxed">
                  <span className="text-white font-semibold">6.1.</span> All pricing is outlined on the
                  Company&apos;s checkout page, order form, or in your service agreement.
                </li>
                <li className="text-white/60 leading-relaxed">
                  <span className="text-white font-semibold">6.2.</span> All payments are strictly
                  non-refundable once any part of the Services has been accessed, including strategy calls,
                  onboarding, community access, templates, or training materials.
                </li>
                <li className="text-white/60 leading-relaxed">
                  <span className="text-white font-semibold">6.3.</span> The Company reserves the right to
                  suspend access to Services for overdue or failed payments.
                </li>
              </ul>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">7. Chargeback &amp; Dispute Policy</h2>
              <ul className="space-y-3">
                <li className="text-white/60 leading-relaxed">
                  <span className="text-white font-semibold">7.1.</span> By using our Services, you agree not
                  to initiate a chargeback or dispute without first contacting us at{" "}
                  <a href="mailto:support@novadatech.com.au" className="text-gold-400 hover:text-gold-300 transition-colors">
                    support@novadatech.com.au
                  </a>{" "}
                  to resolve the matter in good faith.
                </li>
                <li className="text-white/60 leading-relaxed">
                  <span className="text-white font-semibold">7.2.</span> Initiating a chargeback without prior
                  contact will be considered a breach of these Terms. We reserve the right to pursue legal action
                  and deny further access to Services.
                </li>
              </ul>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">8. Results Disclaimer</h2>
              <ul className="space-y-3">
                <li className="text-white/60 leading-relaxed">
                  <span className="text-white font-semibold">8.1.</span> We make no guarantees regarding
                  outcomes, revenue, or results. Your performance depends on your business model, effort,
                  and market conditions.
                </li>
                <li className="text-white/60 leading-relaxed">
                  <span className="text-white font-semibold">8.2.</span> Templates, frameworks, and strategies
                  are designed for flexible implementation but do not guarantee results without client participation.
                </li>
              </ul>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">9. Use of Templates and Frameworks</h2>
              <ul className="space-y-3">
                <li className="text-white/60 leading-relaxed">
                  <span className="text-white font-semibold">9.1.</span> Our programs include proprietary
                  templates, prompts, and frameworks used across client accounts for efficiency and faster deployment.
                </li>
                <li className="text-white/60 leading-relaxed">
                  <span className="text-white font-semibold">9.2.</span> These tools are customisable and
                  designed to be implemented with our guidance. Use of shared systems does not constitute misrepresentation.
                </li>
              </ul>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">10. Client Responsibilities</h2>
              <ul className="space-y-3">
                <li className="text-white/60 leading-relaxed">
                  <span className="text-white font-semibold">10.1.</span> You agree to participate fully in
                  your program by attending calls, completing assigned tasks, implementing instructions, and
                  maintaining communication.
                </li>
                <li className="text-white/60 leading-relaxed">
                  <span className="text-white font-semibold">10.2.</span> Failure to engage, implement, or
                  respond may void any conditional guarantees or timelines and does not entitle you to a refund.
                </li>
              </ul>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">11. Termination</h2>
              <p className="text-white/60 leading-relaxed">
                We may terminate or suspend access to our Service immediately, without prior notice or
                liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">12. Limitation of Liability</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                In no event shall Novada Tech, nor its directors, employees, partners, agents, suppliers,
                or affiliates, be liable for any indirect, incidental, special, consequential or punitive
                damages, including without limitation, loss of profits, data, use, goodwill, or other
                intangible losses, resulting from your access to or use of or inability to access or use
                the Service.
              </p>
              <p className="text-white/60 leading-relaxed">
                In no event will our total liability exceed the amount you paid for Services in the
                preceding 12 months.
              </p>
            </div>

            {/* Section 13 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">13. Disclaimer of Warranties</h2>
              <p className="text-white/60 leading-relaxed">
                Services are provided &quot;as is&quot; with no warranties of any kind, express or implied.
                We do not warrant uninterrupted access, error-free systems, or guaranteed compatibility
                with your business model.
              </p>
            </div>

            {/* Section 14 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">14. Governing Law</h2>
              <p className="text-white/60 leading-relaxed">
                These Terms shall be governed and construed in accordance with the laws of the State of
                Victoria, Australia, without regard to its conflict of law provisions.
              </p>
            </div>

            {/* Section 15 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">15. Changes</h2>
              <p className="text-white/60 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
                If a revision is material, we will try to provide at least 30 days notice prior to any new
                terms taking effect.
              </p>
            </div>

            {/* Section 16 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">16. Contact Us</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="space-y-2">
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

            {/* Section 17 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">17. Privacy Policy</h2>
              <p className="text-white/60 leading-relaxed">
                Please review our full privacy policy at:{" "}
                <Link href="/privacy-policy" className="text-gold-400 hover:text-gold-300 transition-colors">
                  novadatech.com.au/privacy-policy
                </Link>
              </p>
            </div>

            {/* Closing */}
            <div className="pt-6 border-t border-white/[0.06]">
              <p className="text-white/50 text-sm leading-relaxed italic">
                By completing a purchase or signing an agreement, you affirm that you have read, understood,
                and agree to these Terms in full. You also agree that any payment submitted is final,
                non-refundable, and subject to these protections.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
