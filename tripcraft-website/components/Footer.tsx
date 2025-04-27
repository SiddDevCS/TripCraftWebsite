'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { 
      title: 'Product',
      links: [
        { name: 'Features', href: '/#features' },
        { name: 'How It Works', href: '/#how-it-works' },
        { name: 'Testimonials', href: '/#testimonials' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms of Use', href: '/legal?tab=terms' },
        { name: 'Privacy Policy', href: '/legal?tab=privacy' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'iOS App', href: 'https://apps.apple.com/us/app/tripcraft/id6743006079' },
        { name: 'Support', href: '/support' },
        { name: 'Contact Us', href: 'mailto:siddnative@gmail.com' },
      ]
    }
  ];

  return (
    <footer className="bg-gray-50 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 group transition-all duration-300">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-tc-blue-100 group-hover:border-tc-blue-400 transition-all duration-300 transform group-hover:scale-110">
                <Image 
                  src="/images/logo.png" 
                  alt="TripCraft Logo" 
                  fill
                  className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-tc-blue-600 to-tc-blue-800 bg-clip-text text-transparent transform transition duration-300 group-hover:tracking-wider">TripCraft</span>
            </Link>
            <p className="mt-4 text-gray-600 max-w-md transition-all duration-500 hover:text-gray-800">
              Advanced travel planning technology that helps you organize trips, pack efficiently, and navigate seamlessly while preserving your peace of mind.
            </p>
          </div>

          {/* Footer Navigation */}
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerLinks.map((category, idx) => (
              <div key={category.title} className="transform transition-all duration-500 hover:translate-y-[-10px]">
                <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-tc-blue-600 after:transition-all after:duration-300">
                  {category.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {category.links.map((link) => (
                    <li key={link.name} className="transform transition-all duration-300 hover:translate-x-2">
                      <Link 
                        href={link.href} 
                        className="text-base text-gray-600 hover:text-tc-blue-600 transition-colors duration-300 relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-tc-blue-600 after:transition-all after:duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row md:justify-between md:items-center">
          <p className="text-gray-500 text-sm animate-pulse">
            &copy; {currentYear} TripCraft. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/contact" className="text-gray-500 hover:text-tc-blue-600 text-sm transition-all duration-300 hover:-translate-y-1 transform inline-block">
              Contact Us
            </Link>
            <Link href="/support" className="text-gray-500 hover:text-tc-blue-600 text-sm transition-all duration-300 hover:-translate-y-1 transform inline-block">
              Support
            </Link>
            <a href="mailto:siddnative@gmail.com" className="text-gray-500 hover:text-tc-blue-600 text-sm transition-all duration-300 hover:-translate-y-1 transform inline-block">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 