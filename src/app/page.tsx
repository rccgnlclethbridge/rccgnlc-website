import React from "react";
import Link from "next/link";
import { churchInfo } from "@/data/churchData";
import HomeHeroVideo from "@/components/HomeHeroVideo";
import LatestSermonsSection from "@/components/LatestSermonsSection";
import InstagramReelsSection from "@/components/InstagramReelsSection";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* =====================================================================
          SECTION 1: UNCLUTTERED FULL-BLEED VIDEO HERO + BOTTOM SERVICE BAR
          ===================================================================== */}
      <HomeHeroVideo />

      {/* =====================================================================
          SECTION 2: WATCH LATEST SERMON SPOTLIGHT (Transformation Church Style)
          ===================================================================== */}
      <section className="w-full py-16 md:py-24 bg-[#f7faf6]">
        <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
          <LatestSermonsSection />
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: WE BELIEVE / WELCOME HOME (Modern Editorial Split)
          ===================================================================== */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left 6 Cols: Stacked Editorial Imagery */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] aspect-[4/3]">
                <img
                  src="/images/gallery-01.jpg"
                  alt="Worship and Fellowship at RCCG New Life Chapel Lethbridge"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="inline-block bg-[#4F7942] text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-1.5">
                    John 10:10
                  </span>
                  <p className="text-[14px] font-medium text-white/95">
                    “A clinic for sinners, a home for spiritual maturity, and an
                    outpost for touching the world.”
                  </p>
                </div>
              </div>
            </div>

            {/* Right 6 Cols: Editorial Copy & CTAs */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.22em] text-[#4F7942]">
                <span>WE BELIEVE • OUR HEART</span>
              </div>

              <h2 className="font-montserrat text-[30px] sm:text-[38px] md:text-[44px] font-extrabold uppercase tracking-tight text-[#141814] leading-[1.1]">
                You Are Welcome, <br />
                Because You Belong Here.
              </h2>

              <p className="text-[15.5px] md:text-[16.5px] text-gray-700 leading-[1.75]">
                New Life Chapel, Lethbridge is a parish of The Redeemed
                Christian Church of God. Whether you’re a seeker in search of
                truth, a student at the University of Lethbridge or Lethbridge
                Polytechnic, or a family looking for a home church, we welcome
                all with open arms and an open Bible.
              </p>

              <p className="text-[15.5px] md:text-[16.5px] text-gray-700 leading-[1.75]">
                We understand that our journeys are different, but when we move
                towards Jesus, our direction is the same. Our desire is to help
                you discover your purpose, grow in grace, and make an eternal
                difference.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-[#141814] hover:bg-[#4F7942] text-white font-montserrat text-[13.5px] font-bold uppercase tracking-wider px-7 py-3.5 rounded-full transition-all shadow-md"
                >
                  <span>Meet Our Parish</span>
                  <span>→</span>
                </Link>
                <Link
                  href="/statement-of-faith"
                  className="inline-flex items-center gap-2 bg-[#f2f7f0] hover:bg-[#e3efe0] text-[#4F7942] font-montserrat text-[13.5px] font-bold uppercase tracking-wider px-6 py-3.5 rounded-full transition-all"
                >
                  <span>What We Believe</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: MINISTRIES & NEXT GEN (Transformation Church Visual Cards)
          ===================================================================== */}
      <section className="w-full py-16 md:py-24 bg-[#111511] text-white">
        <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
          {/* Header */}
          <div className="max-w-[720px] mb-12 space-y-3">
            <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#8ce078]">
              MINISTRIES &amp; EXPRESSIONS
            </p>
            <h2 className="font-montserrat text-[30px] sm:text-[38px] md:text-[44px] font-extrabold uppercase tracking-tight text-white leading-[1.1]">
              Raising Leaders &amp; Touching Our City.
            </h2>
          </div>

          {/* 2 Large Editorial Ministry Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: Youth & Young Adults -> The Hilltop Church */}
            <div className="group relative rounded-3xl overflow-hidden min-h-[420px] sm:min-h-[460px] flex flex-col justify-end p-7 sm:p-10 border border-white/10 shadow-2xl">
              <img
                src="/images/youth-main.jpg"
                alt="The Hilltop Church - Youth & Young Adults"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/20" />

              <div className="relative z-10 space-y-3">
                <span className="inline-block bg-[#4F7942] text-white text-[11px] font-bold uppercase tracking-widest px-3.5 py-1 rounded-full">
                  SUNDAYS AT 12:00 PM • STUDENTS &amp; YOUNG ADULTS
                </span>
                <h3 className="font-montserrat text-[26px] sm:text-[32px] font-extrabold uppercase tracking-tight text-white leading-tight">
                  RCCG Hilltop Church
                </h3>
                <p className="text-[15px] text-white/85 leading-relaxed max-w-[520px]">
                  Our vibrant Youth &amp; Young Adults expression in Lethbridge
                  — equipping students, young professionals, and young families
                  to be heaven-ready and earthly relevant.
                </p>
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <a
                    href={churchInfo.hilltopChurch.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-[#141814] hover:bg-[#8ce078] font-montserrat text-[13px] font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-colors"
                  >
                    <span>Visit thehilltopch.ca</span>
                    <span>↗</span>
                  </a>
                  <Link
                    href="/youth"
                    className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white font-montserrat text-[13px] font-bold uppercase tracking-wider px-5 py-3 rounded-full transition-colors"
                  >
                    <span>Learn More</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: Community Outreach, Food Bank & Christian Counselling */}
            <div className="group relative rounded-3xl overflow-hidden min-h-[420px] sm:min-h-[460px] flex flex-col justify-end p-7 sm:p-10 border border-white/10 shadow-2xl">
              <img
                src="/images/gallery-04.jpg"
                alt="Community Outreach, Food Bank & Counselling"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/20" />

              <div className="relative z-10 space-y-3">
                <span className="inline-block bg-white/20 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-widest px-3.5 py-1 rounded-full">
                  COMPASSION • FOOD BANK • CHRISTIAN COUNSELLING
                </span>
                <h3 className="font-montserrat text-[26px] sm:text-[32px] font-extrabold uppercase tracking-tight text-white leading-tight">
                  Community Outreach &amp; Care
                </h3>
                <p className="text-[15px] text-white/85 leading-relaxed max-w-[520px]">
                  Demonstrating the love of Jesus across Southern Alberta
                  through our church Food Bank, professional Christian
                  counselling, family support, and city-wide outreach.
                </p>
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <Link
                    href="/community-outreach"
                    className="inline-flex items-center gap-2 bg-[#4F7942] hover:bg-[#3d6032] text-white font-montserrat text-[13px] font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-colors"
                  >
                    <span>Explore Outreach</span>
                    <span>→</span>
                  </Link>
                  <Link
                    href="/contact?tab=counselling"
                    className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white font-montserrat text-[13px] font-bold uppercase tracking-wider px-5 py-3 rounded-full transition-colors"
                  >
                    <span>Book Counselling</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: INSTAGRAM REELS & WORSHIP HIGHLIGHTS (@rccgnlclethbridge)
          ===================================================================== */}
      <section className="w-full py-16 md:py-24 bg-[#f7faf6]">
        <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
          <InstagramReelsSection
            limit={4}
            showViewAllButton={true}
            title="Worship & Fellowship Reels"
            subtitle="Experience the joy, worship, and community at RCCG New Life Chapel Lethbridge through our latest Instagram videos."
          />
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: TAKE YOUR NEXT STEP (Connect & Care Bento Strip)
          ===================================================================== */}
      <section className="w-full py-16 md:py-20 bg-white border-t border-gray-100">
        <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-10 space-y-2">
            <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#4F7942]">
              GET CONNECTED
            </p>
            <h2 className="font-montserrat text-[28px] sm:text-[34px] font-extrabold uppercase tracking-tight text-[#141814]">
              Take Your Next Step
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Link
              href="/contact?tab=visit"
              className="group p-7 rounded-2xl bg-[#f7faf6] hover:bg-[#4F7942] border border-[#4F7942]/15 transition-all duration-300 space-y-2.5 shadow-2xs hover:shadow-xl hover:-translate-y-1"
            >
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#4F7942] group-hover:text-white/80">
                01 • I’m New Here
              </span>
              <h3 className="font-montserrat text-[18px] font-bold text-[#141814] group-hover:text-white">
                Plan Your Visit →
              </h3>
              <p className="text-[13.5px] text-gray-600 group-hover:text-white/90 leading-relaxed">
                Let our Welcome Team know you’re coming this Sunday so we can
                receive you warmly!
              </p>
            </Link>

            <Link
              href="/rides"
              className="group p-7 rounded-2xl bg-[#f7faf6] hover:bg-[#4F7942] border border-[#4F7942]/15 transition-all duration-300 space-y-2.5 shadow-2xs hover:shadow-xl hover:-translate-y-1"
            >
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#4F7942] group-hover:text-white/80">
                02 • Free Transportation
              </span>
              <h3 className="font-montserrat text-[18px] font-bold text-[#141814] group-hover:text-white">
                Book a Sunday Ride →
              </h3>
              <p className="text-[13.5px] text-gray-600 group-hover:text-white/90 leading-relaxed">
                Need a ride to church in Lethbridge? Request free door-to-door
                pickup for Sunday service.
              </p>
            </Link>

            <Link
              href="/contact?tab=prayer"
              className="group p-7 rounded-2xl bg-[#f7faf6] hover:bg-[#4F7942] border border-[#4F7942]/15 transition-all duration-300 space-y-2.5 shadow-2xs hover:shadow-xl hover:-translate-y-1"
            >
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#4F7942] group-hover:text-white/80">
                03 • Intercession
              </span>
              <h3 className="font-montserrat text-[18px] font-bold text-[#141814] group-hover:text-white">
                Prayer &amp; Testimony →
              </h3>
              <p className="text-[13.5px] text-gray-600 group-hover:text-white/90 leading-relaxed">
                Share a confidential prayer request with our pastors or rejoice
                with a praise report!
              </p>
            </Link>

            <Link
              href="/giving"
              className="group p-7 rounded-2xl bg-[#f7faf6] hover:bg-[#4F7942] border border-[#4F7942]/15 transition-all duration-300 space-y-2.5 shadow-2xs hover:shadow-xl hover:-translate-y-1"
            >
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#4F7942] group-hover:text-white/80">
                04 • Generosity
              </span>
              <h3 className="font-montserrat text-[18px] font-bold text-[#141814] group-hover:text-white">
                Ways to Give →
              </h3>
              <p className="text-[13.5px] text-gray-600 group-hover:text-white/90 leading-relaxed">
                Partner with the mission of RCCG New Life Chapel via Interac
                e-Transfer, cheque, or in person.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
