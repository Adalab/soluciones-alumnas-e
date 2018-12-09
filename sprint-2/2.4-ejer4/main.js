'use strict';

// function countBox(a, b, c, d) {
//     const borderBox = a;

//     if (borderBox === a) {
//         countBox = b;
//     } else {
//         countbox = b, c, d;
//     }
    
// }
// const resultCountbox = countBox(true, 80, 20, 10);
// console.log(resultCountbox);


let model;
let totalWidth;
let content;

function countContent(boxModel, w, p, b) {
  let totalPadding = p * 2;
  let totalBorder = b * 2;
 

  if (boxModel === true/*border-box*/) {
    model = "border-box";
    content = w - totalPadding - totalBorder;
    totalWidth = w;
  } else/*content-box*/{
    model = "content-box";
    content = w;
    totalWidth = w + totalPadding + totalBorder;
  }

  return content;
};


let width = countContent(false, 100, 10, 1);


let text = document.querySelector('.text');
text.innerHTML = `Box model is ${model}, space for content is ${width}px and total width of the box is ${totalWidth}px.`;

