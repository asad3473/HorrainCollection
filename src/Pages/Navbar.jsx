import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="w-full bg-black text-white fixed top-0 z-30 shadow-md px-6 py-4">
      <div className="flex items-center justify-around max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="text-2xl font-bold">MyLogo</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li className="relative group cursor-pointer">
            <Link 
              to="/" 
              className="relative  transition-all duration-300 hover:text-white block"
            >
              Home
              {/* Before element - Bottom underline */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          
          <li className="relative group cursor-pointer">
            <Link 
              to="/services" 
              className="relative  transition-all duration-300 hover:text-white block"
            >
              Service
              {/* Before element - Bottom underline */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          
          <li className="relative group cursor-pointer">
            <Link 
              to="/about" 
              className="relative  transition-all duration-300 hover:text-white block"
            >
              About
              {/* Before element - Bottom underline */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          
          <li className="relative group cursor-pointer">
            <Link 
              to="/contact" 
              className="relative  transition-all duration-300 hover:text-white block"
            >
              Contact
              {/* Before element - Bottom underline */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div
          className="md:hidden cursor-pointer text-3xl transition-transform duration-300 hover:scale-110"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX className="transform transition-transform duration-300 rotate-90" /> : <FiMenu className="transform transition-transform duration-300" />}
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
            open ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeMenu}
        ></div>

        {/* Mobile Menu */}
        <div 
          className={`fixed top-0 border-l-2 border-white right-0 h-full w-80 bg-black text-white transform transition-transform duration-500 ease-in-out z-50 shadow-2xl md:hidden ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="absolute top-4 right-4">
            <FiX 
              className="text-3xl cursor-pointer text-white hover:text-gray-400 transition-colors duration-300" 
              onClick={closeMenu}
            />
          </div>

          {/* Mobile Menu Items */}
          <ul className="flex flex-col gap-2 py-20 px-6 text-lg font-medium">
            {[
              { path: "/", label: "Home" },
              { path: "/services", label: "Service" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" }
            ].map((item, index) => (
              <li 
                key={item.path}
                onClick={closeMenu}
                className="relative group overflow-hidden"
              >
                <Link 
                  to={item.path}
                  className="relative flex items-center py-4 px-4 rounded-lg transition-all duration-300 hover:bg-gray-900 group-hover:pl-8 border-b border-gray-800"
                >
                  {/* Before element - Left accent bar */}
                  <span className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
                  
                  {/* Menu text */}
                  <span className="flex-1">{item.label}</span>
                  
                  {/* After element - Right arrow */}
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 transform">
                    →
                  </span>
                  
                  {/* Bottom underline */}
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Footer in mobile menu */}
          <div className="absolute bottom-8 left-0 right-0 text-center text-gray-400 text-sm">
            <p>MyLogo © 2024</p>
          </div>
        </div>
      </div>
    </nav>
  );
}