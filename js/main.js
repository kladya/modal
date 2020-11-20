'use strict';

let headerBtn = document.querySelector('.header-btn');
let overlay = document.querySelector('.overlay');
let modal = document.querySelector(".modal");
let modalCloseBtn = document.querySelector('.modal__close-btn');
let okBtn = document.querySelector('.ok-btn');
let cancelBtn = document.querySelector('.cancel-btn');

function showModal() {
    overlay.classList.remove('overlay--hide');
    overlay.classList.remove('overlay-animation--hide')
    modal.setAttribute('tabindex', '1');
    modalCloseBtn.setAttribute('tabindex', '2');
    okBtn.setAttribute('tabindex', '3');
    cancelBtn.setAttribute('tabindex', '4'); 
    modal.focus(); 
}

function hideModal() {
    overlay.classList.add('overlay-animation--hide');
    overlay.addEventListener('animationend', function(){
        if (overlay.classList.contains('overlay-animation--hide')) {
            overlay.classList.add('overlay--hide');
        }
    });
}

headerBtn.addEventListener('click', showModal);
okBtn.addEventListener('click', hideModal); 
cancelBtn.addEventListener('click', hideModal);
modalCloseBtn.addEventListener('click', hideModal);

window.addEventListener('click', function(ev) {
    if (ev.target == overlay) {
        hideModal();
    }
});