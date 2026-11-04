"use client";

import React, { useEffect, useState } from "react";
import PageHero from "@/components/PageHero";
import { churchInfo, sermonsList, SermonItem } from "@/data/churchData";

export default function SermonsPage() {
  const [sermons, setSermons] = useState<SermonItem[]>(sermonsList);
  const [visibleCount, setVisibleCount] = useState(9);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [isLiveSynced, setIsLiveSynced] = useState(false);

  useEffect(() => {
    fetch("/api/sermons")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data?.sermons) && data.sermons.length > 0) {
          setSermons(data.sermons);
          if (data.source === "youtube-live-rss") {
            setIsLiveSynced(true);
          }
        }
      })
      .catch(() => {
        // Fallback already loaded
      });
  }, []);

  const visibleSermons = sermons.slice(0, visibleCount);
  const hasMore = visibleCount < sermons.length;

  return (
    <div className="w-full">
      <PageHero
        title="Latest Messages"
        backgroundImage="/images/hero-sermons.jpg"
        overlayOpacity={0.81}
        backgroundPosition="top center"
      />

      <section className="w-full py-12 md:py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-5">
          {/* Intro Row */}
          <div className="max-w-[850px] space-y-4 mb-10">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-[25px] font-bold text-[#4F7942]">
                Catch up on the weeks you missed.
              </h2>
              {isLiveSynced && (
                <span className="inline-flex items-center gap-1.5 text-[12px] font-medium bg-[#E9FCE3] text-[#3a5c30] px-2.5 py-0.5 rounded-full border border-[#4F7942]/20">
                  <span className="w-2 h-2 rounded-full bg-[#4F7942] animate-pulse" />
                  Synced with YouTube
                </span>
              )}
            </div>
            <p className="text-[15px] text-black leading-[1.7]">
              Here you’ll find our latest message each week. Whether you’re out
              of town, unable to make it on-location, or wanted to share a
              message with a friend, it’s all available here. You can also
              subscribe to our YouTube channel where we upload the latest events
              and sermons at New Life Chapel. Browse the archive below.
            </p>
            <div className="pt-2">
              <a
                href={churchInfo.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#4F7942] hover:bg-[#3e6133] text-white text-[15px] font-medium px-6 py-3 rounded-[4px] transition-colors"
              >
                Watch more on YouTube
              </a>
            </div>
          </div>

          {/* Active Video Player Modal / Inline Player if clicked */}
          {activeVideoId && (
            <div className="mb-10 bg-black rounded-lg overflow-hidden shadow-xl relative">
              <div className="flex items-center justify-between bg-[#1d1d23] px-4 py-3 text-white">
                <span className="text-sm font-medium">
                  Now Playing:{" "}
                  {sermons.find((s) => s.id === activeVideoId)?.title}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveVideoId(null)}
                  className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1 rounded cursor-pointer"
                >
                  Close Player ✕
                </button>
              </div>
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          )}

          {/* 3-Column YouTube Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleSermons.map((sermon) => (
              <div
                key={sermon.id}
                className="group bg-white border border-gray-100 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                {/* Video Thumbnail */}
                <button
                  type="button"
                  onClick={() => {
                    setActiveVideoId(sermon.id);
                    window.scrollTo({ top: 320, behavior: "smooth" });
                  }}
                  className="relative aspect-video w-full bg-black overflow-hidden cursor-pointer text-left"
                >
                  <img
                    src={`https://i.ytimg.com/vi/${sermon.id}/hqdefault.jpg`}
                    alt={sermon.subtitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/10 transition-colors">
                    <div className="w-14 h-10 bg-[#ff0000] rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                      <svg
                        className="w-5 h-5 fill-current ml-0.5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Title & Link */}
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <h3 className="text-[14px] font-semibold text-[#1d1d23] group-hover:text-[#4F7942] transition-colors leading-snug">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveVideoId(sermon.id);
                        window.scrollTo({ top: 320, behavior: "smooth" });
                      }}
                      className="text-left cursor-pointer"
                    >
                      {sermon.title}
                    </button>
                  </h3>
                  <div className="mt-3 pt-2 border-t border-gray-50 flex items-center justify-between text-[12px] text-gray-500">
                    <span className="truncate">{sermon.subtitle}</span>
                    <a
                      href={sermon.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4F7942] hover:underline font-medium shrink-0 ml-2"
                    >
                      YouTube ↗
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More / Subscribe Footer Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {hasMore ? (
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-[#1d1d23] text-[14px] font-medium rounded transition-colors cursor-pointer"
              >
                Load More... ({sermons.length - visibleCount} more)
              </button>
            ) : (
              <a
                href={churchInfo.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-[#1d1d23] text-[14px] font-medium rounded transition-colors"
              >
                View Full Archive on YouTube
              </a>
            )}
            <a
              href={churchInfo.socials.youtubeChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-[#cd201f] hover:bg-[#b31b1a] text-white text-[14px] font-medium rounded flex items-center gap-2 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 576 512">
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
              </svg>
              <span>Subscribe</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
