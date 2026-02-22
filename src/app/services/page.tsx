// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import {
//   Globe,
//   Smartphone,
//   TrendingUp,
//   Newspaper,
//   Share2,
//   Mic,
//   Video,
//   Radio,
//   GraduationCap,
//   Wrench,
//   ArrowRight,
// } from "lucide-react";
// import { Button } from "@/shared/ui/Button";
// import {
//   AnimatedSection,
//   StaggerContainer,
//   StaggerItem,
// } from "@/shared/animations/AnimatedSection";
// import { ParallaxBackground } from "@/shared/animations/ParallaxSection";
// import {
//   AnimatedLineChart,
//   AnimatedDonutChart,
//   ComparisonBar,
// } from "@/shared/ui/Charts";

// const services = [
//   {
//     icon: Globe,
//     title: "Website Design & Development",
//     description: "Stunning, high-performance websites built with cutting-edge technologies that captivate visitors and convert them into loyal customers.",
//     href: "/services/web-design",
//     features: ["Custom Design", "Responsive", "SEO Optimized", "Fast Loading"],
//     color: "#00f0ff",
//   },
//   {
//     icon: Wrench,
//     title: "Website Maintenance & Support",
//     description: "Keep your digital presence secure, updated, and performing at peak efficiency with our comprehensive maintenance services.",
//     href: "/services/maintenance",
//     features: ["24/7 Monitoring", "Security Updates", "Performance Optimization", "Bug Fixes"],
//     color: "#7b2dff",
//   },
//   {
//     icon: Smartphone,
//     title: "Mobile App Development",
//     description: "Native iOS and Android applications that deliver exceptional user experiences and drive engagement across all mobile platforms.",
//     href: "/services/mobile-apps",
//     features: ["iOS & Android", "UI/UX Design", "App Store Optimization", "Push Notifications"],
//     color: "#ff00aa",
//   },
//   {
//     icon: TrendingUp,
//     title: "Digital Marketing & Brand Growth",
//     description: "Data-driven marketing strategies that amplify your brand's digital footprint and deliver measurable ROI across all channels.",
//     href: "/services/digital-marketing",
//     features: ["SEO & SEM", "Content Strategy", "Analytics", "Conversion Optimization"],
//     color: "#00ff88",
//   },
//   {
//     icon: Newspaper,
//     title: "PR & News Publishing",
//     description: "Global media coverage across 500+ premium news outlets including Yahoo Finance, Bloomberg, and Forbes to establish authority.",
//     href: "/services/pr-news",
//     features: ["500+ Outlets", "Press Releases", "Media Relations", "Crisis Management"],
//     color: "#ffcc00",
//   },
//   {
//     icon: Share2,
//     title: "Social Media Marketing",
//     description: "Build engaged communities across all social platforms with strategic content and meaningful interactions that drive results.",
//     href: "/services/social-media",
//     features: ["Multi-Platform", "Content Creation", "Community Management", "Analytics"],
//     color: "#ff00aa",
//   },
//   {
//     icon: Mic,
//     title: "Influencer & KOL Marketing",
//     description: "Connect with top influencers, KOLs, and creators who authentically advocate for your brand to their engaged audiences.",
//     href: "/services/influencer-marketing",
//     features: ["Influencer Matching", "Campaign Management", "ROI Tracking", "Long-term Partnerships"],
//     color: "#7b2dff",
//   },
//   {
//     icon: Video,
//     title: "Video Production & Motion Graphics",
//     description: "Professional spokesperson videos, explainers, and motion graphics that tell your brand story with cinematic quality.",
//     href: "/services/video-production",
//     features: ["Spokesperson Videos", "Motion Graphics", "Explainer Videos", "Brand Films"],
//     color: "#00ff88",
//   },
//   {
//     icon: Radio,
//     title: "Podcast Production",
//     description: "Full-service podcast creation from concept to distribution, plus professional brand shoots that capture your essence.",
//     href: "/services/podcast",
//     features: ["Production", "Editing", "Distribution", "Guest Booking"],
//     color: "#ffcc00",
//   },
//   {
//     icon: GraduationCap,
//     title: "College & Community Events",
//     description: "Impactful college tours and community events that create lasting impressions and build grassroots brand awareness.",
//     href: "/services/events",
//     features: ["Event Planning", "Campus Tours", "Community Outreach", "Brand Activation"],
//     color: "#00f0ff",
//   },
// ];

