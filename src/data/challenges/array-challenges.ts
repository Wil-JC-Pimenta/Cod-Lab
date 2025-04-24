import { Challenge } from "../../types/challenge";

export const arrayChallenges: Challenge[] = [
  {
    id: "sum-array",
    name: "Soma de Array",
    description:
      "Crie uma função que calcula a soma de todos os números em um array.",
    difficulty: "easy",
    tags: ["array", "matemática", "redução"],
    examples: [
      {
        input: "[1, 2, 3, 4, 5]",
        output: "15",
        explanation: "1 + 2 + 3 + 4 + 5 = 15"
      }
    ],
    boilerplate: `function sumArray(numbers: number[]): number {
  // Seu código aqui
  
}`,
    solution: `function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Exemplo de uso
const numeros = [1, 2, 3, 4, 5];
const soma = sumArray(numeros);
console.log(soma); // Saída: 15
}`,
    explanation:
      "Esta solução usa o método reduce para somar todos os elementos do array de forma concisa e eficiente.",
    testCases: [
      { input: [[1, 2, 3, 4, 5]], output: 15 },
      { input: [[-1, -2, -3, -4, -5]], output: -15 },
      { input: [[]], output: 0 }
    ]
  },
  {
    id: "find-max",
    name: "Encontrar Máximo",
    description: "Crie uma função que encontra o maior número em um array.",
    difficulty: "easy",
    tags: ["array", "matemática"],
    examples: [
      {
        input: "[1, 3, 2, 5, 4]",
        output: "5",
        explanation: "5 é o maior número no array."
      }
    ],
    boilerplate: `function findMax(numbers: number[]): number {
  // Seu código aqui
  
}`,
    solution: `function findMax(numbers: number[]): number {
  return Math.max(...numbers);
}

// Exemplo de uso
const numeros = [1, 3, 2, 5, 4];
const maximo = findMax(numeros);
console.log(maximo); // Saída: 5
}`,
    explanation:
      "Esta solução usa o operador spread (...) com Math.max para encontrar o maior número do array de forma simples e eficiente.",
    testCases: [
      { input: [[1, 3, 2, 5, 4]], output: 5 },
      { input: [[-1, -3, -2, -5, -4]], output: -1 },
      { input: [[42]], output: 42 }
    ]
  },
  {
    id: "remove-duplicates",
    name: "Remover Duplicados",
    description:
      "Crie uma função que remove todos os elementos duplicados de um array e retorna um novo array com elementos únicos, mantendo a ordem original.",
    difficulty: "easy",
    tags: ["array", "conjunto", "manipulação de dados"],
    examples: [
      {
        input: "[1, 2, 2, 3, 4, 4, 5]",
        output: "[1, 2, 3, 4, 5]",
        explanation: "Os elementos duplicados (2 e 4) são removidos."
      }
    ],
    boilerplate: `function removeDuplicates<T>(arr: T[]): T[] {
  // Seu código aqui
  
}`,
    solution: `function removeDuplicates<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

// Exemplo de uso
const numeros = [1, 2, 2, 3, 4, 4, 5];
const unicos = removeDuplicates(numeros);
console.log(unicos); // Saída: [1, 2, 3, 4, 5]
}`,
    explanation:
      "Esta solução usa o objeto Set para remover duplicatas de forma eficiente, mantendo a ordem original dos elementos.",
    testCases: [
      { input: [[1, 2, 2, 3, 4, 4, 5]], output: [1, 2, 3, 4, 5] },
      { input: [["a", "b", "a", "c", "b"]], output: ["a", "b", "c"] },
      { input: [[true, false, true]], output: [true, false] }
    ]
  }
];
