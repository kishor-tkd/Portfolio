import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { GrInstagram } from "react-icons/gr";

export default function Home() {
  const socialLinks = [
    { icon: <FaGithub size={24} />, url: "http://github.com/kishor-tkd" },
    { icon: <FaLinkedin size={24} />, url: "https://linkedin.com/in/arkishor" },
    { icon: <FaXTwitter size={24} />, url: "https://x.com/kishor__tkd" },
    { icon: <GrInstagram size={24} />, url: "https://www.instagram.com/kishor__tkd" },
    { icon: <PiMicrosoftOutlookLogoFill size={24} />, url: "mailto:arkishortkd@outlook.com" }
  ];

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative h-screen w-full overflow-hidden bg-[#FFFFF0] flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      {/* Floating Background Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => {
          const size = Math.random() * 100 + 50;
          const delay = Math.random() * 5;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                y: [0, -100, -200, -100, 0],
                x: [0, 50, 0, -50, 0],
                opacity: [0.1, 0.3, 0.5, 0.3, 0.1],
              }}
              transition={{
                duration: 15 + Math.random() * 15,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute rounded-full bg-[#C18B43]/10 backdrop-blur-sm"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          );
        })}
      </div>

      {/* Flex Container */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12 px-4 py-10 sm:py-12">
        {/* Left Content */}
        <motion.div className="w-full md:w-1/2 text-center md:text-left">
          <motion.p
            className="text-md sm:text-lg font-medium text-[#C18B43] mb-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#212121] mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Kishor A R
            <motion.span
              className="text-[#C18B43] ml-2"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              .
            </motion.span>
          </motion.h1>

          {/* 👇 Image inserted below name (only shows on small screens) */}
          <div className="block md:hidden my-6">
            <img
              src="/kishor_home.jpeg"
              alt="Kishor Profile"
              className="mx-auto w-40 h-40 sm:w-52 sm:h-52 object-cover rounded-2xl shadow-xl transition-transform duration-300"
            />
          </div>

          {/* Type Animation */}
          <div className="h-16 sm:h-20 md:h-24 lg:h-28 flex items-center justify-center md:justify-start mb-2">
            <TypeAnimation
              sequence={[
                "Full Stack Developer", 1500,
                "React Specialist", 1500,
                "Node.js Expert", 1500,
                "UI/UX Enthusiast", 1500,
                "Problem Solver", 1500,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              className="text-xl sm:text-2xl md:text-3xl text-[#212121] font-medium"
              style={{ lineHeight: '1.2' }}
            />
          </div>

          <motion.p
            className="max-w-xl text-base sm:text-lg text-[#212121]/90 mt-6 mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            I build <span className="text-[#C18B43] font-semibold">exceptional digital experiences</span> that are fast, accessible, and visually stunning. Focused on creating intuitive interfaces with robust functionality.
          </motion.p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 mb-12 sm:mb-16">
            <motion.a
              href="#contact"
              className="relative inline-flex items-center justify-center px-6 sm:px-8 py-3 overflow-hidden text-white bg-[#212121] rounded-lg group transition-all duration-300 hover:shadow-lg hover:shadow-[#C18B43]/30"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#C18B43] rounded-full group-hover:w-64 group-hover:h-64"></span>
              <span className="relative text-sm sm:text-base font-semibold flex items-center gap-2">
                <HiOutlineMail size={18} />
                Contact Me
              </span>
            </motion.a>

            <motion.button
              className="relative inline-flex items-center justify-center px-6 sm:px-8 py-3 overflow-hidden border-2 border-[#212121] text-[#212121] hover:text-white bg-transparent hover:border-transparent rounded-lg group transition-all duration-300 hover:shadow-lg hover:shadow-[#C18B43]/20"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#C18B43] rounded-full group-hover:w-64 group-hover:h-64"></span>
              <a
                href="/kishor_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative text-sm sm:text-base font-semibold flex items-center gap-2">
                  <FiDownload size={18} />
                  My Resume
                </span>
              </a>
            </motion.button>
          </div>

          <motion.div
            className="flex justify-center md:justify-start gap-6 mt-8 sm:mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -5,
                  scale: 1.1,
                  color: "#C18B43"
                }}
                whileTap={{ scale: 0.95 }}
                className="text-[#212121] hover:text-[#C18B43] transition-colors duration-100 p-2 rounded-full hover:bg-[#C18B43]/10"
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side Image (for large screens only) */}
        <motion.div 
          className="hidden md:flex w-full md:w-1/2 justify-center items-center px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.03 }}
        >
          <img 
            src="/kishor_home.jpeg"
            alt="Kishor Profile"
            className="w-40 h-40  sm:w-52 sm:h-52 md:w-64 md:h-64  border-3 border-[#212121] lg:w-80 lg:h-80 xl:w-[22rem] xl:h-[22rem] object-cover rounded-2xl shadow-xl transition-transform duration-300"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
