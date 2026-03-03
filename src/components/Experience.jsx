import { motion } from "framer-motion";
import { experiences } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-dark">
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
            Experience
          </h2>
          <div className="h-px bg-dark-lighter flex-1" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-dark-lighter -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row items-start mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-dark -translate-x-1/2 mt-6 z-10" />

              {/* Content card */}
              <div
                className={`ml-10 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="p-6 rounded-xl bg-dark-light border border-dark-lighter hover:border-primary/30 transition-colors duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {exp.company}
                    </h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary-light">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-primary-light font-medium mb-3">
                    {exp.role}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.contributions.map((item, i) => (
                      <li
                        key={i}
                        className="text-gray-400 text-sm flex items-start gap-2"
                      >
                        <span className="text-primary mt-1.5 text-xs">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
