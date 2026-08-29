"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, UtensilsCrossed } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur border-b border-line">
      <nav className="container-page flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <UtensilsCrossed className="text-gold-dark" size={22} />
          <span className="font-display text-xl tracking-wide">
            Morish<span className="text-gold-dark">world</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-ink-soft hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/enquiry" className="hidden md:inline-flex btn-gold">
          Book Catering
        </Link>

        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line bg-surface">
          <ul className="container-page py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-base font-medium text-ink-soft"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/enquiry" className="btn-gold w-full justify-center" onClick={() => setOpen(false)}>
                Book Catering
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
