"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { churchInfo } from "@/data/churchData";

interface ReelOption {
  id: string;
  label: string;
  src: string;
  poster: string;
}

const HERO_REELS: ReelOption[] = [
  {
    id: "DeES_RKNxVp",
    label: "Anniversary Praise & Joy",
    src: "/videos/DeES_RKNxVp.mp4",
    poster: "/images/instagram/DeES_RKNxVp.jpg",
  },
  {
    id: "DX3SLsFtiif",
    label: "Sundays High Praise",
    src: "/videos/DX3SLsFtiif.mp4",
    poster: "/images/instagram/DX3SLsFtiif.jpg",
  },
  {
    id: "DE2iDkbvxUL",
    label: "Campus Night of Worship",
    src: "/videos/DE2iDkbvxUL.mp4",
    poster: "/images/instagram/DE2iDkbvxUL.jpg",
  },
];

export default function HomeHeroVideo() {
  const [selectedReelIndex, setSelectedReelIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const currentReel = HERO_REELS[selectedReelIndex];

  // Keep video play status synced when switching reels
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }
  }, [selectedReelIndex]);

  const toggleSound = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleNextReel = () => {
    setSelectedReelIndex((prev) => (prev + 1) % HERO_REELS.length);
  };

  return (
    <section className="relative w-full min-h-[520px] md:min-h-[600px] lg:min-h-[640px] flex items-center justify-center py-[70px] md:py-[85px] overflow-hidden bg-black">
      {/* Dynamic Background Video Reel */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
        poster={currentReel.poster || "/images/hero-home.jpg"}
        onLoadedData={() => setHasLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 scale-[1.02]"
        aria-hidden="true"
      >
        <source src={currentReel.src} type="video/mp4" />
      </video>

      {/* Fallback Poster Background in case video is buffering or disabled */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 pointer-events-none ${
          hasLoaded ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: `url("${currentReel.poster || "/images/hero-home.jpg"}")`,
        }}
      />

      {/* Cinematic Dark Gradient Overlay (Keeps text & cards 100% legible) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80 pointer-events-none" />

      {/* Subtle Pattern Grid Accent for Modern Aesthetics */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1140px] w-full mx-auto px-5">
        <div className="max-w-[820px] mx-auto text-center">
          {/* Subtle Live Reel Indicator Pill */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white/95 text-[12px] font-medium px-3.5 py-1 rounded-full mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#5cb85c] animate-pulse" />
            <span>Worship &amp; Fellowship in Action</span>
            <span className="text-white/40">•</span>
            <span className="text-white/80">{currentReel.label}</span>
          </div>

          <h1 className="text-[28px] sm:text-[34px] md:text-[42px] font-semibold leading-[1.3] md:leading-[1.25] text-white mb-6 drop-shadow-md">
            A place where people reconcile with God and enjoy life in abundance
          </h1>

          <p className="text-[15px] md:text-[17px] text-white/90 max-w-[640px] mx-auto mb-9 font-normal leading-relaxed drop-shadow-xs">
            Welcome to RCCG New Life Chapel Lethbridge. Join us this Sunday for
            transforming worship, practical truth, and family-like fellowship.
          </p>

          {/* 2 Green Infoboxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left mb-8 max-w-[760px] mx-auto">
            {/* Celebration Service Card */}
            <div className="bg-[#4F7942]/95 backdrop-blur-md border border-white/20 hover:border-white/50 rounded-[12px] p-6 text-white transition-all duration-300 hover:shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h2 className="text-[18px] font-bold leading-[1.2] text-white">
                    Celebration Service
                  </h2>
                  <span className="text-[11px] bg-white/20 px-2 py-0.5 rounded font-medium shrink-0">
                    Monthly
                  </span>
                </div>
                <p className="text-[14px] font-normal leading-[1.6] text-white/95">
                  Join us every first Sunday of the month starting with Sunday
                  School at 9:30 AM for a spirit-filled celebration service.
                </p>
              </div>
            </div>

            {/* Youth & Young Adults -> The Hilltop Church Card */}
            <a
              href={churchInfo.hilltopChurch.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#4F7942]/95 backdrop-blur-md border border-white/20 hover:border-white/60 rounded-[12px] p-6 text-white transition-all duration-300 hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h2 className="text-[18px] font-bold leading-[1.2] text-white group-hover:underline">
                    Youth &amp; Young Adults — Hilltop
                  </h2>
                  <span className="text-[11px] bg-white/25 px-2 py-0.5 rounded font-medium shrink-0 group-hover:bg-white group-hover:text-[#4F7942] transition-colors">
                    Visit ↗
                  </span>
                </div>
                <p className="text-[14px] font-normal leading-[1.6] text-white/95">
                  Looking for our youth &amp; young adults expression? Join{" "}
                  <strong className="font-semibold text-white">The Hilltop Church</strong>{" "}
                  every Sunday at 12:00 PM!
                </p>
              </div>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="pt-1 pb-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?tab=visit"
              className="inline-flex items-center gap-2 bg-[#4F7942] hover:bg-[#3d6032] border border-transparent text-white font-montserrat text-[15px] font-semibold px-7 py-3.5 rounded-[6px] transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              <span>PLAN YOUR VISIT</span>
              <span>→</span>
            </Link>
            <Link
              href="/rides"
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/50 text-white font-montserrat text-[15px] font-semibold px-7 py-3.5 rounded-[6px] transition-all duration-200 shadow-md hover:scale-[1.02]"
            >
              <span>NEED A SUNDAY RIDE?</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Modern Interactive Video Controls (Bottom Bar) */}
      <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between pointer-events-none">
        {/* Switch Reel Button */}
        <button
          type="button"
          onClick={handleNextReel}
          className="pointer-events-auto inline-flex items-center gap-2 bg-black/45 hover:bg-black/75 backdrop-blur-md border border-white/20 text-white/90 hover:text-white text-[12px] font-medium px-3.5 py-1.5 rounded-full transition-all cursor-pointer shadow-md"
          title="Click to cycle between church video highlights"
        >
          <svg
            className="w-3.5 h-3.5 text-[#5cb85c]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          <span>Change Highlight ({selectedReelIndex + 1}/{HERO_REELS.length})</span>
        </button>

        {/* Audio Mute / Unmute Button */}
        <button
          type="button"
          onClick={toggleSound}
          className="pointer-events-auto inline-flex items-center gap-2 bg-black/45 hover:bg-black/75 backdrop-blur-md border border-white/20 text-white/90 hover:text-white text-[12px] font-medium px-3.5 py-1.5 rounded-full transition-all cursor-pointer shadow-md"
          title={isMuted ? "Unmute church worship" : "Mute audio"}
        >
          {isMuted ? (
            <>
              <svg
                className="w-3.5 h-3.5 text-white/80"
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
              <span>Sound On</span>
            </>
          )}
        </button>
      </div>

      {/* Bottom Triangle Shape Divider */}
      <div
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none flex justify-center z-20"
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-[45%] h-[24px] md:h-[40px] block"
        >
          <path fill="#ffffff" d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z" />
        </svg>
      </div>
    </section>
  );
}
