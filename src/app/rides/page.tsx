import React from "react";
import type { Metadata } from "next";
import { churchInfo } from "@/data/churchData";

export const metadata: Metadata = {
  title: `Sunday Rides – ${churchInfo.name}`,
};

export default function RidesPage() {
  return (
    <div className="w-full py-6 bg-white">
      <div className="max-w-[720px] mx-auto px-[10px]">
        <iframe
          src="https://thehilltopch.ca/rides?church=new-life"
          width="100%"
          height="980"
          allow="clipboard-write"
          title="Sunday Rides - RCCG New Life Chapel"
          className="w-full min-h-[850px] h-[980px] border-0 rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
        />
      </div>
    </div>
  );
}
