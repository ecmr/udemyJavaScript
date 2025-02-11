/* 
    IIFE - Immediately invoked function expression
    Exemplo:
*/

(function(idade, peso, altura) {

    const sobreNome = 'Menezes';
    function criaNome(nome) {
        return nome + ' Corrêa de ' + sobreNome;
    }

    function MostraNome() {
        console.log(criaNome('Edinei'));
    }

    MostraNome();
    console.log(idade, peso, altura);
})(47, 80, 1.89);