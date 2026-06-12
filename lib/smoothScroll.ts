import type Lenis from "lenis";
import {
  SECTION_SCROLL_DURATION_MS,
  SECTION_SCROLL_OFFSET,
  easeLandOnSection,
} from "./scrollConfig";

let lenisInstance: Lenis | undefined;

export function setLenisInstance(instance: Lenis | undefined): void {
  lenisInstance = instance;
}

export function smoothScrollToElement(
  selector: string,
  options?: { duration?: number; offset?: number }
): void {
  if (typeof window === "undefined") return;

  const el = document.querySelector(selector);
  if (!el) return;

  const offset = options?.offset ?? SECTION_SCROLL_OFFSET;
  const duration = (options?.duration ?? SECTION_SCROLL_DURATION_MS) / 1000;

  if (lenisInstance) {
    lenisInstance.scrollTo(el as HTMLElement, {
      offset: -offset,
      duration,
      easing: easeLandOnSection,
      lock: false,
    });
    return;
  }

  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

export function smoothScrollToTop(
  duration = SECTION_SCROLL_DURATION_MS
): void {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, {
      duration: duration / 1000,
      easing: easeLandOnSection,
    });
    return;
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}
