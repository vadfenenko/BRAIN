let onJSmenu = document.querySelector('#burger');
onJSmenu.classList.remove('button-burger', 'button-burger--ofJS');

let hiddenMenuOnJs = document.querySelector('.menu__list--header');
hiddenMenuOnJs.classList.add('js-menu__list');

let listLink = document.querySelector('.menu__list');
let bodyLocked = document.querySelector('body');
let nav = document.querySelector('.menu');
let lineHorizontal = document.querySelector('.button-burger__span');

let toggleMenu = function () {
    lineHorizontal.classList.toggle('js-button-burger__span--active');
    onJSmenu.classList.toggle('js-button-burger--active');
    hiddenMenuOnJs.classList.toggle('js-menu__list--active');
    bodyLocked.classList.toggle('locked');
    nav.classList.toggle('js-menu--active');
};

let remoweMenuActive = function (event) {
    if (event.target.classList.contains('menu__link') && hiddenMenuOnJs.classList.contains('js-menu__list--active')) {
        lineHorizontal.classList.toggle('js-button-burger__span--active');
        onJSmenu.classList.toggle('js-button-burger--active');
        hiddenMenuOnJs.classList.toggle('js-menu__list--active');
        bodyLocked.classList.toggle('locked');
        nav.classList.toggle('js-menu--active');
    }
}

onJSmenu.addEventListener('click', toggleMenu);
listLink.addEventListener('click', remoweMenuActive);
