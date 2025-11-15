import React from "react";
import { motion } from "framer-motion";
import { FiShoppingBag, FiScissors, FiStar } from "react-icons/fi";

export default function HomeFeatureSection() {
  const features = [
    {
      icon: <FiShoppingBag size={40} />,
      title: "Unstitched Collection",
      text: "Premium fabrics designed for elegance, comfort, and creativity.",
    },
    {
      icon: <FiScissors size={40} />,
      title: "Stitched Ready Wear",
      text: "Modern cuts and flawless tailoring crafted for everyday luxury.",
    },
    {
      icon: <FiStar size={40} />,
      title: "Signature Designs",
      text: "Exclusive HC Collection outfits made to stand out beautifully.",
    },
  ];

  return (
    <div className="w-full  bg-white text-black py-10 px-6 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-4xl font-bold mb-14"
      >
        Why Women Choose <span className="text-gray-700">Our Collection</span>
      </motion.h2>

      {/* Card Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.06 }}
            className="bg-black text-white rounded-xl p-8 shadow-xl border border-gray-800 hover:border-white cursor-pointer"
          >
            <div className="mb-6 text-white">{item.icon}</div>

            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

            <p className="text-gray-300">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
