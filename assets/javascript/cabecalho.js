const cabecalho = document.querySelector('[data-cabecalho]');
const semDisplay = 'semDisplay';
var ultimoScroll;

function debounce(func, timeout = 200) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}


export const imprime = () => {
    window.addEventListener('scroll', debounce(() => {
        if (ultimoScroll > window.pageYOffset) {
            cabecalho.classList.remove(semDisplay)
        }
        else if (cabecalho.offsetHeight < window.pageYOffset) {
            console.log(semDisplay)
            cabecalho.classList.add(semDisplay)
        }
        ultimoScroll = window.pageYOffset
    }, 50))


}
