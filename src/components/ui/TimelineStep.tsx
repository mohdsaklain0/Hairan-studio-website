"use client";

import { motion } from "framer-motion";

interface TimelineStepProps {
  step: string;
  title: string;
  description: string;
  index: number;
  isLast: boolean;
}

export default function TimelineStep({
  step,
  title,
  description,
  index,
  isLast,
}: TimelineStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative flex flex-col items-center text-center"
    >
      {/* Step number circle */}
      <div className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center mb-5 bg-black relative z-10">
        <span className="font-heading text-sm font-bold text-white/60">
          {step}
        </span>
      </div>

      {/* Connecting line (horizontal on desktop, vertical on mobile) */}
      {!isLast && (
        <>
          {/* Desktop: horizontal line */}
          <div className="hidden lg:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-px bg-white/10" />
          {/* Mobile: vertical line */}
          <div className="lg:hidden absolute top-[56px] left-1/2 -translate-x-1/2 w-px h-8 bg-white/10" />
        </>
      )}

      <h3 className="font-heading text-lg font-semibold mb-2">{title}</h3>
      <p className="text-grey text-sm leading-relaxed max-w-[200px]">
        {description}
      </p>
    </motion.div>
  );
}
