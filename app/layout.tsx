import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nguyễn Hữu Huân — Fullstack Developer",
  description:
    "Portfolio of Nguyễn Hữu Huân, a Fullstack Developer specializing in Next.js, React, Vue, NestJS, Spring Boot, and modern web technologies. Based in Hà Nội, Vietnam.",
  keywords: [
    "Nguyễn Hữu Huân",
    "Fullstack Developer",
    "Next.js",
    "React",
    "NestJS",
    "Spring Boot",
    "Portfolio",
    "Web Developer",
    "Vietnam",
  ],
  authors: [{ name: "Nguyễn Hữu Huân" }],
  creator: "Nguyễn Hữu Huân",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    title: "Nguyễn Hữu Huân — Fullstack Developer",
    description:
      "Fullstack Developer with experience in Next.js, React, Vue, NestJS, Spring Boot, Docker, and PostgreSQL/MySQL.",
    siteName: "Nguyễn Hữu Huân Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyễn Hữu Huân — Fullstack Developer",
    description:
      "Portfolio showcasing fullstack development projects and experience.",
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
    <html lang="vi" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} min-w-0 overflow-x-hidden font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
