'use strict';

const changeBackgroundColor = document.querySelector('.body');

const changeColorBody = (e) => {

    if (e.key === "r") {
        changeBackgroundColor.classList.add("bgc_red");
        changeBackgroundColor.classList.remove("bgc_purple");
    } else if (e.key === "m") {
        changeBackgroundColor.classList.add("bgc_purple");
        changeBackgroundColor.classList.remove("bgc_red");
    } else {
        changeBackgroundColor.classList.remove("bgc_red");
        changeBackgroundColor.classList.remove("bgc_purple");
    }
}

changeBackgroundColor.addEventListener('keypress', changeColorBody);