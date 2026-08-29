"use client";

import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { contactInfo } from "@/lib/data";

const subjects = [
  "General Inquiry",
  "Event Catering",
  "Wedding Catering",
  "Corporate Events",
  "Custom Cakes",
  "Dessert Bars",
  "Pricing & Quotes",
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function validate() {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "Please enter a valid email.";
    if (!form.subject) next.subject = "Please select a subject.";
    if (!form.message.trim()) next.message = "Please enter a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleWhatsApp() {
    if (!validate()) return;
    const lines = [
      `Hello Morishworld! 👋`,
      ``,
      `*Name:* ${form.name}`,
      `*Email:* ${form.email}`,
      form.phone ? `*Phone:* ${form.phone}` : null,
      `*Subject:* ${form.subject}`,
      ``,
      `*Message:*`,
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(lines)}`,
      "_blank"
    );
    setSent(true);
  }

  function handleEmail() {
    // Placeholder: opens the user's mail client via mailto for now.
    // TODO: swap for a real email service (e.g. Formspree/Resend) later.
    if (!validate()) return;
    const subject = encodeURIComponent(`[Morishworld] ${form.subject} — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line rounded-sm p-8 bg-cream text-center">
        <h3 className="text-xl mb-2">Message ready to send!</h3>
        <p className="text-sm text-ink-soft mb-6">
          Complete sending it in the window that opened. We'll get back to
          you within 24 hours.
        </p>
        <button onClick={() => { setSent(false); setForm(initialState); }} className="btn-outline text-sm">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="border border-line rounded-sm p-7 sm:p-8 bg-surface">
      <h3 className="text-xl mb-1">Send Us a Message</h3>
      <p className="text-sm text-ink-soft mb-6">
        Fill in the form and choose how you'd like to send it.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm mb-1.5" htmlFor="cf-name">
            Full Name <span className="text-gold-dark">*</span>
          </label>
          <input
            id="cf-name"
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your full name"
            className="w-full border border-line rounded-sm px-4 py-2.5 text-sm outline-none focus:border-gold-dark bg-cream"
          />
          {errors.name && <p className="text-xs text-red-700 mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm mb-1.5" htmlFor="cf-email">
            Email Address <span className="text-gold-dark">*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@email.com"
            className="w-full border border-line rounded-sm px-4 py-2.5 text-sm outline-none focus:border-gold-dark bg-cream"
          />
          {errors.email && <p className="text-xs text-red-700 mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm mb-1.5" htmlFor="cf-phone">
            Phone / WhatsApp
          </label>
          <input
            id="cf-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="080XXXXXXXX"
            className="w-full border border-line rounded-sm px-4 py-2.5 text-sm outline-none focus:border-gold-dark bg-cream"
          />
        </div>
        <div>
          <label className="block text-sm mb-1.5" htmlFor="cf-subject">
            Subject <span className="text-gold-dark">*</span>
          </label>
          <select
            id="cf-subject"
            value={form.subject}
            onChange={(e) => update("subject", e.target.value)}
            className="w-full border border-line rounded-sm px-4 py-2.5 text-sm outline-none focus:border-gold-dark bg-cream"
          >
            <option value="">Select a topic</option>
            {subjects.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.subject && <p className="text-xs text-red-700 mt-1">{errors.subject}</p>}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm mb-1.5" htmlFor="cf-message">
          Message <span className="text-gold-dark">*</span>
        </label>
        <textarea
          id="cf-message"
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us about your event — date, location, guest count, and any special requirements..."
          className="w-full border border-line rounded-sm px-4 py-2.5 text-sm outline-none focus:border-gold-dark bg-cream resize-none"
        />
        {errors.message && <p className="text-xs text-red-700 mt-1">{errors.message}</p>}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={handleWhatsApp}
          className="btn-gold justify-center flex-1"
        >
          <MessageCircle size={17} /> Send via WhatsApp
        </button>
        <button
          type="button"
          onClick={handleEmail}
          className="btn-outline justify-center flex-1"
        >
          <Send size={16} /> Send via Email
        </button>
      </div>
    </div>
  );
}
