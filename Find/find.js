// Procurar/verificar por um valor dentro de um Array, retorna o primeiro elemento que satisfazer o teste.

const pizzas = [
    'Mussarela', 
    'Calabresa', 
    'Portuguesa', 
    'Catarina'
];

const foundPizza = pizzas.find(pizza => pizza.startsWith('C'));

console.log(`A primeira pizza que começa com "C" é: ${foundPizza}!`);