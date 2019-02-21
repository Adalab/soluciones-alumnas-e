'use strict';


/*1. Fecht / Obtiene nombres & imagen de colores / pinta en HTML ambos datos */
const listEl = document.querySelector('.list');
const containerEl = document.querySelector('.container');

const init = () => {
  fetch('https://raw.githubusercontent.com/Adalab/dorcas-repaso-sprint2/master/data/palettes.json')
    .then(response => response.json())
    .then(data => {console.log(data);
    console.log(data.palettes);
    const palettesArr = data.palettes;

        // for (let i = 0; i < 20; i++) {
        // } //OPCIÓN 1//

        for(const palette of palettesArr) {
            const namePalette = palette.name;
            console.log(namePalette);
            listEl.innerHTML += `<li>${namePalette}</li>` ; //Para que salgan todos poner +=/
            const colorsPalette = palette.colors;
            containerEl.innerHTML += `<div>${colorsPalette}</div>`;

        }
    
    })

    //SOLUCIONAR//

}


init ();
