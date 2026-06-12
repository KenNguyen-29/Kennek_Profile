export function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

let activeAnimation: number | null = null;

export function cancelSmoothScroll(): void {
  if (activeAnimation !== null) {
    cancelAnimationFrame(activeAnimation);
    activeAnimation = null;
  }
}

function bindScrollCancelListeners(): void {
  if (typeof window === "undefined") return;

  const cancel = () => cancelSmoothScroll();

  window.addEventListener("wheel", cancel, { passive: true });
  window.addEventListener("touchstart", cancel, { passive: true });
  window.addEventListener("keydown", (e) => {
    if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(e.key)) {
      cancel();
    }
  });
}

if (typeof window !== "undefined") {
  bindScrollCancelListeners();
}

export function smoothScrollTo(
  targetY: number,
  duration = 1000,
  onComplete?: () => void
): void {
  if (typeof window === "undefined") return;

  cancelSmoothScroll();

  const startY = window.scrollY;
  const distance = targetY - startY;

  if (Math.abs(distance) < 2) {
    onComplete?.();
    return;
  }

  const startTime = performance.now();

  const step = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      activeAnimation = requestAnimationFrame(step);
    } else {
      activeAnimation = null;
      onComplete?.();
    }
  };

  activeAnimation = requestAnimationFrame(step);
}

export function smoothScrollToElement(
  selector: string,
  options?: { duration?: number; offset?: number }
): void {
  const el = document.querySelector(selector);
  if (!el) return;

  const offset = options?.offset ?? 80;
  const duration = options?.duration ?? 1000;
  const rect = el.getBoundingClientRect();
  const targetY = window.scrollY + rect.top - offset;

  smoothScrollTo(Math.max(0, targetY), duration);
}

export function smoothScrollToTop(duration = 1000): void {
  smoothScrollTo(0, duration);
}
