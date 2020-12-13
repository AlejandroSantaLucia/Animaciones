const $pelota = document.getElementById ('pelota')

const animation = $pelota.animate (
    [
        {
            transform: 'translateX(0)'0
        },
        {
            transform: 'translateX(500px)'
        }
    ],
    {
        duration: 1000, // ms
        delay:  1000, // ms
        direction: 'normal',
        easing: 'linear',
        iterations: Infinity,
        fill: 'forwards',
        interarionStart: .5, // 50%
        // endDelay: 5000,
    })

    const $playButton = document.getElementById ('play')
    const $pauseButton = document.getElementById ('pause')
    const $stopButton = document.getElementById ('stop')
    const $reverseButton = document.getElementById ('reverse')


    $playButton.addEventListener ('click', (event)=> {
        animation.play ();
    })
    $pauseButton.addEventListener ('click', (event)=> {
        animation.pause ();
    })
    $stopButton.addEventListener ('click', (event)=> {
        animation.cancel ();
    })
    $reverseButton.addEventListener ('click', (event)=> {
        animation.reverse ();
    })