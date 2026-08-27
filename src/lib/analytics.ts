export function trackEvent(
  eventName: string,
  parameters?: Record<string, string | number | boolean>,
) {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;
  window.gtag("event", eventName, parameters);
}
