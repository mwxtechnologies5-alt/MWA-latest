"use client";

import { Radio } from "lucide-react";
import { ServicePageTemplate } from "@/modules/services/components/ServicePageTemplate";

export default function PodcastPage() {
  return (
    <ServicePageTemplate
      title="Podcast Production & Brand Shoots"
      subtitle="Audio Excellence"
      description="Full-service podcast creation from concept to distribution, plus professional brand shoots that capture your essence."
      icon={Radio}
      color="#ffcc00"
      problem={{
        title: "Podcasting Challenges",
        points: [
          "Technical complexity overwhelming first-time podcasters",
          "Poor audio quality making content hard to consume",
          "Inconsistent publishing schedules losing audience",
          "No strategy for growing listenership",
          "Difficulty booking quality guests",
        ],
      }}
      solution={{
        title: "Your Voice, Amplified",
        description: "We handle every aspect of podcast production so you can focus on what you do bestâ€”sharing your expertise. From recording setup to distribution across all major platforms, we transform your ideas into polished, professional content that builds your authority and audience.",
      }}
      features={[
        { title: "Concept Development", description: "Strategic planning for format, topics, and target audience." },
        { title: "Recording & Production", description: "Professional audio capture and post-production editing." },
        { title: "Guest Coordination", description: "Sourcing and scheduling relevant industry guests." },
        { title: "Distribution", description: "Publishing across Spotify, Apple Podcasts, and all major platforms." },
        { title: "Show Notes & Transcripts", description: "SEO-optimized content for each episode." },
        { title: "Promotion", description: "Social media clips and marketing to grow your audience." },
      ]}
      tools={["Adobe Audition", "Pro Tools", "Riverside.fm", "Descript", "Buzzsprout", "Anchor", "Podbean", "Auphonic"]}
      benefits={[
        "Professional studio quality",
        "Consistent weekly publishing",
        "Distribution to 15+ platforms",
        "Audience growth strategies included",
        "Video podcast options available",
        "Full brand ownership retained",
      ]}
      useCases={[
        { title: "Thought Leadership", description: "Position yourself as an industry authority through expert conversations." },
        { title: "Brand Storytelling", description: "Share your company journey and values with engaged listeners." },
        { title: "Customer Engagement", description: "Build deeper connections with your audience through audio content." },
      ]}
    />
  );
}
