"use client";

import { BarChart3 } from "lucide-react";
import { ServicePageTemplate } from "@/modules/services/components/ServicePageTemplate";

export default function ExchangeListingsPage() {
  return (
    <ServicePageTemplate
      title="Exchange Listings (CEX & DEX)"
      subtitle="Token Liquidity"
      description="Strategic exchange listing services to maximize your token's liquidity and accessibility on major trading platforms."
      icon={BarChart3}
      color="#ff00aa"
      problem={{
        title: "Exchange Listing Challenges",
        points: [
          "Navigating complex application processes alone",
          "High listing fees without guaranteed approval",
          "Lack of connections with exchange decision-makers",
          "Insufficient trading volume post-listing",
          "No market-making strategy to maintain liquidity",
        ],
      }}
      solution={{
        title: "Your Gateway to Global Liquidity",
        description: "Our established relationships with major CEX and DEX platforms streamline the listing process. We handle applications, negotiations, and ongoing market-making support to ensure your token achieves and maintains optimal liquidity across the exchanges that matter.",
      }}
      features={[
        { title: "CEX Listings", description: "Binance, Coinbase, Kraken, KuCoin, and 50+ other exchanges." },
        { title: "DEX Listings", description: "Uniswap, PancakeSwap, SushiSwap, and emerging DEXs." },
        { title: "Application Management", description: "Complete handling of exchange requirements and paperwork." },
        { title: "Market Making", description: "Professional MM services to maintain healthy order books." },
        { title: "Liquidity Provision", description: "Strategic LP deployment across decentralized exchanges." },
        { title: "Post-Listing Support", description: "Ongoing optimization and exchange relations management." },
      ]}
      tools={["Trading APIs", "DeFi Protocols", "Market Making Bots", "Liquidity Analytics", "Order Book Analysis"]}
      benefits={[
        "Connections with 100+ exchanges",
        "90% application success rate",
        "Reduced listing fees through relationships",
        "Ongoing liquidity management",
        "Multi-chain listing support",
        "Regulatory compliance guidance",
      ]}
      useCases={[
        { title: "New Token Launches", description: "First listings to establish market presence and price discovery." },
        { title: "Cross-Chain Expansion", description: "Extend reach by listing on exchanges across multiple blockchains." },
        { title: "Tier Upgrades", description: "Move from smaller to tier-1 exchanges as your project grows." },
      ]}
    />
  );
}
