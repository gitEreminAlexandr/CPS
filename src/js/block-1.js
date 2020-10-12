var button = document.querySelector('.block-1__button-expand');
var text = document.querySelector('.block-1__text-part-4');

button.addEventListener('click', function(){
    button.classList.toggle('block-1__button-expand--active');

    if (button.textContent === 'Читать далее') {
        button.textContent = 'Скрыть';            
        text.style.display = 'inline'
    } else {
        button.textContent = 'Читать далее';
        text.style.display = 'none';
    };
});