import type { Metadata } from "next";
import { Poppins, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-sans-devanagari",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["devanagari"],
});

export const metadata: Metadata = {
  title: {
    default: "Mero Sewa | Best Home Services in Nepal (Sudurpashchim)",
    template: "%s | Mero Sewa"
  },
  description: "Book verified electricians, expert plumbers, AC technicians, home cleaners, and CCTV experts across Sudurpashchim, Nepal. Get reliable home services at your doorstep.",
  keywords: [
    "Mero Sewa",
    "Home Services Nepal",
    "Plumber in Dhangadhi",
    "Electrician Sudurpashchim",
    "AC Repair Nepal",
    "Home Cleaning Services Nepal",
    "Best home service app Nepal",
    "CCTV installation Dhangadhi",
    "Nepal home maintenance",
    "Sudurpashchim home services"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://merosewa.com.np",
    siteName: "Mero Sewa",
    title: "Mero Sewa | Best Home Services in Nepal",
    description: "Book verified electricians, expert plumbers, AC technicians, and home cleaners across Sudurpashchim.",
    images: [
      {
        url: "/mero-sewa-logo.png",
        width: 1200,
        height: 630,
        alt: "Mero Sewa - Home Services in Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mero Sewa | Reliable Home Services",
    description: "Book verified electricians, plumbers, and home cleaners across Sudurpashchim, Nepal.",
    images: ["/mero-sewa-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0f71f2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", poppins.variable, notoSansDevanagari.variable)}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

