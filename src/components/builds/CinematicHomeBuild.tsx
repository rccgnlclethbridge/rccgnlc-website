"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { churchInfo } from "@/data/churchData";
import LatestSermonsSection from "@/components/LatestSermonsSection";
import InstagramReelsSection from "@/components/InstagramReelsSection";

interface ServiceCountdown {
  label: string;
  timeDisplay: string;
  remaining: string;
}

/**
 * Computes countdown to the next upcoming worship gathering (Sunday 9:30 AM
 * or Wednesday 7:00 PM) in Lethbridge time (America/Edmonton).
 */
function getNextServiceCountdown(): ServiceCountdown {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Edmonton",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  }).formatToParts(new Date());

  const dayStr = parts.find((p) => p.type === "weekday")?.value ?? "Sun";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  const second = Number(parts.find((p) => p.type === "second")?.value ?? 0);

  const dayMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };
  const dow = dayMap[dayStr] ?? 0;
  const nowMinutesOfWeek = dow * 1440 + hour * 60 + minute;

  const targets = [
    {
      targetMinute: 0 * 1440 + 9 * 60 + 30,
      label: "Sunday Worship & School",
      timeDisplay: "Sundays · 9:30 AM MT",
    },
    {
      targetMinute: 3 * 1440 + 19 * 60,
      label: "Wednesday Bible Study",
      timeDisplay: "Wednesdays · 7:00 PM MT",
    },
  ];

  const weekMinutes = 7 * 1440;
  let best = targets[0];
  let bestDiffSeconds = Number.MAX_SAFE_INTEGER;

  for (const t of targets) {
    let diffMin = t.targetMinute - nowMinutesOfWeek;
    if (diffMin <= 0) diffMin += weekMinutes;
    const diffSec = diffMin * 60 - second;
    if (diffSec < bestDiffSeconds) {
      bestDiffSeconds = diffSec;
      best = t;
    }
  }

  const d = Math.floor(bestDiffSeconds / 86400);
  const h = Math.floor((bestDiffSeconds % 86400) / 3600);
  const m = Math.floor((bestDiffSeconds % 3600) / 60);

  return {
    label: best.label,
    timeDisplay: best.timeDisplay,
    remaining: d > 0 ? `${d}d ${h}h ${m}m` : `${h}h ${m}m`,
  };
}

/**
 * Build 2: Cinematic Revival — deep obsidian first-impression, electric lime-emerald
 * highlights, live next-service countdown dock, and dark media theatre.
 */
