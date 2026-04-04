"use client";

import Image from "next/image";

const images = [
  { src: "/slider.avif", title: "Modern Living" },
  { src: "/slider2.avif", title: "Luxury Interiors" },
  { src: "/slider3.avif", title: "Open Spaces" },
  { src: "/slider.avif", title: "Elegant Design" },
];

export default function PremiumGallery() {
  return (
    <section id="gallery" className="bg-white py-24 overflow-hidden">
      
      {/* HEADING */}
      <div className="max-w-7xl mx-auto px-10 mb-16">
        <h2 className="text-6xl font-serif text-[#7a5a1e] mb-2">
          Gallery
        </h2>
        <p className="text-xl text-black">A New Living Experience</p>
      </div>

      {/* SLIDER */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-8 animate-scroll">
          {[...images, ...images].map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="relative min-w-[70vw] h-[85vh] rounded-2xl overflow-hidden group"
            >
              {/* IMAGE */}
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="70vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={index === 0}
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition duration-500"></div>

              {/* TEXT */}
              <div className="absolute bottom-10 left-10 text-white opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">
                <h3 className="text-3xl font-serif">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}