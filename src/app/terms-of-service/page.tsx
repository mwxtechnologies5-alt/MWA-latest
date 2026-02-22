"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

export default function TermsOfServicePage() {
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
                <FileText className="w-6 h-6 text-[#8b5cf6]" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground font-heading">Terms of Service</h1>
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
                <h2 className="text-xl font-semibold text-foreground mb-4 font-heading">1. Agreement to Terms</h2>
                <p className="text-foreground/70 leading-relaxed">
                  By accessing or using MWX Technologies&apos;s services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card/50 border border-[#8b5cf6]/10">
                <h2 className="text-xl font-semibold text-foreground mb-4 font-heading">2. Services Description</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  MWX Technologies provides digital marketing, web development, mobile app development, and related technology services. Our services include but are not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/70">
                  <li>Web design and development</li>
                  <li>Mobile application development</li>
                  <li>Digital marketing and SEO</li>
                  <li>PR and media services</li>
                  <li>Social media management</li>
                  <li>Exchange and token listing services</li>
                </ul>
              </section>

              <section className="p-6 rounded-xl bg-card/50 border border-[#8b5cf6]/10">
                <h2 className="text-xl font-semibold text-foreground mb-4 font-heading">3. User Responsibilities</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">When using our services, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 text-foreground/70">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of your account</li>
                  <li>Not use our services for illegal purposes</li>
                  <li>Not infringe on intellectual property rights</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section className="p-6 rounded-xl bg-card/50 border border-[#8b5cf6]/10">
                <h2 className="text-xl font-semibold text-foreground mb-4 font-heading">4. Payment Terms</h2>
                <div className="space-y-4 text-foreground/70">
                  <p className="leading-relaxed">
                    Payment terms vary by service and will be specified in individual service agreements. General terms include:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Payments are due according to the agreed schedule</li>
                    <li>Late payments may incur additional fees</li>
                    <li>Refunds are subject to our refund policy</li>
                    <li>All prices are in USD unless otherwise specified</li>
                  </ul>
                </div>
              </section>

              <section className="p-6 rounded-xl bg-card/50 border border-[#8b5cf6]/10">
                <h2 className="text-xl font-semibold text-foreground mb-4 font-heading">5. Intellectual Property</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Upon full payment, clients receive ownership of deliverables as specified in their contract. MWX Technologies retains:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/70">
                  <li>Rights to proprietary tools and methodologies</li>
                  <li>Portfolio usage rights for completed work</li>
                  <li>Rights to pre-existing intellectual property</li>
                </ul>
              </section>

              <section className="p-6 rounded-xl bg-card/50 border border-[#8b5cf6]/10">
                <h2 className="text-xl font-semibold text-foreground mb-4 font-heading">6. Limitation of Liability</h2>
                <p className="text-foreground/70 leading-relaxed">
                  MWX Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid for the specific service in question.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card/50 border border-[#8b5cf6]/10">
                <h2 className="text-xl font-semibold text-foreground mb-4 font-heading">7. Confidentiality</h2>
                <p className="text-foreground/70 leading-relaxed">
                  Both parties agree to maintain the confidentiality of proprietary information shared during the course of our business relationship. This obligation survives the termination of any service agreement.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card/50 border border-[#8b5cf6]/10">
                <h2 className="text-xl font-semibold text-foreground mb-4 font-heading">8. Termination</h2>
                <p className="text-foreground/70 leading-relaxed">
                  Either party may terminate services according to the terms specified in individual service agreements. Upon termination, clients are responsible for payment of all work completed to date.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card/50 border border-[#8b5cf6]/10">
                <h2 className="text-xl font-semibold text-foreground mb-4 font-heading">9. Governing Law</h2>
                <p className="text-foreground/70 leading-relaxed">
                  These terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card/50 border border-[#8b5cf6]/10">
                <h2 className="text-xl font-semibold text-foreground mb-4 font-heading">10. Contact Information</h2>
                <p className="text-foreground/70 leading-relaxed">
                  For questions about these Terms of Service:
                </p>
                <div className="mt-4 p-4 rounded-lg bg-[#8b5cf6]/5 border border-[#8b5cf6]/20">
                  <p className="text-foreground font-medium">MWX Technologies</p>
                  <p className="text-foreground/70">Email: legal@MWXmedia.com</p>
                  <p className="text-foreground/70">Address: San Francisco, CA</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
