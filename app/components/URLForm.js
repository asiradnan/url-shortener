'use client';

import { useState } from 'react';

export function URLForm({ onSubmit, isLoading }) {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const validateAndFormatUrl = (inputUrl) => {
    let formattedUrl = inputUrl.trim();
    
    // Remove any leading or trailing slashes
    formattedUrl = formattedUrl.replace(/^\/+|\/+$/g, '');
    
    // Add http:// if missing
    if (!formattedUrl.match(/^https?:\/\//i)) {
      formattedUrl = 'http://' + formattedUrl;
    }
    
    try {
      const urlObj = new URL(formattedUrl);
      
      // Validate the hostname
      const hostname = urlObj.hostname;
      
      // Check if it's an IP address (v4 or v6)
      const isIpAddress = /^(\d+\.){3}\d+$|^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/.test(hostname);
      
      // If not IP address, check for domain format (must have at least one dot)
      if (!isIpAddress && !hostname.includes('.') && hostname !== 'localhost') {
        return null;
      }
      
      return urlObj.toString();
    } catch (e) {
      return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!url.trim()) {
      setError('Please enter a URL');
      return;
    }

    const formattedUrl = validateAndFormatUrl(url);
    
    if (!formattedUrl) {
      setError('Please enter a valid URL (e.g., example.com or http://example.com)');
      return;
    }

    onSubmit(formattedUrl);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg px-4">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="flex-1">
          <input
            type="text"  // Changed from "url" to "text" to allow more flexible input
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              setError('');
            }}
            placeholder="Enter your long URL here..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm placeholder-gray-400"
            required
          />
          {error && (
            <p className="mt-1 text-sm text-red-500">{error}</p>
          )}
        </div>
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