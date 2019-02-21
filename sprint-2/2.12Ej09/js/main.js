'use strict';

const buttonEl = document.querySelector('.button');

function handleTextButton () {
    buttonEl.innerHTML = '¿Te has dormido?</br><i class="fas fa-bed"></i>';
    buttonEl.classList.remove('hidden');
}
function handleRemoveCounter () {
    buttonEl.classList.add('hidden');
    setTimeout(handleTextButton, 15000);
}

setTimeout(handleTextButton, 15000);

buttonEl.addEventListener('click', handleRemoveCounter);
