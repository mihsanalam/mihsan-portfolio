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
    "Full Stack Engineer building production web and mobile applications with React, Next.js, React Native, and Node.js — from e-commerce platforms to real-time apps. Based in Dhaka, Bangladesh.",
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
    "Full Stack Engineer",
    "Full Stack Developer",
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
      "Full Stack Engineer building production web and mobile applications with React, Next.js, React Native, and Node.js — from e-commerce platforms to real-time apps. Based in Dhaka, Bangladesh.",
    url: "https://www.mihsanalam.com",
    siteName: "Mihsan Alam Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mihsan Alam | Full Stack Engineer",
    description:
      "Full Stack Engineer building production web and mobile applications with React, Next.js, React Native, and Node.js — from e-commerce platforms to real-time apps. Based in Dhaka, Bangladesh.",
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

