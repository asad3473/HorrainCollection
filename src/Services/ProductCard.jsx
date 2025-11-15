import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ 
        scale: 1.05,
        y: -15,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative group cursor-pointer bg-white rounded-3xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Title and Description Section - Added at Top */}
      <div className="absolute top-0 left-0 right-0 z-30 p-6 bg-gradient-to-b from-black/80 via-black/60 to-transparent text-white transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold mb-2"
        >
          Premium Collection
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-200 text-sm leading-relaxed"
        >
          Discover exquisite traditional wear crafted with premium fabrics and intricate embroidery. 
          Each piece tells a story of elegance and cultural heritage.
        </motion.p>
      </div>

      {/* Main Card Container */}
      <div className="relative overflow-hidden rounded-3xl">
        
        {/* Image Container with Multiple Layers */}
        <div className="relative overflow-hidden rounded-3xl">
          <motion.img
            src={product.img}
            alt={product.title}
            className="w-full h-80 object-cover"
            animate={{
              scale: isHovered ? 1.15 : 1,
              rotate: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          
          {/* Animated Border Effect */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-3xl transition-all duration-500"></div>
        </div>

        {/* Floating Category Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          whileInView={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="absolute top-4 left-4 z-20"
        >
          <span className="bg-black/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold shadow-2xl border border-white/20">
            {product.category}
          </span>
        </motion.div>

        {/* Hover Overlay with Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute inset-0 bg-black/20 backdrop-blur-[2px] flex items-center justify-center space-x-4"
        >
          {/* Quick Action Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-2xl transform -translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
          >
            <a href="tel:+923015286099">Contact Now</a>
          </motion.button>
        </motion.div>

        {/* Product Info Panel */}
        <motion.div
          initial={{ y: 0 }}
          whileHover={{ y: -10 }}
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 text-white transform translate-y-0 group-hover:translate-y-0 transition-transform duration-500"
        >
          <motion.h3
            initial={{ opacity: 1 }}
            whileHover={{ opacity: 0.8 }}
            className="text-xl font-bold mb-2 leading-tight"
          >
            {product.title}
          </motion.h3>
          
          <div className="flex items-center justify-between">
            <motion.p
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-white"
            >
              PKR {product.price.toLocaleString()}
            </motion.p>
            
            {/* Animated Favorite Icon */}
            <motion.button
              whileHover={{ scale: 1.2, color: "#ef4444" }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-lg"
            >
              ♡
            </motion.button>
          </div>
        </motion.div>

        {/* Floating Particles Effect on Hover */}
        {isHovered && (
          <>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="absolute bottom-12 right-4 w-1 h-1 bg-white rounded-full"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute top-8 left-8 w-1 h-1 bg-white rounded-full"
            />
          </>
        )}
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
    </motion.div>
  );
}