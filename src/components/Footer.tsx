import React from "react";
import Link from "next/link";
import { churchInfo } from "@/data/churchData";

export default function Footer() {
  return (
    <footer className="w-full mt-auto">
      {/* Top Heading Section: OUR SERVICE TIMES */}
      <section className="w-full bg-white py-5">
        <div className="max-w-[1140px] mx-auto px-5 text-center">
          <h2 className="text-[28px] md:text-[32px] font-semibold text-[#1F0F0F] tracking-wide">
            OUR SERVICE TIMES
          </h2>
        </div>
      </section>

      {/* Main Dark Footer Section (#2A2A2A) */}
      <section className="w-full bg-[#2A2A2A] text-white pt-12 pb-6">
        <div className="max-w-[1130px] mx-auto px-5">
          {/* 3-Column Service Times & Socials Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8">
            {/* Column 1: Sunday, Mid-week, Prayer Meetings */}
            <div className="md:col-span-4 space-y-3 text-[14px] leading-[1.45]">
              <p>
                <strong className="font-bold">Sunday Service</strong> |{" "}
                {churchInfo.serviceTimes.sundayService}
              </p>
              <p>
                Celebration Service –{" "}
                <em className="italic">
                  {churchInfo.serviceTimes.celebrationService}
                </em>
              </p>
              <p className="pt-1">
                <strong className="font-bold block">MID-WEEK SERVICES</strong>
                {churchInfo.serviceTimes.midWeekServices}
              </p>
              <p className="pt-1">
                <strong className="font-bold block">HOLY COMMUNION &amp; PRAYER</strong>
                {churchInfo.serviceTimes.prayerMeetings}
              </p>
            </div>

            {/* Column 2: Youth & Young Adults (Hilltop Church) & Meeting Address */}
            <div className="md:col-span-4 space-y-3 text-[14px] leading-[1.5]">
              <p>
                <strong className="font-bold block text-[#75b263]">
                  YOUTH &amp; YOUNG ADULTS (HILLTOP CHURCH)
                </strong>
                {churchInfo.hilltopChurch.sundaySchedule}
                <br />
                <a
                  href={churchInfo.hilltopChurch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#75b263] transition-colors font-medium"
                >
                  Visit thehilltopch.ca ↗
                </a>
              </p>
              <p className="pt-1">
                <strong className="font-bold block">MEETING ADDRESS</strong>
                {churchInfo.address.street}
                <br />
                {churchInfo.address.cityStateZip}
              </p>
              <div className="pt-1">
                <Link
                  href="/rides"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#75b263] hover:text-white transition-colors"
                >
                  <span>🚗 Need a Ride to Sunday Service? Book Here →</span>
                </Link>
              </div>
            </div>

            {/* Column 3: OUR SOCIALS */}
            <div className="md:col-span-4 space-y-4">
              <h2 className="text-[14px] font-bold uppercase tracking-wider text-white">
                OUR SOCIALS
              </h2>
              <div className="flex items-center gap-[15px]">
                {/* Facebook */}
                <a
                  href={churchInfo.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-[#3b5998] hover:opacity-90 flex items-center justify-center text-white transition-opacity"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 320 512">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                </a>

                {/* Instagram (#DB25BF from post-2270.css) */}
                <a
                  href={churchInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-[#DB25BF] hover:opacity-90 flex items-center justify-center text-white transition-opacity"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href={churchInfo.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Youtube"
                  className="w-9 h-9 rounded-full bg-[#cd201f] hover:opacity-90 flex items-center justify-center text-white transition-opacity"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 576 512">
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="w-full py-2">
            <iframe
              loading="lazy"
              src={churchInfo.address.googleMapsEmbedUrl}
              title={churchInfo.address.full}
              aria-label={churchInfo.address.full}
              className="w-full h-[230px] border-0 rounded-sm"
            />
          </div>

          {/* Copyright */}
          <div className="pt-4 text-center md:text-left">
            <p className="text-[13px] font-semibold text-white">
              {churchInfo.copyright}
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
