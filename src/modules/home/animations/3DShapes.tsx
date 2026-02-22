"use client";

import { motion } from "framer-motion";

export function Floating3DCube({ className }: { className?: string }) {
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

export function Floating3DPyramid({ className }: { className?: string }) {
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

export function Floating3DTorus({ className }: { className?: string }) {
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

export function FloatingOctahedron({ className }: { className?: string }) {
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

export function FloatingPrism({ className }: { className?: string }) {
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

export function FloatingDiamond({ className }: { className?: string }) {
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
