
import React from 'react';
import Layout from '@/components/layout/Layout';
import AuthForm from '@/components/auth/AuthForm';
import { toast } from '@/components/ui/sonner';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (data: any) => {
    console.log('Login data:', data);
    
    // Simulação de login bem-sucedido
    toast.success('Login realizado com sucesso!');
    
    // Redireciona com base no tipo de usuário
    if (data.userType === 'seller') {
      navigate('/dashboard');
    } else {
      navigate('/customer/dashboard');
    }
  };

  return (
    <>
      <Helmet>
        <title>Entrar | Kair</title>
        <meta name="description" content="Entre em sua conta no Kair para comprar produtos artesanais únicos ou gerenciar sua loja." />
      </Helmet>

      <Layout>
        <div className="min-h-[80vh] py-12 flex items-center justify-center bg-kair-background">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-display font-bold mb-2 text-kair-purple">Bem-vindo de volta!</h1>
              <p className="text-muted-foreground">Entre para continuar sua jornada artesanal</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 border border-kair-purple/20">
              <AuthForm type="login" onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Login;
