"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  churchInfo,
  instagramReels,
  InstagramReelItem,
} from "@/data/churchData";

interface InstagramReelsSectionProps {
  limit?: number;
  showCategoryFilter?: boolean;
  showViewAllButton?: boolean;
  title?: string;
  subtitle?: string;
}

export default function InstagramReelsSection({
  limit,
  showCategoryFilter = false,
  showViewAllButton = false,
  title = "Moments from @rccgnlclethbridge",
  subtitle = "Watch worship highlights, sermon recaps, and fellowship reels from our church family on Instagram.",
}: InstagramReelsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [playingReelId, setPlayingReelId] = useState<string | null>(null);

  const categories = [
    "All",
    "Worship",
    "Word & Recap",
    "Community & Fellowship",
  ];

  const filteredReels: InstagramReelItem[] = instagramReels
    .filter(
      (reel) => activeCategory === "All" || reel.category === activeCategory
    )
    .slice(0, limit ?? instagramReels.length);

  return (
    <div className="w-full">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-[#4F7942] bg-[#f2f7f0] px-3 py-1 rounded-full">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 448 512">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z" />
            </svg>
            <span>Instagram Reels &amp; Highlights</span>
          </div>
          <h2 className="text-[24px] md:text-[27px] font-semibold text-[#1d1d23]">
            {title}
          </h2>
          <p className="text-[14.5px] text-gray-600 max-w-[680px]">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {showViewAllButton && (
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 bg-[#4F7942] hover:bg-[#3d6032] text-white text-[13.5px] font-semibold px-5 py-2.5 rounded transition-colors"
            >
              <span>All Reels &amp; Photos</span>
              <span>→</span>
            </Link>
          )}
          <a
            href={churchInfo.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#1d1d23] border border-gray-300 text-[13.5px] font-medium px-4 py-2.5 rounded transition-colors"
          >
            <span>Follow @rccgnlclethbridge</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      {/* Optional Category Filter Pills */}
      {showCategoryFilter && (
        <div className="flex flex-wrap items-center gap-2.5 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-[13.5px] font-medium transition-colors cursor-pointer ${
                activeCategory === category
                  ? "bg-[#4F7942] text-white shadow-xs"
                  : "bg-[#f2f7f0] text-[#1d1d23] hover:bg-[#e3efe0]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Reels Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredReels.map((reel) => {
          const isPlaying = playingReelId === reel.id;
          return (
            <div
              key={reel.id}
              className="group bg-white rounded-[16px] overflow-hidden border border-gray-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Vertical 9:16 Reel Video Container */}
                <div className="relative aspect-[9/14] w-full bg-black overflow-hidden">
                  {isPlaying ? (
                    <video
                      src={reel.videoUrl}
                      poster={reel.posterUrl}
                      controls
                      autoPlay
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setPlayingReelId(reel.id)}
                      className="relative w-full h-full block cursor-pointer focus:outline-none text-left"
                      aria-label={`Play ${reel.title}`}
                    >
                      <img
                        src={reel.posterUrl}
                        alt={reel.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/25 group-hover:via-black/10 transition-colors" />

                      {/* Category Badge */}
                      <span className="absolute top-3 left-3 bg-[#4F7942]/95 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow">
                        {reel.category}
                      </span>

                      {/* Center Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-white/90 group-hover:bg-[#4F7942] text-[#4F7942] group-hover:text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-all">
                          <svg
                            className="w-5 h-5 fill-current ml-0.5"
                            viewBox="0 0 384 512"
                          >
                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                          </svg>
                        </div>
                      </div>

                      {/* Bottom Overlay Title */}
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <h3 className="text-[14.5px] font-semibold leading-snug line-clamp-2 drop-shadow">
                          {reel.title}
                        </h3>
                      </div>
                    </button>
                  )}
                </div>

                {/* Caption & Link */}
                <div className="p-4 space-y-2">
                  <p className="text-[13px] text-gray-600 line-clamp-2 leading-relaxed">
                    {reel.caption}
                  </p>
                </div>
              </div>

              <div className="px-4 pb-3.5 pt-2 border-t border-gray-100 flex items-center justify-between text-[12.5px]">
                <button
                  type="button"
                  onClick={() =>
                    setPlayingReelId(isPlaying ? null : reel.id)
                  }
                  className="font-semibold text-[#4F7942] hover:underline cursor-pointer"
                >
                  {isPlaying ? "Close Player" : "▶ Play Reel"}
                </button>
                <a
                  href={reel.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#1d1d23] transition-colors"
                >
                  Instagram ↗
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
