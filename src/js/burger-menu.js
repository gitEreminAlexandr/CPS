var burgerButton = document.querySelector('.burger-menu__button');
var burgerMenu = document.querySelector('.burger-menu');
var backgroundOverlay = document.querySelector('.background-overlay');


burgerButton.addEventListener('click', function(){
    burgerMenu.classList.toggle('burger-menu-active');
    backgroundOverlay.classList.toggle('background-overlay-active');
})