/* 
    Exemplo:
*/

function retornaFuncao(nome){
    return function(){
        return nome;        
    };
}

const funcao = retornaFuncao('Edinei');
const funcao2 = retornaFuncao('Pedro');
console.dir(funcao);
console.dir(funcao2);

//###########################