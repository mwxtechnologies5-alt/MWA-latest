"use client";

import { Wrench } from "lucide-react";
import { ServicePageTemplate } from "@/modules/services/components/ServicePageTemplate";

export default function MaintenancePage() {
  return (
    <ServicePageTemplate
      title="Website Maintenance & Support"
      subtitle="Technical Support"
      description="Keep your digital presence secure, updated, and performing at peak efficiency with our comprehensive maintenance services."
      icon={Wrench}
      color="#7b2dff"
      problem={{
        title: "The Hidden Costs of Neglected Websites",
        points: [
          "Security vulnerabilities exposing your business to cyber threats",
          "Outdated plugins and software causing compatibility issues",
          "Slow degradation of performance affecting user experience",
          "Broken features going unnoticed until customers complain",
          "No backup strategy risking complete data loss",
        ],
      }}
      solution={{
        title: "Proactive Care, Not Reactive Fixes",
        description: "Our maintenance services go beyond simple updates. We provide comprehensive monitoring, security hardening, and performance optimization to ensure your website remains a powerful business asset. With 24/7 monitoring and rapid response times, issues are resolved before they impact your users.",
      }}
      features={[
        { title: "24/7 Uptime Monitoring", description: "Real-time monitoring with instant alerts for any downtime or issues." },
        { title: "Security Updates", description: "Regular patches and security audits to protect against threats." },
        { title: "Performance Optimization", description: "Continuous speed and performance improvements." },
        { title: "Regular Backups", description: "Daily automated backups with easy restoration options." },
        { title: "Content Updates", description: "Quick turnaround on text, image, and feature updates." },
        { title: "Technical Support", description: "Dedicated support team for any issues or questions." },
      ]}
      tools={["Cloudflare", "Sucuri", "ManageWP", "New Relic", "Google Analytics", "GTmetrix", "Pingdom", "AWS", "Docker"]}
      benefits={[
        "99.9% uptime guarantee",
        "Average 4-hour response time for critical issues",
        "Monthly performance reports",
        "Priority access to development resources",
        "Proactive security monitoring",
        "Peace of mind knowing experts are watching",
      ]}
      useCases={[
        { title: "Enterprise Websites", description: "Mission-critical sites requiring maximum uptime and security compliance." },
        { title: "E-commerce Platforms", description: "Online stores where downtime directly impacts revenue." },
        { title: "Lead Generation Sites", description: "Business websites that can't afford broken forms or slow performance." },
      ]}
    />
  );
}
