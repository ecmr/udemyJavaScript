/*
    Filter: Sempre retorna um array, com a mesma quantidade de elementos ou menos

*/

/*
const arrNumeros = [2,4,6,9,0,3,5,11,12,13,14];

function callbackFilter(valor, indice, array){
    return valor > 10;
}

//calbackfilter
const arrFiltrado = arrNumeros.filter(callbackFilter);

//também é usado assim
const arrFiltrado = arrNumeros.filter(function(valor){
    return valor > 10;
});


// Também é usado com arrow function
const arrFiltrado = arrNumeros.filter((valor) =>{
    return valor > 10;
});

console.log(arrFiltrado);

// Também é usado como função de callback
const arrFiltrado2 = arrNumeros.filter(valor => valor > 10);

console.log(arrFiltrado2);

// Mostrando os valores de cada parametro
const arrFiltrado3 = arrNumeros.filter((valor, indice, array) =>{
    console.log(indice, valorm array);
    return valor > 10;
});

*/

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

// Retorna nomes acima de 5 caracteres
//const nomeMaisDeCinco = pessoas.filter( valor => valor.nome.length > 5);
//console.log(nomeMaisDeCinco);

// Retorna nomes acima de 5 caracteres
//const idadeMaiorDe = pessoas.filter(valor => valor.idade > 30);

// console.log(idadeMaiorDe);

// Retorna nomes terminando com a
const terminamComA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'));
console.log(terminamComA);

