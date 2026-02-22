"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

type Testimonial = {
  text: string;
  name: string;
  handle: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    text: "MWX Technologies transformed our digital presence completely. Their strategic approach helped us achieve 10x growth in just 6 months.",
    name: "Sarah Chen",
    handle: "@sarah_chen",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    text: "The teamâ€™s expertise in Web3 marketing is unmatched. We were trending on Twitter within weeks.",
    name: "Michael Torres",
    handle: "@miketee",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    text: "From app development to marketing, MWX delivered excellence. Our user base grew 500% in one quarter.",
    name: "David Kim",
    handle: "@davidkim_dev",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    text: "MWX Technologies helped us build credibility through PR that directly led to our Series A funding.",
    name: "Emily Watson",
    handle: "@emwatson",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    text: "Their understanding of fintech and security is phenomenal. The mobile app exceeded expectations.",
    name: "James Rivera",
    handle: "@james_rivera",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop",
  },
  {
    text: "A truly data-driven agency. MWX helped us scale sustainably without burning budget.",
    name: "Jessica Lee",
    handle: "@jess_lee",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
  },

  // ðŸ‡®ðŸ‡³ Indian Reviews
  {
    text: "MWX Technologies played a crucial role in scaling our SaaS product globally. Highly professional team.",
    name: "Aarav Sharma",
    handle: "@aaravsharma",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328f7d0b?w=100&h=100&fit=crop",
  },
  {
    text: "Their marketing strategy helped us penetrate international markets within months.",
    name: "Ritika Malhotra",
    handle: "@ritika_m",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
  },
  {
    text: "MWXâ€™s product and growth team is world-class. Transparent, fast, and reliable.",
    name: "Kunal Verma",
    handle: "@kunalverma",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&h=100&fit=crop",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <motion.div
    className="relative p-6 rounded-2xl bg-card/40 border border-white/5 backdrop-blur-md"
    whileHover={{
      scale: 1.01,
      boxShadow: "0 8px 24px rgba(139,92,246,0.08)",
      borderColor: "rgba(139,92,246,0.25)",
    }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
  >
    <p className="text-sm text-foreground/80 leading-relaxed mb-4">
      {testimonial.text}
    </p>

    <div className="flex items-center gap-3">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-9 h-9 rounded-full object-cover border border-primary/40"
      />
      <div>
        <p className="text-sm font-semibold">{testimonial.name}</p>
        <p className="text-xs text-muted-foreground">{testimonial.handle}</p>
      </div>
    </div>
  </motion.div>
);

const TestimonialColumn = ({
  items,
  duration,
  reverse = false,
}: {
  items: Testimonial[];
  duration: number;
  reverse?: boolean;
}) => (
  <motion.div
    className="flex flex-col gap-4"
    animate={{ y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
    transition={{
      duration,
      ease: "linear",
      repeat: Infinity,
    }}
  >
    {[...items, ...items].map((t, i) => (
      <TestimonialCard key={i} testimonial={t} />
    ))}
  </motion.div>
);

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12] to-[#08080f] -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs tracking-widest uppercase text-[#a78bfa] mb-2">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Loved by Teams
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] bg-clip-text text-transparent">
            Worldwide
          </h2>
        </div>

        <div className="relative h-[520px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          <TestimonialColumn items={testimonials.slice(0, 3)} duration={26} />
          <TestimonialColumn items={testimonials.slice(3, 6)} duration={32} reverse />
          <div className="hidden lg:block">
            <TestimonialColumn items={testimonials.slice(6, 9)} duration={28} />
          </div>
        </div>
      </div>
    </section>
  );
}
