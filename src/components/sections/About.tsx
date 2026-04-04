"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import CountUp from "@/components/ui/CountUp";
import { STATS } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Born to Create the Impossible" />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-grey text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center mb-20"
        >
          Hairan Studio is an AI-powered creative agency building the future of
          brand storytelling. We combine cutting-edge artificial intelligence
          with bold creative thinking to produce brand films, ad campaigns, and
          visual content for D2C and consumer brands — at 10x the speed and a
          fraction of traditional production costs. Born in Gurugram, powered by
          AI, trusted by leading brands.
        </motion.p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-3xl mx-auto">
          {STATS.map((stat, i) => (
            <CountUp key={i} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
