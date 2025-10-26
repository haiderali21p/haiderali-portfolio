import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState("Send Message");

  const FORMSPREE_URL = "https://formspree.io/f/mblzzpny";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const data = new FormData(e.target);

    try {
      await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setStatus("Message Sent");
      e.target.reset();

      //  auto reset status after 3 seconds (refresh-like behavior)
      setTimeout(() => {
        setStatus("Send Message");
      }, 3000);
    } catch (err) {
      setStatus("Error ❌");
      setTimeout(() => setStatus("Send Message"), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0f172a]/40 text-center px-6">
      <motion.h2
        className="text-4xl font-bold mb-6 text-accent"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Contact Me
      </motion.h2>

      {/*  Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto glass p-8 rounded-xl space-y-4 text-left"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div>
          <label className="block text-gray-300 mb-1 text-sm">Your Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-3 rounded-md bg-[#1e293b]/50 border border-gray-700 text-gray-100 focus:outline-none focus:border-accent"
            placeholder="Write your name..."
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-1 text-sm">Your Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-3 rounded-md bg-[#1e293b]/50 border border-gray-700 text-gray-100 focus:outline-none focus:border-accent"
            placeholder="Write your email address..."
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-1 text-sm">Message</label>
          <textarea
            name="message"
            required
            rows="5"
            className="w-full p-3 rounded-md bg-[#1e293b]/50 border border-gray-700 text-gray-100 focus:outline-none focus:border-accent"
            placeholder="Write your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-accent text-white py-3 rounded-md hover:scale-105 transition"
        >
          <FaPaperPlane /> {status}
        </button>
      </motion.form>

      {/* Only LinkedIn */}
      <div className="flex justify-center text-2xl mt-10">
        <a
          href="https://www.linkedin.com/in/haider-ali-b15831372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition"
          title="Visit my LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
