const classificadorHeroi = require("./classificadorHeroi");
const numerosDinamicos = require("../utils/numerosDinamicos");
const nomeHerois = require("../utils/nomeHerois");

nomeHerois.forEach((nome) =>
  classificadorHeroi(nome, numerosDinamicos(0, 20000))
);
