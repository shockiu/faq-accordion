'use strict';

const faqQuestion = document.getElementsByClassName('faq-question');
const faqAsnwer = document.getElementsByClassName('faq-asnwer');
const arrowDown = document.getElementsByClassName('arrow-down');

for ( let i = 0; i < faqQuestion.length; i++ ) {
    faqQuestion[i].addEventListener('click', () => {
        if(faqAsnwer[i].classList.contains('answer-show')) {
            arrowDown[i].classList.remove('move-arrow');
            faqAsnwer[i].classList.remove('answer-show');
        } else {
            faqAsnwer[i].classList.add('answer-show');
            arrowDown[i].classList.add('move-arrow')
        }
        
    })
}
