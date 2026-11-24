"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { churchInfo } from "@/data/churchData";
import LatestSermonsSection from "@/components/LatestSermonsSection";
import InstagramReelsSection from "@/components/InstagramReelsSection";

const MARQUEE_ITEMS = [
  "SUNDAYS 9:30 AM",
  "WEDNESDAYS 7:00 PM",
  "234 13 ST N LETHBRIDGE",
  "HILLTOP YOUTH 12:00 PM",
  "FREE SUNDAY RIDES",
];

/**
 * Build 1: Transformation Church Style — pitch-black (#0A0A0A) alternating with crisp off-white
 * (#F5F4F0), kinetic ticker ribbon, giant bold uppercase type, and vibrant green (#5CE676) highlights.
 */
export default function TransformationHomeBuild() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleSound = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <div className="w-full bg-[#0A0A0A] text-white">
      {/* =====================================================================
          FULL-VIEWPORT BLACK CINEMA HERO + KINETIC STATEMENT RIBBON
          ===================================================================== */}
      <section className="relative w-full min-h-[620px] sm:min-h-[700px] md:min-h-[86vh] flex flex-col justify-between overflow-hidden bg-[#070707]">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          poster="/images/hero-merged-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover object-[center_16%] scale-[1.01]"
          aria-hidden="true"
        >
          <source src="/videos/nlc-worship-merged.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/55 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/40" />

        <div className="h-8 pointer-events-none" />

        {/* Left-Aligned Monumental Display Lockup */}
        <div className="relative z-10 max-w-[1220px] w-full mx-auto px-5 sm:px-8 py-14 flex-1 flex flex-col justify-center">
          <div className="max-w-[780px] space-y-6">
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#5CE676] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#5CE676]">
                RCCG New Life Chapel · Lethbridge
              </span>
            </div>

            <h1 className="font-montserrat text-[40px] sm:text-[58px] md:text-[72px] lg:text-[80px] font-extrabold uppercase leading-[0.96] tracking-tighter text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.85)]">
              Representing God. <br />
              Experiencing <br />
              <span className="text-[#5CE676]">New Life.</span>
            </h1>

            <p className="text-[16px] sm:text-[18px] text-white/85 max-w-[540px] leading-relaxed font-normal">
              A church of open arms, an open Bible, and abundant life in Christ
              (John 10:10). Come expectant this Sunday.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact?tab=visit"
                className="inline-flex items-center gap-2.5 bg-white hover:bg-[#5CE676] text-[#0A0A0A] font-montserrat text-[13.5px] font-extrabold uppercase tracking-wider px-8 py-4 rounded-full transition-all shadow-xl hover:-translate-y-0.5"
              >
                <span>I&apos;m New Here</span>
                <span>→</span>
              </Link>

              <Link
                href="/sermons"
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/40 text-white font-montserrat text-[13.5px] font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-all"
              >
                <span>Watch Latest</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Sound Pill */}
        <div className="relative z-20 max-w-[1220px] w-full mx-auto px-5 sm:px-8 pb-4 flex justify-end pointer-events-none">
          <button
            type="button"
            onClick={toggleSound}
            aria-label={isMuted ? "Unmute worship audio" : "Mute worship audio"}
            className="pointer-events-auto inline-flex items-center gap-2 bg-black/65 hover:bg-black border border-white/25 text-white px-3.5 py-2 rounded-full text-[11.5px] font-bold uppercase tracking-wider cursor-pointer transition-all backdrop-blur-md"
          >
            <span
              className={`w-2 h-2 rounded-full ${
                isMuted ? "bg-white/45" : "bg-[#5CE676] animate-pulse"
              }`}
            />
            <span>{isMuted ? "Sound Off" : "Sound On"}</span>
          </button>
        </div>

        {/* Horizontal Kinetic Statement Marquee Ribbon */}
        <div className="relative z-20 w-full bg-[#5CE676] text-[#0A0A0A] overflow-hidden py-3 border-y border-black/15">
          <div className="animate-nlc-marquee font-montserrat text-[12px] sm:text-[13px] font-extrabold uppercase tracking-[0.2em]">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex items-center shrink-0">
                {MARQUEE_ITEMS.map((item, idx) => (
                  <span key={`${dup}-${idx}`} className="inline-flex items-center">
                    <span className="px-5">{item}</span>
                    <span className="opacity-50">•</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          FULL-BLEED DARK MESSAGE HUB
          ===================================================================== */}
      <section className="w-full py-16 md:py-24 bg-[#0A0A0A]">
        <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
          <LatestSermonsSection dark />
        </div>
      </section>

      {/* =====================================================================
          OFF-WHITE EDITORIAL STORY SPLIT
          ===================================================================== */}
      <section className="w-full py-16 md:py-24 bg-[#F5F4F0] text-[#0A0A0A]">
        <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#4F7942]">
                WHO WE ARE · JOHN 10:10
              </p>

              <h2 className="font-montserrat text-[36px] sm:text-[48px] md:text-[54px] font-extrabold uppercase tracking-tighter text-[#0A0A0A] leading-[0.98]">
                Open Arms. <br />
                Open Bible. <br />
                <span className="text-[#4F7942]">Open Heart.</span>
              </h2>

              <p className="text-[15.5px] sm:text-[16.5px] text-neutral-700 leading-[1.75]">
                New Life Chapel Lethbridge is a parish of The Redeemed Christian
                Church of God — welcoming seekers, University of Lethbridge and
                Lethbridge Polytechnic students, and families from every nation.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-[#0A0A0A] hover:bg-[#4F7942] text-white font-montserrat text-[13px] font-extrabold uppercase tracking-wider px-7 py-3.5 rounded-full transition-colors"
                >
                  <span>Our Parish Story</span>
                  <span>→</span>
                </Link>
                <Link
                  href="/statement-of-faith"
                  className="inline-flex items-center gap-2 bg-white hover:bg-neutral-200 border border-black/15 text-[#0A0A0A] font-montserrat text-[13px] font-bold uppercase tracking-wider px-6 py-3.5 rounded-full transition-colors"
                >
                  <span>Statement of Faith</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.16)] aspect-[4/3]">
                <img
                  src="/images/gallery-01.jpg"
                  alt="RCCG New Life Chapel Community"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block bg-[#5CE676] text-[#0A0A0A] text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                    Everyone Belongs
                  </span>
                  <p className="text-[14.5px] font-medium text-white/95">
                    “A clinic for sinners, a home for spiritual maturity, and an
                    outpost for touching the world.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          BOLD 3-CARD ASYMMETRIC DARK MINISTRIES SHOWCASE
          ===================================================================== */}
      <section className="w-full py-16 md:py-24 bg-[#0A0A0A] text-white">
        <div className="max-w-[1220px] mx-auto px-5 sm:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#5CE676] mb-2">
                IMPACT &amp; EXPRESSIONS
              </p>
              <h2 className="font-montserrat text-[32px] sm:text-[42px] font-extrabold uppercase tracking-tighter leading-none">
                Move With Purpose.
              </h2>
            </div>
            <span className="text-[12px] text-white/60 font-mono">
              Registered Charity #{churchInfo.charity.registrationNumber}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Large Hero Ministry Card (6 cols) */}
            <div className="lg:col-span-6 group relative rounded-3xl overflow-hidden min-h-[420px] flex flex-col justify-end p-8 border border-white/10">
              <img
                src="/images/youth-main.jpg"
                alt="The Hilltop Church - Youth & Students"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/20" />
              <div className="relative z-10 space-y-3">
                <span className="inline-block bg-[#5CE676] text-[#0A0A0A] text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full">
                  Sundays 12:00 PM · Students &amp; Youth
                </span>
                <h3 className="font-montserrat text-[28px] font-extrabold uppercase tracking-tight">
                  The Hilltop Church
                </h3>
                <p className="text-[14.5px] text-white/80 max-w-[440px]">
                  Equipping young people, university students, and young
                  families across Lethbridge.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={churchInfo.hilltopChurch.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#0A0A0A] hover:bg-[#5CE676] text-[12.5px] font-extrabold uppercase tracking-wider px-5 py-2.5 rounded-full transition-colors"
                  >
                    Visit thehilltopch.ca ↗
                  </a>
                  <Link
                    href="/youth"
                    className="bg-white/15 hover:bg-white/25 text-white text-[12.5px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-colors"
                  >
                    Youth Page
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Stack: Food Pantry + Free Sunday Rides (6 cols) */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="flex-1 group relative rounded-3xl overflow-hidden min-h-[200px] flex flex-col justify-end p-7 border border-white/10">
                <img
                  src="/images/gallery-04.jpg"
                  alt="Weekly Food Pantry & City Care"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/30" />
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#5CE676]">
                      CRA #{churchInfo.charity.registrationNumber} · Open to All
                    </span>
                    <h3 className="font-montserrat text-[24px] font-extrabold uppercase tracking-tight">
                      Weekly Food Pantry
                    </h3>
                    <p className="text-[13.5px] text-white/80 max-w-[360px]">
                      Confidential grocery hampers &amp; Christian counselling
                      for Lethbridge households.
                    </p>
                  </div>
                  <Link
                    href="/community-outreach"
                    className="bg-[#5CE676] hover:bg-white text-[#0A0A0A] text-[12px] font-extrabold uppercase tracking-wider px-5 py-2.5 rounded-full transition-colors shrink-0 self-start sm:self-end"
                  >
                    Food Pantry →
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl bg-[#151816] border border-white/12 p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#5CE676]">
                    Door-to-Door Sunday Pickup
                  </span>
                  <h3 className="font-montserrat text-[24px] font-extrabold uppercase tracking-tight">
                    Free Sunday Rides
                  </h3>
                  <p className="text-[13.5px] text-white/75 max-w-[360px]">
                    Complimentary pickup across Lethbridge for 9:30 AM worship.
                  </p>
                </div>
                <Link
                  href="/rides"
                  className="bg-white hover:bg-[#5CE676] text-[#0A0A0A] text-[12px] font-extrabold uppercase tracking-wider px-5 py-3 rounded-full transition-colors shrink-0 self-start sm:self-center"
                >
                  Book Ride →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          DARK WORSHIP REELS
          ===================================================================== */}
      <section className="w-full py-16 md:py-24 bg-[#111312] border-t border-white/5">
        <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
          <InstagramReelsSection
            dark
            limit={4}
            showViewAllButton={true}
            title="Worship & Fellowship Reels"
            subtitle="Experience Sunday praise, biblical teaching, and church family moments across @rccgnlclethbridge."
          />
        </div>
      </section>

      {/* =====================================================================
          HIGH-CONTRAST 4-STEP PATHWAY STRIP
          ===================================================================== */}
      <section className="w-full py-16 md:py-20 bg-[#F5F4F0] text-[#0A0A0A]">
        <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#4F7942]">
                YOUR NEXT STEP
              </p>
              <h2 className="font-montserrat text-[30px] sm:text-[38px] font-extrabold uppercase tracking-tighter">
                Connect With Us Today.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                num: "01",
                tag: "New Here",
                title: "Plan A Visit →",
                desc: "Let our Welcome Team know you're coming Sunday at 9:30 AM.",
                href: "/contact?tab=visit",
              },
              {
                num: "02",
                tag: "Sunday Rides",
                title: "Book Pickup →",
                desc: "Request a free Sunday morning ride across Lethbridge.",
                href: "/rides",
              },
              {
                num: "03",
                tag: "Prayer & Care",
                title: "Get Support →",
                desc: "Confidential prayer requests or Christian counselling.",
                href: "/contact?tab=prayer",
              },
              {
                num: "04",
                tag: "Generosity",
                title: "Ways to Give →",
                desc: "Give securely with official CRA charitable tax receipts.",
                href: "/giving",
              },
            ].map((item) => (
              <Link
                key={item.num}
                href={item.href}
                className="group bg-white hover:bg-[#0A0A0A] border border-black/10 p-6 rounded-2xl transition-all duration-300 space-y-2.5 shadow-2xs"
              >
                <div className="flex items-center justify-between text-[11px] font-extrabold uppercase tracking-widest">
                  <span className="text-[#4F7942] group-hover:text-[#5CE676]">
                    {item.num} · {item.tag}
                  </span>
                </div>
                <h3 className="font-montserrat text-[19px] font-extrabold uppercase tracking-tight text-[#0A0A0A] group-hover:text-white">
                  {item.title}
                </h3>
                <p className="text-[13.5px] text-neutral-600 group-hover:text-white/75 leading-relaxed">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
