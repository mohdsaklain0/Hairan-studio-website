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
  title: {
    default: "Hairan Studio — AI-Powered Creative Agency",
    template: "%s | Hairan Studio",
  },
  description:
    "Hairan Studio is an AI-powered creative agency in India building brand films, ad campaigns, product shoots, and visual content for D2C and consumer brands — at 10x the speed and 70% lower cost.",
  applicationName: "Hairan Studio",
  authors: [{ name: "Hairan Studio", url: "https://hairanstudio.com" }],
  creator: "Hairan Studio",
  publisher: "Hairan Studio",
  keywords: [
    "Hairan Studio",
    "hairanstudio",
    "hairan studio",
    "AI creative agency",
    "AI creative agency India",
    "AI video production",
    "AI brand films",
    "AI ad creatives",
    "AI product photography",
    "D2C creative agency",
    "AI marketing agency",
    "generative AI agency",
    "AI commercials",
    "AI content creation agency",
    "AI agency Gurugram",
    "AI agency Delhi NCR",
  ],
  category: "Creative Agency",
  alternates: {
    canonical: "https://hairanstudio.com",
  },
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
    site: "@HairanStudio",
    creator: "@HairanStudio",
    title: "Hairan Studio — AI-Powered Creative Agency",
    description:
      "AI-powered creative agency building brand films, ad campaigns, and visual content for D2C and consumer brands.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hairan Studio",
  alternateName: ["hairanstudio", "Hairan"],
  url: "https://hairanstudio.com",
  logo: "https://hairanstudio.com/images/logo-icon-white.png",
  image: "https://hairanstudio.com/og-image.png",
  description:
    "AI-powered creative agency building brand films, ad campaigns, and visual content for D2C and consumer brands at 10x the speed.",
  email: "hello@hairanstudio.com",
  telephone: "+91-8433065158",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Q 412, Sector 40",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122102",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.instagram.com/hairanstudio/",
    "https://www.linkedin.com/company/112523326/",
    "https://x.com/HairanStudio",
    "https://youtube.com/@hairanstudio",
    "https://www.facebook.com/people/Hairan-Studio/61577476337799/",
  ],
  foundingDate: "2025",
  areaServed: "Worldwide",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Hairan Studio",
  alternateName: "hairanstudio",
  url: "https://hairanstudio.com",
  publisher: { "@type": "Organization", name: "Hairan Studio" },
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
