import { ArrowUpRight, BadgeCheck } from "lucide-react";
import certifications from "@/data/certifications.json";

export function Certifications() {
  return (
    <section id="certifications" className="section container">
      <div className="section-heading">
        <div>
          <span className="eyebrow">05 / Certifications</span>
          <h2>Certifications & learning</h2>
        </div>
      </div>
      <div className="cert-grid">
        {certifications.map((cert) => (
          <a
            href={cert.url}
            target="_blank"
            rel="noreferrer"
            className="cert-card docmind-card-hover"
            key={cert.title}
          >
            <div className="cert-icon">
              <BadgeCheck size={22} />
            </div>
            <div>
              <h3>{cert.title}</h3>
              {cert.issuer && <p>{cert.issuer}</p>}
              {cert.year && <small>{cert.year}</small>}
            </div>
            <ArrowUpRight className="cert-arrow" size={16} />
          </a>
        ))}
      </div>
    </section>
  );
}
