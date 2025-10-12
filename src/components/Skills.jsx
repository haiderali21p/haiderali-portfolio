import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-center mb-10 text-accent"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Skills
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {skills.map((skillGroup, i) => (
          <motion.div
            key={i}
            className="glass p-6 rounded-xl hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-accent">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-[#1e293b]/50 rounded-lg text-sm border border-gray-700 hover:bg-accent hover:text-white transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
