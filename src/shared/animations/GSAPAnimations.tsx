"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  animation?: "chars" | "words" | "lines";
  trigger?: boolean;
}

export function SplitText({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  stagger = 0.03,
  animation = "chars",
  trigger = true,
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!containerRef.current || hasAnimated.current) return;

    const container = containerRef.current;
    const text = children;

    let elements: HTMLSpanElement[] = [];

    if (animation === "chars") {
      container.innerHTML = "";
      const words = text.split(" ");
      words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement("span");
        wordSpan.style.display = "inline-block";
        wordSpan.style.whiteSpace = "nowrap";
        
        word.split("").forEach((char) => {
          const charSpan = document.createElement("span");
          charSpan.textContent = char;
          charSpan.style.display = "inline-block";
          charSpan.style.opacity = "0";
          charSpan.style.transform = "translateY(50px) rotateX(-90deg)";
          wordSpan.appendChild(charSpan);
          elements.push(charSpan);
        });
        
        container.appendChild(wordSpan);
        if (wordIndex < words.length - 1) {
          container.appendChild(document.createTextNode(" "));
        }
      });
    } else if (animation === "words") {
      container.innerHTML = "";
      text.split(" ").forEach((word, index, arr) => {
        const wordSpan = document.createElement("span");
        wordSpan.textContent = word;
        wordSpan.style.display = "inline-block";
        wordSpan.style.opacity = "0";
        wordSpan.style.transform = "translateY(30px)";
        container.appendChild(wordSpan);
        elements.push(wordSpan);
        if (index < arr.length - 1) {
          container.appendChild(document.createTextNode(" "));
        }
      });
    } else {
      container.innerHTML = "";
      const lineSpan = document.createElement("span");
      lineSpan.textContent = text;
      lineSpan.style.display = "block";
      lineSpan.style.opacity = "0";
      lineSpan.style.transform = "translateY(100%)";
      container.appendChild(lineSpan);
      elements.push(lineSpan);
    }

    const animateElements = () => {
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration,
        stagger,
        delay,
        ease: "power4.out",
      });
      hasAnimated.current = true;
    };

    if (trigger) {
      ScrollTrigger.create({
        trigger: container,
        start: "top 85%",
        onEnter: animateElements,
        once: true,
      });
    } else {
      animateElements();
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [children, animation, delay, duration, stagger, trigger]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ perspective: "1000px" }}
    >
      {children}
    </div>
  );
}

interface ParallaxTextProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export function ParallaxText({ children, className = "", speed = 0.5 }: ParallaxTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      y: () => speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export function RevealText({ children, className = "", direction = "up" }: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const directions = {
      up: { y: 50, x: 0 },
      down: { y: -50, x: 0 },
      left: { y: 0, x: 50 },
      right: { y: 0, x: -50 },
    };

    gsap.fromTo(
      ref.current,
      { opacity: 0, ...directions[direction] },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          once: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
