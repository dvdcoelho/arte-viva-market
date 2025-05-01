
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Helmet } from 'react-helmet-async';
import { 
  ChevronLeft,
  MoreHorizontal,
  Calendar,
  User,
  MapPin,
  Package,
  DollarSign,
  Clock,
  CheckCircle2,
  Truck,
  Search,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/sonner';
import { Input } from '@/components/ui/input';

interface Order {
  id: string;
  customer: {
    name: string;
    address: string;
  };
  items: Array<{
    id: string;
    name: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  date: string;
  status: 'new' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentStatus: 'paid' | 'pending';
}

const OrderKanban: React.FC = () => {
  const navigate = useNavigate();
  
  // Mock data for demonstration
  const [orders, setOrders] = useState<Order[]>([
    {
      id: "ORD12345",
      customer: {
        name: "João Silva",
        address: "Rua das Flores, 123, São Paulo - SP"
      },
      items: [
        { id: "item1", name: "Vaso em Cerâmica Rústica Artesanal", quantity: 1, price: 159.9 }
      ],
      total: 159.9,
      date: "2025-04-29T14:30:00",
      status: "new",
      paymentStatus: "paid"
    },
    {
      id: "ORD12346",
      customer: {
        name: "Maria Oliveira",
        address: "Av. Paulista, 1000, São Paulo - SP"
      },
      items: [
        { id: "item2", name: "Conjunto de Pratos em Cerâmica Artesanal", quantity: 1, price: 239.9 }
      ],
      total: 239.9,
      date: "2025-04-28T09:15:00",
      status: "processing",
      paymentStatus: "paid"
    },
    {
      id: "ORD12347",
      customer: {
        name: "Carlos Mendes",
        address: "Rua dos Pinheiros, 500, São Paulo - SP"
      },
      items: [
        { id: "item3", name: "Tigela Decorativa em Cerâmica", quantity: 2, price: 89.9 }
      ],
      total: 179.8,
      date: "2025-04-27T16:45:00",
      status: "shipped",
      paymentStatus: "paid"
    },
    {
      id: "ORD12348",
      customer: {
        name: "Ana Pereira",
        address: "Rua Augusta, 300, São Paulo - SP"
      },
      items: [
        { id: "item4", name: "Caneca em Porcelana Pintada à Mão", quantity: 4, price: 59.9 }
      ],
      total: 239.6,
      date: "2025-04-26T11:20:00",
      status: "delivered",
      paymentStatus: "paid"
    },
    {
      id: "ORD12349",
      customer: {
        name: "Roberto Santos",
        address: "Alameda Santos, 700, São Paulo - SP"
      },
      items: [
        { id: "item5", name: "Vaso em Cerâmica Rústica Artesanal", quantity: 1, price: 159.9 },
        { id: "item6", name: "Caneca em Porcelana Pintada à Mão", quantity: 2, price: 59.9 }
      ],
      total: 279.7,
      date: "2025-04-25T13:10:00",
      status: "new",
      paymentStatus: "pending"
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [draggedOrder, setDraggedOrder] = useState<Order | null>(null);

  const filteredOrders = orders.filter(order => 
    order.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
    order.customer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getOrdersByStatus = (status: Order['status']) => {
    return filteredOrders.filter(order => order.status === status);
  };

  const handleDragStart = (order: Order) => {
    setDraggedOrder(order);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (status: Order['status'], e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    
    if (draggedOrder) {
      // Update the order status
      const updatedOrders = orders.map(order => {
        if (order.id === draggedOrder.id) {
          return { ...order, status };
        }
        return order;
      });
      
      setOrders(updatedOrders);
      setDraggedOrder(null);
      
      toast.success(`Pedido ${draggedOrder.id} movido para ${getStatusLabel(status)}`);
    }
  };

  const getStatusLabel = (status: Order['status']) => {
    switch(status) {
      case 'new': return 'Novos';
      case 'processing': return 'Em Processamento';
      case 'shipped': return 'Enviados';
      case 'delivered': return 'Entregues';
      case 'cancelled': return 'Cancelados';
      default: return '';
    }
  };

  const getStatusColor = (status: Order['status']) => {
    switch(status) {
      case 'new': return 'bg-kair-purple';
      case 'processing': return 'bg-kair-blue';
      case 'shipped': return 'bg-kair-yellow text-black';
      case 'delivered': return 'bg-green-500';
      case 'cancelled': return 'bg-red-500';
      default: return '';
    }
  };

  const getStatusIcon = (status: Order['status']) => {
    switch(status) {
      case 'new': return <Clock className="h-5 w-5" />;
      case 'processing': return <Package className="h-5 w-5" />;
      case 'shipped': return <Truck className="h-5 w-5" />;
      case 'delivered': return <CheckCircle2 className="h-5 w-5" />;
      default: return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Kanban de Pedidos | Kair</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <Layout>
        <div className="container px-4 mx-auto py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => navigate('/dashboard')}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-2xl font-display font-semibold">Kanban de Pedidos</h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Buscar pedidos..." 
                  className="pl-9 w-60"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {/* New Orders */}
            <div 
              className="space-y-4"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop('new', e)}
            >
              <div className="flex items-center gap-2 bg-kair-purple/20 rounded-lg p-3">
                <Clock className="h-5 w-5 text-kair-purple" />
                <h2 className="font-medium">Novos</h2>
                <Badge className="bg-kair-purple ml-auto">{getOrdersByStatus('new').length}</Badge>
              </div>
              
              {getOrdersByStatus('new').map(order => (
                <Card 
                  key={order.id}
                  className="border-l-4 border-l-kair-purple cursor-move hover:shadow-md transition-shadow"
                  draggable
                  onDragStart={() => handleDragStart(order)}
                >
                  <CardHeader className="p-3 pb-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-sm font-medium">{order.id}</CardTitle>
                        <p className="text-xs text-muted-foreground">
                          {new Date(order.date).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                      <Badge className={order.paymentStatus === 'paid' ? 'bg-green-500' : 'bg-yellow-500'}>
                        {order.paymentStatus === 'paid' ? 'Pago' : 'Pendente'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-3 pt-2">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <User className="h-4 w-4 text-muted-foreground mt-0.5" />
                        <span className="text-sm">{order.customer.name}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Package className="h-4 w-4 text-muted-foreground mt-0.5" />
                        <span className="text-sm">
                          {order.items.length > 1 
                            ? `${order.items[0].name} e mais ${order.items.length - 1}` 
                            : order.items[0].name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">
                          {order.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-end mt-3">
                      <Button size="sm">Processar</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {getOrdersByStatus('new').length === 0 && (
                <div className="border border-dashed rounded-lg p-4 text-center text-muted-foreground">
                  Nenhum novo pedido
                </div>
              )}
            </div>
            
            {/* Processing Orders */}
            <div 
              className="space-y-4"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop('processing', e)}
            >
              <div className="flex items-center gap-2 bg-kair-blue/20 rounded-lg p-3">
                <Package className="h-5 w-5 text-kair-blue" />
                <h2 className="font-medium">Em Processamento</h2>
                <Badge className="bg-kair-blue ml-auto">{getOrdersByStatus('processing').length}</Badge>
              </div>
              
              {getOrdersByStatus('processing').map(order => (
                <Card 
                  key={order.id}
                  className="border-l-4 border-l-kair-blue cursor-move hover:shadow-md transition-shadow"
                  draggable
                  onDragStart={() => handleDragStart(order)}
                >
                  <CardHeader className="p-3 pb-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-sm font-medium">{order.id}</CardTitle>
                        <p className="text-xs text-muted-foreground">
                          {new Date(order.date).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-3 pt-2">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <User className="h-4 w-4 text-muted-foreground mt-0.5" />
                        <span className="text-sm">{order.customer.name}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Package className="h-4 w-4 text-muted-foreground mt-0.5" />
                        <span className="text-sm">
                          {order.items.length > 1 
                            ? `${order.items[0].name} e mais ${order.items.length - 1}` 
                            : order.items[0].name}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-end mt-3">
                      <Button size="sm">Marcar como Enviado</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {getOrdersByStatus('processing').length === 0 && (
                <div className="border border-dashed rounded-lg p-4 text-center text-muted-foreground">
                  Nenhum pedido em processamento
                </div>
              )}
            </div>
            
            {/* Shipped Orders */}
            <div 
              className="space-y-4"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop('shipped', e)}
            >
              <div className="flex items-center gap-2 bg-kair-yellow/20 rounded-lg p-3">
                <Truck className="h-5 w-5 text-yellow-700" />
                <h2 className="font-medium">Enviados</h2>
                <Badge className="bg-kair-yellow text-black ml-auto">{getOrdersByStatus('shipped').length}</Badge>
              </div>
              
              {getOrdersByStatus('shipped').map(order => (
                <Card 
                  key={order.id}
                  className="border-l-4 border-l-kair-yellow cursor-move hover:shadow-md transition-shadow"
                  draggable
                  onDragStart={() => handleDragStart(order)}
                >
                  <CardHeader className="p-3 pb-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-sm font-medium">{order.id}</CardTitle>
                        <p className="text-xs text-muted-foreground">
                          {new Date(order.date).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-3 pt-2">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <User className="h-4 w-4 text-muted-foreground mt-0.5" />
                        <span className="text-sm">{order.customer.name}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                        <span className="text-sm truncate">{order.customer.address}</span>
                      </div>
                    </div>
                    <div className="flex justify-end mt-3">
                      <Button size="sm" variant="outline">Rastrear</Button>
                      <Button size="sm" className="ml-2">Entregue</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {getOrdersByStatus('shipped').length === 0 && (
                <div className="border border-dashed rounded-lg p-4 text-center text-muted-foreground">
                  Nenhum pedido enviado
                </div>
              )}
            </div>
            
            {/* Delivered Orders */}
            <div 
              className="space-y-4"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop('delivered', e)}
            >
              <div className="flex items-center gap-2 bg-green-500/20 rounded-lg p-3">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <h2 className="font-medium">Entregues</h2>
                <Badge className="bg-green-500 ml-auto">{getOrdersByStatus('delivered').length}</Badge>
              </div>
              
              {getOrdersByStatus('delivered').map(order => (
                <Card 
                  key={order.id}
                  className="border-l-4 border-l-green-500 hover:shadow-md transition-shadow"
                >
                  <CardHeader className="p-3 pb-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-sm font-medium">{order.id}</CardTitle>
                        <p className="text-xs text-muted-foreground">
                          {new Date(order.date).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                      <Badge className="bg-green-500">
                        Concluído
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-3 pt-2">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <User className="h-4 w-4 text-muted-foreground mt-0.5" />
                        <span className="text-sm">{order.customer.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">
                          {order.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {getOrdersByStatus('delivered').length === 0 && (
                <div className="border border-dashed rounded-lg p-4 text-center text-muted-foreground">
                  Nenhum pedido entregue
                </div>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default OrderKanban;
