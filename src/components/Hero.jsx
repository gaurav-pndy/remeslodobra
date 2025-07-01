import React from "react";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/6995211/pexels-photo-6995211.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="People helping each other"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-900/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Making the World a
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent block">
            Better Place
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join us in our mission to create positive change in communities around
          the world. Every act of kindness matters, every donation counts.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2 shadow-lg">
            <span>Start Helping Today</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border border-white/30 flex items-center space-x-2">
            <Play className="w-5 h-5" />
            <span>Watch Our Story</span>
          </button>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">50K+</div>
            <div className="text-gray-200">Lives Impacted</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">25+</div>
            <div className="text-gray-200">Countries Reached</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">100+</div>
            <div className="text-gray-200">Active Programs</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