export default function CinematicHomeBuild() {
  const [isMuted, setIsMuted] = useState(true);
  const [countdown, setCountdown] = useState<ServiceCountdown | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    setCountdown(getNextServiceCountdown());
    const id = window.setInterval(() => {
      setCountdown(getNextServiceCountdown());
    }, 30000);
    return () => window.clearInterval(id);
  }, []);

  const toggleSound = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <div className="w-full bg-[#0B0E0C] text-white">
      {/* =====================================================================
          HERO: FULL-BLEED OBSIDIAN CINEMA HERO + LIVE SERVICE COUNTDOWN
          ===================================================================== */}
      <section className="relative w-full min-h-[610px] sm:min-h-[680px] md:min-h-[86vh] flex flex-col justify-between overflow-hidden bg-[#060807]">
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

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#0B0E0C]" />

        <div className="h-8 pointer-events-none" />

        <div className="relative z-10 max-w-[1100px] w-full mx-auto px-5 py-14 flex-1 flex flex-col items-center justify-center text-center">
          <p className="text-[11.5px] sm:text-[13px] font-bold tracking-[0.3em] uppercase text-[#7CE36B] mb-4 drop-shadow">
            RCCG NEW LIFE CHAPEL • LETHBRIDGE, AB
          </p>

          <h1 className="font-montserrat text-[38px] sm:text-[54px] md:text-[68px] lg:text-[74px] font-extrabold uppercase leading-[1.03] tracking-tight text-white max-w-[960px] mb-5 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            Experience <br className="hidden sm:inline" />
            <span className="text-[#7CE36B]">A New Life.</span>
          </h1>

          <p className="text-[15.5px] sm:text-[18px] text-white/90 max-w-[600px] mb-9 leading-relaxed">
            Reconciling with God and enjoying life in abundance (John 10:10).
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?tab=visit"
              className="inline-flex items-center gap-2.5 bg-[#7CE36B] hover:bg-[#66d155] text-[#0B0E0C] font-montserrat text-[13.5px] font-extrabold uppercase tracking-wider px-8 py-4 rounded-full transition-all shadow-[0_8px_28px_rgba(124,227,107,0.35)] hover:-translate-y-0.5"
            >
              <span>Plan A Visit</span>
              <span>→</span>
            </Link>

            <Link
              href="/sermons"
              className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white hover:text-[#0B0E0C] backdrop-blur-md border border-white/35 text-white font-montserrat text-[13.5px] font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-all"
            >
              <span>Watch Online</span>
            </Link>
          </div>
        </div>

        {/* Audio Pill */}
        <div className="relative z-20 max-w-[1220px] w-full mx-auto px-5 pb-4 flex justify-end pointer-events-none">
          <button
            type="button"
            onClick={toggleSound}
            aria-label={isMuted ? "Unmute worship audio" : "Mute worship audio"}
            className="pointer-events-auto inline-flex items-center gap-2 bg-black/60 hover:bg-black/85 backdrop-blur-md border border-white/20 text-white px-3.5 py-2 rounded-full text-[11.5px] font-semibold uppercase tracking-wider cursor-pointer transition-all"
          >
            <span
              className={`w-2 h-2 rounded-full ${
                isMuted ? "bg-white/45" : "bg-[#7CE36B] animate-pulse"
              }`}
            />
            <span>{isMuted ? "Sound Off" : "Sound On"}</span>
          </button>
        </div>

        {/* Live Next Service Countdown Dock */}
        <div className="relative z-20 w-full bg-[#111613]/92 backdrop-blur-lg border-t border-white/10">
          <div className="max-w-[1220px] mx-auto px-5 sm:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[13px]">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <span className="inline-flex items-center gap-1.5 bg-[#7CE36B]/15 border border-[#7CE36B]/40 text-[#7CE36B] px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#7CE36B] animate-pulse" />
                Next Gathering
              </span>
              <span className="font-semibold text-white">
                {countdown ? countdown.label : "Sunday Worship & School"}
              </span>
              <span className="text-white/55">·</span>
              <span className="text-white/75">
                {countdown ? countdown.timeDisplay : "Sundays · 9:30 AM MT"}
              </span>
              {countdown && (
                <span className="font-mono font-bold text-[#7CE36B] bg-white/5 px-2.5 py-0.5 rounded-md border border-white/10">
                  in {countdown.remaining}
                </span>
              )}
            </div>

            <div className="flex items-center gap-4 text-white/75 text-[12.5px]">
              <span>234 13 St N, Lethbridge</span>
              <Link
                href="/rides"
                className="text-[#7CE36B] font-semibold hover:underline"
              >
                Free Sunday Rides →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          DARK SERMON THEATRE
          ===================================================================== */}
      <section className="w-full py-16 md:py-24 bg-[#0F1411] border-t border-white/5">
        <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
          <LatestSermonsSection dark />
        </div>
      </section>

      {/* =====================================================================
          FULL-BLEED DUAL EXPRESSIONS (HILLTOP YOUTH + FOOD PANTRY)
          ===================================================================== */}
      <section className="w-full py-16 md:py-24 bg-[#0B0E0C] border-t border-white/5">
        <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-[11.5px] font-bold uppercase tracking-[0.24em] text-[#7CE36B] mb-2">
                CITY CARE &amp; NEXT GEN
              </p>
              <h2 className="font-montserrat text-[30px] sm:text-[40px] font-extrabold uppercase tracking-tight text-white leading-tight">
                Church Outside Four Walls.
              </h2>
            </div>
            <span className="text-[12px] text-white/60 border border-white/15 bg-white/5 px-3.5 py-1.5 rounded-full self-start sm:self-auto">
              Registered Charity #{churchInfo.charity.registrationNumber}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group relative rounded-3xl overflow-hidden min-h-[430px] flex flex-col justify-end p-8 sm:p-10 border border-white/10 shadow-2xl">
              <img
                src="/images/youth-main.jpg"
                alt="RCCG Hilltop Church - Youth & Young Adults"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25" />

              <div className="relative z-10 space-y-3">
                <span className="inline-block bg-[#7CE36B] text-[#0B0E0C] text-[11px] font-extrabold uppercase tracking-widest px-3.5 py-1 rounded-full">
                  SUNDAYS AT 12:00 PM · STUDENTS &amp; YOUNG ADULTS
                </span>
                <h3 className="font-montserrat text-[28px] sm:text-[34px] font-extrabold uppercase tracking-tight text-white">
                  RCCG Hilltop Church
                </h3>
                <p className="text-[15px] text-white/80 leading-relaxed max-w-[480px]">
                  Equipping students, young adults, and young families across
                  Lethbridge to know Christ and make Him known.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={churchInfo.hilltopChurch.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-[#0B0E0C] hover:bg-[#7CE36B] font-montserrat text-[13px] font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-colors"
                  >
                    <span>Visit thehilltopch.ca</span>
                    <span>↗</span>
                  </a>
                  <Link
                    href="/youth"
                    className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-montserrat text-[13px] font-bold uppercase tracking-wider px-5 py-3 rounded-full transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative rounded-3xl overflow-hidden min-h-[430px] flex flex-col justify-end p-8 sm:p-10 border border-white/10 shadow-2xl">
              <img
                src="/images/gallery-04.jpg"
                alt="Weekly Food Pantry & Community Care"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25" />

              <div className="relative z-10 space-y-3">
                <span className="inline-block bg-white/15 backdrop-blur-md border border-white/20 text-[#7CE36B] text-[11px] font-extrabold uppercase tracking-widest px-3.5 py-1 rounded-full">
                  OPEN ACCESS · FOOD PANTRY &amp; COUNSELLING
                </span>
                <h3 className="font-montserrat text-[28px] sm:text-[34px] font-extrabold uppercase tracking-tight text-white">
                  Food Pantry &amp; City Care
                </h3>
                <p className="text-[15px] text-white/80 leading-relaxed max-w-[480px]">
                  Weekly grocery support open to all Lethbridge families and
                  students, alongside confidential Christian counselling.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <Link
                    href="/community-outreach"
                    className="inline-flex items-center gap-2 bg-[#7CE36B] hover:bg-[#66d155] text-[#0B0E0C] font-montserrat text-[13px] font-extrabold uppercase tracking-wider px-6 py-3 rounded-full transition-colors"
                  >
                    <span>Food Pantry</span>
                    <span>→</span>
                  </Link>
                  <Link
                    href="/contact?tab=counselling"
                    className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-montserrat text-[13px] font-bold uppercase tracking-wider px-5 py-3 rounded-full transition-colors"
                  >
                    Book Counselling
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          DARK VERTICAL REELS SHOWCASE
          ===================================================================== */}
      <section className="w-full py-16 md:py-24 bg-[#0F1411] border-t border-white/5">
        <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
          <InstagramReelsSection
            dark
            limit={4}
            showViewAllButton={true}
            title="Worship & Fellowship Highlights"
            subtitle="Moments from @rccgnlclethbridge across worship nights, Bible study, and community outreach."
          />
        </div>
      </section>

      {/* =====================================================================
          GLASSMORPHIC KINETIC NEXT STEPS
          ===================================================================== */}
      <section className="w-full py-16 md:py-20 bg-[#0B0E0C] border-t border-white/10">
        <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-10 space-y-2">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.24em] text-[#7CE36B]">
              TAKE YOUR NEXT STEP
            </p>
            <h2 className="font-montserrat text-[28px] sm:text-[36px] font-extrabold uppercase tracking-tight text-white">
              Get Connected in Seconds
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                num: "01 · Welcome",
                title: "Plan A Visit →",
                desc: "Tell our Welcome Team when you're visiting so we can greet you.",
                href: "/contact?tab=visit",
              },
              {
                num: "02 · Rides",
                title: "Free Sunday Rides →",
                desc: "Request complimentary Sunday pickup anywhere in Lethbridge.",
                href: "/rides",
              },
              {
                num: "03 · Prayer",
                title: "Prayer & Care →",
                desc: "Submit confidential prayer requests or book Christian counselling.",
                href: "/contact?tab=prayer",
              },
              {
                num: "04 · Stewardship",
                title: "Ways to Give →",
                desc: "Support ministry and our Food Pantry with CRA receipting.",
                href: "/giving",
              },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group p-6 rounded-2xl bg-white/[0.05] hover:bg-[#7CE36B] border border-white/10 hover:border-[#7CE36B] transition-all duration-300 space-y-2.5"
              >
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#7CE36B] group-hover:text-[#0B0E0C]/75">
                  {card.num}
                </span>
                <h3 className="font-montserrat text-[18px] font-bold text-white group-hover:text-[#0B0E0C]">
                  {card.title}
                </h3>
                <p className="text-[13.5px] text-white/70 group-hover:text-[#0B0E0C]/85 leading-relaxed">
                  {card.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
