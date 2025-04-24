
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <h1 className="text-6xl font-bold text-primary mb-6">404</h1>
          <p className="text-xl text-foreground mb-8">Oops! Página não encontrada</p>
          <p className="text-muted-foreground mb-8">
            A página que você está procurando não existe ou foi movida.
          </p>
          <Link
            to="/"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Voltar para a Página Inicial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
