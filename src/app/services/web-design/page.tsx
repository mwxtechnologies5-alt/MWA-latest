"use client";

import { Globe } from "lucide-react";
import { ServicePageTemplate } from "@/modules/services/components/ServicePageTemplate";

export default function WebDesignPage() {
  return (
    <ServicePageTemplate
      title="Website Design & Development"
      subtitle="Web Solutions"
      description="Stunning, high-performance websites built with cutting-edge technologies that captivate visitors and convert them into loyal customers."
      icon={Globe}
      color="#00f0ff"
      problem={{
        title: "Why Most Websites Fail to Convert",
        points: [
          "Outdated designs that don't reflect modern brand standards",
          "Slow loading times causing visitors to bounce before engaging",
          "Poor mobile experience in a mobile-first world",
          "Lack of clear user journeys leading to low conversion rates",
          "SEO issues preventing organic traffic growth",
        ],
      }}
      solution={{
        title: "The MWX Technologies Approach",
        description: "We create bespoke digital experiences that combine stunning aesthetics with flawless functionality. Our development process focuses on speed, accessibility, and conversion optimization, ensuring your website not only looks incredible but performs exceptionally across all devices and platforms.",
      }}
      features={[
        { title: "Custom UI/UX Design", description: "Unique, brand-aligned designs that stand out from template-based competitors." },
        { title: "Responsive Development", description: "Pixel-perfect experiences across desktop, tablet, and mobile devices." },
        { title: "Performance Optimization", description: "Lightning-fast load times with Core Web Vitals optimization." },
        { title: "SEO Foundation", description: "Built-in technical SEO best practices for organic visibility." },
        { title: "CMS Integration", description: "Easy content management with your preferred platform." },
        { title: "E-commerce Ready", description: "Full shopping cart and payment gateway integration." },
      ]}
      tools={["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "WordPress", "Shopify", "Webflow", "Figma", "Adobe XD"]}
      benefits={[
        "40% average increase in conversion rates",
        "Sub-3-second load times guaranteed",
        "100% mobile-responsive design",
        "Built-in analytics and tracking",
        "Ongoing support and maintenance available",
        "Scalable architecture for future growth",
      ]}
      useCases={[
        { title: "Startup Launch", description: "Complete brand identity and website for emerging companies ready to make their mark." },
        { title: "Enterprise Redesign", description: "Modernizing legacy websites while maintaining brand equity and SEO value." },
        { title: "E-commerce Platform", description: "High-converting online stores with seamless checkout experiences." },
      ]}
    />
  );
}
