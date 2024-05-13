const { exit } = require("process");
const ler = require("../utils/ler");
const classificadorHeroi = require("./classificaHeroi/classificadorHeroi");

async function classificarHero() {
  const nome = await ler("Qual o nome do Herói?");
  const nivel = await ler("Qual o nível do Herói?");

  classificadorHeroi(nome, Number(nivel));
  exit();
}

classificarHero();
