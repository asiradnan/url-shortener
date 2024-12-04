'use client';

import { Header } from './components/Header';
import { URLForm } from './components/URLForm';
import { ShortenedURL } from './components/url/ShortenedURL';
import { StatsSection } from './components/stats/StatsSection';
import { useClipboard } from './hooks/useClipboard';
import { useState } from 'react';
import { generateShortUrl } from './utils/urlUtils';
import { useEffect } from 'react';
import axios from "axios"

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

  const [totalClicks, settotalClicks] = useState(0);
  const [clickCount, setclickCount] = useState(0);
  const [activeCount, setactiveCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://chottourlserver.asiradnan.com/totalcount")
        console.log(response.data)
        settotalClicks(parseInt(response.data.total_count)); 
        setclickCount(parseInt(response.data.click_count));
        setactiveCount(parseInt(response.data.active_links));
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [shortUrl]);

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
        <StatsSection totalLinks={totalClicks} totalClicks={clickCount} activeLinks={activeCount} />
      </div>
    </div>
  );
}