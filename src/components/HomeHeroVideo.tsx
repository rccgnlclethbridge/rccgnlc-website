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
    <section className="relative w-full min-h-[620px] sm:min-h-[700px] md:min-h-[760px] lg:min-h-[84vh] flex flex-col justify-between overflow-hidden bg-[#070b07]">
      {/* ===================================================================
          ENHANCED MERGED REEL: Anchored to TOP 16-20% so heads & faces are in full view
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
        className="absolute inset-0 w-full h-full object-cover object-[center_14%] sm:object-[center_17%] md:object-[center_20%] scale-[1.01] transition-opacity duration-1000"
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
          backgroundPosition: "center 20%",
        }}
      />

      {/* ===================================================================
          PROFESSIONAL CINEMATIC VIGNETTE OVERLAY
          - Lighter center (via-black/25) keeps faces bright and natural
          - Deepened top & bottom ensures navigation and typography pop
          =================================================================== */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/25 to-black/85 pointer-events-none" />

      {/* Subtle top spacer */}
      <div className="h-6 md:h-10 pointer-events-none" />

      {/* ===================================================================
          MAIN HERO CONTENT: Clean, elevated, spacious typography
          =================================================================== */}
      <div className="relative z-10 max-w-[1140px] w-full mx-auto px-5 py-6 sm:py-10 flex-1 flex flex-col items-center justify-center text-center">
        {/* Subtle Church Kicker */}
        <div className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 text-white text-[12px] md:text-[13px] font-medium tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-5 shadow-sm transition-colors">
          <span className="w-2 h-2 rounded-full bg-[#5cb85c] animate-pulse" />
          <span>RCCG NEW LIFE CHAPEL LETHBRIDGE</span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-[32px] sm:text-[42px] md:text-[50px] lg:text-[56px] font-bold leading-[1.18] text-white max-w-[920px] mb-5 tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.75)]">
          A place where people reconcile with God and enjoy life in abundance
        </h1>

        {/* Subtitle with Service Times & Address */}
        <p className="text-[15px] sm:text-[17px] md:text-[18px] text-white/95 max-w-[660px] mb-8 font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          Join us every Sunday at <strong className="font-semibold text-white">9:30 AM</strong> at{" "}
          <span className="text-white">234 13 Street North, Lethbridge</span>. Experience vibrant worship, biblical truth, and caring fellowship.
        </p>

        {/* Refined Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          <Link
            href="/contact?tab=visit"
            className="inline-flex items-center gap-2 bg-[#4F7942] hover:bg-[#3d6032] text-white font-montserrat text-[14.5px] md:text-[15.5px] font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-[0_8px_20px_rgba(79,121,66,0.4)] hover:shadow-[0_12px_28px_rgba(79,121,66,0.55)] hover:scale-[1.02]"
          >
            <span>PLAN YOUR VISIT</span>
            <span className="text-[17px]">→</span>
          </Link>

          <Link
            href="/rides"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/50 text-white font-montserrat text-[14.5px] md:text-[15.5px] font-semibold px-6 py-3.5 rounded-full transition-all duration-200 shadow-md hover:scale-[1.02]"
          >
            <svg
              className="w-4 h-4 text-white/90"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>NEED A SUNDAY RIDE?</span>
          </Link>

          <Link
            href="/sermons"
            className="inline-flex items-center gap-2 bg-black/35 hover:bg-black/55 backdrop-blur-md border border-white/25 text-white/90 hover:text-white font-montserrat text-[14.5px] md:text-[15.5px] font-medium px-5 py-3.5 rounded-full transition-all duration-200"
          >
            <span>WATCH ONLINE</span>
          </Link>
        </div>
      </div>

      {/* ===================================================================
          STREAMLINED BOTTOM SERVICE BAR: Clean glassmorphic strip
          =================================================================== */}
      <div className="relative z-10 w-full max-w-[1140px] mx-auto px-5 pb-5 sm:pb-7">
        <div className="bg-black/50 hover:bg-black/60 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 text-white shadow-2xl transition-colors">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
            {/* 1. Monthly Celebration */}
            <div className="sm:pr-4 pt-1.5 sm:pt-0">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#5cb85c]">
                Monthly Gathering
              </span>
              <h3 className="text-[15px] font-bold text-white mt-0.5">
                Celebration Service
              </h3>
              <p className="text-[13px] text-white/80 leading-snug mt-0.5">
                First Sunday of every Month @ 9:30 AM
              </p>
            </div>

            {/* 2. Sunday Worship */}
            <div className="sm:px-4 pt-3 sm:pt-0">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#5cb85c]">
                Weekly Worship
              </span>
              <h3 className="text-[15px] font-bold text-white mt-0.5">
                Sunday School &amp; Worship
              </h3>
              <p className="text-[13px] text-white/80 leading-snug mt-0.5">
                Every Sunday @ 9:30 AM (In-Person &amp; Live)
              </p>
            </div>

            {/* 3. Youth & Young Adults */}
            <div className="sm:px-4 pt-3 sm:pt-0">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#5cb85c]">
                  Youth &amp; Students
                </span>
                <a
                  href={churchInfo.hilltopChurch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-white/90 hover:text-white bg-white/20 px-2 py-0.5 rounded font-medium transition-colors"
                >
                  Visit ↗
                </a>
              </div>
              <h3 className="text-[15px] font-bold text-white mt-0.5">
                The Hilltop Church
              </h3>
              <p className="text-[13px] text-white/80 leading-snug mt-0.5">
                Every Sunday @ 12:00 PM (Youth Expression)
              </p>
            </div>

            {/* 4. Mid-Week Bible Study */}
            <div className="sm:pl-4 pt-3 sm:pt-0">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#5cb85c]">
                Mid-Week Growth
              </span>
              <h3 className="text-[15px] font-bold text-white mt-0.5">
                Digging Deep Bible Study
              </h3>
              <p className="text-[13px] text-white/80 leading-snug mt-0.5">
                Wednesdays @ 7:00 PM (In-Person &amp; Online)
              </p>
            </div>
          </div>
        </div>

        {/* Minimalist Floating Controls: Subtle audio toggle & live status */}
        <div className="mt-3 flex items-center justify-between text-xs text-white/75">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-black/45 backdrop-blur-sm border border-white/15 px-3 py-1 rounded-full text-white/90">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5cb85c] animate-pulse" />
              <span>Live Sanctuary Highlights</span>
            </span>
          </div>

          {/* Audio Mute / Unmute Button */}
          <button
            type="button"
            onClick={toggleSound}
            className="inline-flex items-center gap-2 bg-black/45 hover:bg-black/75 backdrop-blur-sm border border-white/20 text-white/90 hover:text-white px-3.5 py-1.5 rounded-full transition-all cursor-pointer shadow-md"
            title={isMuted ? "Unmute church worship" : "Mute audio"}
          >
            {isMuted ? (
              <>
                <svg
                  className="w-3.5 h-3.5 text-white/75"
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
                <span>Sound Off</span>
              </>
            ) : (
              <>
                <svg
                  className="w-3.5 h-3.5 text-[#5cb85c] animate-pulse"
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
                <span className="text-[#5cb85c] font-medium">Playing Audio</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Clean Bottom Geometric Transition */}
      <div
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none flex justify-center z-20"
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-[30%] md:w-[40%] h-[16px] md:h-[26px] block"
        >
          <path fill="#ffffff" d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z" />
        </svg>
      </div>
    </section>
  );
}
