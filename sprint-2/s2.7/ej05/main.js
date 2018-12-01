'use strict';

const numbers = [1, 2, 3, 4, 5];

let acc = 0;

/*
for (let i = 0; i < numbers.length; i++) {
    acc += numbers[i];
}

const average = acc / numbers.length;

console.log(average);

numbers[5] = 6;

acc = 0;

for (let i = 0; i < numbers.length; i++) {
    acc += numbers[i];
}

const newAverage = acc / numbers.length;

console.log(newAverage);
*/

function averageCalculator () {
    for (let i = 0; i < numbers.length; i++) {
        acc += numbers[i];
    }

    const average = acc / numbers.length;

    console.log(average);
}

averageCalculator(numbers.lenght);

numbers[5] = 6;

acc = 0;

averageCalculator(numbers.length);

numbers[6] = 7;

acc = 0;

averageCalculator(numbers.length);