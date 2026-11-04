import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { churchInfo } from "@/data/churchData";

export const metadata: Metadata = {
  title: `ABOUT – ${churchInfo.name}`,
};

export default function AboutPage() {
  return (
    <div className="w-full">
      <PageHero
        title="Know more about our parish"
        backgroundImage="/images/hero-about.jpg"
        overlayOpacity={0.82}
      />

      {/* Section 1: Balanced 2-Column Intro & Image */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            {/* Left Text Column */}
            <div className="md:col-span-7 space-y-5">
              <h5 className="text-[20px] md:text-[22px] font-semibold text-[#4F7942] leading-snug">
                Here, we seek to embody the love and grace of God and to live by
                His word.
              </h5>
              <div className="w-16 h-[5px] bg-[#4F7942]" />
              <p className="text-[15px] text-[#242424] leading-[1.7]">
                This means open arms and an open Bible. Our Church is a clinic
                for sinners, a home for spiritual maturity, and an outpost for
                touching the world.
              </p>
              <p className="text-[15px] text-[#242424] leading-[1.7]">
                RCCG New Life Chapel is one of the parishes of The Redeemed
                Christian Church of God (otherwise known as RCCG)—a worldwide
                church organization established since 1952 with a mandate to
                take the gospel of salvation to the entire world in line with
                the Great Commission of our Lord Jesus Christ.
              </p>
              <p className="text-[15px] text-[#242424] leading-[1.7]">
                The Church is a Bible-believing body, where teachings and our
                missionary approach emphasize holiness and righteous living as
                the key to a fulfilled life here and in eternity. The General
                Overseer of The Redeemed Christian Church of God is Pastor E.A.
                Adeboye.
              </p>
            </div>

            {/* Right Image Column */}
            <div className="md:col-span-5">
              <img
                src="/images/about-1.jpeg"
                alt="RCCG New Life Chapel Worship"
                className="w-full h-auto rounded-sm shadow-sm object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: 2-Column Image + Parish Details */}
      <section className="w-full py-10 md:py-14 bg-white">
        <div className="max-w-[1140px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left Image */}
            <div>
              <img
                src="/images/about-2.jpeg"
                alt="RCCG New Life Chapel Lethbridge Parish"
                className="w-full h-auto rounded-sm shadow-sm object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <h5 className="text-[20px] md:text-[22px] font-semibold text-[#4F7942] leading-snug">
                RCCG New Life Chapel Lethbridge is a parish of The Redeemed
                Christian Church of God.
              </h5>
              <p className="text-[15px] text-[#1d1d23] leading-[1.7]">
                We are dedicated and committed to the teaching of the truth
                which is based on the Bible and to fulfil the Great Commission
                of our Lord Jesus Christ (Matt 28:19-20). We welcome all without
                any discrimination on tribe, race, and nationality based on
                Biblical injunction. All preaching is based on the Scripture.
              </p>
              <p className="text-[15px] text-[#1d1d23] leading-[1.7]">
                Doctrinal beliefs are based on the fact that knowledge, while
                valuable in itself, is to be used in the service of others. The
                church respects the uniqueness and dignity of individuals, and
                believes that the individual’s spiritual, emotional,
                intellectual, physical, and social growth complement and fulfill
                one another. We have a vision to spread the Word of God to the
                ends of the earth.
              </p>

              {/* Inner 2-Column Sub-grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="space-y-3">
                  <div className="w-14 h-[3px] bg-[#4F7942]" />
                  <p className="text-[15px] text-[#1d1d23] leading-[1.6]">
                    It is a Bible-believing church, where the teaching and a
                    missionary approach emphasize the proper conduct and moral
                    behavior of people.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-14 h-[3px] bg-[#4F7942]" />
                  <p className="text-[15px] text-[#1d1d23] leading-[1.6]">
                    The church has an appeal to all types of people worldwide,
                    with a determination to teach people in their various
                    geographical areas, stages of secular life, and levels of
                    spiritual development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Pastoral Welcome & Leadership Heart */}
      <section className="w-full py-12 md:py-16 bg-[#f2f7f0] border-y border-[#4F7942]/15">
        <div className="max-w-[1140px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5">
              <div className="relative rounded-lg overflow-hidden shadow-md border-4 border-white">
                <img
                  src="/images/gallery-01.jpg"
                  alt="Pastoral Leadership at RCCG New Life Chapel Lethbridge"
                  className="w-full h-[360px] object-cover"
                />
                <div className="bg-[#2A2A2A] text-white p-4">
                  <p className="text-[16px] font-semibold">
                    Pastor Lawal &amp; Pastor (Mrs.) Abiola Lawal
                  </p>
                  <p className="text-[13px] text-white/80">
                    Parish Pastors • RCCG New Life Chapel Lethbridge
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-5">
              <span className="inline-block text-[12px] font-semibold uppercase tracking-wider text-[#4F7942] bg-white px-3 py-1 rounded-full border border-[#4F7942]/20">
                Pastoral Welcome
              </span>
              <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1d1d23] leading-snug">
                A Warm Welcome From Our Leadership Family
              </h2>
              <p className="text-[15px] text-[#242424] leading-[1.75]">
                Whether you have just moved to Lethbridge for work, family, or
                studies at the University of Lethbridge or Lethbridge
                Polytechnic, or you have lived in Southern Alberta for years,
                there is a place for you at{" "}
                <strong className="font-semibold">
                  RCCG New Life Chapel Lethbridge
                </strong>
                .
              </p>
              <p className="text-[15px] text-[#242424] leading-[1.75]">
                Led with grace, wisdom, and a shepherd’s heart by{" "}
                <strong className="font-semibold">
                  Pastor Lawal &amp; Pastor (Mrs.) Abiola Lawal
                </strong>{" "}
                alongside our dedicated team of ministers and workers, our
                desire is to see every person reconciled to God, rooted in the
                Word, and thriving in every area of life.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact?tab=visit"
                  className="inline-flex items-center gap-2 bg-[#4F7942] hover:bg-[#3d6032] text-white text-[14px] font-semibold px-6 py-3 rounded transition-colors shadow-xs"
                >
                  <span>Plan Your First Visit</span>
                  <span>→</span>
                </Link>
                <Link
                  href="/contact?tab=counselling"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#4F7942] border border-[#4F7942]/40 text-[14px] font-semibold px-6 py-3 rounded transition-colors"
                >
                  <span>Book Pastoral Counselling / Care</span>
                </Link>
                <Link
                  href="/rides"
                  className="inline-flex items-center gap-2 text-[#1d1d23] hover:text-[#4F7942] text-[14px] font-medium underline underline-offset-4 px-2 py-2"
                >
                  <span>Need a Free Sunday Ride?</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Bottom 3-Image Row */}
      <section className="w-full py-[60px] bg-white">
        <div className="max-w-[1140px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <img
                src="/images/about-bottom-1.jpg"
                alt="RCCG New Life Chapel Community"
                className="w-full h-[250px] object-cover rounded-sm"
              />
            </div>
            <div>
              <img
                src="/images/about-bottom-2.jpg"
                alt="Fellowship"
                className="w-full h-[250px] object-cover rounded-sm"
              />
            </div>
            <div>
              <img
                src="/images/about-bottom-3.jpg"
                alt="Bible Study"
                className="w-full h-[250px] object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
