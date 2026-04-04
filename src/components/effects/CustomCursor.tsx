"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function CustomCursor() {
  const isDesktop = useMediaQuery("(pointer: fine)");
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 300 };
  const dotX = useSpring(0, springConfig);
  const dotY = useSpring(0, springConfig);
  const circleX = useSpring(0, { damping: 20, stiffness: 150 });
  const circleY = useSpring(0, { damping: 20, stiffness: 150 });

  useEffect(() => {
    if (!isDesktop) return;

    const move = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      circleX.set(e.clientX);
      circleY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, [role='button'], input, textarea, select")
      ) {
        setHovering(true);
      }
    };

    const handleOut = () => setHovering(false);
    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    // Hide default cursor
    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
      document.body.style.cursor = "";
    };
  }, [isDesktop, dotX, dotY, circleX, circleY, visible]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        style={{ x: dotX, y: dotY }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-all duration-200 ${
            visible ? "opacity-100" : "opacity-0"
          } ${hovering ? "w-2 h-2" : "w-1.5 h-1.5"}`}
        />
      </motion.div>

      {/* Circle follower */}
      <motion.div
        style={{ x: circleX, y: circleY }}
        className="fixed top-0 left-0 z-[9998] pointer-events-none mix-blend-difference"
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 transition-all duration-300 ${
            visible ? "opacity-100" : "opacity-0"
          } ${hovering ? "w-12 h-12 border-white/80" : "w-8 h-8"}`}
        />
      </motion.div>
    </>
  );
}
