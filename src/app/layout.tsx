import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Twiscode",
  description: "Twiscode Company Profile",
  
  // 🌍 Menentukan bahasa utama halaman
  metadataBase: new URL("https://frontend-challange-kappa.vercel.app/"),
  applicationName: "Twiscode App",
  generator: "Next.js",
  keywords: ["Twiscode", "Technology", "Software Development", "IT Solutions"],
  authors: [{ name: "Twiscode Team", url: "https://frontend-challange-kappa.vercel.app/" }],
  creator: "Twiscode",
  publisher: "Twiscode",
  referrer: "origin-when-cross-origin", // atau "no-referrer"
  
  // 📷 Open Graph (untuk Facebook, LinkedIn, WhatsApp, dll.)
  openGraph: {
    title: "Twiscode - Software Development",
    description: "We provide innovative software solutions.",
    url: "https://frontend-challange-kappa.vercel.app/",
    siteName: "Twiscode",
    images: [
      {
        url: "https://frontend-challange-kappa.vercel.app//images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Twiscode Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // 🐦 Twitter Card Metadata
  twitter: {
    card: "summary_large_image", // summary / summary_large_image / app / player
    site: "@twiscode",
    creator: "@twiscode",
    title: "Twiscode - Software Development",
    description: "We provide innovative software solutions.",
    images: ["https://frontend-challange-kappa.vercel.app//images/twitter-image.jpg"],
  },

  // 📱 Apple & PWA settings
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Twiscode",
  },

  // 🔍 Robots meta tag (SEO indexing control)
  robots: {
    index: true, // Izinkan Google mengindeks halaman
    follow: true, // Izinkan Google mengikuti link
  },

  // 📜 Alternatif bahasa (untuk SEO internasional)
  alternates: {
    canonical: "https://frontend-challange-kappa.vercel.app/",
    languages: {
      "en-US": "https://frontend-challange-kappa.vercel.app/",
      "id-ID": "https://frontend-challange-kappa.vercel.app//id",
    },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
