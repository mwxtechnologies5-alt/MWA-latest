"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  Award,
  Globe,
  Users,
  Rocket,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/shared/ui/Button";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
  CountUp,
} from "@/shared/animations/AnimatedSection";
import { ParallaxBackground } from "@/shared/animations/ParallaxSection";
import {
  AnimatedRadarChart,
  AnimatedBarChart,
  AnimatedPieChart,
  ComparisonBar,
} from "@/shared/ui/Charts";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay ahead of the curve, embracing new technologies and methodologies to deliver cutting-edge solutions.",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Your success is our success. We build lasting partnerships based on trust, transparency, and mutual growth.",
  },
  {
    icon: Award,
    title: "Excellence Always",
    description: "We never settle for mediocrity. Every project receives our full commitment to quality and perfection.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "With clients across 40+ countries, we bring international expertise and diverse insights to every project.",
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Team Members" },
  { value: 40, suffix: "+", label: "Countries Served" },
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 24, suffix: "/7", label: "Support Available" },
];

const expertise = [
  "Web3 & Blockchain Marketing",
  "Enterprise Digital Transformation",
  "Startup Growth Hacking",
  "Global PR & Media Relations",
  "Social Media Domination",
  "Influencer & KOL Networks",
  "Content & Creative Production",
  "Exchange & Token Listings",
];

const differentiators = [
  {
    title: "Results-Driven Approach",
    description: "Every strategy is backed by data and designed to deliver measurable outcomes that impact your bottom line.",
  },
  {
    title: "Integrated Solutions",
    description: "From development to marketing, we offer end-to-end services under one roof, ensuring seamless execution.",
  },
  {
    title: "Industry Expertise",
    description: "Deep specialization in Web3, fintech, and emerging technologies gives us an edge in cutting-edge sectors.",
  },
  {
    title: "Agile & Adaptive",
    description: "We pivot quickly, adapting strategies in real-time to capitalize on opportunities and mitigate challenges.",
  },
];

const expertiseRadarData = [
  { label: "Web Dev", value: 95 },
  { label: "Marketing", value: 90 },
  { label: "PR", value: 85 },
  { label: "Web3", value: 92 },
  { label: "Mobile", value: 88 },
  { label: "Design", value: 87 },
];

const teamGrowthData = [
  { label: "Development", value: 40, color: "#8b5cf6" },
  { label: "Marketing", value: 30, color: "#a78bfa" },
  { label: "Design", value: 15, color: "#7c3aed" },
  { label: "Strategy", value: 15, color: "#c4b5fd" },
];

const industryExpertise = [
  { label: "Web3/Blockchain", value: 60 },
  { label: "Fintech", value: 88 },
  { label: "SaaS", value: 85 },
  { label: "E-commerce", value: 82 },
];

