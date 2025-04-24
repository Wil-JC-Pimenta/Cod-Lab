import React from "react";
import { Container, Typography, Box, Paper, Divider } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ConceptsGuide: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Guia de Conceitos de Programação
      </Typography>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          JavaScript Moderno (ECMAScript 6+)
        </Typography>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            1. Variáveis e Escopo
          </Typography>
          <Typography paragraph>
            No JavaScript moderno, temos três formas de declarar variáveis:
          </Typography>
          <SyntaxHighlighter language="javascript" style={dracula}>
            {`// let - variável com escopo de bloco
let contador = 0;

// const - constante que não pode ser reatribuída
const PI = 3.14159;

// var - escopo de função (evitar usar)
var antiga = "deprecated";

// Exemplo de escopo de bloco
if (true) {
  let dentroDoBloco = "só visível aqui";
  const tambemAquiDentro = "não vazará";
}
// console.log(dentroDoBloco); // Erro!`}
          </SyntaxHighlighter>
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            2. Estruturas de Controle
          </Typography>
          <Typography paragraph>Condicionais e loops modernos:</Typography>
          <SyntaxHighlighter language="javascript" style={dracula}>
            {`// if...else moderno com template literals
const idade = 18;
console.log(\`Você é \${idade >= 18 ? 'maior' : 'menor'} de idade\`);

// switch com múltiplos casos
const fruta = 'maçã';
switch (fruta) {
  case 'maçã':
    console.log('Vermelha');
    break;
  case 'banana':
    console.log('Amarela');
    break;
  default:
    console.log('Fruta desconhecida');
}

// for...of para arrays
const frutas = ['maçã', 'banana', 'laranja'];
for (const fruta of frutas) {
  console.log(fruta);
}

// for...in para objetos
const pessoa = { nome: 'João', idade: 25 };
for (const chave in pessoa) {
  console.log(\`\${chave}: \${pessoa[chave]}\`);
}`}
          </SyntaxHighlighter>
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            3. Funções Modernas
          </Typography>
          <SyntaxHighlighter language="javascript" style={dracula}>
            {`// Arrow Functions
const soma = (a, b) => a + b;

// Parâmetros padrão
const saudacao = (nome = 'Visitante') => \`Olá, \${nome}!\`;

// Rest parameters
const somarTodos = (...numeros) => numeros.reduce((acc, curr) => acc + curr, 0);

// Destructuring em parâmetros
const processarUsuario = ({ nome, idade }) => \`\${nome} tem \${idade} anos\`;

// Async/Await
const buscarDados = async () => {
  try {
    const resposta = await fetch('https://api.exemplo.com/dados');
    const dados = await resposta.json();
    return dados;
  } catch (erro) {
    console.error('Erro:', erro);
  }
};`}
          </SyntaxHighlighter>
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            4. Estruturas de Dados
          </Typography>
          <SyntaxHighlighter language="javascript" style={dracula}>
            {`// Arrays modernos
const numeros = [1, 2, 3, 4, 5];

// Map, Filter, Reduce
const dobrados = numeros.map(n => n * 2);
const pares = numeros.filter(n => n % 2 === 0);
const soma = numeros.reduce((acc, curr) => acc + curr, 0);

// Set para valores únicos
const conjuntoUnico = new Set([1, 1, 2, 2, 3, 3]);

// Map para pares chave-valor
const mapaUsuarios = new Map();
mapaUsuarios.set('id1', { nome: 'Ana' });
mapaUsuarios.set('id2', { nome: 'Bob' });

// Object destructuring
const config = { servidor: 'localhost', porta: 3000 };
const { servidor, porta } = config;

// Array destructuring
const [primeiro, segundo, ...resto] = [1, 2, 3, 4, 5];`}
          </SyntaxHighlighter>
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            5. Operadores
          </Typography>
          <SyntaxHighlighter language="javascript" style={dracula}>
            {`// Operadores lógicos
const a = true && false; // AND
const b = true || false; // OR
const c = !true; // NOT

// Operador nullish coalescing
const valor = null ?? 'valor padrão';

// Optional chaining
const usuario = { endereco: { rua: 'Principal' } };
const rua = usuario?.endereco?.rua;

// Operadores de comparação
const igual = 5 === '5'; // false (comparação estrita)
const diferente = 5 !== '5'; // true

// Operadores aritméticos
const exponenciacao = 2 ** 3; // 8
const resto = 10 % 3; // 1`}
          </SyntaxHighlighter>
        </Paper>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          TypeScript
        </Typography>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            1. Tipos Básicos
          </Typography>
          <SyntaxHighlighter language="typescript" style={dracula}>
            {`// Tipos primitivos
let nome: string = 'João';
let idade: number = 25;
let ativo: boolean = true;

// Arrays
let numeros: number[] = [1, 2, 3];
let nomes: Array<string> = ['Ana', 'Bob'];

// Tuple
let coordenada: [number, number] = [10, 20];

// Enum
enum DiaDaSemana {
  DOMINGO,
  SEGUNDA,
  TERCA
}

// Any e Unknown
let qualquerCoisa: any = 4;
let desconhecido: unknown = 'valor';

// Void e Never
function log(): void {
  console.log('sem retorno');
}

function erro(): never {
  throw new Error('erro');
}`}
          </SyntaxHighlighter>
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            2. Interfaces e Types
          </Typography>
          <SyntaxHighlighter language="typescript" style={dracula}>
            {`// Interface
interface Usuario {
  nome: string;
  idade: number;
  email?: string; // Propriedade opcional
  readonly id: number; // Somente leitura
}

// Type Alias
type Coordenada = {
  x: number;
  y: number;
};

// Union Types
type Resultado = string | number;

// Intersection Types
type Animal = {
  nome: string;
};

type Voador = {
  asas: number;
};

type Passaro = Animal & Voador;

// Generics
interface Lista<T> {
  itens: T[];
  adicionar(item: T): void;
}`}
          </SyntaxHighlighter>
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            3. Classes
          </Typography>
          <SyntaxHighlighter language="typescript" style={dracula}>
            {`// Classe básica
class Animal {
  private nome: string;
  protected idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  public fazerBarulho(): void {
    console.log('Som genérico');
  }
}

// Herança
class Cachorro extends Animal {
  constructor(nome: string, idade: number) {
    super(nome, idade);
  }

  public fazerBarulho(): void {
    console.log('Au au!');
  }
}

// Implementando interfaces
interface Voador {
  voar(): void;
}

class Passaro extends Animal implements Voador {
  voar(): void {
    console.log('Voando...');
  }
}`}
          </SyntaxHighlighter>
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            4. Decorators
          </Typography>
          <SyntaxHighlighter language="typescript" style={dracula}>
            {`// Decorator de classe
function Logger(target: any) {
  console.log(\`Classe criada: \${target.name}\`);
}

@Logger
class Exemplo {
  constructor() {
    console.log('Construtor chamado');
  }
}

// Decorator de método
function ValidarParametro(target: any, key: string, descriptor: PropertyDescriptor) {
  const metodoOriginal = descriptor.value;

  descriptor.value = function(...args: any[]) {
    if (args[0] < 0) {
      throw new Error('Número deve ser positivo');
    }
    return metodoOriginal.apply(this, args);
  };
}

class Calculadora {
  @ValidarParametro
  calcularRaiz(n: number): number {
    return Math.sqrt(n);
  }
}`}
          </SyntaxHighlighter>
        </Paper>
      </Box>
    </Container>
  );
};

export default ConceptsGuide;
