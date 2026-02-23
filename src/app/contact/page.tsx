"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore/lite";
import { db } from "@/lib/firebase";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Twitter,
  Linkedin,
  Instagram,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/shared/ui/Button";
import { AnimatedSection } from "@/shared/animations/AnimatedSection";
import { ParallaxBackground } from "@/shared/animations/ParallaxSection";
import { AnimatedDonutChart } from "@/shared/ui/Charts";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "mwxtechnologies5@gmail.com",
    description: "We'll respond within 24 hours",
    href: "mailto:mwxtechnologies5@gmail.com",
    color: "#00f0ff",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 79058 58145",
    description: "Mon-Fri, 9am-6pm IST",
    href: "tel:+917905858145",
    color: "#ff00aa",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Varanasi, India",
    description: "By appointment only",
    href: "https://www.google.com/maps/search/?api=1&query=Varanasi,India",
    color: "#8b5cf6",
  },
];

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/MWXmedia", label: "Twitter" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/MWXmedia",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/MWXmedia",
    label: "Instagram",
  },
  { icon: MessageSquare, href: "https://t.me/MWXmedia", label: "Telegram" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "contactSubmissions"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("An error occurred while sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative">
      {/* ── HERO ── */}
      <ParallaxBackground
        overlay={false}
        className="min-h-[60vh] flex items-center justify-center bg-gradient-dark"
      >
        <div className="text-center px-6 py-32">
          <motion.span
            className="text-[#00f0ff] text-sm font-medium tracking-widest uppercase mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.span>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let&apos;s Build Something
            <br />
            <span className="text-gradient">Amazing Together</span>
          </motion.h1>
          <motion.p
            className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to transform your digital presence? Get in touch and
            let&apos;s discuss your project.
          </motion.p>
        </div>
      </ParallaxBackground>

      {/* ── CONTACT INFO ROWS + FORM ── */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#8b5cf6]/10 to-[#ff00aa]/5 rounded-full blur-[180px]" />
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Contact info — open editorial rows */}
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-6 h-px bg-[#00f0ff]" />
              <span className="text-[#00f0ff] text-xs font-medium tracking-widest uppercase">
                Get In Touch
              </span>
              <div className="flex-1 h-px bg-white/6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/6 mb-16">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    target={info.icon === MapPin ? "_blank" : undefined}
                    rel={
                      info.icon === MapPin ? "noopener noreferrer" : undefined
                    }
                    className="group relative flex items-start gap-4 px-0 md:px-8 first:pl-0 last:pr-0 py-6 md:py-0 cursor-pointer"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Accent line */}
                    <div
                      className="hidden md:block absolute left-0 top-2 bottom-2 w-[2px] rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top first:hidden"
                      style={{ background: info.color }}
                    />

                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110"
                      style={{
                        background: `${info.color}12`,
                        border: `1px solid ${info.color}20`,
                      }}
                    >
                      <Icon className="w-4 h-4" style={{ color: info.color }} />
                    </div>
                    <div>
                      <p className="text-white/30 text-[11px] uppercase tracking-widest mb-1">
                        {info.title}
                      </p>
                      <p
                        className="text-sm font-semibold mb-0.5 group-hover:underline underline-offset-2 transition-all"
                        style={{ color: info.color }}
                      >
                        {info.value}
                      </p>
                      <p className="text-white/30 text-xs">
                        {info.description}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={0.15}>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-6 h-px bg-[#8b5cf6]" />
              <span className="text-[#8b5cf6] text-xs font-medium tracking-widest uppercase">
                Start Your Journey
              </span>
              <div className="flex-1 h-px bg-white/6" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left — form heading */}
              <div className="lg:col-span-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Tell Us About
                  <br />
                  <span className="text-gradient">Your Project</span>
                </h2>
                <p className="text-white/40 text-[14px] leading-relaxed mb-10">
                  Fill out the form and one of our growth specialists will get
                  back to you within 24 hours.
                </p>

                {/* Social links */}
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-6 h-px bg-white/10" />
                  <span className="text-white/20 text-[10px] tracking-widest uppercase">
                    Follow Us
                  </span>
                </div>
                <div className="flex gap-2">
                  {socialLinks.map((s) => {
                    const Icon = s.icon;
                    return (
                      <motion.a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        whileHover={{ y: -2 }}
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-white/25 hover:text-[#8b5cf6] hover:bg-[#8b5cf6]/8 transition-all duration-200"
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Right — form fields */}
              <div className="lg:col-span-8 lg:border-l border-white/6 lg:pl-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/40 text-xs uppercase tracking-widest mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/8 text-white placeholder:text-white/20 focus:outline-none focus:border-[#8b5cf6]/50 transition-colors text-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-white/40 text-xs uppercase tracking-widest mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/8 text-white placeholder:text-white/20 focus:outline-none focus:border-[#00f0ff]/50 transition-colors text-sm"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/40 text-xs uppercase tracking-widest mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/8 text-white placeholder:text-white/20 focus:outline-none focus:border-[#00f0ff]/50 transition-colors text-sm"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-white/40 text-xs uppercase tracking-widest mb-2">
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/8 text-white focus:outline-none focus:border-[#00f0ff]/50 transition-colors text-sm"
                      >
                        <option value="" className="bg-[#0a0a0f]">
                          Select a service
                        </option>
                        <option value="web-design" className="bg-[#0a0a0f]">
                          Web Design & Development
                        </option>
                        <option value="mobile-apps" className="bg-[#0a0a0f]">
                          Mobile App Development
                        </option>
                        <option
                          value="digital-marketing"
                          className="bg-[#0a0a0f]"
                        >
                          Digital Marketing
                        </option>
                        <option value="pr-news" className="bg-[#0a0a0f]">
                          PR & News Publishing
                        </option>
                        <option value="social-media" className="bg-[#0a0a0f]">
                          Social Media Marketing
                        </option>
                        <option value="influencer" className="bg-[#0a0a0f]">
                          Influencer Marketing
                        </option>
                        <option value="other" className="bg-[#0a0a0f]">
                          Other
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/40 text-xs uppercase tracking-widest mb-2">
                      Estimated Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/8 text-white focus:outline-none focus:border-[#00f0ff]/50 transition-colors text-sm"
                    >
                      <option value="" className="bg-[#0a0a0f]">
                        Select your budget range
                      </option>
                      <option value="under-5k" className="bg-[#0a0a0f]">
                        Under $5,000
                      </option>
                      <option value="5k-15k" className="bg-[#0a0a0f]">
                        $5,000 – $15,000
                      </option>
                      <option value="15k-50k" className="bg-[#0a0a0f]">
                        $15,000 – $50,000
                      </option>
                      <option value="50k-100k" className="bg-[#0a0a0f]">
                        $50,000 – $100,000
                      </option>
                      <option value="over-100k" className="bg-[#0a0a0f]">
                        Over $100,000
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/40 text-xs uppercase tracking-widest mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/8 text-white placeholder:text-white/20 focus:outline-none focus:border-[#00f0ff]/50 transition-colors resize-none text-sm"
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    icon={<Send className="w-5 h-5" />}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── METRICS ── */}
      <section className="py-24 px-6 relative bg-[#0d0d14]">
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-16">
              <div className="w-6 h-px bg-[#8b5cf6]" />
              <span className="text-[#8b5cf6] text-xs font-medium tracking-widest uppercase">
                Why Work With Us
              </span>
              <div className="flex-1 h-px bg-white/6" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Client Success
                  <br />
                  <span className="text-gradient">Metrics</span>
                </h2>
                <p className="text-white/40 text-[14px] leading-relaxed max-w-sm">
                  Numbers that reflect our commitment to delivering exceptional
                  results for every client.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <AnimatedDonutChart
                  value={24}
                  maxValue={48}
                  title="Avg Response Time"
                  subtitle="Hours"
                  color="#8b5cf6"
                />
                <AnimatedDonutChart
                  value={98}
                  title="Client Satisfaction"
                  subtitle="Based on surveys"
                  color="#a78bfa"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ── MAP — Varanasi ── */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-6 h-px bg-[#00f0ff]" />
              <span className="text-[#00f0ff] text-xs font-medium tracking-widest uppercase">
                Our Location
              </span>
              <div className="flex-1 h-px bg-white/6" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div>
                <h2 className="text-4xl font-bold mb-4">
                  Find Us in
                  <br />
                  <span className="text-gradient">Varanasi</span>
                </h2>
                <p className="text-white/40 text-sm leading-relaxed mb-6">
                  Based in the heart of India&apos;s cultural capital, we serve
                  clients globally from our Varanasi headquarters.
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Varanasi,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#00f0ff] text-sm border-b border-[#00f0ff]/30 pb-0.5 hover:border-[#00f0ff]/70 transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>
              <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-white/8 h-[380px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57648.30079241158!2d82.93007695!3d25.31668245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68a5a9b4e3506a18!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: "invert(90%) hue-rotate(180deg)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
