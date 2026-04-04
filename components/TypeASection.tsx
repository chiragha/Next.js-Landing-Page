"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const data = [
  {
    title: "Type A",
    main: "/room1.avif",
    side: "/roomb.avif",
  },
  {
    title: "Type B",
    main: "/roomb.avif",
    side: "/roomc.avif",
  },
  {
    title: "Type C",
    main: "/roomc.avif",
    side: "/roomd.avif",
  },
];

export default function TypeASection() {
  return (
    <section id="#type-a" className="bg-[#7a5c2e] text-white py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
        <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-left text-6xl font-serif text-[#ffffff] mb-16"
      >
        Choose Your<br /> Apartment
      </motion.h2>
      {data.map((item, index) => (
        <div
          key={index}
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12"
        >
            {/* HEADING */}
    
         
          {/* IMAGE SECTION */}
          <div className="flex gap-3 sm:gap-4">
            
            {/* MAIN IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-[65%] h-[250px] sm:h-[320px] md:h-[400px] lg:h-[500px] rounded-lg sm:rounded-xl overflow-hidden"
            >
              <Image
                src={item.main}
                alt={item.title}
                fill
                className="object-cover hover:scale-105 transition duration-500"
              />
            </motion.div>

            {/* SIDE IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-[35%] h-[250px] sm:h-[320px] md:h-[400px] lg:h-[500px] rounded-lg sm:rounded-xl overflow-hidden"
            >
              <Image
                src={item.side}
                alt={item.title}
                fill
                className="object-cover hover:scale-105 transition duration-500"
              />
            </motion.div>
          </div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 sm:mb-6">
              {item.title}
            </h2>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 text-gray-200">
              Explore our range of properties, from luxurious apartments to cozy
              family homes. Find the perfect place that suits your lifestyle and
              needs.
            </p>

            {/* FLOOR PLAN */}
            <div className="relative w-full h-[140px] sm:h-[180px] md:h-[200px] mb-6 sm:mb-8">
              <Image
                src="/blueprint.avif"
                alt="floor plan"
                fill
                className="object-contain opacity-80"
              />
            </div>

            {/* BUTTON */}
            <button className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full bg-white text-[#7a5c2e] hover:bg-black hover:text-white transition duration-300">
              Download Plan →
            </button>
          </motion.div>
        </div>
      ))}
    </section>
  );
}