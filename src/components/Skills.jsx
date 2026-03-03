import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";
import {
  SiJavascript,
  SiReact,
  SiSolid,
  SiNodedotjs,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiGit,
  SiGrafana,
  SiFirebase,
  SiDatadog,
  SiAlgolia,
  SiGithubcopilot,
  SiOpenai,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FiMousePointer } from "react-icons/fi";

const skillIcons = {
  JavaScript: <SiJavascript />,
  Java: <FaJava />,
  "React.js": <SiReact />,
  "Solid.js": <SiSolid />,
  "Node.js": <SiNodedotjs />,
  Express: <SiExpress />,
  Redux: <SiRedux />,
  Tailwind: <SiTailwindcss />,
  MySQL: <SiMysql />,
  MongoDB: <SiMongodb />,
  Redis: <SiRedis />,
  Git: <SiGit />,
  Grafana: <SiGrafana />,
  Firebase: <SiFirebase />,
  Datadog: <SiDatadog />,
  Algolia: <SiAlgolia />,
  "GitHub Copilot": <SiGithubcopilot />,
  Cursor: <FiMousePointer />,
  ChatGPT: <SiOpenai />,
};

const skillColors = {
  JavaScript:
    "from-yellow-400/20 to-yellow-600/10 border-yellow-400/30 text-yellow-300",
  Java: "from-red-400/20 to-red-600/10 border-red-400/30 text-red-300",
  "React.js":
    "from-cyan-400/20 to-cyan-600/10 border-cyan-400/30 text-cyan-300",
  "Solid.js":
    "from-blue-400/20 to-blue-600/10 border-blue-400/30 text-blue-300",
  "Node.js":
    "from-green-400/20 to-green-600/10 border-green-400/30 text-green-300",
  Express: "from-gray-300/20 to-gray-500/10 border-gray-300/30 text-gray-200",
  Redux:
    "from-purple-400/20 to-purple-600/10 border-purple-400/30 text-purple-300",
  Tailwind: "from-cyan-300/20 to-cyan-500/10 border-cyan-300/30 text-cyan-200",
  MySQL: "from-blue-400/20 to-blue-600/10 border-blue-400/30 text-blue-300",
  MongoDB:
    "from-green-500/20 to-green-700/10 border-green-500/30 text-green-300",
  Redis: "from-red-500/20 to-red-700/10 border-red-500/30 text-red-300",
  Git: "from-orange-400/20 to-orange-600/10 border-orange-400/30 text-orange-300",
  Grafana:
    "from-orange-300/20 to-orange-500/10 border-orange-300/30 text-orange-200",
  Firebase:
    "from-yellow-400/20 to-yellow-600/10 border-yellow-400/30 text-yellow-300",
  Datadog:
    "from-purple-400/20 to-purple-600/10 border-purple-400/30 text-purple-300",
  Algolia: "from-blue-300/20 to-blue-500/10 border-blue-300/30 text-blue-200",
  "GitHub Copilot":
    "from-gray-300/20 to-gray-500/10 border-gray-300/30 text-gray-200",
  Cursor:
    "from-indigo-400/20 to-indigo-600/10 border-indigo-400/30 text-indigo-300",
  ChatGPT:
    "from-emerald-400/20 to-emerald-600/10 border-emerald-400/30 text-emerald-300",
};

const defaultColor =
  "from-primary/20 to-accent/10 border-primary/30 text-gray-300";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.6, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="py-24 bg-dark">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap">
            Skills
          </h2>
          <div className="h-px bg-dark-lighter flex-1" />
        </motion.div>

        {/* Skill categories */}
        <div className="space-y-10">
          {categories.map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="text-primary-light font-semibold mb-5 text-sm uppercase tracking-wider text-center">
                {category}
              </h3>
              <motion.div
                className="flex flex-wrap justify-center gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
              >
                {items.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={chipVariants}
                    whileHover={{
                      scale: 1.08,
                      y: -3,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 12,
                      },
                    }}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r border text-sm font-medium cursor-default ${
                      skillColors[skill] || defaultColor
                    }`}
                  >
                    {skillIcons[skill] && (
                      <span className="text-lg">{skillIcons[skill]}</span>
                    )}
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
