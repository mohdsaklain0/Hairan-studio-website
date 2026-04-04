"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  index: number;
}

export default function TeamCard({
  name,
  role,
  bio,
  image,
  index,
}: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="group text-center"
    >
      {/* Photo */}
      <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 rounded-2xl overflow-hidden bg-card transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.06)] group-hover:scale-[1.02]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="224px"
        />
      </div>

      {/* Info */}
      <h3 className="font-heading text-lg font-bold">{name}</h3>
      <p className="text-grey text-sm mt-1">{role}</p>
      <p className="text-grey/60 text-xs mt-2 max-w-[220px] mx-auto">
        {bio}
      </p>
    </motion.div>
  );
}
