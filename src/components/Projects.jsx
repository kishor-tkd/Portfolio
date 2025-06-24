// components/Projects.jsx
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { SiReact, SiNodedotjs, SiPython, SiTensorflow, SiMongodb, SiTailwindcss, SiStripe, SiFirebase } from 'react-icons/si';

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured online store with product listings, cart functionality, and secure payment processing.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      tags: ["Full Stack", "E-Commerce", "Payment Integration"],
      github: "#",
      liveDemo: "#",
      image: "/ecommerce-demo.jpg" // Replace with your image path
    },
    {
      title: "AI-Powered Chatbot",
      description: "Natural language processing chatbot that learns from conversations and provides contextual responses.",
      tech: ["Python", "TensorFlow", "NLTK"],
      tags: ["Machine Learning", "NLP", "AI"],
      github: "#",
      liveDemo: "#",
      image: "/chatbot-demo.jpg" // Replace with your image path
    },
    {
      title: "Task Management Dashboard",
      description: "Collaborative project management tool with real-time updates and team collaboration features.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      tags: ["Productivity", "Real-time", "Collaboration"],
      github: "#",
      liveDemo: "#",
      image: "/taskmanager-demo.jpg" // Replace with your image path
    },
    {
      title: "Weather Forecast App",
      description: "Location-based weather application with 5-day forecasts and severe weather alerts.",
      tech: ["React", "OpenWeather API", "Geolocation"],
      tags: ["API Integration", "Mobile-Friendly", "Geolocation"],
      github: "#",
      liveDemo: "#",
      image: "/weather-demo.jpg" // Replace with your image path
    }
  ];

  // Map tech names to icons (add more if needed)
  const techIcons = {
    "React": <SiReact className="w-5 h-5 text-blue-500" />,
    "Node.js": <SiNodedotjs className="w-5 h-5 text-green-500" />,
    "Python": <SiPython className="w-5 h-5 text-yellow-500" />,
    "TensorFlow": <SiTensorflow className="w-5 h-5 text-orange-500" />,
    "MongoDB": <SiMongodb className="w-5 h-5 text-green-600" />,
    "Tailwind CSS": <SiTailwindcss className="w-5 h-5 text-teal-400" />,
    "Stripe": <SiStripe className="w-5 h-5 text-purple-600" />,
    "Firebase": <SiFirebase className="w-5 h-5 text-yellow-400" />,
  };

  return (
    <motion.section
      id="projects"
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
            My <span className="bg-gradient-to-r from-[#C18B43] via-[#C18B43] to-[#FFFFF0] bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[#C18B43] mx-auto mt-4"></div>
          <p className="text-lg text-[#FFFFF0] max-w-2xl mx-auto">
            Some of my recent work that I'm proud to showcase
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#C18B43] hover:border-[#FFFFF0]"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden rounded-t-xl">
                <img 
                  src={project.image} 
                  alt={`${project.title} screenshot`} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                  loading="lazy"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 bg-[#FFFFF0]">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-[#C18B43]">{project.title}</h3>
                  <div className="flex space-x-2">
                    {project.github && project.github !== "#" && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub repository`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-[212121] hover:text-gray-900"
                      >
                        <FiGithub className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.liveDemo && project.liveDemo !== "#" && (
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-gray-700 hover:text-blue-600"
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                <p className="text-[#212121] mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[#212121] mb-2">TECH STACK</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center px-3 py-1 bg-[#212121] rounded-full text-sm text-[#FFFFF0]"
                      >
                        {techIcons[tech] || (
                          <span className="inline-block w-5 h-5 bg-[#c18b43] rounded-full" />
                        )}
                        <span className="ml-1">{tech}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.05 * tagIndex }}
                      className="px-2 py-1 bg-[#212121] text-[#FFFFF0] text-xs font-medium rounded-full"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        
       
      </div>
    </motion.section>
  );
}
