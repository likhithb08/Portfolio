import React from "react";
import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <div>
      <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
        <motion.p
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} Likhith B. All rights reserved.
        </motion.p>
      </footer>
    </div>
  );
};

export default FooterSection;
