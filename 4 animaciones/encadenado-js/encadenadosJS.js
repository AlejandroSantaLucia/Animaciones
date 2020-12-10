const $cuadrado = document.getElementById("cuadrado")  // con esto creo una constante con el ID Cuadrado de html


// $cuadrado.addEventListener("animationend", (event) => {
//     console.log (event)
// })
$cuadrado.addEventListener("animationend", (event) => {
    console.log (event.animationName);
    if (event.animationName === "escalera") { ////si aniimationName es  igual a "escalera"
        $cuadrado.style.animationName ="cuadrado escalera"; //// que dentro de los estilos de cuadrado cambien el animationName por cuadrado y escalera
        $cuadrado.style.animationDuration ="3s"; /// y cambien el tiempo a 3 segundos

    }
})
