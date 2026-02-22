"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Send,
  Mail,
  MapPin,
  Phone,
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
    { label: "Case Studies", href: "/portfolio#case-studies" },
    { label: "Blog", href: "/blog" },
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

export function Footer() {
  return (
    <footer className="relative bg-[#08080f] border-t border-[#8b5cf6]/10">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#8b5cf6]/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#7c3aed]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 pt-12 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-4 cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="relative w-9 h-9">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] rounded-lg" />
                  <div className="absolute inset-[2px] bg-[#08080f] rounded-md" />
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-bold bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] bg-clip-text text-transparent font-heading">M</span>
                </div>
                <div>
                  <span className="text-base font-bold tracking-tight text-white font-heading">MWX</span>
                  <span className="text-base font-light text-white/60 ml-1 font-body">Technologies</span>
                </div>
              </div>
            </Link>
            <p className="text-white/50 text-xs leading-relaxed mb-4 max-w-sm font-body">
              Transforming brands through innovative digital solutions. We combine
              cutting-edge technology with creative excellence.
            </p>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/50 text-xs font-body">
                <Mail className="w-3.5 h-3.5 text-[#8b5cf6]" />
                <span>hello@MWXmedia.com</span>
              </div>
              <div className="flex items-center gap-2 text-white/50 text-xs font-body">
                <Phone className="w-3.5 h-3.5 text-[#8b5cf6]" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-white/50 text-xs font-body">
                <MapPin className="w-3.5 h-3.5 text-[#8b5cf6]" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h4 className="text-white font-semibold mb-3 text-xs uppercase tracking-wider font-heading">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/50 hover:text-[#8b5cf6] text-xs transition-colors font-body cursor-pointer">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3 text-xs uppercase tracking-wider font-heading">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/50 hover:text-[#8b5cf6] text-xs transition-colors font-body cursor-pointer">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3 text-xs uppercase tracking-wider font-heading">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/50 hover:text-[#8b5cf6] text-xs transition-colors font-body cursor-pointer">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3 text-xs uppercase tracking-wider font-heading">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/50 hover:text-[#8b5cf6] text-xs transition-colors font-body cursor-pointer">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#8b5cf6]/10 pt-6">
          <div className="flex flex-col md:flex-row justify-end items-center gap-4">
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 rounded-full bg-[#12121a] border border-[#8b5cf6]/20 flex items-center justify-center hover:border-[#8b5cf6]/50 transition-colors cursor-pointer"
                  >
                    <Icon className="w-3 h-3 text-white/70 hover:text-[#8b5cf6]" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#8b5cf6]/10 flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-white/30 text-[10px] text-center md:text-left font-body">
              Ã‚Â© {new Date().getFullYear()} MWX Technologies. All rights reserved.
            </p>
            <p className="text-white/30 text-[10px] text-center md:text-right font-body">
              Crafted with precision in San Francisco
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
