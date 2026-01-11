import { ProductGrid } from "./ProductGrid";

export const Shop = () => {
  return (
    <section id="shop" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop Our Collection
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our curated selection of products
          </p>
        </div>
        
        <ProductGrid />
      </div>
    </section>
  );
};
