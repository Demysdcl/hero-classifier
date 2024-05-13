const { exit } = require("process");
const ler = require("../utils/ler");
const calcularPartidas = require("./calculadora");

async function main() {
  const partidas = await ler("Qual a quantidade de partidas do heroi?");
  calcularPartidas(Number(partidas));
  exit();
}

main();
