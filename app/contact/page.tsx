import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { contactInfo } from "@/lib/data";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="container-page py-16 sm:py-24">
      <span className="eyebrow">Reach Out</span>
      <h1 className="text-4xl sm:text-5xl mt-3 mb-14 max-w-xl">Contact Us</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
        <a href={`tel:${contactInfo.phone}`} className="border border-line rounded-sm p-7 hover:border-gold-dark transition-colors">
          <Phone className="text-gold-dark mb-4" size={22} />
          <h3 className="mb-1">Call Us</h3>
          <p className="text-sm text-ink-soft">{contactInfo.phone}</p>
        </a>
        <a href={`mailto:${contactInfo.email}`} className="border border-line rounded-sm p-7 hover:border-gold-dark transition-colors">
          <Mail className="text-gold-dark mb-4" size={22} />
          <h3 className="mb-1">Email Us</h3>
          <p className="text-sm text-ink-soft">{contactInfo.email}</p>
        </a>
        <div className="border border-line rounded-sm p-7">
          <MapPin className="text-gold-dark mb-4" size={22} />
          <h3 className="mb-1">Visit Us</h3>
          <p className="text-sm text-ink-soft">{contactInfo.address}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <ContactForm />
        </div>

        <div className="space-y-6">
          <div className="border border-line rounded-sm p-7 bg-surface">
            <h4 className="flex items-center gap-2 mb-4">
              <Clock size={18} className="text-gold-dark" /> Business Hours
            </h4>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li className="flex justify-between"><span>Monday – Friday</span><span>8am – 7pm</span></li>
              <li className="flex justify-between"><span>Saturday</span><span>8am – 8pm</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>10am – 5pm</span></li>
            </ul>
          </div>

          <div className="bg-ink text-white rounded-sm p-7">
            <h4 className="mb-2">Prefer to chat directly?</h4>
            <p className="text-sm text-white/70 mb-5">
              Message us on WhatsApp and we'll respond as soon as possible.
            </p>
            <a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full justify-center"
            >
              Open WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
