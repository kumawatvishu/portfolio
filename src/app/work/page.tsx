import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import { PROJECTS, EXPERIENCE, TECH_STACK, PROFILE } from "@/lib/data";

export const metadata: Metadata = {
  title: `Work — ${PROFILE.name}`,
};

export default function WorkPage() {
  return (
    <>
      <header className="contact-hero">
        <div className="wrap">
          <Reveal className="eyebrow">Full index</Reveal>
          <Reveal as="h1" className="contact-title">
            Seven surfaces. <span className="accent">One system.</span>
          </Reveal>
          <Reveal as="p" className="contact-lede">
            Every product below shares the same Nx monorepo, component library, and testing
            discipline. Click any row to open it.
          </Reveal>
        </div>
      </header>

      <div className="wrap">
        <Reveal className="work-list">
          {PROJECTS.map((project) => (
            <a href={project.url} target="_blank" rel="noopener" className="work-row" key={project.title}>
              <div className="work-row-inner">
                <div className="wr-left">
                  <div className="wr-title">{project.title}</div>
                  <div className="wr-desc">{project.description}</div>
                </div>
                <span className="wr-tag">{project.tag}</span>
                <span className="wr-arrow">↗</span>
              </div>
            </a>
          ))}
        </Reveal>
      </div>

      <section id="experience">
        <div className="wrap">
          <Reveal className="sec-head">
            <div>
              <div className="sec-tag">{"// trajectory"}</div>
              <div className="sec-title">Where the work happened</div>
            </div>
            <div className="sec-sub">
              From dashboards and forms to owning frontend architecture across a live AI product suite.
            </div>
          </Reveal>
          <Reveal className="timeline">
            {EXPERIENCE.map((entry) => (
              <div className="tl-company" key={entry.company}>
                <div className="role">{entry.company}</div>
                <div className="meta">{entry.period}</div>
                <div className="tl-roles">
                  {entry.roles.map((role) => (
                    <div className="tl-role" key={role.title}>
                      <div className="tl-role-title">{role.title}</div>
                      <div className="tl-role-meta">
                        {role.period}
                        {role.location ? ` · ${role.location}` : ""}
                      </div>
                      <ul>
                        {role.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="stack">
        <div className="wrap">
          <Reveal className="sec-head">
            <div>
              <div className="sec-tag">{"// toolkit"}</div>
              <div className="sec-title">What it&apos;s built with</div>
            </div>
            <div className="sec-sub">Consistent stack across every product in the suite.</div>
          </Reveal>
          <Reveal className="stack-grid">
            {TECH_STACK.map((tech) => (
              <div className="stack-item" key={tech}>
                {tech}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
