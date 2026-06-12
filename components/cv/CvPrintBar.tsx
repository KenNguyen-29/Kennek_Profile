"use client";

import Link from "next/link";
import { ArrowLeft, Printer } from "lucide-react";
import { useI18n } from "@/lib/LanguageProvider";

export default function CvPrintBar() {
  const { t } = useI18n();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="cv-no-print sticky top-0 z-50 border-b border-void-border/60 bg-void-panel/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[210mm] flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-emerald-glow"
        >
          <ArrowLeft size={16} />
          {t.ui.cv.back}
        </Link>
        <div className="flex items-center gap-3">
          <p className="hidden text-xs text-zinc-600 sm:block">{t.ui.cv.printHint}</p>
          <button
            type="button"
            onClick={handlePrint}
            className="btn-hud !w-auto gap-2 px-4 py-2 text-sm"
          >
            <Printer size={16} />
            {t.ui.cv.print}
          </button>
        </div>
      </div>
    </div>
  );
}
