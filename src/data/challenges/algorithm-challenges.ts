import { Challenge } from "../../types/challenge";

export const algorithmChallenges: Challenge[] = [
  {
    id: "fibonacci",
    name: "Sequência de Fibonacci",
    description:
      "Crie uma função que gera os n primeiros números da sequência de Fibonacci. Nesta sequência, cada número é a soma dos dois anteriores, começando com 0 e 1.",
    difficulty: "medium",
    tags: ["matemática", "recursão", "dinâmica"],
    examples: [
      {
        input: "5",
        output: "[0, 1, 1, 2, 3]",
        explanation: "Os 5 primeiros números da sequência de Fibonacci."
      }
    ],
    boilerplate: `function fibonacci(n: number): number[] {
  // Seu código aqui
  
}`,
    solution: `function fibonacci(n: number): number[] {
  const sequence = [0, 1];
  
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i-1] + sequence[i-2]);
  }
  
  return sequence.slice(0, n);
}

// Exemplo de uso
const n = 5;
const resultado = fibonacci(n);
console.log(resultado); // Saída: [0, 1, 1, 2, 3]
`,
    explanation:
      "Esta solução usa um loop para gerar a sequência de Fibonacci iterativamente, o que é mais eficiente que uma solução recursiva.",
    testCases: [
      { input: [5], output: [0, 1, 1, 2, 3] },
      { input: [10], output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] },
      { input: [1], output: [0] }
    ]
  },
  {
    id: "binary-search",
    name: "Busca Binária",
    description:
      "Implemente o algoritmo de busca binária. A função deve receber um array ordenado e um valor alvo, e retornar o índice do valor no array ou -1 se o valor não existir no array.",
    difficulty: "medium",
    tags: ["array", "busca", "algoritmo", "divisão e conquista"],
    examples: [
      {
        input: "[1, 2, 3, 4, 5], 3",
        output: "2",
        explanation: "O valor 3 está no índice 2 do array."
      },
      {
        input: "[1, 2, 3, 4, 5], 6",
        output: "-1",
        explanation: "O valor 6 não existe no array, então retornamos -1."
      }
    ],
    boilerplate: `function binarySearch(arr: number[], target: number): number {
  // Seu código aqui
  
}`,
    solution: `function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}

// Exemplo de uso
const arr = [1, 2, 3, 4, 5];
const target = 3;
const indice = binarySearch(arr, target);
console.log(indice); // Saída: 2
`,
    explanation:
      "Esta solução implementa a busca binária usando um loop while, dividindo o array pela metade a cada iteração até encontrar o elemento ou determinar que ele não existe.",
    testCases: [
      { input: [[1, 2, 3, 4, 5], 3], output: 2 },
      { input: [[1, 2, 3, 4, 5], 6], output: -1 },
      { input: [[1, 3, 5, 7, 9], 5], output: 2 },
      { input: [[2, 4, 6, 8, 10], 1], output: -1 }
    ]
  },
  {
    id: "merge-sort",
    name: "Merge Sort",
    description:
      "Implemente o algoritmo de ordenação Merge Sort. Este é um algoritmo eficiente de divisão e conquista que divide o array em subarrays menores, os ordena e então os mescla.",
    difficulty: "hard",
    tags: ["array", "ordenação", "algoritmo", "divisão e conquista"],
    examples: [
      {
        input: "[5, 3, 8, 4, 2]",
        output: "[2, 3, 4, 5, 8]",
        explanation: "O array é ordenado em ordem crescente."
      }
    ],
    boilerplate: `function mergeSort(arr: number[]): number[] {
  // Seu código aqui
  
}`,
    solution: `function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  const result = [];
  let i = 0, j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Exemplo de uso
const arr = [5, 3, 8, 4, 2];
const ordenado = mergeSort(arr);
console.log(ordenado); // Saída: [2, 3, 4, 5, 8]
`,
    explanation:
      "Esta solução implementa o Merge Sort usando recursão e uma função auxiliar merge para combinar os subarrays ordenados.",
    testCases: [
      { input: [[5, 3, 8, 4, 2]], output: [2, 3, 4, 5, 8] },
      { input: [[1]], output: [1] },
      { input: [[-1, -5, 0, 3, 10]], output: [-5, -1, 0, 3, 10] }
    ]
  }
];
