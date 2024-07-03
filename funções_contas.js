var result = 0;

function contas(num1, num2) {
  console.log(`Qual operação deseja realizar entre `+ num1 + ` e ` + num2 + `
    ADIÇÃO ( + )
    SUBTRAÇÃO( - )
    MULTIPLICAÇÃO( * )
    DIVISÃO( ÷ )
    PORCENTAGEM( % )`);
}

function adição(valor1, valor2) {
  result = valor1 + valor2;
  return result;
}

function subtração(valor1, valor2) {
  result = valor1 - valor2;
  return result;
}

function multiplicação(valor1, valor2) {
  result = valor1 * valor2;
  return result;
}

function divisão(valor1, valor2) {
  result = valor1 / valor2;
  return result;
}

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


