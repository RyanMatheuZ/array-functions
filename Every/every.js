// Conferir se todos os elementos do Array passam por um teste específico, retorna um resultado Booleano.

const persons = [
    {
        id: 1,
        name: 'João',
        age: 10
    },
    {
        id: 2,
        name: 'Maria',
        age: 17
    },
    {
        id: 3,
        name: 'Carlos',
        age: 18
    },
    {
        id: 4,
        name: 'Fernanda',
        age: 6
    },
    {
        id: 5,
        name: 'Joaquim',
        age: 29
    }
];

const areAllAdults = persons.every(person => person.age > 17);

if (areAllAdults) console.log('Todos são maiores de idade!');
else console.log('Todos NÃO são maiores de idade!');