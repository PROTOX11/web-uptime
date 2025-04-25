export type Website = {
  id: string;
  url: string;
  ticks: Tick[];
};

export type Tick = {
  id: string;
  createdAt: string;
  status: string;
  latency: number;
};

export type UptimeRecord = {
  timestamp: string;
  status: 'up' | 'down';
};

export type ThemeMode = 'light' | 'dark';

export type AggregatedTick = {
  timestamp: string;
  status: 'up' | 'down';
};