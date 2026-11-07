"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname === "/links" || !visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-50 w-10 h-10 rounded-full bg-[#4f7942] hover:bg-[#3e6133] text-white shadow-xl flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
    >
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
      </svg>
    </button>
  );
}
