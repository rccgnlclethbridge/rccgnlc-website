"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { churchInfo } from "@/data/churchData";
import LatestSermonsSection from "@/components/LatestSermonsSection";
import InstagramReelsSection from "@/components/InstagramReelsSection";

type ExperienceTab = "new" | "online" | "care";

const EXPERIENCE_DETAILS: Record<
  ExperienceTab,
  {
    eyebrow: string;
    heading: string;
    body: string;
    bullets: string[];
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  }
> = {
  new: {
    eyebrow: "Your First Sunday at 234 13 Street North",
    heading: "Gather With Us This Sunday at 9:30 AM",
    body: "Expect heartfelt worship, practical teaching rooted in Scripture, and a warm church family ready to welcome you and your household.",
    bullets: [
      "Sundays at 9:30 AM (Sunday School & Worship Service)",
      "Youth & Young Adults (Hilltop Church) Sundays at 12:00 PM",
      "Free door-to-door Sunday rides available across Lethbridge",
    ],
    primaryCta: { label: "Plan Your Visit →", href: "/contact?tab=visit" },
    secondaryCta: { label: "Book Free Sunday Ride", href: "/rides" },
  },
  online: {
    eyebrow: "Online Church & Mid-Week Community",
    heading: "Worship & Grow Wherever You Are",
    body: "Join our live services and mid-week Bible study from home, catch up on recent messages, or let our pastors stand in prayer with you.",
    bullets: [
      "Sunday services and recent messages streamed on YouTube",
      "Wednesday Digging Deep Bible Study at 7:00 PM (In-Person & Online)",
      "Confidential pastoral prayer requests & praise testimonies",
    ],
    primaryCta: { label: "Watch Sermons →", href: "/sermons" },
    secondaryCta: {
      label: "Submit Prayer Request",
      href: "/contact?tab=prayer",
    },
  },
  care: {
    eyebrow: `CRA Registered Charity #${churchInfo.charity.registrationNumber}`,
    heading: "Food Pantry, Counselling & Community Care",
    body: "We serve Lethbridge families, newcomers, and U of L / Polytechnic students with dignified weekly grocery hampers and Christian care — open to everyone.",
    bullets: [
      "Weekly Food Pantry — no church membership required, 100% confidential",
      "Christian counselling & compassionate family care referrals",
      "Opportunities to volunteer or donate groceries & pantry staples",
    ],
    primaryCta: {
      label: "Food Pantry & Care →",
      href: "/community-outreach",
    },
    secondaryCta: {
      label: "Book Counselling",
      href: "/contact?tab=counselling",
    },
  },
};

/**
 * Build 2: Elevation Church Style — minimalist monochrome black/white/cool-grey hierarchy,
 * generous breathing room, signature "Choose Your Experience" pathway switcher, and clean grids.
 */
