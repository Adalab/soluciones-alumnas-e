'use strict';


let counter = 0;
let newCounter = 0;

let temp;
const time = document.querySelector('.tempor');
const time2 = document.querySelector('.tempor2');

const incrementAndShowCounter = () => {
  counter++
  if(counter < 60){
  time.innerHTML = `Escrito hace ${counter} segundos.`;
  }else if(counter >= 60 && (counter%60) == 0){
    newCounter++;
    time.innerHTML = `Escrito hace ${newCounter} minutos.`
  } else if(counter >= 60 && (counter%60) != 0){
    let div = counter%60;
    time.innerHTML = `Escrito hace ${newCounter} minutos y ${div} segundos.`
  }
  time2.innerHTML= counter;
}

temp = setInterval(incrementAndShowCounter, 1000);


