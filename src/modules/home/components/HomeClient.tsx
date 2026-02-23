"use client";

import Orb from "@/shared/animations/Orb/Orb";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, TrendingUp, ArrowRight, Zap, Users, Star } from "lucide-react";
import { RevealText } from "@/shared/animations/GSAPAnimations";
import { Testimonials } from "@/shared/ui/TestimonialSlider";
import { CountUp } from "@/shared/animations/AnimatedSection";
import {
  AnimatedBarChart,
  AnimatedPieChart,
  AnimatedLineChart,
  ROICalculator,
  GrowthMetric,
} from "@/shared/ui/Charts";

gsap.registerPlugin(ScrollTrigger);

import {
  services,
  stats,
  whyChooseUs,
  serviceDistribution,
  growthData,
  performanceMetrics,
} from "@/core/constants/home-data";
import {
  Floating3DCube,
  Floating3DPyramid,
  Floating3DTorus,
  FloatingOctahedron,
  FloatingPrism,
  FloatingDiamond,
} from "@/modules/home/animations/3DShapes";

const ST = {
  start: "top 88%",
  end: "top 15%",
  toggleActions: "play none none reverse" as const,
};

function slideUp(
  target: gsap.TweenTarget,
  trigger: Element,
  opts: { delay?: number; stagger?: number; y?: number } = {},
) {
  gsap.fromTo(
    target,
    { opacity: 0, y: opts.y ?? 52 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay: opts.delay ?? 0,
      stagger: opts.stagger ?? 0,
      ease: "power3.out",
      scrollTrigger: { trigger, ...ST },
    },
  );
}

function zoomIn(
  target: gsap.TweenTarget,
  trigger: Element,
  opts: { delay?: number; stagger?: number } = {},
) {
  gsap.fromTo(
    target,
    { opacity: 0, scale: 0.86, y: 24 },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.65,
      delay: opts.delay ?? 0,
      stagger: opts.stagger ?? 0,
      ease: "back.out(1.5)",
      scrollTrigger: { trigger, ...ST },
    },
  );
}

function slideLeft(
  target: gsap.TweenTarget,
  trigger: Element,
  opts: { delay?: number } = {},
) {
  gsap.fromTo(
    target,
    { opacity: 0, x: -70 },
    {
      opacity: 1,
      x: 0,
      duration: 0.75,
      delay: opts.delay ?? 0,
      ease: "power3.out",
      scrollTrigger: { trigger, ...ST },
    },
  );
}

