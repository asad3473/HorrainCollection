import React, { useRef, useState, useEffect } from 'react';

export default function PopularCategory() {
    const scrollContainerRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const categories = [
        {
            id: 1,
            title: "Embroidered Lehenga",
            price: "₹12,999",
            image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            colors: ["#FF6B6B", "#4ECDC4", "#45B7D1"]
        },
        {
            id: 2,
            title: "Designer Saree",
            price: "₹8,499",
            image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            colors: ["#FF9999", "#C44569", "#786FA6"]
        },
        {
            id: 3,
            title: "Anarkali Suit",
            price: "₹6,999",
            image: "https://www.limelight.pk/cdn/shop/files/A3286SH-SML-034-KhaddarShirt_Pret_1.jpg?v=1762930291&width=533",
            colors: ["#F8A5C2", "#574B90", "#F78FB3"]
        },
        {
            id: 4,
            title: "Party Wear Gown",
            price: "₹15,999",
            image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            colors: ["#E66767", "#303952", "#CF6A87"]
        },
        {
            id: 5,
            title: "Traditional Salwar",
            price: "₹5,499",
            image: "https://www.limelight.pk/cdn/shop/files/A0696SU-SML-582-3-PieceCrepeSuit-Embroidered_Pret_1.jpg?v=1762852750&width=533",
            colors: ["#F19066", "#546DE5", "#E15F41"]
        },
        {
            id: 6,
            title: "Bridal Collection",
            price: "₹25,999",
            image: "https://www.sokamal.com/cdn/shop/files/916_6.jpg?v=1761827195&width=500",
            colors: ["#FF9FF3", "#F368E0", "#FF6B6B"]
        },
        {
            id: 7,
            title: "Casual Kurti",
            price: "₹3,999",
            image: "https://cdn.shopify.com/s/files/1/2337/7003/files/media_image-a12e90a68ab146cbae534e98c33db9a3_fdb6a398-8dba-4c44-aa48-4b87c53d2b84.webp?v=1761568790&width=600&format=webp",
            colors: ["#00D2D3", "#54A0FF", "#5F27CD"]
        },
        {
            id: 8,
            title: "Designer Blouse",
            price: "₹4,999",
            image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            colors: ["#FF9F43", "#EE5A24", "#FEA47F"]
        },
        {
            id: 9,
            title: "Silk Saree",
            price: "₹11,999",
            image: "https://cdn.shopify.com/s/files/1/2337/7003/files/5eaeda3be2d56ea0462dc2aad9f01009.jpg?v=1746595017&width=600&format=webp",
            colors: ["#D6A2E8", "#82589F", "#FDA7DF"]
        },
        {
            id: 10,
            title: "Festival Wear",
            price: "₹7,999",
            image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            colors: ["#B33771", "#6D214F", "#FC427B"]
        }
    ];

    const updateScrollProgress = () => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollWidth = container.scrollWidth - container.clientWidth;
            const scrollLeft = container.scrollLeft;
            const progress = scrollWidth > 0 ? scrollLeft / scrollWidth : 0;
            setScrollProgress(progress);
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', updateScrollProgress);
            return () => container.removeEventListener('scroll', updateScrollProgress);
        }
    }, []);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full bg-white py-10 px-6">
            <div className="max-w-7xl text-center mx-auto mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Popular Categories
                </h2>
                <p className="text-gray-600 text-lg">
                    Discover our most loved traditional wear collections
                </p>
            </div>

            <div className="relative group">
                <div 
                    ref={scrollContainerRef}
                    className="flex space-x-6 overflow-x-auto pb-8 scrollbar-hide scroll-smooth"
                >
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="flex-shrink-0 w-80 transform transition-all duration-500 hover:scale-105"
                        >
                            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-500">
                                <div className="relative h-96 overflow-hidden">
                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                <div className="p-5 bg-gradient-to-b from-white to-gray-50">
                                    <h3 className="text-xl text-center font-bold text-gray-900 line-clamp-2">
                                        {category.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-black rounded-full transition-transform duration-300 ease-out"
                        style={{
                            transform: `scaleX(${scrollProgress})`,
                            transformOrigin: 'left'
                        }}
                    />
                </div>

                <button 
                    onClick={scrollLeft}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full p-3 shadow-2xl hover:bg-white hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button 
                    onClick={scrollRight}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full p-3 shadow-2xl hover:bg-white hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}