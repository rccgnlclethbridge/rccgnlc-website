"use client";

import React, { useEffect } from "react";
import { churchInfo } from "@/data/churchData";

export default function RidesPage() {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // If the portal triggers a switch to Hilltop, direct immediately to the Hilltop site
      if (
        (event.data?.type === "SWITCH_CHURCH" && event.data?.church === "hilltop") ||
        (event.data?.type === "NAVIGATE" && event.data?.url?.includes("thehilltopch.ca"))
      ) {
        window.location.href = event.data.url || "https://thehilltopch.ca/rides";
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="w-full py-8 md:py-12 bg-[#fbfdfa]">
      {/* Top Direct Navigation Banner */}
      <div className="max-w-[720px] mx-auto px-4 mb-5">
        <div className="bg-white border border-[#4F7942]/20 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3 text-left">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4F7942] animate-pulse shrink-0" />
            <div>
              <p className="text-[14px] font-bold text-[#141814]">
                RCCG New Life Chapel Sunday Rides (9:30 AM Service)
              </p>
              <p className="text-[12px] text-gray-500">
                Complimentary door-to-door transportation across Lethbridge
              </p>
            </div>
          </div>

          <a
            href="https://thehilltopch.ca/rides"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-montserrat text-[12.5px] font-bold px-4 py-2.5 rounded-full transition-all shadow-xs shrink-0"
            title="Looking for Hilltop Youth Church Rides? Go to thehilltopch.ca/rides"
          >
            <span>Go to Hilltop Rides (12:00 PM)</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      {/* Embedded Live Rides Booking System */}
      <div className="max-w-[720px] mx-auto px-[10px]">
        <iframe
          src="https://thehilltopch.ca/rides?church=new-life"
          width="100%"
          height="1020"
          allow="clipboard-write"
          title="Sunday Rides - RCCG New Life Chapel"
          className="w-full min-h-[850px] h-[1020px] border-0 rounded-[20px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.1)]"
        />
      </div>
    </div>
  );
}
