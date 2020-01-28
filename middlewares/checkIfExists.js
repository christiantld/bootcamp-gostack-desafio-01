const projects = require("../models/projects");

module.exports = function checkIfExists(req, res, next) {
  const { id } = req.params;
  const exists = projects.find(project => project.id == id);

  if (!exists) {
    return res.status(400).json({ error: "O projeto nao existe" });
  }
  return next();
};
