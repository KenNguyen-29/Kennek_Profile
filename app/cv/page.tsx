import { Suspense } from "react";
import type { Metadata } from "next";
import CvDocument from "@/components/cv/CvDocument";
import CvPrintBar from "@/components/cv/CvPrintBar";
import PrintTrigger from "@/components/cv/PrintTrigger";
import "./cv-print.css";

export const metadata: Metadata = {
  title: "CV — Nguyễn Hữu Huân",
  description: "Curriculum Vitae — Nguyễn Hữu Huân, Fullstack Developer",
  robots: { index: false, follow: false },
};

export default function CvPage() {
  return (
    <div className="min-h-screen bg-zinc-100 py-0 print:bg-white">
      <CvPrintBar />
      <Suspense fallback={null}>
        <PrintTrigger />
      </Suspense>
      <div className="px-4 py-6 print:p-0 sm:py-8">
        <CvDocument />
      </div>
    </div>
  );
}
