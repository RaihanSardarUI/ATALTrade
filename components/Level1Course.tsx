'use client';

import { Layers, DollarSign, Activity, TrendingUp, BarChart3, Zap } from 'lucide-react';

export default function Level1Course() {
  const modules = [
    {
      number: '1',
      icon: Layers,
      title: 'Basic Derivatives',
      description: 'Foundation of derivatives trading and market segments',
      color: 'blue',
    },
    {
      number: '2',
      icon: DollarSign,
      title: 'Basic Options',
      description: 'Essential options concepts and pricing fundamentals',
      color: 'purple',
    },
    {
      number: '3',
      icon: Activity,
      title: 'Option Values',
      description: 'Understanding premium components and valuation',
      color: 'green',
    },
    {
      number: '4',
      icon: TrendingUp,
      title: 'Option Greeks',
      description: 'Key sensitivity measures for risk management',
      color: 'orange',
    },
    {
      number: '5',
      icon: BarChart3,
      title: 'Option Build-up',
      description: 'Market dynamics and position analysis techniques',
      color: 'red',
    },
    {
      number: '6',
      icon: Zap,
      title: 'Market Volatility',
      description: 'Volatility impact and trading strategies',
      color: 'indigo',
    },
  ];

  const colorMap: Record<string, { bg: string; icon: string; border: string; badge: string }> = {
    blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-700' },
    purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200', badge: 'bg-purple-100 text-purple-700' },
    green: { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-200', badge: 'bg-green-100 text-green-700' },
    orange: { bg: 'bg-orange-50', icon: 'text-orange-600', border: 'border-orange-200', badge: 'bg-orange-100 text-orange-700' },
    red: { bg: 'bg-red-50', icon: 'text-red-600', border: 'border-red-200', badge: 'bg-red-100 text-red-700' },
    indigo: { bg: 'bg-indigo-50', icon: 'text-indigo-600', border: 'border-indigo-200', badge: 'bg-indigo-100 text-indigo-700' },
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 section-gray relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container-custom mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block glass-effect text-green-700 px-6 py-3 rounded-full font-bold mb-6 border-2 border-green-200 shadow-lg">
            LEVEL 1
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
            <span className="gradient-text">Basic Course</span> - Foundation
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Build a solid foundation in derivatives and options trading. Perfect for beginners
            who want to understand the fundamentals before diving into advanced strategies.
          </p>
        </div>

        {/* Course Duration */}
        <div className="bg-gradient-to-r from-green-50 to-orange-50 rounded-2xl p-8 mb-12 border-2 border-green-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">6-Day Comprehensive Program</h3>
              <p className="text-gray-600">Complete curriculum covering all essential topics in options trading</p>
            </div>
            <div className="mt-4 md:mt-0 bg-white px-6 py-3 rounded-xl shadow-md">
              <span className="text-3xl font-bold gradient-text">7 Days</span>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => {
            const Icon = module.icon;
            const colors = colorMap[module.color];
            return (
              <div
                key={index}
                className={`glass-effect p-8 rounded-3xl border-2 ${colors.border} card-hover relative overflow-hidden shadow-xl group`}
              >
                {/* Number Badge */}
                <div className={`absolute top-4 right-4 ${colors.badge} w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg`}>
                  {module.number}
                </div>

                {/* Icon */}
                <div className={`${colors.bg} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 ${colors.icon}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 pr-12">
                  {module.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {module.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 gradient-bg rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Trading Journey?</h3>
          <p className="text-lg mb-6 opacity-90">
            Join our Level 1 course and build a strong foundation in options trading
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-white text-green-600 font-bold rounded-xl hover:scale-105 transition-transform shadow-xl"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </section>
  );
}

