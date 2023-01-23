### Iniciar projeto back-end

npm init -y

### Instalar o fastify - equivalente ao express

npm i fastify

### Instalar typescript

npm i typescript -D
npx tsc --init

- essa ferramenta permite executar um arquivo do node com typescript sem precisar converter
  npm i tsx -D

### Criar um script para rodar no terminal direto

- adicionar o comando abaixo no arquivo package.json
  "dev": "tsx src/server.ts"

### Instalar o ORM prisma e o database SQLite

npm i prisma -D
npm i @prisma/client
npx prisma init --datasource-provider SQLite

- após criar as tabelas no arquivo schema.prisma usa o comando abaixo
  npx prisma migrate dev

- para visualizar o banco de dados através do prisma
  npx prisma studio

### CORS funciona para dizer quais aplicações poderão buscar dados no back-end

- após importar o cors e criar a linha 'app.register(cors)' precisa reiniciar o back-end
  npm i @fastify/cors

### Para criar relações entre tabelas no prisma

- após digitar a linha abaixo, só salvar o projeto que ele faz as relações automaticamente
  day Day @relation

### Instalar lib para visualizar o database em formato diferente

prisma erd generator
https://www.npmjs.com/package/prisma-erd-generator

npm i -D prisma-erd-generator @mermaid-js/mermaid-cli

- copiar o código abaixo no arquivo schema.prisma
  generator erd {
  provider = "prisma-erd-generator"
  }

npx prisma generate
obs: não funcionou

### Criando uma seed no prisma

https://www.prisma.io/docs/guides/database/seed-database

- copia a estrutura que existe nesa página e cria/cola o código no arquivo seed.ts

- no arquivo package.json cola a linha abaixo, que também existe na documentação
  "prisma": {
  "seed": "ts-node prisma/seed.ts"
  }

- depois para usar a seed faz o comando abaixo:
  npx prisma db seed

### lib para validação

npm i zod

### instalar a lib dayjs para trabalhar com datas

npm i dayjs

### Para trabalhar com datas no SQLite

https://www.sqlitetutorial.net/sqlite-date-functions/sqlite-strftime-function/

###
