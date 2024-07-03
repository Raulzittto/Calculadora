var result = 0;

function contas(){
    console.log(`Qual operação deseja realizar?
    ADIÇÃO ( + )
    SUBTRAÇÃO( - )
    MULTIPLICAÇÃO( * )
    DIVISÃO( ÷ )
    PORCENTAGEM( % )`
        
    )
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
  adição,
  subtração,
  multiplicação,
  divisão,
  porcentagem,
};


console.log(porcentagem( 50, 100))