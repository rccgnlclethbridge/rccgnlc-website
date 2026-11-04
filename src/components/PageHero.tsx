import React from "react";

interface PageHeroProps {
  title: string;
  backgroundImage: string;
  overlayOpacity?: number;
  backgroundPosition?: string;
}

export default function PageHero({
  title,
  backgroundImage,
  overlayOpacity = 0.78,
  backgroundPosition = "center center",
}: PageHeroProps) {
  return (
    <section
      className="relative w-full min-h-[350px] md:min-h-[62vh] flex items-center justify-center overflow-hidden bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url("${backgroundImage}")`,
        backgroundPosition,
      }}
    >
      {/* Dark Background Overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[800px] w-full mx-auto px-5 py-16 text-center md:text-left">
        <h1 className="text-[25px] md:text-[30px] font-semibold text-white leading-tight">
          {title}
        </h1>
      </div>

      {/* Elementor Wave-Brush Bottom Shape Divider */}
      <div
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none"
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 283.5 27.8"
          preserveAspectRatio="none"
          className="w-full h-[28px] md:h-[42px] block rotate-180"
        >
          <path
            fill="#ffffff"
            d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z"
          />
        </svg>
      </div>
    </section>
  );
}
