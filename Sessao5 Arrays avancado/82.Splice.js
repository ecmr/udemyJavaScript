/*
    Splice: pode remover itens de array
    exemplo: arr.splice(indice, idDeletar, ele1, ele2...);
 */
const nomes = ['Edinei', 'Bárbara','Ineida','Anna','Pedro','Kaique'];

//Remove Ineida
const removidos = nomes.splice(2,1);
console.log(`Havia: ${nomes}, foi removido ${removidos}`);

//Agora vamos adicionar novamente a Ineida, mas agora no incío, indice 0
const addNome = nomes.splice(0,0, 'Ineida');
console.log(`Ineida foi adicionada novamente, agora ficou: ${nomes}`);

//Agora vamos remover Pedro e Kaique, adicionando Joao e Maria
const trocaNomes = nomes.splice(4,2, 'João', 'Maria');
console.log(`Trocamos os nomes, agora ficou: ${nomes}`);