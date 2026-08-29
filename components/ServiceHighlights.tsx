import Link from "next/link";
import { Users, Cake, Briefcase, Sparkles } from "lucide-react";
import { serviceHighlights } from "@/lib/data";

const icons = {
  rings: Users,
  cake: Cake,
  briefcase: Briefcase,
  sparkles: Sparkles,
};

export default function ServiceHighlights() {
  return (
    <section className="container-page py-16 sm:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {serviceHighlights.map((item) => {
          const Icon = icons[item.icon as keyof typeof icons];
          return (
            <Link
              key={item.title}
              href={item.href}
              className="group border border-line rounded-sm p-7 text-center bg-surface hover:border-gold-dark transition-colors"
            >
              <Icon className="mx-auto mb-4 text-gold-dark" size={28} strokeWidth={1.5} />
              <h3 className="text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-ink-soft mb-4">{item.blurb}</p>
              <span className="text-xs tracking-wide uppercase text-gold-dark font-semibold group-hover:underline">
                View Details
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
