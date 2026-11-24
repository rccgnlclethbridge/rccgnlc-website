"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export type SiteBuildId =
  | "current"
  | "transformation"
  | "elevation"
  | "modern";

interface BuildContextValue {
  build: SiteBuildId;
  setBuild: (next: SiteBuildId) => void;
}

const BuildContext = createContext<BuildContextValue>({
  build: "current",
  setBuild: () => {},
});

const STORAGE_KEY = "nlc-site-build";

const PARAM_MAP: Record<string, SiteBuildId> = {
  "0": "current",
  current: "current",
  "1": "transformation",
  transformation: "transformation",
  tc: "transformation",
  "2": "elevation",
  elevation: "elevation",
  elev: "elevation",
  "3": "modern",
  modern: "modern",
};

const BUILD_TO_PARAM: Record<SiteBuildId, string | null> = {
  current: null,
  transformation: "1",
  elevation: "2",
  modern: "3",
};

const BUILD_OPTIONS: {
  id: SiteBuildId;
  desktopLabel: string;
  mobileLabel: string;
}[] = [
  { id: "current", desktopLabel: "Current", mobileLabel: "Curr" },
  {
    id: "transformation",
    desktopLabel: "1 · Transformation",
    mobileLabel: "1 · TC",
  },
  { id: "elevation", desktopLabel: "2 · Elevation", mobileLabel: "2 · Elev" },
  { id: "modern", desktopLabel: "3 · Modern", mobileLabel: "3 · Mod" },
];

export function useSiteBuild() {
  return useContext(BuildContext);
}

/**
 * Provides global preview switching across the 4 site builds ("current" plus Transformation,
 * Elevation, and Modern styles) via ?build=1|2|3, localStorage, and a compact bottom toggle.
 */
export function BuildPreviewProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [build, setBuildState] = useState<SiteBuildId>("current");
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const rawParam = params.get("build")?.toLowerCase();
      let initial: SiteBuildId = "current";

      if (rawParam && PARAM_MAP[rawParam]) {
        initial = PARAM_MAP[rawParam];
        window.localStorage.setItem(STORAGE_KEY, initial);
      } else {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored && PARAM_MAP[stored]) {
          initial = PARAM_MAP[stored];
        } else if (stored) {
          // Reset legacy/stale build identifiers cleanly to default
          window.localStorage.setItem(STORAGE_KEY, "current");
        }
      }

      setBuildState(initial);
      document.documentElement.dataset.build = initial;
    } catch {
      // Keep deterministic default if storage/URL is unavailable
    }
  }, []);

  const setBuild = (next: SiteBuildId) => {
    setBuildState(next);
    try {
      document.documentElement.dataset.build = next;
      window.localStorage.setItem(STORAGE_KEY, next);
      const url = new URL(window.location.href);
      const paramValue = BUILD_TO_PARAM[next];
      if (paramValue) {
        url.searchParams.set("build", paramValue);
      } else {
        url.searchParams.delete("build");
      }
      window.history.replaceState(
        null,
        "",
        url.pathname + url.search + url.hash
      );
    } catch {
      // Ignore history/storage restrictions
    }
  };

  const hideToggle = pathname === "/links";

  return (
    <BuildContext.Provider value={{ build, setBuild }}>
      {children}

      {!hideToggle &&
        (collapsed ? (
          <button
            type="button"
            onClick={() => setCollapsed(false)}
            aria-label="Open website design switcher"
            className="fixed bottom-4 left-4 z-40 rounded-full bg-[#111511]/92 hover:bg-[#111511] backdrop-blur-md border border-white/15 shadow-2xl px-3.5 py-2 text-[11px] font-semibold uppercase tracking-wider text-white flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-[#8ce078]" />
            <span>Designs</span>
          </button>
        ) : (
          <div
            role="region"
            aria-label="Website design preview switcher"
            className="fixed bottom-4 left-4 sm:left-1/2 sm:-translate-x-1/2 z-40 rounded-full bg-[#111511]/92 backdrop-blur-md border border-white/15 shadow-2xl px-2 py-1.5 flex items-center gap-1 text-[11px] font-semibold text-white max-w-[calc(100vw-5.5rem)] sm:max-w-none overflow-x-auto"
          >
            <span className="hidden md:inline text-white/55 pl-2 pr-1 uppercase tracking-wider text-[10px] shrink-0">
              Design
            </span>

            {BUILD_OPTIONS.map((opt) => {
              const active = build === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setBuild(opt.id)}
                  aria-pressed={active}
                  className={`px-2.5 sm:px-3 py-1.5 rounded-full whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                    active
                      ? "bg-[#8ce078] text-[#111511] font-bold shadow-xs"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="sm:hidden">{opt.mobileLabel}</span>
                  <span className="hidden sm:inline">{opt.desktopLabel}</span>
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => setCollapsed(true)}
              aria-label="Minimize design switcher"
              title="Minimize"
              className="ml-0.5 w-6 h-6 rounded-full text-white/60 hover:text-white hover:bg-white/10 flex items-center justify-center text-sm leading-none transition-colors cursor-pointer shrink-0"
            >
              ×
            </button>
          </div>
        ))}
    </BuildContext.Provider>
  );
}
