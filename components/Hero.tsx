'use client';

import { ArrowRight, TrendingUp, Award, Users, BookOpen, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden section-gradient">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 trading-grid opacity-30"></div>
      </div>

      <div className="container-custom mx-auto relative z-10 w-full">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass-effect px-6 py-3 rounded-full mb-8 shine-effect border border-green-200">
            <Award className="w-5 h-5 text-green-600 animate-pulse" />
            <span className="text-sm font-semibold text-green-700">
              NISM Certified Training Program
            </span>
            <Sparkles className="w-4 h-4 text-orange-600" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tight">
            Master the Art of
            <span className="block gradient-text mt-4">Options Trading</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed">
            Transform your trading journey with comprehensive courses designed by
            <span className="font-semibold text-gray-900"> NISM certified experts</span>. 
            From basic derivatives to advanced strategies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <a
              href="#courses"
              className="group inline-flex items-center justify-center px-10 py-5 gradient-bg text-white font-bold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 shine-effect text-lg"
            >
              Explore Courses
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-5 glass-effect text-gray-800 font-bold rounded-2xl border-2 border-gray-300 hover:border-green-500 hover:text-green-600 transition-all duration-300 text-lg hover:scale-105"
            >
              Get in Touch
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="glass-card p-6 rounded-2xl depth-shadow card-hover group">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-4xl font-black gradient-text">15+</h3>
                  <p className="text-gray-600 font-semibold text-sm">Years Experience</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl depth-shadow card-hover group">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-4xl font-black gradient-text">2</h3>
                  <p className="text-gray-600 font-semibold text-sm">Course Levels</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl depth-shadow card-hover group">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-4xl font-black gradient-text">4</h3>
                  <p className="text-gray-600 font-semibold text-sm">Expert Trainers</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl depth-shadow card-hover group">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-4xl font-black gradient-text">100%</h3>
                  <p className="text-gray-600 font-semibold text-sm">NISM Certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

