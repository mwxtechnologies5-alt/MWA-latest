"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#8b5cf6]/5 to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#8b5cf6] hover:text-[#a78bfa] transition-colors mb-8 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-body">Back to Home</span>
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#8b5cf6]/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#8b5cf6]" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground font-heading">
                  Privacy Policy
                </h1>
                <p className="text-muted-foreground text-sm font-body">
                  Last updated: January 2025
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="prose prose-invert max-w-none"
          >
            <div className="space-y-8 text-foreground/80 font-body">
              <section className="p-6 rounded-xl bg-card/50 border border-[#8b5cf6]/10">
                <h2 className="text-xl font-semibold text-foreground mb-4 font-heading">
                  1. Introduction
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  MWX Technologies (&quot;we,&quot; &quot;our,&quot; or
                  &quot;us&quot;) is committed to protecting your privacy. This
                  Privacy Policy explains how we collect, use, disclose, and
                  safeguard your information when you visit our website or use
                  our services.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card/50 border border-[#8b5cf6]/10">
                <h2 className="text-xl font-semibold text-foreground mb-4 font-heading">
                  2. Information We Collect
                </h2>
                <div className="space-y-4 text-foreground/70">
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      Personal Information
                    </h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>
                        Name and contact information (email, phone number)
                      </li>
                      <li>Company name and job title</li>
                      <li>Billing and payment information</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      Automatically Collected Information
                    </h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>IP address and browser type</li>
                      <li>Device information and operating system</li>
                      <li>Pages visited and time spent on our site</li>
                      <li>Referring website addresses</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="p-6 rounded-xl bg-card/50 border border-[#8b5cf6]/10">
                <h2 className="text-xl font-semibold text-foreground mb-4 font-heading">
                  3. How We Use Your Information
                </h2>
                <ul className="list-disc list-inside space-y-2 text-foreground/70">
                  <li>To provide and maintain our services</li>
                  <li>To process transactions and send related information</li>
                  <li>
                    To send promotional communications (with your consent)
                  </li>
                  <li>To respond to your comments, questions, and requests</li>
                  <li>To analyze usage patterns and improve our services</li>
                  <li>To protect against fraudulent or illegal activity</li>
                </ul>
              </section>

              <section className="p-6 rounded-xl bg-card/50 border border-[#8b5cf6]/10">
                <h2 className="text-xl font-semibold text-foreground mb-4 font-heading">
                  4. Information Sharing
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  We do not sell your personal information. We may share your
                  information with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/70">
                  <li>Service providers who assist in our operations</li>
                  <li>Professional advisors (lawyers, accountants)</li>
                  <li>Law enforcement when required by law</li>
                  <li>Business partners with your consent</li>
                </ul>
              </section>

              <section className="p-6 rounded-xl bg-card/50 border border-[#8b5cf6]/10">
                <h2 className="text-xl font-semibold text-foreground mb-4 font-heading">
                  5. Data Security
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  We implement appropriate technical and organizational security
                  measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction.
                  However, no method of transmission over the Internet is 100%
                  secure.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card/50 border border-[#8b5cf6]/10">
                <h2 className="text-xl font-semibold text-foreground mb-4 font-heading">
                  6. Your Rights
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/70">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section className="p-6 rounded-xl bg-card/50 border border-[#8b5cf6]/10">
                <h2 className="text-xl font-semibold text-foreground mb-4 font-heading">
                  7. Contact Us
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  If you have questions about this Privacy Policy, please
                  contact us at:
                </p>
                <div className="mt-4 p-4 rounded-lg bg-[#8b5cf6]/5 border border-[#8b5cf6]/20">
                  <p className="text-foreground font-medium">
                    MWX Technologies
                  </p>
                  <p className="text-foreground/70">
                    Email: privacy@MWXmedia.com
                  </p>
                  <p className="text-foreground/70">Address: Varanasi, India</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
