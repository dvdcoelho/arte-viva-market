
import React from 'react';
import Layout from '@/components/layout/Layout';
import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Calendar } from 'lucide-react';
import ProductGrid from '@/components/product/ProductGrid';
import { Helmet } from 'react-helmet-async';
import { Product } from '@/types/product';

const SellerProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Dados mockados para demonstração
  const seller = {
    id: id || 's1',
    name: 'Ateliê Maria Clara',
    profileImage: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
    banner: 'https://images.unsplash.com/photo-1615714211066-ade190512c53?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Somos um ateliê especializado em cerâmica artesanal. Cada peça é feita à mão com muito carinho e cuidado. Trabalhamos com argila natural e técnicas tradicionais para criar produtos únicos que trazem beleza e significado aos ambientes.',
    location: 'São Paulo, SP',
    rating: 4.8,
    reviewCount: 127,
    productsCount: 27,
    joinedDate: 'Abril 2023',
    verified: true,
    featured: true,
  };

  // Produtos mockados para demonstração
  const products: Product[] = [
    {
      id: '1',
      name: 'Vaso em Cerâmica Rústica Artesanal',
      price: 159.9,
      imageUrl: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fGNlcmFtaWMlMjBwb3R8ZW58MHx8fHwxNzIwMDU0ODU2fDA&ixlib=rb-4.0.3&q=80',
      sellerName: seller.name,
      rating: 4.8,
      featured: 'pro',
    },
    {
      id: '2',
      name: 'Conjunto de Pratos em Cerâmica Artesanal',
      price: 239.9,
      imageUrl: 'https://images.unsplash.com/photo-1607006344380-b4775736f473?ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8aGFuZG1hZGUlMjBzb2FwfGVufDB8fHx8MTcyMDA1NDkwNXww&ixlib=rb-4.0.3&q=80',
      sellerName: seller.name,
      rating: 4.7,
      featured: 'basic',
    },
    {
      id: '3',
      name: 'Tigela Decorativa em Cerâmica',
      price: 89.9,
      imageUrl: 'https://images.unsplash.com/photo-1619873916622-53fb58cbaaa6?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fG1hY3JhbWUlMjBqZXdlbHJ5fGVufDB8fHx8MTcyMDA1NDk0MXww&ixlib=rb-4.0.3&q=80',
      sellerName: seller.name,
      rating: 4.9,
    },
    {
      id: '4',
      name: 'Vaso Mini para Suculentas',
      price: 59.9,
      imageUrl: 'https://images.unsplash.com/photo-1616046386874-71c6d5d1e258?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8Y3JvY2hldCUyMGN1c2hpb258ZW58MHx8fHwxNzIwMDU0OTc4fDA&ixlib=rb-4.0.3&q=80',
      sellerName: seller.name,
      rating: 4.6,
    },
    {
      id: '5',
      name: 'Caneca Personalizada em Cerâmica',
      price: 49.9,
      imageUrl: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8aGFuZCUyMHBhaW50ZWQlMjBtdWd8ZW58MHx8fHwxNzIwMDU1MDA1fDA&ixlib=rb-4.0.3&q=80',
      sellerName: seller.name,
      rating: 4.7,
    },
    {
      id: '6',
      name: 'Conjunto de Vasos Miniatura',
      price: 129.9,
      imageUrl: 'https://images.unsplash.com/photo-1584727638096-042c45049ebe?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8bGVhdGhlciUyMGpvdXJuYWx8ZW58MHx8fHwxNzIwMDU1MDMzfDA&ixlib=rb-4.0.3&q=80',
      sellerName: seller.name,
      rating: 4.9,
    },
  ];

  return (
    <>
      <Helmet>
        <title>{seller.name} | Kair</title>
        <meta name="description" content={seller.description.substring(0, 160)} />
        <meta property="og:title" content={`${seller.name} | Kair`} />
        <meta property="og:description" content={seller.description.substring(0, 160)} />
        <meta property="og:image" content={seller.profileImage} />
        <meta property="og:type" content="profile" />
        <link rel="canonical" href={`https://kair.com.br/seller/${seller.id}`} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "Organization",
              "name": "${seller.name}",
              "image": "${seller.profileImage}",
              "description": "${seller.description}",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "${seller.location}"
              }
            }
          `}
        </script>
      </Helmet>

      <Layout>
        {/* Banner e info do vendedor */}
        <div className="w-full h-48 md:h-64 overflow-hidden relative">
          <img 
            src={seller.banner} 
            alt={`Banner de ${seller.name}`} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        
        <div className="container px-4 mx-auto -mt-16 relative z-10">
          <div className="bg-white rounded-lg shadow-sm border border-border p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Foto de perfil */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white overflow-hidden shadow-sm">
                  <img 
                    src={seller.profileImage} 
                    alt={seller.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Informações do vendedor */}
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h1 className="text-2xl md:text-3xl font-display font-semibold">{seller.name}</h1>
                  {seller.verified && (
                    <Badge className="bg-kair-purple">Vendedor Verificado</Badge>
                  )}
                  {seller.featured && (
                    <Badge variant="outline" className="border-kair-purple text-kair-purple">
                      Vendedor Pro
                    </Badge>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    {seller.location}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-400 fill-yellow-400" />
                    <span className="font-medium">{seller.rating}</span>
                    <span className="text-muted-foreground ml-1">({seller.reviewCount} avaliações)</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    Na Kair desde {seller.joinedDate}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 max-w-3xl">
                  {seller.description}
                </p>
                
                <Button variant="outline">Entrar em contato</Button>
              </div>
            </div>
          </div>
          
          {/* Produtos do vendedor */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl md:text-2xl font-display font-semibold">
                Produtos de {seller.name}
              </h2>
              <div className="text-sm text-muted-foreground">
                {seller.productsCount} produtos
              </div>
            </div>
            
            <ProductGrid products={products} />
          </section>
        </div>
      </Layout>
    </>
  );
};

export default SellerProfile;
