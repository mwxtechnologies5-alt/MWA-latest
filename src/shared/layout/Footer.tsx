"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Web Development", href: "/services/web-design" },
    { label: "Mobile Apps", href: "/services/mobile-apps" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "PR & News", href: "/services/pr-news" },
  ],
  resources: [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/MWXmedia", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/MWXmedia", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/MWXmedia", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/@MWXmedia", label: "YouTube" },
];

const contactInfo = [
  { icon: Mail, label: "mwxtechnologies5@gmail.com" },
  { icon: Phone, label: "+91 79058 58145" },
  { icon: MapPin, label: "Varanasi, India" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#08080f]">

      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/30 to-transparent" />

      {/* Ambient glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#8b5cf6]/4 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#7c3aed]/4 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ── Main grid ── */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-white/5">

          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-6 group">
              <div className="relative w-9 h-9 shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] rounded-lg" />
                <div className="absolute inset-[2px] bg-[#08080f] rounded-md" />
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] bg-clip-text text-transparent">
                  M
                </span>
              </div>
              <div>
                <span className="text-base font-bold tracking-tight text-white">MWX</span>
                <span className="text-base font-light text-white/50 ml-1">Technologies</span>
              </div>
            </Link>

            <p className="text-white/40 text-[13px] leading-relaxed mb-8 max-w-xs">
              Transforming brands through innovative digital solutions. We combine
              cutting-edge technology with creative excellence.
            </p>

            {/* Contact info — open rows */}
            <div className="space-y-0">
              {contactInfo.map(({ icon: Icon, label }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-2.5 border-b border-white/5 last:border-0"
                >
                  <Icon className="w-3.5 h-3.5 shrink-0 text-[#8b5cf6]" />
                  <span className="text-white/40 text-xs">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h4 className="text-white/60 text-[10px] font-semibold uppercase tracking-widest mb-5">
                  {section}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-white/35 hover:text-white text-[13px] transition-colors duration-200"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-60 -translate-y-0.5 translate-x-0 group-hover:translate-x-0.5 group-hover:-translate-y-1 transition-all duration-200" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <p className="text-white/20 text-[11px] tracking-wide order-2 md:order-1">
            © {new Date().getFullYear()} MWX Technologies. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-1 order-1 md:order-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white/30 hover:text-[#8b5cf6] hover:bg-[#8b5cf6]/8 transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </motion.a>
              );
            })}
          </div>

          {/* Made in */}
          <p className="text-white/20 text-[11px] tracking-wide order-3">
            Crafted with precision in Varanasi
          </p>
        </div>

      </div>
    </footer>
  );
}