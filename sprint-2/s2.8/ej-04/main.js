'use strict';

const face = document.querySelector('.face');
function changeFace(){
    face.innerHTML = ';)';
}

face.addEventListener('click', changeFace);

function changeFaceAgain(){
    face.innerHTML = ':D';
}

face.addEventListener('mouseout', changeFaceAgain);
