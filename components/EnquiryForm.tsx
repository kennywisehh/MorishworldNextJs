"use client";

import { useState } from "react";
import { MessageCircle, Send, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { contactInfo } from "@/lib/data";

const eventTypes = ["Wedding", "Birthday", "Corporate", "Naming Ceremony", "House Party", "Other"];
const guestRanges = ["Under 50", "50 – 100", "100 – 200", "200 – 500", "500+"];
const budgetRanges = ["Under ₦100k", "₦100k – ₦300k", "₦300k – ₦500k", "₦500k – ₦1M", "Above ₦1M", "Flexible / Not sure"];
const serviceOptions = ["Traditional Catering", "Buffet Setup", "Custom Cake", "Dessert Bar", "Small Chops", "Drinks & Bar"];

type FormState = {
  eventType: string;
  eventDate: string;
  guestCount: string;
  budget: string;
  location: string;
  services: string[];
  dietary: string;
  notes: string;
  name: string;
  phone: string;
  email: string;
};

const initialState: FormState = {
  eventType: "",
  eventDate: "",
  guestCount: "",
  budget: "",
  location: "",
  services: [],
  dietary: "",
  notes: "",
  name: "",
  phone: "",
  email: "",
};

const steps = ["Event Details", "Menu & Services", "Your Info"];

export default function EnquiryForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function toggleService(service: string) {
    setForm((f) => ({
      ...f,
      services: f.services.includes(service)
        ? f.services.filter((s) => s !== service)
        : [...f.services, service],
    }));
  }

  function validateStep(n: number) {
    const next: Record<string, string> = {};
    if (n === 1) {
      if (!form.eventType) next.eventType = "Please select an event type.";
      if (!form.eventDate) next.eventDate = "Please select a date.";
      if (!form.guestCount) next.guestCount = "Please select guest count.";
      if (!form.location.trim()) next.location = "Please enter the event location.";
    }
    if (n === 2) {
      if (form.services.length === 0) next.services = "Please select at least one service.";
    }
    if (n === 3) {
      if (!form.name.trim()) next.name = "Please enter your name.";
      if (!form.phone.trim()) next.phone = "Please enter your phone number.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = "Please enter a valid email.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function goStep(n: number) {
    if (n > step && !validateStep(step)) return;
    setStep(n);
  }

  function buildMessage() {
    return [
      `Hello Morishworld! 👋`,
      ``,
      `I'd like to request a quote for my event.`,
      ``,
      `📋 *EVENT DETAILS*`,
      `Type: ${form.eventType}`,
      `Date: ${form.eventDate}`,
      `Guests: ${form.guestCount}`,
      `Budget: ${form.budget || "Not specified"}`,
      `Location: ${form.location}`,
      ``,
      `🍽️ *SERVICES NEEDED*`,
      form.services.join(", "),
      ``,
      `⚠️ *DIETARY/SPECIAL NOTES*`,
      form.dietary || "None",
      ``,
      `📝 *ADDITIONAL INFO*`,
      form.notes || "None",
      ``,
      `👤 *MY CONTACT INFO*`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
    ].join("\n");
  }

  function handleWhatsApp() {
    if (!validateStep(3)) return;
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(buildMessage())}`, "_blank");
    setSent(true);
  }

  function handleEmail() {
    // Placeholder: opens the user's mail client via mailto for now.
    // TODO: swap for a real email service (e.g. Formspree/Resend) later.
    if (!validateStep(3)) return;
    const subject = encodeURIComponent(`[Morishworld Enquiry] ${form.eventType} — ${form.name}`);
    const body = encodeURIComponent(buildMessage());
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line rounded-sm p-10 bg-surface text-center">
        <CheckCircle2 className="mx-auto mb-4 text-gold-dark" size={40} />
        <h3 className="text-2xl mb-2">Enquiry Received!</h3>
        <p className="text-sm text-ink-soft mb-6">
          Thank you — complete sending it in the window that opened and we'll
          get back to you within 24 hours.
        </p>
        <button
          onClick={() => { setSent(false); setForm(initialState); setStep(1); }}
          className="btn-outline text-sm"
        >
          Start a new enquiry
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Step indicator */}
      <div className="flex items-center mb-10">
        {steps.map((label, i) => {
          const n = i + 1;
          const active = n === step;
          const done = n < step;
          return (
            <div key={label} className="flex items-center flex-1 last:flex-none">
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 ${
                    done ? "bg-gold-dark text-white" : active ? "bg-ink text-white" : "bg-line text-ink-soft"
                  }`}
                >
                  {done ? <CheckCircle2 size={16} /> : n}
                </div>
                <span className={`text-sm hidden sm:inline ${active ? "text-ink font-medium" : "text-ink-soft"}`}>
                  {label}
                </span>
              </div>
              {n < steps.length && <div className="flex-1 h-px bg-line mx-3" />}
            </div>
          );
        })}
      </div>

      <div className="border border-line rounded-sm p-7 sm:p-9 bg-surface">
        {/* STEP 1 */}
        {step === 1 && (
          <div>
            <h3 className="text-xl mb-1">Tell us about your event</h3>
            <p className="text-sm text-ink-soft mb-6">We need a few details to prepare the right quote.</p>

            <div className="mb-5">
              <label className="block text-sm mb-2">Event Type <span className="text-gold-dark">*</span></label>
              <div className="flex flex-wrap gap-2">
                {eventTypes.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => update("eventType", t)}
                    className={`px-4 py-2 rounded-sm text-sm border transition-colors ${
                      form.eventType === t
                        ? "bg-gold border-gold text-ink"
                        : "border-line hover:border-gold-dark"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              {errors.eventType && <p className="text-xs text-red-700 mt-2">{errors.eventType}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block text-sm mb-1.5" htmlFor="eventDate">Event Date <span className="text-gold-dark">*</span></label>
                <input
                  id="eventDate"
                  type="date"
                  value={form.eventDate}
                  onChange={(e) => update("eventDate", e.target.value)}
                  className="w-full border border-line rounded-sm px-4 py-2.5 text-sm outline-none focus:border-gold-dark bg-cream"
                />
                {errors.eventDate && <p className="text-xs text-red-700 mt-1">{errors.eventDate}</p>}
              </div>
              <div>
                <label className="block text-sm mb-1.5" htmlFor="guestCount">Guest Count <span className="text-gold-dark">*</span></label>
                <select
                  id="guestCount"
                  value={form.guestCount}
                  onChange={(e) => update("guestCount", e.target.value)}
                  className="w-full border border-line rounded-sm px-4 py-2.5 text-sm outline-none focus:border-gold-dark bg-cream"
                >
                  <option value="">Select range</option>
                  {guestRanges.map((g) => <option key={g} value={g}>{g}</option>)}
                </select>
                {errors.guestCount && <p className="text-xs text-red-700 mt-1">{errors.guestCount}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block text-sm mb-1.5" htmlFor="budget">Approximate Budget</label>
                <select
                  id="budget"
                  value={form.budget}
                  onChange={(e) => update("budget", e.target.value)}
                  className="w-full border border-line rounded-sm px-4 py-2.5 text-sm outline-none focus:border-gold-dark bg-cream"
                >
                  <option value="">Select range</option>
                  {budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1.5" htmlFor="location">Event Location <span className="text-gold-dark">*</span></label>
                <input
                  id="location"
                  type="text"
                  value={form.location}
                  onChange={(e) => update("location", e.target.value)}
                  placeholder="e.g. Eliozu, Port Harcourt"
                  className="w-full border border-line rounded-sm px-4 py-2.5 text-sm outline-none focus:border-gold-dark bg-cream"
                />
                {errors.location && <p className="text-xs text-red-700 mt-1">{errors.location}</p>}
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button onClick={() => goStep(2)} className="btn-gold">
                Next: Menu & Services <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div>
            <h3 className="text-xl mb-1">What services do you need?</h3>
            <p className="text-sm text-ink-soft mb-6">Select everything that applies.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
              {serviceOptions.map((s) => {
                const checked = form.services.includes(s);
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => toggleService(s)}
                    className={`text-left px-4 py-3 rounded-sm border text-sm transition-colors ${
                      checked ? "bg-gold/15 border-gold-dark" : "border-line hover:border-gold-dark"
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
            {errors.services && <p className="text-xs text-red-700 mb-4">{errors.services}</p>}

            <div className="mb-5">
              <label className="block text-sm mb-1.5" htmlFor="dietary">Dietary Requirements / Special Notes</label>
              <textarea
                id="dietary"
                rows={3}
                value={form.dietary}
                onChange={(e) => update("dietary", e.target.value)}
                placeholder="e.g. Halal only, no pork, nut allergy, vegan guests..."
                className="w-full border border-line rounded-sm px-4 py-2.5 text-sm outline-none focus:border-gold-dark bg-cream resize-none"
              />
            </div>

            <div className="mb-2">
              <label className="block text-sm mb-1.5" htmlFor="notes">Anything else we should know?</label>
              <textarea
                id="notes"
                rows={3}
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
                placeholder="e.g. Colour theme, service style, specific dishes you love..."
                className="w-full border border-line rounded-sm px-4 py-2.5 text-sm outline-none focus:border-gold-dark bg-cream resize-none"
              />
            </div>

            <div className="flex justify-between pt-4">
              <button onClick={() => goStep(1)} className="btn-outline">
                <ArrowLeft size={16} /> Back
              </button>
              <button onClick={() => goStep(3)} className="btn-gold">
                Next: Your Info <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div>
            <h3 className="text-xl mb-1">How do we reach you?</h3>
            <p className="text-sm text-ink-soft mb-6">Almost done — just your contact details.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm mb-1.5" htmlFor="name">Full Name <span className="text-gold-dark">*</span></label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Your full name"
                  className="w-full border border-line rounded-sm px-4 py-2.5 text-sm outline-none focus:border-gold-dark bg-cream"
                />
                {errors.name && <p className="text-xs text-red-700 mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm mb-1.5" htmlFor="phone">Phone / WhatsApp <span className="text-gold-dark">*</span></label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="080XXXXXXXX"
                  className="w-full border border-line rounded-sm px-4 py-2.5 text-sm outline-none focus:border-gold-dark bg-cream"
                />
                {errors.phone && <p className="text-xs text-red-700 mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm mb-1.5" htmlFor="email">Email Address <span className="text-gold-dark">*</span></label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@email.com"
                className="w-full border border-line rounded-sm px-4 py-2.5 text-sm outline-none focus:border-gold-dark bg-cream"
              />
              {errors.email && <p className="text-xs text-red-700 mt-1">{errors.email}</p>}
            </div>

            {/* Summary */}
            <div className="bg-cream rounded-sm p-5 mb-6 text-sm space-y-1.5">
              <p className="font-medium mb-2">Your Enquiry Summary</p>
              <p><span className="text-ink-soft">Event:</span> {form.eventType || "—"} · {form.eventDate || "—"}</p>
              <p><span className="text-ink-soft">Guests:</span> {form.guestCount || "—"}</p>
              <p><span className="text-ink-soft">Location:</span> {form.location || "—"}</p>
              <p><span className="text-ink-soft">Services:</span> {form.services.join(", ") || "—"}</p>
            </div>

            <div className="flex justify-start mb-6">
              <button onClick={() => goStep(2)} className="btn-outline">
                <ArrowLeft size={16} /> Back
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-line">
              <button onClick={handleWhatsApp} className="btn-gold justify-center flex-1 mt-4">
                <MessageCircle size={17} /> Send via WhatsApp
              </button>
              <button onClick={handleEmail} className="btn-outline justify-center flex-1 mt-4">
                <Send size={16} /> Send via Email
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}