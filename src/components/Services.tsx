import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Palette, 
  Code, 
  ShoppingCart, 
  Zap, 
  Search, 
  Headphones 
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Custom Theme Development",
    description: "Unique, brand-aligned Shopify themes built from scratch using Liquid, HTML, CSS, and JavaScript.",
    features: ["Pixel-Perfect Design", "Mobile-First Approach", "Fast Load Times"],
  },
  {
    icon: Code,
    title: "Shopify App Development",
    description: "Custom private and public apps to extend your store's functionality and automate processes.",
    features: ["API Integrations", "Custom Features", "Admin Extensions"],
  },
  {
    icon: ShoppingCart,
    title: "Store Setup & Migration",
    description: "Complete store setup or seamless migration from other platforms to Shopify with zero downtime.",
    features: ["Data Migration", "SEO Preservation", "301 Redirects"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed optimization and Core Web Vitals improvements for better conversions and SEO rankings.",
    features: ["Speed Audit", "Image Optimization", "Code Cleanup"],
  },
  {
    icon: Search,
    title: "Shopify SEO Services",
    description: "Technical SEO and on-page optimization tailored specifically for Shopify stores.",
    features: ["Keyword Research", "Schema Markup", "Content Strategy"],
  },
  {
    icon: Headphones,
    title: "Maintenance & Support",
    description: "Ongoing support, updates, and improvements to keep your store running smoothly 24/7.",
    features: ["Bug Fixes", "Security Updates", "Feature Updates"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Expert Shopify Development Services
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to launch, we provide comprehensive Shopify solutions 
            that help your business grow and succeed online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group bg-card hover:shadow-xl transition-all duration-300 border-border hover:border-primary/30"
            >
              <CardHeader>
                <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;