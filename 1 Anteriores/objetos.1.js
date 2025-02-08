const pessoa = {
    nome: 'Edinei',
    sobrenome: 'Menezes',
    idade: 47,

    fala(){
        console.log(`tenho ${this.idade} anos, estou ficando velho.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};


pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();