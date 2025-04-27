'use client';

import React from 'react';

export default function SupportPage() {
  const faqs = [
    {
      question: 'How do I create a new packing list?',
      answer: 'To create a new packing list, open the TripCraft app and tap on the "+" button on the home screen. Then select "New Packing List" and follow the prompts to customize your list based on your trip details.'
    },
    {
      question: 'Can I sync my data across multiple devices?',
      answer: 'Yes! TripCraft automatically syncs your data across all your iOS devices using iCloud. Just make sure you\'re signed in with the same Apple ID on all devices and have iCloud enabled for TripCraft.'
    },
    {
      question: 'How does the AI packing list generation work?',
      answer: 'Our AI algorithm analyzes your trip details including destination, duration, weather, and planned activities to generate a customized packing list. The more information you provide, the more tailored your packing list will be.'
    },
    {
      question: 'Is my data secure?',
      answer: 'We take data security very seriously. Your personal information and trip details are encrypted and stored securely. We never share your data with third parties without your consent. For more information, please see our Privacy Policy.'
    },
    {
      question: 'How do I report a bug or suggest a feature?',
      answer: 'You can report bugs or suggest features by contacting us directly via email. We appreciate your feedback and are constantly working to improve TripCraft!'
    }
  ];
  
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">Support Center</h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Need help with TripCraft? Find answers to common questions or contact our support team below.
      </p>
      
      {/* FAQ Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-tc-blue-700 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Contact Information */}
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Support</h2>
        <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-8 rounded-lg">
          <svg className="w-12 h-12 text-blue-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <h3 className="text-lg font-semibold mb-4">Email Support</h3>
          <p className="mb-4">For any questions, feedback, or support requests, please email us directly:</p>
          <a 
            href="mailto:siddnative@gmail.com" 
            className="inline-block bg-tc-blue-600 hover:bg-tc-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200"
          >
            siddnative@gmail.com
          </a>
          <p className="mt-4 text-sm text-gray-600">We strive to respond to all support emails within 24-48 hours.</p>
        </div>
      </div>
    </div>
  );
} 