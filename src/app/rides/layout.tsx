import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sunday Rides | RCCG New Life Chapel Lethbridge",
  description:
    "Book a complimentary Sunday ride to RCCG New Life Chapel (9:30 AM Service) in Lethbridge. Safe door-to-door transportation across the city.",
  openGraph: {
    title: "Sunday Rides | RCCG New Life Chapel Lethbridge",
    description:
      "Book a complimentary Sunday ride to RCCG New Life Chapel (9:30 AM Service) in Lethbridge.",
    url: "https://rccgnlc.ca/rides",
    siteName: "RCCG New Life Chapel",
    images: [
      {
        url: "/images/hero-home.jpg",
        width: 1200,
        height: 630,
        alt: "RCCG New Life Chapel Sunday Worship & Rides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunday Rides | RCCG New Life Chapel Lethbridge",
    description:
      "Book a complimentary Sunday ride to RCCG New Life Chapel in Lethbridge.",
    images: ["/images/hero-home.jpg"],
  },
};

export default function RidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
