import React from "react";
import { Mail } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl mx-auto text-center">
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            <span className="inline-block">Welcome to My Portfolio!</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8 animate-fade-in-delay">
            I'm{" "}
            <span className="font-semibold text-blue-600">Ravi Raj Singh</span>,
            a passionate software developer skilled in C/C++, Java, JavaScript,
            and more. Explore my projects and connect with me!
          </p>
          <div className="animate-fade-in-delay-2">
            <a
              href="mailto:ravirajsingh9316@gmail.com"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 mr-4"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </a>
            <a
              href="/General cv_12200517_RaviRajSingh.pdf" // Link to the PDF in the public folder
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300"
              target="_blank" // Optional: to open in a new tab
              rel="noopener noreferrer" // Security enhancement when using target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a
          href="#about"
          className="text-gray-500 hover:text-gray-700 transition-all duration-300"
          aria-label="Scroll to About section"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-teal-200 rounded-full opacity-20 blur-2xl"></div>
    </section>
  );
};

export default Hero;
