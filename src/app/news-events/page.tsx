import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { churchInfo, churchEventsList } from "@/data/churchData";

export const metadata: Metadata = {
  title: `NEWS & EVENTS – ${churchInfo.name}`,
};

export default function NewsEventsPage() {
  return (
    <div className="w-full">
      <PageHero
        title="News & Events"
        backgroundImage="/images/gallery-05.jpg"
        overlayOpacity={0.78}
      />

      <section className="w-full py-14 md:py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-5">
          <div className="max-w-[780px] mb-12 space-y-3">
            <div className="w-16 h-[3px] bg-[#4F7942]" />
            <h2 className="text-[26px] md:text-[30px] font-semibold text-[#4F7942]">
              Upcoming Gatherings &amp; Regular Services
            </h2>
            <p className="text-[15px] text-[#242424] leading-[1.7]">
              Stay connected with what God is doing at RCCG New Life Chapel
              Lethbridge. For Youth &amp; Young Adults gatherings, we partner
              with our sister expression,{" "}
              <a
                href={churchInfo.hilltopChurch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4F7942] font-semibold underline hover:text-[#3d6032]"
              >
                The Hilltop Church (thehilltopch.ca)
              </a>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {churchEventsList.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-[#4F7942] text-white text-xs font-medium px-3 py-1 rounded shadow-xs">
                    {item.category}
                  </span>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <p className="text-[12.5px] font-semibold uppercase tracking-wide text-[#4F7942]">
                      {item.schedule}
                    </p>
                    <h3 className="text-[19px] font-semibold text-[#1d1d23] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[14px] text-gray-600 leading-[1.6]">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-[13px]">
                    <span className="text-gray-500 truncate mr-2">
                      📍 {item.location}
                    </span>
                    {item.ctaHref && item.ctaLabel && (
                      item.external ? (
                        <a
                          href={item.ctaHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#4F7942] hover:text-[#3b5c31] font-semibold shrink-0 hover:underline"
                        >
                          {item.ctaLabel} ↗
                        </a>
                      ) : (
                        <Link
                          href={item.ctaHref}
                          className="text-[#4F7942] hover:text-[#3b5c31] font-semibold shrink-0 hover:underline"
                        >
                          {item.ctaLabel} →
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
