
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, BookOpen, Search } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-accent border-b border-border py-4">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary mb-4 sm:mb-0">
          <Code size={28} />
          <span>CodeLab Challenges</span>
        </Link>
        
        <nav className="flex space-x-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors flex items-center gap-1">
            <Search size={18} />
            <span>Desafios</span>
          </Link>
          <Link to="/resources" className="text-foreground hover:text-primary transition-colors flex items-center gap-1">
            <BookOpen size={18} />
            <span>Recursos</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
