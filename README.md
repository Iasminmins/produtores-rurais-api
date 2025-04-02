🌾 Produtores Rurais API
A Produtores Rurais API é uma aplicação desenvolvida para facilitar o gerenciamento de produtores rurais. O sistema permite cadastrar, atualizar e consultar informações essenciais sobre os produtores, promovendo uma gestão mais eficiente e organizada.

Este projeto foi criado utilizando NestJS, um framework robusto para aplicações Node.js, seguindo os princípios de arquitetura modular, garantindo escalabilidade e facilidade de manutenção.

🎯 Objetivo do Projeto
O principal objetivo da API é fornecer um sistema seguro e eficiente para armazenar e manipular dados de produtores rurais, permitindo que empresas e instituições do setor agrícola possam monitorar e gerenciar informações com mais precisão.

🔹 Recursos Principais
✅ Cadastro de novos produtores rurais
✅ Atualização de informações dos produtores
✅ Listagem de todos os produtores cadastrados
✅ Consulta detalhada de um produtor específico
✅ Integração com banco de dados PostgreSQL

🏗️ Arquitetura do Projeto
A estrutura do projeto segue a organização recomendada pelo NestJS, garantindo modularização e separação de responsabilidades:

📂 src/ - Contém o código-fonte do projeto
    📂 producer/ - Módulo responsável pelo CRUD de produtores
        📂 dto/ - Contém os Data Transfer Objects (DTOs) para validação de dados
        📄 producer.controller.ts - Controlador que gerencia as rotas da API
        📄 producer.service.ts - Serviço que contém as regras de negócio
        📄 producer.module.ts - Módulo que agrupa os componentes do domínio
    📂 common/ - Contém utilitários e configurações globais
📂 test/ - Arquivos para testes automatizados

🛠️ Tecnologias Utilizadas
O projeto foi desenvolvido utilizando as seguintes tecnologias:

🔹 Node.js - Ambiente de execução JavaScript
🔹 NestJS - Framework para aplicações escaláveis em Node.js
🔹 Typeorm-
🔹 TypeScript - Tipagem estática para um código mais seguro
🔹 PostgreSQL - Banco de dados relacional robusto
🔹 Jest - Framework de testes automatizados

 Pré-requisitos e Configuração
📌 Informe o que é necessário para rodar o projeto. Por exemplo:

Node.js instalado (>= versão 16)

PostgreSQL configurado

Variáveis de ambiente no .env

Exemplo de configuração do .env:

env

DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=api-rural
DATABASE_PASSWORD= *******
DATABASE_NAME=produtores_db


 Como Rodar o Projeto
📌 Passo a passo para instalar e executar:

Clone o repositório:
git clone https://github.com/Iasminmins/produtores-rurais-api.git

Entre no diretório do projeto:
cd produtores-rurais-api

Instale as dependências:
npm install

Execute as migrações do banco de dados:
npm run migration:run

Inicie o servidor:
npm run start

Se quiser rodar no modo de desenvolvimento com recarregamento automático:
npm run start:dev


Endpoints da API
📌 Liste os principais endpoints e como utilizá-los.

Produtores (/producers)

GET /producers → Retorna todos os produtores cadastrados

POST /producers → Cadastra um novo produtor rural

PUT /producers/:id → Atualiza um produtor específico

DELETE /producers/:id → Remove um produtor
