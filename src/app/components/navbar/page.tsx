

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "aboutsec" },
  { name: "Skills", id: "skillsec" },
  { name: "Projects", id: "projectsec" },
  { name: "Contact", id: "contactsec" },

];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-4 bg-[#0c0c0c]/80 backdrop-blur-md shadow-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wide text-white">
          Javeria
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-400">
          {navLinks.map((item) => (
            <motion.li
              key={item.id}
              whileHover={{ scale: 1.05, color: "#ffffff" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer relative group"
            >
              <a href={`#${item.id}`}>{item.name}</a>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-fuchsia-500 transition-all group-hover:w-full" />
            </motion.li>
          ))}
        </ul>

        {/* Hire Me CTA - Desktop */}
        <a
          href="mailto:javiconnectdev@gmail.com?subject=Hiring%20Opportunity&body=Hello%20Javeria,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you."
          className="hidden md:inline-block px-6 py-2 rounded-full bg-fuchsia-600 text-white text-center font-semibold shadow-md hover:bg-fuchsia-700 transition"
        >
          Hire Me →
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 rounded-md hover:bg-white/10 transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden mt-4"
          >
            <ul className="flex flex-col items-start space-y-4 px-4 text-sm text-gray-300 font-medium">
              {navLinks.map((item) => (
                <li
                  key={item.id}
                  className="w-full py-2 border-b border-white/5 hover:text-white transition"
                  onClick={() => setIsOpen(false)}
                >
                  <a href={`#${item.id}`}>{item.name}</a>
                </li>
              ))}
              <li className="w-full pt-2">
                {/* Hire Me CTA - Mobile */}
                <a
                  href="mailto:javiconnectdev@gmail.com?subject=Hiring%20Opportunity&body=Hello%20Javeria,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you."
                  className="block w-full px-4 py-2 rounded-full bg-fuchsia-600 text-white text-center font-semibold shadow-md hover:bg-fuchsia-700 transition"
                >
                  Hire Me →
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
