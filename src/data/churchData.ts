/**
 * ============================================================================
 * RCCG NEW LIFE CHAPEL LETHBRIDGE - CENTRAL CHURCH DATA CONFIGURATION
 * ============================================================================
 * Edit this file to easily update service times, addresses, contact details,
 * sermons, events, Instagram reels, giving information, or page text!
 */

export const churchInfo = {
  name: "RCCG NEW LIFE CHAPEL LETHBRIDGE",
  shortName: "RCCG New Life Chapel",
  tagline: "Come and experience a new life!",
  logo: "/images/logo.png",
  logoSmall: "/images/logo-small.png",
  address: {
    street: "234 13 Street North,",
    cityStateZip: "Lethbridge, Alberta T1H 2R7 Canada.",
    full: "234 13 Street North, Lethbridge, Alberta T1H 2R7 Canada",
    mailing: "P.O. Box 1632, Lethbridge AB T1J 4K3",
    googleMapsEmbedUrl:
      "https://maps.google.com/maps?q=234%2013%20St%20N%20&t=m&z=10&output=embed&iwloc=near",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=234+13+Street+North+Lethbridge+AB+T1H+2R7",
  },
  contact: {
    email: "contact@rccgnlclethbridge.ca",
    givingEmail: "donation@rccgnlclethbridge.ca",
    linktree: "https://linktr.ee/rccgnlclethbridge",
  },
  socials: {
    facebook: "https://facebook.com/rccgnlclethbridge.ca",
    instagram: "https://www.instagram.com/rccgnlclethbridge/",
    youtube: "https://www.youtube.com/@rccgnlclethbridge",
    youtubeChannelId: "UCoVKz0rDBYintJxZKFPUC-w",
    youtubeChannel: "https://www.youtube.com/channel/UCoVKz0rDBYintJxZKFPUC-w/",
  },
  hilltopChurch: {
    name: "RCCG Hilltop Church",
    url: "https://thehilltopch.ca",
    instagram: "https://www.instagram.com/thehilltopch/",
    youtube: "https://www.youtube.com/@TheHilltopCh",
    sundaySchedule: "Sundays | 12:00pm (Sunday School) & 12:30pm (Service)",
    tarrySchedule: "Night of Wonders & Tarry | Last Friday @ 6:30pm",
    tagline:
      "Our Youth & Young Adults expression in Lethbridge — equipping young people and families to be heaven-ready and earthly relevant.",
  },
  serviceTimes: {
    sundayService: "9:30am (Sunday School)",
    celebrationService: "first Sunday of the month @ 9:30am",
    midWeekServices: "Wednesday Bible Study @ 7 pm (in-person & online)",
    prayerMeetings:
      "Holy Communion Service: Second Wednesday of every Month @ 7 pm (in-person & online)",
  },
  copyright: `© ${new Date().getFullYear()} RCCG NEW LIFE CHAPEL LETHBRIDGE. All Rights Reserved.`,
};

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const navigationMenu: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Our Parish", href: "/about" },
      { label: "Statement of Faith", href: "/statement-of-faith" },
      { label: "Our Mission & Vision", href: "/our-mission" },
      { label: "Plan a Visit", href: "/contact?tab=visit" },
    ],
  },
  {
    label: "Ministries",
    href: "#",
    children: [
      { label: "Youth — Hilltop Church", href: "/youth" },
      { label: "Community Outreach & Care", href: "/community-outreach" },
      { label: "Young Adult Hangout", href: "/youth-adult-hangout" },
    ],
  },
  { label: "Sermons", href: "/sermons" },
  {
    label: "Events & Media",
    href: "/news-events",
    children: [
      { label: "Upcoming Events", href: "/news-events" },
      { label: "Gallery & Worship Reels", href: "/gallery" },
    ],
  },
  { label: "Sunday Rides", href: "/rides" },
  { label: "Give", href: "/giving" },
];

export interface SermonItem {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  publishedAt?: string;
}

