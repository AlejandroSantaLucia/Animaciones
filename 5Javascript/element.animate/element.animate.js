const $pelota = document.getElementById ('pelota')

const animation = $pelota.animate (
    [
        {
            transform: 'translateX(0)'
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

    // const $pelota = document.getElementById('pelota');

    // // element.animate(keyframes = [], option = {})
    // const animation = $pelota.animate([
    //   // from
    //   {
    //     transform: 'translateX(0)'
    //   },
    //   // to
    //   {
    //     transform: 'translateX(500px)' // 250
    //   }
    // ],{
    //   duration: 1000,
    //   delay: 1000,
    //   direction: 'normal',
    //   easing: 'linear',
    //   iterations: Infinity,
    //   fill: 'forwards',
    //   iterationStart: .5, // = 50%
    //   // endDelay: 5000,
    // })


    const $pelotab = document.getElementById ('pelotab')
    
    const animationb = $pelotab.animate (
        [
            {
                transform: 'scale(1)', color: '#ff0000'
            },
            {
                transform: 'scale(1.5,3)', color: '#00ff00'
            }
        ],
        {
            duration: 500, 
            delay:  100,
            direction: 'normal',
            easing: 'ease-in',
            iterations: 5,
            fill: 'forwards',
            interarionStart:1, 
            // endDelay: 5000,
        })







    const $pelotac = document.getElementById ('pelotac')
    
    const animationc = $pelotac.animate (
        [
            {
                transform: 'scale(.5)', color: '#ff0000'
            },
            {
                transform: 'scale(3,.8) skew(45deg) translate(100px)', color: '#00ff00', 
            }
        ],
        {
            duration: 500, 
            delay:  100,
            direction: 'normal',
            easing: 'ease-out',
            iterations: 8,
            fill: 'forwards',
            interarionStart:.5, 
            // endDelay: 5000,
        })



    const $carga = document.getElementById ('carga')
    
    const animationcarga = $carga.animate (
        [
            {
                transform: 'scale(1)'  
            },
            {
                transform: 'scale(2,1) translate(200px)'
            },
            {
                transform: 'scale(3,1) translate(100px)'
            },
            {
                transform: 'scale(1,1) translate(300px)'
            },
            {
                transform: 'scale(5,1) translate(200px)'
            },
        ],
        {
            duration: 2000, 
            delay:  100,
            direction: 'normal',
            easing: 'ease-out',
            iterations: 8,
            fill: 'forwards',
            interarionStart:1, 
            // endDelay: 5000,
        })
    