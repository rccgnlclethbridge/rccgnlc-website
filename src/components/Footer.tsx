"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { churchInfo } from "@/data/churchData";
import { useSiteBuild, SiteBuildId } from "@/components/BuildPreviewProvider";

const FOOTER_THEMES: Record<
  SiteBuildId,
  {
    root: string;
    border: string;
    heading: string;
    brandTitle: string;
    brandSubtitle: string;
    muted: string;
    strong: string;
    socialBtn: string;
    link: string;
    accent: string;
    bottomMuted: string;
    bottomLink: string;
    dividerDot: string;
  }
> = {
  current: {
    root: "bg-[#111511] text-white border-t border-white/10",
    border: "border-white/10",
    heading: "text-[#8ce078]",
    brandTitle: "text-white",
    brandSubtitle: "text-[#8ce078]",
    muted: "text-white/65",
    strong: "text-white",
    socialBtn: "bg-white/10 hover:bg-[#4F7942] text-white",
    link: "text-white/70 hover:text-white",
    accent: "text-[#8ce078]",
    bottomMuted: "text-white/55",
    bottomLink: "text-white/80 hover:text-[#8ce078]",
    dividerDot: "text-white/25",
  },
  editorial: {
    root: "bg-[#16291D] text-[#FAF8F3] border-t border-[#D6B472]/20",
    border: "border-white/10",
    heading: "text-[#D6B472]",
    brandTitle: "text-[#FAF8F3]",
    brandSubtitle: "text-[#D6B472]",
    muted: "text-[#FAF8F3]/70",
    strong: "text-[#FAF8F3]",
    socialBtn: "bg-white/10 hover:bg-[#B8924A] text-[#FAF8F3]",
    link: "text-[#FAF8F3]/75 hover:text-[#D6B472]",
    accent: "text-[#D6B472]",
    bottomMuted: "text-[#FAF8F3]/60",
    bottomLink: "text-[#FAF8F3]/85 hover:text-[#D6B472]",
    dividerDot: "text-white/25",
  },
  cinematic: {
    root: "bg-[#070908] text-white border-t border-white/10",
    border: "border-white/10",
    heading: "text-[#7CE36B]",
    brandTitle: "text-white",
    brandSubtitle: "text-[#7CE36B]",
    muted: "text-white/65",
    strong: "text-white",
    socialBtn: "bg-white/10 hover:bg-[#7CE36B] hover:text-[#0B0E0C] text-white",
    link: "text-white/70 hover:text-[#7CE36B]",
    accent: "text-[#7CE36B]",
    bottomMuted: "text-white/55",
    bottomLink: "text-white/80 hover:text-[#7CE36B]",
    dividerDot: "text-white/25",
  },
  bento: {
    root: "bg-[#F2F7F0] text-[#141814] border-t border-[#4F7942]/15",
    border: "border-[#4F7942]/15",
    heading: "text-[#4F7942]",
    brandTitle: "text-[#141814]",
    brandSubtitle: "text-[#4F7942]",
    muted: "text-gray-600",
    strong: "text-[#141814]",
    socialBtn: "bg-white border border-[#4F7942]/20 hover:bg-[#4F7942] text-[#141814] hover:text-white",
    link: "text-gray-600 hover:text-[#4F7942]",
    accent: "text-[#4F7942]",
    bottomMuted: "text-gray-500",
    bottomLink: "text-[#141814] hover:text-[#4F7942]",
    dividerDot: "text-gray-300",
  },
};

