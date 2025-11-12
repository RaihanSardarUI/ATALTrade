'use client';

import { LineChart, CandlestickChart, Shield, BarChart2, TrendingUp, Zap, Target, Settings } from 'lucide-react';

export default function Level2Course() {
  const modules = [
    {
      number: '1',
      icon: LineChart,
      title: 'Technical Analysis',
      description: 'Chart reading fundamentals and analysis techniques',
      color: 'blue',
    },
    {
      number: '2',
      icon: CandlestickChart,
      title: 'Candlestick Patterns',
      description: 'Advanced pattern recognition and applications',
      color: 'purple',
    },
    {
      number: '3',
      icon: Shield,
      title: 'Support & Resistance',
      description: 'Key price levels and trading zones',
      color: 'green',
    },
    {
      number: '4',
      icon: BarChart2,
      title: 'Technical Indicators',
      description: 'Popular indicators for market analysis',
      color: 'orange',
    },
    {
      number: '5',
      icon: TrendingUp,
      title: 'Trend Trading',
      description: 'Identifying and trading market trends',
      color: 'red',
    },
    {
      number: '6',
      icon: Zap,
      title: 'Option Scalping',
      description: 'Short-term trading for quick profits',
      color: 'indigo',
    },
    {
      number: '7',
      icon: Target,
      title: 'Hedging Secrets',
      description: 'Advanced strategies (details in class)',
      color: 'pink',
    },
    {
      number: '8',
      icon: Settings,
      title: 'Position Sizing',
      description: 'Risk management techniques (details in class)',
      color: 'teal',
    },
  ];

  const colorMap: Record<string, { bg: string; icon: string; border: string; badge: string }> = {
    blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-700' },
    purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200', badge: 'bg-purple-100 text-purple-700' },
    green: { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-200', badge: 'bg-green-100 text-green-700' },
    orange: { bg: 'bg-orange-50', icon: 'text-orange-600', border: 'border-orange-200', badge: 'bg-orange-100 text-orange-700' },
    red: { bg: 'bg-red-50', icon: 'text-red-600', border: 'border-red-200', badge: 'bg-red-100 text-red-700' },
    indigo: { bg: 'bg-indigo-50', icon: 'text-indigo-600', border: 'border-indigo-200', badge: 'bg-indigo-100 text-indigo-700' },
    pink: { bg: 'bg-pink-50', icon: 'text-pink-600', border: 'border-pink-200', badge: 'bg-pink-100 text-pink-700' },
    teal: { bg: 'bg-teal-50', icon: 'text-teal-600', border: 'border-teal-200', badge: 'bg-teal-100 text-teal-700' },
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 section-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container-custom mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block glass-effect text-orange-700 px-6 py-3 rounded-full font-bold mb-6 border-2 border-orange-200 shadow-lg">
            LEVEL 2
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
            <span className="gradient-text">Advanced Course</span> - Mastery
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Take your trading to the next level with advanced technical analysis and sophisticated
            option strategies. Learn from real market scenarios and expert techniques.
          </p>
        </div>

        {/* Course Duration */}
        <div className="bg-gradient-to-r from-orange-50 to-green-50 rounded-2xl p-8 mb-12 border-2 border-orange-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">10-Day Advanced Program</h3>
              <p className="text-gray-600">Master technical analysis and advanced trading strategies with hands-on practice</p>
            </div>
            <div className="mt-4 md:mt-0 bg-white px-6 py-3 rounded-xl shadow-md">
              <span className="text-3xl font-bold gradient-text">10 Days</span>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          <h3 className="text-3xl font-bold mb-4">Take Your Trading to the Next Level</h3>
          <p className="text-lg mb-6 opacity-90">
            Master advanced strategies and technical analysis with our Level 2 course
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:scale-105 transition-transform shadow-xl"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </section>
  );
}

