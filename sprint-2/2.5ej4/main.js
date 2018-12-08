'use strict';

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

let btn = document.querySelector('.button');

function printMovie(event) {
    console.log(event.target.innerText);
}

function handlerButton() {
    document.querySelector('body').innerHTML =
        `<ul>
        <li>${inception}</li>
        <li>${theButterFlyEffect}</li>
        <li>${eternalSunshineOfTheSM}</li>
        <li>${blueVelvet}</li>
        <li>${split}</li>
    </ul>`

    let listItems = document.body.querySelectorAll('li');

    for (const listItem of listItems) {
        listItem.addEventListener('click', printMovie);
    }
}

btn.addEventListener('click', handlerButton);

