'use strict';

const users = [
    {name: 'Nymphadora Tonks', time: 9},
    {name: 'Cedric Diggory', time: 28},
    {name: 'Cho Chang', time: 35},
    {name: 'Luna Lovegood', time: 45},
    {name: 'Gregory Goyle', time: 56}
];


// Ej 1
const [a, b, c] = users;

console.log(`the winners are ${a.name} with ${a.time} seconds, ${b.name} with ${b.time} seconds and ${c.name} with ${c.time} seconds`);


// Ej 2
const [{name: aName}, {name: bName}, {name: cName}] = users;
const [{time: aTime}, {time: bTime}, {time: cTime}] = users;

console.log(`the winners are ${aName} with ${aTime} seconds, ${bName} with ${bTime} seconds and ${cTime} with ${cTime} seconds`);

//Ej 3
const newUser = [{name: 'Argus Filch', time: '78'}];
const allUsers = [...users, ...newUser];

console.log(allUsers);

//Ej 4
const [winner] = allUsers;
const sameWinner = {...winner, win: 1};
console.log(sameWinner);