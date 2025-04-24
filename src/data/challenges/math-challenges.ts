import { Challenge } from "../../types/challenge";

export const mathChallenges: Challenge[] = [
  {
    id: "fizzbuzz",
    name: "FizzBuzz",
    description:
      "Crie uma função que recebe um número n como parâmetro e retorna um array com os números de 1 a n. Para múltiplos de 3, adicione 'Fizz' ao invés do número. Para múltiplos de 5, adicione 'Buzz' ao invés do número. Para múltiplos de ambos, adicione 'FizzBuzz'.",
    difficulty: "easy",
    tags: ["array", "lógica", "matemática"],
    examples: [
      {
        input: "5",
        output: "[1, 2, 'Fizz', 4, 'Buzz']",
        explanation:
          "3 é múltiplo de 3, então retornamos 'Fizz'. 5 é múltiplo de 5, então retornamos 'Buzz'."
      }
    ],
    boilerplate: `function fizzBuzz(n: number): (string | number)[] {
  // Seu código aqui
  
}`,
    solution: `function fizzBuzz(n: number): (string | number)[] {
  const result = [];
  
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i);
    }
  }
  
  return result;
}

// Exemplo de uso
const n = 5;
const resultado = fizzBuzz(n);
console.log(resultado); // Saída: [1, 2, "Fizz", 4, "Buzz"]
}`,
    explanation:
      "Esta solução usa um loop simples e condições para verificar os múltiplos de 3 e 5, substituindo os números apropriadamente.",
    testCases: [
      { input: [5], output: [1, 2, "Fizz", 4, "Buzz"] },
      {
        input: [15],
        output: [
          1,
          2,
          "Fizz",
          4,
          "Buzz",
          "Fizz",
          7,
          8,
          "Fizz",
          "Buzz",
          11,
          "Fizz",
          13,
          14,
          "FizzBuzz"
        ]
      }
    ]
  },
  {
    id: "is-prime",
    name: "Verificador de Número Primo",
    description:
      "Crie uma função que verifica se um número é primo. Um número primo é maior que 1 e possui apenas dois divisores: 1 e ele mesmo.",
    difficulty: "medium",
    tags: ["matemática", "lógica"],
    examples: [
      {
        input: "11",
        output: "true",
        explanation:
          "11 é divisível apenas por 1 e por ele mesmo, então é primo."
      },
      {
        input: "4",
        output: "false",
        explanation: "4 é divisível por 1, 2 e 4, então não é primo."
      }
    ],
    boilerplate: `function isPrime(n: number): boolean {
  // Seu código aqui
  
}`,
    solution: `function isPrime(n: number): boolean {
  if (n <= 1) return false;
  if (n <= 3) return true;
  
  if (n % 2 === 0 || n % 3 === 0) return false;
  
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  
  return true;
}

// Exemplo de uso
const numero = 11;
const ehPrimo = isPrime(numero);
console.log(ehPrimo); // Saída: true
}`,
    explanation:
      "Esta solução implementa um algoritmo eficiente para verificar números primos, testando divisibilidade apenas até a raiz quadrada do número.",
    testCases: [
      { input: [11], output: true },
      { input: [4], output: false },
      { input: [2], output: true },
      { input: [1], output: false },
      { input: [17], output: true }
    ]
  },
  {
    id: "factorial",
    name: "Fatorial",
    description:
      "Crie uma função que calcula o fatorial de um número. O fatorial de um número n é o produto de todos os inteiros positivos menores ou iguais a n.",
    difficulty: "easy",
    tags: ["matemática", "recursão"],
    examples: [
      {
        input: "5",
        output: "120",
        explanation: "5! = 5 * 4 * 3 * 2 * 1 = 120"
      }
    ],
    boilerplate: `function factorial(n: number): number {
  // Seu código aqui
  
}`,
    solution: `function factorial(n: number): number {
  if (n === 0 || n === 1) return 1;
  
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  
  return resultado;
}

// Exemplo de uso
const numero = 5;
const fatorial = factorial(numero);
console.log(fatorial); // Saída: 120
}`,
    explanation:
      "Esta solução calcula o fatorial usando um loop iterativo, que é mais eficiente que uma solução recursiva para números grandes.",
    testCases: [
      { input: [5], output: 120 },
      { input: [0], output: 1 },
      { input: [1], output: 1 },
      { input: [10], output: 3628800 }
    ]
  }
];
