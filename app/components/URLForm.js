'use client';

import { useState } from 'react';

export function URLForm({ onSubmit, isLoading }) {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim()) {
      onSubmit(url.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg px-4">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter your long URL here..."
          className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm placeholder-gray-400"
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl hover:from-purple-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-200/50 transform hover:scale-105 duration-300 font-medium"
        >
          {isLoading ? 'Shortening...' : 'Shorten URL'}
        </button>
      </div>
    </form>
  );
}