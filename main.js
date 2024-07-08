console.log("_____CALCULADORA BÁSICA_____\n");

const prompt = require("prompt-sync")();
const funcoes = require("./funções_contas.js");

var num1 = prompt("Digite o primeiro valor: ");
var num2 = prompt("Digite o segunda o valor: ");

// Transforma a string em Number
num1 = Number(num1);
num2 = Number(num2);

// Verifica se de fato foram digitados dois números
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

// Escolha de operação
var escolha_conta = prompt("\nDigite sua resposta: ");

// Verifica se a operação escolhida é valida
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

while (!operacoesValidas.includes(escolha_conta.toLocaleLowerCase() )) {
  console.log("Digite uma operação válida!");
  escolha_conta = prompt("\nDigite sua resposta: ");
}

// Realiza a chamada das funções e faz as contas
switch (escolha_conta.toLocaleLowerCase()) {
  case "+":
  case "adição":
    console.log(num1 + " mais " + num2 + " será: ");
    console.log(funcoes.adição(num1, num2));
    break;
  case "-":
  case "subtração":
    console.log(num1 + " menos " + num2 + " será: ");
    console.log(funcoes.subtração(num1, num2));
    break;
  case "*":
  case "multiplicação":
    console.log(num1 + " multiplicado por " + num2 + " será: ");
    console.log(funcoes.multiplicação(num1, num2));
    break;
  case "/":
  case "divisão":
  case "÷":
    if (num2 == 0) {
      console.log("matematicamente impossível realizar uma divisão por 0");
      break;
    }
    console.log(num1 + " dividido por " + num2 + " será: ");
    console.log(funcoes.divisão(num1, num2));
    break;
  case "%":
  case "porcentagem":
    console.log(num1 + "% de " + num2 + " será:");
    console.log(funcoes.porcentagem(num1, num2));
    break;
    default:
        console.log("Operação Inválida!")
}
