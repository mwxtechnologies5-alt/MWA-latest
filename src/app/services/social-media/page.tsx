"use client";

import { Share2 } from "lucide-react";
import { ServicePageTemplate } from "@/modules/services/components/ServicePageTemplate";

export default function SocialMediaPage() {
  return (
    <ServicePageTemplate
      title="Social Media Marketing"
      subtitle="Community Building"
      description="Build engaged communities across all social platforms with strategic content and meaningful interactions that drive results."
      icon={Share2}
      color="#ff00aa"
      problem={{
        title: "Social Media Overwhelm",
        points: [
          "Inconsistent posting leading to declining engagement",
          "Content that doesn't resonate with your audience",
          "No clear strategy connecting social to business goals",
          "Difficulty managing multiple platforms effectively",
          "Negative comments and community issues going unaddressed",
        ],
      }}
      solution={{
        title: "Strategic Community Cultivation",
        description: "We transform social media from a time sink into a growth engine. Our approach combines strategic content planning, authentic community engagement, and data-driven optimization to build loyal followings that convert into customers and brand advocates.",
      }}
      features={[
        { title: "Multi-Platform Management", description: "Cohesive presence across Twitter, Instagram, LinkedIn, TikTok, and more." },
        { title: "Content Strategy", description: "Platform-specific content calendars aligned with your goals." },
        { title: "Community Management", description: "Active engagement, comment responses, and DM handling." },
        { title: "Influencer Collaboration", description: "Partnerships with relevant creators to expand reach." },
        { title: "Social Advertising", description: "Targeted paid campaigns to accelerate growth." },
        { title: "Analytics & Reporting", description: "Monthly reports on growth, engagement, and ROI." },
      ]}
      tools={["Buffer", "Hootsuite", "Sprout Social", "Later", "Canva", "Adobe Creative Suite", "Meta Business Suite", "LinkedIn Campaign Manager"]}
      benefits={[
        "3x average increase in engagement rates",
        "Consistent brand voice across all platforms",
        "Rapid follower growth with real, engaged users",
        "24/7 community monitoring",
        "Crisis prevention and management",
        "Direct line to customer feedback",
      ]}
      useCases={[
        { title: "Brand Launch", description: "Build awareness and following for new brands entering the market." },
        { title: "Community Revival", description: "Re-engage dormant social audiences with fresh strategy." },
        { title: "B2B Thought Leadership", description: "Position executives as industry voices on LinkedIn and Twitter." },
      ]}
    />
  );
}
