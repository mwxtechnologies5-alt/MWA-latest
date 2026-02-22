"use client";

import { GraduationCap } from "lucide-react";
import { ServicePageTemplate } from "@/modules/services/components/ServicePageTemplate";

export default function EventsPage() {
  return (
    <ServicePageTemplate
      title="College & Community Events"
      subtitle="Event Marketing"
      description="Impactful college tours and community events that create lasting impressions and build grassroots brand awareness."
      icon={GraduationCap}
      color="#00f0ff"
      problem={{
        title: "Event Marketing Struggles",
        points: [
          "Low attendance despite significant promotion efforts",
          "Difficulty reaching younger, Gen-Z audiences",
          "Events that don't translate to measurable business outcomes",
          "Logistical nightmares eating into marketing budgets",
          "No lasting impact after the event concludes",
        ],
      }}
      solution={{
        title: "Experiences That Resonate",
        description: "We create immersive brand experiences that connect with audiences on a personal level. Our college and community events combine entertainment, education, and engagement to build genuine relationships with future customers and brand advocates.",
      }}
      features={[
        { title: "Campus Tours", description: "Multi-university roadshows reaching thousands of students." },
        { title: "Hackathons & Competitions", description: "Engaging tech-focused events that attract top talent." },
        { title: "Community Meetups", description: "Local events building grassroots brand presence." },
        { title: "Brand Activations", description: "Interactive experiences that create shareable moments." },
        { title: "Speaker Sessions", description: "Educational content positioning your brand as an authority." },
        { title: "Networking Events", description: "Connecting your brand with industry professionals." },
      ]}
      tools={["Eventbrite", "Hopin", "Splash", "Bizzabo", "Whova", "Swoogo"]}
      benefits={[
        "Average 500+ attendees per campus event",
        "Direct access to Gen-Z audiences",
        "User-generated content from attendees",
        "Brand ambassador recruitment opportunities",
        "Lead generation and data collection",
        "Post-event engagement campaigns",
      ]}
      useCases={[
        { title: "Startup Awareness", description: "Build brand recognition among future early adopters and employees." },
        { title: "Product Education", description: "Hands-on demonstrations and workshops for complex products." },
        { title: "Community Building", description: "Create loyal communities around your brand or product." },
      ]}
    />
  );
}
