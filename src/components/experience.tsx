import { ArrowUpRight, Briefcase } from "lucide-react";
import experience from "@/data/experience.json";

export function Experience() {
  return (
    <section id="experience" className="section container">
      <div className="section-heading">
        <div>
          <span className="eyebrow">02 / Experience</span>
          <h2>My professional journey</h2>
        </div>
        <a
          className="text-link"
          href="/resume/Nitesh_Kumar_FullStack_Developer_3Yoe.pdf"
          target="_blank"
        >
          View Full Resume <ArrowUpRight size={15} />
        </a>
      </div>
      <div className="timeline">
        {experience.map((item) => (
          <article
            className="experience-row"
            key={`${item.period}-${item.company}`}
          >
            <div className="experience-period">{item.period}</div>
            <div className="timeline-dot" />
            <div className="experience-card docmind-card-hover">
              <div className="company-mark">
                <Briefcase size={19} />
              </div>
              <div className="experience-main">
                <h3>{item.role}</h3>
                <span>{item.company}</span>
                <p>{item.description}</p>
                <ul className="experience-highlights">
                  {item.highlights.slice(0, 3).map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="tag-row experience-tags">
                {item.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