export default function AboutPage() {
  return (
    <div className="relative">
      <ParallaxBackground
        overlay={false}
        className="min-h-[70vh] flex items-center justify-center bg-gradient-dark"
      >
        <div className="text-center px-6 py-32">
          <motion.span
            className="text-[#00f0ff] text-sm font-medium tracking-widest uppercase mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.span>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We Are
            <br />
            <span className="text-gradient">MWX Technologies</span>
          </motion.h1>
          <motion.p
            className="text-xl text-white/60 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A premier digital agency transforming brands through innovative
            technology and strategic marketing excellence.
          </motion.p>
        </div>
      </ParallaxBackground>

      <AnimatedSection as="section" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fadeLeft">
              <span className="text-[#00f0ff] text-sm font-medium tracking-widest uppercase mb-4 block">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Building the Future of
                <br />
                <span className="text-gradient">Digital Excellence</span>
              </h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between cutting-edge
                  technology and strategic marketing, MWX Technologies has grown
                  into a global powerhouse serving clients across 40+ countries.
                </p>
                <p>
                  Our journey began when a team of digital pioneers recognized
                  that businesses needed more than just services needed a
                  partner who could understand their vision and transform it into
                  digital reality.
                </p>
                <p>
                  Today, we stand as a full-stack digital agency, combining
                  world-class development, innovative marketing strategies, and
                  unparalleled industry expertise to help brands dominate their
                  markets.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeRight" delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-3xl" />
                <div className="relative grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
                      whileHover={{ scale: 1.05, borderColor: "rgba(0,240,255,0.3)" }}
                    >
                      <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                        <CountUp end={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-white/50 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
</div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.3} className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <AnimatedRadarChart data={expertiseRadarData} title="Our Expertise" color="#8b5cf6" />
                <AnimatedPieChart data={teamGrowthData} title="Team Distribution" />
                <AnimatedBarChart data={industryExpertise} title="Industry Expertise" />
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        <AnimatedSection as="section" className="py-32 px-6 relative bg-[#0d0d14]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7b2dff]/10 rounded-full blur-[150px]" />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <AnimatedSection>
  <div className="space-y-8">

    {/* Mission Card */}
    <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
      {/* 3D Geometric background illustration — icosphere/geodesic */}
      <div className="absolute -right-6 -top-6 w-48 h-48 opacity-20 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer circle */}
          <circle cx="100" cy="100" r="80" stroke="#00f0ff" strokeWidth="0.5" strokeDasharray="4 3" />
          <circle cx="100" cy="100" r="60" stroke="#00f0ff" strokeWidth="0.4" opacity="0.6" />
          {/* Geodesic triangles */}
          <polygon points="100,20 168,60 168,140" stroke="#00f0ff" strokeWidth="0.6" fill="#00f0ff" fillOpacity="0.04" />
          <polygon points="100,20 32,60 100,100" stroke="#00f0ff" strokeWidth="0.6" fill="#00f0ff" fillOpacity="0.06" />
          <polygon points="168,60 168,140 100,100" stroke="#00f0ff" strokeWidth="0.6" fill="#00f0ff" fillOpacity="0.03" />
          <polygon points="32,60 100,100 32,140" stroke="#00f0ff" strokeWidth="0.6" fill="#00f0ff" fillOpacity="0.05" />
          <polygon points="100,180 32,140 168,140" stroke="#00f0ff" strokeWidth="0.6" fill="#00f0ff" fillOpacity="0.04" />
          <polygon points="100,20 168,60 100,100" stroke="#00f0ff" strokeWidth="0.5" fill="#00f0ff" fillOpacity="0.07" />
          <polygon points="100,100 168,140 100,180" stroke="#00f0ff" strokeWidth="0.5" fill="#00f0ff" fillOpacity="0.05" />
          <polygon points="100,100 32,140 100,180" stroke="#00f0ff" strokeWidth="0.5" fill="#00f0ff" fillOpacity="0.06" />
          {/* Inner cross lines */}
          <line x1="100" y1="20" x2="100" y2="180" stroke="#00f0ff" strokeWidth="0.3" opacity="0.4" />
          <line x1="20" y1="100" x2="180" y2="100" stroke="#00f0ff" strokeWidth="0.3" opacity="0.4" />
          <line x1="32" y1="60" x2="168" y2="140" stroke="#00f0ff" strokeWidth="0.3" opacity="0.3" />
          <line x1="168" y1="60" x2="32" y2="140" stroke="#00f0ff" strokeWidth="0.3" opacity="0.3" />
          {/* Vertex dots */}
          {[[100,20],[168,60],[168,140],[100,180],[32,140],[32,60],[100,100]].map(([x,y], i) => (
            <circle key={i} cx={x} cy={y} r="2.5" fill="#00f0ff" opacity="0.7" />
          ))}
        </svg>
      </div>
      {/* Glow */}
      <div className="absolute -right-4 -top-4 w-40 h-40 bg-[#00f0ff]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/20 flex items-center justify-center">
            {/* Mini 3D target SVG replacing icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="#00f0ff" strokeWidth="1" opacity="0.4" />
              <circle cx="12" cy="12" r="6" stroke="#00f0ff" strokeWidth="1" opacity="0.6" />
              <circle cx="12" cy="12" r="3" stroke="#00f0ff" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="1.5" fill="#00f0ff" />
              <line x1="12" y1="3" x2="12" y2="6" stroke="#00f0ff" strokeWidth="1" strokeLinecap="round" />
              <line x1="12" y1="18" x2="12" y2="21" stroke="#00f0ff" strokeWidth="1" strokeLinecap="round" />
              <line x1="3" y1="12" x2="6" y2="12" stroke="#00f0ff" strokeWidth="1" strokeLinecap="round" />
              <line x1="18" y1="12" x2="21" y2="12" stroke="#00f0ff" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white">Our Mission</h3>
        </div>
        <p className="text-white/60 leading-relaxed">
          To empower businesses worldwide with transformative digital
          solutions that drive measurable growth, establish market
          leadership, and create lasting impact in an ever-evolving
          digital landscape.
        </p>
      </div>
    </div>

    {/* Vision Card */}
    <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
      {/* 3D Geometric background illustration — torus/helix rings */}
      <div className="absolute -right-6 -top-6 w-48 h-48 opacity-20 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer ellipse rings simulating torus */}
          <ellipse cx="100" cy="100" rx="80" ry="30" stroke="#ff00aa" strokeWidth="0.6" />
          <ellipse cx="100" cy="100" rx="80" ry="50" stroke="#ff00aa" strokeWidth="0.4" opacity="0.5" />
          <ellipse cx="100" cy="100" rx="80" ry="70" stroke="#ff00aa" strokeWidth="0.3" opacity="0.3" />
          {/* Vertical ellipses */}
          <ellipse cx="100" cy="100" rx="30" ry="80" stroke="#ff00aa" strokeWidth="0.6" />
          <ellipse cx="100" cy="100" rx="50" ry="80" stroke="#ff00aa" strokeWidth="0.4" opacity="0.5" />
          {/* Diagonal cross lines */}
          <line x1="20" y1="100" x2="180" y2="100" stroke="#ff00aa" strokeWidth="0.3" opacity="0.4" />
          <line x1="100" y1="20" x2="100" y2="180" stroke="#ff00aa" strokeWidth="0.3" opacity="0.4" />
          {/* Intersection highlight dots */}
          {[
            [100,20],[180,100],[100,180],[20,100],
            [100,70],[100,130],[70,100],[130,100],
            [155,65],[155,135],[45,65],[45,135],
          ].map(([x,y], i) => (
            <circle key={i} cx={x} cy={y} r={i < 4 ? 2.5 : 1.5} fill="#ff00aa" opacity={i < 4 ? 0.8 : 0.5} />
          ))}
          {/* Center filled circle */}
          <circle cx="100" cy="100" r="6" fill="#ff00aa" fillOpacity="0.15" stroke="#ff00aa" strokeWidth="1" />
          <circle cx="100" cy="100" r="2" fill="#ff00aa" opacity="0.9" />
        </svg>
      </div>
      {/* Glow */}
      <div className="absolute -right-4 -top-4 w-40 h-40 bg-[#ff00aa]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#ff00aa]/10 border border-[#ff00aa]/20 flex items-center justify-center">
            {/* Mini 3D eye/lens SVG replacing icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <ellipse cx="12" cy="12" rx="10" ry="5" stroke="#ff00aa" strokeWidth="1" opacity="0.5" />
              <ellipse cx="12" cy="12" rx="7" ry="4" stroke="#ff00aa" strokeWidth="1" opacity="0.7" />
              <circle cx="12" cy="12" r="3" stroke="#ff00aa" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="1.5" fill="#ff00aa" />
              <circle cx="13.2" cy="10.8" r="0.6" fill="white" opacity="0.8" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white">Our Vision</h3>
        </div>
        <p className="text-white/60 leading-relaxed">
          To be the world&apos;s most trusted digital growth partner,
          recognized for our innovation, integrity, and unwavering
          commitment to client success across every industry and market.
        </p>
      </div>
    </div>

  </div>
</AnimatedSection>


<AnimatedSection delay={0.2}>
  <span className="text-[#ff00aa] text-sm font-medium tracking-widest uppercase mb-4 block">
    Our Values
  </span>
  <h2 className="text-4xl md:text-5xl font-bold mb-10">
    Principles That
    <br />
    <span className="text-gradient-accent">Guide Us</span>
  </h2>

  <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0">
    {values.map((value, index) => {
      const isEven = index % 2 === 0;
      const accentColor = isEven ? "#7c3aed" : "#ff00aa";

      return (
        <StaggerItem key={index}>
          <motion.div
            className="group relative flex gap-4 py-6 border-b border-white/6 cursor-default pl-4"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            {/* Animated left border on hover */}
            <div
              className="absolute left-0 top-4 bottom-4 w-[2px] rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"
              style={{ background: accentColor }}
            />

            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                <h4 className="text-white font-semibold text-[15px]">
                  {value.title}
                </h4>
                <div
                  className="w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: accentColor }}
                />
              </div>
              <p className="text-white/45 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          </motion.div>
        </StaggerItem>
      );
    })}
  </StaggerContainer>
