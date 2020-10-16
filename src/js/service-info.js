var button = document.querySelector('.service-info__button-expand');
var text = document.querySelector('.service-info__text-part-4');

button.addEventListener('click', function(){
    button.classList.toggle('service-info__button-expand--active');

    if (button.dataset.info == 'false') {
        button.textContent = 'Скрыть';            
        text.style.display = 'inline';
        button.dataset.info = 'true';
    } else {
        button.textContent = 'Читать далее';
        text.style.display = 'none';
        button.dataset.info = 'false';
    };
});