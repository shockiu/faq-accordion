'use strict';

const faqQuestion = document.getElementsByClassName('faq-question');


for ( let i = 0; i < faqQuestion.length; i++ ) {
    faqQuestion[i].addEventListener('click', () => {
        if(faqQuestion[i].classList.contains('higthligth')) {
            faqQuestion[i].classList.remove('higthligth')
        } else {
            faqQuestion[i].classList.add('higthligth');
        }
        
    })
}
