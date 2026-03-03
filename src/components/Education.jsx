import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-dark-light">
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
            Education
          </h2>
          <div className="h-px bg-dark-lighter flex-1" />
        </motion.div>

        {/* Education cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group p-6 rounded-xl bg-dark border border-dark-lighter hover:border-primary/30 transition-all duration-300"
            >
              {/* Icon + degree */}
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-lg bg-primary/10 text-primary-light group-hover:bg-primary/20 transition-colors">
                  <FiBookOpen className="text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                  <p className="text-primary-light text-sm font-medium">
                    {edu.field}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                    <span className="text-gray-400 text-sm">
                      {edu.institution}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {edu.duration}
                    </span>
                  </div>
                  {edu.grade && (
                    <span className="inline-block mt-2 px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary-light border border-primary/20">
                      {edu.grade}
                    </span>
                  )}

                  {/* Highlights */}
                  {edu.highlights.length > 0 && (
                    <ul className="mt-3 space-y-1.5">
                      {edu.highlights.map((item, i) => (
                        <li
                          key={i}
                          className="text-gray-400 text-sm flex items-start gap-2"
                        >
                          <span className="text-primary mt-1 text-xs">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
