"use client";
import React from 'react';
import Dashboard from './components/Dashboard';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <header className="border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-3 flex justify-end">
            <ThemeToggle />
          </div>
        </header>
        <main>
          <Dashboard />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;