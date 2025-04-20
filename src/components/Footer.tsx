import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Ravi Raj Singh</h2>
            <p className="text-gray-400">Software Developer</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">Skills</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Ravi Raj Singh. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <span className="text-gray-400 mr-2">Made with</span>
            <Heart className="w-4 h-4 text-red-500 mx-1" />
            <span className="text-gray-400">in India</span>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="mt-6 md:mt-0 bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300 focus:outline-none"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;