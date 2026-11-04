import React from "react";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { churchInfo } from "@/data/churchData";

export const metadata: Metadata = {
  title: `STATEMENT OF FAITH – ${churchInfo.name}`,
};

export default function StatementOfFaithPage() {
  return (
    <div className="w-full">
      <PageHero
        title="Our Statement of Faith"
        backgroundImage="/images/hero-faith.png"
        overlayOpacity={0.74}
      />

      <section className="w-full py-14 md:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left Column: Green Divider Line */}
            <div className="md:col-span-3 pt-2">
              <div className="w-20 h-[3px] bg-[#4F7942]" />
            </div>

            {/* Main Content Column: Statement of Faith Text */}
            <div className="md:col-span-9 space-y-5 text-[15px] text-black leading-[1.75]">
              <p>
                God the Father, God the Son, and God the Holy Spirit, three
                Persons in one, Creator of Heaven and Earth.
              </p>
              <p>
                Jesus Christ, the Only Begotten Son of God, conceived of the
                Holy Spirit, born of the Virgin Mary, crucified for the sins of
                mankind, dead and buried, rose from the dead, and now lives
                forever.
              </p>
              <p>
                The Holy Spirit, a divine Person like the Father and the Son,
                sent to bring believers into the intimate presence and
                fellowship of Jesus Christ.
              </p>
              <p>
                The Bible, as the inspired, infallible, inerrant word of God,
                subject to no human tradition, doctrine, custom, rules, and
                regulations.
              </p>
              <p>
                Salvation from eternal destruction, by grace through faith in
                Jesus Christ.
              </p>
              <p>
                Living in holiness, without which no man shall see the Lord.
              </p>

              <div className="pt-4 space-y-5">
                <h5 className="text-[18px] font-bold text-[#4F7942]">
                  Be Bold
                </h5>
                <p>
                  Bodily resurrection, eternal life for the righteous, and
                  eternal damnation, death, and punishment of all those who do
                  not accept Jesus Christ.
                </p>
                <p>Water Baptism by immersion.</p>
                <p>
                  Holy Spirit Baptism. Speaking in other tongues as the Holy
                  Spirit gives utterance.
                </p>
                <p>Divine healing through the work of Jesus on the cross.</p>
                <p>
                  Spiritual gifts, signs following believers, celebration of the
                  last supper as Holy Communion, tithing and giving, and
                  believers bearing fruits of the Spirit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
