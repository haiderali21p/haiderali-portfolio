
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleToggle = () => setIsOpen(!isOpen);

  // Smooth scroll when clicking links
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // adjust offset for navbar height
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  //  Track scroll position for navbar + active link
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled
          ? "bg-[#0f172a]/95 border-gray-800 shadow-md"
          : "bg-transparent border-transparent"
      } backdrop-blur-md`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/*  Brand Title */}
        <a
          href="#home"
          onClick={(e) => handleSmoothScroll(e, "#home")}
          className="text-xl md:text-2xl font-bold text-accent hover:opacity-90 transition"
        >
          Haider Ali | Frontend Developer
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm relative">
          {navItems.map((item) => (
            <div key={item.id} className="relative group">
              <a
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`transition duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? "text-accent font-semibold"
                    : "text-gray-300 hover:text-accent"
                }`}
              >
                {item.name}
              </a>

              {/*  Animated underline */}
              {activeSection === item.id && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-accent rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={handleToggle}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-[#0f172a]/95 border-t border-gray-800 text-gray-300">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className={`transition cursor-pointer ${
                activeSection === item.id
                  ? "text-accent font-semibold"
                  : "hover:text-accent"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
