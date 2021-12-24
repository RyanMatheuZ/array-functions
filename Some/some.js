// Testar se pelo menos um elemento do Array passa por um teste específico, retorna um resultado Booleano.

const team = [
    {
        id: 1,
        name: 'Lewis Hamilton',
        pilot: true
    },
    {
        id: 2,
        name: 'Maradona',
        pilot: false
    },
    {
        id: 3,
        name: 'Valtteri Bottas',
        pilot: true
    },
    {
        id: 4,
        name: 'Pelé',
        pilot: false
    },
    {
        id: 5,
        name: 'Rogério Ceni',
        pilot: false
    }
];

const areTherePilots = team.some(team => team.pilot);

if (areTherePilots) console.log('Existem pilotos no time!');
else console.log('NÃO existem pilotos no time!');