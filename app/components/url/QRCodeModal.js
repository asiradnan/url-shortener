'use client';

import { X } from 'lucide-react';

export function QRCodeModal({ qr, url, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl p-6 max-w-sm w-full relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 hover:bg-gray-100 rounded-full transition-all duration-300 transform hover:scale-110"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Scan QR Code</h3>
          <div className="flex justify-center mb-4">
            <img
              src={`data:image/png;base64,${qr}`}
              alt="QR Code"
              className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="text-sm text-gray-600 break-all font-medium">{url}</p>
        </div>
      </div>
    </div>
  );
}