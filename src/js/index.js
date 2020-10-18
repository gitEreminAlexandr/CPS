import '../scss/style.scss';

//burger menu
import './burger-menu.js';


//modal
import './modal.js';

//main 
import './service-info.js';
import './brand-repair.js';
import './technician-repair';


//slider
import './slider.js';


var backgroundOverlay = document.querySelector('.background-overlay');

var burgerMenu = document.querySelector('.burger-menu');
var modalCall = document.querySelector('.modal-call');
var modalFeedback = document.querySelector('.modal-feedback');

backgroundOverlay.addEventListener('click', function() {
    burgerMenu.classList.remove('burger-menu-active');
    modalCall.classList.remove('modal-call-active');
    modalFeedback.classList.remove('modal-feedback-active');
    backgroundOverlay.classList.remove('background-overlay-active');
})