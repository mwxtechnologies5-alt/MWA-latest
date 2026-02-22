"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  TrendingUp,
  Newspaper,
  Share2,
  Mic,
  Video,
  Radio,
  GraduationCap,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/shared/ui/Button";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/shared/animations/AnimatedSection";
import { ParallaxBackground } from "@/shared/animations/ParallaxSection";
import {
  AnimatedLineChart,
  AnimatedDonutChart,
  ComparisonBar,
} from "@/shared/ui/Charts";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Stunning, high-performance websites built with cutting-edge technologies that captivate visitors and convert them into loyal customers.",
    href: "/services/web-design",
    features: ["Custom Design", "Responsive", "SEO Optimized", "Fast Loading"],
    color: "#00f0ff",
  },
  {
    icon: Wrench,
    title: "Website Maintenance & Support",
    description: "Keep your digital presence secure, updated, and performing at peak efficiency with our comprehensive maintenance services.",
    href: "/services/maintenance",
    features: ["24/7 Monitoring", "Security Updates", "Performance Optimization", "Bug Fixes"],
    color: "#7b2dff",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native iOS and Android applications that deliver exceptional user experiences and drive engagement across all mobile platforms.",
    href: "/services/mobile-apps",
    features: ["iOS & Android", "UI/UX Design", "App Store Optimization", "Push Notifications"],
    color: "#ff00aa",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & Brand Growth",
    description: "Data-driven marketing strategies that amplify your brand's digital footprint and deliver measurable ROI across all channels.",
    href: "/services/digital-marketing",
    features: ["SEO & SEM", "Content Strategy", "Analytics", "Conversion Optimization"],
    color: "#00ff88",
  },
  {
    icon: Newspaper,
    title: "PR & News Publishing",
    description: "Global media coverage across 500+ premium news outlets including Yahoo Finance, Bloomberg, and Forbes to establish authority.",
    href: "/services/pr-news",
    features: ["500+ Outlets", "Press Releases", "Media Relations", "Crisis Management"],
    color: "#ffcc00",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build engaged communities across all social platforms with strategic content and meaningful interactions that drive results.",
    href: "/services/social-media",
    features: ["Multi-Platform", "Content Creation", "Community Management", "Analytics"],
    color: "#ff00aa",
  },
  {
    icon: Mic,
    title: "Influencer & KOL Marketing",
    description: "Connect with top influencers, KOLs, and creators who authentically advocate for your brand to their engaged audiences.",
    href: "/services/influencer-marketing",
    features: ["Influencer Matching", "Campaign Management", "ROI Tracking", "Long-term Partnerships"],
    color: "#7b2dff",
  },
  {
    icon: Video,
    title: "Video Production & Motion Graphics",
    description: "Professional spokesperson videos, explainers, and motion graphics that tell your brand story with cinematic quality.",
    href: "/services/video-production",
    features: ["Spokesperson Videos", "Motion Graphics", "Explainer Videos", "Brand Films"],
    color: "#00ff88",
  },
  {
    icon: Radio,
    title: "Podcast Production",
    description: "Full-service podcast creation from concept to distribution, plus professional brand shoots that capture your essence.",
    href: "/services/podcast",
    features: ["Production", "Editing", "Distribution", "Guest Booking"],
    color: "#ffcc00",
  },
  {
    icon: GraduationCap,
    title: "College & Community Events",
    description: "Impactful college tours and community events that create lasting impressions and build grassroots brand awareness.",
    href: "/services/events",
    features: ["Event Planning", "Campus Tours", "Community Outreach", "Brand Activation"],
    color: "#00f0ff",
  },
];

const serviceGrowthData = [
  { label: "Q1", value: 45 },
  { label: "Q2", value: 62 },
  { label: "Q3", value: 78 },
  { label: "Q4", value: 95 },
];

export default function ServicesPage() {
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
            Our Services
          </motion.span>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Full-Stack Digital
            <br />
            <span className="text-gradient">Growth Solutions</span>
          </motion.h1>
          <motion.p
            className="text-xl text-white/60 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From concept to execution, we deliver comprehensive services designed
            to accelerate your brand&apos;s journey to market dominance.
          </motion.p>
        </div>
      </ParallaxBackground>

      <AnimatedSection as="section" className="py-32 px-6 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#00f0ff]/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#ff00aa]/5 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to
              <span className="text-gradient"> Succeed</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              We offer a comprehensive suite of services tailored to meet the
              unique needs of startups, enterprises, and Web3 projects.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <StaggerItem key={index}>
                  <Link href={service.href}>
                    <motion.div
                      className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 h-full overflow-hidden"
                      whileHover={{ y: -5 }}
                    >
                      <div
                        className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                        style={{ backgroundColor: service.color }}
                      />

                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-6">
                          <div
                            className="w-14 h-14 rounded-xl flex items-center justify-center"
                            style={{ backgroundColor: `${service.color}20` }}
                          >
                            <Icon
                              className="w-7 h-7"
                              style={{ color: service.color }}
                            />
                          </div>
                          <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-white/70 group-hover:translate-x-1 transition-all" />
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
                          {service.title}
                        </h3>
                        <p className="text-white/50 text-sm leading-relaxed mb-6">
                          {service.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 rounded-full text-xs bg-white/5 text-white/50 border border-white/10"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="py-32 px-6 relative bg-[#0d0d14]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#ff00aa] text-sm font-medium tracking-widest uppercase mb-4 block">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How We Deliver
              <br />
              <span className="text-gradient-accent">Excellence</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "We dive deep into understanding your goals, audience, and market position." },
              { step: "02", title: "Strategy", desc: "Crafting a customized roadmap aligned with your objectives and budget." },
              { step: "03", title: "Execution", desc: "Our specialists bring the strategy to life with precision and creativity." },
              { step: "04", title: "Optimization", desc: "Continuous monitoring and refinement to maximize your results." },
            ].map((item, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="relative p-6 rounded-2xl bg-white/5 border border-white/10 text-center h-full"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-5xl font-bold text-gradient mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
</StaggerContainer>

            <AnimatedSection className="mt-16">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <AnimatedLineChart data={serviceGrowthData} title="Service Delivery Growth" color="#8b5cf6" />
                <AnimatedDonutChart value={95} title="Success Rate" color="#8b5cf6" />
                <ComparisonBar label="Project Completion" before={65} after={95} unit="%" />
                <ComparisonBar label="Client Satisfaction" before={72} after={98} unit="%" />
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
                  Ready to Get Started?
                </h2>
                <p className="text-black/70 text-lg mb-8 max-w-xl mx-auto">
                  Let&apos;s discuss how our services can help you achieve your goals.
                  Book a free consultation today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href="/contact" className="bg-black text-white hover:bg-black/80">
                    Start Your Project
                  </Button>
                  <Button href="/pricing" variant="outline" className="border-black/30 text-black hover:bg-black/10">
                    View Pricing
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
