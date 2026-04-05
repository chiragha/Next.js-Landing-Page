"use client";

import { motion, easeOut } from "framer-motion";
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

  // Container variant for staggered animation
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // each card appears with 0.2s delay
      },
    },
  };

  // Fade-up variant for individual cards
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };
   

    // Hover effect variant
  const hoverEffect = {
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0px 15px 25px rgba(0,0,0,0.2)",
      transition: { duration: 0.3, ease: easeOut },
    },
  };

  return (
    <section id="features" className="bg-[#d9d2c7] py-20">
      <motion.h2
        className="text-center text-4xl font-serif text-[#7a5a1e]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, ease: easeOut }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Key Features
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 text-center lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10 px-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {features.map((itemData) => {
          const Icon = itemData.icon;

          return (
            <motion.div
              key={itemData.title}
              className="p-6 bg-white text-black rounded-xl shadow flex flex-col items-center justify-center text-center"
              variants={fadeUp}
              whileHover={hoverEffect.hover}
            >
              <Icon className="mb-3 text-[#7a5a1e]" />
                 <p className="font-medium">{itemData.title}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}