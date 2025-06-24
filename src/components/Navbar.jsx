import { useState } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#212121] bg-opacity-90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="text-white text-xl sm:text-2xl font-bold hover:text-[#C18B43] transition-colors"
        >
          KISHOR A R
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 lg:space-x-10 text-[#C18B43] text-sm sm:text-base">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="hover:text-white transition-transform transform hover:-translate-y-1"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden md:hidden bg-[#1f1f1f]"
      >
        <div className="flex flex-col px-6 py-4 space-y-4 text-gray-300">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="hover:text-[#C18B43] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
