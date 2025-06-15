import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";

const HeroSection = () => {
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
  return (
    <div>
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
    </div>
  );
};

export default HeroSection;
