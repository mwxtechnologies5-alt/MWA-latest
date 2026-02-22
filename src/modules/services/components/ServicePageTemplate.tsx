"use client";

import { motion } from "framer-motion";
import { LucideIcon, CheckCircle, ArrowRight } from "lucide-react";
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
  problem: {
    title: string;
    points: string[];
  };
  solution: {
    title: string;
    description: string;
  };
  features: {
    title: string;
    description: string;
  }[];
  tools?: string[];
  benefits: string[];
  useCases: {
    title: string;
    description: string;
  }[];
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
  return (
    <div className="relative">
      <ParallaxBackground
        imageUrl={heroImage}
        overlay={!heroImage}
        overlayOpacity={0.85}
        className="min-h-[70vh] flex items-center justify-center bg-gradient-dark"
      >
        <div className="text-center px-6 py-32">
          <motion.div
            className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center"
            style={{ backgroundColor: `${color}20` }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Icon className="w-10 h-10" style={{ color }} />
          </motion.div>
          <motion.span
            className="text-sm font-medium tracking-widest uppercase mb-4 block"
            style={{ color }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {subtitle}
          </motion.span>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-xl text-white/60 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {description}
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button href="/contact">Get Started</Button>
          </motion.div>
        </div>
      </ParallaxBackground>

      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span
                className="text-sm font-medium tracking-widest uppercase mb-4 block"
                style={{ color }}
              >
                The Challenge
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {problem.title}
              </h2>
              <ul className="space-y-4">
                {problem.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${color}20` }}
                    >
                      <span style={{ color }} className="text-sm font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-white/60">{point}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div
                className="p-8 rounded-2xl border"
                style={{
                  backgroundColor: `${color}10`,
                  borderColor: `${color}30`,
                }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {solution.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative bg-[#0d0d14]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span
              className="text-sm font-medium tracking-widest uppercase mb-4 block"
              style={{ color }}
            >
              What We Deliver
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Features & Capabilities
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 h-full"
                  whileHover={{ y: -5, borderColor: `${color}50` }}
                >
                  <h3 className="text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {tools && tools.length > 0 && (
        <section className="py-32 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <span
                className="text-sm font-medium tracking-widest uppercase mb-4 block"
                style={{ color }}
              >
                Technology Stack
              </span>
              <h2 className="text-4xl md:text-5xl font-bold">
                Tools & Platforms
              </h2>
            </AnimatedSection>

            <StaggerContainer className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm"
                    whileHover={{ scale: 1.05, borderColor: `${color}50` }}
                  >
                    {tool}
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      <section className="py-32 px-6 relative bg-[#0d0d14]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span
                className="text-sm font-medium tracking-widest uppercase mb-4 block"
                style={{ color }}
              >
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Benefits & Outcomes
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color }} />
                    <span className="text-white/70">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10"
                    whileHover={{ borderColor: `${color}30` }}
                  >
                    <h3 className="text-lg font-bold text-white mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-white/50 text-sm">{useCase.description}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div
              className="relative p-12 md:p-16 rounded-3xl overflow-hidden bg-gradient-primary"
            >
              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                  Let's discuss how we can help you achieve your goals with our
                  {" "}{title.toLowerCase()} services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href="/contact" className="bg-black text-white hover:bg-black/80">
                    Start Your Project
                  </Button>
                  <Button href="/services" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    View All Services
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
