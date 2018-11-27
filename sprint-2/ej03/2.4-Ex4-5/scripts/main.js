'use strict';
//Calcular el ancho de una caja
const calcBox = (a, b, c, d) => {
    let widthBox;
    if (a) { //case border-box
        widthBox = b + (c*2);
    } else { //case content-box
        widthBox = b + (c*2) + (d*2);
    }
    return widthBox;
};
console.log(calcBox(false,100,10,2));