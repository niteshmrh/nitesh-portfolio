interface Window {
  dataLayer: unknown[];

  gtag: (
    command: string,
    action: string | Date,
    parameters?: Record<string, unknown>,
  ) => void;
}
