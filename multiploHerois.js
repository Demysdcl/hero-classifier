const classificadorHeroi = require("./classificadorHeroi");

function getRandomLevel(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const herois = [
  "Superman",
  "Batman",
  "Wonder Woman",
  "Spider-Man",
  "Iron Man",
  "Captain America",
  "Thor",
  "Black Widow",
  "Hulk",
  "Flash",
].forEach((nome) => classificadorHeroi(nome, getRandomLevel(0, 20000)));
