"use client";

import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const [open, setOpen] = useState(false);

  // 🔥 PARALLAX SETUP
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  // 🔥 TILT EFFECT (MOUSE MOVE)
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const yPos = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    rotateY.set((x - midX) / 20);
    rotateX.set(-(yPos - midY) / 20);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      // 👇 delay closing for animation
      setTimeout(() => {
        setOpen(false);
      }, 300); // match animation timing
    }
  };

  return (
    <section className="relative bg-[#d9d2c7] text-black min-h-[120vh]">
      {/* 🔝 NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-6">
        <h1 className="text-2xl font-medium font-serif">
          <span className="text-[#7a5a1e] text-5xl">Luxury</span>
          <span className="text-[#dd2525]">homes</span>
        </h1>

        <button
          onClick={() => setOpen(true)}
          className="flex flex-col gap-2 cursor-pointer"
        >
          <span className="w-8 h-[2px] bg-black"></span>
          <span className="w-8 h-[2px] bg-black"></span>
          <span className="w-8 h-[2px] bg-black"></span>
        </button>

        <button className="border border-black px-5 py-2 rounded-full cursor-pointer">
          Contact Us
        </button>
      </div>

      {/* 🎯 HERO */}
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 items-center min-h-screen px-10 pt-32"
      >
        {/* LEFT */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="text-6xl font-serif text-[#7a5a1e] mb-6">
            The <br /> Filhouse
          </h1>

          <p className="mb-6 max-w-md">
            This is a space to welcome visitors to the site. Grab their
            attention with copy that clearly states what the site is about.
          </p>

          <button className="bg-[#7a5a1e] cursor-pointer text-white px-6 py-3 rounded-full">
            Choose Your Home
          </button>
        </div>

        {/* RIGHT IMAGE (PARALLAX + TILT) */}
        {/* RIGHT IMAGE (FIXED WINDOW EFFECT) */}
        <div className="relative h-[80vh]">
          <div className="sticky top-24 h-[65vh] w-full">
            <div className="relative w-full h-full">
              <Image
                src="/hero.avif"
                alt="hero"
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-50"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-3xl cursor-pointer"
            >
              ✕
            </button>

            <ul className="space-y-8 text-4xl font-semibold text-center">
              <li
                onClick={() => handleScroll("home")}
                className="cursor-pointer hover:text-gray-400"
              >
                Home
              </li>
              <li
                onClick={() => handleScroll("about")}
                className="cursor-pointer hover:text-gray-400"
              >
                About
              </li>
              <li
                onClick={() => handleScroll("features")}
                className="cursor-pointer hover:text-gray-400"
              >
                Features
              </li>
              <li
                onClick={() => handleScroll("gallery")}
                className="cursor-pointer hover:text-gray-400"
              >
                Gallery
              </li>
              <li
                onClick={() => handleScroll("amenities")}
                className="cursor-pointer hover:text-gray-400"
              >
                Amenities
              </li>
              <li
                onClick={() => handleScroll("type-a")}
                className="cursor-pointer hover:text-gray-400"
              >
                Choose Your Apartment
              </li>
              <li
                onClick={() => handleScroll("contact")}
                className="cursor-pointer hover:text-gray-400"
              >
                Contact
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
