module.exports = function countRequest(req, res, next) {
  console.count("Requisicoes a API");
  return next();
};
