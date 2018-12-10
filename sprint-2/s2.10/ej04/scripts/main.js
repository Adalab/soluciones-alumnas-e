'use strict';
const value = document.querySelector('#user');
const btn = document.querySelector('.search-btn'); 
const name = document.querySelector('.name');
const gender = document.querySelector('.gender');
function starWars(){
    fetch('https://swapi.co/api/people/?search=' + value.value)
     .then(function(response) {
        return response.json();
      })
      .then(function(data) { 
          let names = '';
          let genders = '';
        for (let i = 0; i < data.results.length; i++){
            names += `<li>${data.results[i].name}</li>`;
            genders += `<li>${data.results[i].gender}</li>`;
        }  
        name.innerHTML = names;
        gender.innerHTML = genders;
        localStorage.setItem('names', JSON.stringify(data.results));
        const paquita = localStorage.getItem('names');
        console.log(paquita);
      });
      }
      btn.addEventListener('click',starWars);