'use client';

import React from 'react';

export default function DownloadButton() {
  const href = 'https://apps.apple.com/us/app/tripcraft/id6743006079';
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center px-6 py-3 rounded-full font-medium 
      transition-all duration-300 transform hover:scale-105 hover:-translate-y-1
      bg-white text-tc-blue-600 hover:bg-gray-100 shadow-md hover:shadow-lg
      animate-[pulse_2s_ease-in-out_infinite]"
    >
      <svg className="h-6 w-6 mr-2 transition-transform duration-300 group-hover:rotate-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.37 17.5c-.64.8-1.21 1.52-1.72 2.15-.59.74-1.25 1.14-1.97 1.21-.53.04-1.16-.1-1.89-.45a8.5 8.5 0 0 0-1.92-.45c-.6 0-1.24.15-1.95.45-.7.31-1.27.46-1.7.45-.85-.03-1.61-.49-2.29-1.38-.75-.99-1.62-2.58-2.61-4.77C-.19 11.36-.18 8.47 1.4 6.41c1.12-1.45 2.57-2.23 4.36-2.33 1.27-.04 2.34.38 3.19 1.24.85.87 1.33 1.34 1.45 1.34.14 0 .61-.47 1.41-1.4.8-.92 1.73-1.4 2.8-1.41 1.01-.04 1.95.27 2.82.92 1.2.9 2.04 2.15 2.51 3.77-1.39.8-2.09 2.15-2.09 4.07-.02 1.81.86 3.16 2.63 4.06-.29.83-.61 1.62-.96 2.37l-.15.41z" />
      </svg>
      <span>Download on App Store</span>
    </a>
  );
} 