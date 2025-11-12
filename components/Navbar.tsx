'use client';

import { useState, useEffect } from 'react';
import { Menu, X, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'courses', 'trainers', 'pricing', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#courses', label: 'Courses', id: 'courses' },
    { href: '#trainers', label: 'Trainers', id: 'trainers' },
    { href: '#pricing', label: 'Pricing', id: 'pricing' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-700 ${
        scrolled
          ? 'glass-card shadow-2xl border-b border-white/30 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      {/* Top accent line */}
      <div className={`h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center space-x-3 group relative">
            <div className="relative">
              <div className="absolute inset-0 gradient-bg blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative gradient-bg p-3 rounded-2xl group-hover:scale-110 transition-all duration-300 shadow-xl neon-glow">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold gradient-text tracking-tight">
                ATAL TRADE EFFORT
              </span>
              <span className="text-xs text-gray-500 font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                NISM Certified
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`relative px-5 py-2.5 font-bold transition-all duration-300 rounded-xl group ${
                  activeSection === link.id
                    ? 'text-white'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {/* Active background */}
                {activeSection === link.id && (
                  <span className="absolute inset-0 gradient-bg rounded-xl shadow-lg"></span>
                )}
                
                {/* Hover background */}
                <span className="absolute inset-0 bg-blue-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></span>
                
                {/* Label */}
                <span className="relative z-10">{link.label}</span>
                
                {/* Active indicator dot */}
                {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full"></span>
                )}
                
                {/* Hover underline */}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
              </a>
            ))}
            
            {/* CTA Button */}
            <a
              href="#contact"
              className="ml-4 px-6 py-2.5 gradient-bg text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 shine-effect neon-glow"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-xl glass-effect hover:scale-110 transition-all duration-300 shadow-lg"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-card border-t border-white/30 animate-slideUp">
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setIsOpen(false);
                  setActiveSection(link.id);
                }}
                className={`block px-5 py-3 rounded-xl font-bold transition-all duration-300 ${
                  activeSection === link.id
                    ? 'gradient-bg text-white shadow-lg'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="flex items-center justify-between">
                  {link.label}
                  {activeSection === link.id && (
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  )}
                </span>
              </a>
            ))}
            
            {/* Mobile CTA */}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 px-5 py-3 gradient-bg text-white font-bold rounded-xl text-center hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

