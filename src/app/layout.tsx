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
  title: "Mihsan Alam — Full Stack Developer",
  description:
    "Portfolio of Mihsan Alam — a Full Stack Engineer building production-grade web and mobile applications with Next.js, React Native, and the MERN stack.",
  icons: {
    icon: "/images/mihsan_logo.png",
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
    title: "Mihsan Alam — Full Stack Developer",
    description:
      "Building real-world web and mobile applications. Check out my projects and get in touch.",
    url: "https://mihsanalam.vercel.app",
    siteName: "Mihsan Alam Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mihsan Alam — Full Stack Developer",
    description:
      "Building real-world web and mobile applications. Check out my projects and get in touch.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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

