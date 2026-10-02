import {
  ArrowUpRight,
  Code2,
  Database,
  Gauge,
  Layers3,
  Mail,
} from "lucide-react";

import profile from "@/data/profile.json";
import freelancing from "@/data/freelancing.json";
import { TrackedLink } from "./tracked-link";

const serviceIcons = {
  code2: Code2,
  database: Database,
  gauge: Gauge,
  layers3: Layers3,
} as const;

type ServiceIcon = keyof typeof serviceIcons;

export function Freelance() {
  return (
    <section
      id="freelance"
      className="section container freelance-section"
      aria-labelledby="freelance-heading"
    >
      <div className="section-heading freelance-section-heading">
        <div className="freelance-heading-title">
          <span className="eyebrow">06 Freelance / Work With Me</span>

          <h2 id="freelance-heading">
            Have an idea? <em>Let&apos;s build it.</em>
          </h2>
        </div>

        <p>
          I help startups and businesses build scalable web applications,
          powerful APIs, and modern digital experiences.
        </p>
      </div>

      {/* Services loaded from JSON */}
      <div className="freelance-grid">
        {freelancing.map((service) => {
          const Icon = serviceIcons[service.icon as ServiceIcon];

          return (
            <article className="freelance-card" key={service.title}>
              <div className="freelance-icon" aria-hidden="true">
                <Icon size={22} />
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          );
        })}
      </div>

      {/* Project inquiry CTA */}
      <div className="freelance-cta">
        <div>
          <h3>Have a project in mind?</h3>
          <p>Tell me what you&apos;re building and let&apos;s talk.</p>
        </div>

        <TrackedLink
          href={`mailto:${profile.emails[0]}?subject=${encodeURIComponent("Freelance Project Inquiry")}`}
          className="button primary"
          eventName="freelance_project_inquiry_click"
        >
          <Mail size={17} />
          Discuss Your Project
          <ArrowUpRight size={17} />
        </TrackedLink>
      </div>
    </section>
  );
}
