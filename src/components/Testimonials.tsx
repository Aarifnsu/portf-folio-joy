import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO, LuxeBeauty Co.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    content: "The team transformed our outdated store into a conversion machine. Our sales increased by 180% within the first quarter after launch. Absolutely phenomenal work!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, TechGear Hub",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    content: "Professional, responsive, and incredibly talented. They understood our complex requirements and delivered a store that exceeded our expectations. Highly recommend!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director, Urban Threads",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    content: "The custom theme they built perfectly captures our brand identity. The attention to detail and performance optimization made a huge difference in our conversions.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Park",
    role: "Owner, Organic Harvest",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    content: "From subscription management to local delivery zones, they built exactly what we needed. Our customer retention has never been better. True Shopify experts!",
    rating: 5,
  },
  {
    id: 5,
    name: "Jennifer Walsh",
    role: "COO, FitLife Equipment",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
    content: "The financing integration and video demos they implemented have been game-changers. Customers love the seamless experience. Worth every penny!",
    rating: 5,
  },
  {
    id: 6,
    name: "Alex Thompson",
    role: "Founder, Artisan Home",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    content: "Their room visualizer tool has revolutionized how our customers shop. Average order value increased by 220%. These guys truly understand eCommerce.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say 
            about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="bg-card hover:shadow-lg transition-shadow border-border"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 gradient-bg rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-primary-foreground">
            <div>
              <div className="text-4xl lg:text-5xl font-bold">150+</div>
              <div className="text-sm lg:text-base opacity-90 mt-1">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold">98%</div>
              <div className="text-sm lg:text-base opacity-90 mt-1">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold">$50M+</div>
              <div className="text-sm lg:text-base opacity-90 mt-1">Revenue Generated</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold">5★</div>
              <div className="text-sm lg:text-base opacity-90 mt-1">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;