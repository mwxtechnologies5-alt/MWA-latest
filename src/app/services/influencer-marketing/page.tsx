"use client";

import { Mic } from "lucide-react";
import { ServicePageTemplate } from "@/modules/services/components/ServicePageTemplate";

export default function InfluencerMarketingPage() {
  return (
    <ServicePageTemplate
      title="Influencer & KOL Marketing"
      subtitle="Creator Partnerships"
      description="Connect with top influencers, KOLs, and creators who authentically advocate for your brand to their engaged audiences."
      icon={Mic}
      color="#7b2dff"
      problem={{
        title: "Influencer Marketing Pitfalls",
        points: [
          "Difficulty finding influencers who align with your brand values",
          "Fake followers and inflated engagement metrics",
          "Poor ROI from influencer partnerships",
          "No system for tracking campaign performance",
          "Influencer content that doesn't convert",
        ],
      }}
      solution={{
        title: "Authentic Partnerships, Real Results",
        description: "We've built relationships with thousands of influencers across every niche and platform. Our vetting process ensures authenticity, and our campaign management delivers measurable results. From micro-influencers to celebrity endorsements, we connect you with voices that move your market.",
      }}
      features={[
        { title: "Influencer Discovery", description: "AI-powered matching with creators aligned to your brand." },
        { title: "Vetting & Verification", description: "Thorough authenticity checks on followers and engagement." },
        { title: "Campaign Strategy", description: "Creative briefs and campaign structures that drive results." },
        { title: "Contract Negotiation", description: "Fair deals that work for both brands and creators." },
        { title: "Content Approval", description: "Quality control ensuring brand-safe, effective content." },
        { title: "Performance Tracking", description: "Real-time analytics on reach, engagement, and conversions." },
      ]}
      tools={["AspireIQ", "CreatorIQ", "Upfluence", "Grin", "Traackr", "HypeAuditor", "Social Blade"]}
      benefits={[
        "Access to 10,000+ vetted influencers",
        "Average 5x ROI on influencer spend",
        "Authentic content that resonates",
        "Long-term ambassador relationships",
        "Cross-platform campaign coordination",
        "Full transparency and reporting",
      ]}
      useCases={[
        { title: "Product Launches", description: "Generate buzz through coordinated influencer reveals and reviews." },
        { title: "Crypto & NFT Projects", description: "Tap into crypto-native KOLs with engaged communities." },
        { title: "Consumer Brands", description: "Build awareness through lifestyle influencer partnerships." },
      ]}
    />
  );
}
