
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SellerFeatures: React.FC = () => {
  return (
    <section className="py-16 feature-gradient">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 leading-tight">
              Venda suas criações para pessoas que valorizam trabalhos artesanais
            </h2>
            <p className="text-muted-foreground mb-6">
              O ArteViva facilita para artesãos e criadores venderem seus produtos artesanais para pessoas que valorizam qualidade e originalidade.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                'Configure sua loja em minutos sem conhecimentos técnicos',
                'Escolha planos de destaque para aumentar a visibilidade',
                'Gerencie pedidos e produtos com facilidade no dashboard',
                'Acompanhe métricas de desempenho dos seus produtos'
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 bg-arteviva-purple rounded-full flex items-center justify-center text-white text-xs">✓</div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button asChild size="lg" className="bg-arteviva-purple hover:bg-arteviva-purple-dark">
              <Link to="/register/seller">
                Comece a Vender
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="font-display text-lg font-medium mb-1">Destaque Básico</div>
                <div className="text-sm text-muted-foreground mb-3">5% de taxa adicional</div>
                <ul className="text-sm space-y-2 mb-4">
                  <li>• Apareça em seções recomendadas</li>
                  <li>• Visibilidade aumentada</li>
                  <li>• Prioridade em pesquisas</li>
                </ul>
                <Button variant="outline" className="w-full">Escolher Plano</Button>
              </div>
              <div className="bg-arteviva-purple/5 rounded-lg p-4 text-center">
                <p className="text-sm">
                  <span className="font-medium">+123%</span> de vendas para produtos em destaque
                </p>
              </div>
            </div>
            
            <div className="space-y-4 mt-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border-2 border-arteviva-purple relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-arteviva-purple text-white text-xs py-1 px-3 rounded-full">
                  Mais popular
                </div>
                <div className="font-display text-lg font-medium mb-1">Destaque Pro</div>
                <div className="text-sm text-muted-foreground mb-3">10% de taxa adicional</div>
                <ul className="text-sm space-y-2 mb-4">
                  <li>• Apareça na página inicial</li>
                  <li>• Destaque premium em pesquisas</li>
                  <li>• Selo verificado no perfil</li>
                  <li>• Análises de performance</li>
                </ul>
                <Button className="w-full bg-arteviva-purple hover:bg-arteviva-purple-dark">Escolher Plano</Button>
              </div>
              <div className="bg-arteviva-purple/5 rounded-lg p-4 text-center">
                <p className="text-sm">
                  <span className="font-medium">Suporte exclusivo</span> para vendedores PRO
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerFeatures;
