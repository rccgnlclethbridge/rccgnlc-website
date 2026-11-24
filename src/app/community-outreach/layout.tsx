import type { Metadata } from "next";
import { churchInfo } from "@/data/churchData";

export const metadata: Metadata = {
  title: `Food Pantry & Community Outreach – ${churchInfo.name}`,
  description:
    "Weekly Food Pantry, Christian counselling, student care packages, household support, and community meals in Lethbridge — open to all, no church membership required. Operated by RCCG New Life Chapel Lethbridge (CRA #768310716RR0001).",
  openGraph: {
    title: "Food Pantry & Community Outreach | RCCG New Life Chapel Lethbridge",
    description:
      "Weekly grocery support, student care, Christian counselling, and local outreach in Lethbridge, AB.",
    url: "https://rccgnlc.ca/community-outreach",
    siteName: churchInfo.shortName,
    images: [
      {
        url: "/images/hero-outreach.jpg",
        width: 1200,
        height: 630,
        alt: "RCCG New Life Chapel Food Pantry and Community Outreach",
      },
    ],
  },
};

export default function CommunityOutreachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
