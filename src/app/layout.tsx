import type { Metadata } from "next";
import { Poppins, Montserrat, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { churchInfo } from "@/data/churchData";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rccgnlc.ca"),
  title: {
    default: `${churchInfo.name} – ${churchInfo.tagline}`,
    template: `%s | ${churchInfo.shortName} Lethbridge`,
  },
  description:
    "Welcome to RCCG New Life Chapel Lethbridge (234 13 Street North, Lethbridge, AB) — a place where people reconcile with God and enjoy life in abundance (John 10:10). Join us Sundays at 9:30 AM (Sunday School) and Wednesdays at 7:00 PM.",
  keywords: [
    "RCCG New Life Chapel Lethbridge",
    "Church in Lethbridge",
    "Redeemed Christian Church of God Lethbridge",
    "Christian Church Lethbridge Alberta",
    "The Hilltop Church Lethbridge",
    "Lethbridge Sunday Worship",
    "University of Lethbridge Christian Fellowship",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "64x64", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://rccgnlc.ca",
    siteName: churchInfo.name,
    title: `${churchInfo.name} – ${churchInfo.tagline}`,
    description:
      "A place where people reconcile with God and enjoy life in abundance (John 10:10). Join us every Sunday at 9:30 AM at 234 13 Street North, Lethbridge, Alberta.",
    images: [
      {
        url: "/images/hero-home.jpg",
        width: 1200,
        height: 630,
        alt: churchInfo.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${churchInfo.name} – ${churchInfo.tagline}`,
    description:
      "Join RCCG New Life Chapel Lethbridge every Sunday at 9:30 AM at 234 13 Street North, Lethbridge, AB.",
    images: ["/images/hero-home.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const churchJsonLd = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: churchInfo.name,
    alternateName: churchInfo.shortName,
    description:
      "Welcome to RCCG New Life Chapel Lethbridge where people reconcile with God and enjoy life in abundance – John 10:10.",
    url: "https://rccgnlc.ca",
    logo: "https://rccgnlc.ca/images/logo.png",
    image: "https://rccgnlc.ca/images/hero-home.jpg",
    email: churchInfo.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "234 13 Street North",
      addressLocality: "Lethbridge",
      addressRegion: "AB",
      postalCode: "T1H 2R7",
      addressCountry: "CA",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "09:30",
        closes: "13:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Wednesday",
        opens: "19:00",
        closes: "20:30",
      },
    ],
    sameAs: [
      churchInfo.socials.facebook,
      churchInfo.socials.instagram,
      churchInfo.socials.youtube,
      churchInfo.contact.linktree,
      churchInfo.hilltopChurch.url,
    ],
  };

  return (
    <html
      lang="en-US"
      className={`${poppins.variable} ${montserrat.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#1d1d23] font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(churchJsonLd) }}
        />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
