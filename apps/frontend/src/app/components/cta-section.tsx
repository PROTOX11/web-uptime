import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PricingCard = ({
  tier,
  price,
  description,
  features,
  isPopular = false,
  className,
}: {
  tier: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  className?: string;
}) => {
  return (
    <div 
      className={cn(
        "relative flex flex-col rounded-xl p-6 bg-card shadow-sm",
        isPopular ? "border-primary border-2" : "border",
        className
      )}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
          Most Popular
        </div>
      )}
      <div className="mb-5">
        <h3 className="text-lg font-semibold">{tier}</h3>
        <div className="mt-2 flex items-baseline">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Free" && <span className="ml-1 text-muted-foreground">/mo</span>}
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
      <ul className="mb-6 space-y-3 text-sm flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex">
            <CheckCircle className="h-5 w-5 text-chart-1 shrink-0 mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        variant={isPopular ? "default" : "outline"} 
        className="w-full mt-auto group"
      >
        Get Started
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  );
};

const CTASection = () => {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4 inline-block">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the perfect plan for your needs. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            tier="Starter"
            price="Free"
            description="Perfect for personal projects and small websites."
            features={[
              "Monitor up to 3 websites",
              "5-minute check intervals",
              "Email notifications",
              "24 hours of logs",
              "Community support"
            ]}
          />
          <PricingCard
            tier="Professional"
            price="$29"
            description="Ideal for businesses with multiple websites."
            features={[
              "Monitor up to 20 websites",
              "1-minute check intervals",
              "Multi-channel alerts",
              "30 days of logs",
              "SSL certificate monitoring",
              "Priority support"
            ]}
            isPopular={true}
            className="md:scale-105 z-10"
          />
          <PricingCard
            tier="Enterprise"
            price="$99"
            description="For large businesses with advanced needs."
            features={[
              "Unlimited website monitoring",
              "30-second check intervals",
              "Custom alert integrations",
              "1 year of logs",
              "Advanced analytics",
              "Custom status pages",
              "24/7 phone support"
            ]}
          />
        </div>

        <div className="mt-16 md:mt-24 text-center">
          <div className="max-w-3xl mx-auto bg-card border rounded-xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need a custom solution?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              We offer tailored enterprise monitoring solutions for organizations with specific requirements. Contact our sales team to discuss your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="default" size="lg">
                Contact Sales
              </Button>
              <Button variant="outline" size="lg">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;