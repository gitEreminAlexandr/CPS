import '../scss/style.scss';

//burger-menu
import './burger-menu.js';

//modal
import './modal.js';

//slider
import './slider';

//main
import './block-1';
import './block-2';
import './block-3';


//background-overlay

var backgroundOverlay = document.querySelector('.background-overlay');

backgroundOverlay.addEventListener('click', function(){
    backgroundOverlay.classList.remove('background-overlay-active');
    document.querySelector('.modal-call').classList.remove('modal-call-active');
    document.querySelector('.modal-feedback').classList.remove('modal-feedback-active');
    document.querySelector('.burger-menu').classList.remove('burger-menu-active');
    document.querySelector('.main').classList.remove('main-fixed');
    document.querySelector('.header').classList.remove('header-fixed');
})