import React from "react";
import Link from "next/link";
import { churchInfo } from "@/data/churchData";
import LatestSermonsSection from "@/components/LatestSermonsSection";
import InstagramReelsSection from "@/components/InstagramReelsSection";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* =====================================================================
          SECTION 1: HERO BANNER WITH BACKGROUND IMAGE & GREEN INFO BOXES
          ===================================================================== */}
      <section
        className="relative w-full min-h-[472px] md:min-h-[540px] flex items-center justify-center py-[70px] bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: 'url("/images/hero-home.jpg")' }}
      >
        {/* Dark Overlay (opacity 0.5) */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-[1140px] w-full mx-auto px-5">
          <div className="max-w-[760px] mx-auto text-center">
            <div className="h-[20px] md:h-[40px]" />
            <h1 className="text-[26px] md:text-[33px] font-semibold leading-[1.45] md:leading-[52px] text-white mb-10">
              A place where people reconcile with God and enjoy life in
              abundance
            </h1>

            {/* 2 Green Infoboxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
              {/* Celebration Service Card */}
              <div className="bg-[#4F7942] border-2 border-[#4F7942] hover:border-transparent rounded-[10px] p-6 text-white transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
                <div>
                  <h2 className="text-[18px] font-bold leading-[1.2] mb-2 text-white">
                    Celebration Service
                  </h2>
                  <p className="text-[14px] font-normal leading-[1.6] text-white/95">
                    Join us every first Sunday of the month starting with Sunday
                    School at 9:30 AM for a spirit-filled celebration service.
                  </p>
                </div>
              </div>

              {/* Youth & Young Adults -> The Hilltop Church Card */}
              <a
                href={churchInfo.hilltopChurch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#4F7942] border-2 border-[#4F7942] hover:border-white/50 rounded-[10px] p-6 text-white transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h2 className="text-[18px] font-bold leading-[1.2] text-white group-hover:underline">
                      Youth &amp; Young Adults — Hilltop Church
                    </h2>
                    <span className="text-xs bg-white/20 px-2 py-0.5 rounded font-medium shrink-0">
                      Visit ↗
                    </span>
                  </div>
                  <p className="text-[14px] font-normal leading-[1.6] text-white/95">
                    Looking for our youth &amp; young adults community? Join{" "}
                    <strong className="font-semibold">The Hilltop Church</strong>{" "}
                    every Sunday at 12:00 PM!
                  </p>
                </div>
              </a>
            </div>

            {/* CTA Buttons: PLAN A VISIT, TAKE A STEP NOW & BOOK A SUNDAY RIDE */}
            <div className="pt-2 pb-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact?tab=visit"
                className="inline-block bg-[#4F7942] hover:bg-[#3f6334] text-white font-montserrat text-[15px] md:text-[16px] font-semibold px-7 py-3.5 rounded-[4px] transition-colors shadow-md"
              >
                PLAN YOUR VISIT
              </Link>
              <Link
                href="/rides"
                className="inline-block bg-white/15 hover:bg-white/25 backdrop-blur-xs border border-white/70 text-white font-montserrat text-[15px] md:text-[16px] font-semibold px-7 py-3.5 rounded-[4px] transition-colors shadow-md"
              >
                NEED A SUNDAY RIDE?
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Triangle Shape Divider */}
        <div
          className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none flex justify-center"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className="w-[45%] h-[30px] md:h-[50px] block"
          >
            <path
              fill="#080808"
              d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z"
            />
          </svg>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: COME AND EXPERIENCE A NEW LIFE IN JESUS CHRIST!
          ===================================================================== */}
      <section className="w-full py-[50px] md:py-[70px] bg-white">
        <div className="max-w-[950px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left Column (45%) */}
            <div className="md:col-span-5 md:p-4">
              <h2 className="text-[24px] md:text-[25px] font-semibold leading-[1.3] text-[#4F7942]">
                Come and Experience a New Life in Jesus Christ!
              </h2>
            </div>

            {/* Right Column (55%) */}
            <div className="md:col-span-7 space-y-6 md:pt-4">
              <p className="text-[15px] font-normal leading-[1.7] text-[#242424]">
                New Life Chapel, Lethbridge is a parish of The Redeemed
                Christian Church of God. We are dedicated and committed to the
                teaching of the truth which is based on the Bible and to fulfill
                the Great Commission of our Lord Jesus Christ (Matt 28:19-20).
                We welcome all without any discrimination on tribe, race, and
                nationality based on Biblical injunction.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <Link
                  href="/statement-of-faith"
                  className="inline-flex items-center justify-center text-[#4F7942] hover:text-[#38592e] text-[16px] font-medium py-2 transition-colors underline-offset-4 hover:underline"
                >
                  What to expect →
                </Link>
                <Link
                  href="/contact?tab=prayer"
                  className="inline-flex items-center justify-center text-[#1d1d23] hover:text-[#4F7942] text-[15px] font-medium py-2 transition-colors underline-offset-4 hover:underline"
                >
                  Submit a Prayer Request →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: PARALLAX 3-COLUMN BLOCK (PRAYING HANDS | TITLE | TEXT)
          ===================================================================== */}
      <section
        className="relative w-full py-[50px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/bg-home-middle.jpeg")' }}
      >
        {/* Dark Overlay (0.7) */}
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-[1130px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Column 1 (33%): Green Box with Praying Hands Icon */}
            <div className="md:col-span-4 bg-[#4F7942] flex items-center justify-center py-12 md:pt-[90px] md:pb-[33px] px-6">
              <div className="w-[120px] h-[120px] rounded-full border-2 border-white flex items-center justify-center text-white">
                {/* FontAwesome fa-praying-hands SVG */}
                <svg
                  className="w-14 h-14 fill-current"
                  viewBox="0 0 640 512"
                  aria-hidden="true"
                >
                  <path d="M304 96v320c0 17.7-14.3 32-32 32s-32-14.3-32-32V235.1l-84.9 74.3c-6.8 5.9-14.8 9.8-23.3 11.5l-91.8 18.4C20.2 343.2 0 328 0 307.8V288c0-13.8 8.9-26 22-30.4l65.7-21.9 85.7-85.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32v13.3l9.4-9.4c12.5-12.5 32.8-12.5 45.3 0C299.3 75.1 304 85 304 96zm32 0c0-11 4.7-20.9 11.9-28.1 12.5-12.5 32.8-12.5 45.3 0l9.4 9.4V64c0-17.7 14.3-32 32-32s32 14.3 32 32v86l85.7 85.7 65.7 21.9c13.1 4.4 22 16.6 22 30.4v19.8c0 20.2-20.2 35.4-40 31.5l-91.8-18.4c-8.5-1.7-16.5-5.6-23.3-11.5L399.9 235.1V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V96z" />
                </svg>
              </div>
            </div>

            {/* Column 2 (24%): Black Box with Divider & Heading */}
            <div className="md:col-span-3 bg-black flex flex-col justify-center p-[30px]">
              <div className="w-1/2 h-[5px] bg-[#4F7942] mb-5" />
              <h2 className="text-[32px] md:text-[2.2rem] font-semibold leading-[1.2] text-white">
                RCCG New Life Chapel
              </h2>
            </div>

            {/* Column 3 (43%): Black Box with Welcome Text & Learn More Button */}
            <div className="md:col-span-5 bg-black p-[29px] space-y-4 flex flex-col justify-center">
              <p className="text-[15px] md:text-[1rem] leading-[1.6] text-white">
                Welcome to RCCG New Life Chapel Lethbridge where people
                reconcile with God and enjoy life in abundance – John 10:10.
              </p>
              <p className="text-[15px] md:text-[1rem] leading-[1.6] text-white">
                We are delighted to have you visit us. Whether you’re a seeker
                in search of truth, or a new member of the community looking for
                a home church, we invite you to be our guest at RCCG New Life
                Chapel, Lethbridge.
              </p>
              <p className="text-[15px] md:text-[1rem] leading-[1.6] text-white">
                Here, we seek to embody the love and grace of God and to live by
                His word. This means open arms and an open Bible. Our Church is
                a clinic for sinners, a home for spiritual maturity, and an
                outpost for touching the world.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center font-montserrat text-[0.9rem] font-semibold tracking-[2px] text-white border-2 border-white px-6 py-3 hover:bg-white hover:text-black transition-colors"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: YOU ARE WELCOME, BECAUSE YOU BELONG HERE! + LIVE SERMONS
          ===================================================================== */}
      <section className="w-full py-[64px] md:py-[74px] bg-white">
        <div className="max-w-[1140px] mx-auto px-5">
          {/* Centered Heading & Intro */}
          <div className="text-center max-w-[640px] mx-auto space-y-4">
            <h2 className="text-[25px] font-semibold text-[#4F7942]">
              You are welcome, because you belong here!
            </h2>
            <p className="text-[15px] text-black leading-[1.6]">
              We understand that our journeys are different but when we move
              towards Jesus, our direction is the same! It’s our core aim to
              help you discover your purpose and your place – to help you learn
              why you were created and the difference you can make.
            </p>
          </div>

          {/* 2-Column Image + Latest Messages Row */}
          <div className="mt-10 max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Image: preacher-1.jpg */}
            <div className="p-2">
              <img
                src="/images/preacher-1.jpg"
                alt="Latest Messages at RCCG New Life Chapel"
                className="w-full h-auto rounded-sm shadow-sm object-cover"
              />
            </div>

            {/* Right Text: Latest Messages */}
            <div className="space-y-4 md:pl-4">
              <div className="w-[18%] h-[4px] bg-[#4F7942]" />
              <h3 className="text-[20px] font-semibold text-[#4F7942]">
                Latest Messages
              </h3>
              <p className="text-[15px] text-[#1d1d23] leading-[1.6]">
                Here you’ll find our latest message each week. Whether you’re
                out of town, unable to make it on-location, or wanted to share a
                message with a friend, it’s all available here. Watch our most
                recent services below or browse our full archive.
              </p>
              <div className="pt-2">
                <Link
                  href="/sermons"
                  className="inline-flex items-center gap-6 bg-white hover:bg-gray-50 text-[#4F7942] text-[16px] font-medium px-6 py-3 rounded shadow-[0px_12px_24px_-8px_rgba(59,79,228,0.4)] transition-all"
                >
                  <span>Messages</span>
                  <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 448 512"
                    aria-hidden="true"
                  >
                    <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Live 3 Latest YouTube Sermons Feed */}
          <LatestSermonsSection />
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: INSTAGRAM REELS & WORSHIP HIGHLIGHTS (@rccgnlclethbridge)
          ===================================================================== */}
      <section className="w-full py-14 md:py-18 bg-[#f9fbf9] border-t border-gray-100">
        <div className="max-w-[1140px] mx-auto px-5">
          <InstagramReelsSection
            limit={4}
            showViewAllButton={true}
            title="Worship & Fellowship Reels"
            subtitle="Experience the joy, worship, and community at RCCG New Life Chapel Lethbridge through our latest Instagram videos."
          />
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: QUICK CONNECT, PRAYER & COMMUNITY CARE BAR
          ===================================================================== */}
      <section className="w-full py-12 md:py-16 bg-white border-t border-gray-100">
        <div className="max-w-[1140px] mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Link
              href="/contact?tab=visit"
              className="group p-6 rounded-lg bg-[#f2f7f0] hover:bg-[#4F7942] border border-[#4F7942]/20 transition-all space-y-2"
            >
              <span className="text-[12px] font-semibold uppercase tracking-wider text-[#4F7942] group-hover:text-white/80">
                I’m New Here
              </span>
              <h3 className="text-[18px] font-semibold text-[#1d1d23] group-hover:text-white">
                Plan Your First Visit →
              </h3>
              <p className="text-[13.5px] text-gray-600 group-hover:text-white/90 leading-relaxed">
                Let our Welcome Team know you’re coming this Sunday so we can
                receive you warmly!
              </p>
            </Link>

            <Link
              href="/contact?tab=prayer"
              className="group p-6 rounded-lg bg-[#f2f7f0] hover:bg-[#4F7942] border border-[#4F7942]/20 transition-all space-y-2"
            >
              <span className="text-[12px] font-semibold uppercase tracking-wider text-[#4F7942] group-hover:text-white/80">
                Intercession
              </span>
              <h3 className="text-[18px] font-semibold text-[#1d1d23] group-hover:text-white">
                Submit a Prayer Request →
              </h3>
              <p className="text-[13.5px] text-gray-600 group-hover:text-white/90 leading-relaxed">
                How can we stand in faith with you this week? Share your prayer
                need confidentially.
              </p>
            </Link>

            <Link
              href="/contact?tab=testimony"
              className="group p-6 rounded-lg bg-[#f2f7f0] hover:bg-[#4F7942] border border-[#4F7942]/20 transition-all space-y-2"
            >
              <span className="text-[12px] font-semibold uppercase tracking-wider text-[#4F7942] group-hover:text-white/80">
                Praise Report
              </span>
              <h3 className="text-[18px] font-semibold text-[#1d1d23] group-hover:text-white">
                Share a Testimony →
              </h3>
              <p className="text-[13.5px] text-gray-600 group-hover:text-white/90 leading-relaxed">
                Has God answered a prayer or blessed your family? Rejoice with
                the church family!
              </p>
            </Link>

            <Link
              href="/community-outreach"
              className="group p-6 rounded-lg bg-[#f2f7f0] hover:bg-[#4F7942] border border-[#4F7942]/20 transition-all space-y-2"
            >
              <span className="text-[12px] font-semibold uppercase tracking-wider text-[#4F7942] group-hover:text-white/80">
                Food Bank &amp; Care
              </span>
              <h3 className="text-[18px] font-semibold text-[#1d1d23] group-hover:text-white">
                Outreach &amp; Support →
              </h3>
              <p className="text-[13.5px] text-gray-600 group-hover:text-white/90 leading-relaxed">
                Request food bank support, book Christian counselling, or
                volunteer in Lethbridge.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
