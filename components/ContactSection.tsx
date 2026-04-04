"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
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
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12 sm:mb-16 relative z-10"
      >
        <h2 className="font-medium text-2xl sm:text-3xl md:text-5xl text-[#7a5c2e] font-serif mb-4">
          Get In Touch
        </h2>
        <p className="text-black text-sm sm:text-base md:text-lg font-sans max-w-xl mx-auto">
          Have questions or want to schedule a visit? Fill out the form and our team will get back to you shortly.
        </p>
      </motion.div>

      {/* CONTENT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 relative z-10 max-w-7xl mx-auto">

        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 sm:space-y-8"
        >
          <div className="flex items-start gap-4">
            <Mail className="text-[#7a5c2e]" />
            <div>
              <h4 className="font-semibold text-black">Email</h4>
              <p className="text-black font-medium">info@luxuryhomes.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="text-[#7a5c2e]" />
            <div>
              <h4 className="font-semibold text-black">Phone</h4>
              <p className="text-black font-medium">+91 12345678</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="text-[#7a5c2e]" />
            <div>
              <h4 className="font-semibold text-black">Location</h4>
              <p className="text-black font-medium">Mumbai, India</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/50 hover:shadow-[0_0_40px_rgba(122,92,46,0.3)]
          backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6"
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 rounded-full bg-[#7a5c2e] hover:bg-[#5c4421] transition duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}