'use strict';

/*Write the actual year and the calculator in the console will tell you the next leap year
*/

let actualYear = 'enter here the actual year';

if (actualYear%4 === 0) {
console.log(actualYear + ' , ahora, es bisiesto')
} else if ((actualYear+1)%4 === 0) {
    console.log('el próximo año ' + (actualYear + 1) + ' será bisiesto')
} else if ((actualYear+2)%4 === 0) {
    console.log('Dentro de dos años, en ' + (actualYear + 2) + ' será bisiesto')
} else if ((actualYear+3)%4 === 0) {
    console.log('Dentro de tres años, en el ' + (actualYear + 3) + ' será bisiesto')
}



