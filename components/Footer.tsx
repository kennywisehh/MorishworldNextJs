import Link from "next/link";
import { Facebook, Instagram, Phone, Mail, MapPin, UtensilsCrossed } from "lucide-react";
import { navLinks, contactInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="container-page py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <UtensilsCrossed className="text-gold" size={20} />
            <span className="font-display text-lg text-white">
              Morish<span className="text-gold">world</span>
            </span>
          </div>
          <p className="text-sm">
            Premium catering and confectionery, turning meals into memories
            across Port Harcourt.
          </p>
          <div className="flex gap-4 mt-5">
            <a href="https://www.facebook.com/share/184BRNeMf9/?mibextid=wwXIfr" aria-label="Facebook" className="hover:text-gold">
              <Facebook size={18} />
            </a>
            <a href="https://www.instagram.com/morishworld?igsh=YzVhYmZlYmh4NG5z&utm_source=qr" aria-label="Instagram" className="hover:text-gold">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold mb-4 tracking-wide uppercase">
            Navigation
          </h4>
          <ul className="space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold mb-4 tracking-wide uppercase">
            Services
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/services#wedding" className="hover:text-gold">Wedding Catering</Link></li>
            <li><Link href="/services#corporate" className="hover:text-gold">Corporate Events</Link></li>
            <li><Link href="/services#cakes" className="hover:text-gold">Custom Cakes</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold mb-4 tracking-wide uppercase">
            Contact
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={15} /> <a href={`tel:${contactInfo.phone}`} className="hover:text-gold">{contactInfo.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} /> <a href={`mailto:${contactInfo.email}`} className="hover:text-gold">{contactInfo.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={15} /> {contactInfo.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="container-page text-xs text-white/50">
          &copy; {new Date().getFullYear()} Morishworld Catering & Confectionery. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
