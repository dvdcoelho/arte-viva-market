
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

interface AuthFormProps {
  type: 'login' | 'register';
  userType?: 'buyer' | 'seller';
  onSubmit: (data: any) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
  type,
  userType = 'buyer',
  onSubmit,
}) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    storeName: '', // apenas para vendedores
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isRegister = type === 'register';
  const isSeller = userType === 'seller';

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-border max-w-md w-full">
      <h2 className="text-2xl font-display font-semibold mb-6 text-center">
        {isRegister
          ? isSeller
            ? 'Cadastre-se como Vendedor'
            : 'Crie sua conta'
          : 'Entrar na sua conta'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {isRegister && (
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Digite seu nome completo"
            />
          </div>
        )}

        {isRegister && isSeller && (
          <div className="space-y-2">
            <Label htmlFor="storeName">Nome da loja</Label>
            <Input
              id="storeName"
              name="storeName"
              value={formData.storeName}
              onChange={handleChange}
              required
              placeholder="Nome da sua loja"
            />
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Digite seu e-mail"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Digite sua senha"
          />
        </div>

        {isRegister && (
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirme sua senha</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirme sua senha"
            />
          </div>
        )}

        <Button 
          type="submit" 
          className="w-full bg-arteviva-purple hover:bg-arteviva-purple-dark mt-2"
        >
          {isRegister
            ? 'Criar conta'
            : 'Entrar'}
        </Button>
      </form>

      <div className="mt-6 text-center text-sm">
        {isRegister ? (
          <p>
            Já tem uma conta?{' '}
            <Link to="/login" className="text-arteviva-purple font-medium hover:underline">
              Entre aqui
            </Link>
          </p>
        ) : (
          <p>
            Não tem uma conta?{' '}
            <Link to="/register" className="text-arteviva-purple font-medium hover:underline">
              Cadastre-se
            </Link>
          </p>
        )}
      </div>

      {!isRegister && (
        <div className="mt-2 text-center">
          <Link to="/forgot-password" className="text-sm text-arteviva-purple hover:underline">
            Esqueci minha senha
          </Link>
        </div>
      )}

      {isRegister && !isSeller && (
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-center text-sm mb-4">Quer vender seus produtos artesanais?</p>
          <Button asChild variant="outline" className="w-full">
            <Link to="/register/seller">
              Cadastre-se como vendedor
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
