
import React, { useEffect, useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { useChallenges } from '../contexts/ChallengeContext';

const ChallengeFilters: React.FC = () => {
  const { filterOptions, filterChallenges, getAllTags } = useChallenges();
  const [searchInput, setSearchInput] = useState(filterOptions.searchQuery);
  const [difficulty, setDifficulty] = useState<string | null>(filterOptions.difficulty);
  const [tag, setTag] = useState<string | null>(filterOptions.tag);
  const tags = getAllTags();

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      filterChallenges(difficulty, tag, searchInput);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchInput, difficulty, tag]);

  return (
    <div className="bg-accent rounded-lg p-6 shadow-md border border-border">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="text-muted-foreground" size={18} />
        <h3 className="text-lg font-semibold">Filtros</h3>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <input
            type="text"
            placeholder="Buscar desafios..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="pl-10 pr-4 py-2 w-full bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        
        <div>
          <select
            value={difficulty || ''}
            onChange={(e) => setDifficulty(e.target.value || null)}
            className="w-full bg-background border border-border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <option value="">Todos os Níveis</option>
            <option value="easy">Fácil</option>
            <option value="medium">Médio</option>
            <option value="hard">Difícil</option>
          </select>
        </div>
        
        <div>
          <select
            value={tag || ''}
            onChange={(e) => setTag(e.target.value || null)}
            className="w-full bg-background border border-border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <option value="">Todas as Tags</option>
            {tags.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ChallengeFilters;
