"use strict";
const selectCities = document.querySelector("#cities");
const imagesCities = [{
        image1: "images/madrid1.jpg",
        image2: "images/madrid2.jpg",
        image3: "images/madrid3.jpg",
    },

    {
        image1: "images/paris1.jpg",
        image2: "images/paris2.jpg",
        image3: "images/paris3.jpg",
    },

    {
        image1: "images/ny1.jpg",
        image2: "images/ny2.jpg",
        image3: "images/ny3.jpg",
    }, 
];

const windows1 = document.querySelector(".windows1");
const windows2 = document.querySelector(".windows2");
const windows3 = document.querySelector(".windows3");



function showCities(e) {

    const option = e.target;
    let optionSelect = parseInt(option.value)-1;

   function openStore(){

    windows1.style.backgroundImage=`url(${imagesCities[optionSelect].image1})`;
    windows2.style.backgroundImage=`url(${imagesCities[optionSelect].image2})`;
    windows3.style.backgroundImage=`url(${imagesCities[optionSelect].image3})`;
   }
   openStore();
}


selectCities.addEventListener("change",showCities);