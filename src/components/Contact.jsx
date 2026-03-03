import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Opens the user's email client with pre-filled fields
    const mailtoLink = `mailto:${
      personalInfo.email
    }?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(
      formData.message
    )}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 bg-dark-light">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 mb-12 max-w-lg mx-auto">
            I'm currently open to new opportunities. Whether you have a question
            or just want to say hi, feel free to reach out!
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-gray-400 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-dark border border-dark-lighter text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-400 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-dark border border-dark-lighter text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm text-gray-400 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-dark border border-dark-lighter text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Your message..."
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-light transition-colors duration-200 cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </motion.form>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-6 mt-12"
        >
          <a
            href="mailto:kshitij14397@gmail.com"
            className="text-gray-400 hover:text-primary-light transition-colors text-xl"
          >
            <FiMail />
          </a>
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary-light transition-colors text-xl"
          >
            <FiGithub />
          </a>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary-light transition-colors text-xl"
          >
            <FiLinkedin />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
