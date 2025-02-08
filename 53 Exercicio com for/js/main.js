const elementos = [
    {tag: 'p', texto: 'Qualquer coisa que eu quiser.'},
    {tag: 'div', texto: 'Texto novamente.'},
    {tag: 'section', texto: 'Novamente texto.'},
    {tag: 'footer', texto: 'Casiuds Mussum.'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);    
}

container.appendChild(div);

