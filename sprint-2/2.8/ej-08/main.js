'use strict';

const tasks = [
    {name: 'Recoger setas en el campo', completed: true},
    {name: 'Comprar pilas', completed: true},
    {name: 'Poner una lavadora de blancos', completed: true},
    {name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript', completed: false}
];

let tasksList = document.body.querySelector('#tasks');


function taskListItem(task) {
    if (task.completed) {
        return `<li class="task-done">${task.name}<input type="checkbox" checked></li>`
    } else {
        return `<li>${task.name}<input type="checkbox"></li>`;
    }
}


function init() {
    for (const task of tasks) {
        tasksList.innerHTML += taskListItem(task);
    }

    updateSubtitle();

    let listItems = tasksList.querySelectorAll('li');
    for (let i = 0; i < listItems.length; i++) {
        let checkbox = listItems[i].querySelector('input');
        checkbox.addEventListener('click', updateTask);
    }
}

function updateSubtitle() {
    let numTasks = tasks.length;
    let completed = 0;
    for (const task of tasks) {
        if (task.completed) {
            completed += 1;
        }
    }

    let pending = numTasks - completed;

    let subtitle = document.body.querySelector('h2');
    subtitle.innerText = `Tienes ${numTasks} tareas. ${completed} completadas y ${pending} por realizar`;
}


function updateTask() {
    let listItems = tasksList.querySelectorAll('li');
    for (let i = 0; i < listItems.length; i++) {
        let checkbox = listItems[i].querySelector('input');
        if (checkbox.checked) {
            tasks[i].completed = true;
            listItems[i].classList.add('task-done');
        } else {
            tasks[i].completed = false;
            listItems[i].classList.remove('task-done');
        }
    }
    updateSubtitle();
}

// INICIALIZACIÓN
init();
