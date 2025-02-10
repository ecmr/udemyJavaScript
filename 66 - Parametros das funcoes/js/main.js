/*  as functions simples possuem "arguments" por default
    mesmo que a function criada não tenha parametro
    quando passar na chamada, ele não fará nada a menos que 
    trate o arguments
*/

function funcaoSimples(){
    console.log('ação sem parametro');
    //tratamento dos argumentos recebidos
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(`Total de argumentos recebidos > ${arguments.length} 
                 +\n Somatória = ${total}`);
}
//não passando nada
funcaoSimples();
//passando valores, neste caso, números
funcaoSimples(4,5,8,9,6);

/*********************************************** 
 ***********************************************/
// Agora quando usa parametros e passar menos que ela espera
function funcaoCom4Parametros(a,b,c,d){
    console.log(a,b,c,d);
}

//passando 2 parametros
funcaoCom4Parametros('Edinei', 5);

/*********************************************** 
 ***********************************************/

// valor defalt
function funcaoValorDefault(a,b,c=2) {
    console.log(a+b+c);
}

funcaoValorDefault(4,6);

/*********************************************** 
 ***********************************************/
// Outro exemplo que usa rest operator: sempre o ultimo parametro
const conta = function(operador, acumulador, ...numeros){
    for (let numero of numeros) {
        if(operador == '+') acumulador += numero;
        if(operador == '-') acumulador -= numero;
        if(operador == '/') acumulador /= numero;
        if(operador == '*') acumulador *= numero;
    }
    console.log(acumulador);
};

conta('+', 1, 20,30,40,50);
conta('-', 500, 20,30,40,50);
conta('/', 500, 20,30,40,50);
conta('*', 3, 20,30,40,50);

