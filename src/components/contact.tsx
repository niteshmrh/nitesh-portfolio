import { ArrowUpRight, Mail, Send } from "lucide-react";
import profile from "@/data/profile.json";
import { TrackedLink } from "./tracked-link";

export function Contact() {
  return (
    <section id="contact" className="section container contact-section">
      <div className="contact-card docmind-card">
        <div className="contact-icon">
          <Send size={21} />
        </div>
        <div className="contact-copy">
          <span className="eyebrow">06 / Contact</span>
          <h2>Let&apos;s build something amazing together.</h2>
          <p>
            I&apos;m open to new opportunities, interesting products, and
            challenging engineering problems.
          </p>
        </div>
        <TrackedLink
          className="button primary"
          href={`mailto:${profile.emails[0]}`}
          eventName="get_in_touch_click"
        >
          Get In Touch <ArrowUpRight size={17} />
        </TrackedLink>
        {/* open mail in new tab */}
        {/* <a
          className="button primary"
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.emails[0]}`}
          target="_blank"
          rel="noreferrer"
        >
          Get In Touch <ArrowUpRight size={17} />
        </a> */}
      </div>
      <div className="contact-emails">
        {profile.emails.map((email) => (
          <TrackedLink
            key={email}
            className="email-line"
            href={`mailto:${email}`}
            eventName="email_array_click"
          >
            <Mail size={16} />
            {email}
          </TrackedLink>
        ))}
      </div>
    </section>
  );
}
