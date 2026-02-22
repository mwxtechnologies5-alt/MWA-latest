"use client";

import { Video } from "lucide-react";
import { ServicePageTemplate } from "@/modules/services/components/ServicePageTemplate";

export default function VideoProductionPage() {
  return (
    <ServicePageTemplate
      title="Video Production & Motion Graphics"
      subtitle="Visual Storytelling"
      description="Professional spokesperson videos, explainers, and motion graphics that tell your brand story with cinematic quality."
      icon={Video}
      color="#00ff88"
      problem={{
        title: "Video Content That Falls Flat",
        points: [
          "Amateur video quality hurting brand perception",
          "Expensive production costs with uncertain ROI",
          "Generic stock footage that doesn't differentiate",
          "Lack of storytelling that connects with audiences",
          "Videos that don't drive the intended action",
        ],
      }}
      solution={{
        title: "Cinematic Quality, Conversion Focus",
        description: "Our production team combines Hollywood-level quality with marketing expertise. Every frame is crafted to capture attention, communicate value, and drive action. From concept to final cut, we handle everything while keeping your brand voice front and center.",
      }}
      features={[
        { title: "Spokesperson Videos", description: "Professional talent delivering your message with credibility." },
        { title: "Explainer Videos", description: "Complex concepts made simple through engaging animation." },
        { title: "Motion Graphics", description: "Dynamic visual content for social media and advertising." },
        { title: "Brand Films", description: "Documentary-style content showcasing your company story." },
        { title: "Product Demos", description: "High-quality showcases of your products in action." },
        { title: "Social Media Content", description: "Platform-optimized video for TikTok, Reels, and Shorts." },
      ]}
      tools={["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Cinema 4D", "Final Cut Pro", "Motion", "Blender"]}
      benefits={[
        "10x higher engagement than static content",
        "Professional quality at competitive rates",
        "Fast turnaround times",
        "Unlimited revisions until satisfied",
        "Full usage rights included",
        "Multi-format delivery for all platforms",
      ]}
      useCases={[
        { title: "Product Launches", description: "Cinematic reveal videos that build anticipation and drive sales." },
        { title: "Crowdfunding Campaigns", description: "Compelling pitch videos that convert backers." },
        { title: "Corporate Communications", description: "Professional internal and external company videos." },
      ]}
    />
  );
}
