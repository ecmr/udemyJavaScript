/* Escopo lexico
    É quando uma função pode usar uma variável
    de fora do seu scopo
    Exemplo:
*/

const nome = 'João';

function mostraNome(){
    console.log(nome);
}

mostraNome();

//###########################