</AnimatedSection>


          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#00f0ff] text-sm font-medium tracking-widest uppercase mb-4 block">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Specialized in What
              <br />
              <span className="text-gradient">Matters Most</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {expertise.map((item, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00f0ff]/30 transition-all text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <CheckCircle className="w-6 h-6 text-[#00f0ff] mx-auto mb-3" />
                  <span className="text-white text-sm font-medium">{item}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

 <AnimatedSection as="section" className="py-32 px-6 relative bg-[#0d0d14]">
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff00aa]/10 rounded-full blur-[150px]" />
  </div>

  <div className="max-w-7xl mx-auto relative">
    <AnimatedSection className="text-center mb-20">
      <span className="text-[#ff00aa] text-sm font-medium tracking-widest uppercase mb-4 block">
        Why We&apos;re Different
      </span>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        The MWX Technologies
        <br />
        <span className="text-gradient-accent">Advantage</span>
      </h2>
    </AnimatedSection>

    <StaggerContainer className="max-w-5xl mx-auto">
      {differentiators.map((item, index) => {
        const illustrations = [
          // Card 1 — Results-Driven: 3D Bar chart
          <svg viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {[0,1,2,3,4].map(i => (
              <line key={i} x1={30 + i*40} y1="20" x2={10 + i*40} y2="160" stroke="#ff00aa" strokeWidth="0.4" opacity="0.3" />
            ))}
            {[0,1,2,3].map(i => (
              <line key={i} x1="30" y1={20 + i*47} x2="190" y2={20 + i*47} stroke="#ff00aa" strokeWidth="0.4" opacity="0.2" />
            ))}
            {[
              { x: 40, h: 80, op: 0.9 },
              { x: 80, h: 110, op: 0.85 },
              { x: 120, h: 60, op: 0.8 },
              { x: 160, h: 130, op: 0.9 },
            ].map((bar, i) => (
              <g key={i}>
                <rect x={bar.x} y={160 - bar.h} width="22" height={bar.h}
                  fill="#ff00aa" fillOpacity="0.08" stroke="#ff00aa" strokeWidth="0.6" opacity={bar.op} />
                <polygon
                  points={`${bar.x},${160 - bar.h} ${bar.x + 22},${160 - bar.h} ${bar.x + 30},${160 - bar.h - 8} ${bar.x + 8},${160 - bar.h - 8}`}
                  fill="#ff00aa" fillOpacity="0.15" stroke="#ff00aa" strokeWidth="0.5" opacity={bar.op} />
                <polygon
                  points={`${bar.x + 22},${160 - bar.h} ${bar.x + 30},${160 - bar.h - 8} ${bar.x + 30},${152 - 8} ${bar.x + 22},${160}`}
                  fill="#ff00aa" fillOpacity="0.05" stroke="#ff00aa" strokeWidth="0.4" opacity={bar.op * 0.7} />
              </g>
            ))}
            <polyline points="51,80 91,50 131,100 171,30"
              stroke="#ff00aa" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.6" fill="none" />
            {[[51,80],[91,50],[131,100],[171,30]].map(([x,y],i) => (
              <circle key={i} cx={x} cy={y} r="2.5" fill="#ff00aa" opacity="0.8" />
            ))}
          </svg>,

          // Card 2 — Integrated: Node network
          <svg viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {[
              [110,90,40,40],[110,90,180,40],[110,90,170,150],
              [110,90,50,150],[40,40,180,40],[180,40,170,150],
              [170,150,50,150],[50,150,40,40],[110,90,110,20],
              [40,40,110,20],[180,40,110,20],
            ].map(([x1,y1,x2,y2],i) => (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#7c3aed" strokeWidth="0.6" opacity="0.4" />
            ))}
            <polygon points="110,20 180,40 200,120 170,150 50,150 20,120 40,40"
              stroke="#7c3aed" strokeWidth="0.5" fill="none" opacity="0.25" />
            {[
              [110,90,4,0.9],[40,40,3,0.8],[180,40,3,0.8],
              [170,150,3,0.8],[50,150,3,0.8],[110,20,2.5,0.7],
              [200,120,2,0.6],[20,120,2,0.6],
            ].map(([x,y,r,op],i) => (
              <g key={i}>
                <circle cx={x} cy={y} r={(r as number)+4} fill="#7c3aed" fillOpacity="0.08" />
                <circle cx={x} cy={y} r={r as number} fill="#a78bfa" opacity={op as number} />
              </g>
            ))}
            <circle cx="110" cy="90" r="12" stroke="#7c3aed" strokeWidth="0.6" fill="none" opacity="0.5" />
            <circle cx="110" cy="90" r="20" stroke="#7c3aed" strokeWidth="0.4" strokeDasharray="3 2" fill="none" opacity="0.3" />
          </svg>,

          // Card 3 — Honeycomb
          <svg viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {[
              [110,90],[72,68],[148,68],[72,112],[148,112],
              [110,46],[34,68],[186,68],[34,112],[186,112],[110,134],
              [72,24],[148,24],[110,158],
            ].map(([cx,cy],i) => {
              const r = 22;
              const pts = [0,1,2,3,4,5].map(k => {
                const a = (Math.PI / 180) * (60 * k - 30);
                return `${(cx as number) + r * Math.cos(a)},${(cy as number) + r * Math.sin(a)}`;
              }).join(" ");
              const isCenter = i === 0;
              return (
                <polygon key={i} points={pts}
                  fill={isCenter ? "#00f0ff" : "none"}
                  fillOpacity={isCenter ? 0.06 : 0}
                  stroke="#00f0ff"
                  strokeWidth={isCenter ? "0.8" : "0.4"}
                  opacity={isCenter ? 0.8 : 0.3} />
              );
            })}
            <circle cx="110" cy="90" r="3" fill="#00f0ff" opacity="0.9" />
            <circle cx="110" cy="90" r="7" stroke="#00f0ff" strokeWidth="0.5" fill="none" opacity="0.5" />
          </svg>,

          // Card 4 — Helix
          <svg viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {Array.from({ length: 20 }).map((_, i) => {
              const t = i / 19;
              const x = 40 + t * 140;
              const y1 = 90 + Math.sin(t * Math.PI * 3) * 55;
              const y2 = 90 - Math.sin(t * Math.PI * 3) * 55;
              const op = 0.3 + t * 0.5;
              return (
                <g key={i}>
                  {i < 19 && (() => {
                    const t2 = (i+1)/19;
                    const x2 = 40 + t2 * 140;
                    const ny1 = 90 + Math.sin(t2 * Math.PI * 3) * 55;
                    const ny2 = 90 - Math.sin(t2 * Math.PI * 3) * 55;
                    return (
                      <>
                        <line x1={x} y1={y1} x2={x2} y2={ny1} stroke="#ff00aa" strokeWidth="1" opacity={op} />
                        <line x1={x} y1={y2} x2={x2} y2={ny2} stroke="#7c3aed" strokeWidth="1" opacity={op} />
                      </>
                    );
                  })()}
                  {i % 3 === 0 && (
                    <line x1={x} y1={y1} x2={x} y2={y2} stroke="#a78bfa" strokeWidth="0.5" opacity={op * 0.6} />
                  )}
                </g>
              );
            })}
            <circle cx="40" cy="90" r="3" fill="#ff00aa" opacity="0.8" />
            <circle cx="180" cy="90" r="3" fill="#7c3aed" opacity="0.8" />
          </svg>,
        ];

        const accentColor = index % 2 === 0 ? "#ff00aa" : "#7c3aed";
        const isLast = index === differentiators.length - 1;

        return (
          <StaggerItem key={index}>
            <motion.div
              className="relative group"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className={`flex items-start gap-8 py-10 ${!isLast ? "border-b border-white/8" : ""}`}>

                {/* Large index number */}
                <div className="hidden sm:block shrink-0 w-16 text-right">
                  <span
                    className="text-5xl font-bold leading-none select-none"
                    style={{ color: accentColor, opacity: 0.18 }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Vertical accent line */}
                <div
                  className="hidden sm:block shrink-0 w-px self-stretch"
                  style={{ background: `linear-gradient(to bottom, transparent, ${accentColor}50, transparent)` }}
                />

                {/* Text content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-3">
                    {/* Mobile index */}
                    <span
                      className="sm:hidden text-xs font-bold tracking-widest"
                      style={{ color: accentColor }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-white/90 transition-colors">
                      {item.title}
                    </h3>
                    {/* Animated arrow on hover */}
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -4 }}
                      whileHover={{ x: 0 }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                  </div>
                  <p className="text-white/50 leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </div>

                {/* SVG illustration — right side */}
                <div className="hidden lg:block shrink-0 w-32 h-24 opacity-25 group-hover:opacity-40 transition-opacity duration-300">
                  {illustrations[index]}
                </div>

              </div>

              {/* Hover left glow line */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(to bottom, transparent, ${accentColor}, transparent)` }}
              />
            </motion.div>
          </StaggerItem>
        );
      })}
    </StaggerContainer>
  </div>
</AnimatedSection>
      <AnimatedSection as="section" className="py-32 px-6 relative" id="team">
  <div className="max-w-7xl mx-auto">
    <AnimatedSection className="text-center mb-16">
      <span className="text-[#00f0ff] text-sm font-medium tracking-widest uppercase mb-4 block">
        Leadership Mindset
      </span>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        Driven by Passion,
        <br />
        <span className="text-gradient">Powered by Expertise</span>
      </h2>
      <p className="text-white/50 text-lg max-w-2xl mx-auto">
        Our team comprises industry veterans, creative visionaries, and
        technical experts united by a shared commitment to excellence.
      </p>
    </AnimatedSection>

    <AnimatedSection delay={0.2}>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">

    {/* Item 1 — 50+ Specialists */}
    <motion.div
      className="relative group text-center"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <div className="relative w-full h-44 mb-7">
        <svg viewBox="0 0 200 100" fill="none" className="w-full h-full">
          {[20, 50, 80, 110, 140, 170].map((x, i) => (
            <motion.line
              key={i}
              x1={x} y1="10" x2="100" y2="72"
              stroke="#a78bfa" strokeWidth="0.8" strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.6, 0.3] }}
              transition={{ duration: 1.5, delay: i * 0.15, repeat: Infinity, repeatDelay: 2 }}
            />
          ))}
          {[20, 50, 80, 110, 140, 170].map((x, i) => (
            <motion.circle
              key={i}
              cx={x} cy="10" r="3" fill="#a78bfa"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0.4], scale: [0, 1, 0.8] }}
              transition={{ duration: 1.5, delay: i * 0.15, repeat: Infinity, repeatDelay: 2 }}
            />
          ))}
          <motion.circle
            cx="100" cy="72" r="6"
            fill="none" stroke="#a78bfa" strokeWidth="1.2"
            animate={{ opacity: [0.4, 1, 0.4], r: [5, 7, 5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <circle cx="100" cy="72" r="2.5" fill="#a78bfa" opacity="0.9" />
          <motion.circle
            cx="100" cy="72" r="12"
            fill="none" stroke="#a78bfa" strokeWidth="0.5"
            animate={{ r: [10, 18], opacity: [0.5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-10 bg-[#8b5cf6]/15 rounded-full blur-xl pointer-events-none" />
      </div>

      <div className="w-10 h-px bg-[#a78bfa]/40 mb-5 mx-auto group-hover:w-20 transition-all duration-300" />
      <h3 className="text-2xl font-bold text-white mb-3">50+ Specialists</h3>
      <p className="text-white/45 text-base leading-relaxed">
        Diverse experts across development, marketing, design, and strategy
      </p>
    </motion.div>

    {/* Item 2 — Global Reach */}
    <motion.div
      className="relative group text-center"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <div className="relative w-full h-44 mb-7">
        <svg viewBox="0 0 200 100" fill="none" className="w-full h-full">
          <line x1="10" y1="50" x2="190" y2="50" stroke="#38bdf8" strokeWidth="0.4" opacity="0.2" />
          {[14, 26, 40, 56].map((r, i) => (
            <motion.circle
              key={i}
              cx="100" cy="50" r={r}
              fill="none" stroke="#38bdf8" strokeWidth="0.7"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: [0, 0.6, 0], scale: [0.6, 1, 1.1] }}
              transition={{ duration: 2.4, delay: i * 0.35, repeat: Infinity, ease: "easeOut" }}
            />
          ))}
          <circle cx="100" cy="50" r="3" fill="#38bdf8" opacity="0.9" />
          <motion.circle
            cx="100" cy="50" r="6"
            fill="none" stroke="#38bdf8" strokeWidth="1"
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
          {[[18,50],[182,50],[100,12],[100,88]].map(([x,y], i) => (
            <motion.circle
              key={i} cx={x} cy={y} r="2" fill="#38bdf8"
              animate={{ opacity: [0.2, 0.9, 0.2] }}
              transition={{ duration: 2.4, delay: i * 0.3, repeat: Infinity }}
            />
          ))}
          {[[18,50],[182,50],[100,12],[100,88]].map(([x,y], i) => (
            <motion.line
              key={i} x1="100" y1="50" x2={x} y2={y}
              stroke="#38bdf8" strokeWidth="0.4" strokeDasharray="3 4"
              animate={{ opacity: [0, 0.35, 0] }}
              transition={{ duration: 2.4, delay: i * 0.3 + 0.6, repeat: Infinity }}
            />
          ))}
        </svg>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-10 bg-[#0ea5e9]/15 rounded-full blur-xl pointer-events-none" />
      </div>

      <div className="w-10 h-px bg-[#38bdf8]/40 mb-5 mx-auto group-hover:w-20 transition-all duration-300" />
      <h3 className="text-2xl font-bold text-white mb-3">Global Reach</h3>
      <p className="text-white/45 text-base leading-relaxed">
        Team members across 3 continents serving clients worldwide
      </p>
    </motion.div>

    {/* Item 3 — Always Learning */}
    <motion.div
      className="relative group text-center"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <div className="relative w-full h-44 mb-7">
        <svg viewBox="0 0 200 100" fill="none" className="w-full h-full">
          {[25, 50, 75].map((y, i) => (
            <line key={i} x1="20" y1={y} x2="180" y2={y}
              stroke="#c4b5fd" strokeWidth="0.3" opacity="0.15" />
          ))}
          {[50, 90, 130, 170].map((x, i) => (
            <line key={i} x1={x} y1="10" x2={x} y2="90"
              stroke="#c4b5fd" strokeWidth="0.3" opacity="0.1" />
          ))}
          <motion.polyline
            points="20,80 55,65 90,50 125,32 160,18 180,10"
            fill="none" stroke="#c4b5fd" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M20,80 55,65 90,50 125,32 160,18 180,10 180,90 20,90 Z"
            fill="#a78bfa" fillOpacity="0.04"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5 }}
          />
          {[[20,80],[55,65],[90,50],[125,32],[160,18],[180,10]].map(([x,y], i) => (
            <motion.circle
              key={i} cx={x} cy={y} r="2.5" fill="#c4b5fd"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: (i / 5) * 2, repeat: Infinity, repeatDelay: 1.5 }}
            />
          ))}
          <motion.circle
            cx="0" cy="0" r="4" fill="#c4b5fd" opacity="0.8"
            animate={{
              cx: [20, 55, 90, 125, 160, 180],
              cy: [80, 65, 50, 32, 18, 10],
              opacity: [0, 1, 1, 1, 1, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
          />
        </svg>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-10 bg-[#7b2dff]/15 rounded-full blur-xl pointer-events-none" />
      </div>

      <div className="w-10 h-px bg-[#c4b5fd]/40 mb-5 mx-auto group-hover:w-20 transition-all duration-300" />
      <h3 className="text-2xl font-bold text-white mb-3">Always Learning</h3>
      <p className="text-white/45 text-base leading-relaxed">
        Continuous education and certification in emerging technologies
      </p>
    </motion.div>

  </div>
</AnimatedSection>
    
  </div>
</AnimatedSection>

      <AnimatedSection as="section" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="relative p-12 md:p-16 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-primary opacity-90" />
              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
                  Ready to Work With Us?
                </h2>
                <p className="text-black/70 text-lg mb-8 max-w-xl mx-auto">
                  Join the hundreds of brands that trust MWX Technologies for
                  their digital growth journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href="/contact" className="bg-black text-white hover:bg-black/80">
                    Get In Touch
                  </Button>
                  <Button href="/services" variant="outline" className="border-black/30 text-black hover:bg-black/10">
                    Our Services
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
