'use strict';

const borderBox = false;
const contentBox = true;

function boxModel(a, b, c, d){
    if(a === false){
    return b;
    }
    else{
        const sum = (c*2) + (d*2) + b;
        return sum;
    }
}

console.log(boxModel(borderBox, 5, 5, 2));

console.log(boxModel(contentBox,10, 2, 2));