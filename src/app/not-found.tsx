"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: [0, -5, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          className="mb-8"
        >
          <Image
            src="/images/logo-icon-white.png"
            alt="Hairan Studio"
            width={80}
            height={80}
            className="mx-auto opacity-60"
          />
        </motion.div>

        <h1 className="font-heading text-7xl md:text-9xl font-extrabold text-white/10 mb-4">
          404
        </h1>
        <p className="font-heading text-xl md:text-2xl font-semibold mb-2">
          Page Not Found
        </p>
        <p className="text-grey text-sm mb-8 max-w-sm mx-auto">
          Looks like this page doesn&apos;t exist yet. Maybe our AI hasn&apos;t
          created it.
        </p>
        <Button href="/" variant="outline">
          Back to Home
        </Button>
      </motion.div>
    </div>
  );
}
