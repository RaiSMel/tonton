import  { criarSessao, criarContainer } from './criarProdutos.js';





const containerCarroseul = document.querySelector('.produtos__container');

containerCarroseul.appendChild(criarContainer([{
    'nome': 'brinquedo',
    'imgSrc': './assets/imagems/piscinaEsc.png',
    'descricao': 'Piscina Inflável com escorregador para piscina de bolinhas',
    'comprimento': '2.30m',
    'largura': '2.00m',
    'altura': '2.00m',
    'valor': '240',
    'id': 1,
}]))

criarSessao()


// CRIANDO UM MODAL DE CADA ITEM QUE É ABERTO

// Carrosel para brinquedos

const brinquedos = document.querySelectorAll('.brinquedo');
const modalBrinquedo = document.querySelector('.modal__brinquedo');
const brinquedosVerao = document.querySelectorAll('.brinquedo-destaque');


modalBrinquedo.addEventListener('click', () => {
    modalBrinquedo.classList.remove('aberto')
    document.documentElement.style.overflow = 'visible';

})


// Carrosel para brinquedos

// variaveis a serem utilizadas

var itemAtual = 0;

// metodo para fazer a transição entre os itens









