import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutValues() {
    const values = [
        {
            image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            title: "Premium Craftsmanship",
            desc: "Expert tailoring with attention to every detail, creating pieces that last."
        },
        {
            image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            title: "Timeless Elegance",
            desc: "Classic designs that transcend trends and celebrate feminine grace."
        },
        {
            image: "https://img.freepik.com/premium-photo/pretty-young-girl-posing-rocks-theme-park-fashion-shoot-wearing-traditional-frock_658768-610.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_incoming&w=740&q=80",
            title: "Modern Comfort",
            desc: "Luxurious fabrics that move with you, combining style with ease."
        },
    ];

    return (
        <section className="py-10 mb-10  bg-white text-black px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto overflow-hidden">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center text-5xl md:text-6xl font-bold mb-4"
                >
                    Our Values
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center text-xl text-gray-600 mb-16 max-w-2xl mx-auto"
                >
                    What makes HC Collection the choice for discerning women
                </motion.p>

                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            {/* Card Container */}
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">

                                {/* Image Container */}
                                <div className="relative overflow-hidden h-80">
                                    <img
                                        src={value.image}
                                        alt={value.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    {/* Hover Content */}
                                    <div className="absolute inset-0 flex items-end p-6">
                                        <div className="transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            <p className="text-white text-lg font-light mb-4">
                                                {value.desc}
                                            </p>
                                            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Title Section */}
                                <div className="p-6 text-center">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors duration-300">
                                        {value.title}
                                    </h3>

                                    {/* Static Description for Mobile */}
                                    <p className="text-gray-600 text-lg md:hidden">
                                        {value.desc}
                                    </p>

                                    {/* Mobile Button */}
                                    <button className="bg-black text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 mt-4 md:hidden">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-7 mb-2"
                >
                    <Link to='/service'>
                        <button className="bg-black text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg">
                            Discover Our Collection
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}