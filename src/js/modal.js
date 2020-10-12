var callButton = document.querySelector('.call--active');
var callButtonClose = document.querySelector('.modal-call__cloce');
var callButtonIsMenu = document.querySelector('.aside-footer--call');

var chatButton = document.querySelector('.chat--active');
var chatButtonClose = document.querySelector('.modal-feedback__cloce');
var chatButtonIsMenu = document.querySelector('.aside-footer--chat');

var burgerMenu = document.querySelector('.burger-menu');

var main = document.querySelector('.main');
var header = document.querySelector('.header');
var footer = document.querySelector('.footer');





callButton.addEventListener('click', function(){
    document.querySelector('.modal-call').classList.add('modal-call-active');
    document.querySelector('.background-overlay').classList.add('background-overlay-active');
    main.classList.add('main-fixed');
    header.classList.add('header-fixed');
    footer.classList.add('footer-fixed');
})

callButtonIsMenu.addEventListener('click', function(){
    document.querySelector('.modal-call').classList.add('modal-call-active');
    burgerMenu.classList.remove('burger-menu-active');
    if (!document.querySelector('.background-overlay-active')) {
        document.querySelector('.background-overlay').classList.add('background-overlay-active');
        main.classList.add('main-fixed');
        header.classList.add('header-fixed');
        footer.classList.add('footer-fixed');
    }
})

callButtonClose.addEventListener('click', function(){
    document.querySelector('.modal-call').classList.remove('modal-call-active');
    document.querySelector('.background-overlay').classList.remove('background-overlay-active');
    main.classList.remove('main-fixed');
    header.classList.remove('header-fixed');
    footer.classList.remove('footer-fixed');
})





chatButton.addEventListener('click', function(){
    document.querySelector('.modal-feedback').classList.add('modal-feedback-active');
    document.querySelector('.background-overlay').classList.add('background-overlay-active');
    main.classList.add('main-fixed');
    header.classList.add('header-fixed');
    footer.classList.add('footer-fixed');
})

chatButtonIsMenu.addEventListener('click', function(){
    document.querySelector('.modal-feedback').classList.add('modal-feedback-active');
    burgerMenu.classList.remove('burger-menu-active');
    if (!document.querySelector('.background-overlay-active')) {
        document.querySelector('.background-overlay').classList.add('background-overlay-active');
        main.classList.add('main-fixed');
        header.classList.add('header-fixed');
        footer.classList.add('footer-fixed');
    }
})

chatButtonClose.addEventListener('click', function(){
    document.querySelector('.modal-feedback').classList.remove('modal-feedback-active');
    document.querySelector('.background-overlay').classList.remove('background-overlay-active');
    main.classList.remove('main-fixed');
    header.classList.remove('header-fixed');
    footer.classList.remove('footer-fixed');
})