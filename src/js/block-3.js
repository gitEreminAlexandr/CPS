var itemBlock3 = ['.block-3__card--monitor', 
                    '.block-3__card--laptop',
                    '.block-3__card--planshet',
                    '.block-3__card--pk',
                    '.block-3__card--monitor2'];

var buttonBlock3 = document.querySelector('.block-3__button');

buttonBlock3.addEventListener('click', function(){
    for(var i = 0; i < itemBlock3.length; i++) {
        document.querySelector(itemBlock3[i]).classList.toggle('block-3__card--active');
    }
});


buttonBlock3.addEventListener('click', function () {
    if (buttonBlock3.textContent === 'Показать все') {
        buttonBlock3.textContent = 'Скрыть';            
        var expandImg = document.createElement('img'); 
        expandImg.classList.add('block-3__button-img');  
        expandImg.src = '../img/expand.png';
        expandImg.alt = 'expand';
        expandImg.style.transform = 'rotate(180deg)';
        expandImg.style.transition = '0.5s ease';
        buttonBlock3.prepend(expandImg);

    } else {
        buttonBlock3.textContent = 'Показать все';
        var expandImg = document.createElement('img');
        expandImg.classList.add('block-3__button-img');  
        expandImg.src = '../img/expand.png';
        expandImg.alt = 'expand';
        expandImg.style.transition = '0.5s ease';
        buttonBlock3.prepend(expandImg);
    };
});