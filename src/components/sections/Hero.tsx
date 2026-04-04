"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import GradientMesh from "@/components/effects/GradientMesh";
import { ChevronDown } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <GradientMesh />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center"
      >
        <motion.p
          variants={itemVariants}
          className="text-grey text-sm md:text-base uppercase tracking-[0.2em] mb-6"
        >
          AI-Powered Creative Agency
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight"
        >
          Where AI Meets
          <br />
          <span className="text-white/80">Imagination</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-4 font-heading text-lg md:text-xl lg:text-2xl font-medium text-white/60"
        >
          We Create What Doesn&apos;t Exist Yet.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="mt-6 text-grey text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
        >
          AI-powered creative agency building brand films, ad campaigns, and
          visual content for D2C and consumer brands — at 10x the speed.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button href="#work" variant="primary" size="lg">
            See Our Work
          </Button>
          <Button href="#contact" variant="outline" size="lg">
            Get in Touch
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/60 transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.a>
    </section>
  );
}
