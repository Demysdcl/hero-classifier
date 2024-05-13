const calcularPartidas = require("./calculadora");
const numerosDinamicos = require("../utils/numerosDinamicos");

new Array(20).fill(0).forEach(() => {
  calcularPartidas(numerosDinamicos(0, 200));
});
