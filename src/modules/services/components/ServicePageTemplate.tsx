"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { LucideIcon } from "lucide-react";
import { Button } from "@/shared/ui/Button";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/shared/animations/AnimatedSection";
import { ParallaxBackground } from "@/shared/animations/ParallaxSection";

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  color: string;
  heroImage?: string;
  problem: { title: string; points: string[] };
  solution: { title: string; description: string };
  features: { title: string; description: string }[];
  tools?: string[];
  benefits: string[];
  useCases: { title: string; description: string }[];
}

export function ServicePageTemplate({
  title,
  subtitle,
  description,
  icon: Icon,
  color,
  heroImage,
  problem,
  solution,
  features,
  tools,
  benefits,
  useCases,
}: ServicePageProps) {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div className="relative">

      {/* ── HERO — full viewport, bottom-anchored text ── */}
      <ParallaxBackground
        imageUrl={heroImage}
        overlay={!heroImage}
        overlayOpacity={0.9}
        className="relative min-h-[calc(100vh-80px)] pt-[80px] flex flex-col justify-between bg-gradient-dark overflow-hidden"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-8 pt-10">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center"
              style={{ background: `${color}15`, border: `1px solid ${color}25` }}
            >
              <Icon className="w-3.5 h-3.5" style={{ color }} />
            </div>
            <span className="text-xs text-white/30 tracking-widest uppercase">MWX Technologies</span>
          </motion.div>
          <motion.span
            className="text-xs tracking-widest uppercase"
            style={{ color }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.span>
        </div>

        {/* Center — big number watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span
            className="text-[20rem] font-black leading-none"
            style={{ color: `${color}04`, fontFamily: "Georgia, serif" }}
          >
            MWX
          </span>
        </div>

        {/* Bottom — title split left/right */}
        <div className="px-8 pb-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <motion.h1
              className="text-5xl md:text-7xl font-black leading-none tracking-tight"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {title.split(" ").map((word, i) => (
                <span key={i} className="block">
                  {i % 2 === 1
                    ? <span style={{ WebkitTextStroke: `1px ${color}`, color: "transparent" }}>{word}</span>
                    : word
                  }
                </span>
              ))}
            </motion.h1>

            <div className="flex flex-col gap-8 lg:pb-2">
              <motion.p
                className="text-white/45 text-[15px] leading-relaxed border-l-2 pl-5"
                style={{ borderColor: `${color}40` }}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
              >
                {description}
              </motion.p>
              <motion.div
                className="flex items-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.65 }}
              >
                <Button href="/contact" className="bg-white text-black hover:bg-white/90 text-sm">
                  Start a Project
                </Button>
                <a
                  href="#challenge"
                  className="text-xs text-white/30 hover:text-white/60 tracking-widest uppercase transition-colors"
                >
                  Explore ↓
                </a>
              </motion.div>
            </div>
          </div>

          {/* Thin bottom accent line */}
          <motion.div
            className="max-w-7xl mx-auto mt-12 h-px"
            style={{ background: `linear-gradient(to right, ${color}60, transparent)` }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          />
        </div>
      </ParallaxBackground>

      {/* ── PROBLEM + SOLUTION — diagonal cut layout ── */}
      <section id="challenge" className="relative bg-[#0a0a0f] overflow-hidden">

        {/* Diagonal divider */}
        <div
          className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-[1px] rotate-6 origin-top"
          style={{ background: `linear-gradient(to bottom, ${color}20, transparent)` }}
        />

        <div className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-0">

          {/* Left — problem */}
          <AnimatedSection className="lg:pr-20 pb-16 lg:pb-0">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-6 h-px" style={{ background: color }} />
              <span className="text-xs tracking-widest uppercase" style={{ color }}>
                The Challenge
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 leading-snug">
              {problem.title}
            </h2>
            <div className="space-y-0">
              {problem.points.map((point, i) => (
                <motion.div
                  key={i}
                  className="group flex gap-5 py-5 border-b border-white/5"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span
                    className="text-[11px] font-bold shrink-0 pt-0.5 tabular-nums"
                    style={{ color, fontFamily: "Georgia, serif", opacity: 0.4 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-white/45 text-sm leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right — solution */}
          <AnimatedSection delay={0.25} className="lg:pl-20 lg:border-l border-white/5">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-6 h-px" style={{ background: color }} />
              <span className="text-xs tracking-widest uppercase" style={{ color }}>
                Our Solution
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug">
              {solution.title}
            </h3>
            <p className="text-white/45 text-[15px] leading-relaxed mb-14">
              {solution.description}
            </p>

            {/* Stacked metric rows */}
            <div className="space-y-6">
              {[
                { label: "Project Success Rate", pct: 98 },
                { label: "On-Time Delivery", pct: 95 },
                { label: "Client Retention", pct: 92 },
              ].map((m, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] uppercase tracking-widest text-white/25">{m.label}</span>
                    <span className="text-sm font-bold" style={{ color }}>{m.pct}%</span>
                  </div>
                  <div className="h-[1px] bg-white/6 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(to right, ${color}, ${color}60)` }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${m.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FEATURES — tabbed panel layout ── */}
      <AnimatedSection as="section" className="py-32 px-6 bg-[#0d0d14]">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-4 mb-16">
            <div className="w-6 h-px" style={{ background: color }} />
            <span className="text-xs tracking-widest uppercase" style={{ color }}>
              What We Deliver
            </span>
            <div className="flex-1 h-px bg-white/5" />
            <span className="text-white/15 text-xs">{features.length} capabilities</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left — tab list */}
            <div className="lg:col-span-4 space-y-0">
              <h2 className="text-4xl font-bold mb-10">
                Features &<br />
                <span style={{ color }}>Capabilities</span>
              </h2>
              {features.map((f, i) => (
                <button
                  key={i}
                  onClick={() => setActiveFeature(i)}
                  className="w-full text-left group"
                >
                  <div
                    className="relative flex items-center gap-4 py-4 border-b border-white/5 transition-all duration-200"
                  >
                    {/* Active indicator */}
                    <div
                      className="absolute left-0 top-3 bottom-3 w-[2px] rounded-full transition-all duration-300"
                      style={{
                        background: color,
                        opacity: activeFeature === i ? 1 : 0,
                        transform: activeFeature === i ? "scaleY(1)" : "scaleY(0)",
                      }}
                    />
                    <span
                      className="text-[10px] font-bold shrink-0 pl-4 tabular-nums transition-opacity duration-200"
                      style={{
                        color,
                        fontFamily: "Georgia, serif",
                        opacity: activeFeature === i ? 0.8 : 0.2,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="text-sm font-semibold transition-colors duration-200"
                      style={{ color: activeFeature === i ? "white" : "rgba(255,255,255,0.35)" }}
                    >
                      {f.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Right — active panel */}
            <div className="lg:col-span-8 lg:pl-8 lg:border-l border-white/5 flex items-center min-h-[320px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="w-full"
                >
                  <div
                    className="w-10 h-10 rounded-xl mb-8 flex items-center justify-center"
                    style={{ background: `${color}12`, border: `1px solid ${color}20` }}
                  >
                    <span className="text-lg font-black" style={{ color, fontFamily: "Georgia, serif" }}>
                      {String(activeFeature + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">
                    {features[activeFeature].title}
                  </h3>
                  <p className="text-white/45 text-[15px] leading-relaxed max-w-xl">
                    {features[activeFeature].description}
                  </p>
                  {/* Progress indicator */}
                  <div className="mt-10 flex gap-2">
                    {features.map((_, i) => (
                      <div
                        key={i}
                        className="h-[2px] rounded-full transition-all duration-300 cursor-pointer"
                        style={{
                          background: i === activeFeature ? color : "rgba(255,255,255,0.08)",
                          width: i === activeFeature ? "32px" : "8px",
                        }}
                        onClick={() => setActiveFeature(i)}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ── TOOLS — flowing text cloud ── */}
      {tools && tools.length > 0 && (
        <AnimatedSection as="section" className="py-28 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-16">
              <div className="w-6 h-px" style={{ background: color }} />
              <span className="text-xs tracking-widest uppercase" style={{ color }}>
                Technology Stack
              </span>
              <div className="flex-1 h-px bg-white/5" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
              <div>
                <h2 className="text-4xl font-bold mb-4">
                  Tools &<br />
                  <span style={{ color }}>Platforms</span>
                </h2>
                <p className="text-white/30 text-sm leading-relaxed">
                  The best-in-class stack we use to deliver your project.
                </p>
              </div>
              <div className="lg:col-span-2">
                <StaggerContainer className="flex flex-wrap gap-x-0 gap-y-0">
                  {tools.map((tool, i) => (
                    <StaggerItem key={i}>
                      <motion.div
                        className="group relative py-3 pr-10 cursor-default"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.15 }}
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className="w-1 h-1 rounded-full opacity-0 group-hover:opacity-50 transition-opacity"
                            style={{ background: color }}
                          />
                          <span className="text-white/35 text-sm group-hover:text-white/70 transition-colors">
                            {tool}
                          </span>
                        </div>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </div>
        </AnimatedSection>
      )}

      {/* ── BENEFITS + USE CASES ── */}
<section className="py-32 px-6 bg-[#0a0a0f]">
  <div className="max-w-7xl mx-auto">

    {/* Benefits */}
    <AnimatedSection>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-28">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-6 h-px" style={{ background: color }} />
            <span className="text-xs tracking-widest uppercase" style={{ color }}>Why Choose Us</span>
          </div>
          <h2 className="text-4xl font-bold lg:sticky lg:top-32">
            Benefits &<br />
            <span style={{ color }}>Outcomes</span>
          </h2>
        </div>
        <div className="lg:col-span-8 lg:border-l border-white/5 lg:pl-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                className="group relative flex items-start gap-4 py-5 border-b border-white/5 pr-8 pl-5 cursor-default"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {/* Accent line — at left-0, bullet starts at pl-5 so they never overlap */}
                <div
                  className="absolute left-0 top-4 bottom-4 w-[2px] rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"
                  style={{ background: color }}
                />
                <div
                  className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                  style={{ background: color, opacity: 0.45 }}
                />
                <span className="text-white/50 text-sm leading-relaxed">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>

    {/* Divider */}
    <div className="h-px bg-white/5 mb-28" />

    {/* Use Cases */}
    <AnimatedSection delay={0.1}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-6 h-px" style={{ background: color }} />
            <span className="text-xs tracking-widest uppercase" style={{ color }}>Use Cases</span>
          </div>
          <h2 className="text-4xl font-bold lg:sticky lg:top-32">
            Who It&apos;s<br />
            <span style={{ color }}>Built For</span>
          </h2>
        </div>
        <div className="lg:col-span-8 lg:border-l border-white/5 lg:pl-12 space-y-0">
          {useCases.map((uc, i) => (
            <motion.div
              key={i}
              className="group relative grid grid-cols-12 gap-6 py-7 border-b border-white/5 cursor-default pl-5"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.22 }}
            >
              {/* Accent line — at left-0, content starts at pl-5 */}
              <div
                className="absolute left-0 top-5 bottom-5 w-[2px] rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"
                style={{ background: color }}
              />
              <div className="col-span-1 pt-0.5">
                <span
                  className="text-xs font-bold tabular-nums"
                  style={{ color, fontFamily: "Georgia, serif", opacity: 0.3 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="col-span-4 md:col-span-3">
                <h3 className="text-sm font-bold text-white group-hover:text-white/90 transition-colors leading-snug">
                  {uc.title}
                </h3>
              </div>
              <div className="col-span-7 md:col-span-8">
                <p className="text-white/35 text-sm leading-relaxed">{uc.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>

  </div>
</section>

      {/* ── CTA — original gradient card, unchanged ── */}
      <AnimatedSection as="section" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="relative p-12 md:p-16 rounded-3xl overflow-hidden bg-gradient-primary">
              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                  Let&apos;s discuss how we can help you achieve your goals with our{" "}
                  {title.toLowerCase()} services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href="/contact" className="bg-black text-white hover:bg-black/80">
                    Start Your Project
                  </Button>
                  <Button
                    href="/services"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    View All Services
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>

    </div>
  );
}