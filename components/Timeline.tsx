'use client';

import { Calendar, Clock, CheckCircle2 } from 'lucide-react';

export default function Timeline() {
  const level1Timeline = [
    {
      day: 'DAY 1',
      topics: ['Segment of Market', 'What is Derivatives?', 'Kind of Derivatives', 'Future Contracts', 'Forwards'],
    },
    {
      day: 'DAY 2',
      topics: ['What is Options', 'Option Buyer & Sellers', 'Types of Option', 'Expiry', 'Moneyness of Option', 'Bid, Ask, Spread', 'Spot Price', 'Strike Price'],
    },
    {
      day: 'DAY 3',
      topics: ['Premium Value', 'Intrinsic Value', 'Time Value'],
    },
    {
      day: 'DAY 4',
      topics: ['Delta', 'Gamma', 'Theta', 'Vega', 'Rho', 'Option Greeks help traders assess and manage risks'],
    },
    {
      day: 'DAY 5',
      topics: ['Open Interest (OI)', 'Price Movement', 'Long Build-up', 'Short Build-up', 'Long Unwinding', 'Short Covering'],
    },
    {
      day: 'DAY 6',
      topics: ['Historical Volatility', 'Implied Volatility', 'Economic Events', 'Impact on asset prices'],
    },
  ];

  const level2Timeline = [
    {
      day: 'DAY 1',
      topics: ['What is Technical Analysis', 'Why Use Technical Analysis', 'Overview of Chart'],
    },
    {
      day: 'DAY 2',
      topics: ['How to Create a Candle', 'Types of Candle', 'Morning Star', 'Evening Star', 'Advanced Candlestick Pattern'],
    },
    {
      day: 'DAY 3',
      topics: ['Previous Day Perspective', 'Swing Level Perspective', 'Big Candle Perspective', 'Higher High, Higher Low', 'Lower High, Lower Low', 'Central Pivot Range'],
    },
    {
      day: 'DAY 4',
      topics: ['Moving Average', 'Central Pivot Range', 'VWAP', 'Pivot Point'],
    },
    {
      day: 'DAY 5',
      topics: ['Understanding Trend Line', 'Short Term Trend', 'Long Term Trend', 'Trending and Trailing', 'Target & Stop Loss'],
    },
    {
      day: 'DAY 6',
      topics: ['Option Buy', 'Short Term Focus', 'High Volume', 'Liquidity', 'Rapid Execution'],
    },
    {
      day: 'DAY 7',
      topics: ['Hedging Secret (will explain in class)'],
    },
    {
      day: 'DAY 8',
      topics: ['Position Sizing (will explain in class)'],
    },
    {
      day: 'DAY 9',
      topics: ['Strategy Modification & Repair (will explain in class)'],
    },
    {
      day: 'DAY 10',
      topics: ['Virtual Trading (will explain in class)'],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/4 right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
            <div className="glass-effect text-blue-700 px-8 py-4 rounded-2xl font-bold flex items-center gap-3 border-2 border-blue-200 shadow-xl">
              <Calendar className="w-6 h-6" />
              <span className="text-xl">LEVEL 1 - BASIC</span>
              <span className="bg-blue-100 px-3 py-1 rounded-full text-sm">6 Days</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {level1Timeline.map((item, index) => (
              <div
                key={index}
                className="glass-effect p-8 rounded-3xl border-2 border-blue-200 card-hover shadow-xl group relative overflow-hidden"
              >
                {/* Day Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-extrabold gradient-text">{item.day}</h3>
                  </div>
                  <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                    {item.topics.length} Topics
                  </div>
                </div>

                {/* Topics List */}
                <ul className="space-y-3">
                  {item.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700 group/item">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                      <span className="font-medium leading-relaxed">{topic}</span>
                    </li>
                  ))}
                </ul>

                {/* Progress Indicator */}
                <div className="mt-6 pt-6 border-t border-blue-100">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="font-semibold">Day {index + 1} of 6</span>
                    <span className="bg-blue-50 px-2 py-1 rounded-full font-bold text-blue-700">
                      {Math.round(((index + 1) / 6) * 100)}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Level 2 Timeline */}
        <div>
          <div className="flex items-center justify-center mb-12">
            <div className="glass-effect text-purple-700 px-8 py-4 rounded-2xl font-bold flex items-center gap-3 border-2 border-purple-200 shadow-xl">
              <Calendar className="w-6 h-6" />
              <span className="text-xl">LEVEL 2 - ADVANCED</span>
              <span className="bg-purple-100 px-3 py-1 rounded-full text-sm">10 Days</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {level2Timeline.map((item, index) => (
              <div
                key={index}
                className="glass-effect p-6 rounded-3xl border-2 border-purple-200 card-hover shadow-xl group relative overflow-hidden"
              >
                {/* Day Badge */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-2.5 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-extrabold gradient-text">{item.day}</h3>
                  </div>
                  <div className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-bold inline-block">
                    {item.topics.length} {item.topics.length === 1 ? 'Topic' : 'Topics'}
                  </div>
                </div>

                {/* Topics List */}
                <ul className="space-y-2.5">
                  {item.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700 group/item">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                      <span className="font-medium leading-relaxed">{topic}</span>
                    </li>
                  ))}
                </ul>

                {/* Progress Indicator */}
                <div className="mt-5 pt-5 border-t border-purple-100">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="font-semibold">Day {index + 1}/10</span>
                    <span className="bg-purple-50 px-2 py-1 rounded-full font-bold text-purple-700">
                      {Math.round(((index + 1) / 10) * 100)}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

