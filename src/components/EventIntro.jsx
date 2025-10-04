import React from "react";

const EventIntro = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main heading section with fade-in animation */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Plan Smarter,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Celebrate Better —
            </span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-600 mb-8 leading-tight">
            AI-Powered Event
            <br />
            Management
          </h2>
        </div>

        {/* CTA buttons section with hover effects */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2">
            <span>Plan an Event</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
          <button className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
            <span>Try AI Assistant</span>
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </button>
        </div>

        {/* Animated dots */}
        <div className="flex justify-center space-x-2">
          {[0, 0.1, 0.2].map((delay) => (
            <div
              key={delay}
              className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
              style={{ animationDelay: `${delay}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventIntro;
