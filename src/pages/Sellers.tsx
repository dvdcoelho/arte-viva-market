
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Helmet } from 'react-helmet-async';
import { Star } from 'lucide-react';

const Sellers: React.FC = () => {
  const sellers = [
    {
      id: '1',
      name: 'Ateliê Maria Clara',
      imageUrl: 'https://images.unsplash.com/photo-1536322307154-e8d07db5850f?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8Y2VyYW1pYyUyMGFydGlzdHxlbnwwfHx8fDE3MjAwNTQ4NTZ8MA&ixlib=rb-4.0.3&q=80',
      location: 'São Paulo, SP',
      rating: 4.8,
      productCount: 36
    },
    {
      id: '2',
      name: 'Saboaria Flor',
      imageUrl: 'https://images.unsplash.com/photo-1556760544-74068565f05c?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8c29hcCUyMG1ha2VyfGVufDB8fHx8MTcyMDA1NDkwNXww&ixlib=rb-4.0.3&q=80',
      location: 'Rio de Janeiro, RJ',
      rating: 4.7,
      productCount: 28
    },
    {
      id: '3',
      name: 'Bela Trama',
      imageUrl: 'https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTN8fGhhbmRtYWRlJTIwamV3ZWxyeXxlbnwwfHx8fDE3MjAwNTQ5NDF8MA&ixlib=rb-4.0.3&q=80',
      location: 'Belo Horizonte, MG',
      rating: 4.9,
      productCount: 42
    },
    {
      id: '4',
      name: 'Arte em Fios',
      imageUrl: 'https://images.unsplash.com/photo-1631861717481-27d2278c5c97?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzB8fGtyaXR0aW5nfGVufDB8fHx8MTcyMDA1NDk3OHww&ixlib=rb-4.0.3&q=80',
      location: 'Florianópolis, SC',
      rating: 4.6,
      productCount: 31
    },
    {
      id: '5',
      name: 'Porcelana & Arte',
      imageUrl: 'https://images.unsplash.com/photo-1607342582515-5573646d8240?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTd8fGNlcmFtaWMlMjBhcnRpc3R8ZW58MHx8fHwxNzIwMDU1MDA1fDA&ixlib=rb-4.0.3&q=80',
      location: 'Curitiba, PR',
      rating: 4.7,
      productCount: 24
    },
    {
      id: '6',
      name: 'Papel & Design',
      imageUrl: 'https://images.unsplash.com/photo-1547637589-f54c34f5d7a4?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fGJvb2slMjBiaW5kaW5nfGVufDB8fHx8MTcyMDA1NTAzM3ww&ixlib=rb-4.0.3&q=80',
      location: 'Brasília, DF',
      rating: 4.9,
      productCount: 19
    },
  ];

  return (
    <>
      <Helmet>
        <title>Artesãos | Kair</title>
        <meta name="description" content="Conheça os talentosos artesãos que fazem parte da nossa comunidade." />
      </Helmet>

      <Layout>
        <div className="container px-4 mx-auto py-12">
          <h1 className="text-3xl font-display font-semibold mb-8 text-center">Artesãos</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sellers.map((seller) => (
              <a 
                href={`/seller/${seller.id}`} 
                key={seller.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow hover:-translate-y-1 transform transition-transform duration-300"
              >
                <div className="aspect-video bg-gray-100 relative">
                  <img 
                    src={seller.imageUrl} 
                    alt={seller.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-medium text-lg mb-1">{seller.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{seller.location}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                      <span className="font-medium">{seller.rating.toFixed(1)}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{seller.productCount} produtos</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Sellers;
