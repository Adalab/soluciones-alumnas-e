'use strict';

const textField = document.querySelector('#text-field');
const searchButton = document.querySelector('.search-button');
const searchResult = document.querySelector('.search-result');

function searchCharacter(event) {
    event.preventDefault();

    const searchURL = `https://swapi.co/api/people/?search=${textField.value}`;

    searchResult.innerHTML = '';

    if (localStorage.getItem(textField.value) === null) {
        //console.log('if');
        fetch(searchURL)
            .then(response => response.json())
            .then(data => {
                const result = data.results;

                localStorage.setItem(textField.value, JSON.stringify(result));

                for (let ii = 0; ii < result.length; ii++) {
                    searchResult.innerHTML += `<li>${result[ii].name}, ${result[ii].gender}</li>`;
                }
            });
    } else {
        //console.log('else');

        const result = JSON.parse(localStorage.getItem(textField.value));

        for (let ii = 0; ii < result.length; ii++) {
            searchResult.innerHTML += `<li>${result[ii].name}, ${result[ii].gender}</li>`;
        }
    }
}

searchButton.addEventListener('click', searchCharacter);