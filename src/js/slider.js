const slider = document.querySelector('.swiper-container');
const sliderCentering = document.querySelector('.swiper-centering');
const sliderWrapper = document.querySelector('.swiper-wrapper');
const sliderItem = document.querySelectorAll('.swiper-slide');

sliderCentering.classList.remove('slider', 'slider--NoJS');
sliderWrapper.classList.remove('slider__wrapper', 'slider__wrapper--NoJS');
for (let i = 0; i < sliderItem.length; i++) {
    sliderItem[i].classList.remove('slider__item', 'slider__item--NoJS');
}

let mySwiper;

function mobileSliderOn() {
    if (window.innerWidth <= 1000 && slider.dataset.mobile == 'false') {
        mySwiper = new Swiper(slider, {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: true,

            pagination: {
                el: '.swiper-pagination',
                type: 'bullets', //fraction уберает точки и показивает цифры 1/6 и тд
                clickable: true,
            },

            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            }

        });

        slider.dataset.mobile = 'true';
    }

    if (window.innerWidth > 865) {
        slider.dataset.mobile = 'false';

        if (slider.classList.contains('swiper-container-initialized')) {
            mySwiper.destroy();
        }

    }
}

mobileSliderOn();

window.addEventListener('resize', () => {
    mobileSliderOn();
})
