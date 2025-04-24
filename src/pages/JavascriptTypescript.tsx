import React from "react";
import Layout from "../components/Layout";
import { CodeBlock } from "@/components/CodeBlock";

const JavascriptTypescript: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">JavaScript e TypeScript</h1>

        <div className="grid grid-cols-1 gap-8">
          <div className="bg-accent p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">
              JavaScript: Um Estudo Detalhado
            </h2>
            <p className="mb-4">
              JavaScript é uma linguagem de programação de alto nível,
              interpretada e orientada a objetos que se tornou um dos pilares
              fundamentais da web moderna. Criada em 1995 por Brendan Eich
              enquanto trabalhava na Netscape, a linguagem evoluiu drasticamente
              desde sua concepção.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              Características Fundamentais
            </h3>

            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">1. Tipagem Dinâmica</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Tipos são associados a valores, não a variáveis</li>
                <li>Conversão implícita de tipos (coerção)</li>
                <li>
                  Tipos primitivos: string, number, boolean, null, undefined,
                  symbol, bigint
                </li>
                <li>Tipos de referência: objects, arrays, functions</li>
              </ul>
              <CodeBlock
                code={`let x = 10;         // number
x = "texto";        // agora é string
x = true;           // agora é boolean
x = { prop: 42 };   // agora é object`}
                language="javascript"
              />
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">
                2. Programação Orientada a Objetos
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Protótipos vs Classes: JavaScript usa herança prototípica
                  nativa
                </li>
                <li>
                  Sintaxe de Classes: Introduzida no ES6 como "açúcar sintático"
                  sobre protótipos
                </li>
              </ul>
              <CodeBlock
                code={`// Usando protótipos
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  return \`Olá, meu nome é \${this.name}\`;
};

// Usando classes (ES6+)
class Person {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    return \`Olá, meu nome é \${this.name}\`;
  }
}`}
                language="javascript"
              />
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">
                3. Programação Funcional
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  First-class functions: Funções são tratadas como qualquer
                  outro valor
                </li>
                <li>
                  Higher-order functions: Funções que podem receber outras
                  funções como argumentos
                </li>
                <li>Closures: Funções que "lembram" seu escopo léxico</li>
                <li>Métodos funcionais: map, filter, reduce, etc.</li>
              </ul>
              <CodeBlock
                code={`// Higher-order function e uso de map/filter
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);

// Closure
function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}
const counter = createCounter();
counter(); // 1
counter(); // 2`}
                language="javascript"
              />
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">4. Assincronicidade</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Callbacks: Abordagem tradicional</li>
                <li>
                  Promises: Introduzidas no ES6 para melhor controle de fluxo
                  assíncrono
                </li>
                <li>Async/Await: Sintaxe introduzida no ES2017</li>
              </ul>
              <CodeBlock
                code={`// Usando Promises
fetch('https://api.exemplo.com/dados')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Usando Async/Await
async function fetchData() {
  try {
    const response = await fetch('https://api.exemplo.com/dados');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}`}
                language="javascript"
              />
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              Ecossistema JavaScript
            </h3>

            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">
                1. NPM (Node Package Manager)
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Repositório de pacotes: O maior ecossistema de bibliotecas de
                  software do mundo
                </li>
                <li>
                  Gerenciamento de dependências: Instalação e atualização de
                  pacotes
                </li>
                <li>Scripts: Automação de tarefas comuns</li>
                <li>Versionamento: Seguindo o padrão SemVer</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">2. Package.json</h4>
              <CodeBlock
                code={`{
  "name": "meu-projeto",
  "version": "1.0.0",
  "description": "Descrição do projeto",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "build": "webpack --mode production",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "jest": "^29.5.0",
    "typescript": "^5.0.4",
    "webpack": "^5.82.1"
  }
}`}
                language="json"
              />
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">
                3. Ferramentas de Desenvolvimento
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Babel: Transpila código JavaScript moderno para versões
                  compatíveis
                </li>
                <li>Webpack: Agrupa módulos JavaScript e processa assets</li>
                <li>ESLint: Analisa código para encontrar problemas</li>
                <li>Prettier: Formatador de código opinativo</li>
              </ul>
            </div>
          </div>

          <div className="bg-accent p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">
              TypeScript: Um Estudo Detalhado
            </h2>
            <p className="mb-4">
              TypeScript é um superconjunto de JavaScript desenvolvido pela
              Microsoft que adiciona tipagem estática opcional ao JavaScript,
              ajudando desenvolvedores a escrever código mais robusto e
              manutenível.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              Uso Prático do TypeScript
            </h3>

            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">
                1. Configuração de Projeto
              </h4>
              <p className="mb-2">
                O arquivo tsconfig.json controla o comportamento do compilador:
              </p>
              <CodeBlock
                code={`{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "declaration": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.test.ts"]
}`}
                language="json"
              />
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">
                2. Tipos Básicos e Interfaces
              </h4>
              <CodeBlock
                code={`// Tipos básicos
let nome: string = "João";
let idade: number = 30;
let ativo: boolean = true;

// Arrays
let numeros: number[] = [1, 2, 3];
let nomes: Array<string> = ["Ana", "Carlos"];

// Interface
interface Usuario {
  id: number;
  nome: string;
  email: string;
  ativo?: boolean; // Propriedade opcional
}

// Implementando a interface
const usuario: Usuario = {
  id: 1,
  nome: "Maria",
  email: "maria@exemplo.com"
};

// Função com tipos
function somar(a: number, b: number): number {
  return a + b;
}`}
                language="typescript"
              />
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">3. Uso de Generics</h4>
              <CodeBlock
                code={`// Função genérica simples
function primeiro<T>(array: T[]): T | undefined {
  return array[0];
}

const primeiroNumero = primeiro([1, 2, 3]); // tipo: number
const primeiraString = primeiro(["a", "b", "c"]); // tipo: string

// Interface genérica
interface Resposta<T> {
  dados: T;
  status: number;
  mensagem: string;
}

// Uso da interface genérica
type Usuario = { nome: string; email: string };
type Produto = { id: number; nome: string; preco: number };

const respostaUsuario: Resposta<Usuario> = {
  dados: { nome: "Carlos", email: "carlos@mail.com" },
  status: 200,
  mensagem: "Sucesso"
};

const respostaProduto: Resposta<Produto> = {
  dados: { id: 1, nome: "Notebook", preco: 3500 },
  status: 200,
  mensagem: "Produto encontrado"
};`}
                language="typescript"
              />
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">
                4. Type Guards e Type Assertions
              </h4>
              <CodeBlock
                code={`// Type Guard
function isString(valor: any): valor is string {
  return typeof valor === 'string';
}

function processarValor(valor: string | number) {
  if (isString(valor)) {
    // TypeScript sabe que aqui valor é string
    return valor.toUpperCase();
  }
  // TypeScript sabe que aqui valor é number
  return valor.toFixed(2);
}

// Type Assertion
const inputElement = document.getElementById('input') as HTMLInputElement;
// Agora podemos acessar .value
const valor = inputElement.value;`}
                language="typescript"
              />
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">5. Utility Types</h4>
              <CodeBlock
                code={`// Partial - torna todas as propriedades opcionais
interface Tarefa {
  titulo: string;
  descricao: string;
  concluida: boolean;
}

function atualizarTarefa(tarefa: Tarefa, atualizacoes: Partial<Tarefa>) {
  return { ...tarefa, ...atualizacoes };
}

// Pick - seleciona um subconjunto de propriedades
type TarefaResumida = Pick<Tarefa, 'titulo' | 'concluida'>;

// Omit - remove propriedades específicas
type TarefaSemDescricao = Omit<Tarefa, 'descricao'>;

// Record - cria um tipo de objeto com chaves e valores específicos
type CatalogoProdutos = Record<string, { nome: string; preco: number }>;`}
                language="typescript"
              />
            </div>
          </div>

          <div className="bg-accent p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">
              Node.js: NPM, Express e TypeORM
            </h2>
            <p className="mb-4">
              Node.js é um ambiente de execução JavaScript construído sobre o
              motor V8 do Chrome que permite executar código JavaScript no
              servidor. Ele utiliza um modelo de I/O não-bloqueante e orientado
              a eventos, que o torna leve e eficiente, ideal para aplicações em
              tempo real com troca intensiva de dados.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              NPM (Node Package Manager)
            </h3>
            <p className="mb-4">
              O NPM é o gerenciador de pacotes padrão do Node.js, permitindo aos
              desenvolvedores instalar, compartilhar e gerenciar dependências em
              seus projetos.
            </p>

            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">
                Comandos Básicos do NPM
              </h4>
              <CodeBlock
                code={`# Iniciar um novo projeto
npm init
# Para aceitar todas as opções padrão
npm init -y

# Instalar pacotes
npm install <nome-do-pacote>
# Ou abreviado
npm i <nome-do-pacote>

# Instalar como dependência de desenvolvimento
npm install <nome-do-pacote> --save-dev
# Ou abreviado
npm i <nome-do-pacote> -D

# Instalar pacotes globalmente
npm install -g <nome-do-pacote>

# Desinstalar pacotes
npm uninstall <nome-do-pacote>

# Executar scripts
npm run <nome-do-script>`}
                language="bash"
              />
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">Arquivo package.json</h4>
              <p className="mb-2">
                O arquivo package.json é o coração de qualquer projeto Node.js.
                Ele contém metadados sobre o projeto como nome, versão,
                descrição, além de listar todas as dependências e scripts.
              </p>
              <CodeBlock
                code={`{
  "name": "meu-projeto-node",
  "version": "1.0.0",
  "description": "Um exemplo de projeto Node.js",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.2",
    "typeorm": "^0.3.17"
  },
  "devDependencies": {
    "nodemon": "^3.0.1",
    "jest": "^29.7.0"
  }
}`}
                language="json"
              />
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">Express</h3>
            <p className="mb-4">
              Express é um framework web rápido, não opinativo e minimalista
              para Node.js, que simplifica o desenvolvimento de aplicações web e
              APIs.
            </p>

            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">Configuração Básica</h4>
              <CodeBlock
                code={`const express = require('express');
const app = express();
const port = 3000;

// Middleware para processar JSON
app.use(express.json());

// Rota básica
app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(\`Servidor rodando em http://localhost:\${port}\`);
});`}
                language="javascript"
              />
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">Rotas no Express</h4>
              <CodeBlock
                code={`// Rota GET
app.get('/usuarios', (req, res) => {
  res.json([{ nome: 'João' }, { nome: 'Maria' }]);
});

// Rota POST
app.post('/usuarios', (req, res) => {
  const novoUsuario = req.body;
  // Lógica para salvar o usuário
  res.status(201).json(novoUsuario);
});

// Rota com parâmetro
app.get('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  // Lógica para buscar o usuário pelo ID
  res.json({ id, nome: 'João' });
});`}
                language="javascript"
              />
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">TypeORM</h3>
            <p className="mb-4">
              TypeORM é um ORM (Object-Relational Mapping) para TypeScript e
              JavaScript que pode ser usado com vários bancos de dados.
            </p>

            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">Configuração Básica</h4>
              <CodeBlock
                code={`// data-source.ts
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Usuario } from "./entidades/Usuario";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "senha",
  database: "test",
  synchronize: true,
  logging: true,
  entities: [Usuario],
  migrations: [],
  subscribers: [],
});`}
                language="typescript"
              />
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">Definindo Entidades</h4>
              <CodeBlock
                code={`// entidades/Usuario.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column({ default: true })
    ativo: boolean;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    criadoEm: Date;
}`}
                language="typescript"
              />
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">
                Operações Básicas com TypeORM
              </h4>
              <CodeBlock
                code={`// Criar registros
const usuario = new Usuario();
usuario.nome = "João";
usuario.email = "joao@exemplo.com";
await AppDataSource.manager.save(usuario);

// Buscar registros
const usuarios = await usuarioRepository.find();
const usuario = await usuarioRepository.findOneBy({ id: 1 });

// Atualizar registros
usuario.nome = "João Silva";
await usuarioRepository.save(usuario);

// Excluir registros
await usuarioRepository.delete({ id: 1 });`}
                language="typescript"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JavascriptTypescript;
