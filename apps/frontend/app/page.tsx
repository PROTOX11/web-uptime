"use client";
import React from 'react';
import { Activity, Bell, Shield, Clock, CheckCircle, ArrowRight, Server, Globe, Sun, Moon } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white">
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Monitor Your Services with Confidence
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              Get real-time alerts and detailed insights about your website's uptime. Never miss a downtime with our advanced monitoring platform.
            </p>
            <div className="mt-8 flex items-center space-x-4">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors dark:bg-indigo-500 dark:hover:bg-indigo-600 flex items-center">
                Start Monitoring
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="text-indigo-600 dark:text-indigo-400 px-8 py-3 rounded-lg border border-indigo-600 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors">
                View Demo
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Everything you need for reliable monitoring
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Bell className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
              title="Instant Alerts"
              description="Get notified immediately when your services experience downtime through multiple channels."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
              title="Security First"
              description="Bank-grade encryption and security measures to protect your monitoring data."
            />
            <FeatureCard
              icon={<Clock className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
              title="24/7 Monitoring"
              description="Round-the-clock monitoring from multiple locations worldwide."
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <StatCard number="99.9%" text="Average Uptime" icon={<CheckCircle className="h-6 w-6" />} />
            <StatCard number="150+" text="Monitoring Locations" icon={<Globe className="h-6 w-6" />} />
            <StatCard number="5000+" text="Active Users" icon={<Server className="h-6 w-6" />} />
            <StatCard number="1M+" text="Checks Per Day" icon={<Activity className="h-6 w-6" />} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 dark:bg-indigo-500 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Start monitoring your services today
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies that trust UptimeGuard for their monitoring needs.
          </p>
          <button className="bg-white text-indigo-600 dark:text-indigo-500 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors">
            Get Started Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 text-white mb-4">
                <Activity className="h-6 w-6" />
                <span className="text-xl font-bold">UptimeGuard</span>
              </div>
              <p className="text-sm">
                Reliable uptime monitoring for modern businesses.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            © 2025 UptimeGuard. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

function StatCard({ number, text, icon }: { number: string; text: string; icon: React.ReactNode }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
      <div className="flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
        {icon}
      </div>
      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{number}</div>
      <div className="text-gray-600 dark:text-gray-300">{text}</div>
    </div>
  );
}

export default App;