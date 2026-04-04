"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center text-white overflow-hidden">
      
      {/* BACKGROUND IMAGE (FIXED) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/LUXURY.avif"
          alt="Luxury Living"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}   // ✅ prevents hydration issues
        transition={{ duration: 0.7, ease: "easeOut" }} // ✅ safe easing
        className="relative z-10 text-center px-6"
      >
        <h2 className="text-4xl md:text-6xl font-serif mb-6">
          Experience Luxury Living
        </h2>

        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Discover a space where comfort meets elegance. Book your visit today and step into your dream home.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition duration-300"
        >
          Book a Visit
        </motion.button>
      </motion.div>
    </section>
  );
}