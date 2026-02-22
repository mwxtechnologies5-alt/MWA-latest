"use client";

import { Hash } from "lucide-react";
import { ServicePageTemplate } from "@/modules/services/components/ServicePageTemplate";

export default function XTrendingPage() {
  return (
    <ServicePageTemplate
      title="X (Twitter) Trending Campaigns"
      subtitle="Social Virality"
      description="Strategic hashtag campaigns designed to dominate Twitter trends and capture massive organic reach for your brand."
      icon={Hash}
      color="#00f0ff"
      problem={{
        title: "Getting Lost in the Noise",
        points: [
          "Tweets getting minimal engagement despite quality content",
          "Difficulty breaking through to trending topics",
          "Competitors capturing conversations you should own",
          "Inconsistent social presence hurting brand visibility",
          "No strategy for capitalizing on viral moments",
        ],
      }}
      solution={{
        title: "Engineered Virality",
        description: "Our trending campaigns combine strategic timing, compelling content, and coordinated community engagement to propel your hashtags to trending status. We don't leave virality to chanceâ€”we engineer it through data-driven strategies and our network of engaged accounts.",
      }}
      features={[
        { title: "Hashtag Strategy", description: "Research-backed hashtag selection for maximum impact." },
        { title: "Content Creation", description: "Viral-worthy content designed to spark engagement." },
        { title: "Community Coordination", description: "Coordinated engagement from authentic, active accounts." },
        { title: "Real-Time Monitoring", description: "Live tracking of hashtag performance and trending status." },
        { title: "Engagement Amplification", description: "Strategic boosting to push campaigns over trending thresholds." },
        { title: "Performance Analytics", description: "Detailed reporting on reach, engagement, and trending metrics." },
      ]}
      tools={["Twitter Analytics", "Sprout Social", "Hootsuite", "Brandwatch", "Tweetdeck", "Crowdfire", "SocialBee"]}
      benefits={[
        "Guaranteed trending placement in target regions",
        "Millions of organic impressions",
        "Explosive follower growth",
        "Increased brand awareness",
        "Social proof for future campaigns",
        "Direct traffic to your platforms",
      ]}
      useCases={[
        { title: "Product Launches", description: "Create massive buzz around new product or service announcements." },
        { title: "Token Launches", description: "Drive awareness and FOMO for cryptocurrency project launches." },
        { title: "Event Promotion", description: "Maximize attendance and engagement for virtual or physical events." },
      ]}
    />
  );
}
