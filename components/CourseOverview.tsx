'use client';

import { BookOpen, TrendingUp, Target, Lightbulb } from 'lucide-react';

export default function CourseOverview() {
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
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="gradient-text">Atal Trade Effort?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                className={`bg-white p-6 rounded-2xl border-2 ${colors.border} card-hover`}
              >
                <div className={`${colors.bg} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-7 h-7 ${colors.icon}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

