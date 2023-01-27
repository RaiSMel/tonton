
// CRIANDO UM MODAL DE CADA ITEM QUE É ABERTO


const brinquedos = document.querySelectorAll('.brinquedo');
const modalBrinquedo = document.querySelector('.modal__brinquedo');

brinquedos.forEach( brinquedo => {
    brinquedo.addEventListener('click' ,(event) => {
        var selecionado = null;
        let verificador = false;

        if(event.target.parentElement.classList[0] == 'brinquedos'){
            selecionado = event.target
        }
        else if(event.target.parentElement.classList[0] == 'brinquedo__container') {
            selecionado = event.target.parentElement.parentElement
        }
        else{
            selecionado = event.target.parentElement
        }

        modalBrinquedo.classList.add('aberto')
        document.documentElement.style.overflow = 'hidden'
        console.log(selecionado.children[0].alt)

    })
})

modalBrinquedo.addEventListener('click', () =>{
    modalBrinquedo.classList.remove('aberto')
    document.documentElement.style.overflow = 'visible'
})


// Carrosel para brinquedos do verão

// variaveis a serem utilizadas

const proximo = document.querySelectorAll('.proximo-item');
const container = document.querySelector('.brinquedos');
var itemAtual = 0;

// metodo para fazer a transição entre os itens

proximo.forEach((proximo) => {
    proximo.addEventListener('click', (evento) =>{

        let direcao = evento.target.classList.contains('proximo-esquerda');

        if(direcao){
            itemAtual = itemAtual - 1;
        }else{
            itemAtual = itemAtual + 1;
        }

        if( itemAtual < 0  ){
            itemAtual = brinquedos.length -1 ;
        }
        if(itemAtual > brinquedos.length -1){
            itemAtual = 0;
        }
 
        brinquedos[itemAtual].scrollIntoView({
            inline: "center",
            behavior : "smooth",
        })

    })
})
