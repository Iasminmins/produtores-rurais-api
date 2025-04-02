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
            max-width: 900px;
            margin: 20px auto;
            padding: 20px;
            background-color: #f4f4f4;
            color: #333;
        }
        h1, h2, h3 {
            color: #2E7D32;
        }
        .code {
            background: #333;
            color: #fff;
            padding: 10px;
            display: block;
            border-radius: 5px;
            white-space: pre-wrap;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        ul li::before {
            content: "✅ ";
            color: #2E7D32;
            font-weight: bold;
        }
        pre {
            background: #e8e8e8;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
    </style>
</head>
<body>

    <h1>🌾 Produtores Rurais API</h1>
    <p>A <strong>Produtores Rurais API</strong> facilita o gerenciamento de produtores rurais, permitindo cadastro, atualização e consulta de dados de forma eficiente.</p>

    <h2>🎯 Objetivo do Projeto</h2>
    <p>Fornecer um sistema seguro para armazenar e manipular dados de produtores rurais, permitindo que empresas do setor agrícola tenham um melhor controle das informações.</p>

    <h2>🔹 Recursos Principais</h2>
    <ul>
        <li>Cadastro de novos produtores</li>
        <li>Atualização de dados</li>
        <li>Listagem de produtores cadastrados</li>
        <li>Consulta detalhada de um produtor</li>
        <li>Integração com PostgreSQL</li>
    </ul>

    <h2>🏗️ Arquitetura do Projeto</h2>
    <pre>
📂 src/
│── 📂 producer/ (Módulo CRUD de produtores)
│   ├── 📂 dto/ (Validação de dados)
│   ├── 📄 producer.controller.ts (Gerencia as rotas da API)
│   ├── 📄 producer.service.ts (Regras de negócio)
│   ├── 📄 producer.module.ts (Módulo organizador)
│── 📂 common/ (Utilitários e configurações)
│── 📂 test/ (Testes automatizados)
    </pre>

    <h2>🛠️ Tecnologias Utilizadas</h2>
    <ul>
        <li>Node.js - Ambiente de execução</li>
        <li>NestJS - Framework modular</li>
        <li>TypeORM - ORM para banco de dados</li>
        <li>TypeScript - Tipagem estática</li>
        <li>PostgreSQL - Banco de dados</li>
        <li>Jest - Framework de testes</li>
    </ul>

    <h2>⚙️ Pré-requisitos e Configuração</h2>
    <p>Para rodar o projeto, você precisa de:</p>
    <ul>
        <li>Node.js instalado (>= versão 16)</li>
        <li>PostgreSQL configurado</li>
        <li>Variáveis de ambiente no arquivo <code>.env</code></li>
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
        <li><strong>Execute as migrações:</strong> <pre class="code">npm run migration:run</pre></li>
        <li><strong>Inicie o servidor:</strong> <pre class="code">npm run start</pre></li>
        <li><strong>Modo de desenvolvimento:</strong> <pre class="code">npm run start:dev</pre></li>
    </ol>

    <h2>📌 Endpoints da API</h2>
    <p>Lista dos principais endpoints disponíveis:</p>
    <ul>
        <li><strong>GET</strong> <code>/producers</code> → Retorna todos os produtores</li>
        <li><strong>POST</strong> <code>/producers</code> → Cadastra um novo produtor</li>
        <li><strong>PUT</strong> <code>/producers/:id</code> → Atualiza um produtor</li>
        <li><strong>DELETE</strong> <code>/producers/:id</code> → Remove um produtor</li>
    </ul>

</body>
</html>
