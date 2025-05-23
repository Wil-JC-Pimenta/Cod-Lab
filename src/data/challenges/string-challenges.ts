import { Challenge } from "../../types/challenge";

export const stringChallenges: Challenge[] = [
  {
    id: "reverse-string",
    name: "Inverter String",
    description:
      "Crie uma função que recebe uma string como parâmetro e retorna esta string invertida. Por exemplo, se a entrada for 'hello', a saída deve ser 'olleh'.",
    difficulty: "easy",
    tags: ["string", "manipulação de string"],
    examples: [
      {
        input: "'hello'",
        output: "'olleh'",
        explanation: "Cada caractere é processado em ordem inversa."
      }
    ],
    boilerplate: `function reverseString(str: string): string {
  // Seu código aqui
  
}`,
    solution: `
  function inverterString(texto) {
  return texto.split('').reverse().join('');
}

// Exemplo de uso
const entrada = 'hello';
const saida = inverterString(entrada);
console.log(saida); // Saída: olleh
`,
    explanation:
      "Esta solução demonstra como manipular strings em JavaScript/TypeScript usando métodos de array. A string é primeiro convertida em um array de caracteres, que é então invertido e reconvertido em string.",
    conceptsUsed: [
      {
        title: "Métodos de String",
        description:
          "split() - Divide uma string em um array de substrings baseado em um delimitador."
      },
      {
        title: "Métodos de Array",
        description:
          "reverse() - Inverte a ordem dos elementos de um array. join() - Une todos os elementos de um array em uma string."
      },
      {
        title: "Method Chaining",
        description:
          "Técnica de encadear múltiplos métodos em uma única linha, onde cada método retorna um objeto que pode ser usado pelo próximo método."
      }
    ],
    testCases: [
      { input: ["hello"], output: "olleh" },
      { input: ["JavaScript"], output: "tpircSavaJ" },
      { input: [""], output: "" }
    ]
  },
  {
    id: "palindrome-checker",
    name: "Verificador de Palíndromo",
    description:
      "Crie uma função que verifica se uma string é um palíndromo. Um palíndromo é uma palavra, frase ou sequência que se lê da mesma forma de trás para frente, desconsiderando espaços, pontuação e diferenças entre maiúsculas e minúsculas.",
    difficulty: "easy",
    tags: ["string", "manipulação de string", "lógica"],
    examples: [
      {
        input: "'Ana'",
        output: "true",
        explanation:
          "A palavra 'Ana' é um palíndromo pois se lê igual de trás para frente, ignorando maiúsculas e minúsculas."
      },
      {
        input: "'race car'",
        output: "true",
        explanation:
          "A frase 'race car' é um palíndromo pois, removendo os espaços e ignorando maiúsculas e minúsculas, se lê igual de trás para frente."
      },
      {
        input: "'hello'",
        output: "false",
        explanation:
          "A palavra 'hello' não é um palíndromo pois não se lê igual de trás para frente."
      }
    ],
    boilerplate: `function isPalindrome(str: string): boolean {
  // Seu código aqui
  
}`,
    solution: `function verificarPalindromo(texto) {
  const textoLimpo = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
  return textoLimpo === textoLimpo.split('').reverse().join('');
}

const texto1 = 'Ana';
const texto2 = 'race car'
const resultado1 = verificarPalindromo(texto1);
const resultado2 = verificarPalindromo(texto2);

console.log("Entrada:", texto1);
console.log("Entrada", texto2);
console.log("Saída:", resultado1);
console.log("Saída", resultado2);`,
    explanation:
      "Esta solução verifica se as palavras são palíndromos, ignorando maiúsculas, minúsculas e espaços.",
    conceptsUsed: [
      {
        title: "Conversão de Texto",
        description: "converte para minúsculas e remove caracteres especiais"
      },
      {
        title: "Inversão de Texto",
        description: "inverte o texto para verificar se é igual ao original"
      }
    ],
    testCases: [
      {
        input: ["Ana"],
        output: true
      },
      {
        input: ["race car"],
        output: true
      },
      {
        input: ["hello"],
        output: false
      }
    ]
  },
  {
    id: "count-vowels",
    name: "Contador de Vogais",
    description:
      "Crie uma função que conta o número de vogais em uma string. Considere apenas as vogais a, e, i, o, u.",
    difficulty: "easy",
    tags: ["string", "manipulação de string", "contagem"],
    examples: [
      {
        input: "'hello'",
        output: "2",
        explanation: "A string 'hello' contém 2 vogais: 'e' e 'o'."
      }
    ],
    boilerplate: `function countVowels(str: string): number {
  // Seu código aqui
  
}`,
    solution: `function countVowels(str) {
  console.log("Entrada:", str);
  const strLower = str.toLowerCase();
  const matches = strLower.match(/[aeiou]/g);
  const result = matches ? matches.length : 0;
  console.log("Saída:", result);
  return result;
}

countVowels("hello");`,
    explanation:
      "Esta solução usa expressões regulares para encontrar todas as vogais na string de forma eficiente. Primeiro converte a string para minúsculas para garantir que todas as vogais sejam encontradas, independente de estarem em maiúsculas ou minúsculas.",
    conceptsUsed: [
      {
        title: "Expressões Regulares",
        description:
          "match() - Procura por correspondências em uma string usando uma expressão regular. O padrão /[aeiou]/g encontra todas as vogais na string."
      },
      {
        title: "Métodos de String",
        description:
          "toLowerCase() - Converte todos os caracteres de uma string para minúsculas."
      },
      {
        title: "Operador Ternário",
        description:
          "Usado para retornar 0 quando nenhuma vogal é encontrada (matches é null)."
      }
    ],
    testCases: [
      { input: ["hello"], output: 2 },
      { input: ["programming"], output: 3 },
      { input: ["aeiou"], output: 5 },
      { input: ["xyz"], output: 0 }
    ]
  },
  {
    id: "valid-parentheses",
    name: "Validador de Parênteses",
    description:
      "Crie uma função que verifica se uma string contendo apenas parênteses '(', ')', '{', '}', '[' e ']' é válida. A string é válida se todos os parênteses são fechados na ordem correta.",
    difficulty: "medium",
    tags: ["string", "pilha", "validação"],
    examples: [
      {
        input: "'{[()]}'",
        output: "true",
        explanation: "Todos os parênteses são fechados na ordem correta."
      },
      {
        input: "'([)]'",
        output: "false",
        explanation: "Os parênteses não são fechados na ordem correta."
      }
    ],
    boilerplate: `function validParentheses(str: string): boolean {
  // Seu código aqui
  
}`,
    solution: `function validarParenteses(texto) {
  console.log("Entrada:", texto);
  
  const pilha = [];
  const pares = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  
  for (const caractere of texto) {
    if (pares[caractere]) {
      pilha.push(caractere);
    } else if (Object.values(pares).includes(caractere)) {
      if (pilha.length === 0 || pares[pilha.pop()] !== caractere) {
        console.log("Saída: false");
        return false;
      }
    }
  }
  
  const resultado = pilha.length === 0;
  console.log("Saída:", resultado);
  return resultado;
}

validarParenteses("{[()]}");`,
    explanation:
      "Esta solução usa uma pilha para rastrear parênteses abertos e verifica se cada parêntese fechado corresponde ao último parêntese aberto. A pilha garante que os parênteses sejam fechados na ordem correta.",
    conceptsUsed: [
      {
        title: "Pilha (Stack)",
        description:
          "Estrutura de dados que segue o princípio LIFO (Last In, First Out) para rastrear parênteses abertos"
      },
      {
        title: "Objeto de Mapeamento",
        description:
          "Usa um objeto para mapear cada tipo de parêntese de abertura ao seu respectivo fechamento"
      },
      {
        title: "Iteração de String",
        description:
          "Percorre cada caractere da string para verificar parênteses de abertura e fechamento"
      }
    ],
    testCases: [
      { input: ["{[()]}"], output: true },
      { input: ["([)]"], output: false },
      { input: ["((()"], output: false },
      { input: ["(){}[]"], output: true }
    ]
  }
];
