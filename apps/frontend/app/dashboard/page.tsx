"use client";
import React, { use, useState } from 'react';
import { 
  Globe2, 
  ChevronDown, 
  ChevronUp,
  CheckCircle2,
  XCircle,
  Plus,
  Trash2,
  Moon,
  Sun
} from 'lucide-react';
import { useWebsites } from '../../hooks/useWebsites';
import { API_BACKEND_URL } from '@/config';
import axios from 'axios';
import { useAuth } from '@clerk/nextjs';

function UptimeBar({ status }: { status: 'up' | 'down' }) {
  return (
    <div 
      className={`h-6 w-8 rounded-sm transition-all duration-200 ${
        status === 'up' ? 'bg-green-500 dark:bg-green-600' : 'bg-red-500 dark:bg-red-600'
      }`}
    />
  );
}

function StatusCircle({ status }: { status: 'up' | 'down' }) {
  return (
    <div className="flex items-center">
      {status === 'up' ? (
        <CheckCircle2 className="w-6 h-6 text-green-500 dark:text-green-400" />
      ) : (
        <XCircle className="w-6 h-6 text-red-500 dark:text-red-400" />
      )}
    </div>
  );
}

interface Website {
  id: string;
  url: string;
  status: 'up' | 'down';
  aggregatedTicks: {
    status: 'up' | 'down';
    timestamp: string;
  }[];
}

function WebsiteCard({ 
  website,
  onDelete 
}: { 
  website: Website;
  onDelete: (id: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-200">
      <div 
        className="p-6 flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <Globe2 className="text-blue-500 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">{website.url}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">ID: {website.id}</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <StatusCircle status={website.status} />
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(website.id);
            }}
            className="p-2 text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400 transition-colors duration-200"
          >
            <Trash2 className="w-5 h-5" />
          </button>
          {isOpen ? (
            <ChevronUp className="text-gray-400 dark:text-gray-500" />
          ) : (
            <ChevronDown className="text-gray-400 dark:text-gray-500" />
          )}
        </div>
      </div>
      
      {isOpen && (
        <div className="p-6 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
            Last 30 minutes uptime (3-minute windows)
          </h4>
          <div className="flex space-x-2">
            {website.aggregatedTicks.map((tick, index) => (
              <UptimeBar key={index} status={tick.status} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function AddWebsiteModal({ 
  isOpen, 
  onClose, 
  onAdd 
}: { 
  isOpen: boolean; 
  onClose: (url: string) => void;
  onAdd: (url: string) => void;
}) {
  const [url, setUrl] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Add New Website</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Website URL
            </label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              placeholder="https://example.com"
            />
          </div>
          <div className="flex space-x-3 mt-6">
            <button
              onClick={() => onClose(url)}
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                if (url) {
                  onAdd(url);
                  onClose(url);
                  setUrl('');
                }
              }}
              className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              Add Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const { websites, refreshWebsites } = useWebsites();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { getToken } = useAuth();
  const handleAddWebsite = (url: string) => {
    // TODO: Implement API call to add website
    console.log('Adding website:', url);
  };

  const handleDeleteWebsite = (id: string) => {
    // TODO: Implement API call to delete website
    console.log('Deleting website:', id);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200`}>
      <div className="max-w-5xl mx-auto py-8 px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Website Status</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Monitor the uptime of your websites in real-time
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              <Plus className="w-5 h-5" />
              <span>Add Website</span>
            </button>
          </div>
        </div>
        
        <div className="space-y-4">
          {websites.map((website) => (
            <WebsiteCard 
              key={website.id}
              website={{
                ...website,
                aggregatedTicks: website.aggregatedTicks.map((tick) => ({
                  status: tick.status,
                  timestamp: tick.createdAt, // Map createdAt to timestamp
                })),
              }} 
              onDelete={handleDeleteWebsite}
            />
          ))}
        </div>

        <AddWebsiteModal
          isOpen={isModalOpen}
          onClose={async (url) => {
            if (!url) {
              console.error("URL is empty");
              return;
            }
          
            const token = await getToken();
            setIsModalOpen(false);
            console.log("Adding website", url);
          
            try {
              await axios.post(
                `${API_BACKEND_URL}/api/v1/website`,
                { url },
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );
              refreshWebsites();
            } catch (error) {
              console.error("Error adding website:", error);
            }
          }}
          onAdd={handleAddWebsite}
        />
      </div>
    </div>
  );
}

export default App;