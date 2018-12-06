'use strict';

const adalabers = [
    {
        name: 'María',
        age: 29,
        profession: 'Diseñadora',
    },
    {
        name: 'Lucía',
        age: 31,
        profession: 'Ingeniera Química',
    },
    {
        name: 'Susana',
        age: 34,
        profession: 'Periodista',
    },
    {
        name: 'Rocío',
        age: 25,
        profession: 'Actriz',
    },
    {
        name: 'Inmaculada',
        age: 21,
        profession: 'Profesora',
    },
    {
        name: 'Cristina',
        age: 24,
        profession: 'Enfermera',
    },
];

function countAdalabers() {
    return adalabers.length;
};

function averageAge() {
    let acc = 0;
    for (let i = 0; i < adalabers.length; i++) {
        acc += adalabers[i].age;
    }
    return acc / adalabers.length;
};

function theYoungestAdalaber() {
    let allAgesAdalabers = []
    for (let i = 0; i < adalabers.length; i++) {
        let age = adalabers[i].age; 
        allAgesAdalabers.push(age);
    }
    let littleAdalaber = Math.min.apply(null, allAgesAdalabers);
    return `La adalaber más joven tiene ${littleAdalaber} años`;  
};

function countDesigners() {
    let numberDesignersAdalabers = 0;
    for (let i = 0; i < adalabers.length; i++) {
        if (adalabers[i].profession === 'Diseñadora') {
            numberDesignersAdalabers = numberDesignersAdalabers + 1;
        }
    }
    return `El número de Adalabers diseñadoras es ${numberDesignersAdalabers}`;
};

