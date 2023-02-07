const modalBrinquedo = document.querySelector('.modal__brinquedo');


const criarBrinquedos = (brinquedo) => {

    let novoBrinquedo = document.createElement('div')

    novoBrinquedo.innerHTML = `<a class="brinquedo__link" href='brinquedo.html#${brinquedo.id}'><img src="${brinquedo.imgSrc}" alt="${brinquedo.descricao}" class="brinquedo__img">
    <h3 class="brinquedo__titulo">${brinquedo.nome}</h3>
    <p class="brinquedo__caracteristica">
        ${brinquedo.comprimento} Comprimento<br>
        ${brinquedo.largura} Largura<br>
        ${brinquedo.altura} Altura
    </p>
    <div class="brinquedo__container">
        <p class="brinquedo__preco">${brinquedo.valor}</p>
        <button class="brinquedo__botao ${brinquedo.id}" onclick=""><svg
                xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                <path
                    d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path
                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg></button>
    </div></a>`;



    novoBrinquedo.classList.add('brinquedo');
    novoBrinquedo.classList.add(`brinquedo-destaque`)

    return novoBrinquedo

}

export const criarContainer = (arrayBrinquedos) => {

    const categoriaBrinquedos = document.createElement('div');
    categoriaBrinquedos.classList.add('brinquedos')

    for (let i = 0; i < 5; i++) {

        i = i;

        arrayBrinquedos.forEach(brinquedo => {
            categoriaBrinquedos.appendChild(criarBrinquedos(brinquedo));

        })
    }
    return categoriaBrinquedos;
}

const criarSlider = (proximo, brinquedos) => {

    let itemAtual = 0;

    console.log(brinquedos)

    proximo.forEach((proximo) => {
        proximo.addEventListener('click', (evento) => {

            let direcao = evento.target.classList.contains('proximo-esquerda');

            if (direcao) {
                itemAtual = itemAtual - 1;
            } else {
                itemAtual = itemAtual + 1;
            }

            if (itemAtual < 0) {
                itemAtual = brinquedos.length - 1;
            }
            if (itemAtual > brinquedos.length - 1) {
                itemAtual = 0;
            }

            console.log(brinquedos[itemAtual], proximo)

            brinquedos[itemAtual].scrollIntoView({
                block: 'nearest',
                inline: "center",
                behavior: "smooth",
            });

        })
    })

}

export const criarSessao = () => {
    let produtos = document.createElement('section');
    let tituloH2 = document.createElement('h2');
    let carroseul = document.createElement('div');
    let produtosContainer = document.createElement('div');
    let botaoEsquerda = document.createElement('button');
    let botaoDireita = document.createElement('button');

    produtos.classList.add('produtos');
    tituloH2.classList.add('subtitulo');
    carroseul.classList.add('carroseul__container');
    produtosContainer.classList.add('produtos__container');
    botaoEsquerda.classList.add('proximo-item');
    botaoEsquerda.classList.add('proximo-direita');
    botaoDireita.classList.add('proximo-item');
    botaoDireita.classList.add('proximo-direita');
    
    produtosContainer.appendChild(botaoEsquerda);
    produtosContainer.appendChild(botaoDireita);
    carroseul.appendChild(produtosContainer);
    produtos.appendChild(tituloH2);
    produtos.appendChild(carroseul);
    
    
    console.log(produtos);
}

