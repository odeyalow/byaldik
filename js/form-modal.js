'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const formBtns = document.querySelectorAll('#form-btn'),
          modal = document.querySelector('.modal'),
          closeBtn = document.querySelector('.close-icon'),
          sendFormBtn = document.querySelector('.form__btn'),
          inputs = document.querySelectorAll('input');

    closeBtn.addEventListener('click', () => {
        modal.classList.toggle('modal-hidden');
        document.body.style.overflowY = 'scroll';
    })

    formBtns.forEach(elem => {
        elem.addEventListener('click', () => {
            modal.classList.toggle('modal-hidden');
            document.body.style.overflow = 'hidden';
        })
    })

    sendFormBtn.addEventListener('click', e => {
        e.preventDefault();
        inputs.forEach(input => {
            if ( input.value == '' ) {
                input.style.borderColor = 'red';
                input.classList.add('isNotFilled');
                setTimeout(() => {input.classList.remove('isNotFilled')}, 300);
            } else if ( input != '' ) {
                input.style.borderColor = 'rgb(23, 1, 47)';
            }
        })
    })
})