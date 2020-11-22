let popup = document.querySelector('.popup');
let buttonCloseModalCart = document.querySelector('.popup__button-close');

let successfully = document.querySelector('.successfully');
let buttonSubmitFormModalCart = document.querySelector('.popup__button-submit');
let buttonReturnAfterSuccessfulSubmit = document.querySelector('.successfully__button');

let backgroundModalCart = document.querySelector('.background-modal');

let courses = document.querySelector('.courses__content'); //parent elements 
let greeting = document.querySelector('.greeting__list'); //parent elements 

let bodyLockedScroll = document.querySelector('body');

let checkbox = document.querySelector('.popup__checkbox');
let buttonSubmit = document.querySelector('.popup__button-submit');

let openModalCart = function (event) {
    if (event.target.classList.contains('modal-show')) {
        event.preventDefault();
        popup.classList.add('js-popup');
        backgroundModalCart.classList.add('js-background-modal');
        bodyLockedScroll.classList.add('locked');
    }
};

let closeModalCart = function () {
    if (popup.classList.contains('js-popup')) {
        popup.classList.remove('js-popup');
        backgroundModalCart.classList.remove('js-background-modal');
        bodyLockedScroll.classList.remove('locked');
    }
};

let successfullySubmittedModalCart = function () {
    if (popup.classList.contains('js-popup')) {
        popup.classList.remove('js-popup');
        successfully.classList.add('js-successfully');
    }
};

let returnToHomePage = function () {
    if (successfully.classList.contains('js-successfully')) {
        successfully.classList.remove('js-successfully');
        backgroundModalCart.classList.remove('js-background-modal');
        bodyLockedScroll.classList.remove('locked');
    }
};


window.addEventListener('keydown', function (event) { //close modal cart button "escape"
    if (event.key === 'Escape') {
        if (popup.classList.contains('js-popup') === true) {
            popup.classList.remove('js-popup');
            backgroundModalCart.classList.remove('js-background-modal');
            bodyLockedScroll.classList.remove('locked');
        } else if (successfully.classList.contains('js-successfully') === true) {
            successfully.classList.remove('js-successfully');
            backgroundModalCart.classList.remove('js-background-modal');
            bodyLockedScroll.classList.remove('locked');
        }
    }
})


let sumbitActivation = function () {
    if (checkbox.checked) {
        buttonSubmit.disabled = false;
    } else {
        buttonSubmit.disabled = true;
    }
}

courses.addEventListener('click', openModalCart);
greeting.addEventListener('click', openModalCart);
buttonCloseModalCart.addEventListener('click', closeModalCart);
buttonSubmitFormModalCart.addEventListener('click', successfullySubmittedModalCart);
buttonReturnAfterSuccessfulSubmit.addEventListener('click', returnToHomePage);
checkbox.addEventListener('change', sumbitActivation);



