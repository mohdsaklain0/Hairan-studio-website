"use client";

import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  size?: "default" | "lg";
  href?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "default",
  href,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-heading font-semibold tracking-wide transition-all duration-300 rounded-full cursor-pointer";

  const variants = {
    primary:
      "bg-white text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-[1.02]",
    outline:
      "border border-white/30 text-white hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:scale-[1.02]",
  };

  const sizes = {
    default: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
