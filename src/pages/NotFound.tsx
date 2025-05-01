
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { useEffect } from "react";

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Página não encontrada | ArteViva</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      
      <Layout>
        <div className="container px-4 mx-auto">
          <div className="min-h-[60vh] flex flex-col items-center justify-center py-16 text-center">
            <h1 className="text-6xl md:text-8xl font-display font-semibold mb-4 text-arteviva-purple">
              404
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-md">
              Oops! A página que você está procurando não existe.
            </p>
            <Button asChild size="lg" className="bg-arteviva-purple hover:bg-arteviva-purple-dark">
              <Link to="/">
                Voltar à página inicial
              </Link>
            </Button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NotFound;
