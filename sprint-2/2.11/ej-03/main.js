'use strict';
const select = document.querySelector('#info');
const list = document.querySelectorAll('input');
const form = [
    {
        name: 'Laura',
        surname: 'Santiago',
        phone: '9999999'
    },
    {
        name: 'Elisa',
        surname: 'Martin',
        phone: '7777777'
    },
    {
        name: 'Altea',
        surname: 'Piñeiro',
        phone: '4444444'
    }
]

function selection() {
    if (select.value === 'Laura') {
        list[0].value = form[0].name;
        list[1].value = form[0].surname;
        list[2].value = form[0].phone;
    }

    else if (select.value === 'Elisa') {
        list[0].value = form[1].name;
        list[1].value = form[1].surname;
        list[2].value = form[1].phone;
    }
    else if (select.value === 'Altea') {
        list[0].value = form[2].name;
        list[1].value = form[2].surname;
        list[2].value = form[2].phone;
    }
}

selection();
select.addEventListener('change', selection);