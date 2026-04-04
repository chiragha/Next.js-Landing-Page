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

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };


const item: Variants = {
  rest: {
    opacity: 0,
    y: 20,
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

  return (
    <section className="bg-[#d9d2c7] py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-4xl font-serif text-[#7a5a1e]"
      >
        Key Features
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10 px-6"
      >
        {features.map((itemData, index) => {
          const Icon = itemData.icon;

          return (
            <motion.div
              key={index}
              variants={item}
              className="p-6 bg-white rounded-xl shadow"
            >
              <Icon className="mb-3 text-[#7a5a1e]" />
              <p>{itemData.title}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}