import { services } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="container-page py-16 sm:py-24">
      <span className="eyebrow">What We Offer</span>
      <h1 className="text-4xl sm:text-5xl mt-3 mb-14 max-w-xl">Our Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.id} id={s.id} className="border border-line rounded-sm p-7 bg-surface">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl">{s.title}</h3>
              <span className="text-xs text-gold-dark font-semibold">{s.price}</span>
            </div>
            <p className="text-sm text-ink-soft mb-5">{s.description}</p>
            <ul className="space-y-2 mb-6">
              {s.includes.map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-ink-soft">
                  <CheckCircle2 size={16} className="text-gold-dark shrink-0 mt-0.5" />
                  {i}
                </li>
              ))}
            </ul>
            <Link href="/enquiry" className="btn-outline text-sm">
              Request Quote
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
