"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Globe,
  Smartphone,
  TrendingUp,
  Newspaper,
  Hash,
  Share2,
  Mic,
  Video,
  Radio,
  GraduationCap,
  BarChart3,
  Coins,
  Wrench,
  ArrowRight,
  Zap,
  Shield,
  Users,
  Star,
} from "lucide-react";
import { RevealText } from "@/shared/animations/GSAPAnimations";
import { Testimonials } from "@/components/TestimonialSlider";
import { CountUp, StaggerContainer, StaggerItem } from "@/shared/animations/AnimatedSection";
import {
  AnimatedBarChart,
  AnimatedPieChart,
  AnimatedLineChart,
  ROICalculator,
  GrowthMetric,
  AnimatedDonutChart,
} from "@/components/Charts";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Globe, label: "Web Design & Development", href: "/services/web-design", description: "Stunning, high-performance websites that convert visitors into customers" },
  { icon: Wrench, label: "Website Maintenance", href: "/services/maintenance", description: "Keep your digital presence secure, fast, and always up-to-date" },
  { icon: Smartphone, label: "Mobile App Development", href: "/services/mobile-apps", description: "Native iOS & Android apps that deliver exceptional user experiences" },
  { icon: TrendingUp, label: "Digital Marketing", href: "/services/digital-marketing", description: "Data-driven strategies that amplify your brand's digital footprint" },
  { icon: Newspaper, label: "PR & News Publishing", href: "/services/pr-news", description: "Global media coverage across 500+ premium news outlets" },
  { icon: Share2, label: "Social Media Marketing", href: "/services/social-media", description: "Build engaged communities and drive meaningful interactions" },
  { icon: Mic, label: "Influencer Marketing", href: "/services/influencer-marketing", description: "Connect with top KOLs and creators for authentic brand advocacy" },
  { icon: Video, label: "Video Production", href: "/services/video-production", description: "Professional spokesperson videos and motion graphics" },
  { icon: Radio, label: "Podcast Production", href: "/services/podcast", description: "Full-service podcast creation and brand shoots" },
  { icon: GraduationCap, label: "Event Hosting", href: "/services/events", description: "College and community events that create lasting impressions" },
];

