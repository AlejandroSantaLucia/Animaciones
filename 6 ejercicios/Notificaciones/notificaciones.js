const $button = document.getElementById (`button`);
const $bell = document.getElementById (`notification`);



$button.addEventListener (`click`, () =>{
    const count = Number($bell.getAttribute(`data-count`)) || 0; // aca estamos diciendo que tome el valor del atributo data-count de $bell, lo transforme en const y lo muestr como numero. || si no se puede ejecutar, que me de el valor 0
    $bell.setAttribute(`data-count`, count + 1); // aca le decimos que a bell modifique el atributo de data-count +1 por cada click
    $bell.classList.add(`show-count`) // al hacer click que agregue la clase show-count 
    $bell.classList.add(`notify`) // al hacer click que agregue la clase notify
})

$bell.addEventListener(`animationend`, () => {
    $bell.classList.remove (`notify`)
}) // con esta funcion decimos que cuando se escuche el animationend de $bell en JS remueva la class "notify" para que quede neutral antes de cada click.