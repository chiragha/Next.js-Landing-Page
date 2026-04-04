"use client";

import {
  Layers,
  Leaf,
  ShieldCheck,
  Cpu,
  ParkingCircle,
  Mountain,
} from "lucide-react";


export default function Features() {
  const features = [
    { icon: Layers, title: "Modern Design" },
    { icon: Leaf, title: "Green Spaces" },
    { icon: ShieldCheck, title: "Security Systems" },
    { icon: Cpu, title: "Smart Home Integration" },
    { icon: ParkingCircle, title: "Parking Facilities" },
    { icon: Mountain, title: "Scenic Views" },
  ];


  return (
    <section className="bg-[#d9d2c7] py-20">
      <h2 className="text-center text-4xl font-serif text-[#7a5a1e]"
      >
        Key Features
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10 px-6"
      >
        {features.map((itemData, index) => {
          const Icon = itemData.icon;

          return (
            <div className="p-6 bg-white rounded-xl shadow"
            >
              <Icon className="mb-3 text-[#7a5a1e]" />
              <p>{itemData.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}