// const serviceGrowthData = [
//   { label: "Q1", value: 45 },
//   { label: "Q2", value: 62 },
//   { label: "Q3", value: 78 },
//   { label: "Q4", value: 95 },
// ];

// export default function ServicesPage() {
//   return (
//     <div className="relative">
//       <ParallaxBackground
//         overlay={false}
//         className="min-h-[70vh] flex items-center justify-center bg-gradient-dark"
//       >
//         <div className="text-center px-6 py-32">
//           <motion.span
//             className="text-[#00f0ff] text-sm font-medium tracking-widest uppercase mb-4 block"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             Our Services
//           </motion.span>
//           <motion.h1
//             className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Full-Stack Digital
//             <br />
//             <span className="text-gradient">Growth Solutions</span>
//           </motion.h1>
//           <motion.p
//             className="text-xl text-white/60 max-w-2xl mx-auto"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             From concept to execution, we deliver comprehensive services designed
//             to accelerate your brand&apos;s journey to market dominance.
//           </motion.p>
//         </div>
//       </ParallaxBackground>

//       <AnimatedSection as="section" className="py-32 px-6 relative">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#00f0ff]/5 rounded-full blur-[150px]" />
//           <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#ff00aa]/5 rounded-full blur-[150px]" />
//         </div>

//         <div className="max-w-7xl mx-auto relative">
//           <AnimatedSection className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Everything You Need to
//               <span className="text-gradient"> Succeed</span>
//             </h2>
//             <p className="text-white/50 max-w-2xl mx-auto">
//               We offer a comprehensive suite of services tailored to meet the
//               unique needs of startups, enterprises, and Web3 projects.
//             </p>
//           </AnimatedSection>

//           <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {services.map((service, index) => {
//               const Icon = service.icon;
//               return (
//                 <StaggerItem key={index}>
//                   <Link href={service.href}>
//                     <motion.div
//                       className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 h-full overflow-hidden"
//                       whileHover={{ y: -5 }}
//                     >
//                       <div
//                         className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-500"
//                         style={{ backgroundColor: service.color }}
//                       />

//                       <div className="relative z-10">
//                         <div className="flex items-start justify-between mb-6">
//                           <div
//                             className="w-14 h-14 rounded-xl flex items-center justify-center"
//                             style={{ backgroundColor: `${service.color}20` }}
//                           >
//                             <Icon
//                               className="w-7 h-7"
//                               style={{ color: service.color }}
//                             />
//                           </div>
//                           <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-white/70 group-hover:translate-x-1 transition-all" />
//                         </div>

//                         <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
//                           {service.title}
//                         </h3>
//                         <p className="text-white/50 text-sm leading-relaxed mb-6">
//                           {service.description}
//                         </p>

//                         <div className="flex flex-wrap gap-2">
//                           {service.features.map((feature, i) => (
//                             <span
//                               key={i}
//                               className="px-3 py-1 rounded-full text-xs bg-white/5 text-white/50 border border-white/10"
//                             >
//                               {feature}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </motion.div>
//                   </Link>
//                 </StaggerItem>
//               );
//             })}
//           </StaggerContainer>
//         </div>
//       </AnimatedSection>

//       <AnimatedSection as="section" className="py-32 px-6 relative bg-[#0d0d14]">
//         <div className="max-w-7xl mx-auto">
//           <AnimatedSection className="text-center mb-16">
//             <span className="text-[#ff00aa] text-sm font-medium tracking-widest uppercase mb-4 block">
//               Our Process
//             </span>
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               How We Deliver
//               <br />
//               <span className="text-gradient-accent">Excellence</span>
//             </h2>
//           </AnimatedSection>

