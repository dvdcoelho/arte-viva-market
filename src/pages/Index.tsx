import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import CategorySection from '@/components/home/CategorySection';
import SellerFeatures from '@/components/home/SellerFeatures';
import { Helmet } from 'react-helmet-async';
import { Product } from '@/types/product';

const Index: React.FC = () => {
  // Dados mockados para a demonstração
  const featuredProducts: Product[] = [
    {
      id: '1',
      name: 'Vaso em Cerâmica Rústica Artesanal',
      price: 159.9,
      imageUrl: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fGNlcmFtaWMlMjBwb3R8ZW58MHx8fHwxNzIwMDU0ODU2fDA&ixlib=rb-4.0.3&q=80',
      sellerName: 'Ateliê Maria Clara',
      rating: 4.8,
      featured: 'pro',
    },
    {
      id: '2',
      name: 'Kit Sabonetes Artesanais Natural',
      price: 89.9,
      imageUrl: 'https://images.unsplash.com/photo-1607006344380-b4775736f473?ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8aGFuZG1hZGUlMjBzb2FwfGVufDB8fHx8MTcyMDA1NDkwNXww&ixlib=rb-4.0.3&q=80',
      sellerName: 'Saboaria Flor',
      rating: 4.7,
      featured: 'basic',
    },
    {
      id: '3',
      name: 'Colar de Macramê com Pedra Natural',
      price: 75.0,
      imageUrl: 'https://images.unsplash.com/photo-1619873916622-53fb58cbaaa6?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fG1hY3JhbWUlMjBqZXdlbHJ5fGVufDB8fHx8MTcyMDA1NDk0MXww&ixlib=rb-4.0.3&q=80',
      sellerName: 'Bela Trama',
      rating: 4.9,
      featured: 'pro',
    },
    {
      id: '4',
      name: 'Almofada em Crochê Manual',
      price: 129.9,
      imageUrl: 'https://images.unsplash.com/photo-1616046386874-71c6d5d1e258?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8Y3JvY2hldCUyMGN1c2hpb258ZW58MHx8fHwxNzIwMDU0OTc4fDA&ixlib=rb-4.0.3&q=80',
      sellerName: 'Arte em Fios',
      rating: 4.6,
      featured: 'basic',
    },
    {
      id: '5',
      name: 'Caneca em Porcelana Pintada à Mão',
      price: 59.9,
      imageUrl: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8aGFuZCUyMHBhaW50ZWQlMjBtdWd8ZW58MHx8fHwxNzIwMDU1MDA1fDA&ixlib=rb-4.0.3&q=80',
      sellerName: 'Porcelana & Arte',
      rating: 4.7,
    },
    {
      id: '6',
      name: 'Caderno com Capa em Couro Artesanal',
      price: 89.9,
      imageUrl: 'https://images.unsplash.com/photo-1584727638096-042c45049ebe?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8bGVhdGhlciUyMGpvdXJuYWx8ZW58MHx8fHwxNzIwMDU1MDMzfDA&ixlib=rb-4.0.3&q=80',
      sellerName: 'Papel & Design',
      rating: 4.9,
    },
    {
      id: '7',
      name: 'Escultura em Madeira Entalhada',
      price: 220.0,
      imageUrl: 'https://images.unsplash.com/photo-1629971763693-01244b72a556?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzB8fHdvb2QlMjBzY3VscHR1cmV8ZW58MHx8fHwxNzIwMDU1MDYxfDA&ixlib=rb-4.0.3&q=80',
      sellerName: 'Madeira Viva',
      rating: 5.0,
    },
    {
      id: '8',
      name: 'Bolsa de Palha Natural Feita à Mão',
      price: 159.0,
      imageUrl: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8c3RyYXclMjBiYWd8ZW58MHx8fHwxNzIwMDU1MDkxfDA&ixlib=rb-4.0.3&q=80',
      sellerName: 'Moda Artesanal',
      rating: 4.8,
    },
  ];

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
  ];

  const newArrivalProducts: Product[] = [
    featuredProducts[4],
    featuredProducts[5],
    featuredProducts[6],
    featuredProducts[7],
  ];

  return (
    <>
      <Helmet>
        <title>Kair | Marketplace de Produtos Artesanais</title>
        <meta name="description" content="Descubra produtos artesanais únicos e feitos à mão por artesãos brasileiros. Compre direto de quem faz com amor e cuidado." />
        <meta property="og:title" content="Kair | Marketplace de Produtos Artesanais" />
        <meta property="og:description" content="Descubra produtos artesanais únicos e feitos à mão por artesãos brasileiros." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kair.com.br" />
        <meta property="og:image" content="/og-image.jpg" />
        <link rel="canonical" href="https://kair.com.br" />
      </Helmet>

      <Layout>
        <Hero />
        
        <FeaturedProducts
          title="Produtos em Destaque"
          subtitle="Seleções especiais feitas com amor e talento"
          products={featuredProducts.slice(0, 4)}
        />
        
        <CategorySection categories={categories} />
        
        <FeaturedProducts
          title="Novidades"
          subtitle="Descobertas recentes em nosso marketplace"
          products={newArrivalProducts}
        />
        
        <SellerFeatures />
      </Layout>
    </>
  );
};

export default Index;
