import { motion } from "framer-motion";
import { aboutMe } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-24 bg-dark-light">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Section heading */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap">
              About Me
            </h2>
            <div className="h-px bg-dark-lighter flex-1" />
          </div>

          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Text */}
            <div className="md:col-span-2 space-y-4">
              {aboutMe.paragraphs.map((para, i) => (
                <p key={i} className="text-gray-400 leading-relaxed">
                  {para}
                </p>
              ))}

              {/* Tech stack */}
              <div className="pt-4">
                <h3 className="text-white font-semibold mb-3">
                  Technologies I work with:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {aboutMe.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary-light border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Profile image placeholder */}
            <div className="flex justify-center md:justify-end">
              <div className="relative group">
                <div className="w-56 h-56 rounded-xl bg-dark-lighter border-2 border-primary/30 flex items-center justify-center overflow-hidden group-hover:border-primary transition-colors duration-300">
                  <span className="text-gray-500 text-sm text-center">
                    <img src="../public/profile.jpg" />
                  </span>
                </div>
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 -z-10 blur-sm group-hover:blur-md transition-all duration-300" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
