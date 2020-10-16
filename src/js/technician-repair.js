var itemTechnician = ['.technician-repair__card--monitor', 
                    '.technician-repair__card--laptop',
                    '.technician-repair__card--planshet',
                    '.technician-repair__card--pk',
                    '.technician-repair__card--monitor2'];


var buttonTechnicianRepair = document.querySelector('.technician-repair__button');

buttonTechnicianRepair.addEventListener('click', function(){
    for(var i = 0; i < itemTechnician.length; i++) {
        document.querySelector(itemTechnician[i]).classList.toggle('technician-repair__card--active');
    }
});

buttonTechnicianRepair.addEventListener('click', function(){
    buttonTechnicianRepair.classList.toggle('technician-repair__button--active');

    if (buttonTechnicianRepair.dataset.open == 'false') {
        buttonTechnicianRepair.textContent = 'Скрыть';   
        buttonTechnicianRepair.dataset.open = 'true';         
    } else {
        buttonTechnicianRepair.textContent = 'Показать все';
        buttonTechnicianRepair.dataset.open = 'false';
    };
});