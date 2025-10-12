import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    degree: "Bachelor of Science in Computer Science (BSCS)",
    institute: "National University of Modern Languages (NUML)",
    year: "2023 - 2027",
  },
  {
    degree: "Intermediate (ICS)",
    institute: "BISE Lahore",
    year: "2020 - 2022",
  },
  {
    degree: "Matriculation (Science)",
    institute: "BISE Lahore",
    year: "2018 - 2020",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-[#0f172a]/40">
      <h2 className="text-4xl text-center font-bold mb-10 text-accent">Education</h2>
      <div className="max-w-3xl mx-auto space-y-6 px-6">
        {data.map((edu, i) => (
          <motion.div
            key={i}
            className="glass p-6 rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-400">{edu.institute}</p>
            <span className="text-sm text-gray-500">{edu.year}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
