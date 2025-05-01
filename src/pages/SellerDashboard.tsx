
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  DollarSign, 
  Package, 
  ShoppingBag, 
  Star, 
  TrendingUp,
  PlusCircle,
  Settings,
  Clock,
  Eye,
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Helmet } from 'react-helmet-async';
import ProductCard from '@/components/product/ProductCard';

const SellerDashboard: React.FC = () => {
  // Dados mockados para demonstração
  const seller = {
    name: 'Ateliê Maria Clara',
    profileImage: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
    featured: 'pro' as 'pro' | 'basic' | null,
    featuredUntil: '2025-05-15',
    balance: 1876.45,
    totalSales: 4750.80,
    ordersCount: 27,
    productsCount: 12,
    viewsCount: 1245,
    conversionRate: 2.17,
  };
  
  // Produtos mockados para demonstração
  const products = [
    {
      id: '1',
      name: 'Vaso em Cerâmica Rústica Artesanal',
      price: 159.9,
      imageUrl: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fGNlcmFtaWMlMjBwb3R8ZW58MHx8fHwxNzIwMDU0ODU2fDA&ixlib=rb-4.0.3&q=80',
      sellerName: seller.name,
      rating: 4.8,
      featured: 'pro',
      stock: 8,
      sales: 14,
      views: 345,
    },
    {
      id: '2',
      name: 'Conjunto de Pratos em Cerâmica Artesanal',
      price: 239.9,
      imageUrl: 'https://images.unsplash.com/photo-1607006344380-b4775736f473?ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8aGFuZG1hZGUlMjBzb2FwfGVufDB8fHx8MTcyMDA1NDkwNXww&ixlib=rb-4.0.3&q=80',
      sellerName: seller.name,
      rating: 4.7,
      featured: 'basic',
      stock: 5,
      sales: 7,
      views: 210,
    },
    {
      id: '3',
      name: 'Tigela Decorativa em Cerâmica',
      price: 89.9,
      imageUrl: 'https://images.unsplash.com/photo-1619873916622-53fb58cbaaa6?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fG1hY3JhbWUlMjBqZXdlbHJ5fGVufDB8fHx8MTcyMDA1NDk0MXww&ixlib=rb-4.0.3&q=80',
      sellerName: seller.name,
      rating: 4.9,
      stock: 12,
      sales: 6,
      views: 178,
    },
  ];
  
  // Pedidos mockados para demonstração
  const orders = [
    {
      id: 'ORD12345',
      date: '2025-04-29',
      customer: 'João Silva',
      items: [
        { productId: '1', name: 'Vaso em Cerâmica Rústica Artesanal', quantity: 1, price: 159.9 }
      ],
      total: 159.9,
      status: 'pending',
    },
    {
      id: 'ORD12346',
      date: '2025-04-28',
      customer: 'Maria Oliveira',
      items: [
        { productId: '2', name: 'Conjunto de Pratos em Cerâmica Artesanal', quantity: 1, price: 239.9 }
      ],
      total: 239.9,
      status: 'completed',
    },
    {
      id: 'ORD12347',
      date: '2025-04-27',
      customer: 'Carlos Mendes',
      items: [
        { productId: '3', name: 'Tigela Decorativa em Cerâmica', quantity: 2, price: 89.9 }
      ],
      total: 179.8,
      status: 'shipped',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Painel do Vendedor | ArteViva</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <Layout hideFooter>
        <div className="container px-4 mx-auto py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={seller.profileImage}
                  alt={seller.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl font-display font-semibold">
                  Bem-vindo(a), {seller.name}
                </h1>
                <div className="flex items-center gap-2">
                  {seller.featured === 'pro' ? (
                    <Badge className="bg-arteviva-purple">Plano Pro</Badge>
                  ) : seller.featured === 'basic' ? (
                    <Badge variant="outline" className="border-arteviva-purple text-arteviva-purple">
                      Plano Básico
                    </Badge>
                  ) : null}
                  {seller.featured && (
                    <span className="text-sm text-muted-foreground">
                      Ativo até {new Date(seller.featuredUntil).toLocaleDateString('pt-BR')}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-1" asChild>
                <a href="#settings">
                  <Settings className="h-4 w-4" />
                  Configurações
                </a>
              </Button>
              <Button className="bg-arteviva-purple hover:bg-arteviva-purple-dark gap-1">
                <PlusCircle className="h-4 w-4" />
                Novo Produto
              </Button>
            </div>
          </div>

          {/* Cartões de estatísticas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Saldo disponível
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {seller.balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Total: {seller.totalSales.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Pedidos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{seller.ordersCount}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Últimos 30 dias
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Visualizações
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{seller.viewsCount}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Taxa de conversão: {seller.conversionRate}%
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Produtos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{seller.productsCount}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {products.filter(p => p.featured).length} em destaque
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Tabs para diferentes seções do dashboard */}
          <Tabs defaultValue="overview" className="mb-6">
            <TabsList className="mb-4">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="products">Produtos</TabsTrigger>
              <TabsTrigger value="orders">Pedidos</TabsTrigger>
              <TabsTrigger value="promotions">Promoções</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Desempenho de Vendas</CardTitle>
                    <CardDescription>
                      Análise de vendas dos últimos 30 dias
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="h-80 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <BarChart3 className="h-10 w-10 mx-auto mb-2" />
                      <p>Gráfico de desempenho de vendas</p>
                      <p className="text-sm">(Implementação completa em breve)</p>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="flex flex-col gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Produtos Mais Vendidos</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {products.slice(0, 3).map((product, index) => (
                          <div key={product.id} className="flex gap-3 items-center">
                            <div className="w-10 h-10 rounded overflow-hidden flex-shrink-0">
                              <img 
                                src={product.imageUrl} 
                                alt={product.name} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-grow min-w-0">
                              <div className="text-sm font-medium truncate">{product.name}</div>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <span>{product.sales} vendas</span>
                                <span>•</span>
                                <span>{product.views} visualizações</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-medium text-sm">
                                {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Últimas Avaliações</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex gap-2 items-start">
                          <div className="mt-0.5">
                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                          </div>
                          <div className="flex-grow">
                            <div className="text-sm font-medium">Maria S.</div>
                            <p className="text-xs text-muted-foreground">
                              "Produto incrível! Superei minhas expectativas, recomendo muito."
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Para: Vaso em Cerâmica Rústica Artesanal
                            </p>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            3 dias atrás
                          </div>
                        </div>
                        <div className="flex gap-2 items-start">
                          <div className="mt-0.5">
                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                          </div>
                          <div className="flex-grow">
                            <div className="text-sm font-medium">Carlos R.</div>
                            <p className="text-xs text-muted-foreground">
                              "A qualidade da cerâmica é excelente. Entrega rápida."
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Para: Conjunto de Pratos em Cerâmica Artesanal
                            </p>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            1 semana atrás
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="products">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Seus Produtos</CardTitle>
                    <CardDescription>
                      Gerencie seus produtos e estoques
                    </CardDescription>
                  </div>
                  <Button className="bg-arteviva-purple hover:bg-arteviva-purple-dark gap-1">
                    <PlusCircle className="h-4 w-4" />
                    Novo Produto
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map(product => (
                      <div key={product.id} className="border border-border rounded-lg overflow-hidden group relative">
                        <div className="absolute top-0 right-0 p-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button variant="secondary" size="sm" className="h-8 px-2">
                            <Settings className="h-4 w-4" />
                          </Button>
                        </div>
                        {product.featured && (
                          <Badge 
                            className={`absolute top-2 left-2 z-10 ${
                              product.featured === 'pro' ? 'bg-arteviva-purple' : 'bg-arteviva-purple/70'
                            }`}
                          >
                            {product.featured === 'pro' ? 'Destaque Pro' : 'Destaque'}
                          </Badge>
                        )}
                        <div className="aspect-square overflow-hidden">
                          <img 
                            src={product.imageUrl} 
                            alt={product.name} 
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                          />
                        </div>
                        <div className="p-3">
                          <h3 className="font-medium text-sm line-clamp-1">{product.name}</h3>
                          <div className="flex justify-between items-center mt-2">
                            <div className="text-sm font-medium">
                              {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Estoque: {product.stock}
                            </div>
                          </div>
                          <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <ShoppingBag className="h-3 w-3" />
                              {product.sales} vendas
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              {product.views} visualizações
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>Pedidos Recentes</CardTitle>
                  <CardDescription>
                    Gerencie e acompanhe seus pedidos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b bg-muted/50">
                          <th className="py-3 px-4 text-left">ID do Pedido</th>
                          <th className="py-3 px-4 text-left">Data</th>
                          <th className="py-3 px-4 text-left">Cliente</th>
                          <th className="py-3 px-4 text-left">Total</th>
                          <th className="py-3 px-4 text-left">Status</th>
                          <th className="py-3 px-4 text-left">Ação</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map(order => (
                          <tr key={order.id} className="border-b">
                            <td className="py-3 px-4">{order.id}</td>
                            <td className="py-3 px-4">{new Date(order.date).toLocaleDateString('pt-BR')}</td>
                            <td className="py-3 px-4">{order.customer}</td>
                            <td className="py-3 px-4">
                              {order.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                            </td>
                            <td className="py-3 px-4">
                              <Badge 
                                variant={
                                  order.status === 'completed' ? 'default' :
                                  order.status === 'shipped' ? 'secondary' : 'outline'
                                }
                                className={
                                  order.status === 'completed' ? 'bg-green-500' :
                                  order.status === 'shipped' ? 'bg-blue-500' : ''
                                }
                              >
                                {order.status === 'completed' ? 'Concluído' :
                                 order.status === 'shipped' ? 'Enviado' : 'Pendente'}
                              </Badge>
                            </td>
                            <td className="py-3 px-4">
                              <Button variant="ghost" size="sm">Detalhes</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="promotions">
              <Card>
                <CardHeader>
                  <CardTitle>Planos de Destaque</CardTitle>
                  <CardDescription>
                    Aumente a visibilidade dos seus produtos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Plano Básico */}
                    <div className="border border-border rounded-lg p-6">
                      <div className="font-display text-lg font-medium mb-1">Destaque Básico</div>
                      <div className="text-sm text-muted-foreground mb-3">5% de taxa adicional</div>
                      <ul className="text-sm space-y-3 mb-6">
                        <li className="flex items-start gap-2">
                          <div className="mt-1 h-4 w-4 bg-arteviva-purple rounded-full flex items-center justify-center text-white text-xs">✓</div>
                          <span>Apareça em seções recomendadas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 h-4 w-4 bg-arteviva-purple rounded-full flex items-center justify-center text-white text-xs">✓</div>
                          <span>Visibilidade aumentada</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 h-4 w-4 bg-arteviva-purple rounded-full flex items-center justify-center text-white text-xs">✓</div>
                          <span>Prioridade em pesquisas</span>
                        </li>
                      </ul>
                      
                      <div className="mb-6">
                        <div className="text-sm mb-1 flex justify-between">
                          <span>Produtos com Destaque Básico</span>
                          <span>1 / 3</span>
                        </div>
                        <Progress value={33} className="bg-muted" />
                      </div>
                      
                      <Button variant="outline" className="w-full">Adicionar Produto</Button>
                    </div>
                    
                    {/* Plano Pro */}
                    <div className="border-2 border-arteviva-purple rounded-lg p-6 relative">
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-arteviva-purple text-white text-xs py-1 px-3 rounded-full">
                        Mais popular
                      </div>
                      <div className="font-display text-lg font-medium mb-1">Destaque Pro</div>
                      <div className="text-sm text-muted-foreground mb-3">10% de taxa adicional</div>
                      <ul className="text-sm space-y-3 mb-6">
                        <li className="flex items-start gap-2">
                          <div className="mt-1 h-4 w-4 bg-arteviva-purple rounded-full flex items-center justify-center text-white text-xs">✓</div>
                          <span>Apareça na página inicial</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 h-4 w-4 bg-arteviva-purple rounded-full flex items-center justify-center text-white text-xs">✓</div>
                          <span>Destaque premium em pesquisas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 h-4 w-4 bg-arteviva-purple rounded-full flex items-center justify-center text-white text-xs">✓</div>
                          <span>Selo verificado no perfil</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 h-4 w-4 bg-arteviva-purple rounded-full flex items-center justify-center text-white text-xs">✓</div>
                          <span>Análises de performance</span>
                        </li>
                      </ul>
                      
                      <div className="mb-6">
                        <div className="text-sm mb-1 flex justify-between">
                          <span>Produtos com Destaque Pro</span>
                          <span>2 / 5</span>
                        </div>
                        <Progress value={40} className="bg-muted" />
                      </div>
                      
                      <Button className="w-full bg-arteviva-purple hover:bg-arteviva-purple-dark">Adicionar Produto</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </Layout>
    </>
  );
};

export default SellerDashboard;
