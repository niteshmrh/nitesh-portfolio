"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { Moon, RotateCcw, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { trackEvent } from "@/lib/analytics";

const palettes = [
  { name: "Purple", value: "purple", color: "#8b5cf6" },
  { name: "Violet", value: "violet", color: "#6d28d9" },
  { name: "Blue", value: "blue", color: "#3b82f6" },
  { name: "Cyan", value: "cyan", color: "#06b6d4" },
  { name: "Pink", value: "pink", color: "#ec4899" },
  { name: "Green", value: "green", color: "#22c55e" },
  { name: "Slate", value: "slate", color: "#64748b" },
];

export function ThemeControls() {
  const { theme, setTheme } = useTheme();
  const [palette, setPalette] = useState("purple");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("portfolio-palette") || "purple";
    setPalette(saved);
    document.documentElement.dataset.palette = saved;
  }, []);

  const selectPalette = (value: string) => {
    setPalette(value);
    localStorage.setItem("portfolio-palette", value);
    document.documentElement.dataset.palette = value;
    trackEvent("palette_change", {
      palette: value,
    });
  };

  const reset = () => selectPalette("purple");

  const changeTheme = (value: "dark" | "light") => {
    setTheme(value);
    trackEvent("theme_change", {
      theme: value,
      source: "theme_panel",
    });
  };

  return (
    <div className="theme-panel docmind-card docmind-card-hover">
      <div className="theme-heading">Theme</div>
      <div className="theme-switch">
        <button
          className={
            mounted && theme === "dark" ? "theme-mode active" : "theme-mode"
          }
          onClick={() => changeTheme("dark")}
        >
          <Moon size={15} /> Dark
        </button>
        <button
          className={
            mounted && theme === "light" ? "theme-mode active" : "theme-mode"
          }
          onClick={() => changeTheme("light")}
        >
          <Sun size={15} /> Light
        </button>
      </div>
      <div className="theme-heading palette-title">Color Palette</div>
      <div className="palette-grid">
        {palettes.map((item) => (
          <button
            key={item.value}
            aria-label={`Use ${item.name} accent`}
            title={item.name}
            className={`palette-dot ${palette === item.value ? "selected" : ""}`}
            style={{ "--palette-color": item.color } as CSSProperties}
            onClick={() => selectPalette(item.value)}
          />
        ))}
      </div>
      <button className="reset-theme" onClick={reset}>
        <RotateCcw size={13} /> Reset
      </button>
    </div>
  );
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isLight = mounted && theme === "light";

  return (
    <button
      type="button"
      className="nav-theme-toggle"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      title={isLight ? "Switch to dark theme" : "Switch to light theme"}
    >
      {isLight ? <Sun size={16} /> : <Moon size={16} />}
      <span>{isLight ? "Light" : "Dark"}</span>
    </button>
  );
}
