const InterruptorOscuro = document.querySelector('#modoOscuro');

InterruptorOscuro.addEventListener('change', ModoOscuro);

function ModoOscuro(e) {
    if (e.target.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}
