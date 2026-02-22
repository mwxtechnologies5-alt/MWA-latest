"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}

export function ParallaxSection({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const multiplier = direction === "up" ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [0, 200 * speed * multiplier]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

interface ParallaxBackgroundProps {
  imageUrl?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  children?: React.ReactNode;
  className?: string;
}

export function ParallaxBackground({
  imageUrl,
  overlay = true,
  overlayOpacity = 0.7,
  children,
  className = "",
}: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {imageUrl && (
        <motion.div
          className="absolute inset-0 w-full h-[130%] -top-[15%]"
          style={{
            y,
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
      {overlay && (
        <div
          className="absolute inset-0 bg-background"
          style={{ opacity: overlayOpacity }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
