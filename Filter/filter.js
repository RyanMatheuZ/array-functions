// Remover elementos indesejados com base em alguma condição.

const numbers = [1, 3, 4, 2, 3, 6, 2, 1];

const filteredNumbers = numbers.filter((el, num, arr) => arr.indexOf(el) === num);

console.log(filteredNumbers);