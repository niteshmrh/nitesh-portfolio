"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Instagram,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import profile from "@/data/profile.json";
import { ThemeControls } from "./theme-controls";
import { TrackedLink } from "./tracked-link";

export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-glow" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">{profile.eyebrow}</span>
          <h1>
            {profile.heroTitleLead} <span>{profile.heroTitleAccent}</span>
          </h1>
          <div className="hero-one-liner">{profile.heroOneLiner}</div>
          <p>{profile.summaryShort}</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              View My Work <ArrowUpRight size={17} />
            </a>
            <TrackedLink
              className="button secondary"
              href={profile.links.resume}
              eventName="resume_download"
            >
              Download Resume <Download size={16} />
            </TrackedLink>
          </div>
          <div className="social-row">
            {profile.links.github && profile.links.github !== "#" && (
              <TrackedLink
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                eventName="github_click"
              >
                <Github size={18} />
              </TrackedLink>
            )}
            <TrackedLink
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              eventName="linkedin_click"
            >
              <Linkedin size={18} />
            </TrackedLink>
            <TrackedLink
              href={profile.links.leetcode}
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
              eventName="leetcode_click"
            >
              LC
            </TrackedLink>
            <TrackedLink
              href={`mailto:${profile.emails[0]}`}
              aria-label="Email"
              eventName="email_click"
            >
              <Mail size={18} />
            </TrackedLink>
            <TrackedLink
              href={profile.links.instagram}
              target="_blank"
              rel="noreferrer"
              eventName="instagram_click"
            >
              <Instagram size={16} />
            </TrackedLink>
            <TrackedLink
              href={profile.links.youtube}
              target="_blank"
              rel="noreferrer"
              eventName="youtube_click"
            >
              <Youtube size={16} />
            </TrackedLink>
          </div>
        </div>

        <div className="hero-side">
          <div className="profile-card docmind-card-hover">
            {/* LEFT CONTENT */}
            <div className="profile-card-content">
              <div className="availability">
                <i />
                {profile.availability}
              </div>

              <span className="small-label">Currently working at</span>

              <div className="company-info">
                <div className="company-icon">C</div>

                <div>
                  <h2>{profile.currentRole.company}</h2>
                  <p>{profile.currentRole.title}</p>
                </div>
              </div>

              <div className="profile-divider" />

              <span className="small-label">Building</span>

              <div className="building-info">
                <div className="docmind-icon">▣</div>

                <div className="building-copy">
                  <h3>DocMind AI</h3>

                  <p>
                    AI-Powered Document
                    <br />
                    Intelligence Platform
                  </p>
                </div>

                <TrackedLink
                  href="https://docmind-ai-xi.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-launch"
                  aria-label="Open DocMind AI"
                  eventName="docmind_ai_click"
                >
                  <ArrowUpRight size={20} />
                </TrackedLink>
              </div>

              <div className="tag-row">
                <span>Node.js</span>
                <span>TypeScript</span>
                <span>Next.js</span>
                <span>AWS</span>
              </div>
            </div>

            {/* RIGHT PHOTO */}
            {profile.profileImage ? (
              <div className="profile-photo-wrap">
                <Image
                  src={profile.profileImage}
                  alt={`${profile.name} profile`}
                  fill
                  priority
                  sizes="(max-width: 900px) 42vw, 360px"
                  className="profile-photo"
                />
              </div>
            ) : (
              <div className="profile-photo-wrap profile-orb-wrap">
                <div className="profile-orb">NK</div>
              </div>
            )}
          </div>
          <ThemeControls />
        </div>
      </div>
      <div className="container hero-scroll">
        <ArrowDown size={15} /> Scroll to explore
      </div>
    </section>
  );
}
