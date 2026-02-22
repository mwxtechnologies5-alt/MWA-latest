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
  { label: "Web3/Blockchain", value: 95 },
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
                  that businesses needed more than just servicesÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Âthey needed a
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
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#00f0ff]/10 flex items-center justify-center">
                      <Target className="w-6 h-6 text-[#00f0ff]" />
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

                <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#ff00aa]/10 flex items-center justify-center">
                      <Eye className="w-6 h-6 text-[#ff00aa]" />
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
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <span className="text-[#ff00aa] text-sm font-medium tracking-widest uppercase mb-4 block">
                Our Values
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Principles That
                <br />
                <span className="text-gradient-accent">Guide Us</span>
              </h2>
              <StaggerContainer className="space-y-4">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <StaggerItem key={index}>
                      <motion.div
                        className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
                        whileHover={{ x: 10 }}
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                          <Icon className="w-5 h-5 text-black" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">
                            {value.title}
                          </h4>
                          <p className="text-white/50 text-sm leading-relaxed">
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
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#ff00aa] text-sm font-medium tracking-widest uppercase mb-4 block">
              Why We&apos;re Different
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The MWX Technologies
              <br />
              <span className="text-gradient-accent">Advantage</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((item, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ff00aa]/30 transition-all h-full"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center text-black font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/50 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">50+ Specialists</h3>
                <p className="text-white/50 text-sm">
                  Diverse experts across development, marketing, design, and strategy
                </p>
              </motion.div>

              <motion.div
                className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-accent mx-auto mb-4 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Global Reach</h3>
                <p className="text-white/50 text-sm">
                  Team members across 3 continents serving clients worldwide
                </p>
              </motion.div>

              <motion.div
                className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-16 h-16 rounded-full bg-[#7b2dff] mx-auto mb-4 flex items-center justify-center">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Always Learning</h3>
                <p className="text-white/50 text-sm">
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
