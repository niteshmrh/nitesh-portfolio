"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// next-themes injects an inline script to prevent theme flicker.
// Next.js 16 + React 19 reports this as a script-in-component warning.
// The script is intentionally injected by next-themes.

if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  const originalError = console.error;
  console.error = (...args: unknown[]) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("Encountered a script tag")
    ) {
      return;
    }
    originalError.apply(console, args);
  };
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
    >
      {children}
    </NextThemesProvider>
  );
}
