import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import profile from "@/data/profile.json";
import { TrackedLink } from "./tracked-link";

export function Footer() {
  return (
    <footer className="container footer">
      <span className="brand">
        {profile.initials}
        <span>.</span>
      </span>
      <small>© 2026 {profile.name}. Built with Next.js.</small>
      <div className="footer-links">
        {profile.links.github && profile.links.github !== "#" && (
          <TrackedLink
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            eventName="github_click"
          >
            <Github size={16} />
          </TrackedLink>
        )}

        <TrackedLink
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          eventName="linkedin_click"
        >
          <Linkedin size={16} />
        </TrackedLink>

        <TrackedLink
          href={`mailto:${profile.emails[0]}`}
          eventName="email_click"
        >
          <Mail size={16} />
        </TrackedLink>
        <a href="#home" aria-label="Back to top">
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}
