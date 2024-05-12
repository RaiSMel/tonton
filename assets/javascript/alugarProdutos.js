export const alugarProduto = () => {
    let alugarBotoes = document.querySelectorAll('.alugar')


    alugarBotoes.forEach( alugarBotao => {

        alugarBotao.addEventListener('click', () => {
            console.log(alugarBotao.classList[1])
            
        })
    })
}

export const adicionarProduto = () => {

    let alugarBotoes = document.querySelectorAll('.adicionar')
    

    alugarBotoes.forEach( alugarBotao => {
        

        alugarBotao.addEventListener('click', () => {
            criar(alugarBotao.classList[1]);
            

        })
    })

    
}

export const verificarCompras = () => {
    let carrinho = document.querySelector('.carrinho');
    if (sessionStorage.getItem('carrinho') != null){
        carrinho.style.setProperty("--valor-quantidade-brinquedos", `"${JSON.parse(sessionStorage.getItem('carrinho')).length}"`);
    }
}

export const criar = (idBrinquedo) => {
    
    let sessao = (sessionStorage.getItem('carrinho') != null)? JSON.parse(sessionStorage.getItem('carrinho'))  : [] ;
    
    
    if(!sessao.includes(idBrinquedo)){
        sessao.push(idBrinquedo)
        sessionStorage.setItem('carrinho', JSON.stringify(sessao))
    } 

    verificarCompras()
}


