const $hideButtom = document.getElementById (`hide-modal`) ;
const $overlay = document.getElementById (`overlay`) ;
const $modal = document.getElementById (`modal`) ;

$hideButtom.addEventListener (`click`, () => {
    // console.log(event)
    $modal.style.animation = `animationOut .8s forwards`;
    $overlay.classList.remove(`active`)
})