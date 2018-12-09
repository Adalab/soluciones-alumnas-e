'use strict';

let faceElement = document.querySelector('.face');
faceElement.innerHTML = ':)';

function changeFace() {
    faceElement.innerHTML = ';)';
}

function returnFace() {
    faceElement.innerHTML = ':)';
}

faceElement.addEventListener('click', changeFace);
faceElement.addEventListener('mouseout', returnFace);