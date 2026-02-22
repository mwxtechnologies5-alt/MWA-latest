"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Cookie, ArrowLeft } from "lucide-react";

export default function CookiePolicyPage() {
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
                <Cookie className="w-6 h-6 text-[#8b5cf6]" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground font-heading">Cookie Policy</h1>
                <p className="text-muted-foreground text-sm font-body">Last updated: January 2025</p>
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
                <h2 className="text-xl font-semibold text-foreground mb-4 font-heading">1. What Are Cookies?</h2>
                <p className="text-foreground/70 leading-relaxed">
                  Cookies are small text files that are stored on your device when you visit a website. They help the website remember your preferences and improve your browsing experience. Cookies can be &quot;persistent&quot; or &quot;session&quot; cookies.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card/50 border border-[#8b5cf6]/10">
                <h2 className="text-xl font-semibold text-foreground mb-4 font-heading">2. Types of Cookies We Use</h2>
                <div className="space-y-4 text-foreground/70">
                  <div className="p-4 rounded-lg bg-[#8b5cf6]/5 border border-[#8b5cf6]/20">
                    <h3 className="text-lg font-medium text-foreground mb-2">Essential Cookies</h3>
                    <p>Required for the website to function properly. These cannot be disabled.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-[#8b5cf6]/5 border border-[#8b5cf6]/20">
                    <h3 className="text-lg font-medium text-foreground mb-2">Analytics Cookies</h3>
                    <p>Help us understand how visitors interact with our website by collecting anonymous information.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-[#8b5cf6]/5 border border-[#8b5cf6]/20">
                    <h3 className="text-lg font-medium text-foreground mb-2">Functional Cookies</h3>
                    <p>Remember your preferences and settings to enhance your experience.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-[#8b5cf6]/5 border border-[#8b5cf6]/20">
                    <h3 className="text-lg font-medium text-foreground mb-2">Marketing Cookies</h3>
                    <p>Used to track visitors across websites to display relevant advertisements.</p>
                  </div>
                </div>
              </section>

              <section className="p-6 rounded-xl bg-card/50 border border-[#8b5cf6]/10">
                <h2 className="text-xl font-semibold text-foreground mb-4 font-heading">3. How We Use Cookies</h2>
                <ul className="list-disc list-inside space-y-2 text-foreground/70">
                  <li>To remember your login status and preferences</li>
                  <li>To analyze website traffic and usage patterns</li>
                  <li>To personalize content and advertisements</li>
                  <li>To improve website performance and user experience</li>
                  <li>To provide social media features</li>
                </ul>
              </section>

              <section className="p-6 rounded-xl bg-card/50 border border-[#8b5cf6]/10">
                <h2 className="text-xl font-semibold text-foreground mb-4 font-heading">4. Third-Party Cookies</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  We may use third-party services that place cookies on your device:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/70">
                  <li>Google Analytics - for website analytics</li>
                  <li>Social media platforms - for sharing features</li>
                  <li>Payment processors - for secure transactions</li>
                  <li>Advertising networks - for targeted ads</li>
                </ul>
              </section>

              <section className="p-6 rounded-xl bg-card/50 border border-[#8b5cf6]/10">
                <h2 className="text-xl font-semibold text-foreground mb-4 font-heading">5. Managing Cookies</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  You can control and manage cookies in several ways:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/70">
                  <li>Browser settings: Most browsers allow you to block or delete cookies</li>
                  <li>Our cookie consent tool: Manage your preferences on our website</li>
                  <li>Opt-out links: Use third-party opt-out mechanisms</li>
                </ul>
                <p className="text-foreground/70 mt-4">
                  Note: Disabling certain cookies may affect website functionality.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card/50 border border-[#8b5cf6]/10">
                <h2 className="text-xl font-semibold text-foreground mb-4 font-heading">6. Cookie Retention</h2>
                <p className="text-foreground/70 leading-relaxed">
                  Session cookies are deleted when you close your browser. Persistent cookies remain on your device for a set period or until you delete them. Our cookies typically expire within 1-12 months depending on their purpose.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card/50 border border-[#8b5cf6]/10">
                <h2 className="text-xl font-semibold text-foreground mb-4 font-heading">7. Contact Us</h2>
                <p className="text-foreground/70 leading-relaxed">
                  For questions about our cookie practices:
                </p>
                <div className="mt-4 p-4 rounded-lg bg-[#8b5cf6]/5 border border-[#8b5cf6]/20">
                  <p className="text-foreground font-medium">MWX Technologies</p>
                  <p className="text-foreground/70">Email: privacy@MWXmedia.com</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
