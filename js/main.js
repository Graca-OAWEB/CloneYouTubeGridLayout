//------------------------------------------------------

//CARROSSEL

function initializeCarrossel(carrosselSelector, btnProximoSelector, btnAnteriorSelector) {
    const carrossel = document.querySelector(carrosselSelector);
    const btnProximo = document.querySelector(btnProximoSelector);
    const btnAnterior = document.querySelector(btnAnteriorSelector);

    let index = 0;
    const listItemMenu = carrossel.querySelectorAll('.listItemMenu');
    const numProducts = listItemMenu.length;
    let productWidth = listItemMenu[0].offsetWidth;

    function moveCarrossel() {
        carrossel.style.transform = `translateX(${-index * productWidth}px)`;
    }

    btnProximo.addEventListener('click', () => {
        index = (index + 1) % numProducts;
        moveCarrossel();
    });

    btnAnterior.addEventListener('click', () => {
        index = (index - 1 + numProducts) % numProducts;
        moveCarrossel();
    });

    window.addEventListener('resize', () => {
        productWidth = listItemMenu[0].offsetWidth;
        moveCarrossel();
    });
}

initializeCarrossel(
    '.scroll-container',
    '.btn-proximo2',
    '.btn-anterior2'
);
