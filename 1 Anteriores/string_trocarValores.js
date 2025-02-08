alert('Alert com uma mensagem');
let vNome = prompt('Qual seu nome?');
let vIdade = window.prompt('E sua idade?');
alert(`Então seu nome e ${vNome} e sua idade e ${vIdade}`);

//trocando valores das variaveis

let varA = 'A';
let varB = 'B';
let varC = 'C';

alert(`VarA tem valor ${varA} , VarB tem valor ${varB} e VarC tem valor ${varC}`);

[varA, varB, varC] = [varB, varC, varA]


alert(`Agora, VarA tem valor ${varA} , VarB tem valor ${varB} e VarC tem valor ${varC}`);
