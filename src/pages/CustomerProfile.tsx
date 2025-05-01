
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Helmet } from 'react-helmet-async';
import { 
  User, 
  Lock, 
  CreditCard,
  Home,
  Bell,
  FileText,
  Loader2,
  CheckCircle,
  ArrowLeft
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/sonner';
import { Switch } from '@/components/ui/switch';

const CustomerProfile: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Dados mockados do cliente
  const [profileData, setProfileData] = useState({
    name: 'Ana Silva',
    email: 'ana.silva@exemplo.com',
    phone: '(11) 98765-4321',
    colorTheme: '#E4C1F9',
    initials: 'AS',
    notificationsEmail: true,
    notificationsPush: true,
    notificationsOrder: true,
    notificationsPromo: false,
  });

  const handleSaveProfile = () => {
    setLoading(true);
    
    // Simulando um tempo de espera para salvar as modificações
    setTimeout(() => {
      setLoading(false);
      toast.success('Perfil atualizado com sucesso!');
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Meu Perfil | Kair</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <Layout>
        <div className="container px-4 mx-auto py-8">
          <Button 
            variant="ghost" 
            className="mb-4 gap-2"
            onClick={() => navigate('/customer/dashboard')}
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao Dashboard
          </Button>
          
          <div className="flex items-center gap-3 mb-8">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold"
              style={{ backgroundColor: profileData.colorTheme }}
            >
              {profileData.initials}
            </div>
            <div>
              <h1 className="text-2xl font-display font-semibold">
                Meu Perfil
              </h1>
              <p className="text-muted-foreground">Gerencie suas informações, preferências e segurança</p>
            </div>
          </div>
          
          <Tabs defaultValue="personal" className="mb-6">
            <TabsList className="mb-6">
              <TabsTrigger value="personal" className="gap-2">
                <User className="h-4 w-4" />
                Dados Pessoais
              </TabsTrigger>
              <TabsTrigger value="security" className="gap-2">
                <Lock className="h-4 w-4" />
                Segurança
              </TabsTrigger>
              <TabsTrigger value="payment" className="gap-2">
                <CreditCard className="h-4 w-4" />
                Pagamento
              </TabsTrigger>
              <TabsTrigger value="addresses" className="gap-2">
                <Home className="h-4 w-4" />
                Endereços
              </TabsTrigger>
              <TabsTrigger value="notifications" className="gap-2">
                <Bell className="h-4 w-4" />
                Notificações
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="personal">
              <Card>
                <CardHeader>
                  <CardTitle>Informações Pessoais</CardTitle>
                  <CardDescription>
                    Atualize suas informações pessoais e como você aparece na plataforma
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome completo</Label>
                      <Input 
                        id="name" 
                        value={profileData.name} 
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={profileData.email} 
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input 
                        id="phone" 
                        value={profileData.phone} 
                        onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Iniciais (para avatar)</Label>
                      <Input 
                        maxLength={2}
                        className="uppercase"
                        value={profileData.initials} 
                        onChange={(e) => setProfileData({...profileData, initials: e.target.value.toUpperCase()})}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Label>Tema de Cor</Label>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { name: 'Rosa', value: '#FF99C8' },
                        { name: 'Amarelo', value: '#FCF6BD' },
                        { name: 'Verde', value: '#D0F4DE' },
                        { name: 'Azul', value: '#A9DEF9' },
                        { name: 'Roxo', value: '#E4C1F9' },
                      ].map(color => (
                        <button
                          key={color.value}
                          className={`w-10 h-10 rounded-full border-2 transition-all ${
                            profileData.colorTheme === color.value ? 'border-gray-800 scale-110' : 'border-transparent'
                          }`}
                          style={{ backgroundColor: color.value }}
                          onClick={() => setProfileData({...profileData, colorTheme: color.value})}
                          title={color.name}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">Esta cor será usada em seu avatar e elementos de destaque</p>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      className="bg-kair-purple hover:bg-kair-purple-dark"
                      onClick={handleSaveProfile}
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Salvando...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Salvar Alterações
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>Segurança da Conta</CardTitle>
                  <CardDescription>
                    Gerencie sua senha e opções de segurança
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Senha Atual</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="new-password">Nova Senha</Label>
                      <Input id="new-password" type="password" />
                      <p className="text-sm text-muted-foreground">
                        A senha deve ter pelo menos 8 caracteres, incluindo letras e números
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      className="bg-kair-purple hover:bg-kair-purple-dark"
                    >
                      Atualizar Senha
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Preferências de Notificações</CardTitle>
                  <CardDescription>
                    Controle quais notificações você deseja receber
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Notificações por E-mail</h3>
                        <p className="text-sm text-muted-foreground">Receba atualizações por email</p>
                      </div>
                      <Switch 
                        checked={profileData.notificationsEmail}
                        onCheckedChange={(checked) => setProfileData({...profileData, notificationsEmail: checked})}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Notificações Push</h3>
                        <p className="text-sm text-muted-foreground">Receba notificações no navegador</p>
                      </div>
                      <Switch 
                        checked={profileData.notificationsPush}
                        onCheckedChange={(checked) => setProfileData({...profileData, notificationsPush: checked})}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Atualizações de Pedidos</h3>
                        <p className="text-sm text-muted-foreground">Status e informações dos seus pedidos</p>
                      </div>
                      <Switch 
                        checked={profileData.notificationsOrder}
                        onCheckedChange={(checked) => setProfileData({...profileData, notificationsOrder: checked})}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Promoções e Novidades</h3>
                        <p className="text-sm text-muted-foreground">Ofertas especiais e lançamentos</p>
                      </div>
                      <Switch 
                        checked={profileData.notificationsPromo}
                        onCheckedChange={(checked) => setProfileData({...profileData, notificationsPromo: checked})}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      className="bg-kair-purple hover:bg-kair-purple-dark"
                      onClick={handleSaveProfile}
                    >
                      Salvar Preferências
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="payment">
              <Card>
                <CardHeader>
                  <CardTitle>Métodos de Pagamento</CardTitle>
                  <CardDescription>
                    Gerencie seus cartões e outras formas de pagamento
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
                    <h3 className="text-lg font-medium mb-2">Nenhum método de pagamento cadastrado</h3>
                    <p className="text-muted-foreground mb-4">
                      Adicione um método de pagamento para agilizar suas compras
                    </p>
                    <Button>Adicionar Método de Pagamento</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="addresses">
              <Card>
                <CardHeader>
                  <CardTitle>Endereços</CardTitle>
                  <CardDescription>
                    Gerencie seus endereços de entrega
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <Home className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
                    <h3 className="text-lg font-medium mb-2">Nenhum endereço cadastrado</h3>
                    <p className="text-muted-foreground mb-4">
                      Adicione um endereço para agilizar suas compras
                    </p>
                    <Button>Adicionar Endereço</Button>
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

export default CustomerProfile;