const stats = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 200, suffix: "+", label: "Global Clients" },
  { value: 50, suffix: "M+", label: "Audience Reached" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const whyChooseUs = [
  { icon: Zap, title: "Lightning Fast Execution", description: "We move at the speed of tech. Quick turnarounds without compromising quality." },
  { icon: Shield, title: "Proven Track Record", description: "500+ successful projects and counting. Results that speak for themselves." },
  { icon: Users, title: "Dedicated Team", description: "A team of 50+ specialists working exclusively on your success." },
  { icon: Star, title: "Premium Quality", description: "Enterprise-grade solutions tailored to your unique needs." },
];

const serviceDistribution = [
  { label: "Web Development", value: 35, color: "#8b5cf6" },
  { label: "Digital Marketing", value: 25, color: "#a78bfa" },
  { label: "PR & Media", value: 20, color: "#7c3aed" },
  { label: "Web3 Services", value: 20, color: "#c4b5fd" },
];

const growthData = [
  { label: "Jan", value: 30 },
  { label: "Feb", value: 45 },
  { label: "Mar", value: 55 },
  { label: "Apr", value: 70 },
  { label: "May", value: 85 },
  { label: "Jun", value: 95 },
];

const performanceMetrics = [
  { label: "SEO Rankings", value: 92 },
  { label: "Conversion Rate", value: 85 },
  { label: "User Engagement", value: 88 },
  { label: "Brand Awareness", value: 78 },
];

function Floating3DCube({ className }: { className?: string }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        rotateX: [0, 360],
        rotateY: [0, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      <div className="relative w-16 h-16 md:w-24 md:h-24" style={{ transformStyle: "preserve-3d" }}>
        <div className="absolute inset-0 border-2 border-[#8b5cf6]/30 bg-gradient-to-br from-[#8b5cf6]/10 to-[#7c3aed]/5 backdrop-blur-sm" style={{ transform: "translateZ(32px)" }} />
        <div className="absolute inset-0 border-2 border-[#8b5cf6]/20 bg-gradient-to-br from-[#8b5cf6]/5 to-transparent" style={{ transform: "translateZ(-32px)" }} />
        <div className="absolute inset-0 border-2 border-[#8b5cf6]/25 bg-gradient-to-br from-[#a78bfa]/10 to-transparent" style={{ transform: "rotateY(90deg) translateZ(32px)" }} />
        <div className="absolute inset-0 border-2 border-[#8b5cf6]/15 bg-gradient-to-br from-[#7c3aed]/5 to-transparent" style={{ transform: "rotateY(-90deg) translateZ(32px)" }} />
        <div className="absolute inset-0 border-2 border-[#8b5cf6]/20 bg-gradient-to-br from-[#8b5cf6]/10 to-transparent" style={{ transform: "rotateX(90deg) translateZ(32px)" }} />
        <div className="absolute inset-0 border-2 border-[#8b5cf6]/15 bg-gradient-to-br from-[#a78bfa]/5 to-transparent" style={{ transform: "rotateX(-90deg) translateZ(32px)" }} />
      </div>
    </motion.div>
  );
}

function Floating3DPyramid({ className }: { className?: string }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        rotateY: [0, 360],
        y: [0, -15, 0],
      }}
      transition={{
        rotateY: { duration: 15, repeat: Infinity, ease: "linear" },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
      }}
      style={{ transformStyle: "preserve-3d", perspective: "800px" }}
    >
      <div className="relative w-20 h-20 md:w-28 md:h-28" style={{ transformStyle: "preserve-3d" }}>
        <div 
          className="absolute w-0 h-0 border-l-[40px] md:border-l-[56px] border-r-[40px] md:border-r-[56px] border-b-[70px] md:border-b-[100px] border-l-transparent border-r-transparent border-b-[#8b5cf6]/20"
          style={{ transform: "rotateX(-30deg)", filter: "drop-shadow(0 0 20px rgba(139,92,246,0.3))" }}
        />
        <div 
          className="absolute w-0 h-0 border-l-[40px] md:border-l-[56px] border-r-[40px] md:border-r-[56px] border-b-[70px] md:border-b-[100px] border-l-transparent border-r-transparent border-b-[#a78bfa]/15"
          style={{ transform: "rotateY(120deg) rotateX(-30deg)" }}
        />
        <div 
          className="absolute w-0 h-0 border-l-[40px] md:border-l-[56px] border-r-[40px] md:border-r-[56px] border-b-[70px] md:border-b-[100px] border-l-transparent border-r-transparent border-b-[#7c3aed]/15"
          style={{ transform: "rotateY(240deg) rotateX(-30deg)" }}
        />
      </div>
    </motion.div>
  );
}

function Floating3DTorus({ className }: { className?: string }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        rotateX: [0, 360],
        rotateZ: [0, 180],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div className="relative w-20 h-20 md:w-32 md:h-32">
        <div className="absolute inset-0 rounded-full border-[6px] md:border-[8px] border-[#8b5cf6]/25 shadow-[0_0_30px_rgba(139,92,246,0.3),inset_0_0_20px_rgba(139,92,246,0.1)]" />
        <div className="absolute inset-2 rounded-full border-[4px] md:border-[6px] border-[#a78bfa]/20" />
        <div className="absolute inset-4 rounded-full border-[2px] md:border-[4px] border-[#7c3aed]/15" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8b5cf6]/10 via-transparent to-[#7c3aed]/10 blur-sm" />
      </div>
    </motion.div>
  );
}

function FloatingOctahedron({ className }: { className?: string }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        rotateY: [0, 360],
        rotateX: [0, 180, 360],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{ transformStyle: "preserve-3d", perspective: "600px" }}
    >
      <div className="relative w-14 h-14 md:w-20 md:h-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,5 95,50 50,95 5,50" fill="none" stroke="url(#octGrad)" strokeWidth="2" opacity="0.4" />
          <polygon points="50,5 95,50 50,50" fill="url(#octGrad)" opacity="0.15" />
          <polygon points="50,5 5,50 50,50" fill="url(#octGrad)" opacity="0.2" />
          <polygon points="50,95 95,50 50,50" fill="url(#octGrad)" opacity="0.1" />
          <polygon points="50,95 5,50 50,50" fill="url(#octGrad)" opacity="0.15" />
          <defs>
            <linearGradient id="octGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </motion.div>
  );
}

