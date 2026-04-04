import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hairanstudio.com"),
  title: "Hairan Studio — AI-Powered Creative Agency",
  description:
    "AI-powered creative agency building brand films, ad campaigns, and visual content for D2C and consumer brands — at 10x the speed.",
  keywords: [
    "AI creative agency",
    "brand films",
    "ad campaigns",
    "D2C brands",
    "AI video production",
    "Hairan Studio",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Hairan Studio — AI-Powered Creative Agency",
    description:
      "AI-powered creative agency building brand films, ad campaigns, and visual content for D2C and consumer brands — at 10x the speed.",
    url: "https://hairanstudio.com",
    siteName: "Hairan Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hairan Studio — AI-Powered Creative Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hairan Studio — AI-Powered Creative Agency",
    description:
      "AI-powered creative agency building brand films, ad campaigns, and visual content for D2C and consumer brands.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
