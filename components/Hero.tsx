"use client";

import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const [open, setOpen] = useState(false);

  // PARALLAX
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        setOpen(false);
      }, 300);
    }
  };

  return (
    <section className="relative bg-[#d9d2c7] text-black min-h-[120vh]">
      
      {/* NAVBAR */}
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

      {/* HERO */}
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
            This is a space to welcome visitors to the site.
          </p>

          <button className="bg-[#7a5a1e] cursor-pointer text-white px-6 py-3 rounded-full">
            Choose Your Home
          </button>
        </div>

        {/* RIGHT IMAGE (PARALLAX APPLIED) */}
        <motion.div
          style={{ y, scale }} // ✅ NOW USED
          className="relative h-[80vh]"
        >
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
        </motion.div>
      </div>

      {/* MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4, ease: "easeOut" as const}} // ✅ FIXED
            className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-50"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-3xl cursor-pointer"
            >
              ✕
            </button>

            <ul className="space-y-8 text-4xl font-semibold text-center">
              {[
                "home",
                "about",
                "features",
                "gallery",
                "amenities",
                "type-a",
                "contact",
              ].map((item) => (
                <li
                  key={item}
                  onClick={() => handleScroll(item)}
                  className="cursor-pointer hover:text-gray-400 capitalize"
                >
                  {item.replace("-", " ")}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}