import React from "react";
// import smart

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-[#0b0e1a] shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-white font-semibold text-xl">
          <img src="{ }" alt="logo" className="w-7 h-7" />
          <span>SmartEventAI</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <li>
            <a href="#home" className="hover:text-white transition-colors">Home</a>
          </li>
          <li>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
          </li>
          <li>
            <a href="#ai-planner" className="hover:text-white transition-colors">AI Planner</a>
          </li>
          <li>
            <a href="#events" className="hover:text-white transition-colors">Events</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </li>
          <li>
            <a href="#login" className="hover:text-white transition-colors">Login</a>
          </li>
        </ul>

        {/* Sign Up Button */}
        <button className="bg-indigo-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-indigo-500 hover:scale-105 transition-all duration-300">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