export default function Footer() {
  const pathname = usePathname();
  const { build } = useSiteBuild();

  // On the standalone mobile link-in-bio page, suppress the global desktop footer
  if (pathname === "/links") return null;

  const t = FOOTER_THEMES[build];

  return (
    <footer className={`w-full mt-auto transition-colors duration-300 ${t.root}`}>
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-12 sm:pt-14 pb-20 sm:pb-16">
        {/* 3-Column Clean Modern Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b ${t.border}`}
        >
          {/* Col 1 (5 cols): Brand, Mission & Socials */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <img
                src={churchInfo.logo}
                alt={churchInfo.name}
                className="w-12 h-12 object-contain bg-white rounded-xl p-1 shadow-xs border border-black/5"
              />
              <div>
                <span
                  className={`block font-montserrat text-[13.5px] font-extrabold uppercase tracking-wider leading-tight ${t.brandTitle}`}
                >
                  RCCG New Life Chapel
                </span>
                <span
                  className={`block text-[11px] font-semibold uppercase tracking-widest ${t.brandSubtitle}`}
                >
                  Lethbridge, Alberta
                </span>
              </div>
            </Link>

            <p className={`text-[13.5px] leading-relaxed max-w-[340px] ${t.muted}`}>
              A place of reconciliation, faith, and abundant life in Christ Jesus (John 10:10). Everyone is welcome.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={churchInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${t.socialBtn}`}
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
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${t.socialBtn}`}
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
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${t.socialBtn}`}
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 576 512">
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 (4 cols): Clean Service Times */}
          <div className="lg:col-span-4 space-y-3.5 text-[13.5px]">
            <h3
              className={`font-montserrat text-[12px] font-bold uppercase tracking-[0.2em] ${t.heading}`}
            >
              Service Times
            </h3>

            <div className="space-y-3">
              <div>
                <p className={`font-semibold ${t.strong}`}>
                  Sunday Worship &amp; School
                </p>
                <p className={`text-[13px] ${t.muted}`}>Sundays at 9:30 AM</p>
              </div>

              <div>
                <p className={`font-semibold ${t.strong}`}>
                  Mid-Week Bible Study
                </p>
                <p className={`text-[13px] ${t.muted}`}>
                  Wednesdays at 7:00 PM
                </p>
              </div>

              <div className="pt-1">
                <p className={`font-semibold ${t.strong}`}>
                  Youth &amp; Young Adults
                </p>
                <a
                  href={churchInfo.hilltopChurch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1 text-[13px] hover:underline ${t.accent}`}
                >
                  <span>Hilltop Church · Sundays at 12:00 PM</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 3 (3 cols): Location & Direct Links */}
          <div className="lg:col-span-3 space-y-3.5 text-[13.5px]">
            <h3
              className={`font-montserrat text-[12px] font-bold uppercase tracking-[0.2em] ${t.heading}`}
            >
              Location &amp; Links
            </h3>

            <div>
              <p className={`font-semibold ${t.strong}`}>234 13 Street North</p>
              <p className={`text-[13px] ${t.muted}`}>Lethbridge, AB T1H 2R7</p>
              <a
                href={churchInfo.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 text-[12.5px] hover:underline pt-0.5 ${t.accent}`}
              >
                <span>Google Maps Directions ↗</span>
              </a>
            </div>

            <nav
              aria-label="Footer Quick Links"
              className="grid grid-cols-2 gap-y-2 gap-x-3 pt-1 text-[13px]"
            >
              <Link href="/contact?tab=visit" className={`transition-colors ${t.link}`}>
                Plan A Visit
              </Link>
              <Link href="/rides" className={`transition-colors ${t.link}`}>
                Sunday Rides
              </Link>
              <Link href="/community-outreach" className={`transition-colors ${t.link}`}>
                Food Pantry
              </Link>
              <Link href="/sermons" className={`transition-colors ${t.link}`}>
                Sermons
              </Link>
              <Link href="/giving" className={`transition-colors ${t.link}`}>
                Ways to Give
              </Link>
              <Link
                href="/links"
                className={`transition-colors font-medium ${t.accent} hover:underline`}
              >
                Quick Links
              </Link>
              <Link href="/privacy" className={`transition-colors ${t.link}`}>
                Privacy
              </Link>
              <Link href="/contact" className={`transition-colors ${t.link}`}>
                Contact
              </Link>
            </nav>
          </div>
        </div>

        {/* Minimal Copyright & CRA Charity Bar with safe bottom clearance */}
        <div
          className={`pt-6 flex flex-col lg:flex-row items-center justify-between gap-3 text-[12px] text-center lg:text-left ${t.bottomMuted}`}
        >
          <p className="leading-relaxed">
            © 2026 {churchInfo.charity.legalName} · Registered Canadian Charity #
            <a
              href={churchInfo.charity.charityDataUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`underline underline-offset-4 transition-colors ${t.bottomLink}`}
            >
              {churchInfo.charity.registrationNumber}
            </a>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 shrink-0">
            <Link href="/privacy" className={`transition-colors ${t.bottomLink}`}>
              Privacy Policy
            </Link>
            <span className={t.dividerDot} aria-hidden="true">
              ·
            </span>
            <a
              href={`mailto:${churchInfo.contact.email}`}
              className={`transition-colors ${t.bottomLink}`}
            >
              {churchInfo.contact.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
