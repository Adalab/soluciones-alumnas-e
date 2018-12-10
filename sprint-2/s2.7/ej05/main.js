'use strict';

const numbers = [1, 2, 3, 4, 5];

/*let acc = 0;

for (let i = 0; i < numbers.length; i++) {
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

average(numbers);

numbers[5] = 6;

average(numbers);

const newNumbers = [10, 20, 30];

average(newNumbers);