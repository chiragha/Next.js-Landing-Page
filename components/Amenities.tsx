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
import { motion } from "framer-motion";

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
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="amenities" className="relative bg-[#d9d2c7] py-24">
      {/* HEADING */}
      <div className="max-w-7xl mx-auto px-10 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-serif text-[#7a5a1e] mb-3"
        >
          Amenities
        </motion.h2>
        <p className="text-lg text-black">
          Designed for comfort, convenience, and luxury living
        </p>
      </div>

      {/* GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10"
      >
        {amenities.map((itemData, index) => {
          const Icon = itemData.icon;

          return (
            <motion.div
              key={index}
              variants={item}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="group relative h-[220px] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* BACKGROUND IMAGE */}
              <motion.div
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.1 },
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={itemData.img}
                  alt={itemData.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* DARK OVERLAY */}
              <motion.div
                variants={{
                  rest: { backgroundColor: "rgba(0,0,0,0.3)" },
                  hover: { backgroundColor: "rgba(0,0,0,0.55)" },
                }}
                className="absolute inset-0"
              />

              {/* CONTENT */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                <motion.div
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.2 },
                  }}
                  className="mb-3 bg-white/60 p-3 rounded-full text-[#f30fd5] font-extrabold text-2xl"
                >
                  <Icon size={42} strokeWidth={1.5} />
                </motion.div>

                <p className="text-lg font-medium text-center px-2">
                  {itemData.title}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
