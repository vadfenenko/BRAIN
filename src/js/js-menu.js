let onJSmenu = document.querySelector('#burger');
onJSmenu.classList.add('js-button-burger');

let hiddenMenuOnJs = document.querySelector('.menu__list--header');
hiddenMenuOnJs.classList.add('js-menu__list');

let toggleButton = function () {

    let lineHorizontal = document.querySelector('.button-burger__span');
    lineHorizontal.classList.toggle('js-button-burger__span--active');

    onJSmenu.classList.toggle('js-button-burger--active');

    hiddenMenuOnJs.classList.toggle('js-menu__list--active');

    let bodyLocked = document.querySelector('body');
    bodyLocked.classList.toggle('locked');

    let nav = document.querySelector('.menu');
    nav.classList.toggle('js-menu--active');

};

onJSmenu.addEventListener('click', toggleButton);

