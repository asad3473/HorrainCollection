import React, { useState, useEffect } from 'react';

export default function HomeHeader() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "ELEVATE YOUR STYLE",
      subtitle: "New Collection 2024",
      description: "Discover the perfect blend of comfort and sophistication",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      cta: "SHOP NOW",
      color: "from-purple-600/20 to-blue-600/20"
    },
    {
      id: 2,
      title: "URBAN ELEGANCE",
      subtitle: "Streetwear Redefined",
      description: "Where urban culture meets high fashion",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      cta: "EXPLORE",
      color: "from-orange-500/20 to-red-600/20"
    },
    {
      id: 3,
      title: "MINIMALIST PERFECTION",
      subtitle: "Essentials Collection",
      description: "Timeless pieces for the modern wardrobe",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      cta: "DISCOVER",
      color: "from-gray-600/20 to-black/20"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-full mt-10 overflow-hidden">
      {/* Background Images Stack */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            {/* Multi-layer Background Effect */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-black/40 z-10"></div>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover transform scale-105"
              />
            </div>

            {/* Animated Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} mix-blend-overlay animate-pulse-slow`}></div>
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Text Content - Left Side */}
            <div className="text-white space-y-8 w-full px-6 sm:px-10 md:px-14 text-center sm:text-left transform transition-all duration-1000 ease-out">

              {/* Slide Content */}
              <div
                className={`transition-all duration-1000 delay-300 ${currentSlide === 0
                    ? "translate-x-0 opacity-100"
                    : currentSlide === 1
                      ? "translate-x-4 opacity-100"
                      : "translate-x-8 opacity-100"
                  }`}
              >
                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-tight text-center sm:text-left">
                  {slides[currentSlide].title.split(" ").map((word, index) => (
                    <span
                      key={index}
                      className="block leading-none bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-gradient"
                    >
                      {word}
                    </span>
                  ))}
                </h1>

                {/* Subtitle & Description */}
                <div className="space-y-4">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-200 tracking-wide text-center sm:text-left">
                    {slides[currentSlide].subtitle}
                  </p>

                  <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-xl leading-relaxed mx-auto sm:mx-0 text-center sm:text-left">
                    {slides[currentSlide].description}
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <button className="group relative overflow-hidden bg-white text-black px-5 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-lg tracking-wide transform hover:scale-105 transition-all duration-500 hover:shadow-2xl mx-auto sm:mx-0">
                <span className="relative z-10">{slides[currentSlide].cta}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-30 group-hover:animate-shine"></div>
              </button>
            </div>


            {/* Image Preview - Right Side */}
            <div className="relative hidden lg:block">
              <div className="relative w-full h-96 transform perspective-1000">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-1000 ease-out transform-style-3d ${index === currentSlide
                        ? 'opacity-100 scale-100 rotate-y-0'
                        : index < currentSlide
                          ? 'opacity-0 scale-90 -rotate-y-12 translate-x-20'
                          : 'opacity-0 scale-90 rotate-y-12 -translate-x-20'
                      }`}
                  >
                    <div className="relative w-80 h-96 mx-auto">
                      <div className="absolute inset-0 bg-white/40 backdrop-sm rounded-2xl transform rotate-10 scale-105"></div>
                      <div className="absolute inset-0 bg-black/30 backdrop rounded-2xl transform -rotate-10 scale-105"></div>
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute sm:flex hidden left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 transition-all duration-300 group"
      >
        <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute sm:flex hidden  right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 transition-all duration-300 group"
      >
        <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/80'
              }`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-reverse"></div>
    </div>
  );
}