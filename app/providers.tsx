"use client";

import { LanguageProvider } from "@/lib/LanguageProvider";
import LenisProvider from "@/components/LenisProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <LenisProvider>{children}</LenisProvider>
    </LanguageProvider>
  );
}
