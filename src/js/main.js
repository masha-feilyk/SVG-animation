// Cran
TweenMax.from('#cran', 2, {
    opacity: 0,
    x: 500,
    delay: .5
});

TweenMax.from ('#Rademade', 3, {
    opacity: 0,
    delay: 1.7,
    duration: 6,
    scale: 2,
    transformOrigin:"50% 50%",
    ease: Bounce.easeOut
});

// Bottom block of the house
TweenMax.from('#bottom-block', 2, {
    opacity: 1,
    y: 450,
    delay: 1
});

// Middle block of the house
TweenMax.from('#middle-block', 2, {
    opacity: 1,
    y: 450,
    delay: 2
});

TweenMax.from ('#gearLarge, #gearSmall', 3, {
    rotation: 360,
    transformOrigin:"50% 50%",
    duration: 15,
    delay: 4
});

// House roof
TweenMax.from('#roof', 2, {
    opacity: 1,
    y: 450,
    delay: 3
});

// People in the house
TweenMax.from('#people', 2, {
    opacity: 0,
    delay: 5
});

// Background
TweenMax.from ('#cloudSmall', 3, {
    opacity: 0,
    x: 100,
    delay: 1,
    ease: Back.easeOut
});

TweenMax.from ('#cloudLarge', 6, {
    opacity: 0,
    x: -100,
    delay: 1,
    ease: Circ.easeOut
});

TweenMax.from('#background', 2, {
    opacity: 0,
    delay: 6

});