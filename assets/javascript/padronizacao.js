const body = document.querySelector('body')
const header = document.querySelector('[data-cabecalho]')
const footer = document.querySelector('[data-rodape]')

header.innerHTML = `
<a href="principal.html" class="logo__link"><img src="./assets/imagems/logo.png" alt="logo Tonton" class="logo__img"></a>

<div class="pesquisarBrinquedos">
    <div class="pesquisar">
        <input id="pesquisar-input" class="pesquisar__entrada" placeholder="Pesquisar brinquedos" maxlength="40">
        <button class="pesquisar__botao">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" bgcolor="tran" fill="currentColor"
                class="bi bi-search" viewBox="0 0 16 16">
                <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
        </button>
    </div>
</div>

<div class="contedor">

    <nav class="">
        <ul class="menu">

            <li class="menu__itens"><a href="catalogo.html" class="itens-link">Catálago Completo</a></li>

            <li class="menu__itens"><a href="#" class="itens-link usuario"><svg
                        xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                        class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fill-rule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg></a></li>

            <li class="menu__itens"><a href="carrinho.html" class="itens-link carrinho"><svg
                        xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                        class="carrinho-compras" viewBox="0 0 16 16">
                        <path
                            d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                    </svg></a></li>

        </ul>

    </nav>


</div>
`

footer.innerHTML = `<div class="sobre">


<iframe class="mapa"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.4303918923965!2d-46.54316283044895!3d-23.54251476919901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e6eff42d1b3%3A0xd4b294440c4dc8f5!2sR.%20Z%C3%A9lia%20Ramos%20da%20Costa%2C%2080%20-%20Vila%20Nova%20Manchester%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003440-020!5e0!3m2!1spt-BR!2sbr!4v1686095073112!5m2!1spt-BR!2sbr"
    style="border:0;" allowfullscreen="" loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"></iframe>
<div class="sobre-descricao">
    <h3 class="subtitulo text-gray">Tonton Locações de Brinquedos</h3>
    <br />
    <p class="sobre-historia">Há 5 anos, nossa empresa se dedica a oferecer a melhor experiência em locação
        de brinquedos, tornando festas e eventos ainda mais emocionantes. Especializada na locação de cama
        elástica e brinquedos infláveis, nos consolidamos como um dos líderes do setor, proporcionando
        momentos inesquecíveis para crianças e adultos de todas as idades.

    </p>
    <br />
    <p class="sobre-informacoes">Rua Zélia Ramos da Costa, 80 <br />
        São Paulo, SP 03440-020 <br /><br />
        CNPJ: 31.604.852-0001/11
    </p>
</div>
</div>

<div class="informacoes">
<ul class="contatos">
    <p class="informacoes-titulos">Contato</p>
    <li class="contato">Tel: (011) 94742-8167</li>
    <li class="contato">email: tontonlocacoes@gmail.com</li>
    <li class="contato"> <a class="contatos-link" href="https://www.instagram.com/tontonlocacoes/"> <svg
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-instagram" viewBox="0 0 16 16">
                <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg> Instagram</a></li>
    <li class="contato"><a class="contatos-link" href="https://www.facebook.com/1910032925919041"> <svg
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-facebook" viewBox="0 0 16 16">
                <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg> Facebook </a></li>
</ul>
</div>`

body.innerHTML += `<a class="modal__whatsapp"
href="https://api.whatsapp.com/send?phone=5511947428167&text=Olá,%20gostaria%20de%20um%20orçamento...!">
<h1>
    <img src="./assets/imagems/whatsapp.png" alt="" class="contato__imagem">
</h1>
</a>
`