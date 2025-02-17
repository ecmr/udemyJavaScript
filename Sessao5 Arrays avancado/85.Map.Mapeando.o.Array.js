/*
    Dobre os números
*/

const numeros = [5,50,80,1,2,3,4,5,6,7,11,15,22,27];
const numerosEmDobro = numeros.map(valor => valor * 2);

//console.log(numerosEmDobro);

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'LetÃ­cia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

// Pegando apenas a idade
const idades = pessoas.map(obj => ({idade: obj.idade}));
//console.log(idades);

// Adicionando ID no novo array
// o objeto pessoas agora foi alterado e tem nova propriedade
/*
const arrComId = pessoas.map(function(obj, indice){
    obj.id = (indice + 1) * 13;
    return obj;
});

console.log(arrComId);
*/

// adicionando indice, mas criando outro obj
const arrComId = pessoas.map(function(obj, indice){
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
});
console.log(pessoas);
//console.log(arrComId);