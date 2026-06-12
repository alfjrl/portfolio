import "./global.css";
import type { Metadata } from "next";
import { Manrope, Newsreader, Libre_Baskerville } from "next/font/google";
import Navbar from "./components/nav";
import { CustomCursor } from "./components/custom-cursor";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Alfred J. Lin | Portfolio",
    template: "%s | Alfred J. Lin",
  },
  description:
    "Welcome to Alfred's product design portfolio. Alfred is a a product designer who turns research into accessible, considered interfaces for complex information systems.",
  openGraph: {
    title: "Alfred J. Lin | Portfolio",
    description:
      "Welcome to Alfred's product design portfolio. Alfred is a a product designer who turns research into accessible, considered interfaces for complex information systems.",
    url: baseUrl,
    siteName: "Alfred J. Lin | Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent("Alfred J. Lin | Portfolio")}`,
        width: 1200,
        height: 630,
        alt: "Alfred J. Lin | Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alfred J. Lin | Portfolio",
    description:
      "Welcome to Alfred's product design portfolio. Alfred is a a product designer who turns research into accessible, considered interfaces for complex information systems.",
    images: [
      `${baseUrl}/og?title=${encodeURIComponent("Alfred J. Lin | Portfolio")}`,
    ],
  },
  icons: {
    icon: "/favi.png",
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

const cx = (...classes) => classes.filter(Boolean).join(" ");

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const ebGaramond = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-libre_baskerville",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // bg color bg-[#fafcfd]
    <html
      lang="en"
      className={cx(
        // "text-gray-600 bg-[#f6f8fb] font-medium",
        manrope.variable,
        ebGaramond.variable,
        manrope.className,
      )}
    >
      <body className="antialiased" suppressHydrationWarning>
        <CustomCursor />
        <main className="relative flex-auto min-w-0 flex flex-col">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
