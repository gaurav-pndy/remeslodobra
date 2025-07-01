import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">RemesloDobra</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a 
              href="#home" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </a>
            <a 
              href="#programs" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Programs
            </a>
            <a 
              href="#impact" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Impact
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors font-medium">
              Donate Now
            </button>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                About
              </a>
              <a 
                href="#programs" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Programs
              </a>
              <a 
                href="#impact" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Impact
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Contact
              </a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors font-medium w-full">
                Donate Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;