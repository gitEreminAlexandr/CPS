import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const sliderBlock2 = document.querySelector('.brand-repair__slider');
const sliderBlock3 = document.querySelector('.technician-repair__slider');
const sliderBlock4 = document.querySelector('.catalog__slider');

let swiper;

function block2MobileSlider() {
    if (window.innerWidth <= 460 && sliderBlock2.dataset.mobile == 'false') {
        swiper = new Swiper(sliderBlock2, {
            slidesPerView: 1.3,
            spaceBetween: 50,
            width: 310,
            slidesOffsetBefore: 10,
            slidesOffsetAfter: 20,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
        });

        sliderBlock2.dataset.mobile = 'true';
    }

    if (window.innerWidth > 460) {
        sliderBlock2.dataset.mobile = 'false';

        if(sliderBlock2.classList.contains('swiper-container-initialized')) {
            swiper.destroy();
        }
        
    }
}


function block3MobileSlider() {
    if (window.innerWidth <= 460 && sliderBlock3.dataset.mobile == 'false') {
        swiper = new Swiper(sliderBlock3, {
            slidesPerView: 1.3,
            spaceBetween: 10,
            width: 340,
            slidesOffsetBefore: 5,
            slidesOffsetAfter: 25,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
        });

        sliderBlock3.dataset.mobile = 'true';
    }

    if (window.innerWidth > 460) {
        sliderBlock3.dataset.mobile = 'false';

        if(sliderBlock3.classList.contains('swiper-container-initialized')) {
            swiper.destroy();
        }
        
    }
}

function block4MobileSlider() {
    if (window.innerWidth <= 460 && sliderBlock4.dataset.mobile == 'false') {
        swiper = new Swiper(sliderBlock4, {
            slidesPerView: 1.3,
            spaceBetween: 10,
            width: 340,
            slidesOffsetBefore: -30,
            slidesOffsetAfter: 160,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
        });

        sliderBlock4.dataset.mobile = 'true';
    }

    if (window.innerWidth > 460) {
        sliderBlock4.dataset.mobile = 'false';

        if(sliderBlock4.classList.contains('swiper-container-initialized')) {
            swiper.destroy();
        }
        
    }
}

block2MobileSlider();
block3MobileSlider();
block4MobileSlider();


window.addEventListener('resize', () =>{
    block2MobileSlider();
    block3MobileSlider();
    block4MobileSlider();
});

