import { ArrowUpRight, ExternalLink } from "lucide-react";
import projects from "@/data/projects.json";

export function Projects() {
  const featured = projects.filter((project) => project.featured);
  return (
    <section id="projects" className="section container">
      <div className="section-heading">
        <div>
          <span className="eyebrow">03 / Selected Work</span>
          <h2>Things I&apos;ve built</h2>
        </div>
        <a className="text-link" href="#projects">
          View All Projects <ArrowUpRight size={15} />
        </a>
      </div>
      <div className="projects-grid">
        {featured.map((project) => (
          <article
            className="project-card docmind-card-hover"
            key={project.title}
          >
            <a
              href={project.url}
              target={project.url.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="project-preview"
            >
              <img src={project.image} alt="" />
              <span className="project-number">{project.number}</span>
              <span className="project-open">
                <ExternalLink size={16} />
              </span>
            </a>
            <div className="project-body">
              <div className="project-meta">
                <span>{project.category}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="tag-row">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="project-list">
        {projects
          .filter((project) => !project.featured)
          .map((project) => (
            <a
              href={project.url}
              className="project-list-row docmind-card-hover"
              key={project.title}
            >
              <span>{project.number}</span>
              <div>
                <small>{project.category}</small>
                <h3>{project.title}</h3>
              </div>
              <ArrowUpRight />
            </a>
          ))}
      </div>
    </section>
  );
}
