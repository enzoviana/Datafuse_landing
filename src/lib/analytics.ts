// Lightweight analytics helper. Uses Plausible if loaded (privacy-friendly,
// no cookies). Falls back to a console log + custom event for debugging.

declare global {
  interface Window {
    plausible?: (event: string, opts?: { props?: Record<string, string | number | boolean> }) => void;
  }
}

export type AnalyticsEvent =
  | "cta_click"
  | "service_view"
  | "portfolio_view"
  | "offer_view"
  | "chat_open"
  | "language_change"
  | "lead_submitted"; // conversion

export function track(event: AnalyticsEvent, props?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;
  try {
    window.plausible?.(event, props ? { props } : undefined);
    window.dispatchEvent(new CustomEvent("datafuse:track", { detail: { event, props } }));
    if (import.meta.env.DEV) console.debug("[analytics]", event, props ?? {});
  } catch {}
}
