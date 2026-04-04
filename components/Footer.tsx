"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f0f0f] text-gray-300 px-6 md:px-20 py-16">
      {/* TOP GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/10 pb-10">
        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-serif text-white mb-4">
            <span className="text-[#7a5a1e] text-3xl">Luxury</span>
            <span className="text-[#dd2525]">homes</span>
          </h2>
          <p className="text-sm text-gray-400">
            Experience premium living spaces crafted with elegance, comfort, and
            modern design.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Properties</li>
            <li className="hover:text-white cursor-pointer">Amenities</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Mumbai, India</li>
            <li>+91 98765 43210</li>
            <li>info@luxuryhomes.com</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-4">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="p-3 rounded-full bg-white/5 hover:bg-[#7a5c2e] transition duration-300 cursor-pointer"
                >
                  <Icon size={18} />
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>
          {year} Luxuryhomes. <br />
          <span className="text-red-700 text-center">
            @chiragha All rights reserved.
          </span>
        </p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-white cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-white cursor-pointer">
            Terms & Conditions
          </span>
        </div>
      </div>
    </footer>
  );
}
