// Quando for preciso saber se um Array possui determinado valor/elemento, retorna um resultado Booleano.

const names = [
    'Linus',
    'Bill',
    'Ryan',
    'Adam'
];

const foundName = names.includes('Ryan');

if (foundName) console.log('Ryan está incluído na lista!');
else console.log('Ryan NÃO está incluído lista!');