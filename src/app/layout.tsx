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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mihsanalam.com"),
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
  authors: [{ name: "Mihsan Alam" }],
  openGraph: {
    title: "Mihsan Alam | Full Stack Engineer",
    description:
      "Mihsan Alam is a Full Stack Engineer building production web and mobile applications with React, Next.js, React Native, and Node.js. Studying at BAF Shaheen College Kurmitola, based in Dhaka, Bangladesh.",
    url: "https://www.mihsanalam.com",
    siteName: "Mihsan Alam Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mihsan Alam | Full Stack Engineer",
    description:
      "Mihsan Alam is a Full Stack Engineer building production web and mobile applications with React, Next.js, React Native, and Node.js. Studying at BAF Shaheen College Kurmitola, based in Dhaka, Bangladesh.",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mihsan Alam",
  jobTitle: "Full Stack Engineer",
  description:
    "Full Stack Engineer building production web and mobile applications with React, Next.js, React Native, and Node.js.",
  url: "https://www.mihsanalam.com",
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "BAF Shaheen College Kurmitola",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  knowsAbout: ["React", "Next.js", "React Native", "TypeScript", "Node.js", "MongoDB"],
  sameAs: [
    "https://linkedin.com/in/mihsanalam",
    "https://github.com/mihsanalam",
    "https://www.instagram.com/mihsanalam/",
    "https://www.facebook.com/mdmihsanalam",
  ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
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

