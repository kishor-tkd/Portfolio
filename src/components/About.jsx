import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaMobileAlt } from "react-icons/fa";
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";

export default function About() {
  const skills = [
    { icon: <SiJavascript className="w-full h-full" />, name: "JavaScript", level: 85 },
    { icon: <SiReact className="w-full h-full" />, name: "React", level: 90 },
    { icon: <SiNodedotjs className="w-full h-full" />, name: "Node.js", level: 75 },
    { icon: <SiMongodb className="w-full h-full" />, name: "MongoDB", level: 80 },
  ];

  const experience = [
    {
      year: "2022-2026",
      role: "Student",
      company: "VELTECH UNIVERSITY",
      description: "Pursuing B.Tech in Computer Science and Engineering. Passionate about full-stack web and mobile app development, UI/UX design, and integrating AI technologies into real-world applications",
    },
    {
      year: "2020-2022",
      role: "Student",
      company: "ICF SJ MAT HR SEC SCHOOL",
      description: "Completed Higher Secondary Education with a focus on Mathematics and Computer Science",
    },
    {
      year: "2019-2020",
      role: "Student",
      company: "JAIGOPAL GaRODIA MAT HR SRC",
      description: "Completed SSLC (Secondary School Leaving Certificate) with a strong foundation in academics and extracurricular activities",
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
          <div className="w-20 h-1 bg-[#C18B43] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* 👤 Image Section */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="/kishor_about.jpeg"
                alt="Kishor Profile"
                className="w-60 h-60 rounded-full object-cover border-3 border-[#C18B43] shadow-lg lg:mb-20 lg:ms-20"
                
              />
            </div>

            <h3 className="text-2xl font-semibold text-[#C18B43]">Who I Am</h3>
            <p className="text-[#FFFFF0] text-lg leading-relaxed">
              I am a passionate fresher with immense interest and excitement for technology and development. I’m eager to learn, build, and grow in the field of Full Stack Development. With a strong curiosity and enthusiasm for creating impactful digital solutions, I aim to turn ideas into reality through clean code, creative design, and continuous learning.
            </p>
            <p className="text-[#FFFFF0] text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, learning from open-source projects, and staying updated with the latest trends in web development. I believe in writing clean, maintainable code and continuously improving my skills to grow as a developer.
            </p>

            {/* Features */}
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

          {/* Right Column */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Skills */}
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
                        className="h-2.5 rounded-full bg-gradient-to-l from-[#C18B43] via-[#FFFFF0] to-[#C18B43]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-[#FFFFF0] mb-6">Education</h3>
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
