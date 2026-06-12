/** Scroll tới section (dock, hero, ⌘K) — chỉnh tại đây */

/** Thời gian bay tới section (ms) — càng cao càng chậm, dừng êm hơn */
export const SECTION_SCROLL_DURATION_MS = 2200;

/** Khoảng cách dừng so với đầu section (px) — chừa chỗ dock/header */
export const SECTION_SCROLL_OFFSET = 80;

/** Ease-out mạnh: nhanh đầu, chậm dần khi chạm section */
export function easeLandOnSection(t: number): number {
  return 1 - Math.pow(1 - t, 5);
}
