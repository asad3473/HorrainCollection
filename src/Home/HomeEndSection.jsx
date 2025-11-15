import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function HomeEndSection() {
  return (
    <div className="relative w-full border-0 border-white  border-b-2  bg-black text-white py-24 px-6 overflow-hidden">

      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/black-linen.png')",
        }}
      ></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative max-w-4xl mx-auto text-center space-y-8"
      >
        <h2 className="text-3xl md:text-5xl font-bold">
          Your Style.  
          <span className="text-gray-300"> Your Statement.</span>
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Discover fashion that empowers confidence, celebrates individuality,  
          and makes every woman feel effortlessly elegant.  
          Experience the HC Collection — crafted to perfection.
        </p>

        <Link to="/services">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-3 rounded-md inline-flex items-center gap-3 font-semibold shadow-md"
          >
            Explore More <FiArrowRight size={20} />
          </motion.button>
        </Link>
      </motion.div>

      {/* Floating shapes (subtle animation) */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 0.15, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 0.15, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl"
      ></motion.div>

    </div>
  );
}
