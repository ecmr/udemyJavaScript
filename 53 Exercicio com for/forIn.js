// Usando for com chaves
const pessoa = {
    nome: 'Edinei',
    sobrenome: 'Correa de Menezes',
    idade: 47
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}
