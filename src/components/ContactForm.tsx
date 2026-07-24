"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/lib/data";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = formRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        form,
        EMAILJS_CONFIG.publicKey
      );
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <form ref={formRef} className={`contact-panel reveal ${inView ? "in" : ""}`} onSubmit={handleSubmit}>
      <div className="form-row two">
        <div>
          <label>NAME *</label>
          <input required name="name" placeholder="Your name" />
        </div>
        <div>
          <label>EMAIL *</label>
          <input required type="email" name="email" placeholder="you@email.com" />
        </div>
      </div>
      <div className="form-row">
        <label>SUBJECT</label>
        <input name="subject" placeholder="Project discussion" />
      </div>
      <div className="form-row">
        <label>MESSAGE *</label>
        <textarea required name="message" rows={6} placeholder="Tell me about your project..." />
      </div>
      <button type="submit" className="submit-btn" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send Message →"}
      </button>
      {status === "success" && (
        <p className="form-status success">Message sent ✓ — I&apos;ll get back to you soon.</p>
      )}
      {status === "error" && (
        <p className="form-status error">Something went wrong — please try emailing me directly.</p>
      )}
    </form>
  );
}
