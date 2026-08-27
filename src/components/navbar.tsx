"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-controls";
import { useState } from "react";
import profile from "@/data/profile.json";

const links = [
  "About",
  "Experience",
  "Projects",
  "Stack",
  "Certifications",
  "Contact",
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a
          href="#home"
          className="brand brand-profile"
          aria-label="Nitesh Kumar home"
        >
          <span className="brand-mark">{profile.initials}</span>
          <span className="brand-copy">
            <strong>{profile.name}</strong>
            <small>{profile.role}</small>
          </span>
        </a>
        <nav className="desktop-nav">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}>
              {link}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <a href="#contact" className="nav-cta">
            Let&apos;s Talk <ArrowUpRight size={15} />
          </a>
        </div>
        <button
          className="mobile-menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav container">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
