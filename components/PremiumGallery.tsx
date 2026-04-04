"use client";

import Image from "next/image";
import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";

const images = [
  { src: "/slider.avif", title: "Modern Living" },
  { src: "/slider2.avif", title: "Luxury Interiors" },
  { src: "/slider3.avif", title: "Open Spaces" },
  { src: "/slider.avif", title: "Elegant Design" },
];

export default function PremiumGallery() {
  const x = useMotionValue(0);

  // 🔥 AUTO SLIDE
  useEffect(() => {
    const controls = animate(x, [-0, -3000], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
    });
    return controls.stop;
  }, [x]);

  return (
    <section id="gallery" className="bg-[#fff] py-24 overflow-hidden">
      
      {/* HEADING */}
      <div className="max-w-7xl mx-auto px-10 mb-16">
        <h2 className="text-6xl font-serif text-[#7a5a1e] mb-2">
          Gallery
        </h2>
        <p className="text-xl font-sans text-black">A New Living Experience</p>
      </div>

      {/* SLIDER */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          drag="x"
          style={{ x }}
          dragConstraints={{ left: -3000, right: 0 }}
          className="flex gap-8 cursor-grab active:cursor-grabbing"
        >
          {[...images, ...images].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative min-w-[70vw] h-[85vh] rounded-2xl overflow-hidden"
            >
              {/* IMAGE */}
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="75vw"
                className="object-cover"
                priority={index === 0}
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/20 hover:bg-black/50 transition duration-500"></div>

              {/* TEXT REVEAL */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-10 left-10 text-white"
              >
                <h3 className="text-3xl font-serif">{item.title}</h3>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}