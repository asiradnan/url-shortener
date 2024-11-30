'use client';

import { Link2 } from 'lucide-react';

export function Header() {
  return (
    <div className="text-center mb-12">
      <div className="flex justify-center mb-4">
        <div className="p-4 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl shadow-lg shadow-purple-200/50 transform hover:scale-105 transition-transform duration-300">
          <Link2 className="w-8 h-8 text-white" />
        </div>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
        URL Shortener
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
        Transform your long URLs into short, memorable links. Perfect for sharing on
        social media, emails, or anywhere you need concise links.
      </p>
    </div>
  );
}