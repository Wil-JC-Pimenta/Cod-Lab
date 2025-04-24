
import React from 'react';
import { Check, X } from 'lucide-react';

interface TestResult {
  passed: boolean;
  input: any[];
  expectedOutput: any;
  actualOutput: any;
  error?: string;
}

interface TestResultsProps {
  results: TestResult[] | undefined;
  success: boolean;
  error?: string;
}

const TestResults: React.FC<TestResultsProps> = ({ results, success, error }) => {
  if (error) {
    return (
      <div className="bg-destructive/20 border border-destructive text-destructive-foreground p-4 rounded-md my-4">
        <h3 className="font-bold text-lg mb-2">Erro de execução</h3>
        <pre className="whitespace-pre-wrap overflow-auto bg-card p-3 rounded-md">{error}</pre>
      </div>
    );
  }

  if (!results || results.length === 0) {
    return null;
  }

  const passedCount = results.filter((result) => result.passed).length;

  return (
    <div className={`border ${success ? 'border-green-600 bg-green-600/10' : 'border-destructive bg-destructive/10'} rounded-lg p-6 my-6`}>
      <div className="flex items-center mb-4">
        {success ? (
          <Check className="text-green-600 mr-2" size={24} />
        ) : (
          <X className="text-destructive mr-2" size={24} />
        )}
        <h3 className="text-lg font-bold">
          {success
            ? 'Todos os testes passaram!'
            : `${passedCount} de ${results.length} testes passaram`}
        </h3>
      </div>

      <div className="space-y-4">
        {results.map((result, index) => (
          <div
            key={index}
            className={`border ${
              result.passed ? 'border-green-600/30 bg-green-600/5' : 'border-red-500/30 bg-red-500/5'
            } rounded-md p-4`}
          >
            <div className="flex items-center mb-2">
              {result.passed ? (
                <Check className="text-green-600 mr-2" size={16} />
              ) : (
                <X className="text-red-500 mr-2" size={16} />
              )}
              <h4 className="font-semibold">Teste {index + 1}</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Entrada:</p>
                <pre className="bg-card p-2 rounded text-sm overflow-x-auto">
                  {JSON.stringify(result.input, null, 2)}
                </pre>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-1">Saída esperada:</p>
                <pre className="bg-card p-2 rounded text-sm overflow-x-auto">
                  {typeof result.expectedOutput === 'object'
                    ? JSON.stringify(result.expectedOutput, null, 2)
                    : result.expectedOutput}
                </pre>
              </div>
            </div>

            {!result.passed && (
              <div className="mt-2">
                <p className="text-sm text-muted-foreground mb-1">Sua saída:</p>
                <pre className="bg-card p-2 rounded text-sm overflow-x-auto">
                  {result.error
                    ? <span className="text-red-400">{result.error}</span>
                    : typeof result.actualOutput === 'object'
                    ? JSON.stringify(result.actualOutput, null, 2)
                    : result.actualOutput}
                </pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestResults;
