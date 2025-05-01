
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-kair-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-kair-pink opacity-20 animate-floating" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-kair-yellow opacity-20 animate-floating" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/3 right-10 w-40 h-40 rounded-full bg-kair-blue opacity-20 animate-floating" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 right-1/4 w-28 h-28 rounded-full bg-kair-green opacity-20 animate-floating" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-36 h-36 rounded-full bg-kair-purple opacity-20 animate-floating" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Hero content */}
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-kair-purple/30 text-sm font-medium text-kair-purple animate-pulse">
              <Sparkles className="h-4 w-4 mr-1" />
              Descubra o artesanato brasileiro
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold mb-6 leading-tight animate-slideUp">
            Descubra arte feita com amor por artesãos brasileiros
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto animate-slideUp" style={{ animationDelay: '0.2s' }}>
            Conectamos você a produtos únicos e feitos à mão, criados por artistas e artesãos independentes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" className="bg-kair-purple hover:bg-kair-purple-dark hover-scale">
              <Link to="/products">
                Explorar Produtos
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group border-kair-pink text-kair-pink hover:text-kair-pink-dark hover:border-kair-pink-dark hover-scale">
              <Link to="/register/seller">
                Vender Artesanato
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-8 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <p className="text-2xl font-bold text-kair-purple">500+</p>
              <p className="text-sm text-muted-foreground">Artesãos</p>
            </div>
            <div className="h-8 border-r border-border"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-kair-pink">5.000+</p>
              <p className="text-sm text-muted-foreground">Produtos</p>
            </div>
            <div className="h-8 border-r border-border"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-kair-blue">12.000+</p>
              <p className="text-sm text-muted-foreground">Clientes felizes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