export const sermonsList: SermonItem[] = [
  {
    id: "44Q0xyjAOOM",
    title: "BIBLE STUDY || OCTOBER 21, 2026",
    subtitle: "Mid-week Bible Study Service @rccgnlclethbridge",
    url: "https://www.youtube.com/watch?v=44Q0xyjAOOM",
  },
  {
    id: "z7WihyhwTds",
    title: "SUNDAY SERVICE || OCTOBER 18, 2026",
    subtitle: "Sunday service @rccgnlclethbridge",
    url: "https://www.youtube.com/watch?v=z7WihyhwTds",
  },
  {
    id: "qYVgSl7qtcc",
    title: "HOLY COMMUNION || OCTOBER 14, 2026",
    subtitle: "Holy Communion Service @rccgnlclethbridge",
    url: "https://www.youtube.com/watch?v=qYVgSl7qtcc",
  },
  {
    id: "Fsv6-CSYivA",
    title: "SUNDAY SERVICE || OCTOBER 11, 2026",
    subtitle: "Weekly Sunday Service @rccgnlclethbridge",
    url: "https://www.youtube.com/watch?v=Fsv6-CSYivA",
  },
  {
    id: "b2jHelA78dE",
    title: "BIBLE STUDY || MIDWEEK SERVICE || OCTOBER 7, 2026",
    subtitle: "Bible Study @rccgnlclethbridge",
    url: "https://www.youtube.com/watch?v=b2jHelA78dE",
  },
  {
    id: "hfpBeY0xVwk",
    title: "BEYOND EXPECTATIONS || THANKSGIVING SERVICE || OCTOBER 4, 2026",
    subtitle: "Thanksgiving Service @rccgnlclethbridge",
    url: "https://www.youtube.com/watch?v=hfpBeY0xVwk",
  },
  {
    id: "8jJAZlS882Q",
    title: "BEYOND EXPECTATION || IMPARTATION SERVICE || OCTOBER 2, 2026",
    subtitle: "impartationservice@rccgnlclethbridge",
    url: "https://www.youtube.com/watch?v=8jJAZlS882Q",
  },
  {
    id: "ujsG2z--tWA",
    title: "SUNDAY SERVICE || SEPTEMBER 26, 2026",
    subtitle: "Weekly Sunday Service @rccgnlclethbridge",
    url: "https://www.youtube.com/watch?v=ujsG2z--tWA",
  },
  {
    id: "hg1wWc0Yt-s",
    title: "MID-WEEK SERVICE || SEPTEMBER 23, 2026",
    subtitle: "BIBLE STUDY|@rccgnlclethbridge",
    url: "https://www.youtube.com/watch?v=hg1wWc0Yt-s",
  },
];

export interface InstagramReelItem {
  id: string;
  title: string;
  category: "Worship" | "Word & Recap" | "Community & Fellowship";
  videoUrl: string;
  posterUrl: string;
  permalink: string;
  caption: string;
}

