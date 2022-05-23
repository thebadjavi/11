// Recuperamos TODOS los elementos HTML que cumplen con la condición class="button"
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(addButtonListener);

function addButtonListener(button) {
    button.addEventListener('click', (e) => {

        
        body.style.backgroundColor = e.target.id

    
    })
}