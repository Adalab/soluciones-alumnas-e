'use strict';

const img = document.querySelector('.img');
const btn = document.querySelector('.btn');
const text = document.querySelector('.text');


///primero pinchas las apis y ves como esta guardada la info. Si es un objeto o un array. 
//la api del numero random es facil, se saca como la de piedrapapeltijera, es poner .result y au. La jodida es la de la lista de razas, que  es un objeto de dos claves con un array dentro. Por lo que tengo que conectar el numero.result con un indice de ese array de razas.
// mira la api de razas. Primero en el objeto hay una key de status con valor. Luego otra key de message con un array. Pues quiero traer del fetch de esa API el array, que es el valor de message. Bien, pero no me quedo ahi, porque quiero una raza de ahi dentro. Como es array, tengo que seguir este esquema: "resultadoDelFetchAlQueLlamamosData.message[un numero que corresponde con una posicion de un elemento de ese array]". El numero lo voy a sacar de la API de numero random y se lo voy a cascar. Veamos como:



function handlePerro(){
    fetch('https://api.rand.fun/number/integer?max=87') //engancho un num random hasta el 87 (que es el length de la lista de razas)
    .then(random => random.json()) //lo llamo random como podria haberlo llamado response, da igual. Al json que va
    .then(randomNum => { // si miro la api. veo un chorrazo que es un objeto, y ese objeto tiene dos keys: seed y result. Quiero result que me da el numero.
        return randomNum.result; //obtengo un num random de result. 
    })
    .then((myNumber) => { // a ese num random ahora lo llamo myNumber al entrar al siguiente then. Y este then de donde viene? Porque lo necesito para hacer otro fetch, intentando seguir la logica del codepen de la leccion [https://codepen.io/adalab/pen/baoNZq#0]. 
        fetch('https://dog.ceo/api/breeds/list') //aqui pido el listado y es un objeto con array. 
        .then(response => response.json()) //jotasoneo el listado
        .then(data =>{ 
            const dogName = data.message[myNumber]; //pillo del data (que es un objeto con array) que me saque lo que hay en su propiedad/key message. Y como quiero un item de ese listado, y tengo ya un numerico fresquito del anterior fetch, se lo pongo como indice de ese data.message. 
            return dogName; //lo asigno a una constante
            })
        .then((perrete) => { //dogName, que es data.message[myNumber], ahora lo llamo perrete.
            //Vale, ya tengo un elemento de ese indice de razas, asociado a un numero aleatorio. Ahora me voy a a la api de perros y miro como sacan las razas de forma random: 'https://dog.ceo/api/breed/Akita/images/random'. Mi data.message[myNumber] se traduce por una raza random. Entonces quito la raza escogida (Akita en este ejemplo) y le meto mi variable
            console.log(perrete) //me saca una raza random!
            fetch('https://dog.ceo/api/breed/' + perrete + '/images/random') //
            .then( response => response.json()) //y otra vez vuelta al torno. Machaco eso en json
            .then(imgData => { //al resultado lo llamo imgData porque why not
                console.log(imgData);// esto me devuelve este objeto: 
                //{status: "success", message: "https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_3380.jpg"}
                img.src = imgData.message; //entonces,viendo el objeto, observo que la imagen viene dada en la propiedad .message. ASi que de lo que me ha logueado la consola, quiero imgData.message, y se lo casco a img.src
                text.innerHTML = `${perrete}`; //ademas el perrete random tiene que estar escrito en pantalla, pues ya lo tengo del console.log anterior que lo he visto. Lo meto aqui y au.
            })
        });
        }
    );
};

btn.addEventListener('click', handlePerro);



// vamos a realizar un ejercicio con la API de 'https://dog.ceo/dog-api/' y la api de 'https://rand.fun/'. Tenemos que pedir un listado de razas de perros, y con un número aleatorio elegir una raza del listado:

// pintar un mensaje que muestre la raza elegida al azar. 

// pedir una imagen aleatoria de un perro de esa raza y pintarla.

// Si has llegado hasta aquí te proponemos otro reto, intenta que la última función sea la única que se encargue de interactuar con html, y sea esta la que pinte la raza y la imagen. ¡Al turrón!