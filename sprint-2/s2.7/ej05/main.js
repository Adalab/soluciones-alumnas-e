'use strict';

const numbers = [1, 2, 3, 4, 5];

//let acc = 0;  I think we do not need this value because we can define it within the function (let acc = 0; line 29)

/*for (let i = 0; i < numbers.length; i++) {
    acc += numbers[i];
}

const average = acc / numbers.length;

console.log(`La media del array numbers es ${average}.`);

numbers[5] = 6;

acc = 0;

for (let i = 0; i < numbers.length; i++) {
    acc += numbers[i];
}

const newAverage = acc / numbers.length;

console.log(`La nueva media del array numbers es ${newAverage}.`);*/


function average (arr) {
    let acc = 0;
    for (let i = 0; i < arr.length; i++) {
        acc += arr[i];
    }
    const result = acc / arr.length;
    console.log(`La media del array es ${result}.`);
}

//console.log(average(numbers)); 

average(numbers); // we do not need a console.log () again because we already have it inside the function

numbers[5] = 6;

average(numbers);

const newNumbers = [10, 20, 30];

average(newNumbers);