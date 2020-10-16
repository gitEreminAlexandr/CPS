var buttonBrend = document.querySelector('.brand-repair__button');
 
var cardList = ['.card-acer-none', '.card-sony-none', '.card-lenova-none', 
'.card-samsung-none', '.card-apple-none', ];


buttonBrend.addEventListener('click', function(){
    for(var i = 0; i < cardList.length; i++) {
        document.querySelector(cardList[i]).classList.toggle('card-acer-none-active');
    }
});


buttonBrend.addEventListener('click', function(){
    buttonBrend.classList.toggle('brand-repair__button--active');

    if (buttonBrend.dataset.open == 'false') {
        buttonBrend.textContent = 'Скрыть';  
        buttonBrend.dataset.open = 'true'          
        
    } else {
        buttonBrend.textContent = 'Показать все';
        buttonBrend.dataset.open = 'false';
    };
});