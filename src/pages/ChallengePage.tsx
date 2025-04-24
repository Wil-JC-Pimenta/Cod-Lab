import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import CodeEditor from '../components/CodeEditor';
import TestResults from '../components/TestResults';
import { useChallenges } from '../contexts/ChallengeContext';
import { executeCode } from '../utils/codeExecution';
import { toast } from '../hooks/use-toast';
import SolutionDialog from '../components/SolutionDialog';

const ChallengePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { challenges, setCurrentChallenge, userSolutions, updateUserSolution } = useChallenges();
  
  const challenge = challenges.find((c) => c.id === id);
  const [code, setCode] = useState('');
  const [testResults, setTestResults] = useState<any>(null);
  const [isExecuting, setIsExecuting] = useState(false);

  useEffect(() => {
    if (!challenge) {
      navigate('/');
      toast({
        title: 'Desafio não encontrado',
        description: 'O desafio que você está procurando não existe.',
        variant: 'destructive',
      });
      return;
    }

    setCurrentChallenge(challenge);
    setCode(userSolutions[challenge.id] || challenge.boilerplate);

    return () => setCurrentChallenge(null);
  }, [challenge, id]);

  const handleCodeChange = (value: string | undefined) => {
    if (!challenge || !value) return;
    updateUserSolution(challenge.id, value);
    setCode(value);
  };

  const handleRunCode = () => {
    if (!challenge) return;
    
    setIsExecuting(true);
    setTestResults(null);
    
    try {
      const result = executeCode(code, challenge);
      setTestResults(result);
      
      if (result.success) {
        toast({
          title: 'Sucesso!',
          description: 'Todos os testes passaram!',
        });
      } else if (result.error) {
        toast({
          title: 'Erro na execução',
          description: result.error,
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Quase lá!',
          description: 'Alguns testes falharam.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Erro na execução',
        description: error instanceof Error ? error.message : 'Um erro ocorreu ao executar o código',
        variant: 'destructive',
      });
    } finally {
      setIsExecuting(false);
    }
  };

  if (!challenge) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft size={16} className="mr-1" />
            <span>Voltar para desafios</span>
          </button>
          
          <div className="flex flex-wrap justify-between items-start gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{challenge.name}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`badge-${challenge.difficulty} text-xs px-2 py-1 rounded-full`}>
                  {challenge.difficulty === 'easy' && 'Fácil'}
                  {challenge.difficulty === 'medium' && 'Médio'}
                  {challenge.difficulty === 'hard' && 'Difícil'}
                </span>
                {challenge.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-2">
              <SolutionDialog 
                solution={challenge.solution}
                explanation={challenge.explanation}
                conceptsUsed={challenge.conceptsUsed}
              />
              <button
                onClick={handleRunCode}
                disabled={isExecuting}
                className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isExecuting ? 'Executando...' : 'Executar Testes'}
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="text-xl font-semibold mb-4">Descrição</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground">{challenge.description}</p>
              </div>
            </div>
            
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="text-xl font-semibold mb-4">Exemplos</h2>
              {challenge.examples.map((example, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <div className="mb-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Entrada:</h3>
                    <code className="block bg-accent p-2 rounded">{example.input}</code>
                  </div>
                  <div className="mb-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Saída:</h3>
                    <code className="block bg-accent p-2 rounded">{example.output}</code>
                  </div>
                  {example.explanation && (
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Explicação:</h3>
                      <p className="text-sm text-muted-foreground">{example.explanation}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="text-xl font-semibold mb-4">Sua Solução</h2>
              <CodeEditor challenge={challenge} onChange={handleCodeChange} code={code} />
            </div>
            
            {testResults && (
              <TestResults
                results={testResults.testResults}
                success={testResults.success}
                error={testResults.error}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengePage;
