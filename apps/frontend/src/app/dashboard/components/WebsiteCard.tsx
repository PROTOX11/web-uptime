import React, { useState } from 'react';
import { Website } from '../types';
import StatusIndicator from './StatusIndicator';
import UptimeGraph from './UptimeGraph';
import { ChevronDown, ChevronUp, Globe } from 'lucide-react';

type WebsiteCardProps = {
  website: Website;
};

const WebsiteCard: React.FC<WebsiteCardProps> = ({ website }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-md">
      <div 
        className="p-4 cursor-pointer flex items-center justify-between"
        onClick={() => setIsExpanded(prev => !prev)}
      >
        <div className="flex items-center space-x-3">
          <StatusIndicator status={website.status} pulsing={true} />
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">{website.name}</h3>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Globe size={12} className="mr-1" />
              <span>{website.url}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <span className="mr-2 text-sm font-medium hidden sm:inline">
            {website.status === 'up' ? 'Operational' : 'Down'}
          </span>
          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </div>
      
      <div 
        className={`
          px-4 pb-4 border-t border-gray-100 dark:border-gray-700 
          transition-all duration-300 ease-in-out
          ${isExpanded ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 hidden'}
        `}
      >
        <div className="pt-3">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Last 30 minutes:
          </h4>
          <UptimeGraph uptime={website.uptime} />
        </div>
      </div>
    </div>
  );
};

export default WebsiteCard;