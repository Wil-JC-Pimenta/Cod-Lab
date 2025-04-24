import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Challenge } from '../types/challenge';
import { challenges } from '../data/challenges';

interface ChallengeContextType {
  challenges: Challenge[];
  filteredChallenges: Challenge[];
  currentChallenge: Challenge | null;
  userSolutions: Record<string, string>;
  filterOptions: {
    difficulty: string | null;
    tag: string | null;
    searchQuery: string;
  };
  setCurrentChallenge: (challenge: Challenge | null) => void;
  updateUserSolution: (challengeId: string, code: string) => void;
  filterChallenges: (difficulty: string | null, tag: string | null, searchQuery: string) => void;
  getAllTags: () => string[];
}

const ChallengeContext = createContext<ChallengeContextType | undefined>(undefined);

export const ChallengeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentChallenge, setCurrentChallenge] = useState<Challenge | null>(null);
  const [userSolutions, setUserSolutions] = useState<Record<string, string>>({});
  const [filterOptions, setFilterOptions] = useState({
    difficulty: null as string | null,
    tag: null as string | null,
    searchQuery: '',
  });
  const [filteredChallenges, setFilteredChallenges] = useState<Challenge[]>(challenges);

  const updateUserSolution = (challengeId: string, code: string) => {
    setUserSolutions((prev) => ({
      ...prev,
      [challengeId]: code,
    }));
  };

  const filterChallenges = (
    difficulty: string | null,
    tag: string | null,
    searchQuery: string
  ) => {
    setFilterOptions({ difficulty, tag, searchQuery });

    let filtered = [...challenges];

    if (difficulty) {
      filtered = filtered.filter((challenge) => challenge.difficulty === difficulty);
    }

    if (tag) {
      filtered = filtered.filter((challenge) => challenge.tags.includes(tag));
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (challenge) =>
          challenge.name.toLowerCase().includes(query) ||
          challenge.description.toLowerCase().includes(query)
      );
    }

    setFilteredChallenges(filtered);
  };

  const getAllTags = () => {
    const tagsSet = new Set<string>();
    challenges.forEach((challenge) => {
      challenge.tags.forEach((tag) => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort();
  };

  return (
    <ChallengeContext.Provider
      value={{
        challenges,
        filteredChallenges,
        currentChallenge,
        userSolutions,
        filterOptions,
        setCurrentChallenge,
        updateUserSolution,
        filterChallenges,
        getAllTags,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};

export const useChallenges = () => {
  const context = useContext(ChallengeContext);
  if (context === undefined) {
    throw new Error('useChallenges must be used within a ChallengeProvider');
  }
  return context;
};
