document.addEventListener('DOMContentLoaded', function () {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

    botaoDeAcessibilidade.addEventListener('click', function () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista')

        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !botaoSelecionado)
    })

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    const alternaContraste = document.getElementById('alterna-contraste')

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })

    diminuiFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })

    alternaContraste.addEventListener('click', function () {
        document.body.classList.toggle('alto-contraste')
    })


})
// Carrossel automático de vocalistas
const vocalistas = [
    {
        nome: 'Alex Terrible',
        banda: 'Slaughter to Prevail',
        imagem: 'img/Alex Terrible.png',
        alt: 'Alex Terrible, vocalista da banda Slaughter to Prevail'
    }
];

const imagemVocalista = document.getElementById('imagem-vocalista');
const infoVocalista = document.getElementById('info-vocalista');

let vocalistaAtual = 0;

function trocarVocalista() {

    imagemVocalista.classList.add('trocando');
    infoVocalista.classList.add('trocando');

    setTimeout(() => {

        vocalistaAtual++;

        if (vocalistaAtual >= vocalistas.length) {
            vocalistaAtual = 0;
        }

        const vocalista = vocalistas[vocalistaAtual];

        imagemVocalista.src = vocalista.imagem;
        imagemVocalista.alt = vocalista.alt;

        infoVocalista.querySelector('h3').textContent = vocalista.nome;
        infoVocalista.querySelector('p').textContent = vocalista.banda;

        imagemVocalista.classList.remove('trocando');
        infoVocalista.classList.remove('trocando');

    }, 800);
}

// Carrossel da galeria
const imagensGaleria = [
    {
        imagem: 'img/SlaughterToPrevail.jpg',
        titulo: 'Slaughter to Prevail',
        descricao: 'Banda de Deathcore conhecida por seus vocais extremos e breakdowns pesados.',
        alt: 'Integrantes da banda Slaughter to Prevail usando máscaras assustadoras'
    },
    {
        imagem: 'img/SuicideSilence.jpg',
        titulo: 'Suicide Silence',
        descricao: 'Uma das bandas mais importantes da história do Deathcore.',
        alt: 'Integrantes da banda Suicide Silence em um campo aberto'
    },
    {
        imagem: 'img/BringMeTheHorizon.jpg',
        titulo: 'Bring Me The Horizon',
        descricao: 'Banda britânica que passou por diferentes fases e influências dentro do metalcore e metal extremo.',
        alt: 'Integrantes da banda Bring Me The Horizon'
    },
    {
        imagem: 'img/WhiteChapel.png',
        titulo: 'Whitechapel',
        descricao: 'Banda conhecida por seu Deathcore pesado e atmosfera sombria.',
        alt: 'Integrantes da banda Whitechapel vestidos com roupas escuras'
    }
];

const imagemGaleria = document.getElementById('imagem-galeria');
const tituloGaleria = document.getElementById('titulo-galeria');
const descricaoGaleria = document.getElementById('descricao-galeria');

const botaoAnteriorGaleria = document.getElementById('anterior-galeria');
const botaoProximaGaleria = document.getElementById('proxima-galeria');

const indicadoresGaleria = document.querySelectorAll('.indicador-galeria');

let imagemAtualGaleria = 0;
let intervaloGaleria;


function mostrarImagemGaleria(indice) {

    imagemAtualGaleria = indice;

    imagemGaleria.classList.add('trocando');

    setTimeout(() => {

        const imagem = imagensGaleria[imagemAtualGaleria];

        imagemGaleria.src = imagem.imagem;
        imagemGaleria.alt = imagem.alt;

        tituloGaleria.textContent = imagem.titulo;
        descricaoGaleria.textContent = imagem.descricao;

        indicadoresGaleria.forEach((indicador, index) => {
            indicador.classList.toggle(
                'ativo',
                index === imagemAtualGaleria
            );
        });

        imagemGaleria.classList.remove('trocando');

    }, 500);
}


function proximaImagemGaleria() {

    let proxima = imagemAtualGaleria + 1;

    if (proxima >= imagensGaleria.length) {
        proxima = 0;
    }

    mostrarImagemGaleria(proxima);
}


function imagemAnteriorGaleria() {

    let anterior = imagemAtualGaleria - 1;

    if (anterior < 0) {
        anterior = imagensGaleria.length - 1;
    }

    mostrarImagemGaleria(anterior);
}


function iniciarCarrosselGaleria() {

    clearInterval(intervaloGaleria);

    intervaloGaleria = setInterval(() => {
        proximaImagemGaleria();
    }, 6000);
}


botaoProximaGaleria.addEventListener('click', () => {
    proximaImagemGaleria();
    iniciarCarrosselGaleria();
});


botaoAnteriorGaleria.addEventListener('click', () => {
    imagemAnteriorGaleria();
    iniciarCarrosselGaleria();
});


indicadoresGaleria.forEach((indicador, index) => {

    indicador.addEventListener('click', () => {
        mostrarImagemGaleria(index);
        iniciarCarrosselGaleria();
    });

});


iniciarCarrosselGaleria();

setInterval(trocarVocalista, 6000);
ScrollReveal().reveal('#inicio', { delay: 500 });
ScrollReveal().reveal('#deathcore', { delay: 500 });
ScrollReveal().reveal('#galeria', { delay: 500 });
ScrollReveal().reveal('#contato', { delay: 500 });
ScrollReveal().reveal('#noticias', { delay: 500 });