import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[480px] w-full">
      <Image
        src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1600&q=80"
        alt="Catering spread laid out for a private event"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/50" />

      <div className="relative h-full container-page flex flex-col items-center justify-center text-center text-white gap-6">
        <span className="eyebrow text-gold">Port Harcourt Catering & Confectionery</span>
        <h1 className="text-4xl sm:text-6xl leading-tight max-w-2xl">
          Book Catering for Your Next Occasion
        </h1>
        <p className="max-w-md text-white/85">
          Fresh, same-day cooking and full-service catering for weddings,
          corporate events, and private dinners.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Link href="/enquiry" className="btn-gold">
            Book Your Event
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-white/50 hover:border-white text-white transition-colors px-6 py-3 rounded-sm font-medium"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
