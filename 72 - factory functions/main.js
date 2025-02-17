/* 

    Exemplo:
*/

function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        fala: function(assunto){
            return `${this.nome} está ${assunto}.`;
        }
    };
}

const p1 = criaPessoa('Edinei', 'Menezes');
const p2 = criaPessoa('Bárbara', 'Reis Menezes');

console.log(p1.fala('falando sobre JS'));
console.log(p2.fala('falando sobre JS'));