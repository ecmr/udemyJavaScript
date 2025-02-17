/*
    Soma de todos os números (reduce)
*/

const numeros = [5,50,80,1,2,3,4,5,6,7,11,15,22,27];

// retorna a somatoria de valor
const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    return acumulador;
}, 0);

//console.log(total);

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'LetÃ­cia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

// retorna o mais velho
const MaisVelho = pessoas.reduce(function(acumulador, valor){
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(MaisVelho);

