'use strict';
const buttonEl = document.querySelector('.button');
const listEl = document.querySelector('.list');
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

function printMovies () {
    const inputList = `<li>${inception}</li><li>${theButterFlyEffect}</li><li>${eternalSunshineOfTheSM}</li><li>${blueVelvet}</li><li>${split}</li>`;
    listEl.innerHTML = inputList;
}
function clickMovie (event) {
    const movieSelected = event.target;
    console.log('Pelicula seleccionada =>',movieSelected.innerHTML);
}
buttonEl.addEventListener('click', printMovies);
listEl.addEventListener('click', clickMovie);