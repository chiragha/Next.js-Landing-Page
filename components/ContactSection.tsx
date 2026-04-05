"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { motion, easeOut } from "framer-motion";

export default function ContactSection() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
  };

  const buttonHover = {
    hover: { scale: 1.05, transition: { duration: 0.3, ease: easeOut } },
  };

  return (
    <section
      id="contact"
      className="relative bg-[#e9ddcf] text-white py-16 sm:py-20 px-4 sm:px-6 md:px-20 overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-[#7a5c2e]/80 blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 w-72 sm:w-96 h-72 sm:h-96 bg-[#7a5c2e]/50 blur-[120px]" />
      </div>

      {/* HEADER */}
      <motion.div
        className="text-center mb-12 sm:mb-16 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
      >
        <motion.h2
          className="font-medium text-2xl sm:text-3xl md:text-5xl text-[#7a5c2e] font-serif mb-4"
          variants={fadeUp}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="text-black text-sm sm:text-base md:text-lg font-sans max-w-xl mx-auto"
          variants={fadeUp}
        >
          Have questions or want to schedule a visit? Fill out the form and our team will get back to you shortly.
        </motion.p>
      </motion.div>

      {/* CONTENT GRID */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 relative z-10 max-w-7xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* LEFT INFO */}
        <motion.div className="space-y-6 sm:space-y-8" variants={container}>
          {[
            { icon: Mail, title: "Email", value: "info@luxuryhomes.com" },
            { icon: Phone, title: "Phone", value: "+91 12345678" },
            { icon: MapPin, title: "Location", value: "Mumbai, India" },
          ].map((item, idx) => (
            <motion.div key={idx} className="flex items-start gap-4" variants={fadeUp}>
              <item.icon className="text-[#7a5c2e]" />
              <div>
                <h4 className="font-semibold text-black">{item.title}</h4>
                <p className="text-black font-medium">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          className="bg-white/50 hover:shadow-[0_0_40px_rgba(122,92,46,0.3)] backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6"
          variants={fadeUp}
        >
          {/* NAME */}
          <div className="relative">
            <input
              type="text"
              required
              className="peer w-full bg-transparent border-b border-gray-500 text-black focus:border-[#7a5c2e] outline-none py-2"
            />
            <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all 
              peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#7a5c2e] 
              peer-valid:-top-3 peer-valid:text-xs"
            >
              Your Name
            </label>
          </div>

          {/* EMAIL */}
          <div className="relative">
            <input
              type="email"
              required
              className="peer w-full bg-transparent border-b border-gray-500 text-black focus:border-[#7a5c2e] outline-none py-2"
            />
            <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all 
              peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#7a5c2e] 
              peer-valid:-top-3 peer-valid:text-xs"
            >
              Email Address
            </label>
          </div>

          {/* MESSAGE */}
          <div className="relative">
            <textarea
              rows={4}
              required
              className="peer w-full bg-transparent border-b border-gray-500 text-black focus:border-[#7a5c2e] outline-none py-2 resize-none"
            />
            <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all 
              peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#7a5c2e] 
              peer-valid:-top-3 peer-valid:text-xs"
            >
              Your Message
            </label>
          </div>

          {/* BUTTON */}
          <motion.button
            type="submit"
            className="w-full py-3 rounded-full bg-[#7a5c2e] hover:bg-[#5c4421] transition duration-300"
            whileHover={buttonHover.hover}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}