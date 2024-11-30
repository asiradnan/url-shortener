'use client';

import { Header } from './components/Header';
import { URLForm } from './components/URLForm';
import { ShortenedURL } from './components/url/ShortenedURL';
import { StatsSection } from './components/stats/StatsSection';
import { useClipboard } from './hooks/useClipboard';
import { useState } from 'react';
import { generateShortUrl } from './utils/urlUtils';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [shortUrl, setShortUrl] = useState(null);
  const [qrCode, setQrCode] = useState(null);
  const { copied, copy } = useClipboard();

  const handleSubmit = async (url) => {
    setIsLoading(true);
    try {
      const response = await generateShortUrl(url);
      setShortUrl(response.shortUrl);
      setQrCode(response.qrCode);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto py-16 px-4">
        <Header />
        <div className="flex flex-col items-center gap-6 mb-24">
          <URLForm onSubmit={handleSubmit} isLoading={isLoading} />
          {shortUrl && (
            <ShortenedURL
              shortUrl={shortUrl}
              qrCode={qrCode}
              copied={copied}
              onCopy={() => copy(shortUrl)}
            />
          )}
        </div>
        <StatsSection totalLinks={0} totalClicks={0} activeLinks={0} />
      </div>
    </div>
  );
}