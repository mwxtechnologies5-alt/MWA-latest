"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface LogoProps {
  variant?: "full" | "icon";
  className?: string;
}

export function Logo({ variant = "full", className = "" }: LogoProps) {
  if (variant === "icon") {
    return (
      <Link href="/" className={`inline-block ${className}`}>
        <motion.div
          className="relative w-10 h-10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 bg-gradient-primary rounded-xl rotate-45" />
          <div className="absolute inset-1 bg-[#0a0a0f] rounded-lg rotate-45" />
          <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-gradient">M</span>
        </motion.div>
      </Link>
    );
  }

  return (
    <Link href="/" className={`inline-block ${className}`}>
      <motion.div
        className="flex items-center gap-3"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative w-10 h-10">
          <div className="absolute inset-0 bg-gradient-primary rounded-xl rotate-45" />
          <div className="absolute inset-1 bg-[#0a0a0f] rounded-lg rotate-45" />
          <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-gradient">M</span>
        </div>
        <div className="flex items-baseline">
          <span className="text-xl font-bold tracking-tight text-white">
            MWX
          </span>
          <span className="text-xl font-light text-white/60 ml-1.5">
            Media
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
