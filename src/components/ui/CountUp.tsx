"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useInView, motion } from "framer-motion";

interface CountUpProps {
  value: string;
  label: string;
}

export default function CountUp({ value, label }: CountUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Parse numeric part and suffix
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1]) : 0;
  const suffix = match ? match[2] : value;

  const [displayValue, setDisplayValue] = useState(`0${suffix}`);

  const animate = useCallback(() => {
    const duration = 1800;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setDisplayValue(`${current}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [target, suffix]);

  useEffect(() => {
    if (isInView) animate();
  }, [isInView, animate]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
        {displayValue}
      </div>
      <p className="mt-3 text-grey text-sm md:text-base">{label}</p>
    </motion.div>
  );
}
