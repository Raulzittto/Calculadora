var result = 0;
const prompt = require("prompt-sync")();

function contas(num1, num2) {
  console.log(`\nQual operação deseja realizar entre `+ num1 + ` e ` + num2 + `
    ADIÇÃO ( + )
    SUBTRAÇÃO( - )
    MULTIPLICAÇÃO( * )
    DIVISÃO( ÷ )
    PORCENTAGEM( % )`);
}

//Função que realiza a operação de adição
function adição(valor1, valor2) {
  result = valor1 + valor2;
  return result;
}

//Função que realiza a operação de subtração
function subtração(valor1, valor2) {
  result = valor1 - valor2;
  return result;
}

//Função que realiza a operação de multiplicação
function multiplicação(valor1, valor2) {
  result = valor1 * valor2;
  return result;
}

//Função que realiza a operação de divisão
function divisão(valor1, valor2) {
  result = valor1 / valor2;
  return result;
}

//Função que realiza a operação de porcentagem
function porcentagem(valor1, valor2) {
  result = valor1 / 100;
  result = result * valor2;
  return result;
}

module.exports = {
  contas,
  adição,
  subtração,
  multiplicação,
  divisão,
  porcentagem,
};


