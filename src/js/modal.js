var buttonCall = document.querySelector('.button-call-open');
var buttonCallIsBurger = document.querySelector('.button-call-open-menu');
var buttonCallClose = document.querySelector('.modal-call__cloce');
var activeCall = 'modal-call-active';
var modalCall = document.querySelector('.modal-call');

var buttonFeedback = document.querySelector('.button-chat-open');
var buttonFeedbackIsBurger = document.querySelector('.button-chat-open-menu');
var buttonFeedbackClose = document.querySelector('.modal-feedback__cloce');
var activeFeedback = 'modal-feedback-active';
var modalFeedback = document.querySelector('.modal-feedback');

var pageScrrol = document.querySelector('.page');
var burgerMenu = document.querySelector('.burger-menu');
var backgroundOverlay = document.querySelector('.background-overlay');

var openModal = function(buttonOpen, buttonOpenIsMenu, buttonClose, block, activClass) {
    buttonOpen.addEventListener('click', function(){
        block.classList.add(activClass);
        backgroundOverlay.classList.add('background-overlay-active');
        pageScrrol.classList.add('page-no-scrrol');
    });

    buttonOpenIsMenu.addEventListener('click', function(){
        block.classList.add(activClass);
        burgerMenu.classList.remove('burger-menu-active');
        if (!document.querySelector('.background-overlay-active')) {
            backgroundOverlay.classList.add('background-overlay-active');
            pageScrrol.classList.add('page-no-scrrol');
        }
    });

    buttonClose.addEventListener('click', function(){
        block.classList.remove(activClass);
        backgroundOverlay.classList.remove('background-overlay-active');
        pageScrrol.classList.remove('page-no-scrrol');
    });
};


openModal(buttonCall, buttonCallIsBurger, buttonCallClose, modalCall, activeCall);
openModal(buttonFeedback, buttonFeedbackIsBurger, buttonFeedbackClose, modalFeedback, activeFeedback);
