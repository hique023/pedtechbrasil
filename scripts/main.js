let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if (meuSrc === 'imagens/logo.png') {
        minhaImagem.setAttribute('src', 'imagens/logo2.png');
    } else {
        minhaImagem.setAttribute('src', 'imagens/logo.png');
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    if (!meuNome || meuNome === null) {
        defineNomeUsuario();
    } else {
        localStorage.setItem('nome', meuNome);
        meuCabecalho.innerHTML = 'P&Dtech Brasil é tudo de bom, ' + meuNome;
    }
}

if (!localStorage.getItem('nome')) {
    defineNomeUsuario();
} else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'P&Dtech Brasil é tudo de bom, ' + nomeGuardado;
}

meuBotao.onclick = function() {
    defineNomeUsuario();
}