"use client";

import React, { useState } from "react";
import { churchInfo, galleryPhotos } from "@/data/churchData";
import InstagramReelsSection from "@/components/InstagramReelsSection";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full py-12 md:py-16 bg-white">
      <div className="max-w-[1140px] mx-auto px-5">
        {/* Instagram Feed Header Bar (matches Spotlight Instagram Feed header on rccgnlc.ca/gallery/) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 mb-10 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <img
              src="/images/arise-2025.png"
              alt="rccgnlclethbridge"
              className="w-[56px] h-[56px] rounded-full object-cover border border-gray-200"
            />
            <div>
              <h1 className="text-[18px] font-semibold text-black">
                @rccgnlclethbridge
              </h1>
              <p className="text-[13px] text-gray-600">{churchInfo.name}</p>
            </div>
          </div>

          <a
            href={churchInfo.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0095f6] hover:bg-[#0081d6] text-white text-[14px] font-medium px-5 py-2 rounded-[3px] transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z" />
            </svg>
            <span>Follow on Instagram</span>
          </a>
        </div>

        {/* Section 1: Featured Instagram Reels & Videos */}
        <div className="mb-16 pb-14 border-b border-gray-100">
          <InstagramReelsSection
            showCategoryFilter={true}
            title="Instagram Reels & Video Highlights"
            subtitle="Click any reel below to watch worship moments, sermon highlights, and fellowship recaps from @rccgnlclethbridge."
          />
        </div>

        {/* Section 2: 3-Column Squircle Photo Grid */}
        <div className="space-y-6">
          <div>
            <h2 className="text-[22px] md:text-[25px] font-semibold text-[#1d1d23]">
              Photo Gallery
            </h2>
            <p className="text-[14px] text-gray-600">
              Snapshots from Sunday services, Thanksgiving celebrations, and
              church fellowship. Click any photo to enlarge.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryPhotos.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setSelectedImage(src)}
                className="group relative aspect-[4/5] w-full overflow-hidden rounded-[16px] shadow-[-4px_4px_4px_0_rgba(0,0,0,0.15)] bg-gray-100 cursor-pointer focus:outline-none"
              >
                <img
                  src={src}
                  alt={`Gallery photo ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Load More / Instagram CTA */}
        <div className="mt-10 text-center">
          <a
            href={churchInfo.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0095f6] hover:bg-[#0081d6] text-white text-[14px] font-medium px-6 py-2.5 rounded-[3px] transition-colors"
          >
            Load more on Instagram
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white text-sm bg-white/15 hover:bg-white/25 px-3 py-1 rounded cursor-pointer"
            >
              Close ✕
            </button>
            <img
              src={selectedImage}
              alt="Full size preview"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
