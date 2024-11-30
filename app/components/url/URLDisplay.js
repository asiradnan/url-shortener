'use client';

import { Copy, CheckCircle, QrCode } from 'lucide-react';
import { CopyButton } from './CopyButton';
import { QRCodeButton } from './QRCodeButton';

export function URLDisplay({ url, copied, onCopy, onQRCode }) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-600 hover:text-purple-800 truncate text-xs sm:text-base font-medium"
      >
        {url}
      </a>
      <div className="flex gap-2 w-full sm:w-auto">
        <CopyButton copied={copied} onCopy={onCopy} />
        <QRCodeButton onClick={onQRCode} />
      </div>
    </div>
  );
}