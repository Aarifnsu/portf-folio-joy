import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "LuxeBeauty Co.",
    category: "Beauty & Cosmetics",
    description: "Complete Shopify Plus migration with custom theme and AR try-on feature integration.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=400&fit=crop",
    tags: ["Shopify Plus", "Custom Theme", "AR Integration"],
    results: "+180% conversion rate",
  },
  {
    id: 2,
    title: "Urban Threads",
    category: "Fashion & Apparel",
    description: "High-performance fashion store with advanced filtering and size recommendation engine.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    tags: ["Custom Development", "Performance", "UX Design"],
    results: "2.5s load time",
  },
  {
    id: 3,
    title: "TechGear Hub",
    category: "Electronics",
    description: "Multi-currency electronics store with custom product configurator and 3D previews.",
    image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&h=400&fit=crop",
    tags: ["Multi-currency", "3D Configurator", "API Integration"],
    results: "$2M+ monthly sales",
  },
  {
    id: 4,
    title: "Organic Harvest",
    category: "Food & Grocery",
    description: "Subscription-based grocery store with delivery zone management and recurring orders.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop",
    tags: ["Subscriptions", "Local Delivery", "Custom App"],
    results: "15K+ subscribers",
  },
  {
    id: 5,
    title: "FitLife Equipment",
    category: "Sports & Fitness",
    description: "Sports equipment store with financing integration and video product demos.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    tags: ["Financing", "Video Integration", "SEO"],
    results: "Top 3 Google ranking",
  },
  {
    id: 6,
    title: "Artisan Home",
    category: "Home & Decor",
    description: "Luxury furniture store with room visualizer and custom quote builder.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
    tags: ["Room Visualizer", "Quote Builder", "B2B Portal"],
    results: "+220% AOV increase",
  },
];

const categories = ["All", "Fashion & Apparel", "Beauty & Cosmetics", "Electronics", "Food & Grocery", "Sports & Fitness", "Home & Decor"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Portfolio of Success Stories
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our latest Shopify projects and see how we've helped businesses 
            achieve their eCommerce goals.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? "gradient-bg text-primary-foreground" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <Badge className="gradient-bg text-primary-foreground">
                    {project.results}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-primary text-sm font-medium">{project.category}</span>
                <h3 className="text-xl font-bold mt-1 mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary/80">
                  View Case Study
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="group">
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;