"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  icon,
  iconPosition = "right",
  disabled = false,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full overflow-hidden group cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]",
    secondary:
      "bg-white/10 text-white border border-[#8b5cf6]/20 hover:bg-[#8b5cf6]/10 hover:border-[#8b5cf6]/40",
    outline:
      "bg-transparent text-[#8b5cf6] border border-[#8b5cf6]/50 hover:bg-[#8b5cf6]/10 hover:border-[#8b5cf6]",
    ghost: "bg-transparent text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm gap-2",
    md: "px-7 py-3 text-base gap-2",
    lg: "px-9 py-4 text-lg gap-3",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  } ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="inline-flex transition-transform duration-300 group-hover:-translate-x-1">
          {icon}
        </span>
      )}
      <span className="inline-flex items-center gap-2">
        {children}
        {icon && iconPosition === "right" && (
          <span className="inline-flex transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
        {!icon && variant === "primary" && (
          <ArrowRight className="w-4 h-4 inline-flex transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href}>
        <motion.span
          className={combinedClassName}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {content}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {content}
    </motion.button>
  );
}
