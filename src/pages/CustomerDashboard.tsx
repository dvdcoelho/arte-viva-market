
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Helmet } from 'react-helmet-async';
import { 
  ShoppingBag, 
  Heart, 
  User, 
  Star, 
  Package,
  Bell,
  Settings,
  MessageSquare,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/sonner';

interface PendingReview {
  id: string;
  productId: string;
  productName: string;
  imageUrl: string;
  orderDate: string;
  sellerName: string;
}

const CustomerDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [hasReviewedLatestPurchase, setHasReviewedLatestPurchase] = useState(false);

  // Dados mockados para demonstração
  const customer = {
    name: 'Ana Silva',
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
    totalOrders: 8,
    favoriteItems: 12,
    pendingOrdersCount: 2,
    colorPreference: '#E4C1F9', // Default to purple
    initials: 'AS',
    notifications: 3,
  };
  
  const pendingReviews: PendingReview[] = [
    {
      id: 'review1',
      productId: 'prod1',
      productName: 'Vaso em Cerâmica Rústica Artesanal',
      imageUrl: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fGNlcmFtaWMlMjBwb3R8ZW58MHx8fHwxNzIwMDU0ODU2fDA&ixlib=rb-4.0.3&q=80',
      orderDate: '2025-04-22',
      sellerName: 'Ateliê Maria Clara',
    }
  ];

  const orders = [
    {
      id: 'ORD123456',
      date: '2025-04-29',
      status: 'delivered',
      items: [
        { id: 'item1', name: 'Conjunto de Pratos Artesanais', price: 239.90, quantity: 1 }
      ],
      total: 239.90,
      seller: 'Porcelana & Arte',
      tracking: 'BR123456789'
    },
    {
      id: 'ORD123455',
      date: '2025-04-25',
      status: 'shipped',
      items: [
        { id: 'item2', name: 'Colar de Macramê com Pedra Natural', price: 75.00, quantity: 1 }
      ],
      total: 75.00,
      seller: 'Bela Trama',
      tracking: 'BR987654321'
    },
    {
      id: 'ORD123454',
      date: '2025-04-20',
      status: 'processing',
      items: [
        { id: 'item3', name: 'Caneca em Porcelana Pintada à Mão', price: 59.90, quantity: 2 }
      ],
      total: 119.80,
      seller: 'Porcelana & Arte',
    }
  ];

  const handleReviewSubmit = (rating: number, comment: string) => {
    console.log('Review submitted:', { rating, comment });
    toast.success('Avaliação enviada com sucesso! Obrigado pelo feedback.');
    setHasReviewedLatestPurchase(true);
  };

  const [colorPreference, setColorPreference] = useState(customer.colorPreference);
  const [initials, setInitials] = useState(customer.initials);

  const handleColorChange = (color: string) => {
    setColorPreference(color);
    toast.success('Preferência de cor atualizada!');
  };

  const handleInitialsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 2) {
      setInitials(event.target.value.toUpperCase());
    }
  };

  const colorOptions = [
    { name: 'Rosa', value: '#FF99C8' },
    { name: 'Amarelo', value: '#FCF6BD' },
    { name: 'Verde', value: '#D0F4DE' },
    { name: 'Azul', value: '#A9DEF9' },
    { name: 'Roxo', value: '#E4C1F9' },
  ];

  if (!hasReviewedLatestPurchase && pendingReviews.length > 0) {
    return (
      <Layout>
        <Helmet>
          <title>Avaliação Pendente | Kair</title>
        </Helmet>
        <div className="container px-4 mx-auto py-12">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-6">
              <Star className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h1 className="text-2xl font-display font-semibold mb-2">Sua avaliação é importante!</h1>
              <p className="text-muted-foreground">Para continuar usando a plataforma, por favor avalie sua compra mais recente.</p>
            </div>

            <div className="flex items-center gap-4 p-4 border rounded-lg mb-6">
              <img 
                src={pendingReviews[0].imageUrl} 
                alt={pendingReviews[0].productName} 
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h3 className="font-medium">{pendingReviews[0].productName}</h3>
                <p className="text-sm text-muted-foreground">Comprado em {new Date(pendingReviews[0].orderDate).toLocaleDateString('pt-BR')}</p>
                <p className="text-sm">Vendedor: {pendingReviews[0].sellerName}</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="font-medium mb-2">Como você avalia este produto?</p>
              <div className="flex gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button 
                    key={star} 
                    className="text-2xl focus:outline-none transition-colors"
                    onClick={() => handleReviewSubmit(star, "Ótimo produto!")}
                  >
                    <Star className="w-8 h-8 text-gray-300 hover:text-yellow-400 transition-colors" />
                  </button>
                ))}
              </div>

              <textarea 
                className="w-full border rounded-md p-3 focus:ring-2 focus:ring-kair-purple focus:border-transparent resize-none"
                rows={4}
                placeholder="Conte-nos mais sobre sua experiência com este produto..."
              ></textarea>
            </div>

            <div className="flex justify-end">
              <Button 
                className="bg-kair-purple hover:bg-kair-purple-dark"
                onClick={() => handleReviewSubmit(5, "Ótimo produto!")}
              >
                Enviar Avaliação
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Helmet>
        <title>Minha Conta | Kair</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <Layout>
        <div className="container px-4 mx-auto py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex items-center gap-3">
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold"
                style={{ backgroundColor: colorPreference }}
              >
                {initials}
              </div>
              <div>
                <h1 className="text-2xl font-display font-semibold">
                  Olá, {customer.name}
                </h1>
                <p className="text-muted-foreground">Bem-vindo(a) à sua área de cliente</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {customer.notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-kair-pink text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {customer.notifications}
                  </span>
                )}
              </Button>
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => navigate('/customer/profile')}
              >
                <Settings className="h-4 w-4" />
                Configurações
              </Button>
            </div>
          </div>

          {/* Cards de estatísticas */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <Card className="bg-white hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Pedidos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{customer.totalOrders}</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                  <Package className="h-4 w-4" />
                  <span>{customer.pendingOrdersCount} pedidos em andamento</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Favoritos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{customer.favoriteItems}</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                  <Heart className="h-4 w-4" />
                  <span>Produtos salvos</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Conversas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                  <MessageSquare className="h-4 w-4" />
                  <span>2 novas mensagens</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="orders" className="mb-6">
            <TabsList className="mb-4">
              <TabsTrigger value="orders">Meus Pedidos</TabsTrigger>
              <TabsTrigger value="profile">Personalização</TabsTrigger>
              <TabsTrigger value="favorites">Favoritos</TabsTrigger>
            </TabsList>
            
            <TabsContent value="orders" className="bg-white p-6 rounded-lg border">
              <h2 className="text-xl font-medium mb-4">Meus Pedidos</h2>
              
              <div className="space-y-4">
                {orders.map(order => (
                  <div key={order.id} className="border rounded-lg p-4 hover:border-kair-purple transition-colors">
                    <div className="flex flex-col md:flex-row justify-between mb-3">
                      <div>
                        <p className="text-sm text-muted-foreground">Pedido #{order.id}</p>
                        <p className="font-medium">{new Date(order.date).toLocaleDateString('pt-BR')}</p>
                      </div>
                      <Badge className={
                        order.status === 'delivered' ? 'bg-green-500' :
                        order.status === 'shipped' ? 'bg-kair-blue' : 'bg-kair-yellow'
                      }>
                        {order.status === 'delivered' ? 'Entregue' :
                         order.status === 'shipped' ? 'Enviado' : 'Em processamento'}
                      </Badge>
                    </div>
                    
                    {order.items.map((item) => (
                      <div key={item.id} className="flex justify-between py-2 border-b">
                        <div>
                          <p>{item.name}</p>
                          <p className="text-sm text-muted-foreground">Qtd: {item.quantity}</p>
                        </div>
                        <p className="font-medium">{item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                      </div>
                    ))}
                    
                    <div className="flex justify-between items-center mt-3">
                      <div>
                        <p className="text-sm">Vendedor: {order.seller}</p>
                        {order.tracking && <p className="text-sm text-muted-foreground">Rastreio: {order.tracking}</p>}
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{order.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                        <Button variant="link" className="p-0 h-auto text-kair-purple">Ver detalhes</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="profile" className="bg-white p-6 rounded-lg border">
              <h2 className="text-xl font-medium mb-4">Personalização do Perfil</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Seu Avatar</h3>
                  <div className="flex items-center gap-6">
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                      style={{ backgroundColor: colorPreference }}
                    >
                      {initials}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Iniciais</label>
                      <input
                        type="text"
                        className="border rounded px-3 py-2 w-16 text-center font-bold"
                        value={initials}
                        onChange={handleInitialsChange}
                        maxLength={2}
                      />
                      <p className="text-xs text-muted-foreground mt-1">Máximo de 2 caracteres</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3">Cores de Preferência</h3>
                  <div className="flex flex-wrap gap-3">
                    {colorOptions.map(color => (
                      <button
                        key={color.value}
                        className={`w-10 h-10 rounded-full border-2 transition-all ${
                          colorPreference === color.value ? 'border-gray-800 scale-110' : 'border-transparent'
                        }`}
                        style={{ backgroundColor: color.value }}
                        onClick={() => handleColorChange(color.value)}
                        title={color.name}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Esta cor será usada em seu avatar e elementos de destaque</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="favorites" className="bg-white p-6 rounded-lg border">
              <h2 className="text-xl font-medium mb-4">Produtos Favoritos</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="border rounded-lg overflow-hidden hover:border-kair-purple transition-colors group">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fGNlcmFtaWMlMjBwb3R8ZW58MHx8fHwxNzIwMDU0ODU2fDA&ixlib=rb-4.0.3&q=80"
                      alt="Vaso em Cerâmica Rústica" 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium">Vaso em Cerâmica Rústica Artesanal</h3>
                    <p className="text-sm text-muted-foreground">Ateliê Maria Clara</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-bold">R$ 159,90</span>
                      <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                        <Heart className="h-4 w-4 fill-kair-pink text-kair-pink" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg overflow-hidden hover:border-kair-purple transition-colors group">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1619873916622-53fb58cbaaa6?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fG1hY3JhbWUlMjBqZXdlbHJ5fGVufDB8fHx8MTcyMDA1NDk0MXww&ixlib=rb-4.0.3&q=80"
                      alt="Colar de Macramê" 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium">Colar de Macramê com Pedra Natural</h3>
                    <p className="text-sm text-muted-foreground">Bela Trama</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-bold">R$ 75,00</span>
                      <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                        <Heart className="h-4 w-4 fill-kair-pink text-kair-pink" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Layout>
    </>
  );
};

export default CustomerDashboard;
