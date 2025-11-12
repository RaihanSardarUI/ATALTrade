'use client';

import { MapPin, Phone, Youtube, Globe, Smartphone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            Ready to start your trading journey? Connect with us through any of these channels.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-effect p-8 rounded-3xl border-2 border-red-200 card-hover group shadow-xl shine-effect"
          >
            <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Youtube className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              YouTube Channel
            </h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our channel for informative content, market insights, and valuable updates.
            </p>
            <span className="text-red-600 font-semibold group-hover:underline">
              Visit Channel →
            </span>
          </a>

          {/* Website */}
          <a
            href="https://ataltradeeffort.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-effect p-8 rounded-3xl border-2 border-blue-200 card-hover group shadow-xl shine-effect"
          >
            <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Visit Website
            </h3>
            <p className="text-gray-600 mb-4">
              Want to know more about the financial market? Find detailed answers on our website.
            </p>
            <span className="text-blue-600 font-semibold group-hover:underline">
              Visit Website →
            </span>
          </a>

          {/* Mobile App */}
          <a
            href="#"
            className="glass-effect p-8 rounded-3xl border-2 border-green-200 card-hover group shadow-xl shine-effect"
          >
            <div className="bg-green-50 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Smartphone className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Download App
            </h3>
            <p className="text-gray-600 mb-4">
              Join our growing community on our Android app! Connect with others and learn more.
            </p>
            <span className="text-green-600 font-semibold group-hover:underline">
              Download Now →
            </span>
          </a>
        </div>

        {/* Contact Info */}
        <div className="gradient-bg rounded-3xl p-8 md:p-12 text-white shadow-2xl shine-effect">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="bg-white/20 p-3 rounded-lg flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Our Office</h3>
                <p className="text-blue-100 leading-relaxed">
                  ANO 402, 4th Floor, North Block<br />
                  Astra Tower, Action Area IIC<br />
                  New Town, Kolkata 700135
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="bg-white/20 p-3 rounded-lg flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Contact Numbers</h3>
                <div className="space-y-2">
                  <a
                    href="tel:7719100300"
                    className="block text-blue-100 hover:text-white transition-colors text-lg font-semibold"
                  >
                    7719100300
                  </a>
                  <a
                    href="tel:7719100400"
                    className="block text-blue-100 hover:text-white transition-colors text-lg font-semibold"
                  >
                    7719100400
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p className="text-xl mb-4">
              Ready to transform your trading career?
            </p>
            <a
              href="tel:7719100300"
              className="inline-block bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 shine-effect text-lg"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

