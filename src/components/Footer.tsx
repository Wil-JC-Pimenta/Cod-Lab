import React from "react";
import { Github } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-card py-4 shadow-lg z-50">
      <div className="container mx-auto px-4 flex items-center justify-center gap-2">
        <span className="text-text-secondary">
          Desenvolvido por Wilker J C Pimenta
        </span>
        <a
          href="https://github.com/Wil-JC-Pimenta/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-secondary hover:text-primary transition-colors"
        >
          <Github size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
