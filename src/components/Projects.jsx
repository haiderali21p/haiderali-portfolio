import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Country Explorer Web App",
    description:
      "A responsive web app that lets users explore countries worldwide search by name, filter by region, and sort by population. Each country has a detailed view with flag, capital, currencies, and languages, plus a light/dark theme toggle.",
    tech: "React.js, JavaScript (ES6+), CSS, REST API, Responsive Web Design",
  },
  {
    title: "Coza Store E-commerce Website",
    description:
      "A modern e-commerce web application featuring product browsing, cart system, user authentication, and order placement. Frontend built with React.js and backend powered by Node.js & SQL for full-stack functionality.",
    tech: "React.js, Node.js, SQL, TailwindCSS",
  },
  {
    title: "Local Business Website",
    description:
      "Developed a sleek, responsive website for a local business with animated hero section, services cards, and integrated Google Maps API for location access. Focused on UI/UX and cross-device performance.",
    tech: "React.js, Tailwind CSS, Framer Motion, Google Maps API, Git & GitHub",
  },
  {
    title: "Mini AI E-Commerce Store",
    description:
      "A responsive online shopping platform allowing users to browse, upload, and purchase products with AI-generated descriptions. Includes structured checkout flow and two unique UI templates.",
    tech: "TailwindCSS, React.js, MongoDB, AI Integration, GitHub",
  },
  
  {
    title: "Responsive E-Commerce Landing Page",
    description:
      "A fast, visually appealing landing page built with React.js and TailwindCSS. Optimized for performance with clean modular components and smooth transitions.",
    tech: "React.js, Tailwind CSS",
  },
  {
    title: "TaskHub - Project & Task Management App",
    description:
      "A modern MERN stack project management app with task CRUD, deadlines, priorities, comments, notifications, and dark/light mode. Focused on delivering a clean, responsive frontend.",
    tech: "React.js, Tailwind CSS, Node.js, Express, MongoDB",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#0f172a]/40">
      <h2 className="text-4xl font-bold text-center mb-10 text-accent">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="glass p-6 rounded-xl flex flex-col justify-between hover:scale-[1.03] transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-3 text-accent">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
            </div>
            <p className="text-xs text-gray-400 mt-auto border-t border-gray-700 pt-3">
              {project.tech}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
