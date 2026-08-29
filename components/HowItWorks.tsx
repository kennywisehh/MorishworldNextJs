import Image from "next/image";
import { howItWorks } from "@/lib/data";

export default function HowItWorks() {
  return (
    <section className="container-page py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="relative aspect-[4/5] rounded-sm overflow-hidden order-2 lg:order-1">
        <Image
          src="/images/moshkitchen.png"
          alt="Morishworld kitchen in action"
          fill
          className="object-cover"
        />
      </div>

      <div className="order-1 lg:order-2">
        <span className="eyebrow">The Process</span>
        <h2 className="text-3xl sm:text-4xl mt-3 mb-10">How It Works</h2>
        <ol className="space-y-8">
          {howItWorks.map((item) => (
            <li key={item.step} className="flex gap-5">
              <span className="font-display text-2xl text-gold-dark shrink-0 w-10">
                {item.step}
              </span>
              <div>
                <h3 className="text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-ink-soft">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
