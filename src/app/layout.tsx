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
  title: "Milan Tarsariya | Full Stack Developer",
  description: "Portfolio of Milan Tarsariya, a full stack developer specializing in building exceptional, high-performance web applications and digital experiences.",
  keywords: ["Full Stack Developer", "Next.js Portfolio", "React Developer", "TypeScript", "Node.js Developer", "Software Engineer"],
  authors: [{ name: "Milan Tarsariya" }],
  creator: "Milan Tarsariya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://milantarsariya.dev",
    title: "Milan Tarsariya | Full Stack Developer",
    description: "Portfolio of Milan Tarsariya, a full stack developer specializing in building exceptional, high-performance web applications.",
    siteName: "Milan Tarsariya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Milan Tarsariya | Full Stack Developer",
    description: "Portfolio of Milan Tarsariya, a full stack developer specializing in building exceptional, high-performance web applications.",
    creator: "@milantarsariya",
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
