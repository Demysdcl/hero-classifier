const readline = require("readline");
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ler(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(`${questionText}\n`, resolve);
  });
}

module.exports = ler;
