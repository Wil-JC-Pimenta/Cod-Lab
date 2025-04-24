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
    solution: `function somarArray(numeros) {
  console.log("Entrada:", numeros);
  const resultado = numeros.reduce((soma, numero) => soma + numero, 0);
  console.log("Saída:", resultado);
  return resultado;
}

somarArray([1, 2, 3, 4, 5]);`,
    explanation:
      "Esta solução utiliza o método reduce para somar todos os números do array de forma eficiente.",
    conceptsUsed: [
      {
        title: "Método reduce",
        description:
          "Utiliza o método reduce do array para acumular a soma de todos os elementos"
      }
    ],
    testCases: [
      { input: [[1, 2, 3, 4, 5]], output: 15 },
      { input: [[10, 20, 30]], output: 60 },
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
    solution: `function encontrarMaximo(numeros) {
  console.log("Entrada:", numeros);
  const resultado = Math.max(...numeros);
  console.log("Saída:", resultado);
  return resultado;
}

encontrarMaximo([1, 3, 2, 5, 4]);`,
    explanation:
      "Esta solução usa o operador spread (...) com Math.max para encontrar o maior número do array de forma simples e eficiente.",
    conceptsUsed: [
      {
        title: "Math.max",
        description:
          "Função que retorna o maior número entre os argumentos fornecidos"
      },
      {
        title: "Operador Spread",
        description:
          "Expande o array em elementos individuais para serem passados como argumentos para Math.max"
      }
    ],
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
    solution: `function removerDuplicados(array) {
  console.log("Entrada:", array);
  const resultado = [...new Set(array)];
  console.log("Saída:", resultado);
  return resultado;
}

removerDuplicados([1, 2, 2, 3, 4, 4, 5]);`,
    explanation:
      "Esta solução usa o objeto Set para remover duplicatas de forma eficiente, mantendo a ordem original dos elementos.",
    conceptsUsed: [
      {
        title: "Set",
        description:
          "Estrutura de dados que armazena valores únicos, eliminando automaticamente as duplicatas"
      },
      {
        title: "Operador Spread",
        description:
          "Converte o Set de volta para um array, mantendo a ordem dos elementos"
      }
    ],
    testCases: [
      { input: [[1, 2, 2, 3, 4, 4, 5]], output: [1, 2, 3, 4, 5] },
      { input: [["a", "b", "a", "c", "b"]], output: ["a", "b", "c"] },
      { input: [[true, false, true]], output: [true, false] }
    ]
  },
  {
    id: "fibonacci",
    name: "Sequência de Fibonacci",
    description:
      "Crie uma função que gera os n primeiros números da sequência de Fibonacci. Nesta sequência, cada número é a soma dos dois anteriores, começando com 0 e 1.",
    difficulty: "easy",
    tags: ["array", "matemática", "sequência"],
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
    solution: `function fibonacci(n) {
  console.log("Entrada:", n);
  const sequencia = [0, 1];
  
  for (let i = 2; i < n; i++) {
    sequencia.push(sequencia[i-1] + sequencia[i-2]);
  }
  
  const resultado = sequencia.slice(0, n);
  console.log("Saída:", resultado);
  return resultado;
}

fibonacci(5);`,
    explanation:
      "Esta solução gera a sequência de Fibonacci iterativamente, onde cada número é a soma dos dois anteriores.",
    conceptsUsed: [
      {
        title: "Array",
        description:
          "Armazena a sequência de números e usa push para adicionar novos elementos"
      },
      {
        title: "Loop for",
        description:
          "Itera para gerar os números da sequência baseado nos dois números anteriores"
      }
    ],
    testCases: [
      { input: [5], output: [0, 1, 1, 2, 3] },
      { input: [8], output: [0, 1, 1, 2, 3, 5, 8, 13] },
      { input: [2], output: [0, 1] }
    ]
  },
  {
    id: "binary-search",
    name: "Busca Binária",
    description:
      "Crie uma função que implementa o algoritmo de busca binária para encontrar a posição de um elemento em um array ordenado. Se o elemento não for encontrado, retorne -1.",
    difficulty: "medium",
    tags: ["array", "busca", "algoritmo"],
    examples: [
      {
        input: "Array: [1, 2, 3, 4, 5], Elemento: 3",
        output: "2",
        explanation:
          "O elemento 3 está na posição 2 do array (índice baseado em 0)."
      }
    ],
    boilerplate: `function binarySearch(arr: number[], target: number): number {
  // Seu código aqui
  
}`,
    solution: `function buscaBinaria(array, elemento) {
  console.log("Entrada - Array:", array);
  console.log("Entrada - Elemento procurado:", elemento);
  
  let inicio = 0;
  let fim = array.length - 1;
  
  while (inicio <= fim) {
    const meio = Math.floor((inicio + fim) / 2);
    console.log("Verificando posição", meio, "valor:", array[meio]);
    
    if (array[meio] === elemento) {
      console.log("Saída:", meio, "(elemento encontrado)");
      return meio;
    } else if (array[meio] < elemento) {
      inicio = meio + 1;
      console.log("Elemento é maior, procurando na metade direita");
    } else {
      fim = meio - 1;
      console.log("Elemento é menor, procurando na metade esquerda");
    }
  }
  
  console.log("Saída: -1 (elemento não encontrado)");
  return -1;
}

const array = [1, 2, 3, 4, 5];
const elemento = 3;
buscaBinaria(array, elemento);`,
    explanation:
      "Esta solução implementa o algoritmo de busca binária, que é muito eficiente para encontrar elementos em arrays ordenados, pois reduz pela metade o espaço de busca a cada iteração.",
    conceptsUsed: [
      {
        title: "Divisão e Conquista",
        description:
          "A cada passo, o algoritmo divide o array ao meio e decide em qual metade continuar a busca"
      },
      {
        title: "Loop while",
        description:
          "Continua a busca até encontrar o elemento ou determinar que ele não existe no array"
      },
      {
        title: "Comparação",
        description:
          "Usa comparações para decidir se deve procurar na metade esquerda ou direita do array"
      }
    ],
    testCases: [
      { input: [[1, 2, 3, 4, 5], 3], output: 2 },
      { input: [[1, 2, 3, 4, 5], 5], output: 4 },
      { input: [[1, 2, 3, 4, 5], 6], output: -1 }
    ]
  },
  {
    id: "merge-sort",
    name: "Merge Sort",
    description:
      "Implemente o algoritmo Merge Sort para ordenar um array de números. Este algoritmo usa a estratégia de divisão e conquista, dividindo o array em partes menores, ordenando-as e depois combinando-as.",
    difficulty: "hard",
    tags: ["array", "ordenação", "recursão", "divisão e conquista"],
    examples: [
      {
        input: "[5, 3, 8, 4, 2]",
        output: "[2, 3, 4, 5, 8]",
        explanation:
          "O array é ordenado em ordem crescente usando o Merge Sort."
      }
    ],
    boilerplate: `function mergeSort(arr: number[]): number[] {
  // Seu código aqui
  
}`,
    solution: `function ordenacaoMergeSort(array) {
  console.log("Entrada:", array);

  function merge(esquerda, direita) {
    const resultado = [];
    let i = 0, j = 0;
    
    while (i < esquerda.length && j < direita.length) {
      if (esquerda[i] < direita[j]) {
        resultado.push(esquerda[i]);
        i++;
      } else {
        resultado.push(direita[j]);
        j++;
      }
    }
    
    return resultado.concat(esquerda.slice(i)).concat(direita.slice(j));
  }

  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    const meio = Math.floor(arr.length / 2);
    const esquerda = mergeSort(arr.slice(0, meio));
    const direita = mergeSort(arr.slice(meio));
    
    return merge(esquerda, direita);
  }

  const resultado = mergeSort(array);
  console.log("Saída:", resultado);
  return resultado;
}

ordenacaoMergeSort([5, 3, 8, 4, 2]);`,
    explanation:
      "O Merge Sort é um algoritmo eficiente que usa a estratégia de divisão e conquista. Ele divide o array em metades até ter arrays de um elemento (que são naturalmente ordenados), e então combina esses arrays menores de forma ordenada para criar o array final ordenado.",
    conceptsUsed: [
      {
        title: "Divisão e Conquista",
        description:
          "Divide o problema em partes menores, resolve cada parte e combina as soluções"
      },
      {
        title: "Recursão",
        description:
          "Usa chamadas recursivas para dividir o array até chegar em arrays de um elemento"
      },
      {
        title: "Merge",
        description: "Combina dois arrays ordenados em um único array ordenado"
      }
    ],
    testCases: [
      { input: [[5, 3, 8, 4, 2]], output: [2, 3, 4, 5, 8] },
      { input: [[1]], output: [1] },
      { input: [[]], output: [] }
    ]
  }
];
