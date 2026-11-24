"use client";

import React, { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { churchInfo } from "@/data/churchData";

type OutreachMode = "assistance" | "volunteer" | "partner";

export default function CommunityOutreachPage() {
  const [activeMode, setActiveMode] = useState<OutreachMode>("assistance");
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    householdSize: "1–2 people",
    supportType: "Food Pantry / Grocery Hamper",
    volunteerArea: "Food Pantry & Hamper Distribution",
    partnerType: "Grocery / Non-Perishable Drop-Off",
    notes: "",
  });

  const switchMode = (mode: OutreachMode) => {
    setActiveMode(mode);
    setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let subject = "";
    let body = "";

    if (activeMode === "assistance") {
      subject = `[Food Pantry / Support Request - ${formData.supportType}] ${formData.name}`;
      body = `Food Pantry / Community Care Request:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSupport Needed: ${formData.supportType}\nHousehold Size: ${formData.householdSize}\n\nAdditional Details / Dietary Notes:\n${formData.notes || "None"}`;
    } else if (activeMode === "volunteer") {
      subject = `[Outreach Volunteer Sign-Up - ${formData.volunteerArea}] ${formData.name}`;
      body = `Outreach Volunteer Sign-Up:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nArea of Interest: ${formData.volunteerArea}\n\nAvailability / Notes:\n${formData.notes || "None"}`;
    } else {
      subject = `[Food Pantry Partnership / Donation - ${formData.partnerType}] ${formData.organization || formData.name}`;
      body = `Food Pantry Donation / Partnership Inquiry:\n\nContact Name: ${formData.name}\nOrganization / Business (if applicable): ${formData.organization || "Individual Donor"}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPartnership / Donation Type: ${formData.partnerType}\n\nDetails / Drop-Off Timing:\n${formData.notes || "None"}`;
    }

    window.location.href = `mailto:${churchInfo.contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      <PageHero
        title="Food Pantry & Community Outreach"
        backgroundImage="/images/hero-outreach.jpg"
        overlayOpacity={0.82}
        backgroundPosition="center 20%"
      />

      <section className="w-full py-[56px] bg-white">
        <div className="max-w-[1140px] mx-auto px-5">
          {/* Intro Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Image */}
            <div className="flex justify-center">
              <img
                src="/images/community-outreach.png"
                alt="Food Pantry & Community Outreach at RCCG New Life Chapel Lethbridge"
                className="w-[90%] border-[20px] border-white shadow-sm object-cover"
              />
            </div>

            {/* Right Text */}
            <div className="p-4 md:p-[32px] space-y-5">
              <div className="w-16 h-[3px] bg-[#4F7942]" />
              <h2 className="text-[25px] font-semibold text-[#4F7942]">
                Our Belief in Action
              </h2>
              <p className="text-[15px] text-[#1d1d23] leading-[1.7]">
                We believe it is the responsibility of the Church to impact
                society by showing the love of Jesus in practical terms.
              </p>
              <p className="text-[15px] text-[#1d1d23] leading-[1.7]">
                At RCCG New Life Chapel Lethbridge, our heart beats for our
                neighbors. Through our weekly Food Pantry, Christian counselling
                support, household care, and neighborhood gatherings, we walk
                alongside individuals, students, and families across Southern
                Alberta with tangible compassion and dignity.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="#outreach-action"
                  onClick={() => switchMode("assistance")}
                  className="bg-[#4F7942] hover:bg-[#3d6032] text-white text-[13.5px] font-semibold px-5 py-2.5 rounded transition-colors"
                >
                  Request Food Hamper
                </a>
                <a
                  href="#outreach-action"
                  onClick={() => switchMode("partner")}
                  className="bg-[#f2f7f0] hover:bg-[#e3efe0] text-[#4F7942] border border-[#4F7942]/30 text-[13.5px] font-semibold px-5 py-2.5 rounded transition-colors"
                >
                  Donate Food / Partner
                </a>
                <a
                  href="#outreach-action"
                  onClick={() => switchMode("volunteer")}
                  className="bg-white hover:bg-gray-50 text-[#1d1d23] border border-gray-300 text-[13.5px] font-semibold px-5 py-2.5 rounded transition-colors"
                >
                  Volunteer
                </a>
              </div>
            </div>
          </div>

          {/* ================================================================
              WEEKLY FOOD PANTRY SPOTLIGHT
              ================================================================ */}
          <div
            id="food-pantry"
            className="scroll-mt-24 mt-14 rounded-2xl border border-[#4F7942]/25 bg-[#f7faf6] p-6 sm:p-8 md:p-10 space-y-8 shadow-xs"
          >
            {/* Header & Open-Access Policy */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-[#4F7942]/15 pb-6">
              <div className="space-y-2.5 max-w-[740px]">
                <span className="inline-block text-[11.5px] font-bold uppercase tracking-wider text-[#4F7942] bg-white border border-[#4F7942]/25 px-3 py-1 rounded-full">
                  Registered Charity Food Pantry · CRA #
                  {churchInfo.charity.registrationNumber}
                </span>
                <h2 className="text-[24px] md:text-[30px] font-semibold text-[#1d1d23] leading-tight">
                  Weekly Food Pantry &amp; Grocery Support
                </h2>
                <p className="text-[14.5px] text-gray-700 leading-[1.65]">
                  <strong className="text-[#1d1d23] font-semibold">
                    Open to everyone in Lethbridge:
                  </strong>{" "}
                  Individuals, families, newcomers, and University of Lethbridge
                  or Lethbridge Polytechnic students are welcome —{" "}
                  <span className="font-medium text-[#4F7942]">
                    no church membership required
                  </span>
                  , 100% confidential, and served with dignity.
                </p>
              </div>

              <a
                href="#outreach-action"
                onClick={() => switchMode("assistance")}
                className="inline-flex items-center justify-center bg-[#4F7942] hover:bg-[#3d6032] text-white text-[13.5px] font-semibold px-6 py-3 rounded transition-colors shrink-0 shadow-xs"
              >
                Request a Grocery Hamper →
              </a>
            </div>

            {/* 3-Step How It Works Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white border border-[#4F7942]/15 rounded-xl p-5 space-y-2">
                <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#4F7942]">
                  Step 01 · Confidential Request
                </span>
                <h3 className="text-[16px] font-semibold text-[#1d1d23]">
                  Submit Your Household Needs
                </h3>
                <p className="text-[13.5px] text-gray-600 leading-[1.6]">
                  Fill out the request form below with your household size and
                  any allergies or dietary notes, or speak privately with our
                  Care Team.
                </p>
              </div>

              <div className="bg-white border border-[#4F7942]/15 rounded-xl p-5 space-y-2">
                <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#4F7942]">
                  Step 02 · Tailored Hamper
                </span>
                <h3 className="text-[16px] font-semibold text-[#1d1d23]">
                  Culturally Familiar &amp; Everyday Staples
                </h3>
                <p className="text-[13.5px] text-gray-600 leading-[1.6]">
                  Volunteers assemble nutritious hampers with Canadian pantry
                  essentials, culturally familiar grains and staples, and
                  available fresh items.
                </p>
              </div>

              <div className="bg-white border border-[#4F7942]/15 rounded-xl p-5 space-y-2">
                <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#4F7942]">
                  Step 03 · Easy Pick-Up
                </span>
                <h3 className="text-[16px] font-semibold text-[#1d1d23]">
                  Weekly Pick-Up at 234 13 St N
                </h3>
                <p className="text-[13.5px] text-gray-600 leading-[1.6]">
                  Our Care Team coordinates confidential pick-up times with you
                  at our sanctuary or alongside weekly church gatherings.
                </p>
              </div>
            </div>

            {/* 2-Column Practical Panel: What We Provide vs Donate Food or Partner */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left: What We Provide */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3">
                <h3 className="text-[18px] font-semibold text-[#4F7942]">
                  What Our Pantry Provides
                </h3>
                <ul className="space-y-2 text-[14px] text-[#242424] leading-[1.6]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4F7942] font-bold">✓</span>
                    <span>
                      <strong>Non-Perishable Pantry Staples:</strong> Rice,
                      pasta, flour, cooking oil, oats, cereals, canned beans,
                      proteins, tomatoes, and vegetables.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4F7942] font-bold">✓</span>
                    <span>
                      <strong>Seasonal &amp; Fresh Produce:</strong> Fresh
                      produce, bread, and dairy items whenever stocked through
                      partners and weekly food drives.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4F7942] font-bold">✓</span>
                    <span>
                      <strong>Student &amp; Newcomer Care Packages:</strong>{" "}
                      Starter grocery bundles tailored for students and newly
                      arrived households settling in Lethbridge.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4F7942] font-bold">✓</span>
                    <span>
                      <strong>Occasional Household Essentials:</strong>{" "}
                      Toiletries and household goods donations as inventory
                      allows.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Right: Donate Food, Fund Hampers, or Partner */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-[18px] font-semibold text-[#4F7942]">
                    Donate Groceries or Partner With Us
                  </h3>
                  <ul className="space-y-2 text-[14px] text-[#242424] leading-[1.6]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#4F7942] font-bold">•</span>
                      <span>
                        <strong>Drop-Off Unopened Staples:</strong> Bring
                        shelf-stable groceries to{" "}
                        <strong>234 13 Street North</strong> during Sunday
                        service (9:30 AM) or Wednesday study (7:00 PM).
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4F7942] font-bold">•</span>
                      <span>
                        <strong>Sponsor Food Hampers Financially:</strong>{" "}
                        Send an Interac e-Transfer to{" "}
                        <span className="font-mono font-semibold text-[#1d1d23]">
                          {churchInfo.contact.givingEmail}
                        </span>{" "}
                        with memo <em>&ldquo;Food Pantry&rdquo;</em> — eligible
                        for official CRA receipts (#
                        {churchInfo.charity.registrationNumber}).{" "}
                        <Link
                          href="/giving"
                          className="text-[#4F7942] font-semibold underline"
                        >
                          Giving details →
                        </Link>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4F7942] font-bold">•</span>
                      <span>
                        <strong>Grocers, Farms &amp; Campus Groups:</strong> We
                        welcome surplus food rescue partnerships, community
                        gardens, and seasonal campus/business food drives.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2">
                  <a
                    href="#outreach-action"
                    onClick={() => switchMode("partner")}
                    className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#4F7942] hover:underline"
                  >
                    Coordinate a Food Drive or Corporate Partnership →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ================================================================
              4 COMMUNITY INITIATIVES CARDS (GROUNDED IN CRA FILINGS)
              ================================================================ */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#f2f7f0] border border-[#4F7942]/20 rounded-md p-6 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-[17.5px] font-semibold text-[#4F7942]">
                  Weekly Food Pantry
                </h3>
                <p className="text-[14px] text-[#242424] leading-[1.6]">
                  Consistent grocery distribution helping individuals, students,
                  and families in Lethbridge maintain food security with care.
                </p>
              </div>
              <div className="pt-1">
                <a
                  href="#outreach-action"
                  onClick={() => switchMode("assistance")}
                  className="text-[13px] font-semibold text-[#4F7942] hover:underline"
                >
                  Request a Food Hamper →
                </a>
              </div>
            </div>

            <div className="bg-[#f2f7f0] border border-[#4F7942]/20 rounded-md p-6 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-[17.5px] font-semibold text-[#4F7942]">
                  Christian Counselling &amp; Care
                </h3>
                <p className="text-[14px] text-[#242424] leading-[1.6]">
                  We fund and provide compassionate Christian counselling and
                  confidential pastoral support for anyone walking through a
                  difficult season.
                </p>
              </div>
              <div className="pt-1">
                <Link
                  href="/contact?tab=counselling"
                  className="text-[13px] font-semibold text-[#4F7942] hover:underline"
                >
                  Book Confidential Care →
                </Link>
              </div>
            </div>

            <div className="bg-[#f2f7f0] border border-[#4F7942]/20 rounded-md p-6 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-[17.5px] font-semibold text-[#4F7942]">
                  Student Care &amp; Sunday Rides
                </h3>
                <p className="text-[14px] text-[#242424] leading-[1.6]">
                  Supporting new residents and students with household goods
                  donations, campus Youth Connect, and free Sunday pickup across
                  Lethbridge.
                </p>
              </div>
              <div className="pt-1">
                <Link
                  href="/rides"
                  className="text-[13px] font-semibold text-[#4F7942] hover:underline"
                >
                  Book a Sunday Ride →
                </Link>
              </div>
            </div>

            <div className="bg-[#f2f7f0] border border-[#4F7942]/20 rounded-md p-6 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-[17.5px] font-semibold text-[#4F7942]">
                  Neighborhood Meals &amp; Partnerships
                </h3>
                <p className="text-[14px] text-[#242424] leading-[1.6]">
                  Bringing neighbors together through our free annual community
                  BBQ, monthly Thanksgiving potlucks, and joint local church
                  outreach.
                </p>
              </div>
              <div className="pt-1">
                <Link
                  href="/news-events"
                  className="text-[13px] font-semibold text-[#4F7942] hover:underline"
                >
                  View Community Events →
                </Link>
              </div>
            </div>
          </div>

          {/* ================================================================
              INTERACTIVE OUTREACH REQUEST / VOLUNTEER / PARTNER FORM
              ================================================================ */}
          <div
            id="outreach-action"
            className="scroll-mt-24 mt-16 pt-12 border-t border-gray-200 max-w-[840px] mx-auto"
          >
            <div className="text-center space-y-3 mb-8">
              <span className="inline-block text-[12px] font-semibold uppercase tracking-wider text-[#4F7942] bg-[#f2f7f0] px-3 py-1 rounded-full">
                Practical Compassion in Action
              </span>
              <h2 className="text-[24px] md:text-[27px] font-semibold text-[#1d1d23]">
                Request Support, Volunteer, or Partner
              </h2>
              <p className="text-[14.5px] text-gray-600">
                All assistance requests are handled confidentially with warmth
                and dignity by our RCCG New Life Chapel Care Team.
              </p>
            </div>

            {/* 3 Mode Toggle Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <button
                type="button"
                onClick={() => switchMode("assistance")}
                className={`px-5 py-3 rounded-md text-[13.5px] font-semibold transition-all cursor-pointer ${
                  activeMode === "assistance"
                    ? "bg-[#4F7942] text-white shadow-sm"
                    : "bg-[#f2f7f0] text-[#1d1d23] hover:bg-[#e3efe0]"
                }`}
              >
                Request Food Pantry / Support
              </button>
              <button
                type="button"
                onClick={() => switchMode("volunteer")}
                className={`px-5 py-3 rounded-md text-[13.5px] font-semibold transition-all cursor-pointer ${
                  activeMode === "volunteer"
                    ? "bg-[#4F7942] text-white shadow-sm"
                    : "bg-[#f2f7f0] text-[#1d1d23] hover:bg-[#e3efe0]"
                }`}
              >
                Volunteer With Us
              </button>
              <button
                type="button"
                onClick={() => switchMode("partner")}
                className={`px-5 py-3 rounded-md text-[13.5px] font-semibold transition-all cursor-pointer ${
                  activeMode === "partner"
                    ? "bg-[#4F7942] text-white shadow-sm"
                    : "bg-[#f2f7f0] text-[#1d1d23] hover:bg-[#e3efe0]"
                }`}
              >
                Donate Food / Partner
              </button>
            </div>

            {/* Form Card */}
            <div className="bg-[#f9fbf9] border border-gray-200 rounded-lg p-6 md:p-8 shadow-xs">
              {submitted ? (
                <div className="p-6 bg-[#E9FCE3] border border-[#4F7942]/30 rounded text-[#1d1d23] space-y-2 text-center">
                  <p className="font-semibold text-[#4F7942] text-[16px]">
                    Thank you! Your email client has opened to complete your
                    request.
                  </p>
                  <p className="text-[14px]">
                    Our Community Outreach team at{" "}
                    <a
                      href={`mailto:${churchInfo.contact.email}`}
                      className="underline font-medium"
                    >
                      {churchInfo.contact.email}
                    </a>{" "}
                    will follow up with you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-[13px] text-[#4F7942] underline pt-2 cursor-pointer"
                  >
                    Submit another form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[13.5px] font-semibold text-[#1d1d23] mb-1.5">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 border border-gray-300 rounded bg-white text-[14px] focus:outline-none focus:border-[#4F7942]"
                      />
                    </div>
                    <div>
                      <label className="block text-[13.5px] font-semibold text-[#1d1d23] mb-1.5">
                        Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 border border-gray-300 rounded bg-white text-[14px] focus:outline-none focus:border-[#4F7942]"
                      />
                    </div>
                    <div>
                      <label className="block text-[13.5px] font-semibold text-[#1d1d23] mb-1.5">
                        Phone Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(403) 000-0000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 border border-gray-300 rounded bg-white text-[14px] focus:outline-none focus:border-[#4F7942]"
                      />
                    </div>
                  </div>

                  {activeMode === "assistance" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[13.5px] font-semibold text-[#1d1d23] mb-1.5">
                          Type of Support Needed
                        </label>
                        <select
                          value={formData.supportType}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              supportType: e.target.value,
                            })
                          }
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded bg-white text-[14px] focus:outline-none focus:border-[#4F7942]"
                        >
                          <option value="Food Pantry / Grocery Hamper">
                            Food Pantry / Grocery Hamper
                          </option>
                          <option value="Student Support / Care Package">
                            Student Support / Care Package
                          </option>
                          <option value="Christian Counselling Support">
                            Christian Counselling Support
                          </option>
                          <option value="Newcomer / Household Support">
                            Newcomer / Household Support
                          </option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[13.5px] font-semibold text-[#1d1d23] mb-1.5">
                          Household Size
                        </label>
                        <select
                          value={formData.householdSize}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              householdSize: e.target.value,
                            })
                          }
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded bg-white text-[14px] focus:outline-none focus:border-[#4F7942]"
                        >
                          <option value="1–2 people">1–2 people</option>
                          <option value="3–4 people">3–4 people</option>
                          <option value="5+ people">5+ people</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {activeMode === "volunteer" && (
                    <div>
                      <label className="block text-[13.5px] font-semibold text-[#1d1d23] mb-1.5">
                        Where Would You Like to Serve?
                      </label>
                      <select
                        value={formData.volunteerArea}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            volunteerArea: e.target.value,
                          })
                        }
                        className="w-full px-3.5 py-2.5 border border-gray-300 rounded bg-white text-[14px] focus:outline-none focus:border-[#4F7942]"
                      >
                        <option value="Food Pantry & Hamper Distribution">
                          Food Pantry &amp; Hamper Distribution
                        </option>
                        <option value="Community Care & Visitation">
                          Community Care &amp; Visitation
                        </option>
                        <option value="Sunday Rides / Transportation Driver">
                          Sunday Rides / Transportation Driver
                        </option>
                        <option value="Campus & Student Outreach">
                          Campus &amp; Student Outreach
                        </option>
                      </select>
                    </div>
                  )}

                  {activeMode === "partner" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[13.5px] font-semibold text-[#1d1d23] mb-1.5">
                          Organization / Group (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="Business, Farm, Club, or Individual"
                          value={formData.organization}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              organization: e.target.value,
                            })
                          }
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded bg-white text-[14px] focus:outline-none focus:border-[#4F7942]"
                        />
                      </div>
                      <div>
                        <label className="block text-[13.5px] font-semibold text-[#1d1d23] mb-1.5">
                          Donation / Partnership Type
                        </label>
                        <select
                          value={formData.partnerType}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              partnerType: e.target.value,
                            })
                          }
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded bg-white text-[14px] focus:outline-none focus:border-[#4F7942]"
                        >
                          <option value="Grocery / Non-Perishable Drop-Off">
                            Grocery / Non-Perishable Drop-Off
                          </option>
                          <option value="Corporate / Grocery Food Rescue Partnership">
                            Corporate / Grocery Food Rescue Partnership
                          </option>
                          <option value="Household Goods Donation">
                            Household Goods Donation
                          </option>
                          <option value="Campus / Community Food Drive">
                            Campus / Community Food Drive
                          </option>
                        </select>
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-[13.5px] font-semibold text-[#1d1d23] mb-1.5">
                      {activeMode === "assistance" &&
                        "Additional Notes (e.g., dietary/allergy needs or preferred pick-up times)"}
                      {activeMode === "volunteer" &&
                        "Your Availability / Experience"}
                      {activeMode === "partner" &&
                        "Items Available or Proposed Partnership Details"}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={
                        activeMode === "assistance"
                          ? "Let us know how we can best assist you..."
                          : activeMode === "volunteer"
                          ? "Let us know your availability or experience..."
                          : "Let us know what items you'd like to donate or how your group would like to partner..."
                      }
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded bg-white text-[14px] focus:outline-none focus:border-[#4F7942]"
                    />
                  </div>

                  <div className="space-y-2.5">
                    <button
                      type="submit"
                      className="bg-[#4F7942] hover:bg-[#3d6032] text-white text-[14px] font-semibold px-7 py-3 rounded transition-colors cursor-pointer"
                    >
                      {activeMode === "assistance" &&
                        "SUBMIT CONFIDENTIAL REQUEST"}
                      {activeMode === "volunteer" && "SIGN UP TO VOLUNTEER"}
                      {activeMode === "partner" &&
                        "SEND FOOD DONATION / PARTNER NOTE"}
                    </button>

                    <p className="text-[12.5px] text-gray-500">
                      Prefer to email directly? Send your note to{" "}
                      <a
                        href={`mailto:${churchInfo.contact.email}`}
                        className="text-[#4F7942] font-medium underline"
                      >
                        {churchInfo.contact.email}
                      </a>
                      .
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
