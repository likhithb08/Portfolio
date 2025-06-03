import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaCode,
  FaPalette,
  FaServer,
  FaArrowDown,
} from "react-icons/fa";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { useRef } from "react";
import ContactSection from "../sections/ContactSection";
import FooterSection from '../sections/FooterSection'

export default function Portfolio() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // 3D Sphere Component
  const TechModels = () => {
    return (
      <Canvas camera={{ position: [0, 0, 10] }}>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />

        {/* Red Sphere */}
        <mesh position={[-4, 0, 0]}>
          <sphereGeometry args={[3, 30, 30]} />
          <meshStandardMaterial color="#e63946" />
        </mesh>
      </Canvas>
    );
  };

  const skills = [
    { name: "React", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Three.js", level: 70 },
    { name: "Framer Motion", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Logo Design", level: 90 },
  ];
  
  const projects = [
    {
      title: "Coffee Shop Branding",
      description:
        "Complete branding package including logo, color scheme, and typography",
      tags: ["Logo Design", "Brand Identity"],
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      link: "#",
    },
    {
      title: "Freelancer Landing Page",
      description:
        "Interactive dashboard with real-time analytics for fitness tracking",
      tags: ["React", "Chart.js", "Tailwind"],
      image: "https://cdn2.vectorstock.com/i/1000x1000/94/41/freelance-landing-page-layout-female-freelancer-vector-28299441.jpg",
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
    <div
      ref={ref}
      className="min-h-screen bg-gray-900 text-white overflow-x-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-0"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      {/* Progress Bar */}
      <motion.div
        className="relative top-0 left-0 right-0 h-1 bg-red-500 z-50"
        style={{ scaleX: pathLength }}
      ></motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-300">
              Likhith B
            </h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Crafting <span className="text-red-400">digital experiences</span>{" "}
              and <span className="text-red-400">brand identities</span> that
              stand out
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-6 mt-8"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition-all"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-red-600 text-red-400 hover:bg-red-900/30 rounded-lg font-medium transition-all"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            className="w-full h-full mt-16"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          >
            <TechModels />
          </motion.div>
        </section>

        {/* About Section */}
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
                experience creating digital products that users love. My
                approach combines technical expertise with aesthetic sensibility
                to deliver solutions that are both functional and beautiful.
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
                className="relativce inset-0 bg-gradient-to-br from-red-500/20 to-transparent rounded-xl"
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
              <div className="relative inset-0 bg-gray-800/80 rounded-xl backdrop-blur-sm border border-gray-700 flex items-center justify-center">
                <p className="text-gray-300 px-8 text-center">
                  "I believe in creating digital experiences that are intuitive,
                  engaging, and memorable."
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
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
                      
                      <h3 className="text-xl font-bold mb-2">
                       {project.title}</h3>
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
        

        {/* Contact Section */}
        <ContactSection></ContactSection>
        
      </div>

      {/* Footer */}
              <FooterSection />
              
    </div>
  );
}