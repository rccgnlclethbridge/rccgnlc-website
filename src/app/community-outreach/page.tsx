"use client";

import React, { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { churchInfo } from "@/data/churchData";

export default function CommunityOutreachPage() {
  const [activeMode, setActiveMode] = useState<"assistance" | "volunteer">(
    "assistance"
  );
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    householdSize: "1–2 people",
    supportType: "Food Bank / Grocery Hamper",
    volunteerArea: "Food Bank & Hamper Distribution",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject =
      activeMode === "assistance"
        ? `[Outreach Support Request - ${formData.supportType}] ${formData.name}`
        : `[Outreach Volunteer Sign-Up - ${formData.volunteerArea}] ${formData.name}`;

    const body =
      activeMode === "assistance"
        ? `Community Outreach / Food Bank Request:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSupport Needed: ${formData.supportType}\nHousehold Size: ${formData.householdSize}\n\nAdditional Details / Dietary Notes:\n${formData.notes || "None"}`
        : `Outreach Volunteer Sign-Up:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nArea of Interest: ${formData.volunteerArea}\n\nAvailability / Notes:\n${formData.notes || "None"}`;

    window.location.href = `mailto:${churchInfo.contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      <PageHero
        title="Community Outreach"
        backgroundImage="/images/hero-outreach.jpg"
        overlayOpacity={0.82}
      />

      <section className="w-full py-[60px] bg-white">
        <div className="max-w-[1140px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Image */}
            <div className="flex justify-center">
              <img
                src="/images/community-outreach.png"
                alt="Community Outreach"
                className="w-[90%] border-[20px] border-white shadow-sm object-cover"
              />
            </div>

            {/* Right Text */}
            <div className="p-6 md:p-[40px] space-y-5">
              <div className="w-16 h-[3px] bg-[#4F7942]" />
              <h2 className="text-[25px] font-semibold text-[#4F7942]">
                Our Belief
              </h2>
              <p className="text-[15px] text-[#1d1d23] leading-[1.7]">
                We believe it is the responsibility of the Church to impact
                society by showing the love of Jesus in practical terms.
              </p>
              <p className="text-[15px] text-[#1d1d23] leading-[1.7]">
                At RCCG New Life Chapel Lethbridge, our heart beats for our
                neighbors. Through our registered food bank, Christian
                counselling support, and local CARE initiatives, we walk
                alongside individuals, students, and families in Lethbridge with
                tangible compassion and dignity.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="#outreach-action"
                  onClick={() => {
                    setActiveMode("assistance");
                    setSubmitted(false);
                  }}
                  className="bg-[#4F7942] hover:bg-[#3d6032] text-white text-[13.5px] font-semibold px-5 py-2.5 rounded transition-colors"
                >
                  Request Food Bank / Support
                </a>
                <a
                  href="#outreach-action"
                  onClick={() => {
                    setActiveMode("volunteer");
                    setSubmitted(false);
                  }}
                  className="bg-[#f2f7f0] hover:bg-[#e3efe0] text-[#4F7942] border border-[#4F7942]/30 text-[13.5px] font-semibold px-5 py-2.5 rounded transition-colors"
                >
                  Volunteer With Us
                </a>
              </div>
            </div>
          </div>

          {/* 3 Community Initiatives Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#f2f7f0] border border-[#4F7942]/20 rounded-md p-6 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-[18px] font-semibold text-[#4F7942]">
                  Food Bank &amp; Food Security
                </h3>
                <p className="text-[14.5px] text-[#242424] leading-[1.6]">
                  We run a registered church food bank facility that supports
                  individuals, students, and families in Lethbridge with
                  essential groceries and food security.
                </p>
              </div>
              <div className="pt-1">
                <a
                  href="#outreach-action"
                  onClick={() => {
                    setActiveMode("assistance");
                    setSubmitted(false);
                  }}
                  className="text-[13.5px] font-semibold text-[#4F7942] hover:underline"
                >
                  Request a Food Hamper →
                </a>
              </div>
            </div>

            <div className="bg-[#f2f7f0] border border-[#4F7942]/20 rounded-md p-6 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-[18px] font-semibold text-[#4F7942]">
                  Christian Counselling &amp; Care
                </h3>
                <p className="text-[14.5px] text-[#242424] leading-[1.6]">
                  While spiritual health is essential, so is mental and
                  emotional well-being. We fund and provide caring Christian
                  counselling support for anyone going through a difficult
                  season.
                </p>
              </div>
              <div className="pt-1">
                <Link
                  href="/contact?tab=counselling"
                  className="text-[13.5px] font-semibold text-[#4F7942] hover:underline"
                >
                  Book Confidential Care →
                </Link>
              </div>
            </div>

            <div className="bg-[#f2f7f0] border border-[#4F7942]/20 rounded-md p-6 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-[18px] font-semibold text-[#4F7942]">
                  Sunday Rides &amp; Student Support
                </h3>
                <p className="text-[14.5px] text-[#242424] leading-[1.6]">
                  Need a ride to church? Our volunteer drivers provide free
                  Sunday morning pickup across Lethbridge so everyone can worship
                  in community.
                </p>
              </div>
              <div className="pt-1">
                <Link
                  href="/rides"
                  className="text-[13.5px] font-semibold text-[#4F7942] hover:underline"
                >
                  Book a Sunday Ride →
                </Link>
              </div>
            </div>
          </div>

          {/* Interactive Outreach Request / Volunteer Section */}
          <div
            id="outreach-action"
            className="mt-16 pt-12 border-t border-gray-200 max-w-[820px] mx-auto"
          >
            <div className="text-center space-y-3 mb-8">
              <span className="inline-block text-[12px] font-semibold uppercase tracking-wider text-[#4F7942] bg-[#f2f7f0] px-3 py-1 rounded-full">
                Practical Compassion in Action
              </span>
              <h2 className="text-[24px] md:text-[27px] font-semibold text-[#1d1d23]">
                Need Support or Want to Volunteer?
              </h2>
              <p className="text-[14.5px] text-gray-600">
                All assistance requests are handled confidentially with warmth
                and dignity by our RCCG New Life Chapel Care Team.
              </p>
            </div>

            {/* Mode Toggle Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <button
                type="button"
                onClick={() => {
                  setActiveMode("assistance");
                  setSubmitted(false);
                }}
                className={`px-6 py-3 rounded-md text-[14px] font-semibold transition-all cursor-pointer ${
                  activeMode === "assistance"
                    ? "bg-[#4F7942] text-white shadow-sm"
                    : "bg-[#f2f7f0] text-[#1d1d23] hover:bg-[#e3efe0]"
                }`}
              >
                Request Food Bank / Community Support
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveMode("volunteer");
                  setSubmitted(false);
                }}
                className={`px-6 py-3 rounded-md text-[14px] font-semibold transition-all cursor-pointer ${
                  activeMode === "volunteer"
                    ? "bg-[#4F7942] text-white shadow-sm"
                    : "bg-[#f2f7f0] text-[#1d1d23] hover:bg-[#e3efe0]"
                }`}
              >
                Volunteer With Our Outreach Team
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

                  {activeMode === "assistance" ? (
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
                          <option value="Food Bank / Grocery Hamper">
                            Food Bank / Grocery Hamper
                          </option>
                          <option value="Student Support / Care Package">
                            Student Support / Care Package
                          </option>
                          <option value="Christian Counselling Support">
                            Christian Counselling Support
                          </option>
                          <option value="Newcomer / Family Welcome Support">
                            Newcomer / Family Welcome Support
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
                  ) : (
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
                        <option value="Food Bank & Hamper Distribution">
                          Food Bank &amp; Hamper Distribution
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

                  <div>
                    <label className="block text-[13.5px] font-semibold text-[#1d1d23] mb-1.5">
                      {activeMode === "assistance"
                        ? "Additional Notes (e.g., address for delivery/pick-up, dietary needs)"
                        : "Your Availability / Message"}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={
                        activeMode === "assistance"
                          ? "Let us know how we can best assist you..."
                          : "Let us know your availability or experience..."
                      }
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded bg-white text-[14px] focus:outline-none focus:border-[#4F7942]"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="bg-[#4F7942] hover:bg-[#3d6032] text-white text-[14px] font-semibold px-7 py-3 rounded transition-colors cursor-pointer"
                    >
                      {activeMode === "assistance"
                        ? "SUBMIT CONFIDENTIAL REQUEST"
                        : "SIGN UP TO VOLUNTEER"}
                    </button>
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
