let i = 0;
let nome = 'Edinei';
const min = 1;
const max = 50;

while (i <= nome.length) {
    console.log(nome[i]);
    i++;
}

do {
    console.log(i);
    i++;
} while (i <= 20);

console.log(`Segue a vida!`);

function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let rand = random(min,max);

while (rand !== 10){
    rand = random(min, max);
    console.log(rand);
}

console.log(`Achei o número ${rand}`);