//           <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             {[
//               { step: "01", title: "Discovery", desc: "We dive deep into understanding your goals, audience, and market position." },
//               { step: "02", title: "Strategy", desc: "Crafting a customized roadmap aligned with your objectives and budget." },
//               { step: "03", title: "Execution", desc: "Our specialists bring the strategy to life with precision and creativity." },
//               { step: "04", title: "Optimization", desc: "Continuous monitoring and refinement to maximize your results." },
//             ].map((item, index) => (
//               <StaggerItem key={index}>
//                 <motion.div
//                   className="relative p-6 rounded-2xl bg-white/5 border border-white/10 text-center h-full"
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   <div className="text-5xl font-bold text-gradient mb-4">{item.step}</div>
//                   <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
//                   <p className="text-white/50 text-sm">{item.desc}</p>
//                 </motion.div>
//               </StaggerItem>
//             ))}
// </StaggerContainer>

//             <AnimatedSection className="mt-16">
//               <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//                 <AnimatedLineChart data={serviceGrowthData} title="Service Delivery Growth" color="#8b5cf6" />
//                 <AnimatedDonutChart value={95} title="Success Rate" color="#8b5cf6" />
//                 <ComparisonBar label="Project Completion" before={65} after={95} unit="%" />
//                 <ComparisonBar label="Client Satisfaction" before={72} after={98} unit="%" />
//               </div>
//             </AnimatedSection>
//           </div>
//         </AnimatedSection>

//         <AnimatedSection as="section" className="py-32 px-6 relative">
//           <div className="max-w-4xl mx-auto">
//           <AnimatedSection>
//             <div className="relative p-12 md:p-16 rounded-3xl overflow-hidden">
//               <div className="absolute inset-0 bg-gradient-primary opacity-90" />
//               <div className="relative z-10 text-center">
//                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
//                   Ready to Get Started?
//                 </h2>
//                 <p className="text-black/70 text-lg mb-8 max-w-xl mx-auto">
//                   Let&apos;s discuss how our services can help you achieve your goals.
//                   Book a free consultation today.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                   <Button href="/contact" className="bg-black text-white hover:bg-black/80">
//                     Start Your Project
//                   </Button>
//                   <Button href="/pricing" variant="outline" className="border-black/30 text-black hover:bg-black/10">
//                     View Pricing
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </AnimatedSection>
//         </div>
//       </AnimatedSection>
//     </div>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe, Smartphone, TrendingUp, Newspaper,
  Share2, Mic, Video, Radio, GraduationCap, Wrench,
} from "lucide-react";
import { Button } from "@/shared/ui/Button";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/shared/animations/AnimatedSection";
import { ParallaxBackground } from "@/shared/animations/ParallaxSection";
import {
  AnimatedLineChart,
  AnimatedDonutChart,
  ComparisonBar,
} from "@/shared/ui/Charts";

const services = [
  { icon: Globe, title: "Website Design & Development", description: "Stunning, high-performance websites built with cutting-edge technologies that captivate visitors and convert them into loyal customers.", href: "/services/web-design", features: ["Custom Design", "Responsive", "SEO Optimized", "Fast Loading"], color: "#00f0ff" },
  { icon: Wrench, title: "Website Maintenance & Support", description: "Keep your digital presence secure, updated, and performing at peak efficiency with our comprehensive maintenance services.", href: "/services/maintenance", features: ["24/7 Monitoring", "Security Updates", "Performance Optimization", "Bug Fixes"], color: "#7b2dff" },
  { icon: Smartphone, title: "Mobile App Development", description: "Native iOS and Android applications that deliver exceptional user experiences and drive engagement across all mobile platforms.", href: "/services/mobile-apps", features: ["iOS & Android", "UI/UX Design", "App Store Optimization", "Push Notifications"], color: "#ff00aa" },
  { icon: TrendingUp, title: "Digital Marketing & Brand Growth", description: "Data-driven marketing strategies that amplify your brand's digital footprint and deliver measurable ROI across all channels.", href: "/services/digital-marketing", features: ["SEO & SEM", "Content Strategy", "Analytics", "Conversion Optimization"], color: "#00ff88" },
  { icon: Newspaper, title: "PR & News Publishing", description: "Global media coverage across 500+ premium news outlets including Yahoo Finance, Bloomberg, and Forbes to establish authority.", href: "/services/pr-news", features: ["500+ Outlets", "Press Releases", "Media Relations", "Crisis Management"], color: "#ffcc00" },
  { icon: Share2, title: "Social Media Marketing", description: "Build engaged communities across all social platforms with strategic content and meaningful interactions that drive results.", href: "/services/social-media", features: ["Multi-Platform", "Content Creation", "Community Management", "Analytics"], color: "#ff00aa" },
  { icon: Mic, title: "Influencer & KOL Marketing", description: "Connect with top influencers, KOLs, and creators who authentically advocate for your brand to their engaged audiences.", href: "/services/influencer-marketing", features: ["Influencer Matching", "Campaign Management", "ROI Tracking", "Long-term Partnerships"], color: "#7b2dff" },
  { icon: Video, title: "Video Production & Motion Graphics", description: "Professional spokesperson videos, explainers, and motion graphics that tell your brand story with cinematic quality.", href: "/services/video-production", features: ["Spokesperson Videos", "Motion Graphics", "Explainer Videos", "Brand Films"], color: "#00ff88" },
  { icon: Radio, title: "Podcast Production", description: "Full-service podcast creation from concept to distribution, plus professional brand shoots that capture your essence.", href: "/services/podcast", features: ["Production", "Editing", "Distribution", "Guest Booking"], color: "#ffcc00" },
  { icon: GraduationCap, title: "College & Community Events", description: "Impactful college tours and community events that create lasting impressions and build grassroots brand awareness.", href: "/services/events", features: ["Event Planning", "Campus Tours", "Community Outreach", "Brand Activation"], color: "#00f0ff" },
];

