
import React from 'react';
import ChallengeCard from './ChallengeCard';
import { useChallenges } from '../contexts/ChallengeContext';
import ChallengeFilters from './ChallengeFilters';

const ChallengeList: React.FC = () => {
  const { filteredChallenges } = useChallenges();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-foreground">Desafios de Código</h2>
        <p className="text-muted-foreground">
          Escolha um desafio para resolver e aprimorar suas habilidades de programação.
        </p>
      </div>

      <ChallengeFilters />

      {filteredChallenges.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Nenhum desafio encontrado com os filtros aplicados.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredChallenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ChallengeList;
