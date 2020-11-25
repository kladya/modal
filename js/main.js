'use strict';

const headerBtn = document.querySelector('.header-btn');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal__close-btn');
const okBtn = document.querySelector('.ok-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const body = document.querySelector('body');

function showModal() {
    overlay.classList.remove('overlay--hide', 'overlay-animation--hide');
    headerBtn.setAttribute('tabindex', '-1');
    modalCloseBtn.setAttribute('tabindex', '0');
    modalCloseBtn.focus(); 
}

function hideModal() {
    overlay.classList.add('overlay-animation--hide');
    overlay.addEventListener('animationend', () => {
        if (overlay.classList.contains('overlay-animation--hide')) {
            overlay.classList.add('overlay--hide');
        }
    });
}

headerBtn.addEventListener('click', showModal);
okBtn.addEventListener('click', hideModal); 
cancelBtn.addEventListener('click', hideModal);
modalCloseBtn.addEventListener('click', hideModal);

body.addEventListener('click', event => {
    if (event.target == overlay) {
        hideModal();
    }
});