import React from "react";
import { motion } from "framer-motion";
import cvFile from "../assets/HaiderAliCV.pdf";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center px-6"
    >
      {/* Name + Role */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I’m <span className="text-accent">Haider Ali</span>
      </motion.h1>


      {/* Professional Intro */}
      <motion.p
        className="text-lg text-gray-400 max-w-2xl leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        I’m a passionate Frontend Developer focused on creating elegant, responsive,
        and high-performance web interfaces. I specialize in React.js, Tailwind CSS,
        REST APIs, and modern JavaScript. My work blends creativity with clean code
        delivering seamless user experiences across every device.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {/* View Work */}
        <a
          href="#projects"
          className="bg-accent text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition"
        >
          View My Work
        </a>

        {/* Download CV */}
        <a
          href={cvFile}
          download="Haider Ali CV.pdf"
          className="bg-transparent border border-accent text-accent px-6 py-3 rounded-lg hover:bg-accent hover:text-white transition"
        >
          Download CV
        </a>
      </motion.div>
    </section>
  );
}
