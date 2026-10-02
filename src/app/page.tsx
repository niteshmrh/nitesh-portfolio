import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Stack } from "@/components/stack";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { SocialLinks } from "@/components/social-links";
import profile from "@/data/profile.json";
import { Freelance } from "@/components/freelance";

export default function Home() {
  return (
    <main className="portfolio-page">
      <Navbar />
      <Hero />
      <Stats />
      <section id="about" className="section container about-section">
        <span className="eyebrow">01 / About</span>
        <div className="about-grid">
          <h2>
            I don&apos;t just write code. <em>I build systems.</em>
          </h2>
          <p>{profile.summaryLong}</p>
        </div>
      </section>
      <Experience />
      <Projects />
      <Stack />
      <Certifications />
      <Freelance />
      <SocialLinks />
      <Contact />
      <Footer />
    </main>
  );
}
