import React from "react";
import Link from "next/link";
import { churchInfo } from "@/data/churchData";

export default function Footer() {
  return (
    <footer className="w-full mt-auto bg-[#111511] text-white border-t border-white/10">
      <div className="max-w-[1220px] mx-auto px-5 sm:px-8 pt-16 pb-10">
        {/* 4-Column Modern Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1 (4 cols): Brand, Mission & Socials */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <img
                src={churchInfo.logo}
                alt={churchInfo.name}
                className="w-[64px] h-auto object-contain bg-white rounded-xl p-1.5"
              />
              <div>
                <span className="block font-montserrat text-[14px] font-extrabold uppercase tracking-wider text-white leading-tight">
                  RCCG New Life Chapel
                </span>
                <span className="block text-[11.5px] font-semibold uppercase tracking-widest text-[#8ce078]">
                  Lethbridge, Alberta
                </span>
              </div>
            </Link>

            <p className="text-[14px] text-white/75 leading-relaxed max-w-[340px]">
              A place where people reconcile with God and enjoy life in
              abundance (John 10:10). Open arms, an open Bible, and a warm
              family for everyone.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={churchInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#4F7942] flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 320 512">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>

              <a
                href={churchInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#4F7942] flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z" />
                </svg>
              </a>

              <a
                href={churchInfo.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#4F7942] flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 576 512">
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 (4 cols): Service Times & Hilltop Church */}
          <div className="lg:col-span-4 space-y-4 text-[14px]">
            <h3 className="font-montserrat text-[13px] font-bold uppercase tracking-[0.18em] text-[#8ce078]">
              Our Service Times
            </h3>

            <div className="space-y-3 text-white/85 leading-relaxed">
              <div>
                <strong className="font-semibold text-white block">
                  Sunday Worship &amp; Sunday School
                </strong>
                <span>
                  Every Sunday @ {churchInfo.serviceTimes.sundayService}
                </span>
                <span className="block text-[13px] text-white/65">
                  Celebration Service: {churchInfo.serviceTimes.celebrationService}
                </span>
              </div>

              <div>
                <strong className="font-semibold text-white block">
                  Mid-Week Services
                </strong>
                <span>{churchInfo.serviceTimes.midWeekServices}</span>
                <span className="block text-[13px] text-white/65">
                  {churchInfo.serviceTimes.prayerMeetings}
                </span>
              </div>

              <div className="pt-1 border-t border-white/10">
                <strong className="font-semibold text-[#8ce078] block">
                  Youth &amp; Young Adults — {churchInfo.hilltopChurch.name}
                </strong>
                <span>{churchInfo.hilltopChurch.sundaySchedule}</span>
                <div className="mt-1">
                  <a
                    href={churchInfo.hilltopChurch.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[13px] font-semibold text-white hover:text-[#8ce078] underline underline-offset-4 transition-colors"
                  >
                    <span>Visit thehilltopch.ca ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3 (4 cols): Quick Links & Location */}
          <div className="lg:col-span-4 space-y-4 text-[14px]">
            <h3 className="font-montserrat text-[13px] font-bold uppercase tracking-[0.18em] text-[#8ce078]">
              Location &amp; Quick Links
            </h3>

            <div className="text-white/85 space-y-1">
              <strong className="font-semibold text-white block">
                Sanctuary Address
              </strong>
              <p>
                {churchInfo.address.street} {churchInfo.address.cityStateZip}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 text-[13.5px]">
              <Link
                href="/contact?tab=visit"
                className="text-white/80 hover:text-[#8ce078] transition-colors"
              >
                → Plan A Visit
              </Link>
              <Link
                href="/rides"
                className="text-white/80 hover:text-[#8ce078] transition-colors"
              >
                → Free Sunday Rides
              </Link>
              <Link
                href="/sermons"
                className="text-white/80 hover:text-[#8ce078] transition-colors"
              >
                → Watch Sermons
              </Link>
              <Link
                href="/giving"
                className="text-white/80 hover:text-[#8ce078] transition-colors"
              >
                → Ways to Give
              </Link>
              <Link
                href="/community-outreach"
                className="text-white/80 hover:text-[#8ce078] transition-colors"
              >
                → Food Bank &amp; Care
              </Link>
              <Link
                href="/contact"
                className="text-white/80 hover:text-[#8ce078] transition-colors"
              >
                → Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="w-full py-8">
          <iframe
            loading="lazy"
            src={churchInfo.address.googleMapsEmbedUrl}
            title={churchInfo.address.full}
            aria-label={churchInfo.address.full}
            className="w-full h-[220px] border-0 rounded-2xl opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-white/60">
          <p>{churchInfo.copyright}</p>
          <p>
            234 13 Street North, Lethbridge, AB •{" "}
            <a
              href={`mailto:${churchInfo.contact.email}`}
              className="text-white/80 hover:text-white underline underline-offset-4"
            >
              {churchInfo.contact.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
