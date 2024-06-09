document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burgerMenu');
    const burgerLinks = document.getElementById('burgerLinks');

    burgerMenu.addEventListener('click', () => {
        burgerLinks.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    });
});