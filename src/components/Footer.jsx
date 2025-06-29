import { FaGithub, FaLinkedin, FaHeart, FaHome, FaUser, FaCode, FaEnvelope, FaMobile } from "react-icons/fa";
import { motion } from "framer-motion";
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <FaUser /> },
    { name: "Projects", href: "#projects", icon: <FaCode /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> }
  ];

  const socialLinks = [
    { name: "GitHub", href: "http://github.com/kishor-tkd", icon: <FaGithub /> },
    { name: "LinkedIn", href: "https://linkedin.com/in/arkishor", icon: <FaLinkedin /> },
    { name: "Twitter", href: "https://x.com/kishor__tkd", icon: <FaXTwitter /> },
    { name: "Instagram", href: "#", icon: <GrInstagram /> }
    
  ];

  return (
    <footer className="bg-[#212121] text-[#FFFFF0] py-12 border-t border-[#C18B43]/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 text-[#C18B43] border-b border-[#C18B43]/30 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-3 text-[#FFFFF0]/80 hover:text-[#C18B43] transition-colors"
                  >
                    <span className="text-[#C18B43]">{link.icon}</span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Branding Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[#FFFFF0] to-[#C18B43] bg-clip-text text-transparent">
              MyPortfolio
            </h3>
            <p className="text-sm text-[#FFFFF0]/80 mb-4">
              Crafting exceptional digital experiences with passion and precision.
            </p>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                  className="bg-[#C18B43]/10 p-3 rounded-full border border-[#C18B43]/30 text-[#FFFFF0] hover:text-[#C18B43] hover:bg-[#C18B43]/20 transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 text-[#C18B43] border-b border-[#C18B43]/30 pb-2">
              Contact Info
            </h3>
            <ul className="space-y-3 text-[#FFFFF0]/80">
              <a href="mailto:arkishortkd@outlook.com " className="flex items-center gap-3">
                <span className="text-[#C18B43]">
                  <FaEnvelope />
                </span>
                arkishortkd@outlook.com 
              </a>
              <li className="flex items-center gap-3">
                <span className="text-[#C18B43]">
                  <FaHome />
                </span>
                Chennai , IND
              </li>
              <a href="tel:+91 9884923998" className="flex items-center gap-3">
                <span className="text-[#C18B43]">
                  <FaMobile />
                </span>
                +91 9884923998 
              </a>
            </ul>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-6 border-t border-[#C18B43]/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-[#FFFFF0]/60 text-center">
            &copy; {new Date().getFullYear()} Kishor A R. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-[#FFFFF0]/60">
            <span>Made with  </span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-[#C18B43]"
            >
              <FaHeart size={14} />
            </motion.span>
            <p>by KISHOR A R</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}