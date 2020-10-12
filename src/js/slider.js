const slider = document.querySelector('.block-2__slider');
const sliderBlock3 = document.querySelector('.block-3__slider');
const sliderBlock4 = document.querySelector('.block-4__slider');

let mySwiper;
let mySwiper2;

function mobileSlider() {
    if (window.innerWidth <= 460 && slider.dataset.mobile == 'false') {
        mySwiper = new Swiper(slider, {
            slidesPerView: 1.3,
            spaceBetween: 10,
            width: 310,
            slidesOffsetBefore: 10,
            slidesOffsetAfter: 0,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
        });

        slider.dataset.mobile = 'true';
    }

    if (window.innerWidth > 460) {
        slider.dataset.mobile = 'false';

        if(slider.classList.contains('swiper-container-initialized')) {
            mySwiper.destroy();
        }
        
    }
}


function block3MobileSlider() {
    if (window.innerWidth <= 460 && sliderBlock3.dataset.mobile == 'false') {
        mySwiper2 = new Swiper(sliderBlock3, {
            slidesPerView: 1.3,
            spaceBetween: 10,
            width: 340,
            slidesOffsetBefore: -10,
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
            mySwiper2.destroy();
        }
        
    }
}

function block4MobileSlider() {
    if (window.innerWidth <= 460 && sliderBlock4.dataset.mobile == 'false') {
        mySwiper2 = new Swiper(sliderBlock4, {
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
            mySwiper2.destroy();
        }
        
    }
}

mobileSlider();
block3MobileSlider();
block4MobileSlider();


window.addEventListener('resize', () =>{
    mobileSlider();
    block3MobileSlider();
    block4MobileSlider();
});

