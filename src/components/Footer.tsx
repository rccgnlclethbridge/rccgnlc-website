"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { churchInfo } from "@/data/churchData";

export default function Footer() {
  const pathname = usePathname();

  // On the standalone mobile link-in-bio page, suppress the global desktop footer
  if (pathname === "/links") return null;

  return (
    <footer className="w-full mt-auto bg-[#111511] text-white border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-12 sm:pt-14 pb-16 sm:pb-12">
        {/* 3-Column Clean Modern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-white/10">
          {/* Col 1 (5 cols): Brand, Mission & Socials */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <img
                src={churchInfo.logo}
                alt={churchInfo.name}
                className="w-12 h-12 object-contain bg-white rounded-xl p-1 shadow-xs"
              />
              <div>
                <span className="block font-montserrat text-[13.5px] font-extrabold uppercase tracking-wider text-white leading-tight">
                  RCCG New Life Chapel
                </span>
                <span className="block text-[11px] font-semibold uppercase tracking-widest text-[#8ce078]">
                  Lethbridge, Alberta
                </span>
              </div>
            </Link>

            <p className="text-[13.5px] text-white/70 leading-relaxed max-w-[340px]">
              A place of reconciliation, faith, and abundant life in Christ Jesus (John 10:10). Everyone is welcome.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={churchInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#4F7942] flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 320 512">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>

              <a
                href={churchInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#4F7942] flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z" />
                </svg>
              </a>

              <a
                href={churchInfo.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#4F7942] flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 576 512">
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 (4 cols): Clean Service Times */}
          <div className="lg:col-span-4 space-y-3.5 text-[13.5px]">
            <h3 className="font-montserrat text-[12px] font-bold uppercase tracking-[0.2em] text-[#8ce078]">
              Service Times
            </h3>

            <div className="space-y-3 text-white/80">
              <div>
                <p className="font-semibold text-white">Sunday Worship &amp; School</p>
                <p className="text-white/65 text-[13px]">Sundays at 9:30 AM</p>
              </div>

              <div>
                <p className="font-semibold text-white">Mid-Week Bible Study</p>
                <p className="text-white/65 text-[13px]">Wednesdays at 7:00 PM</p>
              </div>

              <div className="pt-1">
                <p className="font-semibold text-white">Youth &amp; Young Adults</p>
                <a
                  href={churchInfo.hilltopChurch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[13px] text-[#8ce078] hover:underline"
                >
                  <span>Hilltop Church · Sundays at 12:00 PM</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 3 (3 cols): Location & Direct Links */}
          <div className="lg:col-span-3 space-y-3.5 text-[13.5px]">
            <h3 className="font-montserrat text-[12px] font-bold uppercase tracking-[0.2em] text-[#8ce078]">
              Location &amp; Links
            </h3>

            <div>
              <p className="font-semibold text-white">234 13 Street North</p>
              <p className="text-white/65 text-[13px]">Lethbridge, AB T1H 2R7</p>
              <a
                href={churchInfo.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[12.5px] text-[#8ce078] hover:underline pt-0.5"
              >
                <span>Google Maps Directions ↗</span>
              </a>
            </div>

            <nav aria-label="Footer Quick Links" className="grid grid-cols-2 gap-y-2 gap-x-3 pt-1 text-[13px]">
              <Link href="/contact?tab=visit" className="text-white/70 hover:text-white transition-colors">
                Plan A Visit
              </Link>
              <Link href="/rides" className="text-white/70 hover:text-white transition-colors">
                Sunday Rides
              </Link>
              <Link href="/sermons" className="text-white/70 hover:text-white transition-colors">
                Sermons
              </Link>
              <Link href="/giving" className="text-white/70 hover:text-white transition-colors">
                Ways to Give
              </Link>
              <Link href="/links" className="text-white/70 hover:text-[#8ce078] transition-colors font-medium">
                Quick Links
              </Link>
              <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        {/* Minimal Copyright Bar with safe bottom clearance */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-white/50">
          <p>© 2026 RCCG New Life Chapel Lethbridge. All rights reserved.</p>
          <a
            href={`mailto:${churchInfo.contact.email}`}
            className="hover:text-white/80 transition-colors"
          >
            {churchInfo.contact.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
