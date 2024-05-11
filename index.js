const { exit } = require("process");
const ask = require("./ask");
const classificadorHeroi = require("./classificadorHeroi");

async function classificarHero() {
  const nome = await ask("Qual o nome do Herói?\n");
  const nivel = await ask("Qual o nível do Herói?\n");

  classificadorHeroi(nome, Number(nivel));
  exit();
}

classificarHero();
