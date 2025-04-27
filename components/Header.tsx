'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/#features' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Support', href: '/support' },
    { name: 'Legal', href: '/legal' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group transition-all duration-300">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-tc-blue-100 group-hover:border-tc-blue-400 transition-all duration-300 transform group-hover:scale-110">
              <Image 
                src="/images/logo.png" 
                alt="TripCraft Logo" 
                fill
                priority
                className="object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-tc-blue-600 to-tc-blue-800 bg-clip-text text-transparent transform transition duration-300 group-hover:tracking-wider">TripCraft</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`${
                  isActive(link.href)
                    ? 'text-tc-blue-600 font-medium'
                    : 'text-gray-600 hover:text-tc-blue-600'
                } transition-all duration-300 hover:-translate-y-1 transform relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-tc-blue-600 after:transition-all after:duration-300`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-gray-500 hover:text-gray-600 focus:outline-none transform transition-all duration-300 hover:rotate-180"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>

          {/* Download Button (Desktop) */}
          <div className="hidden md:flex">
            <Link
              href="https://apps.apple.com/us/app/tripcraft/id6743006079"
              className="bg-tc-blue-600 hover:bg-tc-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium 
              transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg shadow-md"
            >
              Download iOS App
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 py-2 border-t border-gray-200 animate-[fadeIn_0.3s_ease-in-out]">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`${
                      isActive(link.href)
                        ? 'text-tc-blue-600 font-medium'
                        : 'text-gray-600 hover:text-tc-blue-600'
                    } block transition-all duration-300 hover:translate-x-2 transform`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-gray-100">
                <Link
                  href="https://apps.apple.com/us/app/tripcraft/id6743006079"
                  className="block text-center bg-tc-blue-600 hover:bg-tc-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium 
                  transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Download iOS App
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
} 