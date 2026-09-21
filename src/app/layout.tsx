import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const siteUrl = "https://www.mihsanalam.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mihsan Alam | Full Stack Engineer",
  description:
    "Mihsan Alam is a Full Stack Engineer building production web and mobile applications with React, Next.js, React Native, and Node.js. Studying at BAF Shaheen College Kurmitola, based in Dhaka, Bangladesh.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/mihsan_logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/mihsan_logo.png",
  },
  keywords: [
    "Mihsan Alam",
    "Md Mihsan Alam",
    "Mihsan Alam Portfolio",
    "Mihsan Alam Full Stack Engineer",
    "Full Stack Engineer",
    "Full Stack Developer",
    "BAF Shaheen College Kurmitola",
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "Node.js",
    "MERN Stack",
    "Portfolio",
    "Dhaka",
    "Bangladesh",
  ],
  authors: [{ name: "Mihsan Alam", url: siteUrl }],
  creator: "Mihsan Alam",
  publisher: "Mihsan Alam",
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Mihsan Alam | Full Stack Engineer",
    description:
      "Mihsan Alam is a Full Stack Engineer building production web and mobile applications with React, Next.js, React Native, and Node.js. Studying at BAF Shaheen College Kurmitola, based in Dhaka, Bangladesh.",
    url: siteUrl,
    siteName: "Mihsan Alam",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/mihsan_logo.png",
        width: 1024,
        height: 1024,
        alt: "Mihsan Alam — Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mihsan Alam | Full Stack Engineer",
    description:
      "Mihsan Alam is a Full Stack Engineer building production web and mobile applications with React, Next.js, React Native, and Node.js. Studying at BAF Shaheen College Kurmitola, based in Dhaka, Bangladesh.",
    images: ["/images/mihsan_logo.png"],
  },
};

// ─── Structured data ──────────────────────────────────────────────────────────
// Entity-first schema: the @id + sameAs graph below is what helps Google merge
// your website, GitHub, LinkedIn, Instagram, Facebook and any future
// YouTube/TikTok presence into ONE entity ("Mihsan Alam") — the prerequisite
// for a knowledge panel like Gazi Jarin's.
//
// ⚠️ NOTE: If/when you create a YouTube channel or TikTok account under your
// name, add the URLs to `sameAs` below — video content is a big part of why
// that panel shows an image grid + video cards.

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Mihsan Alam",
  alternateName: ["Md Mihsan Alam", "mihsanalam"],
  givenName: "Mihsan",
  familyName: "Alam",
  jobTitle: "Full Stack Engineer",
  description:
    "Full Stack Engineer from Dhaka, Bangladesh, building production web and mobile applications with React, Next.js, React Native, and Node.js.",
  url: siteUrl,
  image: [
    {
      "@type": "ImageObject",
      "@id": `${siteUrl}/#personlogo`,
      url: `${siteUrl}/images/mihsan_logo.png`,
      caption: "Mihsan Alam logo",
    },
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "BAF Shaheen College Kurmitola",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Full Stack Development",
    "Web Development",
    "Mobile App Development",
  ],
  sameAs: [
    "https://www.linkedin.com/in/mihsanalam",
    "https://github.com/mihsanalam",
    "https://www.instagram.com/mihsanalam/",
    "https://www.facebook.com/mdmihsanalam",
    "https://www.youtube.com/@mihsanalam",
    // Add when created:
    // "https://www.tiktok.com/@mihsanalam",
    // "https://x.com/mihsanalam",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Mihsan Alam",
  description:
    "Portfolio of Mihsan Alam — Full Stack Engineer specializing in React, Next.js, React Native and Node.js applications.",
  publisher: { "@id": `${siteUrl}/#person` },
  inLanguage: "en",
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteUrl}/#profilepage`,
  url: siteUrl,
  dateModified: new Date().toISOString().split("T")[0],
  mainEntity: { "@id": `${siteUrl}/#person` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/mihsan_logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/mihsan_logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([profilePageSchema, personSchema, websiteSchema]),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

