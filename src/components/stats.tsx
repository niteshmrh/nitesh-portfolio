import { BriefcaseBusiness, Code2, Award, Layers3 } from "lucide-react";
import profile from "@/data/profile.json";

const icons = [BriefcaseBusiness, Code2, Layers3, Award, Code2];

export function Stats() {
  return (
    <section className="container stats-wrap" aria-label="Highlights">
      <div className="stats-card docmind-card">
        {profile.stats.map((stat, index) => {
          const Icon = icons[index];
          return (
            <div className="stat" key={stat.label}>
              <span className="stat-icon">
                <Icon size={17} />
              </span>
              <div>
                <strong>{stat.value}</strong>
                <small>{stat.label}</small>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