const processSteps = [
  { step: "01", title: "Discovery", desc: "We dive deep into understanding your goals, audience, and market position.", color: "#00f0ff" },
  { step: "02", title: "Strategy", desc: "Crafting a customized roadmap aligned with your objectives and budget.", color: "#ff00aa" },
  { step: "03", title: "Execution", desc: "Our specialists bring the strategy to life with precision and creativity.", color: "#7b2dff" },
  { step: "04", title: "Optimization", desc: "Continuous monitoring and refinement to maximize your results.", color: "#8b5cf6" },
];

const serviceGrowthData = [
  { label: "Q1", value: 45 },
  { label: "Q2", value: 62 },
  { label: "Q3", value: 78 },
  { label: "Q4", value: 95 },
];

export default function ServicesPage() {
  return (
    <div className="relative">

      {/* HERO */}
      <ParallaxBackground overlay={false} className="min-h-[60vh] flex items-center justify-center bg-gradient-dark">
        <div className="text-center px-6 py-32">
          <motion.span className="text-[#00f0ff] text-sm font-medium tracking-widest uppercase mb-4 block" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Our Services
          </motion.span>
          <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            Full-Stack Digital
            <br />
            <span className="text-gradient">Growth Solutions</span>
          </motion.h1>
          <motion.p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            From concept to execution, we deliver comprehensive services designed to accelerate your brand&apos;s journey to market dominance.
          </motion.p>
        </div>
      </ParallaxBackground>

      {/* SERVICES — sticky left label + scrolling numbered rows */}
      <AnimatedSection as="section" className="py-32 px-6 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#00f0ff]/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#ff00aa]/5 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="flex gap-16 lg:gap-24">

            {/* Sticky left nav column */}
            <div className="hidden lg:block w-44 shrink-0">
              <div className="sticky top-32">
                <div className="w-px h-16 bg-gradient-to-b from-transparent to-[#00f0ff] mb-4" />
                <span className="text-[#00f0ff] text-xs font-medium tracking-widest uppercase block mb-1">What We Do</span>
                <span className="text-white/20 text-xs block mb-8">{services.length} services</span>
                <div className="space-y-2">
                  {services.map((s, i) => (
                    <div key={i} className="flex items-center gap-2 opacity-30">
                      <div className="w-1 h-1 rounded-full" style={{ background: s.color }} />
                      <span className="text-[10px] text-white/50 truncate">{s.title.split(" ")[0]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main service list */}
            <div className="flex-1 min-w-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-16">
                Everything You Need to
                <span className="text-gradient"> Succeed</span>
              </h2>

              <StaggerContainer className="space-y-0">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <StaggerItem key={index}>
                      <Link href={service.href}>
                        <motion.div
                          className="group relative grid grid-cols-12 gap-4 md:gap-8 py-7 border-b border-white/6 cursor-pointer pl-4"
                          whileHover={{ x: 6 }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                        >
                          {/* Hover accent line */}
                          <div
                            className="absolute left-0 top-5 bottom-5 w-[2px] rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"
                            style={{ background: service.color }}
                          />

                          {/* Ghost index */}
                          <div className="col-span-1 pt-0.5">
                            <span
                              className="text-2xl font-bold select-none leading-none"
                              style={{ color: service.color, opacity: 0.13, fontFamily: "Georgia, serif" }}
                            >
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>

                          {/* Icon */}
                          <div className="col-span-1 flex items-start pt-1">
                            <div
                              className="w-8 h-8 rounded-md flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110"
                              style={{ background: `${service.color}12`, border: `1px solid ${service.color}20` }}
                            >
                              <Icon className="w-3.5 h-3.5" style={{ color: service.color }} />
                            </div>
                          </div>

                          {/* Title + description */}
                          <div className="col-span-10 md:col-span-6">
                            <h3 className="text-[15px] font-bold text-white mb-1.5 group-hover:text-white/90 transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-white/35 text-sm leading-relaxed">
                              {service.description}
                            </p>
                          </div>

                          {/* Features */}
                          <div className="hidden md:flex md:col-span-4 flex-col justify-center gap-1.5">
                            {service.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full shrink-0" style={{ background: service.color, opacity: 0.4 }} />
                                <span className="text-[11px] tracking-wide" style={{ color: `${service.color}65` }}>
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      </Link>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* PROCESS — split screen */}
      <AnimatedSection as="section" className="py-32 relative bg-[#0d0d14] overflow-hidden">
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/4" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-6 h-px bg-[#ff00aa]" />
            <span className="text-[#ff00aa] text-xs font-medium tracking-widest uppercase">Our Process</span>
            <div className="flex-1 h-px bg-white/6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">

            {/* Left — sticky heading */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                How We Deliver
                <br />
                <span className="text-gradient-accent">Excellence</span>
              </h2>
              <p className="text-white/35 text-[15px] leading-relaxed max-w-xs">
                A proven four-phase approach that transforms your vision into measurable digital growth.
              </p>
              <div className="mt-10 flex items-center gap-3">
                {processSteps.map((s, i) => (
                  <div key={i} className="w-8 h-px" style={{ background: s.color, opacity: 0.4 }} />
                ))}
                <span className="text-white/20 text-xs ml-1">4 phases</span>
              </div>
            </div>

            {/* Right — step rows */}
            <StaggerContainer className="space-y-0">
              {processSteps.map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="group relative flex gap-6 py-8 border-b border-white/6 pl-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                  >
                    <div
                      className="absolute left-0 top-6 bottom-6 w-[2px] rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"
                      style={{ background: item.color }}
                    />
                    <div className="shrink-0 w-10 pt-0.5">
                      <span className="text-xs font-bold tracking-widest block" style={{ color: item.color, fontFamily: "Georgia, serif" }}>
                        {item.step}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-white">{item.title}</h3>
                        <div className="w-0 h-px group-hover:w-8 transition-all duration-300" style={{ background: item.color }} />
                      </div>
                      <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Charts */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-6 h-px bg-[#8b5cf6]" />
            <span className="text-[#8b5cf6] text-xs font-medium tracking-widest uppercase">Performance Data</span>
            <div className="flex-1 h-px bg-white/6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <AnimatedLineChart data={serviceGrowthData} title="Service Delivery Growth" color="#8b5cf6" />
            <AnimatedDonutChart value={95} title="Success Rate" color="#8b5cf6" />
            <ComparisonBar label="Project Completion" before={65} after={95} unit="%" />
            <ComparisonBar label="Client Satisfaction" before={72} after={98} unit="%" />
          </div>
        </div>
      </AnimatedSection>

      {/* CTA — original gradient card, unchanged */}
      <AnimatedSection as="section" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="relative p-12 md:p-16 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-primary opacity-90" />
              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">Ready to Get Started?</h2>
                <p className="text-black/70 text-lg mb-8 max-w-xl mx-auto">
                  Let&apos;s discuss how our services can help you achieve your goals. Book a free consultation today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href="/contact" className="bg-black text-white hover:bg-black/80">Start Your Project</Button>
                  <Button href="/pricing" variant="outline" className="border-black/30 text-black hover:bg-black/10">View Pricing</Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>

    </div>
  );
}