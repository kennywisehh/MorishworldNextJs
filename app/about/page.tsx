import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container-page py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
          <Image
            src="/images/morishteam.png"
            alt="The Morishworld team"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <span className="eyebrow">Our Story</span>
          <h1 className="text-4xl sm:text-5xl mt-3 mb-6">A Kitchen, A Dream, A Legacy</h1>
          <p className="text-ink-soft mb-4">
            Morishworld began in a home kitchen in Port Harcourt with a simple
            belief: Nigerian food, prepared with intention, rivals any cuisine
            in the world.
          </p>
          <p className="text-ink-soft">
            Today we're trusted by families, corporate teams, and event
            planners across Port Harcourt for catering that's always fresh,
            always professional, and always unforgettable.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/5] rounded-sm overflow-hidden order-2 lg:order-1">
          <Image
            src="/images/morishbio.png"
            alt="Chef Biobele, Founder of Morishworld"
            fill
            className="object-cover"
          />
        </div>
        <div className="order-1 lg:order-2">
          <span className="eyebrow">The Visionary</span>
          <h2 className="text-3xl sm:text-4xl mt-3 mb-6">Meet Chef Biobele</h2>
          <p className="text-ink-soft mb-4">
            With over 8 years of hands-on experience in Nigerian and
            continental cuisine, Chef Biobele is the heart behind every plate
            that leaves the Morishworld kitchen.
          </p>
          <p className="text-ink-soft">
            Under her leadership, Morishworld has grown from a one-person home
            kitchen into one of Port Harcourt's most trusted catering brands.
          </p>
        </div>
      </div>
    </div>
  );
}