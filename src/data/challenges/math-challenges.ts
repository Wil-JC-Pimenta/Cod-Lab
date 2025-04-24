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
      "Crie uma função que verifica se um número é primo. Um número primo é aquele que só é divisível por 1 e por ele mesmo.",
    difficulty: "medium",
    tags: ["matemática", "números primos", "otimização"],
    examples: [
      {
        input: "11",
        output: "true",
        explanation: "11 é primo pois só é divisível por 1 e por 11."
      }
    ],
    boilerplate: `function isPrime(n: number): boolean {
  // Seu código aqui
  
}`,
    solution: `function verificarPrimo(numero) {
  console.log("Entrada:", numero);
  
  if (numero <= 1) {
    console.log("Saída: false (números menores ou iguais a 1 não são primos)");
    return false;
  }
  
  if (numero <= 3) {
    console.log("Saída: true (2 e 3 são primos)");
    return true;
  }
  
  if (numero % 2 === 0 || numero % 3 === 0) {
    console.log("Saída: false (divisível por 2 ou 3)");
    return false;
  }
  
  for (let i = 5; i * i <= numero; i += 6) {
    if (numero % i === 0 || numero % (i + 2) === 0) {
      console.log("Saída: false (divisível por", i, "ou", i + 2, ")");
      return false;
    }
  }
  
  console.log("Saída: true (é primo)");
  return true;
}

verificarPrimo(11);`,
    explanation:
      "Esta solução implementa um algoritmo otimizado para verificar números primos. Em vez de testar todos os números, ela usa várias otimizações: verifica casos especiais (números ≤ 3), elimina múltiplos de 2 e 3, e depois testa apenas números da forma 6k ± 1 até a raiz quadrada do número.",
    conceptsUsed: [
      {
        title: "Otimização Matemática",
        description:
          "Usa propriedades dos números primos para reduzir a quantidade de verificações necessárias"
      },
      {
        title: "Casos Base",
        description:
          "Trata casos especiais (números ≤ 3) separadamente para otimizar o algoritmo"
      },
      {
        title: "Loop Otimizado",
        description:
          "Verifica apenas números da forma 6k ± 1, pois todos os outros já foram eliminados"
      }
    ],
    testCases: [
      { input: [11], output: true },
      { input: [4], output: false },
      { input: [2], output: true },
      { input: [1], output: false }
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
    solution: `function calcularFatorial(numero) {
  console.log("Entrada:", numero);
  
  if (numero === 0 || numero === 1) {
    console.log("Saída:", 1);
    return 1;
  }
  
  let resultado = 1;
  for (let i = 2; i <= numero; i++) {
    resultado *= i;
  }
  
  console.log("Saída:", resultado);
  return resultado;
}

calcularFatorial(5);`,
    explanation:
      "Esta solução calcula o fatorial usando um loop iterativo, que é mais eficiente que uma solução recursiva para números grandes. O algoritmo multiplica todos os números de 2 até n, considerando que o fatorial de 0 e 1 é 1.",
    conceptsUsed: [
      {
        title: "Casos Base",
        description: "Trata os casos especiais de 0! e 1! que são iguais a 1"
      },
      {
        title: "Loop Iterativo",
        description:
          "Usa um loop para multiplicar sequencialmente os números de 2 até n"
      },
      {
        title: "Acumulador",
        description: "Usa uma variável para acumular o produto dos números"
      }
    ],
    testCases: [
      { input: [5], output: 120 },
      { input: [0], output: 1 },
      { input: [1], output: 1 },
      { input: [10], output: 3628800 }
    ]
  }
];
