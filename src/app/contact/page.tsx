import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { PROFILE } from "@/lib/data";

export const metadata: Metadata = {
  title: `Contact — ${PROFILE.name}`,
};

export default function ContactPage() {
  return (
    <>
      <header className="contact-hero">
        <div className="wrap">
          <Reveal className="eyebrow">Let&apos;s talk</Reveal>
          <Reveal as="h1" className="contact-title">
            Have a real-time product to build? <span className="accent">Let&apos;s ship it.</span>
          </Reveal>
          <Reveal as="p" className="contact-lede">
            Open to frontend / AI-platform roles and freelance builds. Fastest way to reach me is
            email — I usually reply within a day.
          </Reveal>
        </div>
      </header>

      <div className="wrap">
        <div className="contact-grid">
          <Reveal className="contact-panel">
            <p className="contact-note">
              Prefer email or phone? Reach out directly — or use the form and I&apos;ll get back to
              you as soon as I can.
            </p>
            <a href={`mailto:${PROFILE.email}`} className="info-row">
              <span className="info-icon">✉</span>
              <span>
                <span className="info-label">EMAIL</span>
                <span className="info-value">{PROFILE.email}</span>
              </span>
            </a>
            <a href={`tel:${PROFILE.phone.replace(/\s+/g, "")}`} className="info-row">
              <span className="info-icon">☎</span>
              <span>
                <span className="info-label">PHONE</span>
                <span className="info-value">{PROFILE.phone}</span>
              </span>
            </a>
            <div className="info-row" style={{ cursor: "default" }}>
              <span className="info-icon">⚲</span>
              <span>
                <span className="info-label">LOCATION</span>
                <span className="info-value">{PROFILE.location}</span>
              </span>
            </div>
            <div className="social-row">
              <a href={PROFILE.github} target="_blank" rel="noopener" className="social-btn">
                GH
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener" className="social-btn">
                in
              </a>
            </div>
          </Reveal>

          <ContactForm />
        </div>
      </div>

      <Footer style={{ marginTop: 100 }} />
    </>
  );
}
