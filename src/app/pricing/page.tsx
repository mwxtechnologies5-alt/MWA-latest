"use client";

import { motion } from "framer-motion";
import { Check, Star, Zap, Crown } from "lucide-react";
import { Button } from "@/shared/ui/Button";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/shared/animations/AnimatedSection";
import { ParallaxBackground } from "@/shared/animations/ParallaxSection";
import {
  AnimatedBarChart,
  ROICalculator,
  AnimatedDonutChart,
} from "@/shared/ui/Charts";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for startups and small projects",
    price: "2,500",
    period: "project",
    icon: Zap,
    color: "#00f0ff",
    popular: false,
    features: [
      "Basic website design (5 pages)",
      "Mobile responsive",
      "Basic SEO setup",
      "1 month support",
      "Social media setup",
      "Basic analytics",
    ],
    notIncluded: [
      "Custom development",
      "Marketing campaigns",
      "PR services",
    ],
  },
  {
    name: "Growth",
    description: "For businesses ready to scale",
    price: "7,500",
    period: "month",
    icon: Star,
    color: "#ff00aa",
    popular: true,
    features: [
      "Everything in Starter",
      "Custom website (unlimited pages)",
      "SEO & content marketing",
      "Social media management",
      "Monthly PR articles (2)",
      "Influencer collaborations (5)",
      "Analytics dashboard",
      "Dedicated account manager",
      "24/7 priority support",
    ],
    notIncluded: [
    ],
  },
  {
    name: "Enterprise",
    description: "Full-stack growth for serious projects",
    price: "25,000",
    period: "month",
    icon: Crown,
    color: "#7b2dff",
    popular: false,
    features: [
      "Everything in Growth",
      "Mobile app development",
      "Unlimited PR coverage",
      "KOL & influencer network",
      "Video production",
      "Community management",
      "Event marketing",
      "Custom integrations",
      "Quarterly strategy sessions",
    ],
    notIncluded: [],
  },
];

const addOns = [
  { name: "Video Production (per video)", price: "From $1,500" },
  { name: "Mobile App Development", price: "From $15,000" },
  { name: "Influencer Campaign (10 KOLs)", price: "From $5,000" },
  { name: "Website Maintenance (monthly)", price: "From $500" },
];

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope. A basic website takes 2-4 weeks, while comprehensive marketing campaigns run 3-6 months. We'll provide detailed timelines during our initial consultation.",
  },
  {
    question: "Do you offer custom packages?",
    answer: "Absolutely! While our standard packages cover most needs, we frequently create custom solutions tailored to specific project requirements. Contact us to discuss your unique needs.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have deep expertise in Web3, blockchain, fintech, SaaS, and technology companies. However, our strategies are adaptable to any industry seeking digital growth.",
  },
  {
    question: "Is there a minimum contract length?",
    answer: "For ongoing services like our Growth and Enterprise plans, we recommend a minimum 3-month commitment to see meaningful results. Project-based work has no minimum.",
  },
];

const valueComparisonData = [
  { label: "Industry Average ROI", value: 150 },
  { label: "MWX Client ROI", value: 350 },
];

export default function PricingPage() {
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
            Pricing
          </motion.span>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transparent Pricing,
            <br />
            <span className="text-gradient">Premium Results</span>
          </motion.h1>
          <motion.p
            className="text-xl text-white/60 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Choose a plan that fits your growth stage, or contact us for a custom solution.
          </motion.p>
        </div>
      </ParallaxBackground>

      <AnimatedSection as="section" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <StaggerItem key={index}>
                  <motion.div
                    className={`relative rounded-2xl p-8 h-full flex flex-col ${
                      plan.popular
                        ? "bg-white/10 border-2"
                        : "bg-white/5 border border-white/10"
                    }`}
                    style={{
                      borderColor: plan.popular ? plan.color : undefined,
                    }}
                    whileHover={{ y: -10 }}
                  >
                    {plan.popular && (
                      <div
                        className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-medium text-black"
                        style={{ backgroundColor: plan.color }}
                      >
                        Most Popular
                      </div>
                    )}

                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${plan.color}20` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: plan.color }} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                        <p className="text-white/40 text-sm">{plan.description}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      <span className="text-white/40">/{plan.period}</span>
                    </div>

                    <ul className="space-y-3 mb-8 flex-grow">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#00ff88] flex-shrink-0 mt-0.5" />
                          <span className="text-white/70 text-sm">{feature}</span>
                        </li>
                      ))}
                      {plan.notIncluded.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 opacity-40">
                          <Check className="w-5 h-5 text-white/30 flex-shrink-0 mt-0.5" />
                          <span className="text-white/30 text-sm line-through">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      href="/contact"
                      variant={plan.popular ? "primary" : "outline"}
                      className="w-full"
                    >
                      Get Started
                    </Button>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="py-32 px-6 relative bg-[#0d0d14]">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#ff00aa] text-sm font-medium tracking-widest uppercase mb-4 block">
              Add-On Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Customize Your
              <span className="text-gradient-accent"> Package</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {addOns.map((addOn, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="flex items-center justify-between p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff00aa]/30 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-white">{addOn.name}</span>
                  <span className="text-[#ff00aa] font-semibold">{addOn.price}</span>
                </motion.div>
              </StaggerItem>
            ))}
</StaggerContainer>

            <AnimatedSection className="mt-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ROICalculator />
                <AnimatedBarChart data={valueComparisonData} title="ROI Comparison (%)" maxValue={400} />
                <div className="flex flex-col gap-4">
                  <AnimatedDonutChart value={350} maxValue={400} title="Avg Client ROI" subtitle="Industry avg: 150%" color="#8b5cf6" />
                  <AnimatedDonutChart value={98} title="Client Retention" subtitle="Year over year" color="#a78bfa" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        <AnimatedSection as="section" className="py-32 px-6 relative">
          <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#00f0ff] text-sm font-medium tracking-widest uppercase mb-4 block">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Frequently Asked
              <span className="text-gradient"> Questions</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="space-y-4">
            {faqs.map((faq, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#00f0ff]/30 transition-colors"
                  whileHover={{ scale: 1.01 }}
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="relative p-12 md:p-16 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-primary" />
              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Need a Custom Quote?
                </h2>
                <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                  Every project is unique. Let&apos;s discuss your specific needs and
                  create a tailored solution.
                </p>
                <Button href="/contact" className="bg-black text-white hover:bg-black/80">
                  Request Custom Quote
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>
    </div>
  );
}
