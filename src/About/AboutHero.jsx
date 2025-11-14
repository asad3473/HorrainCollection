import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative w-full  flex items-center justify-center overflow-hidden bg-black text-white py-26 px-6"
    >
      {/* Background Image with Blur Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xl md:text-2xl lg:text-2xl text-gray-200 mb-4 font-semibold tracking-wide"
        >
          Fashion crafted for confidence, designed for women who inspire.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed"
        >

          <p>
            Our journey began with a simple vision - to create timeless pieces
            that celebrate the modern woman's strength, grace, and individuality.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-12"
        >
          <Link to='/service'>
            <button className="bg-white text-black px-7 py-3 rounded-full font-semibold text-lg hover:bg-black hover:text-white cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg">
              Discover more
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}