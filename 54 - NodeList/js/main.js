const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

//Pega todos os estilos que foi carregado no body
const estilosBody = getComputedStyle(document.body);
const backGroundColorBody = estilosBody.backgroundColor;

console.log(backGroundColorBody);

const pAll = document.querySelectorAll('p');

for (let p of pAll) {
    console.log(p);
    p.style.backgroundColor = backGroundColorBody;
    p.style.color = '#FFFFFF';
}