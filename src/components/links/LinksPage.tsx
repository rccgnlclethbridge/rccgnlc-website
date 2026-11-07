"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { churchInfo } from "@/data/churchData";

interface LinkItem {
  label: string;
  sublabel?: string;
  href: string;
  badge?: string;
  external?: boolean;
  highlight?: boolean;
}

interface LinkGroup {
  heading: string;
  items: LinkItem[];
}

export function LinksPage() {
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const copyEtransfer = async () => {
    const email = churchInfo.contact.givingEmail || "donation@rccgnlclethbridge.ca";
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        showToast("e-Transfer email copied to clipboard!");
        setTimeout(() => setCopied(false), 2200);
        return;
      }
    } catch {
      // Fallback
    }
    showToast(`e-Transfer: ${email}`);
  };

  const sharePortal = async () => {
    const shareUrl = "https://rccgnlc.ca/links";
    const shareData = {
      title: "RCCG New Life Chapel Lethbridge · Quick Links",
      text: "Plan a visit, book a free Sunday ride, watch sermons, give, and connect with RCCG New Life Chapel in Lethbridge.",
      url: shareUrl,
    };

    if (navigator?.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        if ((err as Error)?.name === "AbortError") return;
      }
    }

    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
        showToast("Link copied to clipboard!");
        return;
      }
    } catch {
      // ignore
    }
    showToast(shareUrl);
  };

  const groups: LinkGroup[] = [
    {
      heading: "Worship & Connect",
      items: [
        {
          label: "Plan Your First Visit",
          sublabel: "Let our Welcome Team know you're coming",
          href: "/contact?tab=visit",
          badge: "Welcome",
          highlight: true,
        },
        {
          label: "Book a Free Sunday Ride",
          sublabel: "Complimentary pickup across Lethbridge",
          href: "/rides",
          badge: "9:30 AM",
        },
        {
          label: "Watch Latest Sermons & Livestream",
          sublabel: "Join us in the Word and spirit-filled praise",
          href: "/sermons",
        },
      ],
    },
    {
      heading: "Give Online",
      items: [
        {
          label: "Ways to Give Overview",
          sublabel: "Cheque, online or in-person giving info",
          href: "/giving",
        },
      ],
    },
    {
      heading: "Prayer & Care",
      items: [
        {
          label: "Confidential Prayer Request",
          sublabel: "Our pastoral prayer team will intercede with you",
          href: "/contact?tab=prayer",
        },
        {
          label: "Food Bank & Community Outreach",
          sublabel: "Demonstrating Christ's love across Southern Alberta",
          href: "/community-outreach",
        },
        {
          label: "Professional Christian Counselling",
          sublabel: "Compassionate, confidential faith-based support",
          href: "/contact?tab=counselling",
        },
      ],
    },
    {
      heading: "Youth & Expressions",
      items: [
        {
          label: "The Hilltop Church (Youth & Students)",
          sublabel: "Sundays at 12:00 PM · thehilltopch.ca",
          href: churchInfo.hilltopChurch.url,
          external: true,
          badge: "Sundays 12 PM",
        },
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#111511] text-white flex flex-col items-center justify-between selection:bg-[#4F7942] selection:text-white">
      {/* Background sanctuary image with dark green & obsidian overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/images/hero-home.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25 filter blur-[3px] scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 12%, rgba(79, 121, 66, 0.35) 0%, rgba(17, 21, 17, 0.85) 45%, rgba(17, 21, 17, 0.98) 100%)",
          }}
        />
      </div>

      {/* Main Link-in-Bio Container */}
      <main className="relative z-10 w-full max-w-md mx-auto px-5 pt-6 pb-14 flex flex-col items-center">
        {/* Top Action Bar (Share Button) */}
        <div className="w-full flex items-center justify-between mb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md"
          >
            <span>←</span>
            <span>Church Home</span>
          </Link>

          <button
            type="button"
            onClick={sharePortal}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-[#4F7942] px-3.5 py-1.5 rounded-full border border-white/15 transition-all shadow-xs backdrop-blur-md cursor-pointer"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
            <span>Share</span>
          </button>
        </div>

        {/* Identity Header */}
        <header className="flex flex-col items-center text-center mt-2 mb-6">
          <div className="w-24 h-24 rounded-full bg-white p-3 ring-4 ring-[#4F7942]/60 shadow-[0_0_36px_rgba(79,121,66,0.4)] flex items-center justify-center">
            <img
              src={churchInfo.logo}
              alt={churchInfo.name}
              className="w-full h-full object-contain"
            />
          </div>

          <h1 className="mt-4 font-montserrat text-[22px] font-extrabold uppercase tracking-tight text-white flex items-center justify-center gap-1.5">
            <span>RCCG New Life Chapel</span>
            <span
              className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#8ce078] text-[#111511] text-[10px] font-bold"
              title="Verified Official Church Portal"
            >
              ✓
            </span>
          </h1>

          <p className="mt-1 text-[13.5px] font-medium text-[#8ce078] max-w-[320px]">
            Reconciliation &amp; Abundant Life (John 10:10)
          </p>

          <p className="mt-1 text-[12px] text-white/70">
            234 13 Street North, Lethbridge · Sundays at 9:30 AM
          </p>

          {/* Social / Quick Contact Pills */}
          <nav
            aria-label="Social and Location Links"
            className="mt-4 flex items-center gap-2.5"
          >
            <a
              href={churchInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#4F7942] border border-white/10 flex items-center justify-center text-white transition-all shadow-xs"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z" />
              </svg>
            </a>

            <a
              href={churchInfo.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#4F7942] border border-white/10 flex items-center justify-center text-white transition-all shadow-xs"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 320 512">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </a>

            <a
              href={churchInfo.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#4F7942] border border-white/10 flex items-center justify-center text-white transition-all shadow-xs"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 576 512">
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
              </svg>
            </a>

            <a
              href={churchInfo.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Maps Directions"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#4F7942] border border-white/10 flex items-center justify-center text-white transition-all shadow-xs"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </a>

            <Link
              href="/"
              aria-label="Full Church Website"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#4F7942] border border-white/10 flex items-center justify-center text-white transition-all shadow-xs"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </Link>
          </nav>
        </header>

        {/* Link Groups */}
        <div className="w-full space-y-6 mt-2">
          {groups.map((group) => (
            <section key={group.heading} className="space-y-2.5">
              <h2 className="text-center font-montserrat text-[11px] font-bold uppercase tracking-[0.22em] text-[#8ce078]">
                {group.heading}
              </h2>

              <div className="space-y-2.5">
                {group.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className={`group relative flex items-center justify-between p-4 rounded-2xl border transition-all duration-200 backdrop-blur-md shadow-sm active:scale-[0.99] ${
                      item.highlight
                        ? "bg-[#4F7942] hover:bg-[#426637] border-[#8ce078]/40 text-white shadow-[0_4px_20px_rgba(79,121,66,0.3)]"
                        : "bg-white/[0.08] hover:bg-white/[0.14] border-white/15 hover:border-[#8ce078]/50 text-white"
                    }`}
                  >
                    <div className="text-left space-y-0.5 pr-2">
                      <div className="flex items-center gap-2">
                        <span className="font-montserrat text-[14px] font-bold tracking-tight">
                          {item.label}
                        </span>
                        {item.badge && (
                          <span
                            className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                              item.highlight
                                ? "bg-white text-[#111511]"
                                : "bg-[#8ce078]/25 text-[#8ce078] border border-[#8ce078]/30"
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>
                      {item.sublabel && (
                        <p
                          className={`text-[12px] leading-snug ${
                            item.highlight ? "text-white/85" : "text-white/65"
                          }`}
                        >
                          {item.sublabel}
                        </p>
                      )}
                    </div>

                    <span
                      className={`text-lg transition-transform duration-200 group-hover:translate-x-1 shrink-0 ${
                        item.highlight ? "text-white" : "text-[#8ce078]"
                      }`}
                    >
                      {item.external ? "↗" : "→"}
                    </span>
                  </Link>
                ))}

                {/* 1-Tap Interac e-Transfer Action inside Give Online group */}
                {group.heading === "Give Online" && (
                  <button
                    type="button"
                    onClick={copyEtransfer}
                    className="w-full group relative flex items-center justify-between p-4 rounded-2xl border border-white/15 bg-white/[0.08] hover:bg-white/[0.14] hover:border-[#8ce078]/50 text-white transition-all duration-200 backdrop-blur-md shadow-sm active:scale-[0.99] cursor-pointer"
                  >
                    <div className="text-left space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-montserrat text-[14px] font-bold tracking-tight">
                          Interac e-Transfer (1-Tap Copy)
                        </span>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#8ce078]/25 text-[#8ce078] border border-[#8ce078]/30">
                          Instant
                        </span>
                      </div>
                      <p className="text-[12px] text-white/65 font-mono">
                        {churchInfo.contact.givingEmail || "donation@rccgnlclethbridge.ca"}
                      </p>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[12px] font-bold text-[#8ce078] shrink-0 bg-[#8ce078]/15 px-3 py-1.5 rounded-full border border-[#8ce078]/30">
                      {copied ? "Copied! ✓" : "Copy"}
                    </span>
                  </button>
                )}
              </div>
            </section>
          ))}
        </div>

        {/* Service Schedule Summary Card */}
        <div className="w-full mt-8 p-4 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-md text-center space-y-2 text-[12.5px]">
          <p className="font-montserrat text-[11px] font-bold uppercase tracking-[0.2em] text-[#8ce078]">
            Weekly Service Times
          </p>
          <div className="text-white/80 space-y-1">
            <p>
              <strong className="text-white font-semibold">Sunday Worship:</strong> 9:30 AM (Sunday School &amp; Service)
            </p>
            <p>
              <strong className="text-white font-semibold">Mid-Week Study:</strong> Wednesdays at 7:00 PM
            </p>
            <p>
              <strong className="text-white font-semibold">Youth &amp; Students:</strong> Sundays at 12:00 PM
            </p>
          </div>
        </div>

        {/* Minimal Footer */}
        <footer className="mt-8 text-center text-xs text-white/45 space-y-1">
          <p>© 2026 RCCG New Life Chapel Lethbridge.</p>
          <p>234 13 Street North, Lethbridge, Alberta T1H 2R7</p>
        </footer>
      </main>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#111511] text-white border border-[#8ce078] px-4 py-2.5 rounded-full shadow-2xl text-xs font-semibold animate-fade-in flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#8ce078]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
