"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { churchInfo, navigationMenu } from "@/data/churchData";
import { useSiteBuild, SiteBuildId } from "@/components/BuildPreviewProvider";

const HEADER_THEMES: Record<
  SiteBuildId,
  {
    wrapper: string;
    wrapperScrolled: string;
    brandTitle: string;
    brandSubtitle: string;
    logoFrame: string;
    navIdle: string;
    navActive: string;
    dropdownCard: string;
    dropdownItemIdle: string;
    dropdownItemActive: string;
    contactLink: string;
    ctaButton: string;
    mobileToggle: string;
    drawerBg: string;
    drawerDivider: string;
    drawerSubBox: string;
    drawerSubItemIdle: string;
  }
> = {
  current: {
    wrapper: "bg-white/95 backdrop-blur-md border-b border-gray-100/80",
    wrapperScrolled:
      "bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.06)] border-b border-gray-100",
    brandTitle: "text-[#141814]",
    brandSubtitle: "text-[#4F7942]",
    logoFrame: "",
    navIdle: "text-[#1d1d23] hover:text-[#4F7942] hover:bg-gray-50",
    navActive: "text-[#4F7942] bg-[#f2f7f0]",
    dropdownCard: "bg-white border-gray-100",
    dropdownItemIdle: "text-[#1d1d23] hover:text-[#4F7942] hover:bg-gray-50",
    dropdownItemActive: "text-[#4F7942] bg-[#f2f7f0] font-semibold",
    contactLink: "text-gray-600 hover:text-[#1d1d23]",
    ctaButton:
      "bg-[#4F7942] hover:bg-[#3d6032] text-white shadow-[0_4px_14px_rgba(79,121,66,0.3)] hover:shadow-[0_6px_20px_rgba(79,121,66,0.45)]",
    mobileToggle: "bg-gray-100 hover:bg-gray-200 text-[#1d1d23]",
    drawerBg: "bg-white border-gray-100 text-[#1d1d23]",
    drawerDivider: "divide-gray-100",
    drawerSubBox: "bg-[#f7faf6]",
    drawerSubItemIdle: "text-gray-700 hover:text-[#4F7942]",
  },
  editorial: {
    wrapper: "bg-[#FAF8F3]/95 backdrop-blur-md border-b border-[#1E3A28]/10",
    wrapperScrolled:
      "bg-[#FAF8F3]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(30,58,40,0.08)] border-b border-[#1E3A28]/15",
    brandTitle: "text-[#1E3A28]",
    brandSubtitle: "text-[#8C6D32]",
    logoFrame: "",
    navIdle: "text-[#1E3A28] hover:text-[#2d543b] hover:bg-[#1E3A28]/5",
    navActive: "text-[#1E3A28] bg-[#1E3A28]/10",
    dropdownCard: "bg-[#FAF8F3] border-[#1E3A28]/15",
    dropdownItemIdle:
      "text-[#1E3A28] hover:text-[#1E3A28] hover:bg-[#1E3A28]/5",
    dropdownItemActive: "text-[#1E3A28] bg-[#1E3A28]/10 font-semibold",
    contactLink: "text-[#4A554C] hover:text-[#1E3A28]",
    ctaButton:
      "bg-[#1E3A28] hover:bg-[#2d543b] text-[#FAF8F3] shadow-[0_4px_14px_rgba(30,58,40,0.28)]",
    mobileToggle: "bg-[#1E3A28]/10 hover:bg-[#1E3A28]/15 text-[#1E3A28]",
    drawerBg: "bg-[#FAF8F3] border-[#1E3A28]/10 text-[#1E3A28]",
    drawerDivider: "divide-[#1E3A28]/10",
    drawerSubBox: "bg-white",
    drawerSubItemIdle: "text-[#4A554C] hover:text-[#1E3A28]",
  },
  cinematic: {
    wrapper: "bg-[#0B0E0C]/92 backdrop-blur-md border-b border-white/10",
    wrapperScrolled:
      "bg-[#0B0E0C]/96 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.5)] border-b border-white/15",
    brandTitle: "text-white",
    brandSubtitle: "text-[#7CE36B]",
    logoFrame: "bg-white rounded-lg p-1",
    navIdle: "text-white/85 hover:text-[#7CE36B] hover:bg-white/10",
    navActive: "text-[#7CE36B] bg-white/10",
    dropdownCard: "bg-[#141916] border-white/15",
    dropdownItemIdle: "text-white/85 hover:text-[#7CE36B] hover:bg-white/10",
    dropdownItemActive: "text-[#7CE36B] bg-white/10 font-semibold",
    contactLink: "text-white/75 hover:text-[#7CE36B]",
    ctaButton:
      "bg-[#7CE36B] hover:bg-[#66d155] text-[#0B0E0C] shadow-[0_4px_16px_rgba(124,227,107,0.3)]",
    mobileToggle: "bg-white/10 hover:bg-white/20 text-white",
    drawerBg: "bg-[#0B0E0C] border-white/10 text-white",
    drawerDivider: "divide-white/10",
    drawerSubBox: "bg-white/5",
    drawerSubItemIdle: "text-white/75 hover:text-[#7CE36B]",
  },
  bento: {
    wrapper: "bg-white/95 backdrop-blur-md border-b border-gray-200/80",
    wrapperScrolled:
      "bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.06)] border-b border-gray-200",
    brandTitle: "text-[#141814]",
    brandSubtitle: "text-[#3B6331]",
    logoFrame: "",
    navIdle: "text-[#1d1d23] hover:text-[#3B6331] hover:bg-[#F2F7F0]",
    navActive: "text-[#3B6331] bg-[#F2F7F0]",
    dropdownCard: "bg-white border-gray-200/80",
    dropdownItemIdle: "text-[#1d1d23] hover:text-[#3B6331] hover:bg-[#F2F7F0]",
    dropdownItemActive: "text-[#3B6331] bg-[#F2F7F0] font-semibold",
    contactLink: "text-gray-600 hover:text-[#141814]",
    ctaButton:
      "bg-[#3B6331] hover:bg-[#2d4d25] text-white shadow-[0_4px_14px_rgba(59,99,49,0.28)]",
    mobileToggle: "bg-gray-100 hover:bg-gray-200 text-[#1d1d23]",
    drawerBg: "bg-white border-gray-200 text-[#1d1d23]",
    drawerDivider: "divide-gray-100",
    drawerSubBox: "bg-[#F2F7F0]",
    drawerSubItemIdle: "text-gray-700 hover:text-[#3B6331]",
  },
};

