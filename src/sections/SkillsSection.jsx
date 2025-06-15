import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SkillsSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const skills = [
    { name: "React", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Three.js", level: 70 },
    { name: "Framer Motion", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Logo Design", level: 90 },
  ];
  return (
    <div>
      {/* Progress Bar */}
      <motion.div
        className="relative top-0 left-0 right-0 h-1 bg-red-500 z-50"
        style={{ scaleX: pathLength }}
      ></motion.div>
      <section id="skills" className="py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-red-400">
            My Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-6"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300 font-medium">
                    {skill.name}
                  </span>
                  <span className="text-red-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2.5">
                  <motion.div
                    className="bg-gradient-to-r from-red-500 to-red-300 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default SkillsSection;
