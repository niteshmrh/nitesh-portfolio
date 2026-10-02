import { ArrowUpRight, Instagram, Youtube } from "lucide-react";
import socialLinks from "@/data/social-links.json";
import { TrackedLink } from "@/components/tracked-link";

const socialIcons = {
  youtube: Youtube,
  instagram: Instagram,
} as const;

export function SocialLinks() {
  return (
    <section
      id="socials"
      className="section container social-section"
      aria-labelledby="social-heading"
    >
      <div className="section-heading social-section-heading">
        <div className="social-heading-title">
          <span className="eyebrow">07 / Connect</span>

          <h2 id="social-heading">
            Let&apos;s connect <em>beyond code.</em>
          </h2>
        </div>

        <p>
          Follow Coder Ka Caravan for developer interviews, career journeys,
          coding, and real experiences.
        </p>
      </div>

      <div className="social-grid">
        {socialLinks.map((social) => {
          const Icon = socialIcons[social.logo as keyof typeof socialIcons];

          return (
            <TrackedLink
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.link} — ${social.username} (opens in a new tab)`}
              className={`social-card social-${social.logo}`}
              eventName="social_link_click"
              eventParams={{
                social_platform: social.name.toLowerCase(),
                social_username: social.username,
                link_url: social.url,
                link_text: social.link,
              }}
            >
              <div className="social-card-top">
                <span className="social-icon" aria-hidden="true">
                  <Icon size={26} strokeWidth={1.8} />
                </span>

                <ArrowUpRight size={20} aria-hidden="true" />
              </div>

              <div className="social-card-copy">
                <h3>{social.name}</h3>
                <span className="social-handle">{social.username}</span>
                <p>{social.description}</p>
              </div>

              <span className="social-action">
                {social.link}
                <ArrowUpRight size={16} aria-hidden="true" />
              </span>
            </TrackedLink>
          );
        })}
      </div>
    </section>
  );
}
