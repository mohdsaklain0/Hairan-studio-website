"use client";

import Image from "next/image";

interface MarqueeRowProps {
  logos: { name: string; src: string }[];
  direction?: "left" | "right";
}

export default function MarqueeRow({
  logos,
  direction = "left",
}: MarqueeRowProps) {
  // Double the logos array for seamless infinite scroll
  const items = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="relative overflow-hidden py-8 group">
      <div
        className={`flex gap-16 items-center w-max ${
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
        } group-hover:[animation-play-state:paused]`}
      >
        {items.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={120}
              height={48}
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
