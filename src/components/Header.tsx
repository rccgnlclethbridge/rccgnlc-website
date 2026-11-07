"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { churchInfo, navigationMenu } from "@/data/churchData";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Suppress desktop header on standalone mobile link-in-bio page
  if (pathname === "/links") return null;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string, children?: { href: string }[]) => {
    if (href !== "#" && pathname === href) return true;
    if (children) {
      return children.some((child) => pathname === child.href);
    }
    return false;
  };

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.06)] border-b border-gray-100"
          : "bg-white/95 backdrop-blur-md border-b border-gray-100/80"
      }`}
    >
      <div className="max-w-[1220px] mx-auto px-5 sm:px-8 h-[78px] flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <img
            src={churchInfo.logo}
            alt={churchInfo.name}
            className="w-[62px] md:w-[70px] h-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          />
          <div className="hidden xl:flex flex-col">
            <span className="text-[13px] font-bold tracking-wider uppercase text-[#141814] leading-tight">
              RCCG New Life Chapel
            </span>
            <span className="text-[11px] font-medium tracking-widest uppercase text-[#4F7942]">
              Lethbridge
            </span>
          </div>
        </Link>

        {/* Desktop Center Navigation */}
        <nav
          className="hidden lg:flex items-center gap-1"
          aria-label="Primary Navigation"
        >
          {navigationMenu.map((item) => {
            const active = isActive(item.href, item.children);

            if (item.children) {
              return (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    className={`px-3.5 py-2 rounded-full text-[13.5px] font-semibold tracking-wide uppercase flex items-center gap-1 transition-all cursor-pointer ${
                      active
                        ? "text-[#4F7942] bg-[#f2f7f0]"
                        : "text-[#1d1d23] hover:text-[#4F7942] hover:bg-gray-50"
                    }`}
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`w-3.5 h-3.5 fill-current opacity-75 transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  </button>

                  {/* Modern Floating Dropdown */}
                  <div
                    className={`absolute left-0 top-full pt-2 w-60 transition-all duration-200 z-50 ${
                      openDropdown === item.label
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-1.5"
                    }`}
                  >
                    <div className="bg-white rounded-2xl shadow-[0_14px_40px_rgba(0,0,0,0.12)] border border-gray-100 p-2">
                      {item.children.map((sub) => {
                        const subActive = pathname === sub.href;
                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={`block px-3.5 py-2.5 rounded-xl text-[13.5px] font-medium transition-colors ${
                              subActive
                                ? "text-[#4F7942] bg-[#f2f7f0] font-semibold"
                                : "text-[#1d1d23] hover:text-[#4F7942] hover:bg-gray-50"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`px-3.5 py-2 rounded-full text-[13.5px] font-semibold tracking-wide uppercase transition-all ${
                  active
                    ? "text-[#4F7942] bg-[#f2f7f0]"
                    : "text-[#1d1d23] hover:text-[#4F7942] hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Action Area (Transformation Church Style CTA) */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Link
            href="/contact"
            className={`px-3 py-2 text-[13.5px] font-semibold tracking-wide uppercase transition-colors ${
              pathname === "/contact"
                ? "text-[#4F7942]"
                : "text-gray-600 hover:text-[#1d1d23]"
            }`}
          >
            Contact
          </Link>
          <Link
            href="/contact?tab=visit"
            className="inline-flex items-center gap-2 bg-[#4F7942] hover:bg-[#3d6032] text-white text-[13px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-200 shadow-[0_4px_14px_rgba(79,121,66,0.3)] hover:shadow-[0_6px_20px_rgba(79,121,66,0.45)] hover:-translate-y-0.5"
          >
            <span>Plan A Visit</span>
            <span>→</span>
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex lg:hidden items-center gap-2.5">
          <Link
            href="/contact?tab=visit"
            className="inline-flex items-center bg-[#4F7942] text-white text-[11.5px] font-bold uppercase tracking-wider px-3.5 py-2 rounded-full shadow-xs"
          >
            Plan A Visit
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-[#1d1d23] flex items-center justify-center transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-2xl px-5 py-4 space-y-2 max-h-[82vh] overflow-y-auto">
          <ul className="flex flex-col divide-y divide-gray-100">
            <li>
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 text-[14.5px] font-semibold uppercase tracking-wide ${
                  pathname === "/" ? "text-[#4F7942]" : "text-[#1d1d23]"
                }`}
              >
                Home
              </Link>
            </li>
            {navigationMenu.map((item) => {
              if (item.children) {
                const isExpanded = openDropdown === item.label;
                return (
                  <li key={item.label} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown(isExpanded ? null : item.label)
                      }
                      className="flex items-center justify-between py-3 text-left w-full"
                    >
                      <span className="text-[14.5px] font-semibold uppercase tracking-wide text-[#1d1d23]">
                        {item.label}
                      </span>
                      <svg
                        className={`w-4 h-4 fill-current text-gray-500 transition-transform ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M7 10l5 5 5-5z" />
                      </svg>
                    </button>
                    {isExpanded && (
                      <ul className="bg-[#f7faf6] rounded-xl p-2 mb-2 space-y-1">
                        {item.children.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block px-3.5 py-2 rounded-lg text-[13.5px] font-medium ${
                                pathname === sub.href
                                  ? "text-[#4F7942] bg-white font-semibold shadow-2xs"
                                  : "text-gray-700 hover:text-[#4F7942]"
                              }`}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-3 text-[14.5px] font-semibold uppercase tracking-wide ${
                      pathname === item.href
                        ? "text-[#4F7942]"
                        : "text-[#1d1d23]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 text-[14.5px] font-semibold uppercase tracking-wide ${
                  pathname === "/contact" ? "text-[#4F7942]" : "text-[#1d1d23]"
                }`}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <Link
              href="/contact?tab=visit"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-[#4F7942] text-white text-[13.5px] font-bold uppercase tracking-wider py-3 rounded-full shadow-sm"
            >
              Plan Your Visit →
            </Link>
            <Link
              href="/rides"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-[#f2f7f0] text-[#4F7942] border border-[#4F7942]/30 text-[13.5px] font-bold uppercase tracking-wider py-3 rounded-full"
            >
              Book a Free Sunday Ride
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