function FloatingPrism({ className }: { className?: string }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        rotateY: [0, 360],
        y: [0, -20, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        rotateY: { duration: 12, repeat: Infinity, ease: "linear" },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <div className="relative w-16 h-24 md:w-20 md:h-32">
        <svg viewBox="0 0 80 120" className="w-full h-full">
          <polygon points="40,10 75,100 5,100" fill="url(#prismGrad)" opacity="0.2" />
          <polygon points="40,10 75,100 5,100" fill="none" stroke="url(#prismGrad)" strokeWidth="2" opacity="0.5" />
          <line x1="40" y1="10" x2="40" y2="100" stroke="url(#prismGrad)" strokeWidth="1" opacity="0.3" />
          <defs>
            <linearGradient id="prismGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-[#8b5cf6]/20 to-transparent blur-md" />
      </div>
    </motion.div>
  );
}

function FloatingDiamond({ className }: { className?: string }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        rotateZ: [0, 360],
        scale: [1, 1.1, 1],
      }}
      transition={{
        rotateZ: { duration: 20, repeat: Infinity, ease: "linear" },
        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <div className="relative w-12 h-12 md:w-16 md:h-16">
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <polygon points="30,5 55,30 30,55 5,30" fill="url(#diamondGrad)" opacity="0.25" />
          <polygon points="30,5 55,30 30,55 5,30" fill="none" stroke="url(#diamondGrad)" strokeWidth="2" opacity="0.6" />
          <polygon points="30,15 45,30 30,45 15,30" fill="none" stroke="url(#diamondGrad)" strokeWidth="1" opacity="0.3" />
          <defs>
            <linearGradient id="diamondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 bg-[#8b5cf6]/20 blur-lg rounded-full" />
      </div>
    </motion.div>
  );
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-glow-1",
        { opacity: 0 },
        { opacity: 0.5, duration: 1.2, ease: "power2.out", delay: 0.2 }
      );

      gsap.fromTo(
        ".hero-glow-2",
        { opacity: 0 },
        { opacity: 0.4, duration: 1.2, ease: "power2.out", delay: 0.3 }
      );

      if (heroTextRef.current) {
        const heroTitle1 = heroTextRef.current.querySelector(".hero-title-1");
        const heroTitle2 = heroTextRef.current.querySelector(".hero-title-2");
        const heroDesc = heroTextRef.current.querySelector(".hero-desc");
        const heroCta = heroTextRef.current.querySelector(".hero-cta");

        if (heroTitle1) {
          gsap.fromTo(heroTitle1, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.2 });
        }
        if (heroTitle2) {
          gsap.fromTo(heroTitle2, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.35 });
        }
        if (heroDesc) {
          gsap.fromTo(heroDesc, { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.5 });
        }
        if (heroCta) {
          gsap.fromTo(heroCta, { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.65 });
        }
      }

      const sections = document.querySelectorAll(".scroll-section");
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      if (servicesRef.current) {
        const cards = servicesRef.current.querySelectorAll(".service-card");
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.06,
            ease: "power2.out",
            scrollTrigger: {
              trigger: servicesRef.current,
              start: "top 80%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (statsRef.current) {
        const statItems = statsRef.current.querySelectorAll(".stat-item");
        gsap.fromTo(
          statItems,
          { y: 30, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.4,
            stagger: 0.08,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { y: 50, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 85%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-[#0a0a12] via-[#0d0d18] to-[#0a0a12] overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#8b5cf6]/8 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#7c3aed]/6 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#a78bfa]/5 via-transparent to-transparent" />
      </div>

      <section
        ref={heroRef}
        className="relative flex items-center justify-center pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden"
      >
        <div className="absolute inset-0">
          <motion.div
            className="hero-glow-1 absolute top-1/3 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#8b5cf6]/35 rounded-full blur-[120px] md:blur-[160px]"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="hero-glow-2 absolute bottom-1/3 right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#7c3aed]/30 rounded-full blur-[100px] md:blur-[140px]"
            animate={{ scale: [1.1, 1, 1.1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />

          <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(139,92,246,0.08)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[450px] h-[350px] md:h-[450px] border border-[#8b5cf6]/8 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[600px] h-[500px] md:h-[600px] border border-[#8b5cf6]/5 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          />

          <Floating3DCube className="top-[15%] left-[8%] hidden md:block" />
          <Floating3DPyramid className="top-[20%] right-[10%] hidden md:block" />
          <Floating3DTorus className="bottom-[25%] left-[5%] hidden lg:block" />
          <FloatingOctahedron className="bottom-[20%] right-[8%] hidden md:block" />
          <FloatingPrism className="top-[40%] right-[5%] hidden lg:block" />
          <FloatingDiamond className="top-[60%] left-[10%] hidden md:block" />
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-16"
          ref={heroTextRef}
        >
          <h1 className="hero-title-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 leading-[1.1] text-foreground opacity-0" style={{fontFamily: 'var(--font-special)'}}>
            Transform Your
          </h1>
          
          <h1 className="hero-title-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1] bg-gradient-to-r from-[#8b5cf6] via-[#a78bfa] to-[#7c3aed] bg-clip-text text-transparent opacity-0" style={{fontFamily: 'var(--font-special)'}}>
            Digital Future
          </h1>

          <p className="hero-desc text-sm sm:text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed font-body opacity-0" style={{fontFamily: 'var(--font-heading)'}}>
            We architect comprehensive digital growth strategies for startups,
            enterprises, and Web3 projects. From concept to global dominance.
          </p>

          <div className="hero-cta flex flex-col sm:flex-row gap-3 justify-center opacity-0">
            <Link href="/contact">
              <motion.span
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] rounded-full transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] cursor-pointer"
                style={{ fontFamily: 'var(--font-heading)' }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.span>
            </Link>
            <Link href="/services">
              <motion.span
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-foreground bg-foreground/5 border border-[#8b5cf6]/30 rounded-full transition-all hover:bg-[#8b5cf6]/10 hover:border-[#8b5cf6]/50 cursor-pointer"
                style={{ fontFamily: 'var(--font-heading)' }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Services
              </motion.span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div
            className="w-5 h-8 border-2 border-[#8b5cf6]/30 rounded-full flex justify-center cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          >
            <motion.div
              className="w-1 h-2 bg-[#8b5cf6] rounded-full mt-1.5"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="scroll-section py-16 md:py-24 px-4 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-[#8b5cf6]/6 rounded-full blur-[180px] pointer-events-none" />
        
        <Floating3DCube className="top-10 right-[5%] hidden lg:block opacity-60" />
        <FloatingDiamond className="bottom-20 left-[3%] hidden md:block opacity-50" />
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-10 md:mb-14">
            <motion.p
              className="text-[#8b5cf6] text-xs font-medium tracking-widest uppercase mb-2 font-body"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}
            >
              Who We Are
            </motion.p>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-foreground font-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}
            >
              The Growth Partner
            </motion.h2>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] bg-clip-text text-transparent font-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}
            >
              You&apos;ve Been Searching For
            </motion.h2>
            <RevealText className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto font-body">
              <span>
                Scaleo Media is a full-stack digital agency specializing in
                transformative marketing solutions. We combine cutting-edge
                technology with creative excellence to deliver measurable results.
              </span>
            </RevealText>
          </div>

          <motion.div 
            ref={statsRef} 
            className="grid grid-cols-2 md:grid-cols-4 gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item text-center p-4 rounded-xl bg-card/40 border border-[#8b5cf6]/10 hover:border-[#8b5cf6]/25 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] bg-clip-text text-transparent mb-1 font-heading">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-muted-foreground text-[10px] sm:text-xs font-body">{stat.label}</div>
              </motion.div>
            ))}
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={staggerContainer}
            >
              <AnimatedPieChart data={serviceDistribution} title="Service Distribution" />
              <AnimatedLineChart data={growthData} title="Client Growth (6 Months)" color="#8b5cf6" />
              <AnimatedBarChart data={performanceMetrics} title="Performance Metrics" />
            </motion.div>
          </div>
        </section>

        <section className="scroll-section py-16 md:py-24 px-4 relative">
          <div className="absolute top-0 right-0 w-[350px] md:w-[450px] h-[350px] md:h-[450px] bg-[#8b5cf6]/8 rounded-full blur-[140px] pointer-events-none" />
        
        <Floating3DPyramid className="top-20 left-[3%] hidden lg:block opacity-50" />
        <Floating3DTorus className="bottom-10 right-[5%] hidden md:block opacity-60" />
        <FloatingOctahedron className="top-1/2 left-[2%] hidden xl:block opacity-40" />
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-10 md:mb-14">
            <motion.p
              className="text-[#a78bfa] text-xs font-medium tracking-widest uppercase mb-2 font-body"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}
            >
              Our Services
            </motion.p>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-foreground font-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}
            >
              Full-Stack Digital
            </motion.h2>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] bg-clip-text text-transparent font-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}
            >
              Growth Solutions
            </motion.h2>
            <RevealText className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto font-body">
              <span>
                From web development to global PR campaigns, we offer end-to-end
                services designed to accelerate your brand&apos;s journey to success.
              </span>
            </RevealText>
          </div>

          <motion.div 
            ref={servicesRef} 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
          >
            {services.slice(0, 8).map((service, index) => {
              const Icon = service.icon;
              return (
                <Link key={index} href={service.href}>
                  <motion.div
                    className="service-card group p-4 rounded-xl bg-card/40 border border-[#8b5cf6]/10 hover:border-[#8b5cf6]/25 transition-all duration-300 h-full cursor-pointer"
                    variants={fadeInUp}
                    whileHover={{ y: -5, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] flex items-center justify-center mb-3 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground mb-1 group-hover:text-[#8b5cf6] transition-colors font-heading">
                      {service.label}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed font-body">
                      {service.description}
                    </p>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>

          <motion.div 
            className="text-center mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={fadeInUp}
          >
            <Link href="/services">
              <motion.span
                className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium text-[#8b5cf6] border border-[#8b5cf6]/30 rounded-full transition-all hover:bg-[#8b5cf6]/10 hover:border-[#8b5cf6]/50 cursor-pointer font-body"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View All Services
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="scroll-section py-16 md:py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#8b5cf6]/3 via-[#7c3aed]/5 to-transparent" />
        
        <FloatingPrism className="top-10 right-[8%] hidden lg:block opacity-50" />
        <FloatingDiamond className="bottom-20 left-[5%] hidden md:block opacity-60" />
        <Floating3DCube className="top-1/3 right-[3%] hidden xl:block opacity-40" />
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-10 md:mb-14">
            <motion.p
              className="text-[#8b5cf6] text-xs font-medium tracking-widest uppercase mb-2 font-body"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}
            >
              Why Choose Us
            </motion.p>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-foreground font-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}
            >
              Built Different,
            </motion.h2>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] bg-clip-text text-transparent font-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}
            >
              Designed to Win
            </motion.h2>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={index}>
                  <motion.div
                    className="flex gap-3 p-4 rounded-xl bg-card/40 border border-[#8b5cf6]/10 hover:border-[#8b5cf6]/25 transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-[#8b5cf6]/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#8b5cf6]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-semibold text-foreground mb-1 font-heading">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-xs md:text-sm leading-relaxed font-body">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <Testimonials />

      <section className="scroll-section py-16 md:py-24 px-4 relative">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#8b5cf6]/6 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-10 md:mb-14">
            <motion.p
              className="text-[#8b5cf6] text-xs font-medium tracking-widest uppercase mb-2 font-body"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}
            >
              Calculate Your ROI
            </motion.p>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-foreground font-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}
            >
              See Your Potential
            </motion.h2>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] bg-clip-text text-transparent font-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}
            >
              Growth
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ROICalculator />
            <div className="grid grid-cols-2 gap-4">
              <GrowthMetric label="Avg. Revenue Growth" value="350%" change={42} icon={<TrendingUp className="w-4 h-4" />} />
              <GrowthMetric label="Traffic Increase" value="5.2x" change={28} icon={<Users className="w-4 h-4" />} />
              <GrowthMetric label="Lead Generation" value="480%" change={35} icon={<Zap className="w-4 h-4" />} />
              <GrowthMetric label="Brand Visibility" value="10x" change={56} icon={<Star className="w-4 h-4" />} />
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-section py-16 md:py-24 px-4 relative">
        <FloatingDiamond className="top-10 left-[10%] hidden md:block opacity-50" />
        <FloatingPrism className="bottom-10 right-[10%] hidden lg:block opacity-40" />
        
        <div className="max-w-3xl mx-auto">
          <motion.div 
            ref={ctaRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="relative p-6 md:p-12 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9]" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20256%20256%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.8%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noise)%22%2F%3E%3C%2Fsvg%3E')] opacity-5" />
              <div className="relative z-10 text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 font-heading">
                  Ready to Accelerate
                  <br />
                  Your Growth?
                </h2>
                <p className="text-white/80 text-sm md:text-base mb-6 max-w-lg mx-auto font-body">
                  Let&apos;s discuss how Scaleo Media can help you achieve your
                  digital goals. Book a free consultation today.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/contact">
                    <motion.span
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#7c3aed] font-semibold rounded-full hover:bg-white/90 transition-colors cursor-pointer text-sm font-body"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Get Started Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.span>
                  </Link>
                  <Link href="/portfolio">
                    <motion.span
                      className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/10 transition-colors cursor-pointer text-sm font-body"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      View Our Work
                    </motion.span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
