import techStack from "@/data/tech-stack.json";
import type { CSSProperties } from "react";

type TechItem = {
  name: string;
  icon: string;
  color: string;
};

export function Stack() {
  return (
    <section id="stack" className="section container">
      <div className="section-heading">
        <div>
          <span className="eyebrow">04 / Tech Stack</span>
          <h2>Technologies I work with</h2>
        </div>
      </div>

      <div className="stack-grid">
        {techStack.map((group) => (
          <article
            className="stack-card docmind-card-hover"
            key={group.category}
          >
            <span className="stack-category">{group.category}</span>
            <div className="stack-items">
              {group.items.map((item: TechItem) => (
                <div className="tech-item" key={item.name} title={item.name}>
                  <span
                    className="tech-icon"
                    style={
                      { "--icon-color": `#${item.color}` } as CSSProperties
                    }
                  >
                    <img
                      src={`https://cdn.simpleicons.org/${item.icon}/${item.color}`}
                      alt=""
                      width={18}
                      height={18}
                      loading="lazy"
                    />
                  </span>
                  <span className="tech-name">{item.name}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