function slideRight(
  target: gsap.TweenTarget,
  trigger: Element,
  opts: { delay?: number } = {},
) {
  gsap.fromTo(
    target,
    { opacity: 0, x: 70 },
    {
      opacity: 1,
      x: 0,
      duration: 0.75,
      delay: opts.delay ?? 0,
      ease: "power3.out",
      scrollTrigger: { trigger, ...ST },
    },
  );
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const servicesHeaderRef = useRef<HTMLDivElement>(null);
  const serviceCardsRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLElement>(null);
  const roiRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);

  useEffect(() => {
    gsap.set(".g-hidden", { opacity: 0 });

    const ctx = gsap.context(() => {
      // ─── HERO ─────────────────────────────────────────────────────────────
      gsap
        .timeline({ delay: 0.1 })
        .fromTo(
          ".hero-t1",
          { opacity: 0, y: 46 },
          { opacity: 1, y: 0, duration: 0.72, ease: "power3.out" },
        )
        .fromTo(
          ".hero-t2",
          { opacity: 0, y: 46 },
          { opacity: 1, y: 0, duration: 0.72, ease: "power3.out" },
          "-=0.5",
        )
        .fromTo(
          ".hero-desc",
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" },
          "-=0.44",
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" },
          "-=0.4",
        )
        .fromTo(
          ".hero-scroll",
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          "-=0.1",
        );

      // ─── ABOUT ────────────────────────────────────────────────────────────
      if (aboutRef.current) {
        const el = aboutRef.current;
        slideUp(el.querySelectorAll(".ab-label"), el, { stagger: 0.13 });
        slideUp(el.querySelectorAll(".ab-h2"), el, {
          stagger: 0.13,
          delay: 0.06,
        });
        slideUp(el.querySelector(".ab-desc")!, el, { delay: 0.22, y: 30 });
        zoomIn(el.querySelectorAll(".stat-card"), el, {
          stagger: 0.08,
          delay: 0.1,
        });
        slideUp(el.querySelectorAll(".chart-card"), el, {
          stagger: 0.13,
          delay: 0.18,
          y: 44,
        });
      }

      // ─── SERVICES HEADER ──────────────────────────────────────────────────
      if (servicesHeaderRef.current) {
        const el = servicesHeaderRef.current;
        slideUp(el.querySelectorAll(".sv-label, .sv-h2"), el, {
          stagger: 0.12,
        });
        slideUp(el.querySelector(".sv-desc")!, el, { delay: 0.24, y: 28 });
      }

      // ─── SERVICE CARDS ────────────────────────────────────────────────────
      if (serviceCardsRef.current) {
        const el = serviceCardsRef.current;
        slideLeft(el.querySelector(".card-featured")!, el, { delay: 0.05 });
        zoomIn(el.querySelectorAll(".card-grid"), el, {
          stagger: 0.1,
          delay: 0.18,
        });
        slideUp(el.querySelector(".sv-viewall")!, el, { delay: 0.52, y: 20 });
      }

      // ─── WHY CHOOSE US ────────────────────────────────────────────────────
      if (whyRef.current) {
        const el = whyRef.current;
        slideLeft(el.querySelector(".why-left")!, el, { delay: 0 });
        slideUp(el.querySelectorAll(".why-item"), el, {
          stagger: 0.12,
          delay: 0.16,
          y: 34,
        });
        slideRight(el.querySelector(".why-img")!, el, { delay: 0.08 });
      }

      // ─── ROI ──────────────────────────────────────────────────────────────
      if (roiRef.current) {
        const el = roiRef.current;
        slideUp(el.querySelectorAll(".roi-label, .roi-h2"), el, {
          stagger: 0.12,
        });
        zoomIn(el.querySelector(".roi-calc")!, el, { delay: 0.14 });
        zoomIn(el.querySelectorAll(".roi-metric"), el, {
          stagger: 0.09,
          delay: 0.26,
        });
      }

      // ─── CTA ──────────────────────────────────────────────────────────────
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 60, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: { trigger: ctaRef.current, ...ST },
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-[#0a0a12] via-[#0d0d18] to-[#0a0a12] overflow-x-hidden">
      {/* Fixed bg gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#8b5cf6]/8 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#7c3aed]/6 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#a78bfa]/5 via-transparent to-transparent" />
      </div>

      {/* ══════════════════════════ HERO ══════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Orb */}
        <div className="absolute inset-0 z-0 opacity-60 blur-[24px] mix-blend-screen">
          <Orb
            hue={300}
            hoverIntensity={3.5}
            rotateOnHover
            backgroundColor="#0b0a1e"
          />
        </div>

        {/* Ambient glows + grid */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <motion.div
            className="absolute top-1/3 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#8b5cf6]/35 rounded-full blur-[120px] md:blur-[160px]"
            animate={{ scale: [1, 1.14, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#7c3aed]/30 rounded-full blur-[100px] md:blur-[140px]"
            animate={{ scale: [1.1, 1, 1.1] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
          />
          <svg
            className="absolute inset-0 w-full h-full opacity-15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 50 0 L 0 0 0 50"
                  fill="none"
                  stroke="rgba(139,92,246,0.08)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[450px] h-[350px] md:h-[450px] border border-[#8b5cf6]/8 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 52, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[600px] h-[500px] md:h-[600px] border border-[#8b5cf6]/5 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 72, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Hero text */}
        <motion.div
          ref={heroTextRef}
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 text-center px-6 w-full max-w-5xl mx-auto pt-20 pointer-events-none"
        >
          <h1
            className="hero-t1 g-hidden text-[2.75rem] xs:text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold mb-2 leading-[1.08] text-foreground"
            style={{ fontFamily: "var(--font-special)" }}
          >
            Transform Your
          </h1>
          <h1
            className="hero-t2 g-hidden text-[2.75rem] xs:text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-[1.08] bg-gradient-to-r from-[#8b5cf6] via-[#a78bfa] to-[#7c3aed] bg-clip-text text-transparent"
            style={{ fontFamily: "var(--font-special)" }}
          >
            Digital Future
          </h1>
          <p
            className="hero-desc g-hidden text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed px-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            We architect comprehensive digital growth strategies for startups,
            enterprises, and Web3 projects. From concept to global dominance.
          </p>
          <div className="hero-cta g-hidden flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
            <Link href="/contact">
              <motion.span
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] rounded-full cursor-pointer hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-shadow duration-300"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Start Your Project <ArrowRight className="w-4 h-4 ml-2" />
              </motion.span>
            </Link>
            <Link href="/services">
              <motion.span
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-foreground bg-foreground/5 border border-[#8b5cf6]/30 rounded-full cursor-pointer hover:bg-[#8b5cf6]/10 hover:border-[#8b5cf6]/50 transition-all duration-300"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Services
              </motion.span>
            </Link>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="hero-scroll g-hidden absolute bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-auto">
          <motion.div
            className="w-5 h-8 border-2 border-[#8b5cf6]/30 rounded-full flex justify-center cursor-pointer"
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            <motion.div
              className="w-1 h-2 bg-[#8b5cf6] rounded-full mt-1.5"
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════ ABOUT / STATS ══════════════════════════ */}
      <section ref={aboutRef} className="py-16 md:py-24 px-4 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-[#8b5cf6]/6 rounded-full blur-[180px] pointer-events-none" />
        <Floating3DCube className="top-10 right-[5%] hidden lg:block opacity-60" />
        <FloatingDiamond className="bottom-20 left-[3%] hidden md:block opacity-50" />

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-10 md:mb-14">
            <p className="ab-label g-hidden text-[#8b5cf6] text-xs font-medium tracking-widest uppercase mb-2 font-body">
              Who We Are
            </p>
            <h2 className="ab-h2 g-hidden text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-foreground font-heading">
              The Growth Partner
            </h2>
            <h2 className="ab-h2 g-hidden text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] bg-clip-text text-transparent font-heading">
              You&apos;ve Been Searching For
            </h2>
            <p className="ab-desc g-hidden text-muted-foreground text-sm md:text-base max-w-2xl mx-auto font-body">
              MWX Technologies is a full-stack digital agency that blends
              creative strategy with cutting-edge technology. We partner with
              startups, enterprises, and Web3 projects to deliver data-driven
              growth and measurable results across every digital channel.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="stat-card g-hidden text-center p-4 rounded-xl bg-card/40 border border-[#8b5cf6]/10 hover:border-[#8b5cf6]/25 transition-colors duration-300"
                whileHover={{ scale: 1.04, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] bg-clip-text text-transparent mb-1 font-heading">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-muted-foreground text-[10px] sm:text-xs font-body">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="chart-card g-hidden">
              <AnimatedPieChart
                data={serviceDistribution}
                title="Service Distribution"
              />
            </div>
            <div className="chart-card g-hidden">
              <AnimatedLineChart
                data={growthData}
                title="Client Growth (6 Months)"
                color="#8b5cf6"
              />
            </div>
            <div className="chart-card g-hidden">
              <AnimatedBarChart
                data={performanceMetrics}
                title="Performance Metrics"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ SERVICES ══════════════════════════ */}
      <section className="py-16 md:py-24 px-4 relative">
        <div className="absolute top-0 right-0 w-[350px] md:w-[450px] h-[350px] md:h-[450px] bg-[#8b5cf6]/8 rounded-full blur-[140px] pointer-events-none" />
        <Floating3DPyramid className="top-20 left-[3%] hidden lg:block opacity-50" />
        <Floating3DTorus className="bottom-10 right-[5%] hidden md:block opacity-60" />
        <FloatingOctahedron className="top-1/2 left-[2%] hidden xl:block opacity-40" />

        <div className="max-w-6xl mx-auto relative">
          <div ref={servicesHeaderRef} className="text-center mb-10 md:mb-14">
            <p className="sv-label g-hidden text-[#a78bfa] text-xs font-medium tracking-widest uppercase mb-2 font-body">
              Our Services
            </p>
            <h2 className="sv-h2 g-hidden text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-foreground font-heading">
              Full-Stack Digital
            </h2>
            <h2 className="sv-h2 g-hidden text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] bg-clip-text text-transparent font-heading">
              Growth Solutions
            </h2>
            <p className="sv-desc g-hidden text-muted-foreground text-sm md:text-base max-w-xl mx-auto font-body">
              From web development and brand identity to performance marketing
              and global PR, we offer end-to-end solutions engineered to
              accelerate your brand&apos;s reach and revenue.
            </p>
          </div>

          <div
            ref={serviceCardsRef}
            className="grid grid-cols-1 lg:grid-cols-12 gap-4"
          >
            {/* Featured card */}
            <Link
              href={services[0]?.href || "#"}
              className="lg:col-span-4 h-full block"
            >
              <motion.div
                className="card-featured g-hidden group h-full rounded-[24px] bg-gradient-to-b from-[#1a1532] to-[#252044] border border-[#8b5cf6]/20 hover:border-[#8b5cf6]/40 transition-colors duration-300 relative overflow-hidden flex flex-col justify-between"
                whileHover={{ y: -7, scale: 1.015 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#8b5cf6]/40 via-transparent to-transparent opacity-50 pointer-events-none" />
                <div className="absolute top-0 bottom-0 left-[20%] w-[1px] bg-white/5 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-[20%] w-[1px] bg-white/5 pointer-events-none" />
                <div className="p-8 md:p-10 relative z-10 flex flex-col space-y-8">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#a78bfa] to-[#6d28d9] flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.6)]">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight font-heading">
                      {services[0]?.label}
                    </h3>
                    <p className="text-[#a1a1aa] md:text-lg leading-relaxed font-body font-medium pr-4">
                      {services[0]?.description}
                    </p>
                  </div>
                </div>
                <div className="p-8 md:p-10 relative z-10 mt-auto">
                  <div className="inline-flex w-full md:w-auto items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold tracking-wider text-sm rounded-full backdrop-blur-md transition-colors border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
                    EXPLORE MORE
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* 2×2 grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.slice(1, 5).map((service, index) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={index}
                    href={service.href}
                    className="block h-full"
                  >
                    <motion.div
                      className="card-grid g-hidden group p-6 sm:p-8 rounded-[24px] bg-[#0c0c14]/80 backdrop-blur-sm border border-white/5 hover:border-white/15 transition-colors duration-300 h-full cursor-pointer flex flex-col justify-start"
                      whileHover={{ y: -7, scale: 1.015 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#8b5cf6]/10 group-hover:border-[#8b5cf6]/30 transition-all duration-300 shrink-0">
                        <Icon
                          strokeWidth={1.5}
                          className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-[#a78bfa] transition-colors font-heading tracking-wide">
                          {service.label}
                        </h3>
                        <p className="text-[#888899] text-sm md:text-base leading-relaxed font-body">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* View all */}
          <div className="sv-viewall g-hidden text-center mt-8">
            <Link href="/services">
              <motion.span
                className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium text-[#8b5cf6] border border-[#8b5cf6]/30 rounded-full transition-all hover:bg-[#8b5cf6]/10 hover:border-[#8b5cf6]/50 cursor-pointer font-body"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                View All Services <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </motion.span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ WHY CHOOSE US ══════════════════════════ */}
      <section ref={whyRef} className="py-16 md:py-24 px-4 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-[#8b5cf6]/6 rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 md:px-16 lg:px-20 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="why-left g-hidden max-w-xl">
              <p className="text-[#8b5cf6] text-xs font-medium tracking-widest uppercase mb-3 font-body">
                Why Choose Us
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-4 font-heading">
                Crafted for Growth
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-10 font-body">
                We design and build digital solutions that help brands grow with
                clarity and confidence.
              </p>
              <div className="space-y-8">
                {whyChooseUs.slice(0, 3).map((item, index) => {
                  const Icon = item.icon;
                  const titles = [
                    "Rapid Delivery",
                    "Trusted Results",
                    "Expert Team",
                  ];
                  const descs = [
                    "Efficient workflows ensure timely delivery without sacrificing quality.",
                    "A proven history of building reliable, scalable digital products.",
                    "Skilled professionals dedicated to your long-term success.",
                  ];
                  return (
                    <div key={index} className="why-item g-hidden flex gap-4">
                      <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-md bg-[#8b5cf6]/10">
                        <Icon className="w-5 h-5 text-[#8b5cf6]" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-foreground mb-1 font-heading">
                          {titles[index]}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed font-body">
                          {descs[index]}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="why-img g-hidden w-full flex justify-center md:justify-end">
              <div className="w-full max-w-md rounded-2xl overflow-hidden">
                <img
                  src="https://cdn.prod.website-files.com/67acce11d89836c3f8ffb533/67acce11d89836c3f8ffb741_Best%20Choice.webp"
                  alt="Team working"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ TESTIMONIALS ══════════════════════════ */}
      <Testimonials />

      {/* ══════════════════════════ ROI ══════════════════════════ */}
      <section ref={roiRef} className="py-16 md:py-24 px-4 relative">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#8b5cf6]/6 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-10 md:mb-14">
            <p className="roi-label g-hidden text-[#8b5cf6] text-xs font-medium tracking-widest uppercase mb-2 font-body">
              Calculate Your ROI
            </p>
            <h2 className="roi-h2 g-hidden text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-foreground font-heading">
              See Your Potential
            </h2>
            <h2 className="roi-h2 g-hidden text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] bg-clip-text text-transparent font-heading">
              Growth
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-stretch">
            <div className="roi-calc g-hidden w-full md:w-1/2 flex flex-col">
              <ROICalculator />
            </div>
            <div
              className="w-full md:w-1/2 grid grid-cols-2 gap-4"
              style={{ gridAutoRows: "1fr" }}
            >
              {[
                {
                  label: "Avg. Revenue Growth",
                  value: "350%",
                  change: 42,
                  icon: <TrendingUp className="w-4 h-4" />,
                },
                {
                  label: "Traffic Increase",
                  value: "5.2x",
                  change: 28,
                  icon: <Users className="w-4 h-4" />,
                },
                {
                  label: "Lead Generation",
                  value: "480%",
                  change: 35,
                  icon: <Zap className="w-4 h-4" />,
                },
                {
                  label: "Brand Visibility",
                  value: "10x",
                  change: 56,
                  icon: <Star className="w-4 h-4" />,
                },
              ].map((m, i) => (
                <div
                  key={i}
                  className="roi-metric g-hidden flex flex-col [&>*]:flex-1 [&>*]:h-full"
                >
                  <GrowthMetric
                    label={m.label}
                    value={m.value}
                    change={m.change}
                    icon={m.icon}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ CTA BANNER ══════════════════════════ */}
      <section className="py-16 md:py-24 px-4 relative">
        <FloatingDiamond className="top-10 left-[10%] hidden md:block opacity-50" />
        <FloatingPrism className="bottom-10 right-[10%] hidden lg:block opacity-40" />

        <div className="max-w-3xl mx-auto">
          <div ref={ctaRef} className="g-hidden">
            <div className="relative p-6 md:p-12 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9]" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20256%20256%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.8%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noise)%22%2F%3E%3C%2Fsvg%3E')] opacity-5" />
              <div className="relative z-10 text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 font-heading">
                  Ready to Accelerate
                  <br />
                  Your Growth?
                </h2>
                <p className="text-white/80 text-sm md:text-base mb-6 max-w-lg mx-auto font-body">
                  Let&apos;s discuss how MWX Technologies can help you achieve
                  your digital goals. Book a free consultation today.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/contact">
                    <motion.span
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#7c3aed] font-semibold rounded-full hover:bg-white/90 transition-colors cursor-pointer text-sm font-body"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Get Started Now <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.span>
                  </Link>
                  <Link href="/portfolio">
                    <motion.span
                      className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/10 transition-colors cursor-pointer text-sm font-body"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      View Our Work
                    </motion.span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
