import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";
import ContactSection from "../sections/ContactSection";
import FooterSection from "../sections/FooterSection";
import ProjectSections from "../sections/ProjectSections";
import AboutSection from "../sections/AboutSection";
import SkillsSection from "../sections/SkillsSection";
import HeroSection from "../sections/HeroSection";

export default function Portfolio() {
  const ref = useRef(null);

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

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <ProjectSections />

        {/* Contact Section */}
        <ContactSection></ContactSection>
      </div>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
