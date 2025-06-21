'use client';

import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/assests/banner.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-2xl" />

      <div className="relative z-10 px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="mb-6 text-4xl font-bold text-white sm:text-6xl lg:text-7xl">
            Welcome to{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              GENROAR
            </span>
          </h1>
          <p className="max-w-3xl mx-auto mb-8 text-xl leading-relaxed text-white sm:text-2xl">
            Empowering businesses through innovative solutions in Fashion, Education, IT Services, and Social Media Management
          </p>

          <div className="flex flex-col items-center justify-center gap-4 mb-12 sm:flex-row">
            <button
              onClick={() => scrollToSection('services')}
              className="flex items-center gap-2 px-8 py-4 font-semibold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:scale-105"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('onepost')}
              className="flex items-center gap-2 px-8 py-4 font-semibold text-gray-700 transition-all duration-300 bg-white border-2 border-gray-200 rounded-full hover:border-blue-300 hover:text-blue-600"
            >
              <Play className="w-5 h-5" />
              Discover OnePost
            </button>
          </div>

          <div className="grid max-w-4xl grid-cols-2 gap-8 mx-auto md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-blue-600">4</div>
              <div className="text-white">Business Verticals</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-purple-600">1000+</div>
              <div className="text-white">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-blue-600">50+</div>
              <div className="text-white">Team Members</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-purple-600">24/7</div>
              <div className="text-white">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute w-20 h-20 bg-blue-200 rounded-full top-20 left-10 opacity-20 animate-bounce"></div>
      <div className="absolute w-16 h-16 delay-1000 bg-purple-200 rounded-full bottom-20 right-10 opacity-20 animate-bounce"></div>
    </section>
  );
}
