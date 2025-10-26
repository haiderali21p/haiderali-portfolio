import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800 text-center bg-[#0f172a]/40">
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 text-gray-400 text-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-gray-300 font-semibold"></span> All
          Rights Reserved.
        </p>
      </motion.div>

      <motion.p
        className="mt-4 text-xs text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Designed & Developed by <span className="text-white">Haider Ali</span>
      </motion.p>
    </footer>
  );
}
