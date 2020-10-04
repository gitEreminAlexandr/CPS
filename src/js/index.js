import '../scss/style.scss';

//burger-menu
import './burger-menu.js';

//modal
import './modal.js';


//background-overlay

var backgroundOverlay = document.querySelector('.background-overlay');

backgroundOverlay.addEventListener('click', function(){
    backgroundOverlay.classList.remove('background-overlay-active');
    document.querySelector('.modal-call').classList.remove('modal-call-active');
    document.querySelector('.modal-feedback').classList.remove('modal-feedback-active');
    document.querySelector('.burger-menu').classList.remove('burger-menu-active');
})