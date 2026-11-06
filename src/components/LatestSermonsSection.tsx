"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { churchInfo, sermonsList, SermonItem } from "@/data/churchData";

export default function LatestSermonsSection() {
  const [sermons, setSermons] = useState<SermonItem[]>(sermonsList.slice(0, 3));
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [isLiveSynced, setIsLiveSynced] = useState(false);

  useEffect(() => {
    let isMounted = true;
    fetch("/api/sermons")
      .then((res) => res.json())
      .then((data) => {
        if (
          isMounted &&
          Array.isArray(data.sermons) &&
          data.sermons.length > 0
        ) {
          setSermons(data.sermons.slice(0, 3));
          setIsLiveSynced(
            data.source === "youtube-rss" || data.source === "youtube-live-rss"
          );
        }
      })
      .catch(() => {
        // Fallback to static sermonsList already in state
      });
    return () => {
      isMounted = false;
    };
  }, []);

  const featuredSermon = sermons[0] || sermonsList[0];
  const recentSermons = sermons.slice(1, 3);
  const isFeaturedPlaying = activeVideoId === featuredSermon?.id;

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.2em] text-[#4F7942] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#4F7942] animate-pulse" />
            <span>
              {isLiveSynced ? "LIVE YOUTUBE CHANNEL FEED" : "LATEST MESSAGES"}
            </span>
          </div>
          <h2 className="font-montserrat text-[28px] sm:text-[34px] md:text-[40px] font-extrabold uppercase tracking-tight text-[#141814] leading-none">
            Watch Latest Sermon
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/sermons"
            className="inline-flex items-center gap-2 text-[13.5px] font-bold uppercase tracking-wider text-[#4F7942] hover:text-[#38592e] transition-colors"
          >
            <span>Full Sermon Archive</span>
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* ===================================================================
          TRANSFORMATION CHURCH-STYLE FEATURED SERMON SPOTLIGHT CARD
          =================================================================== */}
      {featuredSermon && (
        <div className="bg-[#141814] text-white rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-white/10 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left 7 Cols: 16:9 Video Player */}
            <div className="lg:col-span-7 relative aspect-video w-full bg-black overflow-hidden">
              {isFeaturedPlaying ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${featuredSermon.id}?autoplay=1`}
                  title={featuredSermon.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setActiveVideoId(featuredSermon.id)}
                  className="group relative w-full h-full block cursor-pointer focus:outline-none text-left"
                  aria-label={`Play ${featuredSermon.title}`}
                >
                  <img
                    src={`https://i.ytimg.com/vi/${featuredSermon.id}/hqdefault.jpg`}
                    alt={featuredSermon.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:via-black/10 transition-colors" />
                  <span className="absolute top-4 left-4 bg-[#4F7942] text-white text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md">
                    Featured Message
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 group-hover:bg-[#4F7942] text-[#141814] group-hover:text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                      <svg
                        className="w-6 h-6 fill-current ml-1"
                        viewBox="0 0 384 512"
                      >
                        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                      </svg>
                    </div>
                  </div>
                </button>
              )}
            </div>

            {/* Right 5 Cols: Sermon Metadata & Actions */}
            <div className="lg:col-span-5 p-7 sm:p-9 lg:p-10 space-y-5 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.18em] text-[#8ce078]">
                <span>RCCG New Life Chapel Lethbridge</span>
              </div>

              <h3 className="font-montserrat text-[22px] sm:text-[26px] font-bold text-white leading-snug">
                {featuredSermon.title}
              </h3>

              <p className="text-[14.5px] text-white/75 leading-relaxed line-clamp-3">
                {featuredSermon.subtitle ||
                  "Catch up on our latest worship experience and biblical teaching from Lethbridge."}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => setActiveVideoId(featuredSermon.id)}
                  className="inline-flex items-center gap-2 bg-[#4F7942] hover:bg-[#3d6032] text-white text-[13px] font-bold uppercase tracking-wider px-6 py-3.5 rounded-full transition-all cursor-pointer shadow-md"
                >
                  <span>
                    {isFeaturedPlaying ? "Playing Now" : "▶ Watch Sermon"}
                  </span>
                </button>

                <a
                  href={churchInfo.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[13px] font-bold uppercase tracking-wider px-5 py-3.5 rounded-full transition-all"
                >
                  <span>Watch More on YouTube</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================
          RECENT MESSAGES ROW (2-Column Modern Cards)
          =================================================================== */}
      {recentSermons.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentSermons.map((sermon) => {
            const isPlaying = activeVideoId === sermon.id;
            return (
              <div
                key={sermon.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-stretch"
              >
                {/* Thumbnail / Player */}
                <div className="sm:w-[46%] relative aspect-video sm:aspect-auto bg-black shrink-0 overflow-hidden">
                  {isPlaying ? (
                    <iframe
                      className="w-full h-full min-h-[180px]"
                      src={`https://www.youtube.com/embed/${sermon.id}?autoplay=1`}
                      title={sermon.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setActiveVideoId(sermon.id)}
                      className="relative w-full h-full min-h-[180px] block cursor-pointer focus:outline-none"
                      aria-label={`Play ${sermon.title}`}
                    >
                      <img
                        src={`https://i.ytimg.com/vi/${sermon.id}/hqdefault.jpg`}
                        alt={sermon.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                      />
                      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/95 group-hover:bg-[#4F7942] text-[#141814] group-hover:text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-all">
                          <svg
                            className="w-4 h-4 fill-current ml-0.5"
                            viewBox="0 0 384 512"
                          >
                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  )}
                </div>

                {/* Details */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#4F7942]">
                      Recent Service
                    </span>
                    <h4 className="font-montserrat text-[16px] font-bold text-[#141814] leading-snug line-clamp-2">
                      {sermon.title}
                    </h4>
                    <p className="text-[13px] text-gray-500 line-clamp-1">
                      {sermon.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-gray-100 flex items-center justify-between text-[12.5px]">
                    <button
                      type="button"
                      onClick={() => setActiveVideoId(sermon.id)}
                      className="font-bold uppercase tracking-wider text-[#4F7942] hover:underline cursor-pointer"
                    >
                      {isPlaying ? "Playing Now" : "▶ Watch Here"}
                    </button>
                    <a
                      href={sermon.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#141814] font-medium transition-colors"
                    >
                      YouTube ↗
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
