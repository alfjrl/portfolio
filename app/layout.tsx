import "./global.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Navbar from "./components/nav";
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
  description: "This is my portfolio.",
  openGraph: {
    title: "Alfred J. Lin | Portfolio",
    description:
      "Welcome to Alfred's product design portfolio. Alfred is a data-driven product designer, who loves working on complex systems and creating user-centered & ethically humane design.",
    url: baseUrl,
    siteName: "Alfred J. Lin | Portfolio",
    locale: "en_US",
    type: "website",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx("text-gray-600 bg-white font-medium", manrope.className)}
    >
      <body className="antialiased" suppressHydrationWarning>
        <main className="flex-auto min-w-0 flex flex-col">
          <div className="max-w-4xl w-full md:mx-auto px-4">
            <Navbar />
            {children}
          </div>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
