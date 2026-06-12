import type { Metadata } from "next";
import { IBM_Plex_Mono, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit",
  display: "swap",
});

const ibmPlex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nguyễn Hữu Huân — Fullstack Developer",
  description:
    "Portfolio of Nguyễn Hữu Huân, Fullstack Developer exploring AI engineering. Next.js, NestJS, Spring Boot.",
  openGraph: {
    title: "Nguyễn Hữu Huân — Fullstack Developer",
    description: "Developer character sheet & project missions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body
        className={`${outfit.variable} ${ibmPlex.variable} min-w-0 bg-void font-sans text-zinc-300`}
      >
        {children}
      </body>
    </html>
  );
}
