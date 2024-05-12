const modalBrinquedo = document.querySelector('.modal__brinquedo');



const criarBrinquedos = (brinquedo) => {

    let novoBrinquedo = document.createElement('a')
    novoBrinquedo.classList.add('brinquedo')

    novoBrinquedo.innerHTML = `<img class="produto ${brinquedo.id}" role="button" src="https://raw.githubusercontent.com/RaiSMel/produtos.github.io/main/imagens/${brinquedo.id}.jpg" alt="${brinquedo.nome}">
    <h3 class="titulo">${brinquedo.nome}</h3>
    <p class="tamanho">dimensão: ${brinquedo.largura}x${brinquedo.altura}x${brinquedo.comprimento} </p>
    <div class="precos">
    <p class="preco individual">individual<br>R$ ${brinquedo.precoIndividual}</p>
    <p class="preco combo">Em combo <br> R$ ${brinquedo.precoCombo}</p>
    </div>
    <a role="button" class="adicionar ${brinquedo.id}">Adicionar ao carrinho</a> 
    <a role="button" class="alugar ${brinquedo.id}">Alugar agora</a> `;

    novoBrinquedo.classList.add('brinquedo');

    return novoBrinquedo

}


export const criarContainer = (brinquedos) => {

    const categoriaBrinquedos = document.createElement('div');
    categoriaBrinquedos.classList.add('slider-js')
    categoriaBrinquedos.classList.add('slider')

   

    brinquedos.forEach(brinquedo => {
        categoriaBrinquedos.appendChild(criarBrinquedos(brinquedo));

    });


    return categoriaBrinquedos;

}

export const criarTitulo = (titulo) => {

    let tituloBrinquedos = document.createElement('h2');
    tituloBrinquedos.classList.add('titulo__principal')
    tituloBrinquedos.innerHTML =titulo
    

    return tituloBrinquedos
}

export const criarZoomImagem = (item) => {

    let modal = document.querySelector('.modal__brinquedo');
    let imagens = document.querySelectorAll(`.${item}`);

    imagens.forEach(imagem => {
        imagem.addEventListener('click', () => {

            modal.classList.add("aberto")
            modal.innerHTML=  `<img class="modal__imagem" role="button" src="https://raw.githubusercontent.com/RaiSMel/produtos.github.io/main/imagens/${imagem.classList[1]}.jpg">`
            
        })
    })

    modal.addEventListener('click', () => {
        modal.innerHTML = "";
        modal.classList.remove("aberto")
    })

}