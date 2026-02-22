"use client";

import { Smartphone } from "lucide-react";
import { ServicePageTemplate } from "@/modules/services/components/ServicePageTemplate";

export default function MobileAppsPage() {
  return (
    <ServicePageTemplate
      title="Mobile App Development"
      subtitle="iOS & Android"
      description="Native and cross-platform mobile applications that deliver exceptional user experiences and drive engagement across all devices."
      icon={Smartphone}
      color="#ff00aa"
      problem={{
        title: "Mobile App Development Challenges",
        points: [
          "High development costs for building separate iOS and Android apps",
          "Poor user experience leading to high uninstall rates",
          "Difficulty standing out in crowded app stores",
          "Complex backend requirements and scalability concerns",
          "Maintaining consistency across multiple platforms",
        ],
      }}
      solution={{
        title: "Native Performance, Cross-Platform Efficiency",
        description: "We build mobile applications that users love to use. Whether native iOS/Android or cross-platform solutions, our apps combine beautiful design with robust functionality. Our expertise in app store optimization ensures your app gets discovered by the right audience.",
      }}
      features={[
        { title: "Native iOS Development", description: "Swift-based apps optimized for iPhone and iPad performance." },
        { title: "Native Android Development", description: "Kotlin apps built for the full Android ecosystem." },
        { title: "Cross-Platform Solutions", description: "React Native and Flutter apps for efficient multi-platform deployment." },
        { title: "UI/UX Design", description: "Intuitive interfaces following platform-specific design guidelines." },
        { title: "Backend Integration", description: "Robust APIs and cloud infrastructure for seamless data sync." },
        { title: "App Store Optimization", description: "Strategic ASO to improve visibility and downloads." },
      ]}
      tools={["Swift", "Kotlin", "React Native", "Flutter", "Firebase", "AWS Amplify", "Node.js", "GraphQL", "TestFlight", "Fastlane"]}
      benefits={[
        "4.5+ average app store rating for our apps",
        "60% faster time-to-market with cross-platform",
        "Seamless offline functionality",
        "Push notification integration",
        "Analytics and user behavior tracking",
        "Ongoing app updates and maintenance",
      ]}
      useCases={[
        { title: "Consumer Apps", description: "Engaging B2C applications designed for mass-market adoption and retention." },
        { title: "Enterprise Solutions", description: "Secure internal apps for workforce productivity and communication." },
        { title: "Fintech & Crypto", description: "Secure wallet apps and trading platforms with robust security." },
      ]}
    />
  );
}
