"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    hasDropdown: true,
    dropdownItems: [
      { label: "Web Design & Development", href: "/services/web-design" },
      { label: "Website Maintenance", href: "/services/maintenance" },
      { label: "Mobile Apps", href: "/services/mobile-apps" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "PR & News", href: "/services/pr-news" },
      { label: "Social Media", href: "/services/social-media" },
      { label: "Influencer Marketing", href: "/services/influencer-marketing" },
      { label: "Video Production", href: "/services/video-production" },
      { label: "Podcast", href: "/services/podcast" },
      { label: "Events", href: "/services/events" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? "bg-background/90 backdrop-blur-xl border-b border-[#8b5cf6]/10 shadow-lg shadow-[#8b5cf6]/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="flex items-center gap-2.5 group flex-shrink-0 cursor-pointer"
          >
            <div className="relative w-9 h-9 md:w-10 md:h-10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6] via-[#a78bfa] to-[#7c3aed] rounded-xl group-hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-shadow duration-300" />
              <div className="absolute inset-[3px] bg-background rounded-lg" />
              <span className="absolute inset-0 flex items-center justify-center text-base md:text-lg font-bold bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] bg-clip-text text-transparent font-heading">
                M
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm md:text-base font-bold text-foreground leading-tight font-heading">
                MWX
              </span>
              <span className="text-[10px] md:text-xs text-muted-foreground leading-tight font-body">
                Technologies
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center gap-1 px-4 py-2 rounded-full bg-card/80 backdrop-blur-xl border border-[#8b5cf6]/10">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() =>
                    link.hasDropdown && handleMouseEnter(link.label)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={link.href}
                    className={`relative px-3 xl:px-4 py-2 text-sm font-medium transition-all duration-300 flex items-center gap-1 rounded-full font-body cursor-pointer ${
                      pathname === link.href ||
                      (link.hasDropdown && pathname.startsWith(link.href))
                        ? "text-[#8b5cf6] bg-[#8b5cf6]/10"
                        : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                    }`}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          activeDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  <AnimatePresence>
                    {link.hasDropdown && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 py-2 bg-card/98 backdrop-blur-xl rounded-xl border border-[#8b5cf6]/15 shadow-2xl shadow-[#8b5cf6]/10 max-h-[70vh] overflow-y-auto"
                        onMouseEnter={() => handleMouseEnter(link.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="px-3 py-2 border-b border-[#8b5cf6]/10 mb-1">
                          <Link
                            href={link.href}
                            className="text-xs font-medium text-[#8b5cf6] hover:text-[#a78bfa] flex items-center gap-1 font-body cursor-pointer"
                          >
                            View All Services
                            <ChevronRight className="w-3 h-3" />
                          </Link>
                        </div>
                        {link.dropdownItems?.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className={`block px-4 py-2.5 text-sm transition-colors font-body cursor-pointer ${
                              pathname === item.href
                                ? "text-[#8b5cf6] bg-[#8b5cf6]/10"
                                : "text-foreground/70 hover:text-[#8b5cf6] hover:bg-[#8b5cf6]/5"
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="relative px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] rounded-full overflow-hidden group transition-all hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] active:scale-95 font-body cursor-pointer"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed] to-[#8b5cf6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 transition-colors hover:bg-[#8b5cf6]/20 active:scale-95 cursor-pointer"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5 text-[#8b5cf6]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5 text-[#8b5cf6]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 4rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed top-16 md:top-20 left-0 right-0 bottom-0 overflow-hidden bg-background/98 backdrop-blur-xl border-t border-[#8b5cf6]/10"
          >
            <div className="h-full overflow-y-auto overscroll-contain">
              <div className="px-4 py-6 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.hasDropdown ? (
                      <div>
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === link.label ? null : link.label,
                            )
                          }
                          className={`w-full flex items-center justify-between px-4 py-3.5 text-base font-medium rounded-xl transition-colors font-body cursor-pointer ${
                            pathname.startsWith(link.href)
                              ? "text-[#8b5cf6] bg-[#8b5cf6]/10"
                              : "text-foreground/80 hover:text-foreground hover:bg-foreground/5"
                          }`}
                        >
                          {link.label}
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-300 ${
                              activeDropdown === link.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === link.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 pr-2 py-2 space-y-0.5 border-l-2 border-[#8b5cf6]/30 ml-4 my-2">
                                <Link
                                  href={link.href}
                                  className="block px-4 py-2.5 text-sm font-medium text-[#8b5cf6] rounded-lg hover:bg-[#8b5cf6]/10 transition-colors font-body cursor-pointer"
                                >
                                  View All Services
                                </Link>
                                {link.dropdownItems?.map((item) => (
                                  <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`block px-4 py-2.5 text-sm rounded-lg transition-colors font-body cursor-pointer ${
                                      pathname === item.href
                                        ? "text-[#8b5cf6] bg-[#8b5cf6]/10"
                                        : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
                                    }`}
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={`block px-4 py-3.5 text-base font-medium rounded-xl transition-colors font-body cursor-pointer ${
                          pathname === link.href
                            ? "text-[#8b5cf6] bg-[#8b5cf6]/10"
                            : "text-foreground/80 hover:text-foreground hover:bg-foreground/5"
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="pt-6 pb-4"
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center w-full px-6 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] rounded-xl transition-all active:scale-95 shadow-lg shadow-[#8b5cf6]/20 font-body cursor-pointer"
                  >
                    Contact Us
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4 border-t border-[#8b5cf6]/10"
                >
                  <p className="text-center text-muted-foreground text-xs font-body">
                    © {new Date().getFullYear()} MWX Technologies
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
