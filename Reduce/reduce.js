// Encontrar um valor cumulativo concatenado com base em elementos de todo Array.

const rockets = [
    {
        country: 'Brasil',
        launches: 5
    },
    {
        country: 'China',
        launches: 24
    },
    {
        country: 'Canadá',
        launches: 10
    },
    {
        country: 'Rússia',
        launches: 32
    }
];

const totalLaunches = rockets.reduce((prevVal, elem) => prevVal + elem.launches, 0);
// Params: (valor anterior - %, elemento/valor atual - $) => % + $.launches, valor inicial para soma (opcional);

console.log(totalLaunches);