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

  
    forms.forEach(form => {
        bindPostData(form);
    })

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method:'POST',
            headers: {
                'Content-type':'application/json'
            },
            body:data
        })
        
        return await res.json();
    }


    function bindPostData(form){
        form.addEventListener('submit', event => {
            event.preventDefault();

            for (let i = 0; i < form.length - 1; i++) {
                if ( form[0].value != '' && form[1].value != '' ) {
                    form[i].style.borderColor = 'rgb(23, 1, 47)';

                    const formData = new FormData(form);

                    allElements.forEach((element) => {
                        element.style.display = 'none';
                    });

                    requestResponces.loading();

                    if ( i ===  1 ) {
                        postData('http://localhost:3000/requests', JSON.stringify(data))
                        .then(response => response.text())
                        .then(response => {
                            console.log(response);
                            requestResponces.successResponse();
                        }).catch(() => {
                            requestResponces.failureResponse();
                        }).finally(() => {
                            setTimeout(function(){
                                allElements.forEach(element => {
                                    element.style.display = 'block';
                                    allElements[2].style.display = 'flex';
                                    allElements[2].reset();
                                    form[i].style.boxShadow = 'none';
                                });
                                ResponceText.remove();
                            }, 3000);
                        })
                    }
                } else if ( form[i].value == '' ) {
                    form[i].style.boxShadow = '0 0 10px red';
                    form[i].style.borderColor = 'red';
                    form[i].classList.add('isNotFilled');
                    setTimeout(() => {
                        form[i].classList.remove('isNotFilled');
                    }, 300);
                } else {
                    form[i].style.borderColor = 'rgb(23, 1, 47)';
                    form[i].style.boxShadow = 'none';
                }
            }       
        })
    }
})