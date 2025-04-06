
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[70vh] py-12 px-4">
        <h1 className="text-7xl font-bold text-codecima-blue mb-4">404</h1>
        <h2 className="text-3xl font-bold text-white mb-6">Página no encontrada</h2>
        <p className="text-gray-300 text-lg max-w-lg text-center mb-8">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Button asChild className="bg-codecima-blue hover:bg-codecima-blue/80">
          <Link to="/" className="flex items-center">
            <Home className="mr-2" size={18} />
            Volver al inicio
          </Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
