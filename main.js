const swordsSound = new Audio('./sounds/swords.wav');
const luffySound = new Audio('./sounds/luffy.mp3');
const swordsTimeout = 5000;
const spinDuration = 2700;
const winkDuration = 3600;

var started = false;


function isMobile() {
    return screen.width < 1023;
}

function start() {
    if (started) return;
    started = true;
    document.querySelector('main').style.cursor = 'default';

    luffySound.play();
    if (isMobile()) {
        setTimeout(() => {
            anime({
                targets: '.zoro, .luffy',
                direction: 'forwards',
                opacity: 1,
                delay: anime.stagger(1500),
                easing: 'spring(1, 120, 12, 0)',
                duration: 1500,
            });
        }, spinDuration);
        luffyWink();
        zoroSwordsAnimation();
        return;
    }
    zoroSwordsAnimation();

    // if (isMobile()) {
    //     setTimeout(() => {
    //         anime({
    //             targets: '.zoro, .luffy',
    //             direction: 'forwards',
    //             opacity: 1,
    //             translateY: {
    //                 value: 70,
    //             },
    //             translateX: {
    //                 value: 0,
    //             },
    //             rotate: '1turn',
    //             delay: anime.stagger(1500),
    //             easing: 'spring(1, 120, 12, 0)',
    //             duration: 1500,
    //         });
    //     }, spinDuration);
    //     luffyWink();
    //     zoroSwordsAnimation();
    //     return;
    // }
    zoroSwordsAnimation();
    setTimeout(() => {
        anime({
            targets: '.zoro, .luffy',
            direction: 'forwards',
            opacity: 1,
            translateY: {
                value: 250,
            },
            translateX: {
                value: 400,
            },
            rotate: '1turn',
            delay: anime.stagger(1500),
            easing: 'spring(1, 120, 12, 0)',
            duration: 1500,
            complete: function (anim) {
                setTimeout(() => {
                    console.log(anim);
                    console.log('fired');
                    anime({
                        targets: '.zoro, .luffy',
                        direction: 'forwards',
                        translateY: {
                            value: 0,
                        },
                        translateX: {
                            value: 0,
                        },
                        rotate: '1turn',
                        delay: anime.stagger(800),
                        easing: 'spring(1, 120, 12, 0)',
                    });
                }, 1000);
            },
        });
    }, spinDuration);
    luffyWink();
}

function luffyWink() {
    setTimeout(() => {
        anime({
            targets: '.luffy > .face > i:first-child',
            direction: 'alternate',
            scaleY: {
                value: 0.1,
                duration: 300,
            },
            easing: 'easeOutSine'

        });
    }, winkDuration);
}
function zoroSwordsAnimation() {
    setTimeout(() => {
        anime({
            targets: '#leftSword, #rightSword',
            opacity: 1,
            delay: 600,
            duration: 1000,
        });
        anime({
            targets: '#leftSword',
            rotate: -45,
            translateY: -30,
            translateX: -115,
            easing: 'easeInOutQuad',
            duration: 500,
            delay: 500,
        });
        anime({
            targets: '#rightSword',
            rotate: -135,
            translateY: -35,
            translateX: 92,
            easing: 'easeInOutQuad',
            duration: 500,
            delay: 500,
        });
    }, swordsTimeout);

    setTimeout(() => {
        swordsSound.play();
    }, swordsTimeout + 300);
}