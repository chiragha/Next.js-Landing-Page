"use client";

import {
  Dumbbell,
  Waves,
  Trees,
  Wifi,
  Car,
  ShieldCheck,
  Coffee,
  Building2,
} from "lucide-react";

const amenities = [
  { icon: Dumbbell, title: "Fitness Center", img: "/gym.avif" },
  { icon: Waves, title: "Swimming Pool", img: "/pool.avif" },
  { icon: Trees, title: "Gardens", img: "/garden.avif" },
  { icon: Wifi, title: "High-Speed WiFi", img: "/wifi.avif" },
  { icon: Car, title: "Parking Area", img: "/parking.avif" },
  { icon: ShieldCheck, title: "24/7 Security", img: "/security.avif" },
  { icon: Coffee, title: "Cafeteria", img: "/cafe.avif" },
  { icon: Building2, title: "Club House", img: "/club.avif" },
];

export default function Amenities() {
  return (
    <section id="amenities" className="bg-[#d9d2c7] py-24">
      {/* HEADING */}
      <div className="max-w-7xl mx-auto px-10 mb-16">
        <h2 className="text-5xl font-serif text-[#7a5a1e]">Amenities</h2>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {amenities.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title} // ✅ FIX
              className="relative h-[220px] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
                <div className="mb-2 bg-white/60 p-3 rounded-full text-[#7a5a1e]">
                  <Icon size={28} />
                </div>

                <p className="text-sm sm:text-base text-center px-2">
                  {item.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
