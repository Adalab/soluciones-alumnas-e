'use strict';


//Ejercicio 1
const marks = [5, 4, 6, 7, 9];

const inflatedMarks = marks.map(mark => mark + 1);

//console.log(inflatedMarks);

//Ejercicio 2
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

const welcomeNames = names.map(name => 'bienvenida, ' + name);
//console.log(welcomeNames);

//Ejercicio 3
const users = [
    {name: 'María', isPremium: false},
    {name: 'Lucía', isPremium: true},
    {name: 'Susana', isPremium: true},
    {name: 'Rocío', isPremium: false},
    {name: 'Inmaculada', isPremium: false}
];


const welcomePremium = (user) => {
    if(user.isPremium === true) {
        //console.log('bienvenida, ' + user.name + '. Gracias por confiar en nosotros.');
    }else{
        //console.log('bienvenida, ' + user.name);
    }
}

const welcomeUsers = users.map(welcomePremium);

//Ejercicio 4
const premiumUsers = users.filter(user => user.isPremium === true);
//console.log(premiumUsers);

//Ejercicio 5
const pins = [2389, 2384, 2837, 5232, 8998];
const pairPins = pins.filter(pin => pin%2 === 0);
//console.log(pairPins);

//Ejercicio 6
const customers = [
    {name: 'María', isPremium: false, pin: 2389},
    {name: 'Lucía', isPremium: true, pin: 2384},
    {name: 'Susana', isPremium: true, pin: 2837},
    {name: 'Rocío', isPremium: false, pin: 5232},
    {name: 'Inmaculada', isPremium: false, pin: 8998}
];

const canPass = customers
    .filter(customer => customer.pin%2 === 0)
    .map(customer => customer.name);

//console.log(canPass);

//Ejercicio 7
const times = [56, 9, 45, 28, 35];

const average = times.reduce((acc, time) => acc + time) / times.length;
//console.log(average);

//Ejercicio 8
const runners = [
    {name: 'Gregory Goyle', time: 56},
    {name: 'Nymphadora Tonks', time: 9},
    {name: 'Luna Lovegood', time: 45},
    {name: 'Cedric Diggory', time: 28},
    {name: 'Cho Chang', time: 35}
];

const chooseWinner = (acc, runner) => {

    let bestTime = acc.time;
    let candidateTime = runner.time;

    if(candidateTime < bestTime){
        acc = runner;
    }
    return acc;

}

const winner = runners.reduce(chooseWinner);
console.log(winner.name);

//Ejercicio 9
const newRunners = [
    {name: 'Gregory Goyle', time: 56, student: true},
    {name: 'Nymphadora Tonks', time: 9, student: false},
    {name: 'Luna Lovegood', time: 45, student: true},
    {name: 'Cedric Diggory', time: 28, student: true},
    {name: 'Cho Chang', time: 35, student: true}
];

const studentWinner = newRunners
    .filter(runner => runner.student === true)
    .reduce(chooseWinner);

console.log(studentWinner.name);

//Ejercicio 10
runners.sort((a, b) => a.time - b.time);
console.log(runners);

//Ejercicio 11
const sortedCustomers = customers
    .map(customer => customer.name)
    .sort();
console.log(sortedCustomers);

customers.sort((a, b) => a.pin - b.pin);
console.log(customers);

customers.sort((a, b) => a.name - b.name);
console.log(customers);
