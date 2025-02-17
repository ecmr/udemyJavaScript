/* 
    yield 'valor' retorna conforme é chamado
    Exemplo:
*/

function* geradora1(){
    //código qualquer...
    yield 'Valor 1';
    //código qualquer...
    yield 'Valor 2';
    //código qualquer...
    yield 'Valor 3';        
}

//agora um gerador infinito

function* geradora2(){
    let i = 0;
    while(true){
        yield i;
        i++;
    }
}

/*
const g1 = geradora1();
//chama apenas o primeiro
console.log(g1.next().value);
//chama novamente, o próximo
console.log(g1.next().value);
console.log(g1.next());
console.log(g1.next());
*/

const g2 = geradora2();
//vai retornar valor sempre que for chamado
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
