'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form'),
        formContainer = document.querySelector('.form__container'),
        allElements = formContainer.querySelectorAll('*'),
        loadingAnimation = document.createElement('div'),
        ResponceText = document.createElement('span'),
        requestResponces = {
            loading: function(){
                loadingAnimation.classList.add('loading-animation');
                formContainer.append(loadingAnimation);
            },
            successResponse: function(){
                loadingAnimation.remove();
                ResponceText.classList.add('responce-text');
                ResponceText.textContent = `We will contact you soon ${allElements[3].value}!`;
                formContainer.append(ResponceText);
            },
            failureResponse: function(){
                loadingAnimation.remove();
                ResponceText.classList.add('responce-text');
                ResponceText.textContent = 'Sorry, an error occured, please try again';
                formContainer.append(ResponceText);
            }
        };
  
    forms.forEach(item => {
        postData(item);
    })
    
    function resetRequest(){
        
    }

    function postData(form){
        form.addEventListener('submit', event => {
            event.preventDefault();
            
            const request = new XMLHttpRequest();

            request.open('POST', 'serverhp');

            const formData = new FormData(form);
            
            request.send(formData);

            allElements.forEach((element) => {
                element.style.display = 'none';
            });
            requestResponces.loading();

            request.addEventListener('load', () => {
                if ( request.status === 200 ) {
                    requestResponces.successResponse();
                } else {
                    requestResponces.failureResponse();
                }
                setTimeout(function(){
                    allElements.forEach(element => {
                        element.style.display = 'block';
                        allElements[2].style.display = 'flex';
                        allElements[2].reset();
                    });
                    ResponceText.remove();
                }, 3000);
            })
        })
    }
})