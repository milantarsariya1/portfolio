import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Mercer | Creative Developer & Designer",
  description: "Portfolio of Alex Mercer, a creative developer specializing in building exceptional, high-performance digital experiences, interactive web applications, and stunning designs.",
  keywords: ["Creative Developer", "Next.js Portfolio", "React Developer", "TypeScript", "UI/UX Designer", "Front-end Engineer"],
  authors: [{ name: "Alex Mercer" }],
  creator: "Alex Mercer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexmercer.dev",
    title: "Alex Mercer | Creative Developer & Designer",
    description: "Portfolio of Alex Mercer, a creative developer specializing in building exceptional, high-performance digital experiences.",
    siteName: "Alex Mercer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Mercer | Creative Developer & Designer",
    description: "Portfolio of Alex Mercer, a creative developer specializing in building exceptional, high-performance digital experiences.",
    creator: "@alexmercer",
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
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} style={{ scrollBehavior: 'smooth' }}>
      <body>
        {children}
      </body>
    </html>
  );
}
