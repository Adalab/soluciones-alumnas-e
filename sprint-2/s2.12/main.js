'use strict';

const stopBtnEl = document.querySelector('.stop-btn');
const continueBtnEl = document.querySelector('.continue-btn');
const time = document.querySelector('.time');

let counter = 0;
let temp = setInterval(incrementAndShowCounter, 1000);

function incrementAndShowCounter () {
  counter++;
  time.innerHTML = counter;
}

function handleStopClick () {
    clearInterval(temp);
}

function handleContinueClick () {
    setInterval(incrementAndShowCounter, 1000);
}

stopBtnEl.addEventListener('click', handleStopClick);

continueBtnEl.addEventListener('click', handleContinueClick);
