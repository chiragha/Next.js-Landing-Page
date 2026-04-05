"use client";

import Image from "next/image";
import { motion, easeOut } from "framer-motion";

export default function CTA() {
  // Variants for staggered fade-up
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  const buttonHover = {
    hover: { scale: 1.05, transition: { duration: 0.3, ease: easeOut } },
  };

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
        className="relative z-10 text-center px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        <motion.h2
          className="text-4xl md:text-6xl font-serif mb-6"
          variants={fadeUp}
        >
          Experience Luxury Living
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          variants={fadeUp}
        >
          Discover a space where comfort meets elegance. Book your visit today and step into your dream home.
        </motion.p>

        <motion.button
          className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition duration-300"
          variants={fadeUp}
          whileHover={buttonHover.hover}
        >
          Book a Visit
        </motion.button>
      </motion.div>
    </section>
  );
}