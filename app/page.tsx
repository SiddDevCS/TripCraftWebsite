import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import DownloadButton from '@/components/DownloadButton';

export default function Home() {
  const features = [
    {
      title: 'Smart Packing Lists',
      description: 'Create customized packing lists based on your destination, trip duration, weather, and activities.',
      icon: 'luggage',
    },
    {
      title: 'Currency Converter',
      description: 'Convert between currencies with up-to-date exchange rates to help you budget your trip expenses.',
      icon: 'currency-exchange',
    },
    {
      title: 'Travel Tips',
      description: 'Access helpful travel tips categorized by topic to enhance your travel experience.',
      icon: 'lightbulb',
    },
    {
      title: 'Time Zone Converter',
      description: 'Easily check time differences between your home and destination to avoid confusion.',
      icon: 'clock',
    },
    {
      title: 'Plug Compatibility Guide',
      description: 'Find out which power adapters you need for your destination country.',
      icon: 'plug',
    },
    {
      title: 'Offline Maps',
      description: 'Download city maps for offline use when you don\'t have internet access abroad.',
      icon: 'map',
    },
  ];

  // Using local avatar images from /public/images/avatars/
  const testimonials = [
    {
      name: 'Baljeet Kumar',
      role: 'Adventure Traveler',
      content: 'TripCraft has completely transformed how I pack for my adventures. The smart packing lists are a game-changer!',
      avatar: '/images/avatars/avatar1.jpg',
    },
    {
      name: 'James Wood',
      role: 'Business Traveler',
      content: 'As someone who travels for business frequently, the currency and time zone converters save me so much time and confusion.',
      avatar: '/images/avatars/avatar2.jpg',
    },
    {
      name: 'Michael Chen',
      role: 'Family Vacation Planner',
      content: 'Planning family trips used to be stressful, but TripCraft helps me stay organized and prepared for everything.',
      avatar: '/images/avatars/avatar3.jpg',
    },
  ];

  const stats = [
    { number: '4.9/5', text: 'App Store Rating' },
    { number: '99%', text: 'User Satisfaction' },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tc-blue-600 to-tc-blue-800 text-white">
        <div className="container mx-auto px-6 py-24 md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              The Ultimate Travel <br />
              <span className="relative">
                Companion
                <span className="absolute bottom-1 left-0 w-full h-1 bg-tc-blue-300 animate-pulse"></span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-tc-blue-100 max-w-xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Plan smarter, pack better, and travel with confidence using TripCraft's all-in-one travel tools.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <DownloadButton />
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-slide-down">
            <div className="relative w-64 h-[500px] rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500 hover:scale-105">
              <Image 
                src="/images/app-screenshot.jpg" 
                alt="TripCraft App Screenshot" 
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-3xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white" id="features">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Advanced Travel Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our proprietary tools help you plan, pack, and navigate seamlessly throughout your journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${0.1 * index}s` }}>
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50" id="how-it-works">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How TripCraft Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to transform your travel experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-20 h-20 bg-tc-blue-100 text-tc-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold transform transition-all duration-500 hover:scale-110 hover:bg-tc-blue-200 animate-float">1</div>
              <h3 className="text-xl font-bold mb-3">Download the App</h3>
              <p className="text-gray-600">Get TripCraft from the App Store on your mobile device</p>
              <div className="mt-4">
                <Link href="https://apps.apple.com/us/app/tripcraft/id6743006079" className="text-tc-blue-600 font-medium transition-all duration-300 hover:text-tc-blue-800 inline-block transform hover:translate-y-[-5px]">
                  Download Now →
                </Link>
              </div>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="w-20 h-20 bg-tc-blue-100 text-tc-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold transform transition-all duration-500 hover:scale-110 hover:bg-tc-blue-200 animate-float" style={{ animationDelay: "0.2s" }}>2</div>
              <h3 className="text-xl font-bold mb-3">Create Your Trip</h3>
              <p className="text-gray-600">Enter your destination, dates, and preferences to customize your experience</p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="w-20 h-20 bg-tc-blue-100 text-tc-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold transform transition-all duration-500 hover:scale-110 hover:bg-tc-blue-200 animate-float" style={{ animationDelay: "0.4s" }}>3</div>
              <h3 className="text-xl font-bold mb-3">Travel With Confidence</h3>
              <p className="text-gray-600">Use our tools to navigate, convert currencies, and stay organized during your trip</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-tc-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
                <p className="text-4xl md:text-5xl font-bold mb-2 animate-pulse-slow">{stat.number}</p>
                <p className="text-tc-blue-100">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white" id="testimonials">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of happy travelers who made their trips better with TripCraft.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${0.2 * index}s` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 bg-gradient-to-r from-tc-blue-600 to-tc-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-fade-in">Ready to Transform Your <br />Travel Experience?</h2>
          <p className="text-xl text-tc-blue-100 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Download TripCraft today and start planning your next adventure with confidence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-bounce-slow">
            <DownloadButton />
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center transform transition-all duration-300 hover:scale-110">
              <div className="w-4 h-4 bg-tc-blue-300 rounded-full mr-2 animate-pulse"></div>
              <span className="text-tc-blue-100">Enterprise Security</span>
            </div>
            <div className="flex items-center transform transition-all duration-300 hover:scale-110">
              <div className="w-4 h-4 bg-tc-blue-300 rounded-full mr-2 animate-pulse" style={{ animationDelay: "0.2s" }}></div>
              <span className="text-tc-blue-100">Offline Access</span>
            </div>
            <div className="flex items-center transform transition-all duration-300 hover:scale-110">
              <div className="w-4 h-4 bg-tc-blue-300 rounded-full mr-2 animate-pulse" style={{ animationDelay: "0.4s" }}></div>
              <span className="text-tc-blue-100">Regular Updates</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 