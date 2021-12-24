// Percorre cada elemento do Array e executa uma função para cada um.

const fahrenheit = [101, 98, 130, 70, 54];

const celsius = fahrenheit.map(temp => (temp - 32) / 1,8);

console.log(celsius);