"use client";

import { Coins } from "lucide-react";
import { ServicePageTemplate } from "@/modules/services/components/ServicePageTemplate";

export default function CoinGeckoListingPage() {
  return (
    <ServicePageTemplate
      title="CoinGecko (CG) Listing"
      subtitle="Crypto Discovery"
      description="Expert CoinGecko listing to reach the platform's massive user base and establish credibility in the crypto space."
      icon={Coins}
      color="#00ff88"
      problem={{
        title: "CoinGecko Challenges",
        points: [
          "Long wait times for listing approval",
          "Incomplete applications causing delays",
          "Low Trust Score affecting investor confidence",
          "Missing from portfolio trackers used by millions",
          "No strategy for improving visibility on the platform",
        ],
      }}
      solution={{
        title: "Unlock CoinGecko's Potential",
        description: "CoinGecko's unique Trust Score and community features make it essential for establishing credibility. Our listing services ensure fast approval, optimized profiles, and strategies to maximize your Trust Scoreâ€”giving investors confidence in your project.",
      }}
      features={[
        { title: "Fast-Track Listing", description: "Expedited applications through our CoinGecko relationships." },
        { title: "Trust Score Optimization", description: "Strategies to improve your project's Trust Score rating." },
        { title: "Profile Enhancement", description: "Rich media, descriptions, and community links." },
        { title: "API Configuration", description: "Technical setup for accurate real-time data." },
        { title: "Candy Rewards Setup", description: "Integration with CoinGecko's reward ecosystem." },
        { title: "Community Features", description: "Leveraging CoinGecko's social and community tools." },
      ]}
      tools={["CoinGecko API", "Trust Score Analytics", "DeFi Protocol Integration", "Social Verification Tools"]}
      benefits={[
        "Average 1-week listing timeline",
        "Trust Score optimization included",
        "Access to CoinGecko's 10M+ monthly users",
        "Portfolio tracking integration",
        "DeFi protocol visibility",
        "NFT collection listing support",
      ]}
      useCases={[
        { title: "DeFi Projects", description: "Essential listing for protocols seeking TVL and user growth." },
        { title: "NFT Collections", description: "Visibility for NFT projects on CoinGecko's dedicated section." },
        { title: "New Launches", description: "Establish presence on the platform alongside CMC listing." },
      ]}
    />
  );
}
