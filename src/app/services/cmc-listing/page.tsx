"use client";

import { Coins } from "lucide-react";
import { ServicePageTemplate } from "@/modules/services/components/ServicePageTemplate";

export default function CMCListingPage() {
  return (
    <ServicePageTemplate
      title="CoinMarketCap (CMC) Listing"
      subtitle="Crypto Visibility"
      description="Professional CMC listing services to enhance your token's visibility among millions of crypto investors worldwide."
      icon={Coins}
      color="#7b2dff"
      problem={{
        title: "CMC Listing Struggles",
        points: [
          "Applications stuck in limbo with no response",
          "Missing requirements causing repeated rejections",
          "Incomplete or inaccurate listing information",
          "No strategy for improving CMC ranking",
          "Difficulty verifying and updating token data",
        ],
      }}
      solution={{
        title: "Your CMC Fast Track",
        description: "CoinMarketCap is the #1 destination for crypto investors researching projects. Our expedited listing services leverage our relationships and expertise to get your token listed quickly and accurately, with optimized profiles that attract investor attention.",
      }}
      features={[
        { title: "Expedited Listing", description: "Fast-track applications through our established relationships." },
        { title: "Profile Optimization", description: "Compelling descriptions, tags, and metadata for discoverability." },
        { title: "Data Verification", description: "Accurate supply, contract, and market data validation." },
        { title: "Self-Reporting Setup", description: "Configure self-reporting for accurate circulating supply." },
        { title: "API Integration", description: "Technical setup for real-time data feeds." },
        { title: "Ongoing Management", description: "Updates, announcements, and profile maintenance." },
      ]}
      tools={["CMC API", "Blockchain Explorers", "Smart Contract Analysis", "Market Data Aggregators"]}
      benefits={[
        "Average 2-week listing timeline",
        "95% application approval rate",
        "Optimized listing for maximum visibility",
        "Watchlist and portfolio tracking enabled",
        "Price alerts for your token",
        "Access to CMC's millions of monthly users",
      ]}
      useCases={[
        { title: "New Token Launches", description: "Establish legitimacy with immediate CMC presence." },
        { title: "Profile Upgrades", description: "Enhance existing listings with rich media and verified data." },
        { title: "Ranking Improvement", description: "Strategies to improve your token's CMC ranking position." },
      ]}
    />
  );
}
