
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="hero-pattern py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold mb-6 leading-tight">
            Descubra arte feita com amor por artesãos brasileiros
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Conectamos você a produtos únicos e feitos à mão, criados por artistas e artesãos independentes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-arteviva-purple hover:bg-arteviva-purple-dark">
              <Link to="/products">
                Explorar Produtos
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group">
              <Link to="/register/seller">
                Vender Artesanato
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
