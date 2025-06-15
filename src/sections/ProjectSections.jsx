import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const ProjectSections = () => {
  const projects = [
    {
      title: "Coffee Shop Branding",
      description:
        "Complete branding package including logo, color scheme, and typography",
      tags: ["Logo Design", "Brand Identity"],
      image:
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      link: "#",
    },
    {
      title: "Freelancer Landing Page",
      description:
        "Interactive dashboard with real-time analytics for fitness tracking",
      tags: ["React", "Chart.js", "Tailwind"],
      image:
        "https://cdn2.vectorstock.com/i/1000x1000/94/41/freelance-landing-page-layout-female-freelancer-vector-28299441.jpg",
      link: "https://freelancer-landing-page-chi.vercel.app/",
    },
    {
      title: "E-NotZZ Service Page",
      description: "Modern landing page with smooth animations",
      tags: ["React", "Tailwind Css", "Responsive"],
      image: "./images/e-notZZ.png.jpeg",
      link: "https://e-not-zz.vercel.app",
    },
  ];
  return (
    <div>
      {/* Projects Section */}
      <section id="projects" className="py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-red-400">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-red-500/50 transition-all"
              >
                <div className="h-48 bg-gradient-to-r from-red-900/30 to-gray-800 relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="reative inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6">
                  <FaArrowDown className="text-red-400" />
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="block"
                  >
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  </motion.a>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-700 text-red-300 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ProjectSections;
