import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section className="relative pt-28 lg:pt-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-full h-full bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-0 right-1/3 w-full h-full bg-chart-2/5 dark:bg-chart-2/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pb-16 md:pb-24 lg:pb-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-background/50 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-chart-1 mr-2"></span>
              <span>Trusted by 10,000+ websites worldwide</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Keep your websites 
              <span className="bg-gradient-to-r from-chart-1 to-chart-2 text-transparent bg-clip-text"> always online</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Monitor your website's uptime, performance, and reliability with real-time alerts and detailed analytics. Never miss a downtime again.
            </p>
            
            <div className="pt-4 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Start monitoring 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  View demo
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 pt-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-chart-1" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-chart-1" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-chart-1" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className={cn(
              "relative rounded-xl overflow-hidden shadow-2xl",
              "border border-border/50",
              "bg-card/50 backdrop-blur-sm",
              "dark:border-border/30",
              "dark:bg-card/30",
              "transition-all duration-300"
            )}>
              <div className="relative p-1">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-chart-1 via-chart-2 to-chart-4"></div>
                <div className="flex space-x-1.5 px-3 py-2 border-b border-border/50 dark:border-border/30">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <div className="ml-4 text-xs text-muted-foreground">Watchful Dashboard</div>
                </div>
                
                <div className="p-4">
                  <div className="w-full h-[300px] md:h-[360px] bg-card rounded-lg border border-border/50 dark:border-border/30 p-4 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h3 className="text-lg font-semibold">Dashboard Overview</h3>
                        <p className="text-sm text-muted-foreground">All systems operational</p>
                      </div>
                      <div className="flex items-center px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        100% Uptime
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {[
                        { label: "Monitored", value: "24", unit: "sites" },
                        { label: "Avg. Response", value: "287", unit: "ms" },
                        { label: "Incidents", value: "0", unit: "today" }
                      ].map((stat, i) => (
                        <div key={i} className="bg-background rounded-lg p-3 border border-border/50 dark:border-border/30">
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                          <div className="flex items-baseline">
                            <span className="text-xl font-bold">{stat.value}</span>
                            <span className="text-xs text-muted-foreground ml-1">{stat.unit}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex-1 bg-background rounded-lg p-3 border border-border/50 dark:border-border/30">
                      <div className="text-sm font-medium mb-2">Recent Activity</div>
                      <div className="space-y-2">
                        {[
                          { status: "success", site: "api.example.com", time: "2 min ago" },
                          { status: "success", site: "dashboard.example.io", time: "5 min ago" },
                          { status: "success", site: "store.example.com", time: "12 min ago" }
                        ].map((activity, i) => (
                          <div key={i} className="flex items-center justify-between text-xs py-1">
                            <div className="flex items-center">
                              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                              <span>{activity.site}</span>
                            </div>
                            <span className="text-muted-foreground">{activity.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;