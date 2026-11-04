import React from "react";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { churchInfo } from "@/data/churchData";

export const metadata: Metadata = {
  title: `OUR MISSION – ${churchInfo.name}`,
};

export default function OurMissionPage() {
  return (
    <div className="w-full">
      <PageHero
        title="Our Mission"
        backgroundImage="/images/hero-mission.jpg"
        overlayOpacity={0.81}
      />

      <section className="w-full py-14 md:py-20 bg-white">
        <div className="max-w-[820px] mx-auto px-5 space-y-6 text-[15px] text-black leading-[1.75]">
          <div className="w-16 h-[3px] bg-[#4F7942]" />

          <ul className="list-disc pl-6 space-y-3">
            <li>
              To save souls by leading people by grace through faith to Jesus
              Christ as their personal Lord and Saviour.
            </li>
            <li>
              To teach and preach the word of God in truth and in spirit.
            </li>
            <li>
              To make heaven our ultimate goal and to prepare and equip people
              for the second coming of our Lord Jesus Christ.
            </li>
            <li>
              To establish branches of RCCG within a convenient distance in
              cities and towns.
            </li>
            <li>
              To preach the gospel of Jesus Christ to nations of the world
              through our Mission Department.
            </li>
            <li>
              To establish CARE centers to reach out to people in need within
              the communities where we operate.
            </li>
            <li>
              To uphold spiritual discipline, moral purity, personal integrity,
              modest appearance, family responsibilities, youth ministries,
              Christian education, and social obligations within the
              communities.
            </li>
          </ul>

          <div className="w-16 h-[3px] bg-[#4F7942] pt-1" />

          <div className="space-y-3">
            <h3 className="text-[18px] font-bold text-[#4F7942]">
              In Our Community
            </h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>We will preach Jesus to every home.</li>
              <li>
                We will learn the word of God and strive to live a holy life.
              </li>
              <li>
                We will reach out to the community groups and contribute to
                making the town a great place to live and worship God.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
