// Lightweight, provider-agnostic event tracking. No analytics library is
// bundled yet; this pushes to window.dataLayer (GTM/GA4) when present and
// always dispatches a DOM CustomEvent so any tool added later can listen.
// Safe to call with no provider installed — it simply no-ops gracefully.

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    plausible?: (event: string, opts?: { props?: EventParams }) => void;
  }
}

export function track(event: string, params: EventParams = {}): void {
  if (typeof window === "undefined") return;

  // Google Tag Manager / GA4 dataLayer
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event, ...params });
  }

  // Plausible (if present)
  if (typeof window.plausible === "function") {
    window.plausible(event, { props: params });
  }

  // Generic DOM event so any future listener can hook in
  window.dispatchEvent(new CustomEvent("site:track", { detail: { event, params } }));
}
