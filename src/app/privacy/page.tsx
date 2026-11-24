import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { churchInfo } from "@/data/churchData";

export const metadata: Metadata = {
  title: `PRIVACY POLICY – ${churchInfo.name}`,
  description:
    "Privacy Policy for The Redeemed Christian Church of God-New Life Chapel, Lethbridge (CRA #768310716RR0001) in alignment with Alberta PIPA and Canadian PIPEDA standards.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full">
      <PageHero
        title="Privacy Policy"
        backgroundImage="/images/hero-about.jpg"
        overlayOpacity={0.82}
      />

      <section className="w-full py-14 md:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left Column: Green Divider Line & Meta */}
            <div className="md:col-span-3 pt-2 space-y-3">
              <div className="w-20 h-[3px] bg-[#4F7942]" />
              <p className="text-[12px] font-semibold uppercase tracking-wider text-gray-500">
                Alberta PIPA &amp; PIPEDA Aligned
              </p>
            </div>

            {/* Main Content Column */}
            <div className="md:col-span-9 space-y-6 text-[15px] text-[#1d1d23] leading-[1.75]">
              <p>
                <strong className="font-semibold">
                  {churchInfo.charity.legalName}
                </strong>{" "}
                (&ldquo;RCCG New Life Chapel Lethbridge&rdquo;) respects the
                privacy and dignity of our congregation, guests, donors, and
                community members. Personal information collected through our
                website and ministry services is handled in alignment with the{" "}
                <strong className="font-semibold">
                  Alberta Personal Information Protection Act (PIPA)
                </strong>{" "}
                and Canadian{" "}
                <strong className="font-semibold">PIPEDA</strong> standards.
              </p>

              <div className="space-y-2">
                <h2 className="text-[18px] font-bold text-[#4F7942]">
                  1. Information We Collect
                </h2>
                <p>
                  We only collect information you voluntarily provide when
                  interacting with church services, including:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-[14.5px] text-gray-700">
                  <li>
                    <strong className="text-[#1d1d23]">Visit &amp; Contact Forms:</strong>{" "}
                    Name, email, phone number, prayer requests, and inquiry details.
                  </li>
                  <li>
                    <strong className="text-[#1d1d23]">Sunday Rides:</strong>{" "}
                    Rider name, phone number, pickup zone, and address solely to
                    coordinate complimentary Sunday transportation.
                  </li>
                  <li>
                    <strong className="text-[#1d1d23]">
                      Food Pantry &amp; Pastoral Counselling:
                    </strong>{" "}
                    Contact details, household size, and dietary/care notes used
                    by our Care Team to serve you safely and appropriately.
                  </li>
                  <li>
                    <strong className="text-[#1d1d23]">
                      Charitable Tax Receipts:
                    </strong>{" "}
                    Legal full name, email, and residential mailing address
                    required to issue official Canadian donation receipts.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="text-[18px] font-bold text-[#4F7942]">
                  2. How We Use Your Information
                </h2>
                <p>
                  Personal information is used strictly to fulfill your request,
                  coordinate ministry and community relief, issue annual CRA
                  donation receipts, or respond to volunteer and partnership
                  inquiries.{" "}
                  <strong className="font-semibold">
                    We never sell, rent, or trade your personal information
                  </strong>{" "}
                  with third parties for marketing or commercial purposes.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-[18px] font-bold text-[#4F7942]">
                  3. Confidentiality &amp; Retention
                </h2>
                <p>
                  Submissions related to the Food Pantry, Christian counselling,
                  and confidential prayer requests are restricted to authorized
                  Care and Pastoral Team members. Donor address and giving
                  records are retained as required by Canada Revenue Agency
                  (CRA) regulations for official receipting and compliance.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-[18px] font-bold text-[#4F7942]">
                  4. Registered Charity Identification
                </h2>
                <div className="bg-[#f2f7f0] border border-[#4F7942]/20 rounded-md p-4 text-[14px] space-y-1">
                  <p>
                    <strong className="font-semibold">Legal Name:</strong>{" "}
                    {churchInfo.charity.legalName}
                  </p>
                  <p>
                    <strong className="font-semibold">
                      CRA Charity Registration #:
                    </strong>{" "}
                    <a
                      href={churchInfo.charity.charityDataUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4F7942] font-semibold underline"
                    >
                      {churchInfo.charity.registrationNumber}
                    </a>
                  </p>
                  <p>
                    <strong className="font-semibold">Mailing Address:</strong>{" "}
                    {churchInfo.address.mailing}
                  </p>
                  <p>
                    <strong className="font-semibold">Sanctuary Location:</strong>{" "}
                    {churchInfo.address.full}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-[18px] font-bold text-[#4F7942]">
                  5. Privacy Inquiries &amp; Updates
                </h2>
                <p>
                  To update your contact or tax-receipt details, request removal
                  of non-statutory contact records, or ask a question about how
                  your data is protected, please contact us at{" "}
                  <a
                    href={`mailto:${churchInfo.contact.email}`}
                    className="text-[#4F7942] font-semibold underline"
                  >
                    {churchInfo.contact.email}
                  </a>{" "}
                  or visit our{" "}
                  <Link
                    href="/contact"
                    className="text-[#4F7942] font-semibold underline"
                  >
                    Contact page
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
