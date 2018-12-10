'use strict';
const textField = document.querySelector('.text-field');
const button = document.querySelector('.btn');
const resultsDisplay = document.querySelector('.results-list');


function handleClick() {
  const textFieldValue = textField.value;
  fetch(`https://swapi.co/api/people/?search=${textFieldValue}`)
    .then(response => response.json())
    .then(data => {
      const results = data.results;
      for (let i = 0; i < results.length; i++) {
        const name = results[i].name;
        const gender = results[i].gender;
        resultsDisplay.innerHTML += `<li>${name}</li> <li>${gender}</li>`;
      }
      ////we save the results in the local storage and convert them into a string. Then, if we want to use them again as data we should transform them into jason again).
      localStorage.setItem('data',JSON.stringify(results));
    });
}

button.addEventListener('click', handleClick);