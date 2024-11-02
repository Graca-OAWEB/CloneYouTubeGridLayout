const scrollContainer = document.querySelector('.scroll-container');

document.getElementById('scrollLeft').addEventListener('click', () => {
    scrollContainer.scrollBy({
        top: 0,
        left: -200, // Ajuste a quantidade para a velocidade de rolagem
        behavior: 'smooth'
    });
});

document.getElementById('scrollRight').addEventListener('click', () => {
    scrollContainer.scrollBy({
        top: 0,
        left: 200, // Ajuste a quantidade para a velocidade de rolagem
        behavior: 'smooth'
    });
});
