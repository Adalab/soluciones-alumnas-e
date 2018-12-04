'use strict';

const smile = document.querySelector('.face');

function paco(event) {
    smile.innerHTML = ';)';
}

function paca(event) {
    smile.innerHTML = '=)';
}

smile.addEventListener('mouseover', paco);
smile.addEventListener('mouseout', paca);

