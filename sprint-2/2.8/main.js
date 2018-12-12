'use strict';

const faceElement = document.querySelector('.face');
const headElement = document.querySelector('.head');

function winkFace() {
  faceElement.innerHTML = ';)';
}

headElement.addEventListener('click' , winkFace);

function smileFace(){
  faceElement.innerHTML = ':)';
}

headElement.addEventListener('mouseout',smileFace);