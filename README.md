<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  Desafio do primeiro módulo do Bootcamp GoStack 🚀👨🏻‍🚀
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafio-01?color=%2304D361">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

 <img alt="Made by Christian" src="https://img.shields.io/badge/made%20by-Christian-%2304D361">
 
</p>

---

## :rocket: Sobre o desafio

Criar uma aplicação para armazenar projetos e suas tarefas do zero utilizando [Express](https://expressjs.com/pt-br/).

### Este projeto conta com:

<ul>
  <li>Node.js - v13.7.0</li>
  <li><a href="https://legacy.yarnpkg.com/">Yarn - v1.21.1</a></li>
  <li><a href="https://expressjs.com">ExpressJS</a></li>
  <li><a href="https://nodemon.io/">Nodemon</a></li>
  
</ul>

---

### Comandos para rodar o projeto

`yarn -i` para instalar as dependências.
`yarn dev` ou `npx nodemon` para iniciar o servidor já com o nodemon

---

### Rotas

- `POST /projects`: A rota deve receber `title` dentro do corpo e cadastrar um novo projeto dentro de um array no seguinte formato: `{ id: "1", title: 'Novo projeto', tasks: [] }`; Certifique-se de enviar o título do projeto no formato string com aspas duplas.

- `POST /projects/:id/tasks`: A rota deve receber um campo `title` e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do `id` presente nos parâmetros da rota;

- `GET /projects`: Rota que lista todos projetos e suas tarefas;

- `GET /projects/:id`: Rota que lista apenas o projeto com id informado

- `PUT /projects/:id`: A rota deve alterar apenas o título do projeto com o `id` presente nos parâmetros da rota;

- `DELETE /projects/:id/tasks`: A rota deve deletar o primeiro item do campo de tarefas, como uma fila.

- `DELETE /projects/:id`: A rota deve deletar o projeto com o `id` presente nos parâmetros da rota;

---

### Exemplo

A rota `POST /projects` repassando `{ title: 'Novo projeto' }` e a rota `POST /projects/1/tasks` com `{ title: 'Nova tarefa' }`, deve retornar o seguinte array:

```js
[
  {
    id: "1",
    title: "Novo projeto",
    tasks: ["Nova tarefa"]
  }
];
```

---

### Middleware

- Middleware Global chamado em todas requisições que imprime (`console.log`) uma contagem de quantas requisições foram feitas na aplicação até então;

- Middleware em todas rotas que recebem o ID do projeto nos parâmetros da URL que verifica se o projeto com aquele ID existe. Se não existir retorne um erro, caso contrário permita a requisição continuar normalmente;
