"use client";

import { motion, easeOut, easeInOut } from "framer-motion";
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
  // Container for staggered animation
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Card animation
  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
    hover: {
      scale: 1.06,
      y: -7,
      boxShadow: "0px 20px 35px rgba(0,0,0,0.25)",
      transition: { duration: 0.35, ease: easeOut },
    },
  };

  // Overlay text animation
  const overlayVariant = {
    hover: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: easeOut },
    },
  };

  // Icon animation
  const iconVariant = {
    hover: {
      rotate: [0, 10, -10, 0],
      transition: { duration: 0.5, ease: easeInOut },
    },
  };

  return (
    <section id="amenities" className="bg-[#d9d2c7] py-24">
      {/* HEADING */}
      <motion.div
        className="max-w-7xl mx-auto px-10 mb-16 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: easeOut }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-5xl font-serif text-[#7a5a1e]">Amenities</h2>
      </motion.div>

      {/* GRID */}
      <motion.div
        className="max-w-7xl mx-auto px-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {amenities.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              className="relative h-[220px] rounded-2xl overflow-hidden cursor-pointer"
              variants={cardVariant}
              whileHover="hover"
            >
              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <motion.div
                className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white"
                variants={overlayVariant}
              >
                <motion.div
                  className="mb-2 bg-white/60 p-3 rounded-full text-[#7a5a1e]"
                  variants={iconVariant}
                >
                  <Icon size={28} />
                </motion.div>

                <p className="text-sm sm:text-base text-center px-2">
                  {item.title}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}