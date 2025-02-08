//...rest [pega o restante do array que não foi selecionado]
//--spread []

const numeros = [10,20,30,40,50,60,70,80,90,100];
const [um,dois, tres, quatro,...resto] = numeros;

console.log(um, dois, tres, quatro);
console.log(resto);

// Array de array
const numerosArr = [[100,200,300],[400,500,600],[700,800,900]];
console.log(numerosArr[1][1]);