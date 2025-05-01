
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShoppingCart, User, Search, Menu, X, Package } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/7c2fd0b1-d1bf-42d2-a747-11fa6c11cc61.png" 
            alt="Kair Logo" 
            className="h-10"
          />
        </Link>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar produtos, categorias ou artesãos..."
              className="pl-9 w-full bg-secondary"
            />
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/categories" className="text-sm font-medium hover:text-kair-purple transition-colors">
            Categorias
          </Link>
          <Link to="/sellers" className="text-sm font-medium hover:text-kair-purple transition-colors">
            Artesãos
          </Link>
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-5 w-5 text-muted-foreground hover:text-kair-purple transition-colors" />
            <span className="absolute -top-1 -right-1 bg-kair-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </Link>
          <Link to="/login">
            <Button variant="outline" size="sm" className="gap-1">
              <User className="h-4 w-4" />
              <span>Entrar</span>
            </Button>
          </Link>
          <Link to="/register/seller">
            <Button size="sm" className="bg-kair-purple hover:bg-kair-purple-dark">
              Vender
            </Button>
          </Link>
          <Link to="/seller/products/new">
            <Button variant="outline" size="sm" className="gap-1">
              <Package className="h-4 w-4" />
              <span>Cadastrar Produto</span>
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden gap-4 items-center">
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-kair-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </Link>
          <button onClick={toggleMenu} className="p-1">
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Search - always visible */}
      <div className="md:hidden px-4 pb-4">
        <div className="relative w-full">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar produtos..."
            className="pl-9 w-full bg-secondary"
          />
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 border-t border-border pt-2">
          <Link 
            to="/categories" 
            className="block py-2 text-sm font-medium hover:text-kair-purple transition-colors"
          >
            Categorias
          </Link>
          <Link 
            to="/sellers" 
            className="block py-2 text-sm font-medium hover:text-kair-purple transition-colors"
          >
            Artesãos
          </Link>
          <Link 
            to="/seller/products/new" 
            className="block py-2 text-sm font-medium hover:text-kair-purple transition-colors"
          >
            Cadastrar Produto
          </Link>
          <div className="flex flex-col space-y-2 pt-2">
            <Link to="/login">
              <Button variant="outline" className="w-full gap-1">
                <User className="h-4 w-4" />
                <span>Entrar</span>
              </Button>
            </Link>
            <Link to="/register/seller">
              <Button className="w-full bg-kair-purple hover:bg-kair-purple-dark">
                Vender
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
