"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users } from "lucide-react";
import { Button } from "@/shared/ui/Button";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/shared/animations/AnimatedSection";
import { ParallaxBackground } from "@/shared/animations/ParallaxSection";
import {
  AnimatedLineChart,
  AnimatedPieChart,
  ComparisonBar,
  GrowthMetric,
} from "@/shared/ui/Charts";

const projects = [
  {
    title: "BlockVenture Token Launch",
    category: "Web3 Marketing",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    description:
      "Complete marketing campaign for a DeFi protocol launch including PR, and influencer partnerships.",
    results: [
      { label: "TVL Growth", value: "$15M+" },
      { label: "Twitter Followers", value: "50K" },
      { label: "Media Mentions", value: "200+" },
    ],
  },
  {
    title: "TechStart Mobile App",
    category: "App Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    description:
      "Full-stack mobile application development for a fintech startup, including iOS, Android, and backend infrastructure.",
    results: [
      { label: "App Downloads", value: "100K+" },
      { label: "App Store Rating", value: "4.8" },
      { label: "Daily Active Users", value: "25K" },
    ],
  },
  {
    title: "Luxe Brand E-commerce",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    description:
      "Premium e-commerce platform with custom design, payment integration, and inventory management system.",
    results: [
      { label: "Revenue Increase", value: "250%" },
      { label: "Conversion Rate", value: "4.5%" },
      { label: "Page Load Time", value: "1.2s" },
    ],
  },
  {
    title: "MetaVerse Gaming PR",
    category: "PR & Media",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    description:
      "Global PR campaign for a blockchain gaming platform launch with coverage in major gaming and crypto publications.",
    results: [
      { label: "Media Articles", value: "150+" },
      { label: "Reach", value: "50M+" },
      { label: "Discord Members", value: "100K" },
    ],
  },
  {
    title: "HealthTech SaaS Marketing",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    description:
      "Full-funnel digital marketing strategy for a B2B healthcare software company targeting enterprise clients.",
    results: [
      { label: "Qualified Leads", value: "500+" },
      { label: "Cost Per Lead", value: "-60%" },
      { label: "Demo Bookings", value: "150" },
    ],
  },
];

const testimonials = [
  {
    name: "Alex Thompson",
    role: "CEO, BlockVenture",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    content:
      "MWX Technologies delivered beyond our expectations. Their comprehensive approach to our token launch resulted in incredible community growth.",
    project: "BlockVenture Token Launch",
  },
  {
    name: "Jennifer Liu",
    role: "Founder, TechStart",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    content:
      "The app they built for us is exceptional. From design to performance, every detail was considered. Our users love it and the numbers speak for themselves.",
    project: "TechStart Mobile App",
  },
];

const projectGrowthData = [
  { label: "Month 1", value: 20 },
  { label: "Month 2", value: 45 },
  { label: "Month 3", value: 72 },
  { label: "Month 4", value: 88 },
  { label: "Month 5", value: 95 },
];

const projectDistribution = [
  { label: "Web3", value: 40, color: "#8b5cf6" },
  { label: "SaaS", value: 25, color: "#a78bfa" },
  { label: "E-commerce", value: 20, color: "#7c3aed" },
  { label: "Fintech", value: 15, color: "#c4b5fd" },
];

const accentColors = ["#00f0ff", "#ff00aa", "#7b2dff", "#8b5cf6", "#a78bfa"];

const impactStats = [
  { value: "500+", label: "Projects Completed", color: "#00f0ff" },
  { value: "200+", label: "Happy Clients", color: "#ff00aa" },
  { value: "$100M+", label: "Revenue Generated", color: "#7b2dff" },
  { value: "50M+", label: "Total Reach", color: "#8b5cf6" },
];

