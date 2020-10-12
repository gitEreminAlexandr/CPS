var cardList = document.querySelectorAll('.block-2__card');
var cardListNew = cardList.children;

if (window.innerWidth >= 460) {
    for (var j = 8; j < cardList.length; j++) {
        cardList[j].classList.add('block-2__card--none');
    };
}


var button = document.querySelector('.block-2__button');
button.addEventListener('click', function () {
    if (button.textContent === 'Показать все') {
        button.textContent = 'Скрыть';            
        var expandImg = document.createElement('img'); 
        expandImg.classList.add('block-2__button-img');  
        expandImg.src = '../img/expand.png';
        expandImg.alt = 'expand';
        expandImg.style.transform = 'rotate(180deg)';
        expandImg.style.transition = '0.5s ease';
        button.prepend(expandImg);

        for (var j = 8; j < cardList.length; j++) {
            cardList[j].classList.remove('block-2__card--none');
        };
    } else {
        button.textContent = 'Показать все';
        var expandImg = document.createElement('img');
        expandImg.classList.add('block-2__button-img');  
        expandImg.src = '../img/expand.png';
        expandImg.alt = 'expand';
        expandImg.style.transition = '0.5s ease';
        button.prepend(expandImg);

        for (var j = 8; j < cardList.length; j++) {
            cardList[j].classList.add('block-2__card--none');
        };
    };
});