// components/Skills.jsx
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  SiJavascript, SiReact, SiNodedotjs,
  SiExpress, SiMongodb, SiTailwindcss, SiGit, SiMysql, SiDocker
} from 'react-icons/si';
import { SiFigma } from "react-icons/si";
import { FaServer, FaDatabase } from 'react-icons/fa';

const otherTechs = [
  { name: "Redux", level: 80 },
  { name: "Jest", level: 70 },
  { name: "React Testing Library", level: 70 },
  { name: "Webpack", level: 75 },
  { name: "REST APIs", level: 85 },
  { name: "Firebase", level: 80 },
  { name: "JWT", level: 85 },
  { name: "OAuth", level: 75 },
  { name: "CI/CD", level: 70 },
  { name: "Linux", level: 75 },
  { name: "Nginx", level: 70 },
  
];

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <SiReact className="w-6 h-6" aria-label="Frontend" />,
      skills: [
        { name: "React", icon: <SiReact className="w-5 h-5" aria-label="React" />, level: 90 },
        { name: "JavaScript", icon: <SiJavascript className="w-5 h-5" aria-label="JavaScript" />, level: 85 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5" aria-label="Tailwind CSS" />, level: 90 },
      ]
    },
    {
      title: "Backend",
      icon: <FaServer className="w-6 h-6" aria-label="Backend" />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5" aria-label="Node.js" />, level: 75 },
        { name: "Express", icon: <SiExpress className="w-5 h-5" aria-label="Express" />, level: 70 },
      ]
    },
    {
      title: "Database",
      icon: <FaDatabase className="w-6 h-6" aria-label="Database" />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="w-5 h-5" aria-label="MongoDB" />, level: 80 },
        { name: "MySQL", icon: <SiMysql className="w-5 h-5" aria-label="MySQL" />, level: 85 },
      ]
    },
    {
      title: "Tools",
      icon: <SiDocker className="w-6 h-6" aria-label="Tools" />,
      skills: [
        { name: "Git", icon: <SiGit className="w-5 h-5" aria-label="Git" />, level: 90 },
        { name: "Figma", icon: <SiFigma className="w-5 h-5" aria-label="Figma" />, level: 90 },
      ]
    }
  ];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFFF0]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-4xl sm:text-5xl  font-bold text-[#212121]  mb-4">
            My <span className="bg-[#C18B43] bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className=" justify-self-center w-20 h-1 bg-[#C18B43]"></div>
          <p className="text-lg  text-[#212121] max-w-2xl mx-auto mt-3.5">
            Technologies I've worked with and my proficiency level in each
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * catIndex }}
              className="bg-[#212121] backdrop-blur-sm rounded-xl p-6 border border-[#212121] hover:border-[#C18B43] transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-2 bg-[#FFFFF0]  rounded-lg mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-[#FFFFF0]">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills
                  .sort((a, b) => b.level - a.level)
                  .map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="text-[#C18B43]">{skill.icon}</div>
                          <span className="font-medium text-[#FFFFF0]">{skill.name}</span>
                        </div>
                        <span className="text-sm text-[#FFFFF0] dark:text-white">
                          <CountUp end={skill.level} duration={1} />%
                        </span>
                      </div>
                      <div className="w-full bg-[#FFFFF0] rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.1 * skillIndex }}
                          className="h-2 rounded-full bg-gradient-to-l from-[#C18B43] via-[#FFFFF0] to-[#C18B43]"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Techs */}
        
      </div>
    </motion.section>
  );
}
