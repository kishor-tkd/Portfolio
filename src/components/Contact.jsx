// components/Contact.jsx
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { MdEmail, MdPerson, MdMessage } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";


export default function Contact() {
  return (
    <section 
      id="contact" 
      className="min-h-screen bg-[#FFFFF0] px-4 sm:px-10 py-20 flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-4xl md:text-6xl font-bold text-[#212121] mb-2">
            Contact <span className="bg-[#C18b43] bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-[#C18b43] mx-auto mt-4 rounded-full" />
          <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#212121] to-[#C18b43] bg-clip-text text-transparent">
            Let's Build Something Amazing Together
          </h3>
        </motion.div>

        {/* Contact Form and Info */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 w-full lg:w-1/2"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative">
              <MdPerson className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#C18B43] text-xl" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full pl-10 pr-4 py-3 rounded-lg border-2 bg-[#212121]/90 text-[#FFFFF0] border-[#C18B43]/50 focus:border-[#C18B43] focus:ring-2 focus:ring-[#C18B43]/30 transition-all"
                required
                aria-label="Your name"
              />
            </div>

            <div className="relative">
              <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#C18B43] text-xl" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full pl-10 pr-4 py-3 rounded-lg border-2 bg-[#212121]/90 text-[#FFFFF0] border-[#C18B43]/50 focus:border-[#C18B43] focus:ring-2 focus:ring-[#C18B43]/30 transition-all"
                required
                aria-label="Your email"
              />
            </div>

            <div className="relative">
              <MdMessage className="absolute left-3 top-4 text-[#C18B43] text-xl" />
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full pl-10 pr-4 py-3 rounded-lg border-2 bg-[#212121]/90 text-[#FFFFF0] border-[#C18B43]/50 focus:border-[#C18B43] focus:ring-2 focus:ring-[#C18B43]/30 transition-all"
                rows={5}
                required
                aria-label="Your message"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#C18B43] to-[#77461f] text-[#FFFFF0] font-medium py-3 px-6 rounded-lg w-full hover:shadow-lg hover:shadow-[#C18B43]/30 transition-all"
            >
              <FaPaperPlane />
              Send Message
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <div className="bg-[#212121]/90 p-8 rounded-lg border-2 border-[#C18B43]">
              <h3 className="text-2xl font-bold text-[#FFFFF0] mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <p className="text-[#FFFFF0]/80">
                  Have a project in mind or want to discuss potential opportunities? 
                  Feel free to reach out through the form or connect with me on social media.
                </p>
                
                <div className="flex flex-col space-y-2">
                  <a href="mailto:arkishortkd@outlook.com" className="text-[#C18B43] hover:underline flex items-center gap-2">
                    <MdEmail /> arkishortkd@outlook.com
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-[#FFFFF0] mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ y: -3 }}
                    href="http://github.com/kishor-tkd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#C18B43] p-3 rounded-full text-[#212121] hover:bg-[#C17B43] transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3 }}
                    href="https://linkedin.com/in/arkishor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#C18B43] p-3 rounded-full text-[#212121] hover:bg-[#C17B43] transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3 }}
                    href="https://x.com/kishor__tkd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#C18B43] p-3 rounded-full text-[#212121] hover:bg-[#C17B43] transition-colors"
                    aria-label="LinkedIn Profile"
                    >
                    <FaXTwitter size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3 }}
                    href="https://www.instagram.com/kishor__tkd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#C18B43] p-3 rounded-full text-[#212121] hover:bg-[#C17B43] transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <GrInstagram size={20} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}