export default function ElevationHomeBuild() {
  const [isMuted, setIsMuted] = useState(true);
  const [activeTab, setActiveTab] = useState<ExperienceTab>("new");
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleSound = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const tabData = EXPERIENCE_DETAILS[activeTab];

  return (
    <div className="w-full bg-white text-black">
      {/* =====================================================================
          MINIMALIST MONOCHROME CINEMA HERO
          ===================================================================== */}
      <section className="relative w-full min-h-[590px] sm:min-h-[670px] md:min-h-[84vh] flex flex-col justify-between overflow-hidden bg-black text-white">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          poster="/images/hero-merged-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover object-[center_16%] opacity-90"
          aria-hidden="true"
        >
          <source src="/videos/nlc-worship-merged.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/75" />

        <div className="h-8 pointer-events-none" />

        <div className="relative z-10 max-w-[960px] w-full mx-auto px-5 py-16 flex-1 flex flex-col items-center justify-center text-center">
          <p className="text-[11.5px] sm:text-[12.5px] font-semibold tracking-[0.28em] uppercase text-white/80 mb-4">
            RCCG NEW LIFE CHAPEL · LETHBRIDGE
          </p>

          <h1 className="font-montserrat text-[36px] sm:text-[52px] md:text-[64px] font-bold uppercase tracking-tight leading-[1.06] text-white mb-5 drop-shadow">
            See What God Can Do <br className="hidden sm:inline" />
            Through Your Life.
          </h1>

          <p className="text-[15px] sm:text-[17px] text-white/85 font-normal mb-9 tracking-wide">
            Sundays at 9:30 AM · 234 13 Street North, Lethbridge
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/sermons"
              className="bg-white hover:bg-neutral-200 text-black font-montserrat text-[13px] font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-all shadow-lg"
            >
              Watch Latest
            </Link>
            <Link
              href="/contact?tab=visit"
              className="bg-transparent hover:bg-white hover:text-black border border-white/75 text-white font-montserrat text-[13px] font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-all"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>

        <div className="relative z-20 max-w-[1220px] w-full mx-auto px-5 pb-6 flex justify-end pointer-events-none">
          <button
            type="button"
            onClick={toggleSound}
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            className="pointer-events-auto bg-black/55 hover:bg-black/80 text-white/90 border border-white/25 px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest backdrop-blur-md cursor-pointer transition-all"
          >
            {isMuted ? "Sound Off" : "Sound On"}
          </button>
        </div>
      </section>

      {/* =====================================================================
          CHOOSE YOUR EXPERIENCE — INTERACTIVE PATHWAY SELECTOR
          ===================================================================== */}
      <section className="w-full py-16 md:py-24 bg-white border-b border-neutral-200">
        <div className="max-w-[1060px] mx-auto px-5 sm:px-8 space-y-10">
          <div className="text-center space-y-3">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.26em] text-neutral-500">
              CHOOSE YOUR EXPERIENCE
            </p>
            <h2 className="font-montserrat text-[28px] sm:text-[38px] font-bold tracking-tight text-black">
              Where Would You Like to Begin?
            </h2>
          </div>

          {/* 3-Tab Monochrome Pill Bar */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {(
              [
                { id: "new", label: "I'm New Here" },
                { id: "online", label: "Watch & Connect Online" },
                { id: "care", label: "Care & Food Pantry" },
              ] as { id: ExperienceTab; label: string }[]
            ).map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full text-[13px] font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                    active
                      ? "bg-black text-white border-black shadow-md"
                      : "bg-[#F4F4F5] text-neutral-700 border-transparent hover:border-neutral-300"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Selected Pathway Card */}
          <div className="rounded-3xl bg-[#F4F4F5] border border-neutral-200/90 p-7 sm:p-10 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-[11.5px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                {tabData.eyebrow}
              </p>
              <h3 className="font-montserrat text-[24px] sm:text-[30px] font-bold text-black leading-tight">
                {tabData.heading}
              </h3>
              <p className="text-[15px] text-neutral-700 leading-relaxed">
                {tabData.body}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href={tabData.primaryCta.href}
                  className="bg-black hover:bg-neutral-800 text-white font-montserrat text-[12.5px] font-bold uppercase tracking-wider px-6 py-3.5 rounded-full transition-colors"
                >
                  {tabData.primaryCta.label}
                </Link>
                <Link
                  href={tabData.secondaryCta.href}
                  className="bg-white hover:bg-neutral-100 border border-neutral-300 text-black font-montserrat text-[12.5px] font-bold uppercase tracking-wider px-6 py-3.5 rounded-full transition-colors"
                >
                  {tabData.secondaryCta.label}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white rounded-2xl border border-neutral-200 p-6 space-y-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                What to Expect
              </p>
              <ul className="space-y-3 text-[13.5px] text-neutral-800">
                {tabData.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          MINIMALIST WEEKEND MESSAGE
          ===================================================================== */}
      <section className="w-full py-16 md:py-24 bg-[#F4F4F5]">
        <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
          <LatestSermonsSection />
        </div>
      </section>

      {/* =====================================================================
          4 EDGE-TO-EDGE MONOCHROME PHOTO PILLARS
          ===================================================================== */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-[1220px] mx-auto px-5 sm:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200 pb-6">
            <div>
              <p className="text-[11.5px] font-bold uppercase tracking-[0.24em] text-neutral-500">
                LIFE IN COMMUNITY
              </p>
              <h2 className="font-montserrat text-[28px] sm:text-[36px] font-bold tracking-tight text-black mt-1">
                Get Involved Across Every Season.
              </h2>
            </div>
            <Link
              href="/about"
              className="text-[13px] font-bold uppercase tracking-wider text-black hover:underline"
            >
              Meet Our Parish →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                label: "About",
                title: "Our Parish & Story",
                image: "/images/gallery-01.jpg",
                href: "/about",
                external: false,
              },
              {
                label: "Next Gen · 12 PM",
                title: "Hilltop Youth",
                image: "/images/youth-main.jpg",
                href: churchInfo.hilltopChurch.url,
                external: true,
              },
              {
                label: "Community Relief",
                title: "Food Pantry & Care",
                image: "/images/gallery-04.jpg",
                href: "/community-outreach",
                external: false,
              },
              {
                label: "Stewardship",
                title: "Generosity & Giving",
                image: "/images/giving-main.jpg",
                href: "/giving",
                external: false,
              },
            ].map((tile) => {
              const CardWrapper = tile.external ? "a" : Link;
              const linkProps = tile.external
                ? {
                    href: tile.href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : { href: tile.href };

              return (
                <CardWrapper
                  key={tile.title}
                  {...linkProps}
                  className="group relative rounded-2xl overflow-hidden min-h-[360px] flex flex-col justify-end p-6 bg-black"
                >
                  <img
                    src={tile.image}
                    alt={tile.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                  <div className="relative z-10 text-white space-y-1">
                    <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-white/70">
                      {tile.label}
                    </span>
                    <h3 className="font-montserrat text-[20px] font-bold tracking-tight flex items-center justify-between">
                      <span>{tile.title}</span>
                      <span>{tile.external ? "↗" : "→"}</span>
                    </h3>
                  </div>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          STARK BLACK ARCHITECTURAL LETHBRIDGE LOCATION BAND
          ===================================================================== */}
      <section className="w-full py-16 md:py-20 bg-black text-white">
        <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.24em] text-[#8ce078]">
                Worship In Lethbridge
              </span>
              <h2 className="font-montserrat text-[30px] sm:text-[40px] font-bold tracking-tight leading-tight">
                Join Us at 234 13 Street North.
              </h2>
              <p className="text-[15px] text-neutral-300 leading-relaxed max-w-[500px]">
                Every Sunday at 9:30 AM and Wednesdays at 7:00 PM — plus Hilltop
                Youth &amp; Young Adults Sundays at 12:00 PM.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={churchInfo.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-neutral-200 text-black font-montserrat text-[12.5px] font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-colors"
                >
                  Google Maps Directions ↗
                </a>
                <Link
                  href="/rides"
                  className="border border-white/30 hover:border-white text-white font-montserrat text-[12.5px] font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-colors"
                >
                  Free Sunday Rides →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-6 space-y-1.5">
                <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                  Sunday Gathering
                </p>
                <p className="font-montserrat text-[18px] font-bold">9:30 AM</p>
                <p className="text-[13px] text-neutral-400">
                  Sunday School &amp; Worship Service
                </p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-6 space-y-1.5">
                <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                  Mid-Week Service
                </p>
                <p className="font-montserrat text-[18px] font-bold">
                  Wed · 7:00 PM
                </p>
                <p className="text-[13px] text-neutral-400">
                  Bible Study &amp; 2nd Wed Communion
                </p>
              </div>
              <div className="sm:col-span-2 rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-4 flex flex-wrap items-center justify-between gap-2 text-[12.5px]">
                <span className="text-neutral-300">
                  {churchInfo.charity.legalName}
                </span>
                <a
                  href={churchInfo.charity.charityDataUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8ce078] font-mono font-semibold hover:underline"
                >
                  CRA #{churchInfo.charity.registrationNumber} ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          CLEAN WHITE WORSHIP REELS
          ===================================================================== */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
          <InstagramReelsSection
            limit={4}
            showViewAllButton={true}
            title="Moments From Church Life"
            subtitle="Explore worship, teaching, and fellowship highlights from @rccgnlclethbridge."
          />
        </div>
      </section>
    </div>
  );
}
