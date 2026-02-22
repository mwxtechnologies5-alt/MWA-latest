"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Home,
  Users,
  Briefcase,
  FolderOpen,
  DollarSign,
  UserPlus,
  Mail,
  Menu,
  X,
  Globe,
  Smartphone,
  TrendingUp,
  Newspaper,
  Share2,
  Mic,
  Video,
  Radio,
  GraduationCap,
  BarChart3,
  Coins,
  Wrench,
} from "lucide-react";

const mainNavItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Users, label: "About", href: "/about" },
  { icon: Briefcase, label: "Services", href: "/services" },
  { icon: FolderOpen, label: "Portfolio", href: "/portfolio" },
  { icon: DollarSign, label: "Pricing", href: "/pricing" },
  { icon: UserPlus, label: "Careers", href: "/careers" },
  { icon: Mail, label: "Contact", href: "/contact" },
];

const serviceNavItems = [
  { icon: Globe, label: "Web Design", href: "/services/web-design" },
  { icon: Wrench, label: "Maintenance", href: "/services/maintenance" },
  { icon: Smartphone, label: "Mobile Apps", href: "/services/mobile-apps" },
  { icon: TrendingUp, label: "Digital Marketing", href: "/services/digital-marketing" },
  { icon: Newspaper, label: "PR & News", href: "/services/pr-news" },
  { icon: Share2, label: "Social Media", href: "/services/social-media" },
  { icon: Mic, label: "Influencer Marketing", href: "/services/influencer-marketing" },
  { icon: Video, label: "Video Production", href: "/services/video-production" },
  { icon: Radio, label: "Podcast", href: "/services/podcast" },
  { icon: GraduationCap, label: "Events", href: "/services/events" },
  { icon: BarChart3, label: "Exchange Listings", href: "/services/exchange-listings" },
];

export function CircularNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setShowServices(false);
    }
  };

  const currentItems = showServices ? serviceNavItems : mainNavItems;
  const itemCount = currentItems.length;
  const radius = showServices ? 200 : 140;

  return (
    <>
      <motion.button
        onClick={toggleNav}
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center glow-primary cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
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
              <X className="w-7 h-7 text-black" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="w-7 h-7 text-black" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleNav}
            />

            <div className="fixed bottom-8 right-8 z-[95]">
              {currentItems.map((item, index) => {
                const angle = (index / itemCount) * Math.PI * 2 - Math.PI / 2;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    className="absolute"
                    initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                    animate={{
                      x: x,
                      y: y,
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: index * 0.03,
                    }}
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => {
                        setIsOpen(false);
                        setShowServices(false);
                      }}
                      className="group flex flex-col items-center gap-1"
                    >
                      <motion.div
                        className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center group-hover:border-[#00f0ff]/50 group-hover:glow-primary transition-all duration-300"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="w-5 h-5 text-white group-hover:text-[#00f0ff] transition-colors" />
                      </motion.div>
                      <span className="text-[10px] text-white/70 group-hover:text-[#00f0ff] transition-colors whitespace-nowrap">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}

              {!showServices && (
                <motion.button
                  className="absolute w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center hover:border-[#ff00aa]/50 hover:glow-accent transition-all duration-300"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowServices(true)}
                >
                  <Briefcase className="w-5 h-5 text-white" />
                </motion.button>
              )}

              {showServices && (
                <motion.button
                  className="absolute w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center hover:border-[#ff00aa]/50 hover:glow-accent transition-all duration-300"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowServices(false)}
                >
                  <Home className="w-5 h-5 text-white" />
                </motion.button>
              )}
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
