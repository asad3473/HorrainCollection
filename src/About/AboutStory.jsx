import React from "react";
import { motion } from "framer-motion";

export default function AboutStory() {
  return (
    <section className="py-20 px-6 bg-white text-black">
      <div className="max-w-6xl overflow-hidden mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Main Image */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="https://img.freepik.com/premium-photo/3-hot-asian-models-landscape-wearing-traditional-dress-fashion-shoot_658768-295.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_incoming&w=740&q=80"
              alt="Fashion Story"
              className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            </div>
          </div>

          {/* Decorative Element */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-black rounded-2xl transform rotate-12 z-10"></div>
          <div className="absolute -top-6 -left-6 w-20 h-20 bg-gray-200 rounded-2xl transform -rotate-6"></div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Section Title */}
          <div className="space-y-3">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold text-gray-900"
            >
              Our Story
            </motion.h2>
            
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="h-1 bg-black rounded-full"
            ></motion.div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-700 leading-relaxed"
          >
            <p className="text-lg md:text-xl">
              HC Collection brings elegance, confidence, and modern style to today's women. 
              Every piece is created with timeless design, premium quality, and a commitment 
              to individuality.
            </p>

            <p className="text-lg md:text-xl">
              From minimal chic to luxury casuals, our collections reflect a world where 
              fashion and identity come together seamlessly.
            </p>

            <p className="text-lg md:text-xl">
              Founded with a passion for empowering women through fashion, we believe that 
              what you wear should make you feel confident, beautiful, and authentically you.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-6 pt-6"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-1">5+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-1">10K+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-1">50+</div>
              <div className="text-sm text-gray-600">Collections</div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="pt-6"
          >
            <button className="bg-black text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Explore Our Journey
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}