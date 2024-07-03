const prompt = require("prompt-sync")();
const funcoes = require("./funções_contas.js");

var num1 = prompt("Digite o primeiro valor: ");
var num2 = prompt("Digite o segunda o valor: ");

//Transforma a string em Number
num1 = Number(num1);
num2 = Number(num2);

//Verifica se de fato foram digitados dois números
while (isNaN(num1) || isNaN(num2)) {
  console.log("\nValores inválidos");
  if (isNaN(num1)) {
    num1 = Number(prompt("Digite um novo valor para o primeiro número: "));
  } else if (isNaN(num2)) {
    num2 = Number(prompt("Digite um novo valor para o segundo número: "));
  }
}

// Mostra o menu de escolha das operações
funcoes.contas(num1, num2);

var escolha_conta = prompt("\nDigite sua resposta: ");

//Verifica se a operação escolhida é valida
var operacoesValidas = [
  "+",
  "adição",
  "ADIÇÃO",
  "-",
  "subtração",
  "SUBTRAÇÃO",
  "*",
  "multiplicação",
  "MULTIPLICAÇÃO",
  "/",
  "divisão",
  "DIVISÃO",
  "%",
  "porcentagem",
  "PORCENTAGEM",
];

while (!operacoesValidas.includes(escolha_conta)) {
  console.log("Digite uma operação válida!");
  escolha_conta = prompt("\nDigite sua resposta: ");
}

switch (escolha_conta) {
  case "+":
  case "adição":
  case "ADIÇÃO":
    console.log(funcoes.adição(num1, num2));
    break;
  case "-":
  case "subtração":
  case "SUBTRAÇÃO":
    console.log(funcoes.subtração(num1, num2));
    break;
  case "*":
  case "multiplicação":
  case "MULTIPLICAÇÃO":
    console·log(funcoes.multiplicação(num1, num2));
    break;
  case "/":
  case "divisão":
  case "÷":
  case "DIVISÃO":
    console.log(funcoes.divisão(num1, num2));
    break;
  case "%":
  case "porcentagem":
  case "PORCENTAGEM":
    console.log(funcoes.porcentagem(num1, num2));
    break;
}
