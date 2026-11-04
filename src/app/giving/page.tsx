"use client";

import React, { useState } from "react";
import PageHero from "@/components/PageHero";
import { churchInfo } from "@/data/churchData";

export default function GivingPage() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [receiptSubmitted, setReceiptSubmitted] = useState(false);

  const [receiptForm, setReceiptForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    fundCategory: "Tithe & Offering",
    mailingAddress: "",
    notes: "",
  });

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleReceiptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `[Charitable Tax Receipt Registration] ${receiptForm.fullName}`;
    const body = `Charitable Tax Receipt / Interac e-Transfer Registration:\n\nLegal Full Name: ${receiptForm.fullName}\nEmail Used for e-Transfer: ${receiptForm.email}\nPhone: ${receiptForm.phone || "N/A"}\nGiving Designation: ${receiptForm.fundCategory}\nResidential Mailing Address (for CRA Tax Receipt):\n${receiptForm.mailingAddress}\n\nNotes:\n${receiptForm.notes || "None"}`;

    window.location.href = `mailto:${churchInfo.contact.givingEmail}?cc=${encodeURIComponent(
      churchInfo.contact.email
    )}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setReceiptSubmitted(true);
  };

  return (
    <div className="w-full">
      <PageHero
        title="Giving"
        backgroundImage="/images/hero-giving.jpeg"
        overlayOpacity={0.81}
      />

      {/* Section 1: Why We Give + Image */}
      <section className="w-full pt-[60px] pb-10 bg-white">
        <div className="max-w-[1140px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Column: Why we give */}
            <div className="space-y-5">
              <h2 className="text-[28px] font-semibold text-[#4F7942] leading-tight">
                We give because <span className="italic">God gave first</span>
              </h2>
              <h3 className="text-[23px] font-bold text-[#4F7942]">
                Why we give
              </h3>
              <p className="text-[15px] text-black leading-[1.7]">
                Giving is an essential part of belonging in a church. Here are
                two reasons we give:
              </p>
              <p className="text-[15px] text-black leading-[1.7]">
                <strong className="font-semibold">
                  We Give as An Expression of Gratitude to the Lord
                </strong>{" "}
                – We give to the church to thank the Lord for everything that He
                has done for us. He has given us so much; the least we can do is
                give our resources as a way of thanking Him for His goodness.
              </p>
              <p className="text-[15px] text-black leading-[1.7]">
                <strong className="font-semibold">
                  We Give to Advance the Lord’s Work
                </strong>{" "}
                – We give to the church to support and ensure the Lord’s work
                continues through the various ministries and programs, while
                also keeping a roof over our heads when we meet to worship.
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="flex justify-center">
              <img
                src="/images/giving-main.jpg"
                alt="Giving at RCCG New Life Chapel"
                className="w-full max-w-[460px] h-auto rounded-sm shadow-sm object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: 4 Initiatives Funded */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-5">
          {/* Heading & Scripture */}
          <div className="max-w-[820px] mb-10 space-y-3">
            <h2 className="text-[24px] md:text-[25px] font-bold text-[#4F7942] leading-[1.3]">
              Your generous gift to New Life Chapel helps fund the following
              initiatives:
            </h2>
            <p className="text-[14px] text-[#242424] italic">
              “Each of you should give what you have decided in your heart to
              give, not reluctantly or under compulsion, for God loves a
              cheerful giver.” — 2 Corinthians 9:7
            </p>
          </div>

          {/* 4 Initiative Cards Grid (Cohesive Brand Styling) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 01. Primary Church Green Card */}
            <div className="bg-[#4F7942] p-6 rounded-md text-white space-y-3 shadow-sm">
              <span className="inline-block text-[38px] md:text-[42px] font-bold leading-none text-white/90">
                01.
              </span>
              <h5 className="text-[17px] font-semibold leading-[1.3] text-white">
                Professional Christian Counselling
              </h5>
              <p className="text-[14.5px] font-normal leading-[1.6] text-white/95">
                While spiritual health is essential, so is mental health. New
                Life Chapel funds Christian counselling programs for those going
                through a tough time and people who need someone to talk to.
              </p>
            </div>

            {/* 02. Soft Sage Card */}
            <div className="bg-[#f2f7f0] border border-[#4F7942]/20 p-6 rounded-md text-[#1d1d23] space-y-3 shadow-xs">
              <span className="inline-block text-[38px] md:text-[42px] font-bold leading-none text-[#4F7942]">
                02.
              </span>
              <h5 className="text-[17px] font-semibold leading-[1.3] text-[#1d1d23]">
                Missionaries at home and around the world
              </h5>
              <p className="text-[14.5px] font-normal leading-[1.6] text-[#242424]">
                Our church funds missionary programs in Lethbridge as well as
                around the world.
              </p>
            </div>

            {/* 03. Soft Mint Card */}
            <div className="bg-[#E9FCE3] border border-[#4F7942]/20 p-6 rounded-md text-[#1d1d23] space-y-3 shadow-xs">
              <span className="inline-block text-[38px] md:text-[42px] font-bold leading-none text-[#4F7942]">
                03.
              </span>
              <h5 className="text-[17px] font-semibold leading-[1.3] text-[#1d1d23]">
                Fund local outreach projects
              </h5>
              <p className="text-[14.5px] font-normal leading-[1.6] text-[#242424]">
                We support Christian outreach programs in Lethbridge, and we run
                a food bank. It is fully registered, based on its facility, and
                provides thousands of people with food security.
              </p>
            </div>

            {/* 04. Warm Neutral Card */}
            <div className="bg-[#f4f5f7] border border-gray-200 p-6 rounded-md text-[#1d1d23] space-y-3 shadow-xs">
              <span className="inline-block text-[38px] md:text-[42px] font-bold leading-none text-[#4F7942]">
                04.
              </span>
              <h5 className="text-[17px] font-semibold leading-[1.3] text-[#1d1d23]">
                Empower our staff to serve the Church
              </h5>
              <p className="text-[14.5px] font-normal leading-[1.6] text-[#242424]">
                We’re never more fulfilled than when we help others. The people
                who work for our Church are a Blessing. Your donations help us
                support the families of our staff and volunteers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Ways to Give (Background Image with Dark Overlay) */}
      <section
        className="relative w-full py-12 md:py-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/bg-giving-ways.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 max-w-[1140px] mx-auto px-5">
          <h2 className="text-[23px] md:text-[26px] font-bold text-white mb-8 text-center md:text-left">
            Ways to give
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cash */}
            <div className="bg-white rounded-[6px] p-[30px] space-y-3 shadow flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-[20px] font-semibold text-[#4F7942]">
                  Cash
                </h3>
                <p className="text-[15px] text-[#0E0D0D] leading-[1.6]">
                  You can give your cash, tithes and offerings in a church
                  service or by dropping it off at a church office.
                </p>
              </div>
            </div>

            {/* Cheque */}
            <div className="bg-white rounded-[6px] p-[30px] space-y-4 shadow flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-[20px] font-semibold text-[#4F7942]">
                  Cheque
                </h3>
                <p className="text-[15px] text-[#0C0C0C] leading-[1.6]">
                  Mail cheques to: RCCG New Life Chapel{" "}
                  {churchInfo.address.full}
                </p>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() =>
                    handleCopy(
                      `RCCG New Life Chapel, ${churchInfo.address.full}`,
                      "address"
                    )
                  }
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#4F7942] bg-[#f2f7f0] hover:bg-[#e3efe0] px-3 py-1.5 rounded transition-colors cursor-pointer"
                >
                  {copiedField === "address"
                    ? "✓ Address Copied!"
                    : "Copy Mailing Address"}
                </button>
              </div>
            </div>

            {/* eTransfer [Interac] */}
            <div className="bg-white rounded-[6px] p-[30px] space-y-4 shadow flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-[20px] font-semibold text-[#4F7942]">
                  eTransfer [Interac]
                </h3>
                <p className="text-[15px] text-[#0A0A0A] leading-[1.6]">
                  You can also give with eTransfer [Interac] via:{" "}
                  <a
                    href={`mailto:${churchInfo.contact.givingEmail}`}
                    className="text-[#4F7942] font-semibold hover:underline break-all"
                  >
                    {churchInfo.contact.givingEmail}
                  </a>
                </p>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() =>
                    handleCopy(churchInfo.contact.givingEmail, "email")
                  }
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white bg-[#4F7942] hover:bg-[#3d6032] px-3.5 py-1.5 rounded transition-colors cursor-pointer"
                >
                  {copiedField === "email"
                    ? "✓ Email Copied!"
                    : "Copy e-Transfer Email"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Charitable Tax Receipt Registration (Interac e-Transfer Log) */}
      <section className="w-full py-14 md:py-18 bg-[#f9fbf9] border-t border-gray-200">
        <div className="max-w-[820px] mx-auto px-5">
          <div className="text-center space-y-3 mb-8">
            <span className="inline-block text-[12px] font-semibold uppercase tracking-wider text-[#4F7942] bg-[#E9FCE3] px-3 py-1 rounded-full">
              Canadian Charitable Tax Receipts
            </span>
            <h2 className="text-[23px] md:text-[26px] font-semibold text-[#1d1d23]">
              Register Your Mailing Address for Tax Receipts
            </h2>
            <p className="text-[14.5px] text-gray-600 leading-relaxed">
              Sending an Interac e-Transfer for the first time, or recently
              updated your address? Register your details below so our finance
              team can issue your annual Canadian charitable tax receipt.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-xs">
            {receiptSubmitted ? (
              <div className="p-6 bg-[#E9FCE3] border border-[#4F7942]/30 rounded text-[#1d1d23] space-y-2 text-center">
                <p className="font-semibold text-[#4F7942] text-[16px]">
                  Thank you for your generosity!
                </p>
                <p className="text-[14px]">
                  Your email client has opened to send your tax receipt
                  registration to{" "}
                  <a
                    href={`mailto:${churchInfo.contact.givingEmail}`}
                    className="underline font-medium"
                  >
                    {churchInfo.contact.givingEmail}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setReceiptSubmitted(false)}
                  className="text-[13px] text-[#4F7942] underline pt-2 cursor-pointer"
                >
                  Update or submit another registration
                </button>
              </div>
            ) : (
              <form onSubmit={handleReceiptSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13.5px] font-semibold text-[#1d1d23] mb-1.5">
                      Legal Full Name (for CRA Receipt){" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="First & Last Name"
                      value={receiptForm.fullName}
                      onChange={(e) =>
                        setReceiptForm({
                          ...receiptForm,
                          fullName: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded bg-[#fafafa] text-[14px] focus:outline-none focus:border-[#4F7942] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[13.5px] font-semibold text-[#1d1d23] mb-1.5">
                      Email Used for Interac e-Transfer{" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={receiptForm.email}
                      onChange={(e) =>
                        setReceiptForm({
                          ...receiptForm,
                          email: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded bg-[#fafafa] text-[14px] focus:outline-none focus:border-[#4F7942] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13.5px] font-semibold text-[#1d1d23] mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="(403) 000-0000"
                      value={receiptForm.phone}
                      onChange={(e) =>
                        setReceiptForm({
                          ...receiptForm,
                          phone: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded bg-[#fafafa] text-[14px] focus:outline-none focus:border-[#4F7942] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[13.5px] font-semibold text-[#1d1d23] mb-1.5">
                      Primary Giving Designation
                    </label>
                    <select
                      value={receiptForm.fundCategory}
                      onChange={(e) =>
                        setReceiptForm({
                          ...receiptForm,
                          fundCategory: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded bg-[#fafafa] text-[14px] focus:outline-none focus:border-[#4F7942] focus:bg-white"
                    >
                      <option value="Tithe & Offering">
                        Tithe &amp; Offering
                      </option>
                      <option value="Thanksgiving Offering">
                        Thanksgiving Offering
                      </option>
                      <option value="Missions & Community Outreach">
                        Missions &amp; Community Outreach (Food Bank)
                      </option>
                      <option value="Building & Welfare Fund">
                        Building &amp; Welfare Fund
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[13.5px] font-semibold text-[#1d1d23] mb-1.5">
                    Full Residential Mailing Address{" "}
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Street Address, Unit/Apt, City, Province, Postal Code"
                    value={receiptForm.mailingAddress}
                    onChange={(e) =>
                      setReceiptForm({
                        ...receiptForm,
                        mailingAddress: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded bg-[#fafafa] text-[14px] focus:outline-none focus:border-[#4F7942] focus:bg-white"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-[#4F7942] hover:bg-[#3d6032] text-white text-[14px] font-semibold px-7 py-3 rounded transition-colors cursor-pointer"
                  >
                    REGISTER FOR TAX RECEIPT
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
