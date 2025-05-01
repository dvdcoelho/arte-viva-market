
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import AuthForm from '@/components/auth/AuthForm';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from '@/components/ui/sonner';
import { Helmet } from 'react-helmet-async';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';

const Register: React.FC = () => {
  const { userType } = useParams<{ userType?: string }>();
  const navigate = useNavigate();
  
  // Se o userType estiver definido na URL, use-o; caso contrário, defina como 'buyer' por padrão
  const [selectedUserType, setSelectedUserType] = useState<'buyer' | 'seller'>(
    userType === 'seller' ? 'seller' : 'buyer'
  );
  
  const handleSubmit = (data: any) => {
    console.log('Register data:', data);
    // Simulação de cadastro bem-sucedido
    toast.success(`Cadastro ${selectedUserType === 'seller' ? 'de vendedor' : 'de cliente'} realizado com sucesso!`);
    // Redirecionaria para a home ou dashboard após o cadastro
    setTimeout(() => {
      navigate('/', { replace: true });
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>{selectedUserType === 'seller' ? 'Cadastro de Vendedor' : 'Cadastro de Cliente'} | Kair</title>
        <meta 
          name="description" 
          content={selectedUserType === 'seller' 
            ? "Cadastre-se como vendedor no Kair e comece a vender seus produtos artesanais." 
            : "Crie sua conta no Kair para comprar produtos artesanais únicos."}
        />
      </Helmet>

      <Layout>
        <div className="min-h-[80vh] py-12 flex flex-col items-center justify-center bg-kair-background">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-display font-bold mb-2 text-kair-purple">Crie sua conta</h1>
              <p className="text-muted-foreground">Escolha como deseja se cadastrar</p>
            </div>
            
            {!userType && (
              <Card className="p-6 mb-8">
                <RadioGroup 
                  value={selectedUserType} 
                  onValueChange={(value) => setSelectedUserType(value as 'buyer' | 'seller')}
                  className="flex flex-col space-y-4"
                >
                  <div className="flex items-center space-x-3 p-3 rounded-md border border-border hover:bg-secondary/50 transition cursor-pointer">
                    <RadioGroupItem value="buyer" id="buyer" />
                    <Label htmlFor="buyer" className="flex-1 cursor-pointer">
                      <div className="font-medium">Cliente</div>
                      <p className="text-sm text-muted-foreground">Compre produtos artesanais exclusivos</p>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-md border border-border hover:bg-secondary/50 transition cursor-pointer">
                    <RadioGroupItem value="seller" id="seller" />
                    <Label htmlFor="seller" className="flex-1 cursor-pointer">
                      <div className="font-medium">Vendedor</div>
                      <p className="text-sm text-muted-foreground">Venda seus produtos artesanais na plataforma</p>
                    </Label>
                  </div>
                </RadioGroup>
              </Card>
            )}
            
            <div className="bg-white rounded-lg shadow-md p-8 border border-kair-purple/20">
              <AuthForm 
                type="register" 
                userType={selectedUserType}
                onSubmit={handleSubmit} 
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Register;
