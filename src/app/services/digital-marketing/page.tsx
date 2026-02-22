"use client";

import { TrendingUp } from "lucide-react";
import { ServicePageTemplate } from "@/modules/services/components/ServicePageTemplate";

export default function DigitalMarketingPage() {
  return (
    <ServicePageTemplate
      title="Digital Marketing & Brand Growth"
      subtitle="Growth Marketing"
      description="Data-driven marketing strategies that amplify your brand's digital footprint and deliver measurable ROI across all channels."
      icon={TrendingUp}
      color="#00ff88"
      problem={{
        title: "Why Traditional Marketing Falls Short",
        points: [
          "Wasted ad spend on poorly targeted campaigns",
          "Inability to track real ROI across channels",
          "Content that fails to resonate with target audiences",
          "Competitors outranking you in search results",
          "Low engagement and conversion rates despite high traffic",
        ],
      }}
      solution={{
        title: "Data-Driven Growth Engine",
        description: "Our digital marketing approach combines deep analytics with creative excellence. We don't just drive trafficâ€”we attract qualified leads who convert. Through continuous optimization and A/B testing, we refine campaigns to maximize every dollar of your marketing budget.",
      }}
      features={[
        { title: "Search Engine Optimization", description: "Technical and content SEO to dominate organic search results." },
        { title: "Pay-Per-Click Advertising", description: "High-ROI Google Ads and social media advertising campaigns." },
        { title: "Content Marketing", description: "Strategic content that attracts, engages, and converts your audience." },
        { title: "Conversion Optimization", description: "A/B testing and funnel optimization to maximize conversions." },
        { title: "Marketing Automation", description: "Nurture leads with personalized email sequences and workflows." },
        { title: "Analytics & Reporting", description: "Comprehensive dashboards tracking all key performance metrics." },
      ]}
      tools={["Google Ads", "Meta Ads", "SEMrush", "Ahrefs", "HubSpot", "Mailchimp", "Google Analytics 4", "Hotjar", "Unbounce", "Zapier"]}
      benefits={[
        "Average 300% ROI on ad spend",
        "50% reduction in cost per acquisition",
        "First-page Google rankings within 6 months",
        "2x increase in organic traffic",
        "Transparent reporting and analytics",
        "Scalable campaigns that grow with you",
      ]}
      useCases={[
        { title: "SaaS Growth", description: "User acquisition and activation strategies for software companies." },
        { title: "E-commerce Scale", description: "Multi-channel marketing to drive sales and customer lifetime value." },
        { title: "Lead Generation", description: "B2B marketing funnels that deliver qualified sales opportunities." },
      ]}
    />
  );
}
