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
  title: "Mihsan Alam | Expert Full-Stack Developer | React & Next.js",
  description:
    "Elevate your business with custom web applications and e-commerce platforms. Mihsan Alam is a highly skilled Full-Stack Developer based in Bangladesh, specializing in React, Next.js, and Node.js.",
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
    "Full Stack Developer",
    "React",
    "Next.js",
    "React Native",
    "MERN Stack",
    "Portfolio",
  ],
  authors: [{ name: "Mihsan Alam" }],
  openGraph: {
    title: "Mihsan Alam | Expert Full-Stack Developer | React & Next.js",
    description:
      "Elevate your business with custom web applications and e-commerce platforms. Mihsan Alam is a highly skilled Full-Stack Developer based in Bangladesh, specializing in React, Next.js, and Node.js.",
    url: "https://www.mihsanalam.com",
    siteName: "Mihsan Alam Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mihsan Alam | Expert Full-Stack Developer | React & Next.js",
    description:
      "Elevate your business with custom web applications and e-commerce platforms. Mihsan Alam is a highly skilled Full-Stack Developer based in Bangladesh, specializing in React, Next.js, and Node.js.",
  },
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

