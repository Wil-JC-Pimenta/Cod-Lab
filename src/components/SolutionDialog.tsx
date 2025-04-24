
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileCode2 } from 'lucide-react';
import Editor from '@monaco-editor/react';

interface SolutionDialogProps {
  solution?: string;
  explanation?: string;
  conceptsUsed?: {
    title: string;
    description: string;
  }[];
}

const SolutionDialog: React.FC<SolutionDialogProps> = ({ solution, explanation, conceptsUsed }) => {
  if (!solution) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <FileCode2 className="size-4" />
          Solução Exemplo
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] w-full max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Solução com Explicações</DialogTitle>
        </DialogHeader>
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-hidden flex-1">
          <div className="h-full flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Código com Comentários</h3>
            <div className="flex-1 min-h-[400px] border rounded-lg overflow-hidden">
              <Editor
                height="100%"
                defaultLanguage="typescript"
                theme="vs-dark"
                value={solution}
                options={{
                  readOnly: true,
                  minimap: { enabled: false },
                  fontSize: 14,
                  padding: { top: 10 },
                  scrollBeyondLastLine: false,
                  wordWrap: 'on',
                  automaticLayout: true,
                }}
              />
            </div>
          </div>
          <div className="space-y-6 overflow-y-auto max-h-[600px] pr-2">
            {explanation && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Explicação</h3>
                <p className="text-muted-foreground">{explanation}</p>
              </div>
            )}
            {conceptsUsed && conceptsUsed.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Conceitos Utilizados</h3>
                <div className="space-y-4">
                  {conceptsUsed.map((concept, index) => (
                    <div key={index} className="border rounded-lg p-4 bg-card">
                      <h4 className="font-medium mb-2">{concept.title}</h4>
                      <p className="text-sm text-muted-foreground">{concept.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SolutionDialog;
