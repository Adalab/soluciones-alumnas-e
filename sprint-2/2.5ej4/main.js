'use strict';

/*Ejercicio 4
*/

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const startBtn = document.querySelector('.start');
const writeList = document.querySelector('.movies');

/* Pinta la lista de películas al hacer click en el boton
*/
const changeMovies = () => writeList.innerHTML = `<li> ${inception} </li> <li> ${theButterFlyEffect} </li> <li> ${eternalSunshineOfTheSM} </li> <li> ${blueVelvet} </li> <li> ${split} </li>`;

startBtn.addEventListener('click', changeMovies);

/* Aparece la película en la consola cuando hacemos click sobre ella
*/

const writeInConsole = () => console.log(inception);

writeList.addEventListener('click', writeInConsole);