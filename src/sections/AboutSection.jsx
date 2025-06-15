import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPalette, FaServer } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div>
      <section id="about" className="py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-400">
              About Me
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              I'm a full-stack developer and brand designer with 3+ years of
              experience creating digital products that users love. My approach
              combines technical expertise with aesthetic sensibility to deliver
              solutions that are both functional and beautiful.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <FaCode className="text-red-400 text-2xl mb-2" />
                <h3 className="font-medium">Web Development</h3>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <FaPalette className="text-red-400 text-2xl mb-2" />
                <h3 className="font-medium">UI/UX Design</h3>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <FaServer className="text-red-400 text-2xl mb-2" />
                <h3 className="font-medium">Backend</h3>
              </div>
            </div>
          </div>
          <div className="relative h-80">
            <motion.div
              className="relative inset-0 bg-red-500/10 rounded-xl border border-red-500/30"
              animate={{
                x: [-10, 10, -10],
                y: [-5, 5, -5],
                rotate: [-1, 1, -1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent rounded-xl"
              animate={{
                x: [10, -10, 10],
                y: [5, -5, 5],
                rotate: [1, -1, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
            <div className="absolute inset-0 bg-gray-800/80 rounded-xl backdrop-blur-sm border border-gray-700 flex items-center justify-center">
              <p className="text-gray-300 px-8 text-center">
                "I believe in creating digital experiences that are intuitive,
                engaging, and memorable."
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutSection;
