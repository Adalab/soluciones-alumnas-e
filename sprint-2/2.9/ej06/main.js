'use strict';

const list = document.querySelector('body');

for (let i = 0; i < 10; i++) {
  list.innerHTML += `<img class="dog${i+1}" src="" alt="foto random de perro">`
}

const createPromise = () => 
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json());
    

let promises = [createPromise(), createPromise(), createPromise(), createPromise(),
  createPromise(), createPromise(), createPromise(), createPromise(),
  createPromise(), createPromise()];

Promise.all(promises)
  .then(responses => {
    
    for (let i = 0; i < responses.length; i++) {
      const img = document.querySelector('.dog' + (i + 1));
      img.src = responses[i].message;
    }
  });