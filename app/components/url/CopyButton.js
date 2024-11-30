'use client';

import { Copy, CheckCircle } from 'lucide-react';

export function CopyButton({ copied, onCopy }) {
  return (
    <button
      onClick={onCopy}
      className="flex items-center gap-2 px-4 py-2 text-sm bg-gradient-to-br from-purple-50 to-indigo-50 hover:from-purple-100 hover:to-indigo-100 rounded-lg transition-all duration-300 flex-1 sm:flex-initial justify-center transform hover:scale-105"
    >
      {copied ? (
        <>
          <CheckCircle className="w-4 h-4 text-green-600" />
          <span className="font-medium">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4 text-purple-600" />
          <span className="font-medium">Copy URL</span>
        </>
      )}
    </button>
  );
}