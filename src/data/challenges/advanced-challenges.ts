import { Challenge } from "../../types/challenge";

export const advancedChallenges: Challenge[] = [
  {
    id: "valid-parentheses",
    name: "Parênteses Válidos",
    description:
      "Crie uma função que verifica se uma string com parênteses, colchetes e chaves tem todos os pares correspondentes e na ordem correta. Por exemplo, '({[]})' é válida, mas '({[}])' não é.",
    difficulty: "medium",
    tags: ["string", "pilha", "algoritmo"],
    examples: [
      {
        input: "'({[]})'",
        output: "true",
        explanation:
          "Todos os parênteses, colchetes e chaves têm seus pares correspondentes e estão na ordem correta."
      },
      {
        input: "'({[}])'",
        output: "false",
        explanation:
          "O colchete de fechamento ']' não corresponde à chave de abertura '{'."
      }
    ],
    boilerplate: `function validParentheses(str: string): boolean {
  // Seu código aqui
  
}`,
    solution: `function validParentheses(str: string): boolean {
  const stack = [];
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  
  for (const char of str) {
    if (pairs[char]) {
      stack.push(char);
    } else if (Object.values(pairs).includes(char)) {
      if (stack.length === 0 || pairs[stack.pop()] !== char) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}

// Exemplo de uso
const entrada = '({[]})';
const valido = validParentheses(entrada);
console.log(valido); // Saída: true
}`,
    explanation:
      "Esta solução usa uma pilha para rastrear os parênteses de abertura e verifica se cada parêntese de fechamento corresponde ao último parêntese de abertura.",
    testCases: [
      { input: ["({[]})"], output: true },
      { input: ["({[}])"], output: false },
      { input: ["(){}[]"], output: true },
      { input: ["([)]"], output: false },
      { input: [""], output: true }
    ]
  },
  {
    id: "deep-clone",
    name: "Clone Profundo",
    description:
      "Implemente uma função que realiza um clone profundo de um objeto, incluindo todos os objetos aninhados e arrays. Não use JSON.stringify/JSON.parse.",
    difficulty: "hard",
    tags: ["objeto", "recursão", "manipulação de dados"],
    examples: [
      {
        input: "{ a: 1, b: { c: 2 } }",
        output: "{ a: 1, b: { c: 2 } }",
        explanation:
          "Um novo objeto é criado com a mesma estrutura e valores, mas sem referência ao original."
      }
    ],
    boilerplate: `function deepClone<T>(obj: T): T {
  // Seu código aqui
  
}`,
    solution: `function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item)) as T;
  }
  
  const clone = {} as T;
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  
  return clone;
}

// Exemplo de uso
const original = { a: 1, b: { c: 2 } };
const clone = deepClone(original);
console.log(clone); // Saída: { a: 1, b: { c: 2 } }
}`,
    explanation:
      "Esta solução implementa um clone profundo usando recursão para lidar com objetos aninhados e arrays.",
    testCases: [
      {
        input: [{ a: 1, b: { c: 2 } }],
        output: { a: 1, b: { c: 2 } }
      },
      {
        input: [[1, [2, 3]]],
        output: [1, [2, 3]]
      }
    ]
  }
];
