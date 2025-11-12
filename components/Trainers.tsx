'use client';

import { Award, Briefcase, TrendingUp, Target } from 'lucide-react';

export default function Trainers() {
  const trainers = [
    {
      name: 'Brindaban Sarkar',
      title: 'Founder & Lead Trainer',
      certification: 'NISM Certified',
      experience: '15 Years Market Experience',
      specialty: '8 Years Option Market Trainer',
      description: 'Founder of Atal Trade Effort, Public Figure',
      icon: Award,
      color: 'blue',
    },
    {
      name: 'Sanjoy Dutta',
      title: 'Senior Research Analyst',
      certification: 'NISM Certified',
      experience: 'Markets Experience Since 2008',
      specialty: 'Option Writing Expert',
      description: 'MBA in Finance, CAIIB & NSE Certified Research Analyst',
      icon: Briefcase,
      color: 'purple',
    },
    {
      name: 'Anuj Kr. Rawani',
      title: 'Technical Analyst',
      certification: 'NISM Certified',
      experience: 'Live Trader since 2018',
      specialty: 'Strategy Repairing Expert',
      description: 'Technical Analyst with proven track record',
      icon: TrendingUp,
      color: 'green',
    },
    {
      name: 'Sourav Das',
      title: 'Senior Trainer',
      certification: 'NISM Certified',
      experience: '9 Years Option Market Experience',
      specialty: 'Technical Analyst',
      description: 'Trainer for the last 5 Years',
      icon: Target,
      color: 'orange',
    },
  ];

  const colorMap: Record<string, { bg: string; icon: string; border: string; badge: string }> = {
    blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-700' },
    purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200', badge: 'bg-purple-100 text-purple-700' },
    green: { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-200', badge: 'bg-green-100 text-green-700' },
    orange: { bg: 'bg-orange-50', icon: 'text-orange-600', border: 'border-orange-200', badge: 'bg-orange-100 text-orange-700' },
  };

  return (
    <section id="trainers" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="gradient-text">Expert Trainers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from NISM certified professionals with decades of combined experience
            in the Indian financial markets.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => {
            const Icon = trainer.icon;
            const colors = colorMap[trainer.color];
            return (
              <div
                key={index}
                className={`bg-white p-6 rounded-2xl border-2 ${colors.border} card-hover`}
              >
                {/* Icon/Avatar */}
                <div className={`${colors.bg} w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                  <Icon className={`w-10 h-10 ${colors.icon}`} />
                </div>

                {/* Name & Title */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {trainer.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{trainer.title}</p>
                  <span className={`inline-block ${colors.badge} px-3 py-1 rounded-full text-xs font-semibold`}>
                    {trainer.certification}
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <div className={`w-1.5 h-1.5 rounded-full ${colors.icon.replace('text-', 'bg-')} mt-1.5 mr-2 flex-shrink-0`}></div>
                    <span className="text-gray-700">{trainer.experience}</span>
                  </div>
                  <div className="flex items-start">
                    <div className={`w-1.5 h-1.5 rounded-full ${colors.icon.replace('text-', 'bg-')} mt-1.5 mr-2 flex-shrink-0`}></div>
                    <span className="text-gray-700">{trainer.specialty}</span>
                  </div>
                  <div className="flex items-start">
                    <div className={`w-1.5 h-1.5 rounded-full ${colors.icon.replace('text-', 'bg-')} mt-1.5 mr-2 flex-shrink-0`}></div>
                    <span className="text-gray-700">{trainer.description}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Learn from the Best</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Our trainers bring real-world experience and proven strategies to help you
            succeed in the markets. Get personalized guidance and mentorship throughout your journey.
          </p>
        </div>
      </div>
    </section>
  );
}

