'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const formBtns = document.querySelectorAll('#form-btn'),
          modal = document.querySelector('.modal'),
          closeBtn = document.querySelector('.close-icon'),
          inputs = document.querySelectorAll('input');

    function modalClosed() {
        modal.classList.toggle('modal-hidden');
        document.body.style.overflowY = 'scroll';
        inputs.forEach(input => {
            input.value = ''; 
            input.style.borderColor = 'rgb(23, 1, 47)';
        })
    }

    closeBtn.addEventListener('click', () => {
        modalClosed();
    })

    document.addEventListener('click', event => {
        const eventTarget = event.target;
        if ( eventTarget.classList.contains('form-modal') ) {
            modalClosed();
        }
    })

    formBtns.forEach(elem => {
        elem.addEventListener('click', () => {
            modal.classList.toggle('modal-hidden');
            document.body.style.overflow = 'hidden';
        })
    })
})