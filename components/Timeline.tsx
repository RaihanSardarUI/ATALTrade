'use client';

import { Calendar, Clock, CheckCircle2, BookOpen, TrendingUp } from 'lucide-react';

export default function Timeline() {
  const level1Timeline = [
    { day: 1, title: 'Derivatives Basics', topics: 5 },
    { day: 2, title: 'Options Fundamentals', topics: 8 },
    { day: 3, title: 'Option Values', topics: 3 },
    { day: 4, title: 'Option Greeks', topics: 6 },
    { day: 5, title: 'Option Build-up', topics: 6 },
    { day: 6, title: 'Market Volatility', topics: 4 },
  ];

  const level2Timeline = [
    { day: 1, title: 'Technical Analysis', topics: 3 },
    { day: 2, title: 'Candlestick Patterns', topics: 5 },
    { day: 3, title: 'Support & Resistance', topics: 6 },
    { day: 4, title: 'Indicators', topics: 4 },
    { day: 5, title: 'Market Trends', topics: 5 },
    { day: 6, title: 'Option Scalping', topics: 5 },
    { day: 7, title: 'Hedging Strategy', topics: 1 },
    { day: 8, title: 'Position Sizing', topics: 1 },
    { day: 9, title: 'Strategy Repair', topics: 1 },
    { day: 10, title: 'Virtual Trading', topics: 1 },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 section-gray relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-20 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/4 right-20 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container-custom mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Course <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            Structured day-by-day curriculum designed for progressive learning
          </p>
        </div>

        {/* Level 1 Timeline */}
        <div className="mb-24">
          <div className="flex items-center justify-center mb-12">
            <div className="glass-card text-green-700 px-8 py-4 rounded-2xl font-bold flex items-center gap-3 border-2 border-green-200 depth-shadow">
              <BookOpen className="w-6 h-6" />
              <span className="text-xl">LEVEL 1 - BASIC</span>
              <span className="bg-green-100 px-3 py-1 rounded-full text-sm">6 Days</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {level1Timeline.map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl border-2 border-green-200 card-hover depth-shadow group text-center"
              >
                {/* Day Number */}
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-black text-white">{item.day}</span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-gray-900 mb-2 leading-tight">
                  {item.title}
                </h3>

                {/* Topics Count */}
                <div className="flex items-center justify-center gap-1 text-xs text-gray-600">
                  <CheckCircle2 className="w-3 h-3 text-green-600" />
                  <span className="font-semibold">{item.topics} Topics</span>
                </div>

                {/* Progress Bar */}
                <div className="mt-4 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full transition-all duration-500"
                    style={{ width: `${Math.round(((index + 1) / 6) * 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Level 2 Timeline */}
        <div>
          <div className="flex items-center justify-center mb-12">
            <div className="glass-card text-orange-700 px-8 py-4 rounded-2xl font-bold flex items-center gap-3 border-2 border-orange-200 depth-shadow">
              <TrendingUp className="w-6 h-6" />
              <span className="text-xl">LEVEL 2 - ADVANCED</span>
              <span className="bg-orange-100 px-3 py-1 rounded-full text-sm">10 Days</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {level2Timeline.map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl border-2 border-orange-200 card-hover depth-shadow group text-center"
              >
                {/* Day Number */}
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-black text-white">{item.day}</span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-gray-900 mb-2 leading-tight">
                  {item.title}
                </h3>

                {/* Topics Count */}
                <div className="flex items-center justify-center gap-1 text-xs text-gray-600">
                  <CheckCircle2 className="w-3 h-3 text-orange-600" />
                  <span className="font-semibold">{item.topics} {item.topics === 1 ? 'Topic' : 'Topics'}</span>
                </div>

                {/* Progress Bar */}
                <div className="mt-4 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-full transition-all duration-500"
                    style={{ width: `${Math.round(((index + 1) / 10) * 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

