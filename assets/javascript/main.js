
import { criarContainer, criarTitulo, criarZoomImagem } from "./criarProdutos.js";
import { adicionarProduto, alugarProduto,verificarCompras } from "./alugarProdutos.js";
import { imprime } from './cabecalho.js'

const brinquedos = [];
const doc = document.querySelector('.conteudo')
fetch("https://raw.githubusercontent.com/RaiSMel/produtos.github.io/main/produtos.json").then(
  response => response.json()).then(async (itens) => {

    console.log(itens.filter(obj => {
      
        return obj.descricao?.includes('infantil');
    }))

    doc.appendChild(criarTitulo('Brinquedos Disponiveis para locação'))
    doc.appendChild(criarContainer(itens.slice(0, itens.length/3)))
    doc.appendChild(criarContainer(itens.slice(itens.length/3, (itens.length/3)*2 )))
    doc.appendChild(criarContainer(itens.slice((itens.length/3)*2, itens.length )))
  
    await $('.slider-js').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 611,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    criarZoomImagem('produto')
    alugarProduto()
    adicionarProduto()
    verificarCompras()
  })

  imprime()