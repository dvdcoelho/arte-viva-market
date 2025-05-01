
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  // Using useLocation to verify we're in a Router context
  const location = useLocation();
  
  return (
    <footer className="bg-arteviva-gray-light pt-12 pb-6 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-display text-lg mb-4">Kair</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Conectando artesãos talentosos a pessoas que valorizam produtos únicos e feitos com amor.
            </p>
          </div>
          
          <div>
            <h5 className="font-medium mb-4">Para Compradores</h5>
            <ul className="space-y-2 text-sm">
              <li><Link to="/how-it-works" className="text-muted-foreground hover:text-kair-purple">Como funciona</Link></li>
              <li><Link to="/security" className="text-muted-foreground hover:text-kair-purple">Compra segura</Link></li>
              <li><Link to="/faq/buyers" className="text-muted-foreground hover:text-kair-purple">Perguntas frequentes</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-medium mb-4">Para Artesãos</h5>
            <ul className="space-y-2 text-sm">
              <li><Link to="/sell" className="text-muted-foreground hover:text-kair-purple">Vender no Kair</Link></li>
              <li><Link to="/terms/sellers" className="text-muted-foreground hover:text-kair-purple">Termos para vendedores</Link></li>
              <li><Link to="/faq/sellers" className="text-muted-foreground hover:text-kair-purple">Perguntas frequentes</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-medium mb-4">Institucional</h5>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-kair-purple">Sobre nós</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-kair-purple">Termos de uso</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-kair-purple">Política de privacidade</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-6">
          <div className="flex flex-col md:flex-row justify-between text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Kair. Todos os direitos reservados.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link to="#" className="hover:text-kair-purple">Instagram</Link>
              <Link to="#" className="hover:text-kair-purple">Facebook</Link>
              <Link to="#" className="hover:text-kair-purple">Pinterest</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
