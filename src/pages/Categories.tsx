
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Helmet } from 'react-helmet-async';

const Categories: React.FC = () => {
  const categories = [
    {
      id: '1',
      name: 'Cerâmica',
      imageUrl: '/placeholder.svg',
      productCount: 245
    },
    {
      id: '2',
      name: 'Macramê',
      imageUrl: '/placeholder.svg',
      productCount: 182
    },
    {
      id: '3',
      name: 'Crochê',
      imageUrl: '/placeholder.svg',
      productCount: 321
    },
    {
      id: '4',
      name: 'Costura',
      imageUrl: '/placeholder.svg',
      productCount: 198
    },
    {
      id: '5',
      name: 'Madeira',
      imageUrl: '/placeholder.svg',
      productCount: 156
    },
    {
      id: '6',
      name: 'Joias',
      imageUrl: '/placeholder.svg',
      productCount: 263
    },
    {
      id: '7',
      name: 'Bordado',
      imageUrl: '/placeholder.svg',
      productCount: 178
    },
    {
      id: '8',
      name: 'Pintura',
      imageUrl: '/placeholder.svg',
      productCount: 211
    },
    {
      id: '9',
      name: 'Vidro',
      imageUrl: '/placeholder.svg',
      productCount: 142
    },
  ];

  return (
    <>
      <Helmet>
        <title>Categorias | Kair</title>
        <meta name="description" content="Explore todas as categorias de artesanato disponíveis em nossa plataforma." />
      </Helmet>

      <Layout>
        <div className="container px-4 mx-auto py-12">
          <h1 className="text-3xl font-display font-semibold mb-8 text-center">Categorias</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <a 
                href={`/category/${category.id}`} 
                key={category.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow hover:scale-105 transform transition-transform duration-300"
              >
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <img 
                    src={category.imageUrl} 
                    alt={category.name} 
                    className="w-16 h-16 opacity-60"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.productCount} produtos</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Categories;
