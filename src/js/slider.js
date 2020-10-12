const sliderBlock2 = document.querySelector('.block-2__slider');
const sliderBlock3 = document.querySelector('.block-3__slider');
const sliderBlock4 = document.querySelector('.block-4__slider');

let mySwiper;

function block2MobileSlider() {
    if (window.innerWidth <= 460 && sliderBlock2.dataset.mobile == 'false') {
        mySwiper = new Swiper(sliderBlock2, {
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

        sliderBlock2.dataset.mobile = 'true';
    }

    if (window.innerWidth > 460) {
        sliderBlock2.dataset.mobile = 'false';

        if(sliderBlock2.classList.contains('swiper-container-initialized')) {
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

block2MobileSlider();
block3MobileSlider();
block4MobileSlider();


window.addEventListener('resize', () =>{
    block2MobileSlider();
    block3MobileSlider();
    block4MobileSlider();
});

