import React from 'react';

type StatusIndicatorProps = {
  status: 'up' | 'down';
  size?: 'sm' | 'md' | 'lg';
  pulsing?: boolean;
};

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ 
  status, 
  size = 'md',
  pulsing = false
}) => {
  const sizesMap = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  };

  return (
    <div className="relative inline-flex">
      <div 
        className={`
          ${sizesMap[size]} 
          rounded-full 
          ${status === 'up' ? 'bg-emerald-500' : 'bg-red-500'}
          ${pulsing ? 'animate-pulse' : ''}
        `}
      />
      {pulsing && (
        <div 
          className={`
            absolute top-0 left-0
            ${sizesMap[size]} 
            rounded-full
            ${status === 'up' ? 'bg-emerald-500' : 'bg-red-500'}
            animate-ping opacity-75
          `} 
        />
      )}
    </div>
  );
};

export default StatusIndicator;