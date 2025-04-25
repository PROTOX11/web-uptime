import React from 'react';
import WebsiteCard from './WebsiteCard';
import AddWebsiteButton from './AddWebsiteButton';
import { Website, AggregatedTick } from '../types';
import { Activity } from 'lucide-react';
import { useWebsites } from '../../../../hooks/useWebsite';

const Dashboard: React.FC = () => {
  const websites = useWebsites();

  const aggregateTicks = (ticks: Website['ticks']): AggregatedTick[] => {
    const windowSize = 3 * 60 * 1000; // 3 minutes in milliseconds
    const now = Date.now();
    const thirtyMinutesAgo = now - (30 * 60 * 1000);
    
    // Create 10 time windows (3 minutes each)
    const windows: AggregatedTick[] = Array.from({ length: 10 }, (_, i) => {
      const windowEnd = now - (i * windowSize);
      const windowStart = windowEnd - windowSize;
      
      // Find ticks in this window
      const windowTicks = ticks.filter(tick => {
        const tickTime = new Date(tick.createdAt).getTime();
        return tickTime >= windowStart && tickTime < windowEnd;
      });

      // If any tick in the window has status !== 'up', mark window as down
      const status = windowTicks.some(tick => tick.status !== 'up') ? 'down' : 'up';

      return {
        timestamp: new Date(windowEnd).toISOString(),
        status
      };
    });

    return windows.reverse();
  };

  const calculateOverallStatus = () => {
    if (!websites.length) return { status: 'up', text: 'No websites monitored' };

    const downSites = websites.filter(site => 
      site.ticks.length > 0 && site.ticks[0].status !== 'up'
    ).length;

    return {
      status: downSites === 0 ? 'up' : 'down',
      text: downSites === 0 
        ? 'All systems operational' 
        : `${downSites} ${downSites === 1 ? 'system' : 'systems'} down`
    };
  };

  const overall = calculateOverallStatus();

  const handleAddWebsite = (name: string, url: string) => {
    // This will be handled by the API integration later
    console.log('Adding website:', { name, url });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
          <div className="bg-blue-500 text-white p-3 rounded-lg mr-4">
            <Activity size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Status Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Monitor your websites and services
            </p>
          </div>
        </div>
        <AddWebsiteButton onAddWebsite={handleAddWebsite} />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-6 flex items-center">
        <div 
          className={`w-3 h-3 rounded-full mr-3 ${overall.status === 'up' ? 'bg-emerald-500' : 'bg-red-500'}`}
        />
        <span className="font-medium text-gray-900 dark:text-white">
          {overall.text}
        </span>
      </div>

      <div className="space-y-4">
        {websites.map(website => (
          <WebsiteCard 
            key={website.id} 
            website={{
              ...website,
              name: new URL(website.url).hostname,
              status: website.ticks.length > 0 ? 
                (website.ticks[0].status === 'up' ? 'up' : 'down') : 'up',
              uptime: aggregateTicks(website.ticks)
            }} 
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;