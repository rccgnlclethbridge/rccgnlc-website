"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { churchInfo } from "@/data/churchData";

type TabType = "message" | "visit" | "prayer" | "testimony" | "counselling";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<TabType>("message");
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    visitDate: "",
    groupSize: "Just me",
    needRide: false,
    isConfidential: true,
    preferredTime: "Weekday Evening",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tab = params.get("tab") as TabType | null;
      if (
        tab &&
        ["message", "visit", "prayer", "testimony", "counselling"].includes(tab)
      ) {
        setActiveTab(tab);
      }
    }
  }, []);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let emailSubject = "";
    let emailBody = "";

    if (activeTab === "visit") {
      emailSubject = `[Plan a Visit / Connect Card] ${formData.name}`;
      emailBody = `New Visitor Connect Card:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "N/A"}\nPlanned Visit Date: ${formData.visitDate || "Upcoming Sunday"}\nWho is coming: ${formData.groupSize}\nNeeds a Free Sunday Ride: ${formData.needRide ? "YES" : "No"}\n\nQuestions / Notes:\n${formData.message || "None"}`;
    } else if (activeTab === "prayer") {
      emailSubject = `[Prayer Request${formData.isConfidential ? " - Confidential" : ""}] from ${formData.name || "Anonymous"}`;
      emailBody = `Prayer Request Submission:\n\nName: ${formData.name || "Anonymous"}\nEmail: ${formData.email}\nPhone: ${formData.phone || "N/A"}\nConfidential (Pastoral Team Only): ${formData.isConfidential ? "Yes" : "No"}\n\nPrayer Request:\n${formData.message}`;
    } else if (activeTab === "testimony") {
      emailSubject = `[Testimony / Praise Report] from ${formData.name}`;
      emailBody = `Praise Report / Testimony:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "N/A"}\n\nWhat the Lord Has Done:\n${formData.message}`;
    } else if (activeTab === "counselling") {
      emailSubject = `[Pastoral Counselling & Care Request] ${formData.name}`;
      emailBody = `Pastoral Counselling / Care Request:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPreferred Availability: ${formData.preferredTime}\n\nHow we can support you:\n${formData.message}`;
    } else {
      emailSubject =
        formData.subject || `Website Inquiry from ${formData.name}`;
      emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "N/A"}\n\nMessage:\n${formData.message}`;
    }

    const mailtoUrl = `mailto:${churchInfo.contact.email}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const tabs: { id: TabType; label: string; badge?: string }[] = [
    { id: "message", label: "General Message" },
    { id: "visit", label: "Plan a Visit", badge: "I’m New" },
    { id: "prayer", label: "Prayer Request" },
    { id: "testimony", label: "Share a Testimony" },
    { id: "counselling", label: "Pastoral Counselling" },
  ];

  return (
    <div className="w-full">
      <PageHero
        title="Reach us anytime"
        backgroundImage="/images/hero-contact.jpeg"
        overlayOpacity={0.7}
      />

      <section className="w-full py-14 md:py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-5">
          {/* Interactive Tab Selector Bar */}
          <div className="mb-12">
            <div className="text-center max-w-[680px] mx-auto mb-6 space-y-2">
              <span className="inline-block text-[12px] font-semibold uppercase tracking-wider text-[#4F7942] bg-[#f2f7f0] px-3 py-1 rounded-full">
                Connect &amp; Care Hub
              </span>
              <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1d1d23]">
                How Can We Serve or Connect With You Today?
              </h2>
              <p className="text-[14.5px] text-gray-600">
                Choose an option below to send a general inquiry, plan your
                first Sunday visit, submit a prayer request, share a testimony,
                or book pastoral counselling.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2.5 border-b border-gray-200 pb-5">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleTabChange(tab.id)}
                    className={`px-4 py-2.5 rounded-md text-[14px] font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? "bg-[#4F7942] text-white shadow-sm"
                        : "bg-[#f2f7f0] text-[#1d1d23] hover:bg-[#e3efe0]"
                    }`}
                  >
                    <span>{tab.label}</span>
                    {tab.badge && (
                      <span
                        className={`text-[11px] px-2 py-0.5 rounded-full ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-[#4F7942]/15 text-[#4F7942]"
                        }`}
                      >
                        {tab.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: GET IN TOUCH & SERVICE INFO (5 cols) */}
            <div className="lg:col-span-5 space-y-6 bg-[#f9fbf9] p-7 rounded-lg border border-gray-200">
              <div className="space-y-3">
                <div className="w-16 h-[3px] bg-[#4F7942]" />
                <h3 className="text-[22px] font-semibold text-[#4F7942]">
                  GET IN TOUCH
                </h3>
                <h6 className="text-[15px] font-medium text-[#1d1d23]">
                  We would love to hear from you and welcome you home!
                </h6>
              </div>

              <ul className="space-y-3.5 pt-1 text-[15px]">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-4 h-4 fill-[#4F7942] shrink-0 mt-1"
                    viewBox="0 0 384 512"
                  >
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                  </svg>
                  <div>
                    <strong className="font-semibold block text-[#1d1d23]">
                      Church Sanctuary
                    </strong>
                    <span className="text-gray-700">
                      {churchInfo.address.full}
                    </span>
                  </div>
                </li>

                <li className="flex items-center gap-3">
                  <svg
                    className="w-4 h-4 fill-[#4F7942] shrink-0"
                    viewBox="0 0 512 512"
                  >
                    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                  </svg>
                  <a
                    href={`mailto:${churchInfo.contact.email}`}
                    className="text-[#1d1d23] hover:text-[#4F7942] transition-colors font-medium"
                  >
                    {churchInfo.contact.email}
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <svg
                    className="w-4 h-4 fill-[#4F7942] shrink-0"
                    viewBox="0 0 512 512"
                  >
                    <path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z" />
                  </svg>
                  <a
                    href={churchInfo.contact.linktree}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1d1d23] hover:text-[#4F7942] transition-colors font-medium"
                  >
                    Linktr.ee / Quick Links
                  </a>
                </li>
              </ul>

              <div className="pt-3 border-t border-gray-200 space-y-2 text-[14px]">
                <p className="text-[#1d1d23]">
                  <strong className="font-semibold">Mailing Address</strong>:{" "}
                  {churchInfo.address.mailing}
                </p>
                <p className="text-[#1d1d23]">
                  <strong className="font-semibold">Sunday Service</strong>:{" "}
                  9:30 AM (Sunday School &amp; Celebration Service)
                </p>
                <p className="text-[#1d1d23]">
                  <strong className="font-semibold">Wednesday Study</strong>:{" "}
                  7:00 PM (Holy Communion: Second Wednesday)
                </p>
              </div>

              {/* Need a Ride Callout */}
              <div className="p-4 rounded-md bg-[#E9FCE3] border border-[#4F7942]/25 space-y-1.5">
                <p className="text-[14px] font-semibold text-[#4F7942]">
                  Need a Free Ride to Service on Sunday?
                </p>
                <p className="text-[13px] text-[#242424]">
                  Our transportation team provides complimentary pick-up and
                  drop-off across Lethbridge.
                </p>
                <Link
                  href="/rides"
                  className="inline-block text-[13px] font-semibold text-[#4F7942] underline pt-1"
                >
                  Book Your Sunday Ride →
                </Link>
              </div>
            </div>

            {/* Right Column: Dynamic Form Based on Active Tab (7 cols) */}
            <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-lg border border-gray-200 shadow-xs space-y-6">
              {activeTab === "message" && (
                <div>
                  <h2 className="text-[22px] font-semibold text-[#4F7942]">
                    Have a message or question?
                  </h2>
                  <p className="text-[14px] text-gray-600 mt-1">
                    Send us a note below and our church office team will get
                    back to you promptly.
                  </p>
                </div>
              )}

              {activeTab === "visit" && (
                <div>
                  <h2 className="text-[22px] font-semibold text-[#4F7942]">
                    Plan Your Visit (Digital Connect Card)
                  </h2>
                  <p className="text-[14px] text-gray-600 mt-1">
                    Visiting RCCG New Life Chapel for the first time? Let us
                    know when you’re coming so our Welcome Team can greet you!
                  </p>
                </div>
              )}

              {activeTab === "prayer" && (
                <div>
                  <h2 className="text-[22px] font-semibold text-[#4F7942]">
                    Submit a Prayer Request
                  </h2>
                  <p className="text-[14px] text-gray-600 mt-1">
                    “Again I say unto you, That if two of you shall agree on
                    earth as touching any thing that they shall ask, it shall be
                    done for them of my Father which is in heaven.” — Matthew
                    18:19
                  </p>
                </div>
              )}

              {activeTab === "testimony" && (
                <div>
                  <h2 className="text-[22px] font-semibold text-[#4F7942]">
                    Share Your Testimony / Praise Report
                  </h2>
                  <p className="text-[14px] text-gray-600 mt-1">
                    Has the Lord answered a prayer, healed, provided, or opened
                    a door? Share your praise report so we can rejoice with you!
                  </p>
                </div>
              )}

              {activeTab === "counselling" && (
                <div>
                  <h2 className="text-[22px] font-semibold text-[#4F7942]">
                    Pastoral Counselling &amp; Care Request
                  </h2>
                  <p className="text-[14px] text-gray-600 mt-1">
                    Need spiritual guidance, pre-marital counselling, or someone
                    to talk and pray with confidentially? Request a session
                    below.
                  </p>
                </div>
              )}

              {submitted ? (
                <div className="p-6 bg-[#E9FCE3] border border-[#4F7942]/30 rounded text-[#1d1d23] space-y-2">
                  <p className="font-semibold text-[#4F7942]">
                    Thank you for reaching out to RCCG New Life Chapel!
                  </p>
                  <p className="text-[14px]">
                    Your email client has been opened to send your submission to{" "}
                    <a
                      href={`mailto:${churchInfo.contact.email}`}
                      className="underline font-medium"
                    >
                      {churchInfo.contact.email}
                    </a>
                    .
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[14px] font-semibold text-[#1d1d23] mb-1.5">
                        Name{" "}
                        {activeTab !== "prayer" && (
                          <span className="text-red-600">*</span>
                        )}
                      </label>
                      <input
                        type="text"
                        required={activeTab !== "prayer"}
                        placeholder={
                          activeTab === "prayer"
                            ? "Your Name (or leave blank)"
                            : "Your Full Name"
                        }
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 border border-gray-300 rounded-[3px] bg-[#fafafa] text-[14px] focus:outline-none focus:border-[#4F7942] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[14px] font-semibold text-[#1d1d23] mb-1.5">
                        Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Your Email Address"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 border border-gray-300 rounded-[3px] bg-[#fafafa] text-[14px] focus:outline-none focus:border-[#4F7942] focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Phone field for Visit, Counselling, or optional */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[14px] font-semibold text-[#1d1d23] mb-1.5">
                        Phone Number{" "}
                        {activeTab === "counselling" && (
                          <span className="text-red-600">*</span>
                        )}
                      </label>
                      <input
                        type="tel"
                        required={activeTab === "counselling"}
                        placeholder="(403) 000-0000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 border border-gray-300 rounded-[3px] bg-[#fafafa] text-[14px] focus:outline-none focus:border-[#4F7942] focus:bg-white"
                      />
                    </div>

                    {activeTab === "visit" && (
                      <div>
                        <label className="block text-[14px] font-semibold text-[#1d1d23] mb-1.5">
                          Planned Visit Date
                        </label>
                        <input
                          type="date"
                          value={formData.visitDate}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              visitDate: e.target.value,
                            })
                          }
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-[3px] bg-[#fafafa] text-[14px] focus:outline-none focus:border-[#4F7942] focus:bg-white"
                        />
                      </div>
                    )}

                    {activeTab === "counselling" && (
                      <div>
                        <label className="block text-[14px] font-semibold text-[#1d1d23] mb-1.5">
                          Preferred Time
                        </label>
                        <select
                          value={formData.preferredTime}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              preferredTime: e.target.value,
                            })
                          }
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-[3px] bg-[#fafafa] text-[14px] focus:outline-none focus:border-[#4F7942] focus:bg-white"
                        >
                          <option value="Weekday Daytime">
                            Weekday Daytime
                          </option>
                          <option value="Weekday Evening">
                            Weekday Evening
                          </option>
                          <option value="After Sunday Service">
                            After Sunday Service
                          </option>
                          <option value="Phone / Online Call">
                            Phone / Online Call
                          </option>
                        </select>
                      </div>
                    )}

                    {activeTab === "message" && (
                      <div>
                        <label className="block text-[14px] font-semibold text-[#1d1d23] mb-1.5">
                          Subject <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              subject: e.target.value,
                            })
                          }
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-[3px] bg-[#fafafa] text-[14px] focus:outline-none focus:border-[#4F7942] focus:bg-white"
                        />
                      </div>
                    )}
                  </div>

                  {activeTab === "visit" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center p-4 bg-[#f2f7f0] rounded border border-[#4F7942]/20">
                      <div>
                        <label className="block text-[13.5px] font-semibold text-[#1d1d23] mb-1">
                          Who will be attending with you?
                        </label>
                        <select
                          value={formData.groupSize}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              groupSize: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-[13.5px]"
                        >
                          <option value="Just me">Just me</option>
                          <option value="Me and my spouse / friend">
                            Me and my spouse / friend
                          </option>
                          <option value="My family (with children)">
                            My family (with children)
                          </option>
                          <option value="Student / Campus group">
                            Student / Campus group
                          </option>
                        </select>
                      </div>

                      <div className="pt-2 sm:pt-5">
                        <label className="inline-flex items-center gap-2.5 cursor-pointer text-[13.5px] font-medium text-[#1d1d23]">
                          <input
                            type="checkbox"
                            checked={formData.needRide}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                needRide: e.target.checked,
                              })
                            }
                            className="w-4 h-4 accent-[#4F7942]"
                          />
                          <span>I also need a free Sunday ride</span>
                        </label>
                      </div>
                    </div>
                  )}

                  {activeTab === "prayer" && (
                    <div className="p-3.5 bg-[#f2f7f0] rounded border border-[#4F7942]/20">
                      <label className="inline-flex items-center gap-2.5 cursor-pointer text-[13.5px] font-medium text-[#1d1d23]">
                        <input
                          type="checkbox"
                          checked={formData.isConfidential}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              isConfidential: e.target.checked,
                            })
                          }
                          className="w-4 h-4 accent-[#4F7942]"
                        />
                        <span>
                          Keep this prayer request confidential (Pastoral Team
                          only)
                        </span>
                      </label>
                    </div>
                  )}

                  <div>
                    <label className="block text-[14px] font-semibold text-[#1d1d23] mb-1.5">
                      {activeTab === "prayer"
                        ? "How can we pray for you?"
                        : activeTab === "testimony"
                        ? "Share your testimony / praise report"
                        : activeTab === "counselling"
                        ? "How can our pastoral team support you?"
                        : activeTab === "visit"
                        ? "Any questions or special notes for our Welcome Team? (Optional)"
                        : "Comment or Message"}{" "}
                      {activeTab !== "visit" && (
                        <span className="text-red-600">*</span>
                      )}
                    </label>
                    <textarea
                      rows={5}
                      required={activeTab !== "visit"}
                      placeholder={
                        activeTab === "prayer"
                          ? "Share your prayer request here..."
                          : activeTab === "testimony"
                          ? "Tell us what the Lord has done..."
                          : activeTab === "counselling"
                          ? "Briefly share what you would like to discuss..."
                          : activeTab === "visit"
                          ? "Let us know if you have any questions about Sunday service, children’s ministry, or directions..."
                          : "Your Message"
                      }
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-[3px] bg-[#fafafa] text-[14px] focus:outline-none focus:border-[#4F7942] focus:bg-white"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="bg-[#4F7942] hover:bg-[#3e6133] text-white text-[14px] font-semibold px-7 py-3 rounded-[3px] transition-colors cursor-pointer"
                    >
                      {activeTab === "visit"
                        ? "SUBMIT CONNECT CARD"
                        : activeTab === "prayer"
                        ? "SEND PRAYER REQUEST"
                        : activeTab === "testimony"
                        ? "SHARE TESTIMONY"
                        : activeTab === "counselling"
                        ? "REQUEST PASTORAL CARE"
                        : "SEND MESSAGE"}
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
