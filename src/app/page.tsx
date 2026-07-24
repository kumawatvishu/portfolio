import Link from "next/link";
import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import SpotlightCanvas from "@/components/SpotlightCanvas";
import Footer from "@/components/Footer";
import { PROFILE, PROJECTS, STATS, CAPABILITIES, SPOTLIGHT, EXPERIENCE, WORK_PREVIEW_TAGS } from "@/lib/data";

const TECH_MARQUEE = ["React.js", "Next.js", "TypeScript", "Nx Monorepo", "Centrifugo", "Ant Design", "Styled Components", "Tailwind CSS"];
const workPreview = PROJECTS.filter((p) => WORK_PREVIEW_TAGS.includes(p.tag));

export default function HomePage() {
  return (
    <>
      <header className="hero">
        <div className="wrap">
          <Reveal className="eyebrow">Frontend Engineer — Real-Time AI Systems</Reveal>
          <Reveal as="h1" className="display">
            Building interfaces that <span className="accent">never miss a beat</span>
          </Reveal>
          <Reveal as="p" className="lede">
            I&apos;m <b>{PROFILE.name}</b>, a frontend engineer who designs and ships the interface layer
            for live AI agent platforms — real-time dashboards, reusable hook architectures, and UI
            that holds up under production traffic, not just in a demo.
          </Reveal>
          <Reveal className="cta-row">
            <Link href="/work" className="btn-primary">
              View selected work →
            </Link>
            <a href={PROFILE.resume} download className="btn-ghost">
              Download résumé ↓
            </a>
          </Reveal>
        </div>
      </header>

      <div className="marquee-strip">
        <div className="marquee-track">
          {[...TECH_MARQUEE, ...TECH_MARQUEE].map((tech, i) => (
            <span key={i}>
              <i>●</i>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="stat-strip">
        {STATS.map((stat) => (
          <Reveal key={stat.label} className="stat">
            <div className="num">
              <StatCounter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
            </div>
            <div className="label">{stat.label}</div>
          </Reveal>
        ))}
      </div>

      <section id="capabilities">
        <div className="wrap">
          <Reveal className="sec-head">
            <div>
              <div className="sec-tag">{"// what I do"}</div>
              <div className="sec-title">Four things I obsess over</div>
            </div>
            <div className="sec-sub">
              Not just &quot;frontend developer&quot; — the specific problems I&apos;ve learned to solve well.
            </div>
          </Reveal>
          <Reveal className="cap-grid">
            {CAPABILITIES.map((cap) => (
              <div className="cap-item" key={cap.title}>
                <div className="cap-num">{cap.tag}</div>
                <h4>{cap.title}</h4>
                <p>{cap.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="spotlight">
        <div className="wrap">
          <Reveal className="sec-head">
            <div>
              <div className="sec-tag">{"// flagship builds"}</div>
              <div className="sec-title">The core products</div>
            </div>
          </Reveal>
          <div className="spotlight-stack">
            {SPOTLIGHT.map((item) => (
              <Reveal className="spotlight" key={item.title}>
                <div className="spotlight-visual">
                  <SpotlightCanvas />
                  <span className="spotlight-badge">● Live in production</span>
                </div>
                <div className="spotlight-content">
                  <div className="sec-tag">{item.badge}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {item.metrics.length > 0 && (
                    <div className="spotlight-metrics">
                      {item.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="n">{m.value}</div>
                          <div className="l">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="chips">
                    {item.chips.map((chip) => (
                      <span className="chip" key={chip}>
                        {chip}
                      </span>
                    ))}
                  </div>
                  <a href={item.url} target="_blank" rel="noopener" className="btn-primary" style={{ width: "fit-content" }}>
                    Open live product ↗
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="work-preview">
        <div className="wrap">
          <Reveal className="sec-head">
            <div>
              <div className="sec-tag">{"// more work"}</div>
              <div className="sec-title">More from the suite</div>
            </div>
            <div className="sec-sub">Seven surfaces total, all sharing one design system underneath.</div>
          </Reveal>
          <div className="grid-work">
            {workPreview.map((project) => (
              <Reveal
                as="a"
                key={project.title}
                className="card"
                href={project.url}
                target="_blank"
                rel="noopener"
              >
                <span className="live-tag">
                  <span className="d" />
                  {project.tag}
                </span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="chips">
                  {project.tech.slice(0, 2).map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="view-all">
            <Link href="/work">View all seven projects →</Link>
          </Reveal>
        </div>
      </section>

      <section className="quote-sec">
        <div className="wrap">
          <Reveal className="sec-tag">{"// how I build"}</Reveal>
          <Reveal as="p" className="pullquote">
            I don&apos;t ship <span className="dim">&quot;it works on my machine.&quot;</span>{" "}
            <span className="accent">Every interface has to hold up</span>{" "}
            <span className="dim">under real traffic, real WebSocket drops, and real edge cases</span> —
            because that&apos;s what a live AI agent platform demands.
          </Reveal>
        </div>
      </section>

      <section id="career">
        <div className="wrap">
          <Reveal className="sec-head">
            <div>
              <div className="sec-tag">{"// career"}</div>
              <div className="sec-title">Where the work happened</div>
            </div>
            <div className="sec-sub">
              <Link href="/work" style={{ color: "var(--cyan)" }}>
                See the full breakdown →
              </Link>
            </div>
          </Reveal>
          <Reveal className="career-strip">
            {EXPERIENCE.map((entry) => (
              <div className="career-item" key={entry.company}>
                <div className="meta">{entry.period}</div>
                <h5>
                  {entry.roles[entry.roles.length - 1].title}, {entry.company}
                </h5>
                <p>{entry.blurb}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="cta">
        <div className="wrap">
          <Reveal className="cta-banner">
            <h3>Have a real-time product to build?</h3>
            <p>Open to frontend / AI-platform roles and freelance builds. I usually reply within a day.</p>
            <Link href="/contact" className="btn-primary" style={{ display: "inline-flex" }}>
              Let&apos;s talk →
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