export const instagramReels: InstagramReelItem[] = [
  {
    id: "DeES_RKNxVp",
    title: "Beyond Expectations — 9th Anniversary Thanksgiving",
    category: "Worship",
    videoUrl: "/videos/DeES_RKNxVp.mp4",
    posterUrl: "/images/instagram/DeES_RKNxVp.jpg",
    permalink: "https://www.instagram.com/reel/DeES_RKNxVp/",
    caption:
      "“Now to Him who is able to do exceedingly abundantly...” (Ephesians 3:20) ✨ Celebrating God’s faithfulness at RCCG New Life Chapel Lethbridge!",
  },
  {
    id: "DX3SLsFtiif",
    title: "Sundays at New Life Chapel — High Praise",
    category: "Worship",
    videoUrl: "/videos/DX3SLsFtiif.mp4",
    posterUrl: "/images/instagram/DX3SLsFtiif.jpg",
    permalink: "https://www.instagram.com/reel/DX3SLsFtiif/",
    caption:
      "Blessed be the name of the Lord God Almighty! Joyful Sunday worship in the house of the Lord.",
  },
  {
    id: "DGOzUyQy5WG",
    title: "Service Recap: The Full Armor of God",
    category: "Word & Recap",
    videoUrl: "/videos/DGOzUyQy5WG.mp4",
    posterUrl: "/images/instagram/DGOzUyQy5WG.jpg",
    permalink: "https://www.instagram.com/reel/DGOzUyQy5WG/",
    caption:
      "🛡️✨ Service Recap: Standing firm in faith and putting on the full armor of God.",
  },
  {
    id: "DGV89wHvOqm",
    title: "Worshipping the King of Kings (Psalm 95:3)",
    category: "Worship",
    videoUrl: "/videos/DGV89wHvOqm.mp4",
    posterUrl: "/images/instagram/DGV89wHvOqm.jpg",
    permalink: "https://www.instagram.com/reel/DGV89wHvOqm/",
    caption:
      "👑✨ “For the LORD is a great God, And a great King above all gods.” — Psalm 95:3",
  },
  {
    id: "DHOcOzHJpuX",
    title: "Heart of Service — Colossians 3:23",
    category: "Word & Recap",
    videoUrl: "/videos/DHOcOzHJpuX.mp4",
    posterUrl: "/images/instagram/DHOcOzHJpuX.jpg",
    permalink: "https://www.instagram.com/reel/DHOcOzHJpuX/",
    caption:
      "🔑 “And whatsoever ye do, do it heartily, as to the Lord, and not unto men.” — Colossians 3:23",
  },
  {
    id: "DL44e7_xvui",
    title: "In His Presence — Psalm 125:2",
    category: "Worship",
    videoUrl: "/videos/DL44e7_xvui.mp4",
    posterUrl: "/images/instagram/DL44e7_xvui.jpg",
    permalink: "https://www.instagram.com/reel/DL44e7_xvui/",
    caption:
      "“As the mountains are round about Jerusalem, So the LORD is round about his people from henceforth even for ever.” — Psalm 125:2",
  },
  {
    id: "DQMDPJNkQdd",
    title: "Youth & Young Adults — Weekend Takeover",
    category: "Community & Fellowship",
    videoUrl: "/videos/DQMDPJNkQdd.mp4",
    posterUrl: "/images/instagram/DQMDPJNkQdd.jpg",
    permalink: "https://www.instagram.com/reel/DQMDPJNkQdd/",
    caption:
      "Remember now thy Creator in the days of thy youth (Ecclesiastes 12:1). Youth & Young Adults fellowship in Lethbridge!",
  },
  {
    id: "DE2iDkbvxUL",
    title: "Campus Night of Worship — University of Lethbridge",
    category: "Worship",
    videoUrl: "/videos/DE2iDkbvxUL.mp4",
    posterUrl: "/images/instagram/DE2iDkbvxUL.jpg",
    permalink: "https://www.instagram.com/reel/DE2iDkbvxUL/",
    caption:
      "✨ “Where two or three gather in my name, there I am with them.” — Matthew 18:20",
  },
  {
    id: "DGZms4cRU_d",
    title: "Creative & Drama Ministry — Faith in Action",
    category: "Community & Fellowship",
    videoUrl: "/videos/DGZms4cRU_d.mp4",
    posterUrl: "/images/instagram/DGZms4cRU_d.jpg",
    permalink: "https://www.instagram.com/reel/DGZms4cRU_d/",
    caption:
      "🎭✨ Behind the scenes, but front and center for God’s glory! Storytelling for the Kingdom.",
  },
  {
    id: "DKBJwx0JWrO",
    title: "Church Family & Jersey Sunday Fellowship",
    category: "Community & Fellowship",
    videoUrl: "/videos/DKBJwx0JWrO.mp4",
    posterUrl: "/images/instagram/DKBJwx0JWrO.jpg",
    permalink: "https://www.instagram.com/reel/DKBJwx0JWrO/",
    caption:
      "Joy, unity, and warm community fellowship at RCCG New Life Chapel Lethbridge!",
  },
  {
    id: "DFJjgtWyKXS",
    title: "Young Adult Hangout & Community Vibes",
    category: "Community & Fellowship",
    videoUrl: "/videos/DFJjgtWyKXS.mp4",
    posterUrl: "/images/instagram/DFJjgtWyKXS.jpg",
    permalink: "https://www.instagram.com/reel/DFJjgtWyKXS/",
    caption:
      "Stirring up love and good works in Christ-centered community (Hebrews 10:24-25).",
  },
  {
    id: "DDdUmYvyZqV",
    title: "Christmas Carol & Worship Celebration",
    category: "Worship",
    videoUrl: "/videos/DDdUmYvyZqV.mp4",
    posterUrl: "/images/instagram/DDdUmYvyZqV.jpg",
    permalink: "https://www.instagram.com/reel/DDdUmYvyZqV/",
    caption:
      "🎶 Go tell it on the mountain that Jesus Christ is born! Joyful praise at RCCG New Life Chapel.",
  },
];

export interface ChurchEventItem {
  category: string;
  schedule: string;
  title: string;
  description: string;
  location: string;
  image: string;
  ctaLabel?: string;
  ctaHref?: string;
  external?: boolean;
}

