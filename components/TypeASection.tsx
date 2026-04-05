"use client";
import Image from "next/image";
import { motion, easeOut } from "framer-motion";

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
  // Variants
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.25 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
  };

  const imageHover = {
    hover: { scale: 1.05, rotate: 1, transition: { duration: 0.5, ease: easeOut } },
  };

  const buttonHover = {
    hover: { scale: 1.05, transition: { duration: 0.3, ease: easeOut } },
  };

  return (
    <section
      id="type-a"
      className="bg-[#7a5c2e] text-white py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      {/* HEADING */}
      <motion.h2
        className="text-left text-4xl sm:text-5xl md:text-6xl font-serif mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
      >
        Choose Your <br /> Apartment
      </motion.h2>

      {data.map((item, index) => (
        <motion.div
          key={index}
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* IMAGE SECTION */}
          <div className="flex gap-3 sm:gap-4">
            {/* MAIN IMAGE */}
            <motion.div
              className="relative w-[65%] h-[250px] sm:h-[320px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden"
              whileHover="hover"
              variants={imageHover}
            >
              <Image
                src={item.main}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 65vw"
                className="object-cover transition duration-500"
              />
            </motion.div>

            {/* SIDE IMAGE */}
            <motion.div
              className="relative w-[35%] h-[250px] sm:h-[320px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden"
              whileHover="hover"
              variants={imageHover}
            >
              <Image
                src={item.side}
                alt={`${item.title} side`}
                fill
                sizes="(max-width: 768px) 100vw, 35vw"
                className="object-cover transition duration-500"
              />
            </motion.div>
          </div>

          {/* CONTENT */}
          <motion.div className="text-center md:text-left" variants={fadeUp}>
            <motion.h3
              className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 sm:mb-6"
              variants={fadeUp}
            >
              {item.title}
            </motion.h3>

            <motion.p
              className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 text-gray-200"
              variants={fadeUp}
            >
              Explore our range of properties, from luxurious apartments to cozy
              family homes. Find the perfect place that suits your lifestyle and
              needs.
            </motion.p>

            {/* FLOOR PLAN */}
            <motion.div
              className="relative w-full h-[140px] sm:h-[180px] md:h-[200px] mb-6 sm:mb-8"
              variants={fadeUp}
            >
              <Image
                src="/blueprint.avif"
                alt="floor plan"
                fill
                sizes="100vw"
                className="object-contain opacity-80"
              />
            </motion.div>

            {/* BUTTON */}
            <motion.a
              href="/plan.pdf"
              download
              className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full bg-white text-[#7a5c2e] hover:bg-black hover:text-white transition duration-300"
              whileHover={buttonHover.hover}
            >
              Download Plan →
            </motion.a>
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
}