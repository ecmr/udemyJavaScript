
/* --------------------------------
    Retornar maior de dois números
   --------------------------------
*/

//Básica
function MaiorDeDois (num1, num2){
    if (num1 > num2)
        return num1;
    else if (num2 > num1)
        return num2;
    else if (num1 === num2)
        return "São iguais";
}

console.clear();
console.log (`function basica : ${MaiorDeDois(2,2)}`);
console.log('\n');

//Eron function
const max2 = (x, y) => x > y ? x : y;
console.log(`earon function : ${max2(4,6)}`);
console.log('\n');
// --------------------------------

/* ---------------------------------------------------
    Retornar true se a imagem estiver no modo paisagem
   ---------------------------------------------------
*/

const ePaisagem = (largura, altura) => largura > altura;
console.log(`A imagem de 1080x1920 é paisagem? ${ePaisagem(1080, 1920)}`);
console.log('\n');

// --------------------------------

/* ---------------------------------------------------
    Escreva uma função que recebe um número e retorne o seguinte:
    Número é divisivel por 3 = Fizz
    Número é divisivel por 5 = Buzz
    Número é divisivel por 3 e 5 = FizzBuzz
    Número NÃO é divisivel por 3 e 5 = Retorna o próprio número 
    Chegar se o número não é relamente um número, retorna o próprio
    use a função com valores de 0 a 100
   ---------------------------------------------------
*/

function fizzBuzz(x){
    if (typeof x !== 'number') return x;
    if (x % 3 === 0) return '\nSim';
    else if (x % 5 === 0) return '\nSim';
    else if (x % 3 === 0 && x % 5 === 0) return 'fizzBuzz';
    return '\nNão';
} 

for (let index = 0; index <= 100; index++) {
    console.log(`Número ${index} é divisível por 3 e/ou 5 ${fizzBuzz(index)}`);
}

console.log('\n');

// --------------------------------

/* ---------------------------------------------------
    
   ---------------------------------------------------
*/