const prompt = require("prompt-sync")();
const funcoes = require("./funções_contas.js");

var num1 = prompt("Digite o primeiro valor: ");
var num2 = prompt("Digite o segunda o valor: ");

num1 = Number(num1);
num2 = Number(num2);

while (isNaN(num1) || isNaN(num2)) {
    console.log("\nValores inválidos");
    if (isNaN(num1)) {
      num1 = Number(prompt("Digite um novo valor para o primeiro número: "));
    } else if (isNaN(num2)) {
      num2 = Number(prompt("Digite um novo valor para o segundo número: "));
    }
  }
  
const operacao = prompt(funcoes.contas(num1, num2));
