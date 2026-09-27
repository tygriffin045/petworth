import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const sans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://pet.theworthguide.com";
const SITE_TITLE = "PetWorth — Honest picks for happier pets";
const SITE_DESCRIPTION =
  "Editorial pet gear picks for dogs and cats: beds and crates, cat trees, feeders and fountains, harnesses, grooming, toys, travel carriers, litter, training gear, and wellness accessories. Clear Amazon Associates disclosure — no invented scores.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s · PetWorth`,
  },
  description: SITE_DESCRIPTION,
  verification: {
    google: "FN6qrZKJIgH6gtQS2rIEQe-jjDmKVIUoBq3DwQUX8yk",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "PetWorth",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "PetWorth — Honest picks for happier pets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og/default.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${serif.variable} min-h-screen antialiased`}
      >
        <Header />
        <main className="mx-auto min-h-[70vh] max-w-6xl px-4 py-10 sm:px-6">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
