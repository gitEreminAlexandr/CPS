var burgerButton = document.querySelector('.header-menu__button--burger-menu');
var burgerButtonClose = document.querySelector('.burger-header__close');
var burgerMenu = document.querySelector('.burger-menu');
var backgroundOverlay = document.querySelector('.background-overlay');
var pageScrrol = document.querySelector('.page');

burgerButton.addEventListener('click', function(){
    burgerMenu.classList.add('burger-menu-active');
    backgroundOverlay.classList.add('background-overlay-active');
    pageScrrol.classList.add('page-no-scrrol');
});

burgerButtonClose.addEventListener('click', function(){
    burgerMenu.classList.remove('burger-menu-active');
    backgroundOverlay.classList.remove('background-overlay-active');
    pageScrrol.classList.remove('page-no-scrrol');
});