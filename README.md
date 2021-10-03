## Descrição
WebAPI utilizando Node.js para criação do Projeto Integrador I - GAP.

## Tecnologias utilizadas

- Node.js: framework para JavaScript que permite o desenvolvimento de aplicações web server-side.
- Express.js: framework para Node.js que permite configurar middlewares para responder a solicitações HTTP.
- Nodemon: biblioteca que ajuda no desenvolvimento com Node.js reiniciando automaticamente o servidor.
- Sequelize: ORM (Object-Relational Mapper) para facilitar a comunicação com banco SQL, Postgres no caso.
 ```bash
pg pg-hstore   #Postgres
mysql2         #Mysql
mariadb        #MariaDB
sqlite3        #SQLite
tedious        #SQL Server
```

## Instalação

- Instalar na máquina o Node.js e NPM (Node Package Manager),
- Clonar o Repostório em uma pasta,
- Acessar a pasta raíz e rodar o comando, para instalação:
 ```bash
$ npm install
```

## Inicialização

- Acessar a pasta raíz e rodar o comando, para subir o servidor:
 ```bash
$ npm start
```
- Acessar a URL: https://localhost:3000

## Testes

- Para testar os endpoints, basta importar o arquivo **GAP-API.postman_collection.json**, localizado na pasta /postman em seu Postman.