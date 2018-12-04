'use strict';
const faceSelector = document.querySelector('.face');

function winky(){
    faceSelector.innerHTML = ";)"
};
function normalFace(){
    faceSelector.innerHTML = ":)"
};

faceSelector.addEventListener('click', winky);
faceSelector.addEventListener('mouseout', normalFace);
