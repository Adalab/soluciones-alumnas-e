'use strict';

const btnEl = document.querySelector('.stop');
const msgEl = document.querySelector('.msg');
let timeStop;

let counter = 0;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.time');
  time.innerHTML = counter;
  if (counter === 10) {
    msgEl.innerHTML = '¿Te has dormido?';
    clearInterval(timeStop);
  }
}

timeStop = setInterval(incrementAndShowCounter, 1000);

function resetTime() {
  clearInterval(timeStop);
  counter = 0;
  timeStop = setInterval(incrementAndShowCounter, 1000);
  msgEl.innerHTML = '';
}


btnEl.addEventListener('click', resetTime);