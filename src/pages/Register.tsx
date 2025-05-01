
import React from 'react';
import Layout from '@/components/layout/Layout';
import AuthForm from '@/components/auth/AuthForm';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from '@/components/ui/sonner';
import { Helmet } from 'react-helmet-async';

const Register: React.FC = () => {
  const { userType } = useParams<{ userType?: string }>();
  const navigate = useNavigate();
  
  const isSeller = userType === 'seller';
  
  const handleSubmit = (data: any) => {
    console.log('Register data:', data);
    // Simulação de cadastro bem-sucedido
    toast.success(`Cadastro ${isSeller ? 'de vendedor' : ''} realizado com sucesso!`);
    // Redirecionaria para a home ou dashboard após o cadastro
    setTimeout(() => {
      navigate('/', { replace: true });
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>{isSeller ? 'Cadastro de Vendedor' : 'Criar Conta'} | ArteViva</title>
        <meta 
          name="description" 
          content={isSeller 
            ? "Cadastre-se como vendedor no ArteViva e comece a vender seus produtos artesanais." 
            : "Crie sua conta no ArteViva para comprar produtos artesanais únicos."}
        />
      </Helmet>

      <Layout>
        <div className="min-h-[80vh] py-12 flex items-center justify-center">
          <AuthForm 
            type="register" 
            userType={isSeller ? 'seller' : 'buyer'}
            onSubmit={handleSubmit} 
          />
        </div>
      </Layout>
    </>
  );
};

export default Register;
