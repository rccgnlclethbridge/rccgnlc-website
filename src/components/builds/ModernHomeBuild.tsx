"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { churchInfo } from "@/data/churchData";
import LatestSermonsSection from "@/components/LatestSermonsSection";
import InstagramReelsSection from "@/components/InstagramReelsSection";

/**
 * Build 3: Modern Style Church — warm architectural minimalism (soft linen #FAF9F6,
 * botanical forest #1C3424, warm gold accents, serif headlines + clean Bento cards).
 */
export default function ModernHomeBuild() {
  const [isMuted, setIsMuted] = useState(true);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleSound = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const copyGivingEmail = () => {
    navigator.clipboard.writeText(churchInfo.contact.givingEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  return (
    <div className="w-full bg-[#FAF9F6] text-[#1C241E]">
      {/* =====================================================================
          MODERN ASYMMETRIC SPLIT HERO + 3-CHIP QUICK UTILITY STRIP
          ===================================================================== */}
      <section className="w-full pt-10 pb-12 md:pt-16 md:pb-16">
        <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left 6 Cols */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2.5 text-[11.5px] font-bold uppercase tracking-[0.24em] text-[#8C6D32]">
                <span className="w-8 h-[1.5px] bg-[#B8924A]" />
                <span>RCCG New Life Chapel · Lethbridge</span>
              </div>

              <h1 className="font-serif text-[46px] sm:text-[58px] lg:text-[64px] font-semibold text-[#1C3424] leading-[1.03] tracking-tight">
                Come and Experience <br />
                <span className="italic text-[#B8924A] font-medium">
                  A New Life.
                </span>
              </h1>

              <p className="text-[16px] sm:text-[17px] text-[#3A473E] leading-[1.75] max-w-[520px]">
                A place where people reconcile with God and enjoy life in
                abundance (John 10:10). Open arms, an open Bible, and a warm
                home in Southern Alberta.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Link
                  href="/contact?tab=visit"
                  className="inline-flex items-center gap-2 bg-[#1C3424] hover:bg-[#2a4b35] text-[#FAF9F6] font-montserrat text-[13px] font-bold uppercase tracking-wider px-7 py-3.5 rounded-full transition-all shadow-md"
                >
                  <span>Plan Your Visit</span>
                  <span>→</span>
                </Link>
                <Link
                  href="/sermons"
                  className="inline-flex items-center gap-2 bg-white hover:bg-[#f2efe6] border border-[#1C3424]/25 text-[#1C3424] font-montserrat text-[13px] font-bold uppercase tracking-wider px-6 py-3.5 rounded-full transition-all"
                >
                  <span>Watch Online</span>
                </Link>
              </div>

              {/* Compact 3-Chip Quick Utility Strip */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <Link
                  href="/contact?tab=visit"
                  className="inline-flex items-center gap-2 bg-white border border-[#1C3424]/15 hover:border-[#1C3424]/40 px-3.5 py-2 rounded-full text-[12.5px] font-semibold text-[#1C3424] transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-[#4F7942]" />
                  <span>Sundays 9:30 AM</span>
                </Link>
                <Link
                  href="/rides"
                  className="inline-flex items-center gap-1.5 bg-white border border-[#1C3424]/15 hover:border-[#1C3424]/40 px-3.5 py-2 rounded-full text-[12.5px] font-semibold text-[#1C3424] transition-colors"
                >
                  <span>Free Sunday Rides</span>
                  <span className="text-[#8C6D32]">→</span>
                </Link>
                <Link
                  href="/community-outreach"
                  className="inline-flex items-center gap-1.5 bg-white border border-[#1C3424]/15 hover:border-[#1C3424]/40 px-3.5 py-2 rounded-full text-[12.5px] font-semibold text-[#1C3424] transition-colors"
                >
                  <span>Weekly Food Pantry</span>
                  <span className="text-[#8C6D32]">→</span>
                </Link>
              </div>
            </div>

            {/* Right 6 Cols: Tall Un-darkened Cinema Worship Frame */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[490px] aspect-[4/5] max-h-[540px] rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(28,52,36,0.18)] border border-[#1C3424]/15 bg-[#121c15]">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span className="bg-[#FAF9F6]/95 backdrop-blur-md text-[#1C3424] border border-[#B8924A]/40 text-[11px] font-bold uppercase tracking-[0.16em] px-3.5 py-1.5 rounded-full shadow-xs">
                    234 13 St N · Lethbridge
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
          INSTANT MODERN COMMUNITY BENTO ROW
          ===================================================================== */}
      <section className="w-full pb-16">
        <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
            {/* 5 cols: Weekly Food Pantry & Care */}
            <div className="md:col-span-6 lg:col-span-5 rounded-3xl bg-white border border-[#1C3424]/12 p-7 flex flex-col justify-between shadow-2xs space-y-4">
              <div className="space-y-2">
                <span className="inline-block text-[10.5px] font-bold uppercase tracking-wider text-[#1C3424] bg-[#F2F7F0] px-3 py-1 rounded-full border border-[#4F7942]/20">
                  CRA Charity #{churchInfo.charity.registrationNumber}
                </span>
                <h2 className="font-serif text-[26px] font-semibold text-[#1C3424] leading-snug">
                  Weekly Food Pantry &amp; Care
                </h2>
                <p className="text-[14px] text-[#4A554C] leading-relaxed">
                  Open to all Lethbridge individuals, families &amp; students —
                  confidential grocery hampers with no membership required.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/community-outreach"
                  className="bg-[#1C3424] hover:bg-[#2a4b35] text-white text-[12px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-colors"
                >
                  Request / Donate →
                </Link>
                <Link
                  href="/contact?tab=counselling"
                  className="text-[12.5px] font-semibold text-[#1C3424] hover:text-[#B8924A] underline"
                >
                  Book Counselling
                </Link>
              </div>
            </div>

            {/* 4 cols: The Hilltop Church */}
            <div className="md:col-span-6 lg:col-span-4 rounded-3xl bg-white border border-[#1C3424]/12 overflow-hidden flex flex-col justify-between shadow-2xs">
              <div className="h-32 relative overflow-hidden bg-[#1C3424]">
                <img
                  src="/images/youth-main.jpg"
                  alt="The Hilltop Church - Youth & Young Adults"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-[#FAF9F6]/95 text-[#1C3424] text-[10.5px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  Sundays 12:00 PM
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h2 className="font-serif text-[23px] font-semibold text-[#1C3424]">
                    The Hilltop Church
                  </h2>
                  <p className="text-[13.5px] text-[#4A554C] mt-1">
                    Youth &amp; Young Adults expression in Lethbridge.
                  </p>
                </div>
                <a
                  href={churchInfo.hilltopChurch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-bold text-[#1C3424] hover:text-[#B8924A] underline"
                >
                  Visit thehilltopch.ca ↗
                </a>
              </div>
            </div>

            {/* 3 cols: Give Online */}
            <div className="md:col-span-12 lg:col-span-3 rounded-3xl bg-[#1C3424] text-[#FAF9F6] p-7 flex flex-col justify-between shadow-sm space-y-4">
              <div className="space-y-1.5">
                <span className="text-[10.5px] font-bold uppercase tracking-widest text-[#D6B472]">
                  Interac e-Transfer
                </span>
                <h2 className="font-serif text-[25px] font-semibold">
                  Give Online
                </h2>
                <p className="text-[12px] font-mono text-[#FAF9F6]/80 break-all">
                  {churchInfo.contact.givingEmail}
                </p>
              </div>
              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={copyGivingEmail}
                  className="w-full bg-[#D6B472] hover:bg-[#c5a15d] text-[#1C3424] text-[12px] font-extrabold uppercase tracking-wider py-2.5 rounded-full transition-colors cursor-pointer"
                >
                  {copiedEmail ? "Copied ✓" : "Copy Email"}
                </button>
                <Link
                  href="/giving"
                  className="block text-center text-[12px] text-[#FAF9F6]/80 hover:text-white underline"
                >
                  Tax Receipts &amp; Stewardship →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          WARM WHITE LATEST SERMON SHOWCASE
          ===================================================================== */}
      <section className="w-full py-16 md:py-20 bg-white border-y border-[#1C3424]/10">
        <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
          <LatestSermonsSection />
        </div>
      </section>

      {/* =====================================================================
          DEEP BOTANICAL FOREST MANDATE BAND
          ===================================================================== */}
      <section className="w-full py-16 md:py-24 bg-[#1C3424] text-[#FAF9F6]">
        <div className="max-w-[1140px] mx-auto px-5 sm:px-8 space-y-12">
          <div className="text-center max-w-[900px] mx-auto space-y-4">
            <span className="text-[11.5px] font-bold uppercase tracking-[0.24em] text-[#D6B472]">
              Our Mandate · John 10:10
            </span>
            <blockquote className="font-serif italic text-[28px] sm:text-[38px] md:text-[44px] leading-[1.2] text-[#FAF9F6]">
              “A clinic for sinners, a home for spiritual maturity, and an
              outpost for touching the world.”
            </blockquote>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-6 space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#D6B472]">
                01 · Open Arms
              </p>
              <h3 className="font-serif text-[24px] font-semibold">
                Warm Belonging
              </h3>
              <p className="text-[14px] text-[#FAF9F6]/75 leading-relaxed">
                Welcoming families, students, and newcomers across Lethbridge
                into authentic Christian community.
              </p>
            </div>
            <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-6 space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#D6B472]">
                02 · Open Bible
              </p>
              <h3 className="font-serif text-[24px] font-semibold">
                Scriptural Depth
              </h3>
              <p className="text-[14px] text-[#FAF9F6]/75 leading-relaxed">
                Preaching the gospel of Jesus Christ and teaching sound biblical
                principles for daily life.
              </p>
            </div>
            <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-6 space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#D6B472]">
                03 · Open Community
              </p>
              <h3 className="font-serif text-[24px] font-semibold">
                Verified Impact
              </h3>
              <p className="text-[14px] text-[#FAF9F6]/75 leading-relaxed">
                Operating transparently as Registered Canadian Charity #
                {churchInfo.charity.registrationNumber} serving Southern Alberta.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href={churchInfo.charity.charityDataUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#D6B472] hover:underline"
            >
              <span>Verify Registered Charity Record on CharityData ↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================================
          WORSHIP & FELLOWSHIP REELS
          ===================================================================== */}
      <section className="w-full py-16 md:py-24 bg-[#FAF9F6]">
        <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
          <InstagramReelsSection
            limit={4}
            showViewAllButton={true}
            title="Worship & Fellowship Reels"
            subtitle="Moments from Sunday services, student outreach, and community life across @rccgnlclethbridge."
          />
        </div>
      </section>
    </div>
  );
}
