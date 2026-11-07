import type { Metadata } from "next";
import { LinksPage } from "@/components/links/LinksPage";
import { churchInfo } from "@/data/churchData";

export const metadata: Metadata = {
  title: "Quick Links | RCCG New Life Chapel Lethbridge",
  description:
    "Official link-in-bio for RCCG New Life Chapel Lethbridge. Plan a visit, book a free Sunday ride, watch sermons, give via Interac e-Transfer, and connect with our ministries.",
  robots: { index: false, follow: true },
  openGraph: {
    title: "RCCG New Life Chapel Lethbridge · Quick Links",
    description:
      "A place where people reconcile with God and enjoy life in abundance. Everything you need in one tap.",
    url: "https://rccgnlc.ca/links",
    siteName: "RCCG New Life Chapel",
    images: [
      {
        url: "/images/hero-home.jpg",
        width: 1200,
        height: 630,
        alt: "RCCG New Life Chapel Lethbridge Quick Links",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RCCG New Life Chapel Lethbridge · Quick Links",
    description: "Official link-in-bio for RCCG New Life Chapel Lethbridge.",
    images: ["/images/hero-home.jpg"],
  },
};

export default function Page() {
  return <LinksPage />;
}
