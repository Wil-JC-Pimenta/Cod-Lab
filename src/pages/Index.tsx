
import React from 'react';
import Header from '../components/Header';
import ChallengeList from '../components/ChallengeList';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <ChallengeList />
    </div>
  );
};

export default Index;
