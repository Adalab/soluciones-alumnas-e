'use strict';

const timer = document.querySelector('.timer');
const uvero = document.querySelector('.uvero');
let counter = 0;

function incrementTimer(){

    if(counter < 12){
        counter++;
        timer.innerHTML = counter;
        uvero.innerHTML += '<img src="http://2.bp.blogspot.com/_hoztOfPn2i0/SzaHmsXniZI/AAAAAAAAAJM/_K7q7RmM0Nc/s320/peculiar_grape.jpg"></img>'
    }
}

setInterval(incrementTimer, 1000);