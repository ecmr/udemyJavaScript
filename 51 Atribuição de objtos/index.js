const pessoa= {
    nome: 'Anna',
    Sobrenome: 'Menezes',
    idade: 18,
    endereco:{
        rua: 'João Passos',
        numero: 1431
    }
};

//atribuição via desestruturação
const {nome = '', Sobrenome, idade, endereco} = pessoa;
console.log(`Nome da pessoa é ${nome} ${Sobrenome}, 
    sua idade atual é ${idade} 
    e mora na rua ${endereco.rua},${endereco.numero}`);