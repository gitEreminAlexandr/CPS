var burgerButton = document.querySelector('.burger-menu__button');
var burgerMenu = document.querySelector('.burger-menu');
var backgroundOverlay = document.querySelector('.background-overlay');
var main = document.querySelector('.main');
var header = document.querySelector('.header');
var footer = document.querySelector('.footer')

burgerButton.addEventListener('click', function(){
    burgerMenu.classList.toggle('burger-menu-active');
    backgroundOverlay.classList.toggle('background-overlay-active');
    main.classList.toggle('main-fixed');
    header.classList.toggle('header-fixed');
    footer.classList.toggle('footer-fixed');
});