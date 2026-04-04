"use client";

import {
  Layers,
  Leaf,
  ShieldCheck,
  Cpu,
  ParkingCircle,
  Mountain,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Features() {
  const features = [
    { icon: Layers, title: "Modern Design" },
    { icon: Leaf, title: "Green Spaces" },
    { icon: ShieldCheck, title: "Security Systems" },
    { icon: Cpu, title: "Smart Home Integration" },
    { icon: ParkingCircle, title: "Parking Facilities" },
    { icon: Mountain, title: "Scenic Views" },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="features"
      className="relative bg-[#d9d2c7] text-black py-16 sm:py-20 md:py-28"
    >
      {/* 🔥 HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center font-serif text-[#7a5a1e] mb-12 md:mb-16
        text-2xl sm:text-3xl md:text-5xl"
      >
        Key Features
      </motion.h2>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
        >
          {features.map((itemData, index) => {
            const Icon = itemData.icon;

            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative p-6 sm:p-7 md:p-8 rounded-2xl
                bg-white/40 backdrop-blur-md border border-white/30
                shadow-md hover:shadow-xl transition duration-300
                cursor-pointer overflow-hidden"
              >
                {/* 🔥 Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#7a5a1e]/10 to-transparent"></div>

                {/* ICON */}
                <Icon
                  size={22}
                  className="text-[#7a5a1e]  group-hover:text-white transition"
                />
                {/* TITLE */}
                <p className="text-sm sm:text-base md:text-lg font-medium text-center sm:text-left">
                  {itemData.title}
                </p>

                {/* 🔥 Bottom Line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#7a5a1e] group-hover:w-full transition-all duration-500"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
