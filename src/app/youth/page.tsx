import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { churchInfo } from "@/data/churchData";

export const metadata: Metadata = {
  title: `YOUTH & YOUNG ADULTS (HILLTOP CHURCH) – ${churchInfo.name}`,
};

export default function YouthPage() {
  return (
    <div className="w-full">
      <PageHero
        title="Youth & Young Adults — The Hilltop Church"
        backgroundImage="/images/hero-youth.jpeg"
        overlayOpacity={0.76}
      />

      <section className="w-full py-14 md:py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Column: Text & Hilltop Church Callout */}
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 bg-[#E9FCE3] text-[#3a5c30] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-[#4F7942]/20">
                <span>RCCG Lethbridge • Youth &amp; Young Adults</span>
              </div>

              <h2 className="text-[26px] md:text-[30px] font-bold text-[#4F7942] leading-tight">
                Welcome to The Hilltop Church!
              </h2>

              <p className="text-[16px] font-medium text-[#1d1d23] leading-[1.6]">
                Our Youth and Young Adults ministry in Lethbridge has grown into{" "}
                <a
                  href={churchInfo.hilltopChurch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4F7942] font-bold underline hover:text-[#3d6032]"
                >
                  The Hilltop Church
                </a>{" "}
                — a vibrant Young Adults &amp; Family expression equipping young
                people to be heaven-ready and earthly relevant.
              </p>

              <p className="text-[15px] text-black leading-[1.6]">
                Our guiding words are culled from the Holy Words of Luke 1:37:{" "}
                <em className="italic font-medium">
                  “With God nothing is impossible”
                </em>{" "}
                and Micah 4:1–2:{" "}
                <em className="italic font-medium">“Come. Let us go up.”</em>
              </p>

              <p className="text-[15px] text-black leading-[1.6]">
                We’re difference makers. Our voices matter and our lives were
                built to have an impact. We’re here to share life, to share our
                stories, and to share Jesus with our friends, campus, city, and
                country.
              </p>

              {/* Hilltop Gathering Info Box */}
              <div className="bg-[#f2f7f0] border-l-4 border-[#4F7942] p-5 rounded-r-md space-y-2">
                <h3 className="text-[16px] font-bold text-[#1d1d23]">
                  Join Us at The Hilltop Church
                </h3>
                <p className="text-[14px] text-[#242424]">
                  <strong>Sunday Services:</strong> 12:00 PM (Sunday School) &amp;
                  12:30 PM (Main Service)
                </p>
                <p className="text-[14px] text-[#242424]">
                  <strong>Mid-Week Discipleship:</strong> Wednesdays @ 7:00 PM
                </p>
                <p className="text-[14px] text-[#242424]">
                  <strong>Night of Wonders &amp; Tarry:</strong> Last Friday @
                  6:30 PM
                </p>
                <p className="text-[14px] text-[#242424]">
                  <strong>Location:</strong> 234 13 Street North, Lethbridge, AB
                </p>
              </div>

              {/* Quick Action Buttons */}
              <div className="pt-3 flex flex-wrap gap-3">
                <a
                  href={churchInfo.hilltopChurch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#4F7942] hover:bg-[#3d6032] text-white text-[14px] font-semibold px-6 py-3 rounded-[4px] transition-colors inline-flex items-center gap-2 shadow-sm"
                >
                  <span>Visit The Hilltop Church (thehilltopch.ca)</span>
                  <span>↗</span>
                </a>
                <Link
                  href="/rides"
                  className="border border-[#4F7942] text-[#4F7942] hover:bg-[#f2f7f0] text-[14px] font-medium px-5 py-3 rounded-[4px] transition-colors"
                >
                  Book a Sunday Ride
                </Link>
                <Link
                  href="/youth-adult-hangout"
                  className="text-[#4F7942] hover:underline text-[14px] font-medium px-3 py-3"
                >
                  View Hangout Photos →
                </Link>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="flex justify-center">
              <img
                src="/images/youth-main.jpg"
                alt="The Hilltop Church Youth & Young Adults"
                className="w-full max-w-[460px] h-auto rounded-sm shadow-sm object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
