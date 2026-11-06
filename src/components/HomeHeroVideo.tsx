"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { churchInfo } from "@/data/churchData";

export default function HomeHeroVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleSound = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <section className="relative w-full min-h-[580px] sm:min-h-[650px] md:min-h-[740px] lg:min-h-[85vh] flex flex-col justify-between overflow-hidden bg-[#070b07]">
      {/* ===================================================================
          FULL-BLEED ENHANCED REEL: Framed at top 14-18% so faces & expressions shine
          =================================================================== */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="auto"
        poster="/images/hero-merged-poster.jpg"
        onLoadedData={() => setHasLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover object-[center_14%] sm:object-[center_16%] md:object-[center_18%] scale-[1.01] transition-opacity duration-1000"
        aria-hidden="true"
      >
        <source src="/videos/nlc-worship-merged.mp4" type="video/mp4" />
      </video>

      {/* Instant High-Resolution Fallback Poster */}
      <div
        className={`absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-1000 pointer-events-none ${
          hasLoaded ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: 'url("/images/hero-merged-poster.jpg")',
          backgroundPosition: "center 18%",
        }}
      />

      {/* ===================================================================
          SUBTLE CINEMATIC VIGNETTE: Keeps 80% of the video canvas clear & vivid
          =================================================================== */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/80 pointer-events-none" />

      {/* Top Spacer */}
      <div className="h-8 md:h-12 pointer-events-none" />

      {/* ===================================================================
          CENTER HERO CONTENT: Uncluttered Transformation Church Editorial Style
          =================================================================== */}
      <div className="relative z-10 max-w-[1100px] w-full mx-auto px-5 py-12 md:py-16 flex-1 flex flex-col items-center justify-center text-center">
        {/* Clean Tracked Uppercase Overline */}
        <p className="text-[12px] sm:text-[13px] md:text-[14px] font-bold tracking-[0.28em] uppercase text-[#8ce078] mb-3.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          WELCOME TO {churchInfo.name}
        </p>

        {/* Monumental Display Headline */}
        <h1 className="font-montserrat text-[34px] sm:text-[48px] md:text-[60px] lg:text-[68px] font-extrabold uppercase leading-[1.06] tracking-tight text-white max-w-[920px] mb-5 drop-shadow-[0_6px_24px_rgba(0,0,0,0.75)]">
          Come and Experience <br className="hidden sm:inline" />
          <span className="text-white">A New Life.</span>
        </h1>

        {/* Concise 1-Line Mission Subhead */}
        <p className="text-[15.5px] sm:text-[17.5px] md:text-[19px] text-white/95 max-w-[640px] mb-9 font-normal leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          A place where people reconcile with God and enjoy life in abundance.
        </p>

        {/* 2 Crisp, High-Impact Pill Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact?tab=visit"
            className="inline-flex items-center gap-2.5 bg-[#4F7942] hover:bg-[#3d6032] text-white font-montserrat text-[14px] md:text-[15px] font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-200 shadow-[0_8px_24px_rgba(79,121,66,0.45)] hover:shadow-[0_12px_30px_rgba(79,121,66,0.65)] hover:-translate-y-0.5"
          >
            <span>Plan A Visit</span>
            <span>→</span>
          </Link>

          <Link
            href="/sermons"
            className="inline-flex items-center gap-2.5 bg-white/15 hover:bg-white hover:text-[#141814] backdrop-blur-md border border-white/60 text-white font-montserrat text-[14px] md:text-[15px] font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            <span>Watch Online</span>
          </Link>
        </div>

        {/* Subtle Secondary Link for Free Sunday Rides */}
        <div className="mt-5">
          <Link
            href="/rides"
            className="inline-flex items-center gap-2 text-[13.5px] font-medium text-white/85 hover:text-white transition-colors drop-shadow"
          >
            <span>Need a free ride to Sunday service?</span>
            <span className="underline underline-offset-4 font-semibold text-[#8ce078]">
              Book a Ride →
            </span>
          </Link>
        </div>
      </div>

      {/* Discreet Corner Circular Audio Button */}
      <div className="relative z-20 max-w-[1220px] w-full mx-auto px-5 pb-4 flex justify-end pointer-events-none">
        <button
          type="button"
          onClick={toggleSound}
          aria-label={isMuted ? "Unmute worship audio" : "Mute worship audio"}
          title={isMuted ? "Unmute worship audio" : "Mute worship audio"}
          className="pointer-events-auto inline-flex items-center gap-2 bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/25 text-white/90 hover:text-white px-3.5 py-2 rounded-full transition-all cursor-pointer shadow-lg"
        >
          {isMuted ? (
            <>
              <svg
                className="w-4 h-4 text-white/85"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                />
              </svg>
              <span className="text-[11.5px] font-semibold uppercase tracking-wider hidden sm:inline">
                Sound Off
              </span>
            </>
          ) : (
            <>
              <svg
                className="w-4 h-4 text-[#8ce078] animate-pulse"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              </svg>
              <span className="text-[11.5px] font-semibold uppercase tracking-wider text-[#8ce078] hidden sm:inline">
                Sound On
              </span>
            </>
          )}
        </button>
      </div>

      {/* ===================================================================
          TRANSFORMATION CHURCH-STYLE DOCKED BOTTOM SERVICE & LOCATION BAR
          =================================================================== */}
      <div className="relative z-20 w-full bg-[#0d120d]/95 backdrop-blur-md border-t border-white/10 text-white">
        <div className="max-w-[1220px] mx-auto px-5 sm:px-8 py-4 flex flex-col lg:flex-row items-center justify-between gap-3 text-center lg:text-left">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-1.5 text-[12.5px] sm:text-[13.5px]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4F7942]" />
              <span className="text-white/60 uppercase tracking-wider font-semibold text-[11.5px]">
                Sundays:
              </span>
              <strong className="font-semibold text-white">
                9:30 AM (Sunday School &amp; Worship)
              </strong>
            </div>

            <span className="hidden sm:inline text-white/20">|</span>

            <div className="flex items-center gap-1.5">
              <span className="text-white/60 uppercase tracking-wider font-semibold text-[11.5px]">
                Wednesdays:
              </span>
              <strong className="font-semibold text-white">
                7:00 PM (Bible Study &amp; 2nd Wed Communion)
              </strong>
            </div>

            <span className="hidden md:inline text-white/20">|</span>

            <div className="flex items-center gap-1.5">
              <span className="text-white/60 uppercase tracking-wider font-semibold text-[11.5px]">
                Hilltop Youth:
              </span>
              <a
                href={churchInfo.hilltopChurch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#8ce078] hover:underline"
              >
                Sundays 12:00 PM ↗
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[12.5px] sm:text-[13px] text-white/80 shrink-0">
            <svg
              className="w-4 h-4 text-[#8ce078] shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>234 13 Street North, Lethbridge, AB</span>
          </div>
        </div>
      </div>
    </section>
  );
}
