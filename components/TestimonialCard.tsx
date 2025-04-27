'use client';

import Image from 'next/image';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export default function TestimonialCard({ name, role, content, avatar }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 flex flex-col h-full border border-gray-100">
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-tc-blue-100 shadow-md transform transition-transform duration-500 hover:scale-110">
          <Image 
            src={avatar} 
            alt={`${name} avatar`} 
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-full"
          />
        </div>
      </div>
      <div className="flex-grow">
        <p className="text-gray-700 mb-6 italic text-center">"{content}"</p>
      </div>
      <div className="text-center mt-4">
        <h4 className="font-bold text-gray-800 text-lg">{name}</h4>
        <p className="text-sm text-tc-blue-600">{role}</p>
      </div>
    </div>
  );
} 