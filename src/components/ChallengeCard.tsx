
import React from 'react';
import { Link } from 'react-router-dom';
import { Challenge } from '../types/challenge';

interface ChallengeCardProps {
  challenge: Challenge;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge }) => {
  return (
    <Link to={`/challenge/${challenge.id}`}>
      <div className="bg-card p-6 rounded-lg shadow-md challenge-card border border-border">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-foreground">{challenge.name}</h3>
          <span className={`badge-${challenge.difficulty} text-xs px-2 py-1 rounded-full`}>
            {challenge.difficulty === 'easy' && 'Fácil'}
            {challenge.difficulty === 'medium' && 'Médio'}
            {challenge.difficulty === 'hard' && 'Difícil'}
          </span>
        </div>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {challenge.description}
        </p>
        <div className="flex flex-wrap mt-2">
          {challenge.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ChallengeCard;
