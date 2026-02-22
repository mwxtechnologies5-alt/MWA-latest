"use client";

import { motion } from "framer-motion";
import { ExternalLink, TrendingUp, Users, DollarSign } from "lucide-react";
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
    description: "Complete marketing campaign for a DeFi protocol launch including PR, and influencer partnerships.",
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
    description: "Full-stack mobile application development for a fintech startup, including iOS, Android, and backend infrastructure.",
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
    description: "Premium e-commerce platform with custom design, payment integration, and inventory management system.",
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
    description: "Global PR campaign for a blockchain gaming platform launch with coverage in major gaming and crypto publications.",
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
    description: "Full-funnel digital marketing strategy for a B2B healthcare software company targeting enterprise clients.",
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
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    content: "MWX Technologies delivered beyond our expectations. Their comprehensive approach to our token launch resulted in incredible community growth.",
    project: "BlockVenture Token Launch",
  },
  {
    name: "Jennifer Liu",
    role: "Founder, TechStart",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    content: "The app they built for us is exceptional. From design to performance, every detail was considered. Our users love it and the numbers speak for themselves.",
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

export default function PortfolioPage() {
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
            className="text-xl text-white/60 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore our track record of delivering exceptional results for
            clients across industries.
          </motion.p>
        </div>
      </ParallaxBackground>

      <AnimatedSection as="section" className="py-32 px-6 relative" id="case-studies">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#ff00aa] text-sm font-medium tracking-widest uppercase mb-4 block">
              Featured Projects
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Results That Speak
              <span className="text-gradient-accent"> For Themselves</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#00f0ff]/30 transition-all h-full"
                  whileHover={{ y: -10 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/30">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00f0ff] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/50 text-sm mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                      {project.results.map((result, i) => (
                        <div key={i} className="text-center">
                          <div className="text-lg font-bold text-gradient">
                            {result.value}
                          </div>
                          <div className="text-[10px] text-white/40 uppercase tracking-wider">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
</StaggerContainer>
          </div>
        </AnimatedSection>

        <AnimatedSection as="section" className="py-32 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <span className="text-[#8b5cf6] text-sm font-medium tracking-widest uppercase mb-4 block">
                Portfolio Analytics
              </span>
              <h2 className="text-4xl md:text-5xl font-bold">
                Data-Driven
                <span className="text-gradient"> Results</span>
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimatedLineChart data={projectGrowthData} title="Avg. Project Growth" color="#8b5cf6" />
              <AnimatedPieChart data={projectDistribution} title="Project Distribution" />
              <div className="flex flex-col gap-4">
                <ComparisonBar label="User Engagement" before={25} after={85} unit="%" />
                <ComparisonBar label="Revenue Growth" before={100} after={350} unit="K" />
              </div>
              <div className="flex flex-col gap-4">
                <GrowthMetric label="Avg. Traffic Boost" value="420%" change={32} icon={<TrendingUp className="w-4 h-4" />} />
                <GrowthMetric label="Total Users Reached" value="50M+" change={45} icon={<Users className="w-4 h-4" />} />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection as="section" className="py-32 px-6 relative bg-[#0d0d14]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#00f0ff] text-sm font-medium tracking-widest uppercase mb-4 block">
              Client Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              What Our Clients
              <span className="text-gradient"> Say</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="p-8 rounded-2xl bg-white/5 border border-white/10 h-full flex flex-col"
                  whileHover={{ y: -5 }}
                >
                  <p className="text-white/60 leading-relaxed flex-grow mb-6">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-white font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-white/40 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="text-[#00f0ff] text-xs">
                      Project: {testimonial.project}
                    </span>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#ff00aa] text-sm font-medium tracking-widest uppercase mb-4 block">
              By The Numbers
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Our Collective
              <span className="text-gradient-accent"> Impact</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, value: "500+", label: "Projects Completed" },
              { icon: Users, value: "200+", label: "Happy Clients" },
              { icon: DollarSign, value: "$100M+", label: "Client Revenue Generated" },
              { icon: ExternalLink, value: "50M+", label: "Total Reach" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <StaggerItem key={index}>
                  <motion.div
                    className="text-center p-8 rounded-2xl bg-white/5 border border-white/10"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                      {stat.value}
                    </div>
                    <div className="text-white/50 text-sm">{stat.label}</div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </AnimatedSection>

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
                  <Button href="/services" variant="outline" className="border-black/30 text-black hover:bg-black/10">
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
