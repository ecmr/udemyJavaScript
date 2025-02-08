// Declaração de função (function hoisting)
/*
    É quando pode declara a função depois de ser usada
    ou seja, pode ter a linha chamando a função
    e depois dessa linha em qq lugar, a sua criação
*/
console.clear;

FalarOi();
/*
*
*
*/
function FalarOi(){
    console.log('OI');
}

/*
    First-class objects (objetos de primeira classe)
    function expression
    Usar uma function como um objeto
*/
const meuObjetoFunction = function(){
    console.log('Sou um Objeto');
};

//chamada simples
meuObjetoFunction();

//Abaixo, da para criar uma função que recebe uma função como
//parametro
function executaFuncao(funcao){
    console.log('vou executar a função recebida!');
    funcao();
}

executaFuncao(meuObjetoFunction);

// Arrow function

const arrowFunction = () => {
    console.log('Sou uma arrow function');
};

arrowFunction();

// Dentro de um objeto
const obj = {
    falar: function() {
        console.log('Estou falando...');
    }
};

obj.falar();

