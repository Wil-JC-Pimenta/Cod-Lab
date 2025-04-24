
import React from 'react';
import Header from '../components/Header';
import { Book, Code, FileText, Search } from 'lucide-react';

interface Resource {
  title: string;
  url: string;
  description: string;
  icon: React.ReactNode;
}

const resources: Resource[] = [
  {
    title: "MDN JavaScript",
    url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    description: "Documentação completa do JavaScript com exemplos e guias detalhados.",
    icon: <FileText size={24} />,
  },
  {
    title: "TypeScript Lang",
    url: "https://www.typescriptlang.org/docs/",
    description: "Documentação oficial do TypeScript com tutoriais e referências de tipos.",
    icon: <Code size={24} />,
  },
  {
    title: "React Docs",
    url: "https://react.dev/",
    description: "Documentação oficial do React com guias, referências de API e exemplos práticos.",
    icon: <FileText size={24} />,
  },
  {
    title: "Vite",
    url: "https://vitejs.dev/guide/",
    description: "Guia oficial do Vite, uma ferramenta de build moderna para JavaScript.",
    icon: <Code size={24} />,
  },
  {
    title: "TailwindCSS",
    url: "https://tailwindcss.com/docs",
    description: "Documentação do Tailwind CSS com referência completa de classes e exemplos.",
    icon: <FileText size={24} />,
  },
  {
    title: "Axios",
    url: "https://axios-http.com/docs/intro",
    description: "Documentação do Axios, um cliente HTTP baseado em promessas para navegador e Node.js.",
    icon: <Code size={24} />,
  },
  {
    title: "Node.js",
    url: "https://nodejs.org/docs/latest/api/",
    description: "Documentação oficial do Node.js com referência completa de API e tutoriais.",
    icon: <Code size={24} />,
  },
  {
    title: "Regex101",
    url: "https://regex101.com/",
    description: "Ferramenta online para testar e depurar expressões regulares com explicações detalhadas.",
    icon: <Search size={24} />,
  },
  {
    title: "DevDocs",
    url: "https://devdocs.io/",
    description: "Documentação de API para várias linguagens e bibliotecas em um só lugar.",
    icon: <Book size={24} />,
  },
  {
    title: "GitHub Copilot",
    url: "https://github.com/features/copilot",
    description: "Assistente de IA para programadores que ajuda a escrever código mais rapidamente.",
    icon: <Code size={24} />,
  },
];

const ResourcesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Recursos Úteis</h1>
          <p className="text-muted-foreground">
            Links para documentações e ferramentas essenciais para desenvolvedores.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent rounded-lg text-primary">
                  {resource.icon}
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">{resource.title}</h2>
                  <p className="text-muted-foreground text-sm">{resource.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
