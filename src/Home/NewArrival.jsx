import React from 'react';
import { Link } from 'react-router-dom';

export default function NewArrival() {
    const newArrivals = [
        {
            id: 1,
            title: "Designer Lehenga Set",
            price: "₹15,999",
            image: "https://img.freepik.com/premium-photo/showcasing-professional-clothing-with-style-sophistication-isolation-clean-background_1020495-69898.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_incoming&w=740&q=80",
            badge: "New",
        },
        {
            id: 2,
            title: "Shalwar Qameez",
            price: "₹12,499",
            image: "https://img.freepik.com/premium-photo/beautiful-hot-pakistani-girl-landscape-wearing-desi-dress-waving-dupatta_658768-225.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_incoming&w=740&q=80",
            badge: "Trending",
        },
        {
            id: 3,
            title: "Anarkali Wear",
            price: "₹8,999",
            image: "https://img.freepik.com/free-photo/woman-with-floral-dress-bare-feet_23-2148261281.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_incoming&w=740&q=80",
            badge: "Limited",
        },
        {
            id: 4,
            title: " Kurti Set",
            price: "₹4,499",
            image: "https://img.freepik.com/premium-photo/pretty-young-girl-wearing-yellow-stylish-dress-fashion-shoot-park_658768-587.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_incoming&w=740&q=80",
            badge: "Bestseller",
        }
    ];

    const featuredProduct = newArrivals[0];
    const rightProducts = newArrivals.slice(1);

    return (
        <div className="w-full bg-white py-10 px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    New Arrivals
                </h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                    Discover the latest additions to our collection. Fresh styles, modern designs, and exclusive pieces just for you.
                </p>
            </div>

            {/* Main Layout */}
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Left Side - Featured Product */}
                    <div className="group bg-white rounded-2xl overflow-hidden">
                        <div className="relative overflow-hidden">
                            <img
                                src={featuredProduct.image}
                                alt={featuredProduct.title}
                                className="w-full h-[80vh] object- transform group-hover:scale-110 transition-transform duration-700"
                            />
                            
                            {/* Title on Image */}
                            <div className="absolute bottom-4 left-4">
                                <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                                    {featuredProduct.title}
                                </h3>
                            </div>

                            {/* Badge */}
                            <div className="absolute top-4 left-4">
                                <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    {featuredProduct.badge}
                                </span>
                            </div>

                            {/* Hover Button */}
                            <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 flex items-center justify-center">
                                <button className="bg-white text-black px-8 py-3 rounded-full font-semibold transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    View Product
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Grid of 3 Products */}
                    <div className="grid grid-rows-2 gap-6">
                        {/* Top Row - Single Product */}
                        <div className="group bg-white rounded-2xl overflow-hidden">
                            <div className="relative overflow-hidden">
                                <img
                                    src={rightProducts[0].image}
                                    alt={rightProducts[0].title}
                                    className="w-full h-54 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                
                                {/* Title on Image */}
                                <div className="absolute bottom-3 left-3">
                                    <h3 className="text-lg font-bold text-white drop-shadow-lg">
                                        {rightProducts[0].title}
                                    </h3>
                                </div>

                                {/* Badge */}
                                <div className="absolute bg-black rounded-full top-3 left-3">
                                    <span className=" text-white px-2 py-2 rounded-full text-xs font-semibold">
                                        {rightProducts[0].badge}
                                    </span>
                                </div>

                                {/* Hover Button */}
                                <div className="absolute inset-0 bg- bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 flex items-center justify-center">
                                    <button className="bg-white text-black px-6 py-2 rounded-full font-semibold text-sm transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                        View Product
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Row - Two Products */}
                        <div className="grid grid-cols-2 gap-6">
                            {rightProducts.slice(1).map((product) => (
                                <div
                                    key={product.id}
                                    className="group bg-white rounded-2xl overflow-hidden"
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-50 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        
                                        {/* Title on Image */}
                                        <div className="absolute bottom-2 left-2">
                                            <h3 className="text-base font-bold text-white drop-shadow-lg">
                                                {product.title}
                                            </h3>
                                        </div>

                                        {/* Badge */}
                                        <div className="absolute top-2 left-2">
                                            <span className="bg-black text-white px-2 py-1 rounded-full text-xs font-semibold">
                                                {product.badge}
                                            </span>
                                        </div>

                                        {/* Hover Button */}
                                        <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 flex items-center justify-center">
                                            <button className="bg-white text-black px-4 py-2 rounded-full font-semibold text-xs transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                                View Product
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* View All Button */}
                <div className="text-center mt-6">
                    <Link to='/service'>
                        <button className="bg-black text-white px-7 py-3 rounded-full font-semibold text-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300">
                            View All New Arrivals
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}