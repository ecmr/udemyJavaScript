// captura evento do submit do form
const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let peso = e.target.querySelector('#peso').value;
    
    if (!Number(peso)){
        MostrarResultado('Corriga o peso', false);
        return;
    }
    
    let altura = document.querySelector('#altura').value;
    
    if (!Number(altura)){
        MostrarResultado('Corriga a altura', false);
        return;
    }

    let imc = getImc(peso, altura); 

    const resultadoFinal = `Seu IMC é de ${imc}<br> ${getNivelImc(imc)}`;

    MostrarResultado(resultadoFinal, true);
});

function criaParagrafo(){
    const p = document.createElement('p');
    return p;
}

function getImc(peso, altura){
    return (peso / altura ** 2).toFixed(2);
}

function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    
    if (Number(imc) < 18.5)
        return nivel[0];
    if (Number(imc) >= 18.5 && Number(imc) <= 24.9)
        return nivel[1];
    if (Number(imc) > 24.9 && Number(imc) <= 29.9)
        return nivel[2];    
    if (Number(imc) > 29.9 && Number(imc) <= 34.9)
        return nivel[3];
    if (Number(imc) > 34.9 && Number(imc) <= 39.9)
        return nivel[4];
    if (Number(imc) > 40)
        return nivel[5];        
}

function MostrarResultado(msg, valido){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    
    const p = criaParagrafo();
    if (valido)
        p.classList.add('paragrafo-resultado');
    else
        p.classList.add('bad');

    p.innerHTML = msg;
    resultado.appendChild(p);
}