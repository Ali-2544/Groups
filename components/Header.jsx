
'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}

            <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              GENROAR
            </span>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 md:flex">
            <button

              onClick={() => scrollToSection('home')}
              className={`font-medium transition-colors hover:text-blue-600 ${scrolled ? 'text-black ' : 'text-white'
                }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors hover:text-blue-600 ${scrolled ? 'text-black ' : 'text-white'
                }`}            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`font-medium transition-colors hover:text-blue-600 ${scrolled ? 'text-black ' : 'text-white'
                }`}            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('onepost')}
              className={`font-medium transition-colors hover:text-blue-600 ${scrolled ? 'text-black ' : 'text-white'
                }`}            >
              OnePost
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-colors hover:text-blue-600 ${scrolled ? 'text-black ' : 'text-white'
                }`}            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 transition-colors hover:text-blue-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute left-0 w-full shadow-lg md:hidden top-16 bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col p-4 space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="font-medium text-left text-gray-700 transition-colors hover:text-blue-600"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="font-medium text-left text-gray-700 transition-colors hover:text-blue-600"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="font-medium text-left text-gray-700 transition-colors hover:text-blue-600"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('onepost')}
                className="font-medium text-left text-gray-700 transition-colors hover:text-blue-600"
              >
                OnePost
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="font-medium text-left text-gray-700 transition-colors hover:text-blue-600"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}