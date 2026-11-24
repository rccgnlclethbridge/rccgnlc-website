"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { churchInfo } from "@/data/churchData";
import LatestSermonsSection from "@/components/LatestSermonsSection";
import InstagramReelsSection from "@/components/InstagramReelsSection";

/**
 * Build 3: Living Community Hub — ultra-scannable light Bento layout putting
 * Sunday worship, Free Rides, Weekly Food Pantry, and 1-tap Giving above the fold.
 */
export default function BentoHomeBuild() {
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
    <div className="w-full bg-[#F7FAF6] text-[#141814]">
      {/* =====================================================================
          COMPACT INTRO STRIP + INSTANT 12-COL BENTO HUB
          ===================================================================== */}
      <section className="w-full pt-8 pb-12 md:pt-10 md:pb-16">
        <div className="max-w-[1220px] mx-auto px-5 sm:px-8 space-y-6">
          {/* Compact Top Heading Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-[#4F7942]/15 rounded-2xl px-6 py-4 shadow-2xs">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#4F7942]">
                RCCG New Life Chapel · Lethbridge, AB
              </p>
              <h1 className="font-montserrat text-[22px] sm:text-[26px] font-extrabold tracking-tight text-[#141814]">
                Come and experience a new life.
              </h1>
            </div>
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <Link
                href="/sermons"
                className="inline-flex items-center bg-[#f2f7f0] hover:bg-[#e3efe0] text-[#3B6331] font-montserrat text-[12px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-full transition-colors"
              >
                Watch Online
              </Link>
              <Link
                href="/contact?tab=visit"
                className="inline-flex items-center gap-1.5 bg-[#3B6331] hover:bg-[#2d4d25] text-white font-montserrat text-[12px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-colors shadow-xs"
              >
                <span>Plan a Visit</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Bento Row 1: Video Tile (7 cols) + This Sunday & Rides Stack (5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* 7-col Worship Video Card */}
            <div className="lg:col-span-7 relative rounded-3xl overflow-hidden min-h-[320px] sm:min-h-[380px] bg-[#0d120d] shadow-md border border-black/5">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                preload="auto"
                poster="/images/hero-merged-poster.jpg"
                className="absolute inset-0 w-full h-full object-cover object-[center_16%]"
                aria-label="Worship at New Life Chapel"
              >
                <source src="/videos/nlc-worship-merged.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

              <div className="relative z-10 h-full flex flex-col justify-between p-5 sm:p-6">
                <div className="flex items-center justify-between gap-2">
                  <span className="bg-white/90 backdrop-blur-md text-[#141814] text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-xs">
                    Worship at New Life Chapel
                  </span>
                  <button
                    type="button"
                    onClick={toggleSound}
                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                    className="bg-black/60 hover:bg-black/80 text-white text-[11.5px] font-semibold px-3.5 py-1.5 rounded-full backdrop-blur-md transition-colors cursor-pointer"
                  >
                    {isMuted ? "Sound Off" : "Sound On"}
                  </button>
                </div>

                <div className="text-white space-y-1 max-w-[460px]">
                  <p className="text-[13px] font-medium text-[#8ce078]">
                    John 10:10 · Open Arms &amp; Open Bible
                  </p>
                  <p className="text-[15px] text-white/90 leading-snug">
                    A warm church family for individuals, students, and families
                    across Lethbridge.
                  </p>
                </div>
              </div>
            </div>

            {/* 5-col Stacked Cards */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              {/* Deep Green: This Sunday Card */}
              <div className="flex-1 rounded-3xl bg-[#4F7942] text-white p-6 flex flex-col justify-between shadow-sm">
                <div className="space-y-1.5">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#dff7d7]">
                    In-Person &amp; Live · 234 13 St N
                  </span>
                  <h2 className="font-montserrat text-[24px] font-extrabold tracking-tight">
                    This Sunday · 9:30 AM
                  </h2>
                  <p className="text-[13.5px] text-white/85 leading-relaxed">
                    Sunday School &amp; Worship Service · Plus Wednesday Bible
                    Study at 7:00 PM.
                  </p>
                </div>
                <div className="pt-4 flex flex-wrap items-center gap-2.5">
                  <Link
                    href="/contact?tab=visit"
                    className="bg-white text-[#141814] hover:bg-[#dff7d7] text-[12px] font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-colors"
                  >
                    Plan a Visit →
                  </Link>
                  <a
                    href={churchInfo.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/15 hover:bg-white/25 text-white border border-white/25 text-[12px] font-semibold px-4 py-2 rounded-full transition-colors"
                  >
                    Directions ↗
                  </a>
                </div>
              </div>

              {/* White Card: Free Sunday Rides */}
              <div className="rounded-3xl bg-white border border-[#4F7942]/15 p-6 flex flex-col justify-between shadow-2xs space-y-3">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#4F7942]">
                    Complimentary City Pickup
                  </span>
                  <h2 className="font-montserrat text-[20px] font-bold text-[#141814]">
                    Free Sunday Rides
                  </h2>
                  <p className="text-[13.5px] text-gray-600">
                    Need transportation to church? Request Sunday pickup across
                    Lethbridge.
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                  <Link
                    href="/rides"
                    className="inline-flex items-center gap-1.5 bg-[#f2f7f0] hover:bg-[#4F7942] text-[#3B6331] hover:text-white text-[12.5px] font-bold px-4 py-2 rounded-full transition-colors"
                  >
                    <span>Book a Ride →</span>
                  </Link>
                  <a
                    href="https://thehilltopch.ca/rides"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] font-medium text-gray-500 hover:text-[#141814] underline"
                  >
                    Hilltop 12 PM Rides ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Row 2: Food Pantry (5 cols) + Hilltop (4 cols) + 1-Tap Giving (3 cols) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
            {/* 5-col: Weekly Food Pantry & Care */}
            <div className="md:col-span-6 lg:col-span-5 rounded-3xl bg-white border border-[#4F7942]/20 p-6 flex flex-col justify-between shadow-2xs space-y-4">
              <div className="space-y-2">
                <span className="inline-block text-[10.5px] font-bold uppercase tracking-wider text-[#4F7942] bg-[#f2f7f0] px-2.5 py-1 rounded-full">
                  CRA Charity #{churchInfo.charity.registrationNumber}
                </span>
                <h2 className="font-montserrat text-[21px] font-bold text-[#141814]">
                  Weekly Food Pantry &amp; Care
                </h2>
                <p className="text-[13.5px] text-gray-600 leading-relaxed">
                  Open to all Lethbridge families, newcomers &amp; students —
                  confidential grocery hampers, no membership required.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                <Link
                  href="/community-outreach#outreach-action"
                  className="bg-[#3B6331] hover:bg-[#2d4d25] text-white text-[12px] font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-colors"
                >
                  Request Hamper →
                </Link>
                <Link
                  href="/community-outreach#food-pantry"
                  className="text-[12.5px] font-semibold text-[#4F7942] hover:underline px-2"
                >
                  Donate / Partner
                </Link>
              </div>
            </div>

            {/* 4-col: The Hilltop Church (Youth & Students) */}
            <div className="md:col-span-6 lg:col-span-4 rounded-3xl bg-white border border-gray-200/80 overflow-hidden flex flex-col justify-between shadow-2xs">
              <div className="h-28 w-full relative overflow-hidden bg-[#141814]">
                <img
                  src="/images/youth-main.jpg"
                  alt="The Hilltop Church - Youth & Young Adults"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-[#141814]/85 text-[#8ce078] text-[10.5px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  Sundays 12:00 PM
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h2 className="font-montserrat text-[18px] font-bold text-[#141814]">
                    The Hilltop Church
                  </h2>
                  <p className="text-[13px] text-gray-600 mt-1">
                    Youth, campus students &amp; young adults expression in
                    Lethbridge.
                  </p>
                </div>
                <a
                  href={churchInfo.hilltopChurch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12.5px] font-bold text-[#4F7942] hover:underline"
                >
                  Visit thehilltopch.ca ↗
                </a>
              </div>
            </div>

            {/* 3-col: Give Online (1-Tap Copy) */}
            <div className="md:col-span-12 lg:col-span-3 rounded-3xl bg-[#141814] text-white p-6 flex flex-col justify-between shadow-sm space-y-4">
              <div className="space-y-1.5">
                <span className="text-[10.5px] font-bold uppercase tracking-widest text-[#8ce078]">
                  Interac e-Transfer
                </span>
                <h2 className="font-montserrat text-[20px] font-bold">
                  Give Online
                </h2>
                <p className="text-[12px] font-mono text-white/75 break-all">
                  {churchInfo.contact.givingEmail}
                </p>
              </div>
              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={copyGivingEmail}
                  className="w-full bg-[#8ce078] hover:bg-[#77d462] text-[#111511] text-[12px] font-extrabold uppercase tracking-wider py-2.5 rounded-full transition-colors cursor-pointer"
                >
                  {copiedEmail ? "Copied ✓" : "Copy Email"}
                </button>
                <Link
                  href="/giving"
                  className="block text-center text-[12px] text-white/75 hover:text-white underline"
                >
                  Tax Receipts &amp; More Ways →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          LATEST SERMONS CARD CONTAINER
          ===================================================================== */}
      <section className="w-full pb-12 md:pb-16">
        <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
          <div className="rounded-3xl bg-white border border-gray-200/80 p-6 sm:p-10 shadow-2xs">
            <LatestSermonsSection />
          </div>
        </div>
      </section>

      {/* =====================================================================
          REELS CONTAINER
          ===================================================================== */}
      <section className="w-full pb-12 md:pb-16">
        <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
          <div className="rounded-3xl bg-white border border-[#4F7942]/15 p-6 sm:p-10 shadow-2xs">
            <InstagramReelsSection
              limit={4}
              showViewAllButton={true}
              title="Worship & Community Reels"
              subtitle="Highlights from Sunday gatherings and community life at RCCG New Life Chapel."
            />
          </div>
        </div>
      </section>

      {/* =====================================================================
          ABOUT & REGISTERED CHARITY TRANSPARENCY STRIP
          ===================================================================== */}
      <section className="w-full pb-14">
        <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
          <div className="rounded-2xl bg-white border border-[#4F7942]/20 p-6 flex flex-col lg:flex-row items-center justify-between gap-4 shadow-2xs text-[13.5px]">
            <div className="text-center lg:text-left">
              <p className="font-semibold text-[#141814]">
                {churchInfo.charity.legalName} · CRA Charity #
                {churchInfo.charity.registrationNumber}
              </p>
              <p className="text-gray-600 text-[13px] mt-0.5">
                Registered Canadian Charitable Organization serving Lethbridge &amp;
                Southern Alberta.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 text-[12.5px] font-semibold">
              <Link
                href="/about"
                className="text-[#4F7942] hover:underline px-2 py-1"
              >
                About Us
              </Link>
              <Link
                href="/contact?tab=prayer"
                className="text-[#4F7942] hover:underline px-2 py-1"
              >
                Prayer Request
              </Link>
              <Link
                href="/links"
                className="text-[#4F7942] hover:underline px-2 py-1"
              >
                Quick Links
              </Link>
              <Link
                href="/privacy"
                className="text-[#4F7942] hover:underline px-2 py-1"
              >
                Privacy Policy
              </Link>
              <a
                href={churchInfo.charity.charityDataUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#f2f7f0] hover:bg-[#e3efe0] text-[#3B6331] px-3.5 py-1.5 rounded-full transition-colors"
              >
                CharityData Record ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
