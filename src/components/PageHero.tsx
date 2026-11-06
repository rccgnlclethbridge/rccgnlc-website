import React from "react";
import { churchInfo } from "@/data/churchData";

interface PageHeroProps {
  title: string;
  backgroundImage: string;
  overlayOpacity?: number;
  backgroundPosition?: string;
}

export default function PageHero({
  title,
  backgroundImage,
  overlayOpacity = 0.72,
  backgroundPosition = "center center",
}: PageHeroProps) {
  return (
    <section
      className="relative w-full min-h-[320px] md:min-h-[420px] flex items-center justify-center overflow-hidden bg-cover bg-no-repeat bg-[#0d120d]"
      style={{
        backgroundImage: `url("${backgroundImage}")`,
        backgroundPosition,
      }}
    >
      {/* Cinematic Dark Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/80"
        style={{ opacity: Math.min(overlayOpacity + 0.1, 0.92) }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1140px] w-full mx-auto px-5 sm:px-8 py-16 text-center">
        <p className="text-[11.5px] sm:text-[12.5px] font-bold uppercase tracking-[0.25em] text-[#8ce078] mb-3">
          {churchInfo.shortName} • Lethbridge
        </p>
        <h1 className="font-montserrat text-[32px] sm:text-[42px] md:text-[50px] font-extrabold uppercase tracking-tight text-white leading-[1.12] drop-shadow-md">
          {title}
        </h1>
      </div>
    </section>
  );
}
