'use strict';

const content = document.querySelector('.box__container');

const background = 'http://placehold.it/300x300';
let paco = 'http://www.fillmurray.com/300/300';

const url = paco || background;

content.innerHTML = `<img src="${url}" />`;