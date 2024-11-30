'use client';

import { useState } from 'react';
import { URLDisplay } from './URLDisplay';
import { QRCodeModal } from './QRCodeModal';

export function ShortenedURL({ shortUrl, qrCode, copied, onCopy }) {
  const [showQRCode, setShowQRCode] = useState(false);

  return (
    <>
      <div className="w-full max-w-lg px-4">
        <div className="p-4 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
          <URLDisplay
            url={shortUrl}
            copied={copied}
            onCopy={onCopy}
            onQRCode={() => setShowQRCode(true)}
          />
        </div>
      </div>
      {showQRCode && (
        <QRCodeModal
          qr={qrCode}
          url={shortUrl}
          onClose={() => setShowQRCode(false)}
        />
      )}
    </>
  );
}