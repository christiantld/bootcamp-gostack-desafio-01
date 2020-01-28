const express = require("express");
const server = express();
const projects = require("./models/projects");
const countRequest = require("./middlewares/countRequest");
const checkIfExists = require("./middlewares/checkIfExists");

server.use(express.json());
//Middleware contagem de requisicoes
server.use(countRequest);

let count = 1;

//Listar todos os projetos
server.get("/projects", (req, res) => {
  return res.json(projects);
});

//Listar apenas um projeto
server.get("/projects/:id", checkIfExists, (req, res) => {
  const { id } = req.params;
  const project = projects.find(project => project.id == id);

  return res.json(project);
});

//Adicionar um projeto
server.post("/projects", (req, res) => {
  const { title } = req.body;

  projects.push({ id: count, title, tasks: [] });
  count++;

  return res.json(projects);
});

//Adicionar tarefas a um projeto
server.post("/projects/:id/tasks", checkIfExists, (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  const project = projects.find(project => project.id == id);

  project.tasks.push(task);

  return res.json(project);
});

//Atualizar um projeto
server.put("/projects/:id", checkIfExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(title => title.id == id);

  project.title = title;
  project.id = parseInt(project.id);

  return res.json(project);
});

//Deleta um projeto
server.delete("/projects/:id", checkIfExists, (req, res) => {
  const { id } = req.params;

  const projectId = projects.findIndex(project => project.id == id);

  projects.splice(projectId, 1);

  return res.json({ message: "Projeto deletado com sucesso" });
});

//Deleta o primeiro item das tarefas
server.delete("/projects/:id/tasks", checkIfExists, (req, res) => {
  const { id } = req.params;

  const project = projects.find(project => project.id == id);

  const removed = project.tasks.shift();

  return res.json({ message: `A tarefa ${removed} foi removida da lista` });
});

server.listen(3000);
