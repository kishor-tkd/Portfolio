// src/components/About.jsx
import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaMobileAlt } from "react-icons/fa";
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";

export default function About() {
  const skills = [
    { icon: <SiJavascript className="w-full h-full" />, name: "JavaScript", level: 95 },
    { icon: <SiReact className="w-full h-full" />, name: "React", level: 90 },
    { icon: <SiNodedotjs className="w-full h-full" />, name: "Node.js", level: 85 },
    { icon: <SiMongodb className="w-full h-full" />, name: "MongoDB", level: 80 },
  ];

  const experience = [
    {
      year: "2021-Present",
      role: "Senior MERN Developer",
      company: "Tech Innovations Inc.",
      description: "Leading team to build scalable web applications with React, Node.js, and MongoDB.",
    },
    {
      year: "2018-2021",
      role: "Full Stack Developer",
      company: "Digital Solutions Co.",
      description: "Developed and maintained multiple client projects using the MERN stack.",
    },
    {
      year: "2016-2018",
      role: "Frontend Developer",
      company: "Web Creators LLC",
      description: "Implemented responsive UIs and collaborated with backend teams.",
    },
  ];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-[#212121]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#FFFFF0] mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-[#C18B43] via-[#C18B43] to-[#FFFFF0] bg-clip-text text-transparent"> 
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-[#C18B43]  mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-[#C18B43]">Who I Am</h3>
            <p className="text-[#FFFFF0] text-lg leading-relaxed">
              I'm a passionate Full Stack Developer specializing in the MERN stack with over 5 years of
              experience creating robust web applications. From debugging nightmares to architecting
              scalable solutions, I've transformed complex problems into elegant, user-friendly
              experiences.
            </p>
            <p className="text-[#FFFFF0] text-lg leading-relaxed">
              When I'm not coding, you'll find me contributing to open-source projects, exploring new
              technologies, or mentoring aspiring developers. I believe in writing clean, maintainable
              code and staying at the forefront of web development trends.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {[
                { icon: <FaCode className="text-2xl" />, title: "Frontend", desc: "React, Html" },
                { icon: <FaServer className="text-2xl" />, title: "Backend", desc: "Node.js" },
                { icon: <FaDatabase className="text-2xl" />, title: "Database", desc: "MongoDB, SQL" },
                { icon: <FaMobileAlt className="text-2xl" />, title: "Mobile", desc: "React Native" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-[#FFFFF0] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-[#C18B43] mb-2">{item.icon}</div>
                  <h4 className="font-medium text-[#212121]">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-[#C18B43] mb-6">My Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 text-[#FFFFF0]">{skill.icon}</div>
                        <span className="font-medium text-[#FFFFF0]">{skill.name}</span>
                      </div>
                      <span className="text-sm text-[#FFFFF0]">{skill.level}%</span>
                    </div>  
                    <div className="w-full bg-[#FFFFF0] rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-2.5 rounded-full bg-gradient-to-l from-[#C18B43] via-[#FFFFF0] to-[#C18B43] "
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#FFFFF0] mb-6">Experience</h3>
              <div className="space-y-6 relative before:absolute before:left-7 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#C18B43] before:via-[#fffff0] before:to-[#C18B43] before:-translate-x-1/2">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="relative pl-16"
                  >
                    <div className="absolute left-3 w-7 h-7 rounded-full bg-gradient-to-r from-[#fffff0] to-[#C18B43] flex items-center justify-center text-[#212121] font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="bg-[#FFFFF0] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="font-bold text-gray-800">{exp.role}</h4>
                        <span className="text-sm text-[#C18B43] font-medium">{exp.year}</span>
                      </div>
                      <p className="text-gray-500 font-medium mb-2">{exp.company}</p>
                      <p className="text-gray-600">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
