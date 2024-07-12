// Define a função somar, que recebe dois parâmetros e retorna a soma deles
function somar(a, b) {
    return a + b;
}

// Define a função subtrair, que recebe dois parâmetros e retorna a subtração do primeiro pelo segundo
function subtrair(a, b) {
    return a - b;
}

// Define a função multiplicar, que recebe dois parâmetros e retorna o produto deles
function multiplicar(a, b) {
    return a * b;
}

// Define a função dividir, que recebe dois parâmetros
// Se o segundo parâmetro (b) for zero, retorna uma mensagem de erro para evitar divisão por zero
// Caso contrário, retorna a divisão do primeiro parâmetro pelo segundo
function dividir(a, b) {
    if(b === 0) {
        return 'Erro: Divisão por zero';
    } else {
        return a / b;
    }
}

// Define a função exponencial, que recebe dois parâmetros
// Utiliza a função Math.pow do JavaScript para retornar o primeiro parâmetro elevado à potência do segundo
function exponencial(a, b) {
    return Math.pow(a, b);
}