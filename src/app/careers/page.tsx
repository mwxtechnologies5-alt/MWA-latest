"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore/lite";
import { db } from "@/lib/firebase";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Twitter,
  Linkedin,
  Instagram,
  MessageSquare,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "@/shared/ui/Button";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/shared/animations/AnimatedSection";
import { ParallaxBackground } from "@/shared/animations/ParallaxSection";
import { AnimatedDonutChart, GrowthMetric } from "@/shared/ui/Charts";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "mwxtechnologies5@gmail.com",
    description: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 79058 58145",
    description: "Mon-Fri, 9am-6pm PST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Varanasi, India",
    description: "By appointment only",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "24/7 Support",
    description: "For Enterprise clients",
  },
];

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/MWXmedia", label: "Twitter" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/MWXmedia",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/MWXmedia",
    label: "Instagram",
  },
  { icon: MessageSquare, href: "https://t.me/MWXmedia", label: "Telegram" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "contactSubmissions"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("An error occurred while sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative">
      <ParallaxBackground
        overlay={false}
        className="min-h-[70vh] flex items-center justify-center bg-gradient-dark"
      >
        <div className="text-center px-6 py-32">
          <motion.span
            className="text-[#00f0ff] text-sm font-medium tracking-widest uppercase mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.span>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's Build Something
            <br />
            <span className="text-gradient">Amazing Together</span>
          </motion.h1>
          <motion.p
            className="text-xl text-white/60 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to transform your digital presence? Get in touch and let's
            discuss your project.
          </motion.p>
        </div>
      </ParallaxBackground>

      <AnimatedSection as="section" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <span className="text-[#00f0ff] text-sm font-medium tracking-widest uppercase mb-4 block">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Start Your
                <span className="text-gradient"> Journey</span>
              </h2>
              <p className="text-white/50 mb-8 leading-relaxed">
                Fill out the form below and one of our growth specialists will
                get back to you within 24 hours to discuss how we can help
                achieve your digital goals.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-muted-foreground text-sm mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-card/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#8b5cf6]/50 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-muted-foreground text-sm mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00f0ff]/50 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-muted-foreground text-sm mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00f0ff]/50 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-muted-foreground text-sm mb-2">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#00f0ff]/50 transition-colors"
                    >
                      <option value="" className="bg-[#0a0a0f]">
                        Select a service
                      </option>
                      <option value="web-design" className="bg-[#0a0a0f]">
                        Web Design & Development
                      </option>
                      <option value="mobile-apps" className="bg-[#0a0a0f]">
                        Mobile App Development
                      </option>
                      <option
                        value="digital-marketing"
                        className="bg-[#0a0a0f]"
                      >
                        Digital Marketing
                      </option>
                      <option value="pr-news" className="bg-[#0a0a0f]">
                        PR & News Publishing
                      </option>
                      <option value="social-media" className="bg-[#0a0a0f]">
                        Social Media Marketing
                      </option>
                      <option value="influencer" className="bg-[#0a0a0f]">
                        Influencer Marketing
                      </option>
                      <option value="other" className="bg-[#0a0a0f]">
                        Other
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-muted-foreground text-sm mb-2">
                    Estimated Budget
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#00f0ff]/50 transition-colors"
                  >
                    <option value="" className="bg-[#0a0a0f]">
                      Select your budget range
                    </option>
                    <option value="under-5k" className="bg-[#0a0a0f]">
                      Under $5,000
                    </option>
                    <option value="5k-15k" className="bg-[#0a0a0f]">
                      $5,000 - $15,000
                    </option>
                    <option value="15k-50k" className="bg-[#0a0a0f]">
                      $15,000 - $50,000
                    </option>
                    <option value="50k-100k" className="bg-[#0a0a0f]">
                      $50,000 - $100,000
                    </option>
                    <option value="over-100k" className="bg-[#0a0a0f]">
                      Over $100,000
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-muted-foreground text-sm mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00f0ff]/50 transition-colors resize-none"
                    placeholder="Tell us about your project, goals, and timeline..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  icon={<Send className="w-5 h-5" />}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="lg:pl-8">
                <span className="text-[#ff00aa] text-sm font-medium tracking-widest uppercase mb-4 block">
                  Contact Information
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Ways to
                  <span className="text-gradient-accent"> Reach Us</span>
                </h2>

                <StaggerContainer className="space-y-6 mb-12">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <StaggerItem key={index}>
                        <motion.div
                          className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#00f0ff]/30 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <div className="w-12 h-12 rounded-xl bg-[#00f0ff]/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-[#00f0ff]" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-1">
                              {info.title}
                            </h3>
                            <p className="text-[#00f0ff]">{info.value}</p>
                            <p className="text-white/40 text-sm">
                              {info.description}
                            </p>
                          </div>
                        </motion.div>
                      </StaggerItem>
                    );
                  })}
                </StaggerContainer>

                <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Connect on Social
                  </h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#ff00aa]/50 hover:bg-[#ff00aa]/10 transition-all"
                          whileHover={{ scale: 1.1, y: -3 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Icon className="w-5 h-5 text-white/70" />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="py-16 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="text-[#8b5cf6] text-sm font-medium tracking-widest uppercase mb-4 block">
              Why Work With Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Client Success
              <span className="text-gradient"> Metrics</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-md mx-auto">
            <AnimatedDonutChart
              value={24}
              maxValue={48}
              title="Avg Response Time"
              subtitle="Hours"
              color="#8b5cf6"
            />
            <AnimatedDonutChart
              value={98}
              title="Client Satisfaction"
              subtitle="Based on surveys"
              color="#a78bfa"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        as="section"
        className="py-32 px-6 relative bg-[#0d0d14]"
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Our Location</h2>
          </AnimatedSection>
          <div className="rounded-2xl overflow-hidden border border-white/10 h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.17154290045!2d-122.50764027935082!3d37.75769134121908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
