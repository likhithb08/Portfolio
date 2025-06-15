import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div>
      <section id="contact" className="py-20 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-400">
            Let's Work Together
          </h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you.
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <motion.a
              href="https://www.linkedin.com/in/likhith-b-1a7364242"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-blue-600 hover:bg-blue-700 w-14 h-14 rounded-full flex items-center justify-center"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="https://github.com/likhithb08"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gray-800 hover:bg-gray-700 w-14 h-14 rounded-full flex items-center justify-center"
            >
              <FaGithub size={24} />
            </motion.a>
          </div>
          <div className="max-w-md mx-auto bg-gray-800/50 p-8 rounded-xl border border-gray-700">
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  name="message"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactSection;
