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
          setIsLiveSynced(data.source === "youtube-rss");
        }
      })
      .catch(() => {
        // Fallback to static sermonsList already in state
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="mt-14 pt-12 border-t border-gray-100">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-[#4F7942] bg-[#f2f7f0] px-3 py-1 rounded-full mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#4F7942] animate-pulse" />
            <span>
              {isLiveSynced ? "Live YouTube Feed" : "Recent Services"}
            </span>
          </div>
          <h3 className="text-[22px] md:text-[25px] font-semibold text-[#1d1d23]">
            Watch Our Latest Sermons &amp; Bible Studies
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/sermons"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#4F7942] hover:text-[#38592e] transition-colors"
          >
            <span>View Full Sermon Archive</span>
            <span>→</span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sermons.map((sermon, index) => {
          const isPlaying = activeVideoId === sermon.id;
          return (
            <div
              key={sermon.id}
              className="group bg-white rounded-lg overflow-hidden border border-gray-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-video w-full bg-black overflow-hidden">
                  {isPlaying ? (
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${sermon.id}?autoplay=1`}
                      title={sermon.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setActiveVideoId(sermon.id)}
                      className="relative w-full h-full block cursor-pointer focus:outline-none"
                      aria-label={`Play ${sermon.title}`}
                    >
                      <img
                        src={`https://i.ytimg.com/vi/${sermon.id}/hqdefault.jpg`}
                        alt={sermon.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                      />
                      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors" />
                      {index === 0 && (
                        <span className="absolute top-3 left-3 bg-[#4F7942] text-white text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded shadow">
                          Latest Message
                        </span>
                      )}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-13 h-13 rounded-full bg-[#4F7942]/95 group-hover:bg-[#4F7942] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <svg
                            className="w-5 h-5 fill-current ml-0.5"
                            viewBox="0 0 384 512"
                          >
                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  )}
                </div>

                <div className="p-5 space-y-2">
                  <h4 className="text-[15.5px] font-semibold text-[#1d1d23] leading-snug line-clamp-2">
                    {sermon.title}
                  </h4>
                  <p className="text-[13px] text-gray-600 line-clamp-1">
                    {sermon.subtitle}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-4 pt-2 border-t border-gray-100 flex items-center justify-between text-[13px]">
                <button
                  type="button"
                  onClick={() => setActiveVideoId(sermon.id)}
                  className="font-semibold text-[#4F7942] hover:underline cursor-pointer"
                >
                  {isPlaying ? "Playing Now" : "Watch Here"}
                </button>
                <a
                  href={sermon.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#1d1d23] transition-colors"
                >
                  YouTube ↗
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/sermons"
          className="inline-flex items-center gap-2 bg-[#4F7942] hover:bg-[#3d6032] text-white text-[14px] font-semibold px-6 py-3 rounded transition-colors shadow-xs"
        >
          <span>Browse All Messages</span>
          <span>→</span>
        </Link>
        <a
          href={churchInfo.socials.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#1d1d23] border border-gray-300 text-[14px] font-medium px-6 py-3 rounded transition-colors"
        >
          <span>Subscribe on YouTube</span>
          <span>↗</span>
        </a>
      </div>
    </div>
  );
}
