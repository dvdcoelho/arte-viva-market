
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  ChevronRight, 
  ImageIcon, 
  Check,
  ShoppingBag,
  Truck,
  Clock,
  CreditCard
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import ProductGrid from '@/components/product/ProductGrid';
import { toast } from '@/components/ui/sonner';
import { Helmet } from 'react-helmet-async';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Produto mockado para demonstração
  const product = {
    id: id || '1',
    name: 'Vaso em Cerâmica Rústica Artesanal',
    description: 'Vaso artesanal feito à mão em cerâmica rústica. Cada peça é única, com pequenas variações de cor e textura que evidenciam o trabalho manual. Ideal para decoração de ambientes internos e para plantas de médio porte. Pode ser utilizado com ou sem plantas, como objeto decorativo.',
    price: 159.9,
    images: [
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fGNlcmFtaWMlMjBwb3R8ZW58MHx8fHwxNzIwMDU0ODU2fDA&ixlib=rb-4.0.3&q=80',
      'https://images.unsplash.com/photo-1615100710294-587507aac6f6?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1602913986546-1be7b5ac278e?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1603204077779-bed963ea7d0e?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    ],
    seller: {
      id: 's1',
      name: 'Ateliê Maria Clara',
      rating: 4.8,
      productCount: 27,
      joinedDate: 'Abril 2023',
    },
    rating: 4.8,
    reviewCount: 65,
    inStock: 10,
    shipping: {
      free: true,
      timeEstimate: '7 a 10 dias úteis',
    },
    featured: 'pro' as 'pro',
    specifications: [
      { name: 'Material', value: 'Argila Natural' },
      { name: 'Dimensões', value: '15cm x 15cm x 20cm (Altura)' },
      { name: 'Peso', value: '1.2kg' },
      { name: 'Acabamento', value: 'Esmaltado Fosco' },
      { name: 'Cor', value: 'Terracota com Detalhes em Bege' },
    ],
    categoryId: '1',
    categoryName: 'Cerâmica',
  };

  // Produtos relacionados mockados
  const relatedProducts = [
    {
      id: '2',
      name: 'Conjunto de Pratos em Cerâmica Artesanal',
      price: 239.9,
      imageUrl: 'https://images.unsplash.com/photo-1607006344380-b4775736f473?ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8aGFuZG1hZGUlMjBzb2FwfGVufDB8fHx8MTcyMDA1NDkwNXww&ixlib=rb-4.0.3&q=80',
      sellerName: product.seller.name,
      rating: 4.7,
    },
    {
      id: '3',
      name: 'Tigela Decorativa em Cerâmica',
      price: 89.9,
      imageUrl: 'https://images.unsplash.com/photo-1619873916622-53fb58cbaaa6?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fG1hY3JhbWUlMjBqZXdlbHJ5fGVufDB8fHx8MTcyMDA1NDk0MXww&ixlib=rb-4.0.3&q=80',
      sellerName: 'Cerâmica Artesanal',
      rating: 4.9,
    },
    {
      id: '4',
      name: 'Vaso Mini para Suculentas',
      price: 59.9,
      imageUrl: 'https://images.unsplash.com/photo-1616046386874-71c6d5d1e258?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8Y3JvY2hldCUyMGN1c2hpb258ZW58MHx8fHwxNzIwMDU0OTc4fDA&ixlib=rb-4.0.3&q=80',
      sellerName: 'Verde Arte',
      rating: 4.6,
    },
  ];

  const handleAddToCart = () => {
    toast.success('Produto adicionado ao carrinho!');
  };
  
  const handleAddToFavorites = () => {
    toast.success('Produto adicionado aos favoritos!');
  };
  
  const handleBuyNow = () => {
    toast('Redirecionando para o checkout...', {
      description: 'Você será redirecionado para finalizar sua compra.'
    });
  };

  return (
    <>
      <Helmet>
        <title>{product.name} | ArteViva</title>
        <meta name="description" content={product.description.substring(0, 160)} />
        <meta property="og:title" content={`${product.name} | ArteViva`} />
        <meta property="og:description" content={product.description.substring(0, 160)} />
        <meta property="og:image" content={product.images[0]} />
        <meta property="og:type" content="product" />
        <meta property="product:price:amount" content={product.price.toString()} />
        <meta property="product:price:currency" content="BRL" />
        <link rel="canonical" href={`https://arteviva.com.br/product/${product.id}`} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "Product",
              "name": "${product.name}",
              "image": "${product.images[0]}",
              "description": "${product.description}",
              "brand": {
                "@type": "Brand",
                "name": "${product.seller.name}"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://arteviva.com.br/product/${product.id}",
                "priceCurrency": "BRL",
                "price": "${product.price}",
                "availability": "https://schema.org/InStock",
                "seller": {
                  "@type": "Organization",
                  "name": "${product.seller.name}"
                }
              }
            }
          `}
        </script>
      </Helmet>

      <Layout>
        <div className="container px-4 mx-auto py-8">
          {/* Breadcrumbs */}
          <nav className="flex mb-6 text-sm">
            <ol className="flex items-center space-x-1">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-arteviva-purple">
                  Início
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </li>
              <li>
                <Link to={`/category/${product.categoryId}`} className="text-muted-foreground hover:text-arteviva-purple">
                  {product.categoryName}
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </li>
              <li className="font-medium text-foreground truncate max-w-[200px]">
                {product.name}
              </li>
            </ol>
          </nav>

          {/* Product details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Product images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg border border-border relative">
                {product.featured && (
                  <Badge 
                    className={`absolute top-3 left-3 z-10 px-2 py-1 ${
                      product.featured === 'pro' ? 'bg-arteviva-purple' : 'bg-arteviva-purple/70'
                    }`}
                  >
                    {product.featured === 'pro' ? 'Destaque Pro' : 'Destaque'}
                  </Badge>
                )}
                <img 
                  src={product.images[activeImageIndex]} 
                  alt={product.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`aspect-square rounded-md overflow-hidden border-2 ${
                      activeImageIndex === index 
                        ? 'border-arteviva-purple' 
                        : 'border-border hover:border-muted-foreground'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} - Imagem ${index + 1}`} 
                      className="w-full h-full object-cover" 
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div className="flex flex-col">
              <div className="pb-6">
                <h1 className="text-2xl md:text-3xl font-display font-medium mb-3">
                  {product.name}
                </h1>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center text-sm">
                    <Star className="h-4 w-4 mr-1 text-yellow-400 fill-yellow-400" />
                    <span className="font-medium">{product.rating}</span>
                    <span className="text-muted-foreground ml-1">({product.reviewCount} avaliações)</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    por{' '}
                    <Link to={`/seller/${product.seller.id}`} className="text-arteviva-purple hover:underline">
                      {product.seller.name}
                    </Link>
                  </span>
                </div>

                <div className="mb-6">
                  <div className="text-3xl font-medium mb-1">
                    {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Em até 12x de {(product.price / 12).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </p>
                </div>

                <div className="space-y-6 mb-6">
                  <Tabs defaultValue="description" className="w-full">
                    <TabsList>
                      <TabsTrigger value="description">Descrição</TabsTrigger>
                      <TabsTrigger value="specifications">Especificações</TabsTrigger>
                      <TabsTrigger value="shipping">Entrega</TabsTrigger>
                    </TabsList>
                    <TabsContent value="description" className="pt-4">
                      <p className="text-sm leading-relaxed">
                        {product.description}
                      </p>
                    </TabsContent>
                    <TabsContent value="specifications" className="pt-4">
                      <ul className="text-sm space-y-2">
                        {product.specifications.map((spec, index) => (
                          <li key={index} className="grid grid-cols-2 gap-2">
                            <span className="font-medium">{spec.name}:</span>
                            <span>{spec.value}</span>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                    <TabsContent value="shipping" className="pt-4">
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2">
                          <Truck className="h-4 w-4 text-arteviva-purple" />
                          <span>
                            {product.shipping.free 
                              ? 'Frete grátis para todo o Brasil' 
                              : 'Frete calculado no checkout'}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-arteviva-purple" />
                          <span>Tempo estimado de entrega: {product.shipping.timeEstimate}</span>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>

                <div className="flex items-center text-sm mb-6">
                  <span className={`flex items-center gap-1 ${product.inStock > 0 ? 'text-green-600' : 'text-red-500'}`}>
                    {product.inStock > 0 ? (
                      <>
                        <Check className="h-4 w-4" />
                        Em estoque ({product.inStock} unidades)
                      </>
                    ) : (
                      'Esgotado'
                    )}
                  </span>
                </div>

                <div className="flex flex-col space-y-3">
                  <Button onClick={handleBuyNow} className="gap-2 bg-arteviva-purple hover:bg-arteviva-purple-dark">
                    <ShoppingBag className="h-4 w-4" />
                    Comprar agora
                  </Button>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" onClick={handleAddToCart} className="gap-2">
                      <ShoppingCart className="h-4 w-4" />
                      Adicionar ao carrinho
                    </Button>
                    <Button variant="secondary" onClick={handleAddToFavorites} className="gap-2">
                      <Heart className="h-4 w-4" />
                      Adicionar aos favoritos
                    </Button>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-6 mt-auto">
                <h4 className="font-medium mb-3">Informações de pagamento</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CreditCard className="h-4 w-4 mt-0.5 text-arteviva-purple" />
                    <span>Aceitamos cartão de crédito, boleto bancário e Pix</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="h-4 w-4 mt-0.5 text-arteviva-purple" />
                    <span>Compra garantida: receba o produto como descrito ou devolvemos seu dinheiro</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related products */}
          <section className="mb-16">
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6">
              Produtos relacionados
            </h2>
            <ProductGrid products={relatedProducts} columns={3} />
          </section>
        </div>
      </Layout>
    </>
  );
};

// Componente utilitário faltando
const ShieldCheck = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M20 13c0 5-3.5 7.5-8 8.5-4.5-1-8-3.5-8-8.5V6a30.5 30.5 0 0 0 16 0v7" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default Product;