export default function Header() {
  const pathname = usePathname();
  const { build } = useSiteBuild();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Suppress desktop header on standalone mobile link-in-bio page
  if (pathname === "/links") return null;

  const theme = HEADER_THEMES[build];

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
        scrolled ? theme.wrapperScrolled : theme.wrapper
      }`}
    >
      <div className="max-w-[1220px] mx-auto px-5 sm:px-8 h-[78px] flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <img
            src={churchInfo.logo}
            alt={churchInfo.name}
            className={`w-[58px] md:w-[66px] h-auto object-contain transition-transform duration-200 group-hover:scale-[1.02] ${theme.logoFrame}`}
          />
          <div className="hidden xl:flex flex-col">
            <span
              className={`text-[13px] font-bold tracking-wider uppercase leading-tight ${theme.brandTitle}`}
            >
              RCCG New Life Chapel
            </span>
            <span
              className={`text-[11px] font-medium tracking-widest uppercase ${theme.brandSubtitle}`}
            >
              Lethbridge
            </span>
          </div>
        </Link>

        {/* Desktop Center Navigation */}
        <nav
          className="hidden lg:flex items-center gap-0.5 xl:gap-1"
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
                    className={`whitespace-nowrap px-2.5 xl:px-3.5 py-2 rounded-full text-[12.5px] xl:text-[13.5px] font-semibold tracking-wide uppercase flex items-center gap-1 transition-all cursor-pointer ${
                      active ? theme.navActive : theme.navIdle
                    }`}
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`w-3.5 h-3.5 fill-current opacity-75 transition-transform duration-200 shrink-0 ${
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
                    <div
                      className={`rounded-2xl shadow-[0_14px_40px_rgba(0,0,0,0.16)] border p-2 ${theme.dropdownCard}`}
                    >
                      {item.children.map((sub) => {
                        const subActive = pathname === sub.href;
                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={`block px-3.5 py-2.5 rounded-xl text-[13.5px] font-medium transition-colors ${
                              subActive
                                ? theme.dropdownItemActive
                                : theme.dropdownItemIdle
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
                className={`whitespace-nowrap px-2.5 xl:px-3.5 py-2 rounded-full text-[12.5px] xl:text-[13.5px] font-semibold tracking-wide uppercase transition-all ${
                  active ? theme.navActive : theme.navIdle
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Action Area */}
        <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 shrink-0">
          <Link
            href="/contact"
            className={`whitespace-nowrap px-2.5 xl:px-3 py-2 text-[12.5px] xl:text-[13.5px] font-semibold tracking-wide uppercase transition-colors ${
              pathname === "/contact" ? theme.navActive : theme.contactLink
            }`}
          >
            Contact
          </Link>
          <Link
            href="/contact?tab=visit"
            className={`whitespace-nowrap inline-flex items-center gap-2 text-[12.5px] xl:text-[13px] font-bold uppercase tracking-wider px-4 xl:px-5 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 ${theme.ctaButton}`}
          >
            <span>Plan A Visit</span>
            <span>→</span>
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex lg:hidden items-center gap-2.5">
          <Link
            href="/contact?tab=visit"
            className={`whitespace-nowrap inline-flex items-center text-[11.5px] font-bold uppercase tracking-wider px-3.5 py-2 rounded-full ${theme.ctaButton}`}
          >
            Plan A Visit
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors focus:outline-none ${theme.mobileToggle}`}
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
        <div
          className={`lg:hidden border-t shadow-2xl px-5 py-4 space-y-2 max-h-[82vh] overflow-y-auto ${theme.drawerBg}`}
        >
          <ul className={`flex flex-col divide-y ${theme.drawerDivider}`}>
            <li>
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 text-[14.5px] font-semibold uppercase tracking-wide ${
                  pathname === "/" ? "text-[#4F7942]" : ""
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
                      <span className="text-[14.5px] font-semibold uppercase tracking-wide">
                        {item.label}
                      </span>
                      <svg
                        className={`w-4 h-4 fill-current opacity-65 transition-transform ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M7 10l5 5 5-5z" />
                      </svg>
                    </button>
                    {isExpanded && (
                      <ul
                        className={`rounded-xl p-2 mb-2 space-y-1 ${theme.drawerSubBox}`}
                      >
                        {item.children.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block px-3.5 py-2 rounded-lg text-[13.5px] font-medium ${
                                pathname === sub.href
                                  ? theme.dropdownItemActive
                                  : theme.drawerSubItemIdle
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
                      pathname === item.href ? "text-[#4F7942]" : ""
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
                  pathname === "/contact" ? "text-[#4F7942]" : ""
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
              className={`w-full text-center text-[13.5px] font-bold uppercase tracking-wider py-3 rounded-full ${theme.ctaButton}`}
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
