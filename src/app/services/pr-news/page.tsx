"use client";

import { Newspaper } from "lucide-react";
import { ServicePageTemplate } from "@/modules/services/components/ServicePageTemplate";

export default function PRNewsPage() {
  return (
    <ServicePageTemplate
      title="PR & News Publishing"
      subtitle="Global Media"
      description="Global media coverage across 500+ premium news outlets to establish authority, build trust, and amplify your brand's message worldwide."
      icon={Newspaper}
      color="#ffcc00"
      problem={{
        title: "The Credibility Challenge",
        points: [
          "Struggling to get noticed by journalists and media outlets",
          "Lack of third-party validation hurting brand trust",
          "Competitors dominating news coverage in your industry",
          "No crisis communication strategy when issues arise",
          "Press releases that fail to generate meaningful coverage",
        ],
      }}
      solution={{
        title: "Your Story, Their Headlines",
        description: "We leverage our extensive media network spanning 500+ premium outlets to secure meaningful coverage that moves the needle. From Yahoo Finance to Bloomberg, Forbes to TechCrunch, we position your brand in front of the audiences that matter most with stories that resonate.",
      }}
      features={[
        { title: "Press Release Distribution", description: "Syndication across 500+ premium news outlets globally." },
        { title: "Media Outreach", description: "Direct relationships with journalists and editors in your industry." },
        { title: "Thought Leadership", description: "Guest articles and op-eds in top-tier publications." },
        { title: "Crisis Management", description: "Rapid response strategies to protect brand reputation." },
        { title: "Event Coverage", description: "PR support for product launches, announcements, and events." },
        { title: "Media Training", description: "Prepare executives for interviews and public appearances." },
      ]}
      tools={["Cision", "Muck Rack", "PRNewswire", "Business Wire", "HARO", "Prowly", "Meltwater", "Mention"]}
      benefits={[
        "Coverage in Yahoo Finance, Bloomberg, Forbes",
        "Average 50+ media pickups per campaign",
        "Permanent, SEO-boosting backlinks",
        "Increased brand authority and trust",
        "Support for investor relations",
        "Rapid crisis response capability",
      ]}
      useCases={[
        { title: "Token/ICO Launch", description: "Maximum visibility for cryptocurrency and Web3 project launches." },
        { title: "Funding Announcements", description: "Strategic coverage of investment rounds and partnerships." },
        { title: "Product Launches", description: "Generate buzz and coverage for new product releases." },
      ]}
    />
  );
}
