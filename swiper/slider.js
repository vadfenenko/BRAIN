const slider = document.querySelector('.swiper-container');

let mySwiper;

function mobileSliderOn() {
    if (window.innerWidth <= 1000 && slider.dataset.mobile == 'false') {
        mySwiper = new Swiper(slider, {
            slidesPerView: 3, //количество отображаемых слайдов //что бы каждый слайд был по размерах  контента прописываем auto и в css для слайдеров прописываем width auto
            spaceBetween: 20, //отступы между слайдерами
            loop: true, // зацикленность слайдера
            //centeredSlides: true,// делает слайдер с классом актив по центру
            //slideToClickedSlide: true,// дает возможность переключать мышью при этом в swiper-container
            //не должно быть класса swiper-no-swiping
            //slidesPerGroup: 2,// групирует слайды согласно  указаному количеству сколько нужно переключить за один раз

            pagination: { //точки
                el: '.swiper-pagination',
                type: 'bullets', //fraction уберает точки и показивает цифры 1/6 и тд
                clickable: true,// преключение нажатием по точкам
            },

            //lazy: true включает  lazy
            /*lazy: {
                loadPrevNext: true,
              },*/  //загружает на одну картинку больше что бі не видиле преолоада

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

    if (window.innerWidth > 1000) {
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
