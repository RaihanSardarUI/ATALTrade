'use client';

import { Check, Smartphone, Video, Calendar, Infinity } from 'lucide-react';

export default function Pricing() {
  const packages = [
    {
      name: 'Package I',
      price: '₹999',
      duration: '7 Days',
      features: [
        { text: 'Online Class', included: true },
        { text: 'Recorded Class', included: true },
        { text: '7 Days Course', included: true },
        { text: 'Mobile App 1 Month Access', included: true },
        { text: 'Offline Class', included: false },
      ],
      color: 'blue',
      popular: false,
    },
    {
      name: 'Package II',
      price: '₹3,999',
      duration: '7 Days',
      features: [
        { text: 'Online and Offline Class', included: true },
        { text: 'Live and Recording', included: true },
        { text: '7 Days Course', included: true },
        { text: 'Mobile App 3 Months Access', included: true },
        { text: 'Premium Support', included: true },
      ],
      color: 'purple',
      popular: false,
    },
    {
      name: 'Package III',
      price: '₹6,999',
      duration: '7 + 10 Days',
      features: [
        { text: 'Online Class', included: true },
        { text: 'Live and Recording', included: true },
        { text: '7 Days + 10 Days Course', included: true },
        { text: 'Mobile App 1 Year Access', included: true },
        { text: 'Both Level 1 & 2', included: true },
      ],
      color: 'green',
      popular: true,
    },
    {
      name: 'Package IV',
      price: '₹9,999',
      duration: '3 Months',
      features: [
        { text: 'Online and Offline Class', included: true },
        { text: 'Live and Recording', included: true },
        { text: '3 Months Continuous Learning', included: true },
        { text: 'Mobile App Lifetime Access', included: true },
        { text: 'Priority Support & Mentorship', included: true },
      ],
      color: 'orange',
      popular: false,
    },
  ];

  const colorMap: Record<string, { bg: string; border: string; badge: string; button: string }> = {
    blue: { 
      bg: 'bg-blue-50', 
      border: 'border-blue-200', 
      badge: 'bg-blue-100 text-blue-700',
      button: 'bg-blue-600 hover:bg-blue-700'
    },
    purple: { 
      bg: 'bg-purple-50', 
      border: 'border-purple-200', 
      badge: 'bg-purple-100 text-purple-700',
      button: 'bg-purple-600 hover:bg-purple-700'
    },
    green: { 
      bg: 'bg-green-50', 
      border: 'border-green-200', 
      badge: 'bg-green-100 text-green-700',
      button: 'bg-green-600 hover:bg-green-700'
    },
    orange: { 
      bg: 'bg-orange-50', 
      border: 'border-orange-200', 
      badge: 'bg-orange-100 text-orange-700',
      button: 'bg-orange-600 hover:bg-orange-700'
    },
  };

  const icons = {
    'Mobile App': Smartphone,
    'Online': Video,
    'Duration': Calendar,
    'Lifetime': Infinity,
  };

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Choose Your <span className="gradient-text">Package</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            Flexible pricing options to suit your learning needs and budget.
            All packages include comprehensive course materials.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => {
            const colors = colorMap[pkg.color];
            return (
              <div
                key={index}
                className={`relative glass-effect p-8 rounded-3xl border-2 ${colors.border} ${
                  pkg.popular ? 'ring-4 ring-green-300 scale-105 shadow-2xl' : 'shadow-xl'
                } card-hover group`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Package Name */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className={`inline-block ${colors.badge} px-3 py-1 rounded-full text-sm font-semibold mb-4`}>
                    {pkg.duration}
                  </div>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold gradient-text mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-gray-600 text-sm">One-time payment</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full ${
                        feature.included ? 'bg-green-100' : 'bg-gray-100'
                      } flex items-center justify-center mt-0.5`}>
                        <Check className={`w-3 h-3 ${
                          feature.included ? 'text-green-600' : 'text-gray-400'
                        }`} />
                      </div>
                      <span className={`ml-3 text-sm ${
                        feature.included ? 'text-gray-700' : 'text-gray-400'
                      }`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className={`block w-full text-center py-4 px-6 ${colors.button} text-white font-bold rounded-xl transition-all duration-300 hover:shadow-2xl shine-effect hover:scale-105 group-hover:shadow-2xl`}
                >
                  Get Started
                </a>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              All Packages Include
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
              <div className="flex flex-col items-center">
                <Video className="w-8 h-8 text-blue-600 mb-2" />
                <p className="text-sm text-gray-700 font-medium">Live & Recorded Classes</p>
              </div>
              <div className="flex flex-col items-center">
                <Smartphone className="w-8 h-8 text-purple-600 mb-2" />
                <p className="text-sm text-gray-700 font-medium">Mobile App Access</p>
              </div>
              <div className="flex flex-col items-center">
                <Check className="w-8 h-8 text-green-600 mb-2" />
                <p className="text-sm text-gray-700 font-medium">Course Materials</p>
              </div>
              <div className="flex flex-col items-center">
                <Calendar className="w-8 h-8 text-orange-600 mb-2" />
                <p className="text-sm text-gray-700 font-medium">Flexible Schedule</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

