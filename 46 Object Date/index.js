//const tresHoras = 60 * 60 * 3 * 1000;
//const data = new Date(0 + tresHoras);
//const data = new Date('2025-01-11 11:47:59.100');
/*
const data = new Date(1736607111002);
console.log(data.toString());
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Mile', data.getMilliseconds());
console.log('Dia Semana', data.getDay());
//console.log(data.toString());
console.log(Date.now());
*/


const data = new Date();
const hoje = dataHoraBrasil(data);
console.log(hoje);



function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}


function dataHoraBrasil(data){
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = data.getFullYear();
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}