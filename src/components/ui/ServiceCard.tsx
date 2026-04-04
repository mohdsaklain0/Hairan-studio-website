"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

export default function ServiceCard({
  title,
  description,
  icon,
  index,
}: ServiceCardProps) {
  const IconComponent =
    (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[icon] ??
    LucideIcons.Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative p-6 md:p-8 rounded-2xl bg-muted border border-white/5 hover:border-white/15 transition-all duration-500 overflow-hidden"
    >
      {/* Subtle gradient glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.04)_0%,transparent_60%)]" />

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-white/10 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-500">
          <IconComponent size={24} className="text-white/60 group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="font-heading text-lg font-semibold mb-3 group-hover:text-white transition-colors duration-300">{title}</h3>
        <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-300">{description}</p>
      </div>
    </motion.div>
  );
}
