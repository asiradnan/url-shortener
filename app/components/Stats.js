'use client';

import { BarChart2, Clock, Globe } from 'lucide-react';
import { StatsCard } from './StatsCard';

export function Stats({ totalLinks, totalClicks, activeLinks }) {
  const stats = [
    { icon: BarChart2, label: 'Total Links', value: totalLinks },
    { icon: Clock, label: 'Total Clicks', value: totalClicks },
    { icon: Globe, label: 'Active Links', value: activeLinks },
  ];

  return (
    <div className="w-full px-4 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {stats.map((stat) => (
          <StatsCard key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  );
}