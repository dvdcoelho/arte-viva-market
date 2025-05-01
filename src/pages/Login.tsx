
import React from 'react';
import Layout from '@/components/layout/Layout';
import AuthForm from '@/components/auth/AuthForm';
import { toast } from '@/components/ui/sonner';
import { Helmet } from 'react-helmet-async';

const Login: React.FC = () => {
  const handleSubmit = (data: any) => {
    console.log('Login data:', data);
    // Simulação de login bem-sucedido
    toast.success('Login realizado com sucesso!');
    // Normalmente redirecionaria para a home ou dashboard
  };

  return (
    <>
      <Helmet>
        <title>Entrar | Kair</title>
        <meta name="description" content="Entre em sua conta no Kair para comprar produtos artesanais únicos ou gerenciar sua loja." />
      </Helmet>

      <Layout>
        <div className="min-h-[80vh] py-12 flex items-center justify-center">
          <AuthForm type="login" onSubmit={handleSubmit} />
        </div>
      </Layout>
    </>
  );
};

export default Login;
