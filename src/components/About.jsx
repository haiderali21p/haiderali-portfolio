import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-center text-accent mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={profileImg}
            alt="Haider Ali"
            className="w-56 h-56 rounded-2xl object-cover shadow-lg border-2 border-accent"
          />
        </motion.div>

        {/* About Content */}
        <motion.div
          className="text-gray-300 leading-relaxed"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-lg">
            A passionate Frontend Developer with strong interest
            in creating modern, interactive, and high-performance web
            applications. My journey in tech is driven by curiosity and a desire
            to build meaningful digital experiences.
          </p>

          <p className="mb-4">
            Through my hands-on experience with projects like{" "}
            <strong>Coza Store</strong>,
            <strong>Country Explorer</strong>, and{" "}
            <strong>TaskHub</strong>, I’ve honed my skills in building scalable
            web apps with clean UI, optimized performance, and seamless user
            experiences.
          </p>

          <p className="mb-4">
            I specialize in <strong>React.js</strong>,{" "}
            <strong>Tailwind CSS</strong>, and <strong>REST APIs</strong>,
            while also exploring areas like <strong>AI integration</strong> and
            full-stack development with Node.js, SQL, and MongoDB. My approach
            combines creativity with logic to transform ideas into polished,
            user-centered web solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
