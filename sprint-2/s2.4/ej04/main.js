'use strict';
//ejercicio 4

function calculador (mc, w, p, b){
    if(mc === 'bb'){
        return w-p*2-b*2;
    }else{
        return w+p*2+b*2;
    } 

}
console.log(calculador('cc',300,10,1));