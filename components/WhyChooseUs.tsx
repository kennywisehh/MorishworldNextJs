import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { whyChooseUs } from "@/lib/data";

const galleryPhotos = [
  { src: "/images/styled_drinks.jpg", alt: "Styled drinks station", tall: false },
  { src: "/images/trad_catering.jpeg", alt: "Traditional soup and rice", tall: false },
  { src: "/images/small_chops.jpg", alt: "Small chops platter", tall: true },
  { src: "/images/food_tray.jpg", alt: "Full food tray", tall: false },
  { src: "/images/milk_shake.jpg", alt: "Milkshake tray", tall: true },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-surface py-16 sm:py-24 border-y border-line">
      <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl mt-3 mb-6">
            Every Detail, <span className="italic text-gold-dark">Handled</span>
          </h2>
          <ul className="space-y-4 mb-8">
            {whyChooseUs.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 className="text-gold-dark shrink-0 mt-0.5" size={20} />
                <span className="text-ink-soft">{point}</span>
              </li>
            ))}
          </ul>
          <Link href="/about" className="btn-gold">
            Our Story
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {galleryPhotos.map((photo) => (
            <div
              key={photo.src}
              className={`relative overflow-hidden rounded-sm ${
                photo.tall ? "row-span-2 aspect-[1/2]" : "aspect-square"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
