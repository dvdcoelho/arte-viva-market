
import React from 'react';
import ProductGrid from '../product/ProductGrid';

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  sellerName: string;
  rating?: number;
  featured?: 'basic' | 'pro' | null;
}

interface FeaturedProductsProps {
  title: string;
  subtitle?: string;
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  title,
  subtitle,
  products,
}) => {
  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-2">{title}</h2>
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>
        
        <ProductGrid products={products} />
      </div>
    </section>
  );
};

export default FeaturedProducts;
