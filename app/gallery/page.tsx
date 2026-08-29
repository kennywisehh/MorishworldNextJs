import Image from "next/image";

const photos = [
  { src: "/images/wedding_recep.jpg", alt: "Wedding reception", tall: true },
  { src: "/images/trad_catering.jpeg", alt: "Traditional soup spread" },
  { src: "/images/wedding_catering.jpg", alt: "Buffet setup" },
  { src: "/images/gala_dinner.jpg", alt: "Corporate gala dinner", tall: true },
  { src: "/images/milk_shake.jpg", alt: "Milkshake tray" },
  { src: "/images/small_chops.jpg", alt: "Small chops platter" },
  { src: "/images/Milky_doughnuts.jpg", alt: "Milky doughnuts" },
  { src: "/images/styled_drinks.jpg", alt: "Styled drinks station", tall: true },
  { src: "/images/table_decor.jpg", alt: "Reception table decor" },
  { src: "/images/food_tray.jpg", alt: "Full food tray" },
];

export default function GalleryPage() {
  return (
    <div className="container-page py-16 sm:py-24">
      <span className="eyebrow">Our Work</span>
      <h1 className="text-4xl sm:text-5xl mt-3 mb-14 max-w-xl">Gallery</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((p) => (
          <div
            key={p.src}
            className={`relative overflow-hidden rounded-sm ${p.tall ? "row-span-2 aspect-[1/2]" : "aspect-square"}`}
          >
            <Image src={p.src} alt={p.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
}
