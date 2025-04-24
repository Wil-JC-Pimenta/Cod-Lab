
export interface Challenge {
  id: string;
  name: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
  examples: {
    input: string;
    output: string;
    explanation?: string;
  }[];
  boilerplate: string;
  solution?: string;
  explanation?: string;
  conceptsUsed?: {
    title: string;
    description: string;
  }[];
  testCases: {
    input: any[];
    output: any;
    customCheck?: (input: any[], output: any) => boolean;
  }[];
}
