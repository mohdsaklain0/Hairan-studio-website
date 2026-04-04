"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Volume2, VolumeX } from "lucide-react";

interface ProjectCardProps {
  client: string;
  description: string;
  media: { type: "video" | "image"; src: string };
  image: string;
  index: number;
}

export default function ProjectCard({
  client,
  description,
  media,
  image,
  index,
}: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovering, setHovering] = useState(false);
  const [muted, setMuted] = useState(true);
  const isVideo = media.type === "video";

  const handleMouseEnter = () => {
    setHovering(true);
    if (isVideo && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setHovering(false);
    if (isVideo && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setMuted(true);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl overflow-hidden bg-card aspect-[16/10] cursor-pointer"
    >
      {/* Background media */}
      {isVideo ? (
        <>
          {/* Dark placeholder with play icon */}
          <div className="absolute inset-0 bg-gradient-to-br from-card to-black flex items-center justify-center">
            <div
              className={`text-center transition-all duration-500 ${
                hovering ? "opacity-0 scale-90" : "opacity-100 scale-100"
              }`}
            >
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mx-auto mb-3 group-hover:border-white/40 transition-colors">
                <Play size={24} className="text-white/50 ml-1" />
              </div>
              <p className="text-white/25 text-xs tracking-wide uppercase">
                Hover to preview
              </p>
            </div>
          </div>

          <video
            ref={videoRef}
            src={media.src}
            muted
            loop
            playsInline
            preload="none"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              hovering ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Mute/Unmute toggle — shown on hover */}
          {hovering && (
            <button
              onClick={toggleMute}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all"
              aria-label={muted ? "Unmute" : "Mute"}
            >
              {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
          )}
        </>
      ) : (
        <Image
          src={image}
          alt={client}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      )}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <h3 className="font-heading text-xl md:text-2xl font-bold mb-2 group-hover:translate-y-0 transition-transform duration-500">
          {client}
        </h3>
        <p className="text-white/50 text-sm md:text-base leading-relaxed line-clamp-2 group-hover:text-white/70 transition-colors duration-500">
          {description}
        </p>
      </div>

      {/* Hover border glow */}
      <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/10 group-hover:shadow-[inset_0_0_30px_rgba(255,255,255,0.02)] transition-all duration-700" />
    </motion.div>
  );
}
