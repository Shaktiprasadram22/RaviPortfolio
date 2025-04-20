import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

interface NavItemProps {
  label: string;
  href: string;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, href, onClick }) => {
  return (
    <li>
      <a
        href={href}
        className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium text-sm transition-colors duration-300"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
          });
          onClick();
        }}
      >
        {label}
      </a>
    </li>
  );
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <span className="font-bold text-2xl text-blue-600">Ravi Raj</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-2">
              {navItems.map((item, index) => (
                <NavItem 
                  key={index} 
                  label={item.label} 
                  href={item.href} 
                  onClick={closeMenu} 
                />
              ))}
            </ul>
          </nav>
          
          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://github.com/ravirajsingh" 
              target="_blank" 
              rel="noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ravirajsingh" 
              target="_blank" 
              rel="noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <NavItem 
                  key={index} 
                  label={item.label} 
                  href={item.href} 
                  onClick={closeMenu} 
                />
              ))}
            </ul>
            
            {/* Social Icons - Mobile */}
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-200">
              <a 
                href="https://github.com/ravirajsingh" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ravirajsingh" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;