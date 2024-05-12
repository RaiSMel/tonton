const catalogo = document.querySelector('.catalogo-completo')

fetch("https://raw.githubusercontent.com/RaiSMel/produtos.github.io/main/produtos.json").then(
    response => response.json()).then(
        data => {
            data.forEach(brinquedo => {
                let item = document.createElement('a');
                item.classList.add('brinquedo');
                item.href = `index.html#${brinquedo.id}`

                item.innerHTML = `<img class="produto" src="https://raw.githubusercontent.com/RaiSMel/produtos.github.io/main/imagens/${brinquedo.id}.jpg" alt="${brinquedo.nome}">
                <h3 class="titulo">${brinquedo.nome}</h3>
                <p class="tamanho">dimensão: ${brinquedo.largura}x${brinquedo.altura}x${brinquedo.comprimento} </p>
                <div class="precos">
                <p class="preco individual">individual<br>R$ ${brinquedo.precoIndividual}</p>
                <p class="preco combo">Em combo <br> R$ ${brinquedo.precoCombo}</p>
                </div>
                <a role="button" class="adicionar 1">Adicionar ao carrinho</a> 
                <a role="button" class="alugar 1">Alugar agora</a> `
                catalogo.appendChild(item)
            });
        }
)