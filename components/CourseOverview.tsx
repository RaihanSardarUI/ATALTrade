'use client';

import { BookOpen, TrendingUp, Target, Lightbulb, BarChart3, Users, Award, Zap } from 'lucide-react';

export default function CourseOverview() {
  const stats = [
    { label: 'Success Rate', value: '95%', change: '+12%', positive: true },
    { label: 'Active Students', value: '2,500+', change: '+450', positive: true },
    { label: 'Course Completion', value: '89%', change: '+8%', positive: true },
    { label: 'Avg. ROI', value: '340%', change: '+25%', positive: true },
  ];
  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'From basic derivatives to advanced trading strategies, covering all essential topics.',
      color: 'blue',
    },
    {
      icon: TrendingUp,
      title: 'Real Market Experience',
      description: 'Learn from trainers with 15+ years of actual trading experience in Indian markets.',
      color: 'purple',
    },
    {
      icon: Target,
      title: 'Practical Approach',
      description: 'Focus on actionable strategies and real-world applications, not just theory.',
      color: 'green',
    },
    {
      icon: Lightbulb,
      title: 'NISM Certified',
      description: 'All our trainers are NISM certified professionals with proven track records.',
      color: 'orange',
    },
  ];

  const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
    blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200' },
    purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200' },
    green: { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-200' },
    orange: { bg: 'bg-orange-50', icon: 'text-orange-600', border: 'border-orange-200' },
  };

  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* Trading grid background */}
      <div className="absolute inset-0 chart-pattern opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Live Stats Ticker */}
        <div className="mb-16 overflow-hidden">
          <div className="glass-card rounded-2xl p-6 depth-shadow">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center reveal-animation" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <BarChart3 className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                  <div className="text-3xl font-extrabold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className={`text-sm font-bold ${stat.positive ? 'text-green-600' : 'text-red-600'} flex items-center justify-center gap-1`}>
                    <TrendingUp className="w-4 h-4" />
                    {stat.change}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Why Choose <span className="gradient-text">Atal Trade Effort?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            Our courses are designed to take you from beginner to expert,
            with a focus on practical skills and real-world applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = colorMap[feature.color];
            return (
              <div
                key={index}
                className={`glass-card p-8 rounded-3xl border-2 ${colors.border} card-hover depth-shadow group relative overflow-hidden`}
              >
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className={`${colors.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className={`w-8 h-8 ${colors.icon}`} />
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  
                  {/* Progress bar */}
                  <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 bar-grow" style={{ animationDelay: `${index * 200}ms` }}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

