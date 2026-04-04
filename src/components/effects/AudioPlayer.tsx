"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Auto-play on first user interaction (browsers block autoplay without interaction)
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        audioRef.current.volume = 0.3;
        audioRef.current.play().then(() => {
          setPlaying(true);
          setHasInteracted(true);
        }).catch(() => {
          // Autoplay blocked — user will need to click toggle
          setHasInteracted(true);
        });
      }
    };

    const events = ["click", "touchstart", "keydown", "scroll"];
    events.forEach((e) => window.addEventListener(e, handleFirstInteraction, { once: true }));

    return () => {
      events.forEach((e) => window.removeEventListener(e, handleFirstInteraction));
    };
  }, [hasInteracted]);

  const toggle = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {});
      setPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/ambient.wav" loop preload="auto" />

      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, type: "spring", stiffness: 200 }}
        onClick={toggle}
        className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
        aria-label={playing ? "Mute background music" : "Play background music"}
      >
        <AnimatePresence mode="wait">
          {playing ? (
            <motion.div
              key="playing"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="relative"
            >
              <Volume2 size={18} />
              {/* Animated sound bars */}
              <div className="absolute -top-1 -right-1 flex gap-[2px]">
                <span className="w-[2px] h-2 bg-white/60 rounded-full animate-[pulse-slow_0.8s_ease-in-out_infinite]" />
                <span className="w-[2px] h-3 bg-white/60 rounded-full animate-[pulse-slow_0.8s_ease-in-out_infinite_0.2s]" />
                <span className="w-[2px] h-1.5 bg-white/60 rounded-full animate-[pulse-slow_0.8s_ease-in-out_infinite_0.4s]" />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="muted"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <VolumeX size={18} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