export default function PortfolioPage() {
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
            Our Work
          </motion.span>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Case Studies &
            <br />
            <span className="text-gradient">Portfolio</span>
          </motion.h1>
          <motion.p
            className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore our track record of delivering exceptional results for
            clients across industries.
          </motion.p>
        </div>
      </ParallaxBackground>

      {/* ── PROJECTS — editorial list layout ── */}
      <AnimatedSection as="section" className="py-32 px-6 relative" id="case-studies">
        <div className="max-w-7xl mx-auto">

          {/* Section label */}
          <div className="flex items-center gap-4 mb-16">
            <div className="w-6 h-px bg-[#ff00aa]" />
            <span className="text-[#ff00aa] text-xs font-medium tracking-widest uppercase">
              Featured Projects
            </span>
            <div className="flex-1 h-px bg-white/6" />
            <span className="text-white/20 text-xs">
              {projects.length} case studies
            </span>
          </div>

          <StaggerContainer className="divide-y divide-white/6">
            {projects.map((project, index) => {
              const accent = accentColors[index % accentColors.length];
              return (
                <StaggerItem key={index}>
                  <motion.div
                    className="group relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-10 pl-4"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                  >
                    {/* Animated left accent line */}
                    <div
                      className="absolute left-0 top-8 bottom-8 w-[2px] rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"
                      style={{ background: accent }}
                    />

                    {/* Index + category */}
                    <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-3 lg:gap-1 pt-1">
                      <span
                        className="text-[11px] font-bold tracking-widest"
                        style={{
                          color: accent,
                          fontFamily: "Georgia, serif",
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] text-white/25 tracking-widest uppercase hidden lg:block">
                        {project.category}
                      </span>
                    </div>

                    {/* Thumbnail */}
                    <div className="lg:col-span-3 overflow-hidden rounded-xl">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 lg:h-36 object-cover"
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                      <span
                        className="text-[10px] tracking-widest uppercase mb-2 lg:hidden"
                        style={{ color: accent }}
                      >
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/40 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Results */}
                    <div className="lg:col-span-3 flex lg:flex-col justify-start lg:justify-center gap-6 lg:gap-4">
                      {project.results.map((result, i) => (
                        <div key={i}>
                          <div
                            className="text-xl font-bold leading-none mb-0.5"
                            style={{ color: accent }}
                          >
                            {result.value}
                          </div>
                          <div className="text-[10px] text-white/30 uppercase tracking-wider">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* ── ANALYTICS + IMPACT STATS ── */}
      <AnimatedSection as="section" className="py-32 px-6 relative bg-[#0d0d14]">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-4 mb-16">
            <div className="w-6 h-px bg-[#8b5cf6]" />
            <span className="text-[#8b5cf6] text-xs font-medium tracking-widest uppercase">
              Portfolio Analytics
            </span>
            <div className="flex-1 h-px bg-white/6" />
          </div>

          {/* Heading + Impact stats side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Data-Driven
                <br />
                <span className="text-gradient"> Results</span>
              </h2>
              <p className="text-white/40 text-[15px] leading-relaxed max-w-sm">
                Every project we take on is measured, optimized, and tracked
                against real business outcomes.
              </p>
            </div>

            {/* Open divider stats grid */}
            <div className="grid grid-cols-2 gap-0">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className={`
                    group relative p-6 cursor-default
                    ${index % 2 === 1 ? "border-l border-white/6" : ""}
                    ${index >= 2 ? "border-t border-white/6" : ""}
                  `}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className="absolute left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-full"
                    style={{
                      background: stat.color,
                      top: index >= 2 ? "-1px" : "0",
                    }}
                  />
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/35 text-xs tracking-wide uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Charts row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedLineChart
              data={projectGrowthData}
              title="Avg. Project Growth"
              color="#8b5cf6"
            />
            <AnimatedPieChart
              data={projectDistribution}
              title="Project Distribution"
            />
            <div className="flex flex-col gap-4">
              <ComparisonBar
                label="User Engagement"
                before={25}
                after={85}
                unit="%"
              />
              <ComparisonBar
                label="Revenue Growth"
                before={100}
                after={350}
                unit="K"
              />
            </div>
            <div className="flex flex-col gap-4">
              <GrowthMetric
                label="Avg. Traffic Boost"
                value="420%"
                change={32}
                icon={<TrendingUp className="w-4 h-4" />}
              />
              <GrowthMetric
                label="Total Users Reached"
                value="50M+"
                change={45}
                icon={<Users className="w-4 h-4" />}
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ── TESTIMONIALS — open layout, no cards ── */}
      <AnimatedSection as="section" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-4 mb-16">
            <div className="w-6 h-px bg-[#00f0ff]" />
            <span className="text-[#00f0ff] text-xs font-medium tracking-widest uppercase">
              Client Testimonials
            </span>
            <div className="flex-1 h-px bg-white/6" />
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/6">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="group relative px-0 md:px-12 py-8 md:py-0 pl-4"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                >
                  {/* Left accent line */}
                  <div className="absolute left-0 top-6 bottom-6 w-[2px] rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top bg-[#00f0ff]" />

                  {/* Large faint quote mark */}
                  <div className="text-6xl text-white/6 font-serif leading-none mb-4 select-none">
                    &ldquo;
                  </div>

                  <p className="text-white/55 text-[15px] leading-relaxed mb-8">
                    {testimonial.content}
                  </p>

                  {/* Author row */}
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover grayscale opacity-60"
                    />
                    <div>
                      <h4 className="text-white text-sm font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-white/30 text-xs">{testimonial.role}</p>
                    </div>
                    <div className="ml-auto">
                      <span className="text-[#00f0ff] text-[10px] tracking-widest uppercase">
                        {testimonial.project}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* ── CTA — original gradient card, unchanged ── */}
      <AnimatedSection as="section" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="relative p-12 md:p-16 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-primary opacity-90" />
              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
                  Ready to Be Our Next Success Story?
                </h2>
                <p className="text-black/70 text-lg mb-8 max-w-xl mx-auto">
                  Let&apos;s discuss how MWX Technologies can help you achieve
                  similar results for your project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href="/contact" className="bg-black text-white hover:bg-black/80">
                    Start Your Project
                  </Button>
                  <Button
                    href="/services"
                    variant="outline"
                    className="border-black/30 text-black hover:bg-black/10"
                  >
                    View Services
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