import React from "react";
import { 
  Bell, 
  BarChart3, 
  Shield, 
  Clock, 
  Server, 
  RefreshCw, 
  Zap, 
  PieChart,
  MessageCircle,
  Smartphone
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => (
  <Card className={cn("h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1", className)}>
    <CardHeader className="pb-2">
      <div className="mb-4 bg-primary/10 dark:bg-primary/20 w-10 h-10 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-muted-foreground text-base">
        {description}
      </CardDescription>
    </CardContent>
  </Card>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: <Bell className="h-5 w-5 text-primary" />,
      title: "Instant Alerts",
      description: "Receive real-time notifications via SMS, email, Slack, or Discord when any of your services go down."
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-primary" />,
      title: "Detailed Analytics",
      description: "Get comprehensive insights into your website's performance with intuitive dashboards and reports."
    },
    {
      icon: <Shield className="h-5 w-5 text-primary" />,
      title: "SSL Monitoring",
      description: "Track SSL certificate expiration dates and get timely reminders to renew before they expire."
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "24/7 Monitoring",
      description: "Our servers check your website every minute from multiple global locations to ensure accuracy."
    },
    {
      icon: <Zap className="h-5 w-5 text-primary" />,
      title: "Performance Metrics",
      description: "Track page load times, server response, and other critical performance indicators."
    },
    {
      icon: <MessageCircle className="h-5 w-5 text-primary" />,
      title: "Status Pages",
      description: "Create beautiful, customizable status pages to keep your users informed about service status."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Everything you need for <span className="text-primary">superior uptime</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive monitoring tools that give you peace of mind and keep your services running smoothly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-16 md:mt-24 bg-card rounded-xl border overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Global Monitoring Network
              </h3>
              <p className="text-muted-foreground mb-6">
                Our strategically placed servers around the world check your websites from multiple locations, ensuring accurate uptime data and eliminating false positives.
              </p>
              <ul className="space-y-3">
                {[
                  "20+ global check locations",
                  "Redundant monitoring infrastructure",
                  "Check intervals as low as 10 seconds",
                  "Accurate downtime detection"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="mr-3 h-5 w-5 text-chart-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-chart-1/80 to-chart-2/80 p-8 md:p-12 flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full transform -translate-x-1/4 -translate-y-1/4"></div>
                <div className="relative bg-background rounded-xl overflow-hidden shadow-md border">
                  <div className="p-5">
                    <div className="mb-4 flex justify-between items-center">
                      <h4 className="font-semibold">Global Response Times</h4>
                      <span className="text-xs text-muted-foreground">Live</span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { region: "North America", latency: "82ms", percent: "95%" },
                        { region: "Europe", latency: "105ms", percent: "85%" },
                        { region: "Asia", latency: "189ms", percent: "60%" },
                        { region: "Australia", latency: "210ms", percent: "52%" },
                        { region: "South America", latency: "175ms", percent: "65%" }
                      ].map((region, i) => (
                        <div key={i} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>{region.region}</span>
                            <span>{region.latency}</span>
                          </div>
                          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-chart-1 rounded-full"
                              style={{ width: region.percent }}
                            ></div>
                          </div>
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
    </section>
  );
};

export default FeaturesSection;