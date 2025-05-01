
import React from 'react';
import { Link } from 'react-router-dom';

interface Category {
  id: string;
  name: string;
  imageUrl: string;
  productCount: number;
}

interface CategorySectionProps {
  categories: Category[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ categories }) => {
  return (
    <section className="py-12 bg-arteviva-gray-light">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-2">Explore por Categoria</h2>
          <p className="text-muted-foreground">Descubra tesouros artesanais em cada categoria</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/category/${category.id}`}
              className="group flex flex-col items-center"
            >
              <div className="w-full aspect-square rounded-full overflow-hidden mb-3 bg-white p-4 border border-border group-hover:border-arteviva-purple transition-colors">
                <div className="w-full h-full bg-arteviva-purple-light rounded-full flex items-center justify-center">
                  <img 
                    src={category.imageUrl} 
                    alt={category.name} 
                    className="w-1/2 h-1/2 object-contain transition-transform group-hover:scale-110" 
                  />
                </div>
              </div>
              <h3 className="font-medium text-sm text-center">{category.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{category.productCount} produtos</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
