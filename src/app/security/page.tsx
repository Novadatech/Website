"use client";

import { motion } from "framer-motion";

export default function SecurityPage() {
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
            Security
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-white/80 text-base"
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
            <p className="text-white/80 leading-relaxed">
              At Novada Tech (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we
              take the security of your data seriously. This page summarises our security practices and how
              we protect the platform.
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">1. Security Overview</h2>
              <p className="text-white/80 leading-relaxed">
                We implement administrative, technical, and physical safeguards designed to protect data
                from unauthorised access, disclosure, alteration, or destruction.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">2. Data Protection</h2>
              <ul className="space-y-2">
                <li className="text-white/80 leading-relaxed">
                  We use industry-standard encryption for data in transit (TLS).
                </li>
                <li className="text-white/80 leading-relaxed">
                  Where supported, data at rest is protected using encryption and access controls.
                </li>
                <li className="text-white/80 leading-relaxed">
                  We limit data access to authorised personnel with a business need to know.
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">3. Access Controls</h2>
              <ul className="space-y-2">
                <li className="text-white/80 leading-relaxed">
                  We follow the principle of least privilege.
                </li>
                <li className="text-white/80 leading-relaxed">
                  Access is reviewed and updated as roles change.
                </li>
                <li className="text-white/80 leading-relaxed">
                  We encourage strong authentication measures where available.
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">4. Monitoring and Incident Response</h2>
              <p className="text-white/80 leading-relaxed">
                We monitor our systems for suspicious activity and maintain procedures to investigate,
                contain, and remediate security incidents.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">5. Third-Party Risk Management</h2>
              <p className="text-white/80 leading-relaxed">
                We evaluate third-party vendors that process or store data on our behalf and require
                appropriate security safeguards.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">6. Your Role in Security</h2>
              <ul className="space-y-2">
                <li className="text-white/80 leading-relaxed">
                  Use a strong, unique password for your account.
                </li>
                <li className="text-white/80 leading-relaxed">
                  Keep your login credentials confidential.
                </li>
                <li className="text-white/80 leading-relaxed">
                  Notify us promptly if you suspect unauthorised access.
                </li>
              </ul>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">7. Report a Vulnerability</h2>
              <p className="text-white/80 leading-relaxed">
                If you believe you have discovered a security vulnerability, please contact us at{" "}
                <a href="mailto:support@novadatech.com.au" className="text-gold-400 hover:text-gold-300 transition-colors">
                  support@novadatech.com.au
                </a>{" "}
                with details to help us investigate.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">8. Updates</h2>
              <p className="text-white/80 leading-relaxed">
                We may update this Security page as our practices evolve. Any changes will be posted here
                with a revised &quot;Last Updated&quot; date.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
