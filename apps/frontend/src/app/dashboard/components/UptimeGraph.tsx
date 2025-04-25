import React from 'react';
import { UptimeRecord } from '../types';

type UptimeGraphProps = {
  uptime: UptimeRecord[];
};

const UptimeGraph: React.FC<UptimeGraphProps> = ({ uptime }) => {
  return (
    <div className="mt-3 mb-1">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-gray-500 dark:text-gray-400">30 minutes ago</span>
        <span className="text-xs text-gray-500 dark:text-gray-400">Now</span>
      </div>
      <div className="grid grid-cols-10 gap-1">
        {uptime.map((record, index) => (
          <div
            key={index}
            className={`
              h-6 rounded
              ${record.status === 'up' 
                ? 'bg-emerald-500' 
                : 'bg-red-500'}
              transition-all duration-300 ease-in-out
              hover:opacity-90
            `}
            title={`${record.status === 'up' ? 'Up' : 'Down'} at ${new Date(record.timestamp).toLocaleTimeString()}`}
          />
        ))}
      </div>
    </div>
  );
};

export default UptimeGraph;