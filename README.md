# Calculadora Simples

Este projeto consiste em uma calculadora simples implementada com HTML, CSS (Bootstrap) e JavaScript. Ela é capaz de realizar operações básicas como soma, subtração, multiplicação, divisão e exponenciação.

## Como Funciona

A interface do usuário é construída com HTML e Bootstrap para um layout responsivo e estilizado. O usuário pode inserir dois valores numéricos e selecionar uma das operações disponíveis (soma, subtração, multiplicação, divisão ou exponenciação). Ao clicar no botão "Executar", o resultado da operação é exibido na tela.

### Funções JavaScript

O arquivo `script.js` contém as funções responsáveis pelas operações matemáticas:

- `somar(a, b)`: Retorna a soma de `a` e `b`.
- `subtrair(a, b)`: Retorna a subtração de `a` por `b`.
- `multiplicar(a, b)`: Retorna o produto de `a` e `b`.
- `dividir(a, b)`: Retorna a divisão de `a` por `b`. Se `b` for zero, retorna uma mensagem de erro para evitar divisão por zero.
- `exponencial(a, b)`: Retorna `a` elevado à potência de `b`, utilizando a função `Math.pow`.

### Execução da Operação

A função `executar()` é chamada quando o usuário clica no botão "Executar". Ela lê os valores inseridos pelo usuário, determina a operação selecionada e chama a função correspondente. O resultado é então exibido na página.

## Como Usar

1. Abra o arquivo `index.html` em um navegador.
2. Insira os valores nos campos "Valor A" e "Valor B".
3. Selecione a operação desejada no menu dropdown.
4. Clique no botão "Executar" para ver o resultado da operação.

## Tecnologias Utilizadas

- HTML
- CSS (Bootstrap)
- JavaScript

Este projeto é uma demonstração simples de manipulação do DOM com JavaScript e estilização com Bootstrap.
