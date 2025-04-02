<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Produtores Rurais API</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background-color: #f9f9f9;
        }
        h1, h2 {
            color: #2E7D32;
        }
        pre {
            background: #ddd;
            padding: 10px;
            border-radius: 5px;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        ul li::before {
            content: "✅ ";
        }
        .code {
            background: #333;
            color: #fff;
            padding: 10px;
            display: block;
            border-radius: 5px;
        }
    </style>
</head>
<body>

    <h1>🌾 Produtores Rurais API</h1>
    <p>A <strong>Produtores Rurais API</strong> é uma aplicação desenvolvida para facilitar o gerenciamento de produtores rurais. 
    O sistema permite cadastrar, atualizar e consultar informações essenciais sobre os produtores, promovendo uma gestão mais eficiente e organizada.</p>

    <p>Este projeto foi criado utilizando <strong>NestJS</strong>, um framework robusto para aplicações Node.js, seguindo os princípios de arquitetura modular, garantindo escalabilidade e facilidade de manutenção.</p>

    <h2>🎯 Objetivo do Projeto</h2>
    <p>O principal objetivo da API é fornecer um sistema seguro e eficiente para armazenar e manipular dados de produtores rurais, permitindo que empresas e instituições do setor agrícola possam monitorar e gerenciar informações com mais precisão.</p>

    <h2>🔹 Recursos Principais</h2>
    <ul>
        <li>Cadastro de novos produtores rurais</li>
        <li>Atualização de informações dos produtores</li>
        <li>Listagem de todos os produtores cadastrados</li>
        <li>Consulta detalhada de um produtor específico</li>
        <li>Integração com banco de dados PostgreSQL</li>
    </ul>

    <h2>🏗️ Arquitetura do Projeto</h2>
    <pre>
📂 src/
│── 📂 producer/ (Módulo CRUD de produtores)
│   ├── 📂 dto/ (Data Transfer Objects para validação)
│   ├── 📄 producer.controller.ts (Gerencia as rotas da API)
│   ├── 📄 producer.service.ts (Regras de negócio)
│   ├── 📄 producer.module.ts (Módulo organizador)
│── 📂 common/ (Utilitários e configurações)
│── 📂 test/ (Testes automatizados)
    </pre>

    <h2>🛠️ Tecnologias Utilizadas</h2>
    <ul>
        <li>🔹 Node.js - Ambiente de execução JavaScript</li>
        <li>🔹 NestJS - Framework para aplicações escaláveis em Node.js</li>
        <li>🔹 TypeORM 3 - ORM para banco de dados</li>
        <li>🔹 TypeScript - Tipagem estática para maior segurança</li>
        <li>🔹 PostgreSQL - Banco de dados relacional robusto</li>
        <li>🔹 Jest - Framework de testes automatizados</li>
    </ul>

    <h2>⚙️ Pré-requisitos e Configuração</h2>
    <p>Para rodar o projeto, certifique-se de ter:</p>
    <ul>
        <li>✅ Node.js instalado (>= versão 16)</li>
        <li>✅ PostgreSQL configurado</li>
        <li>✅ Variáveis de ambiente no <code>.env</code></li>
    </ul>

    <h3>📄 Exemplo de configuração do <code>.env</code>:</h3>
    <pre class="code">
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=api-rural
DATABASE_PASSWORD=*******
DATABASE_NAME=produtores_db
    </pre>

    <h2>🚀 Como Rodar o Projeto</h2>
    <ol>
        <li><strong>Clone o repositório:</strong> <pre class="code">git clone https://github.com/Iasminmins/produtores-rurais-api.git</pre></li>
        <li><strong>Entre no diretório do projeto:</strong> <pre class="code">cd produtores-rurais-api</pre></li>
        <li><strong>Instale as dependências:</strong> <pre class="code">npm install</pre></li>
        <li><strong>Execute as migrações do banco de dados:</strong> <pre class="code">npm run migration:run</pre></li>
        <li><strong>Inicie o servidor:</strong> <pre class="code">npm run start</pre></li>
        <li><strong>Modo de desenvolvimento:</strong> <pre class="code">npm run start:dev</pre></li>
    </ol>

    <h2>📌 Endpoints da API</h2>
    <p>A API possui os seguintes endpoints:</p>
    <ul>
        <li><strong>GET</strong> <code>/producers</code> → Retorna todos os produtores cadastrados</li>
        <li><strong>POST</strong> <code>/producers</code> → Cadastra um novo produtor rural</li>
        <li><strong>PUT</strong> <code>/producers/:id</code> → Atualiza um produtor específico</li>
        <li><strong>DELETE</strong> <code>/producers/:id</code> → Remove um produtor</li>
    </ul>

</body>
</html>
