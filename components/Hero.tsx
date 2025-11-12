'use client';

import { ArrowRight, TrendingUp, Award, Users, BookOpen, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass-effect px-6 py-3 rounded-full mb-8 shine-effect border border-blue-200">
            <Award className="w-5 h-5 text-blue-600 animate-pulse" />
            <span className="text-sm font-semibold text-blue-700">
              NISM Certified Training Program
            </span>
            <Sparkles className="w-4 h-4 text-purple-600" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 mb-6 leading-tight">
            Master the Art of
            <span className="block gradient-text mt-3 text-6xl md:text-8xl lg:text-9xl">Options Trading</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Transform your trading journey with comprehensive courses designed by
            industry experts. From basic derivatives to advanced strategies,
            we've got you covered.
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
              className="inline-flex items-center justify-center px-10 py-5 glass-effect text-gray-800 font-bold rounded-2xl border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 text-lg hover:scale-105"
            >
              Get in Touch
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass-effect p-8 rounded-3xl shadow-xl card-hover border border-blue-100 group">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-5xl font-extrabold gradient-text mb-3">15+</h3>
              <p className="text-gray-700 font-semibold text-lg">Years of Experience</p>
            </div>

            <div className="glass-effect p-8 rounded-3xl shadow-xl card-hover border border-purple-100 group">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-5xl font-extrabold gradient-text mb-3">2</h3>
              <p className="text-gray-700 font-semibold text-lg">Comprehensive Levels</p>
            </div>

            <div className="glass-effect p-8 rounded-3xl shadow-xl card-hover border border-green-100 group">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-5xl font-extrabold gradient-text mb-3">4</h3>
              <p className="text-gray-700 font-semibold text-lg">Expert Trainers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

