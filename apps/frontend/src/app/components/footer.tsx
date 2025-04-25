import React from "react";
import { Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold tracking-tight">Watchful</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Reliable monitoring for websites, APIs, and services. Keep your online presence running smoothly 24/7.
            </p>
            <div className="flex space-x-4">
              {["twitter", "github", "linkedin", "facebook"].map((social) => (
                <a 
                  key={social} 
                  href={`#${social}`} 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={`${social} link`}
                >
                  <div className="w-9 h-9 flex items-center justify-center rounded-full border">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Product</h4>
            <ul className="space-y-3">
              {["Features", "Pricing", "Integrations", "Status Page", "API", "Changelog"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {["About", "Customers", "Team", "Careers", "Blog", "Legal"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3">
              {["Documentation", "Guides", "Help Center", "FAQ", "Security", "Community"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              {["Support", "Sales", "Partners", "Media", "Office", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 Watchful. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-4">
            <a href="#privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </a>
            <a href="#sitemap" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;