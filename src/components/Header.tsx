"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { churchInfo, navigationMenu } from "@/data/churchData";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (href: string, children?: { href: string }[]) => {
    if (href !== "#" && pathname === href) return true;
    if (children) {
      return children.some((child) => pathname === child.href);
    }
    return false;
  };

  return (
    <header className="w-full bg-[#fbfbfb] border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1140px] mx-auto px-5 py-2 flex items-center justify-between min-h-[75px]">
        {/* Site Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <img
            src={churchInfo.logo}
            alt={churchInfo.name}
            className="w-[69px] md:w-[81px] h-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center space-x-1"
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
                    className={`px-3.5 py-2 text-[14px] font-normal tracking-wide flex items-center gap-1.5 transition-colors cursor-pointer ${
                      active
                        ? "text-[#4f7942] font-medium"
                        : "text-[#1d1d23] hover:text-[#4f7942]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <svg
                      className="w-3.5 h-3.5 fill-current opacity-80"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  </button>

                  {/* Submenu Dropdown */}
                  <div
                    className={`absolute left-0 top-full w-56 bg-white shadow-lg border-t-2 border-[#4f7942] py-1 transition-all duration-150 z-50 ${
                      openDropdown === item.label
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-1"
                    }`}
                  >
                    {item.children.map((sub) => {
                      const subActive = pathname === sub.href;
                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={`block px-4 py-2.5 text-[13.5px] border-b border-gray-50 last:border-none transition-colors ${
                            subActive
                              ? "text-[#4f7942] bg-[#f2f5f7]/60 font-medium"
                              : "text-[#1d1d23] hover:text-[#4f7942] hover:bg-gray-50"
                          }`}
                        >
                          {sub.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`px-3.5 py-2 text-[14px] font-normal tracking-wide transition-colors ${
                  active
                    ? "text-[#4f7942] font-medium"
                    : "text-[#1d1d23] hover:text-[#4f7942]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button (Astra green square style) */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
          className="lg:hidden bg-[#4f7942] text-white p-2.5 rounded-[2px] flex items-center justify-center focus:outline-none"
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

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col divide-y divide-gray-100">
            {navigationMenu.map((item) => {
              if (item.children) {
                const isExpanded = openDropdown === item.label;
                return (
                  <li key={item.label} className="flex flex-col">
                    <div className="flex items-center justify-between px-5 py-3">
                      <span className="text-[14px] font-medium text-[#1d1d23]">
                        {item.label}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setOpenDropdown(isExpanded ? null : item.label)
                        }
                        className="p-1 text-[#1d1d23] hover:text-[#4f7942]"
                        aria-label={`Toggle ${item.label} submenu`}
                      >
                        <svg
                          className={`w-4 h-4 fill-current transition-transform ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                          viewBox="0 0 24 24"
                        >
                          <path d="M7 10l5 5 5-5z" />
                        </svg>
                      </button>
                    </div>
                    {isExpanded && (
                      <ul className="bg-[#f9fafb] divide-y divide-gray-100">
                        {item.children.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block pl-9 pr-5 py-2.5 text-[13.5px] ${
                                pathname === sub.href
                                  ? "text-[#4f7942] font-medium"
                                  : "text-[#1d1d23] hover:text-[#4f7942]"
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
                    className={`block px-5 py-3 text-[14px] ${
                      pathname === item.href
                        ? "text-[#4f7942] font-medium"
                        : "text-[#1d1d23] hover:text-[#4f7942]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
