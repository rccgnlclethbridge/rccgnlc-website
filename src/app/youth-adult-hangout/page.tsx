"use client";

import React, { useState } from "react";
import { churchInfo, youthHangoutPhotos } from "@/data/churchData";

export default function YouthAdultHangoutPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full pt-[60px] md:pt-[100px] pb-16 bg-white">
      <div className="max-w-[1140px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (50%): Heading, Intro Paragraphs & Hilltop Church Link */}
          <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-28">
            <h1 className="text-[28px] md:text-[32px] font-semibold text-[#4F7942] leading-tight">
              Youth &amp; Young Adult Hangout
            </h1>
            <p className="text-[15px] text-black leading-[1.7]">
              We are the youth and young adults of RCCG Lethbridge! We’re
              difference makers. Our voices matter and our lives were built to
              have an impact.
            </p>
            <p className="text-[15px] text-black leading-[1.7]">
              We’re here to share life, to share our stories and to share Jesus
              with our friends, family, city and country. We’re passionate about
              Jesus, people, and having a good time. We’re also convinced that
              those three things can all co-exist.
            </p>
            <p className="text-[15px] text-black leading-[1.7]">
              Our youth &amp; young adults community now gathers as{" "}
              <a
                href={churchInfo.hilltopChurch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4F7942] font-semibold underline hover:text-[#3d6032]"
              >
                The Hilltop Church
              </a>{" "}
              every Sunday at 12:00 PM at 234 13 Street North, Lethbridge.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={churchInfo.hilltopChurch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4F7942] hover:bg-[#3d6032] text-white text-[14px] font-semibold px-5 py-2.5 rounded-[4px] transition-colors inline-flex items-center gap-2"
              >
                <span>Connect with The Hilltop Church</span>
                <span>↗</span>
              </a>
              <a
                href={churchInfo.hilltopChurch.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#4F7942] text-[#4F7942] hover:bg-[#f2f7f0] text-[14px] font-medium px-4 py-2.5 rounded-[4px] transition-colors"
              >
                @thehilltopch on Instagram ↗
              </a>
            </div>
          </div>

          {/* Right Column (50%): 18-Image Lightbox Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
              {youthHangoutPhotos.map((photo, idx) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setSelectedImage(photo.src)}
                  className="group relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-gray-100 shadow-xs cursor-pointer focus:outline-none"
                >
                  <img
                    src={photo.src}
                    alt={`Youth Hangout ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </button>
              ))}
            </div>
          </div>
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
              alt="Youth Hangout Full Preview"
              className="max-w-full max-h-[85vh] object-contain rounded shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