export const churchEventsList: ChurchEventItem[] = [
  {
    category: "Monthly Celebration",
    schedule: "First Sunday of Every Month • 9:30 AM",
    title: "Thanksgiving & Celebration Service",
    description:
      "Join us every first Sunday of the month for a joyful, spirit-filled Thanksgiving and Celebration Service with uplifting worship, testimonies, and the Word, starting with Sunday School at 9:30 AM.",
    location: "234 13 Street North, Lethbridge",
    image: "/images/gallery-01.jpg",
    ctaLabel: "Need a Sunday Ride?",
    ctaHref: "/rides",
  },
  {
    category: "Weekly Worship",
    schedule: "Every Sunday • 9:30 AM",
    title: "Sunday Worship & Sunday School",
    description:
      "Experience vibrant worship, practical biblical teaching, and warm fellowship every Sunday morning, starting with interactive Sunday School at 9:30 AM.",
    location: "In-Person & Live on YouTube",
    image: "/images/gallery-04.jpg",
    ctaLabel: "Watch Live / Archive",
    ctaHref: "/sermons",
  },
  {
    category: "Mid-Week Growth",
    schedule: "Every Wednesday • 7:00 PM",
    title: "Wednesday Bible Study (Digging Deep)",
    description:
      "Grow deeper in your walk with Christ through interactive mid-week scripture study, questions, and discussion. Available both in-person and online.",
    location: "In-Person & Online",
    image: "/images/about-bottom-3.jpg",
    ctaLabel: "Browse Bible Studies",
    ctaHref: "/sermons",
  },
  {
    category: "Holy Communion & Prayer",
    schedule: "Second Wednesday of Every Month • 7:00 PM",
    title: "Monthly Holy Communion Service",
    description:
      "A dedicated mid-week evening of corporate prayer, worship, and partaking in the Lord’s Table together as a church family.",
    location: "In-Person & Online",
    image: "/images/gallery-09.jpg",
    ctaLabel: "Contact Us for Details",
    ctaHref: "/contact",
  },
  {
    category: "Youth & Young Adults",
    schedule: "Every Sunday • 12:00 PM (School) & 12:30 PM (Service)",
    title: "The Hilltop Church (Youth & Young Adults)",
    description:
      "Our dedicated Youth & Young Adults expression in Lethbridge! Equipping young people, students, and young families to be heaven-ready and earthly relevant.",
    location: "234 13 Street North, Lethbridge",
    image: "/images/youth-main.jpg",
    ctaLabel: "Visit thehilltopch.ca",
    ctaHref: "https://thehilltopch.ca",
    external: true,
  },
  {
    category: "Hilltop Fellowship",
    schedule: "Last Friday of Every Month • 6:30 PM",
    title: "Hilltop Night of Wonders & Youth Hangouts",
    description:
      "Connect with students, youth, and young adults across Lethbridge for fervent prayer, worship, hangouts, and Christ-centered community at The Hilltop Church.",
    location: "234 13 Street North, Lethbridge",
    image: "/images/you18-3.png",
    ctaLabel: "Explore Hilltop Church",
    ctaHref: "https://thehilltopch.ca",
    external: true,
  },
];

export const youthHangoutPhotos = [
  { src: "/images/you3.png", category: "hangout" },
  { src: "/images/you.png", category: "hangout" },
  { src: "/images/you1-1-1.png", category: "hangout" },
  { src: "/images/you2.png", category: "hangout" },
  { src: "/images/you4.png", category: "hangout" },
  { src: "/images/you5-1.png", category: "hangout" },
  { src: "/images/you6.png", category: "hangout" },
  { src: "/images/you7.png", category: "hangout" },
  { src: "/images/you8.png", category: "events" },
  { src: "/images/you9.png", category: "hangout" },
  { src: "/images/you11.png", category: "hangout" },
  { src: "/images/you12.png", category: "hangout" },
  { src: "/images/you18-3.png", category: "hangout" },
  { src: "/images/you16.png", category: "hangout" },
  { src: "/images/you15-1.png", category: "hangout" },
  { src: "/images/you13.png", category: "hangout" },
  { src: "/images/yout1-2.png", category: "hangout" },
  { src: "/images/youth.png", category: "hangout" },
];

export const galleryPhotos = [
  "/images/gallery-01.jpg",
  "/images/gallery-02.jpg",
  "/images/gallery-03.jpg",
  "/images/gallery-04.jpg",
  "/images/gallery-05.jpg",
  "/images/gallery-06.jpg",
  "/images/gallery-07.jpg",
  "/images/gallery-08.jpg",
  "/images/gallery-09.jpg",
  "/images/gallery-10.jpg",
  "/images/gallery-11.jpg",
  "/images/gallery-12.jpg",
  "/images/gallery-13.jpg",
  "/images/gallery-14.jpg",
  "/images/gallery-15.jpg",
  "/images/gallery-16.jpg",
  "/images/gallery-17.jpg",
  "/images/gallery-18.jpg",
];
