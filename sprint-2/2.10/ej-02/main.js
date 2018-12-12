const boxName = document.querySelector(".boxName");
const btnSearch = document.querySelector(".btn-Search");
const list = document.querySelector(".list");
const api = "https://swapi.co/api/people/?search=";


function handlerSearch(e) {

    list.innerHTML = "";
    let valueName = boxName.value;
    let url = api + valueName;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let characters = data.results;

            for (i = 0; i < characters.length; i++) {
                let nameCh = characters[i].name;
                let gender = characters[i].gender;

                let itemCharacter = document.createElement('li');
                let newContent = document.createTextNode(`${i+1} ${nameCh} : gender ${gender}`);
                itemName = itemCharacter.appendChild(newContent);
                list.appendChild(itemCharacter);
            }
        })
        .catch(error => list.innerHTML = `Ha sucedido un error: ${error}`);









}










btnSearch.addEventListener("click", handlerSearch);