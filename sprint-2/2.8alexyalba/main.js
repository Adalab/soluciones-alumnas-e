'use strict';

const face = document.querySelector('.face');

function handle(){
    face.innerHTML = ';)';
}

face.addEventListener('click', handle);

function smileOut(){
    face.innerHTML = ':)';
}

face.addEventListener('mouseout', smileOut);



