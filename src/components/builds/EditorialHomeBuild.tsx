"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { churchInfo } from "@/data/churchData";
import LatestSermonsSection from "@/components/LatestSermonsSection";
import InstagramReelsSection from "@/components/InstagramReelsSection";

/**
 * Build 1: Sanctuary Editorial — warm alabaster/ivory canvas, botanical pine,
 * subtle gold accents, and refined serif headlines paired with clean sans copy.
 */
export default function EditorialHomeBuild() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleSound = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <div className="w-full bg-[#FAF8F3] text-[#1C241E]">
      {/* =====================================================================
          HERO: ASYMMETRIC WARM EDITORIAL SPLIT
          ===================================================================== */}
      <section className="w-full py-12 md:py-20 border-b border-[#1E3A28]/10">
        <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left 6 Cols */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2.5 text-[11.5px] font-bold uppercase tracking-[0.24em] text-[#8C6D32]">
                <span className="w-8 h-[1.5px] bg-[#B8924A]" />
                <span>RCCG New Life Chapel · Lethbridge</span>
              </div>

              <h1 className="font-serif text-[46px] sm:text-[58px] lg:text-[64px] font-semibold text-[#1E3A28] leading-[1.03] tracking-tight">
                Come and Experience <br />
                <span className="italic text-[#B8924A] font-medium">
                  A New Life.
                </span>
              </h1>

              <p className="text-[16px] sm:text-[17px] text-[#3A473E] leading-[1.75] max-w-[520px]">
                A place where people reconcile with God and enjoy life in
                abundance (John 10:10). Open arms, an open Bible, and a warm
                spiritual home in Southern Alberta.
              </p>

              {/* Service Schedule Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-[#1E3A28]/12 max-w-[500px]">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8C6D32]">
                    Sunday Worship &amp; School
                  </p>
                  <p className="text-[15px] font-semibold text-[#1E3A28] mt-0.5">
                    Sundays at 9:30 AM
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8C6D32]">
                    Mid-Week Bible Study
                  </p>
                  <p className="text-[15px] font-semibold text-[#1E3A28] mt-0.5">
                    Wednesdays at 7:00 PM
                  </p>
                </div>
                <p className="sm:col-span-2 text-[13px] text-[#4A554C]">
                  234 13 Street North, Lethbridge, AB
                </p>
              </div>

              {/* Action Pills */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Link
                  href="/contact?tab=visit"
                  className="inline-flex items-center gap-2 bg-[#1E3A28] hover:bg-[#2c5239] text-[#FAF8F3] font-montserrat text-[13px] font-bold uppercase tracking-wider px-7 py-3.5 rounded-full transition-all shadow-md"
                >
                  <span>Plan Your Visit</span>
                  <span>→</span>
                </Link>
                <Link
                  href="/sermons"
                  className="inline-flex items-center gap-2 bg-white hover:bg-[#f2efe6] border border-[#1E3A28]/25 text-[#1E3A28] font-montserrat text-[13px] font-bold uppercase tracking-wider px-6 py-3.5 rounded-full transition-all"
                >
                  <span>Watch Online</span>
                </Link>
                <Link
                  href="/rides"
                  className="text-[13.5px] font-semibold text-[#1E3A28] underline underline-offset-4 hover:text-[#B8924A] px-2"
                >
                  Need a Sunday Ride?
                </Link>
              </div>
            </div>

            {/* Right 6 Cols: Tall Framed Worship Cinema Card */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[490px] aspect-[4/5] max-h-[540px] rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(30,58,40,0.18)] border border-[#1E3A28]/15 bg-[#121c15]">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  preload="auto"
                  poster="/images/hero-merged-poster.jpg"
                  className="w-full h-full object-cover object-[center_16%]"
                  aria-label="Worship at RCCG New Life Chapel"
                >
                  <source src="/videos/nlc-worship-merged.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span className="bg-[#FAF8F3]/95 backdrop-blur-md text-[#1E3A28] border border-[#B8924A]/40 text-[11px] font-bold uppercase tracking-[0.16em] px-3.5 py-1.5 rounded-full shadow-xs">
                    Worship · Word · Family
                  </span>
                  <button
                    type="button"
                    onClick={toggleSound}
                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                    className="bg-black/55 hover:bg-black/80 text-white text-[11.5px] font-semibold px-3.5 py-1.5 rounded-full backdrop-blur-md transition-colors cursor-pointer"
                  >
                    {isMuted ? "Sound Off" : "Sound On"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SCRIPTURE PULL-QUOTE & HERITAGE BAND
          ===================================================================== */}
      <section className="w-full py-14 md:py-20 bg-white border-b border-[#1E3A28]/10">
        <div className="max-w-[1040px] mx-auto px-5 sm:px-8 text-center space-y-10">
          <div className="space-y-4">
            <span className="inline-block text-[11.5px] font-bold uppercase tracking-[0.22em] text-[#8C6D32]">
              Our Mandate · John 10:10
            </span>
            <blockquote className="font-serif italic text-[28px] sm:text-[36px] md:text-[42px] text-[#1E3A28] leading-[1.25] font-medium">
              “A clinic for sinners, a home for spiritual maturity, and an
              outpost for touching the world.”
            </blockquote>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left pt-2">
            <div className="rounded-2xl bg-[#FAF8F3] border border-[#1E3A28]/10 p-6 space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#8C6D32]">
                01 · Open Arms
              </p>
              <h2 className="font-serif text-[23px] font-semibold text-[#1E3A28]">
                A Warm Home
              </h2>
              <p className="text-[14px] text-[#4A554C] leading-relaxed">
                Welcoming Lethbridge families, newcomers, and U of L /
                Polytechnic students without distinction.
              </p>
            </div>
            <div className="rounded-2xl bg-[#FAF8F3] border border-[#1E3A28]/10 p-6 space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#8C6D32]">
                02 · Open Bible
              </p>
              <h2 className="font-serif text-[23px] font-semibold text-[#1E3A28]">
                Rooted in Truth
              </h2>
              <p className="text-[14px] text-[#4A554C] leading-relaxed">
                Preaching Christ and equipping believers for purpose, holiness,
                and everyday faithfulness.
              </p>
            </div>
            <div className="rounded-2xl bg-[#FAF8F3] border border-[#1E3A28]/10 p-6 space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#8C6D32]">
                03 · Open Community
              </p>
              <h2 className="font-serif text-[23px] font-semibold text-[#1E3A28]">
                Serving Southern Alberta
              </h2>
              <p className="text-[14px] text-[#4A554C] leading-relaxed">
                Turning faith into tangible love through our weekly Food Pantry,
                Christian counselling, and Sunday rides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          LATEST SERMON SPOTLIGHT ON WARM PAPER
          ===================================================================== */}
      <section className="w-full py-16 md:py-20 bg-[#FAF8F3]">
        <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
          <div className="bg-white border border-[#1E3A28]/10 rounded-3xl p-6 sm:p-10 shadow-xs">
            <LatestSermonsSection />
          </div>
        </div>
      </section>

      {/* =====================================================================
          BOTANICAL PINE COMMUNITY CARE & REGISTERED CHARITY FEATURE
          ===================================================================== */}
      <section className="w-full py-16 md:py-24 bg-[#16291D] text-[#FAF8F3]">
        <div className="max-w-[1220px] mx-auto px-5 sm:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-[660px]">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-[#D6B472]/40 text-[#D6B472] px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest">
                <span>
                  Registered Canadian Charity #{churchInfo.charity.registrationNumber}
                </span>
              </div>
              <h2 className="font-serif text-[34px] sm:text-[44px] font-semibold text-[#FAF8F3] leading-tight">
                Serving Our City With Dignity &amp; Accountability.
              </h2>
            </div>

            <a
              href={churchInfo.charity.charityDataUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#D6B472] hover:underline shrink-0"
            >
              <span>Verify Charity Record on CharityData ↗</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Link
              href="/community-outreach"
              className="group rounded-2xl bg-white/[0.06] hover:bg-white/[0.11] border border-white/12 p-6 space-y-3 transition-all"
            >
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#D6B472]">
                Weekly Relief
              </span>
              <h3 className="font-serif text-[24px] font-semibold text-white">
                Food Pantry
              </h3>
              <p className="text-[13.5px] text-[#FAF8F3]/75 leading-relaxed">
                Open to all Lethbridge residents and students — confidential
                grocery hampers with zero membership requirement.
              </p>
              <span className="inline-block text-[13px] font-semibold text-[#D6B472] group-hover:underline pt-1">
                Request or Donate →
              </span>
            </Link>

            <Link
              href="/contact?tab=counselling"
              className="group rounded-2xl bg-white/[0.06] hover:bg-white/[0.11] border border-white/12 p-6 space-y-3 transition-all"
            >
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#D6B472]">
                Pastoral &amp; Emotional Care
              </span>
              <h3 className="font-serif text-[24px] font-semibold text-white">
                Christian Counselling
              </h3>
              <p className="text-[13.5px] text-[#FAF8F3]/75 leading-relaxed">
                Confidential spiritual guidance and funded Christian counselling
                support for individuals and families.
              </p>
              <span className="inline-block text-[13px] font-semibold text-[#D6B472] group-hover:underline pt-1">
                Book Care →
              </span>
            </Link>

            <Link
              href="/rides"
              className="group rounded-2xl bg-white/[0.06] hover:bg-white/[0.11] border border-white/12 p-6 space-y-3 transition-all"
            >
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#D6B472]">
                Door-to-Door Pickup
              </span>
              <h3 className="font-serif text-[24px] font-semibold text-white">
                Free Sunday Rides
              </h3>
              <p className="text-[13.5px] text-[#FAF8F3]/75 leading-relaxed">
                Complimentary Sunday morning pickup across Lethbridge so every
                neighbor and student can worship together.
              </p>
              <span className="inline-block text-[13px] font-semibold text-[#D6B472] group-hover:underline pt-1">
                Schedule Ride →
              </span>
            </Link>

            <a
              href={churchInfo.hilltopChurch.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl bg-white/[0.06] hover:bg-white/[0.11] border border-white/12 p-6 space-y-3 transition-all"
            >
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#D6B472]">
                Youth &amp; Students · 12 PM
              </span>
              <h3 className="font-serif text-[24px] font-semibold text-white">
                The Hilltop Church
              </h3>
              <p className="text-[13.5px] text-[#FAF8F3]/75 leading-relaxed">
                Our vibrant Youth &amp; Young Adults expression every Sunday at
                12:00 PM at 234 13 Street North.
              </p>
              <span className="inline-block text-[13px] font-semibold text-[#D6B472] group-hover:underline pt-1">
                Visit thehilltopch.ca ↗
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================================
          WORSHIP REELS ON WARM ALABASTER
          ===================================================================== */}
      <section className="w-full py-16 md:py-24 bg-[#FAF8F3]">
        <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
          <InstagramReelsSection
            limit={4}
            showViewAllButton={true}
            title="Moments in Worship & Fellowship"
            subtitle="Explore highlights from Sunday worship, youth gatherings, and community outreach across Lethbridge."
          />
        </div>
      </section>
    </div>
  );
}
