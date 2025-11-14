import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <motion.footer
      
      className="w-full bg-black text-white py-12 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Brand section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-wide border-b pb-2 inline-block">
            HC Collection
          </h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Premium women’s clothing designed for elegance, comfort, and
            confidence. Discover outfits that compliment your lifestyle.
          </p>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white transition">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-white transition">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-white transition">
              <Link to="/services">Service</Link>
            </li>
            <li className="hover:text-white transition">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-6 text-3xl">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="#"
              className="hover:text-gray-300 transition"
            >
              <FaFacebook />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="#"
              className="hover:text-gray-300 transition"
            >
              <FaInstagram />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="#"
              className="hover:text-gray-300 transition"
            >
              <FaTiktok />
            </motion.a>
          </div>
        </motion.div>

      </div>

      {/* Bottom line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-10 text-gray-500"
      >
        © {new Date().getFullYear()} HC Collection — All Rights Reserved.
      </motion.div>
    </motion.footer>
  );
}
