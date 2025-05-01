
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  sellerName: string;
  rating?: number;
  featured?: 'basic' | 'pro' | null;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  imageUrl,
  sellerName,
  rating = 0,
  featured = null,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-md product-card-shadow bg-white hover:shadow-lg transition-shadow">
      {featured && (
        <Badge 
          className={`absolute top-3 left-3 z-10 px-2 py-1 ${
            featured === 'pro' ? 'bg-arteviva-purple' : 'bg-arteviva-purple/70'
          }`}
        >
          {featured === 'pro' ? 'Destaque Pro' : 'Destaque'}
        </Badge>
      )}
      
      <Link to={`/product/${id}`} className="block overflow-hidden">
        <div className="aspect-square overflow-hidden relative">
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
          />
          <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-1.5 rounded-full opacity-80 hover:opacity-100 hover:bg-white transition-opacity">
            <Heart className="h-4 w-4 text-arteviva-gray-dark" />
          </button>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-medium text-sm line-clamp-2 flex-1">{name}</h3>
          </div>
          
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm text-muted-foreground">por {sellerName}</p>
            {rating > 0 && (
              <div className="flex items-center text-sm">
                <Star className="h-3.5 w-3.5 mr-1 text-yellow-400 fill-yellow-400" />
                <span>{rating.toFixed(1)}</span>
              </div>
            )}
          </div>
          
          <p className="font-medium text-lg">
            {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
