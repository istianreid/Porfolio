

// var hoverDistort = new hoverEffect({
//     parent: document.querySelector('.profile'),
//     intensity: 0.5,
//     image1: '../images/plain-photo.png',
//     image2: '../images/plain-photo.png',
//     displacementImage: '../JS hover/6.jpg'
// });


const text = baffle(".data");

    text.set ({
    characters : '▓█/ ░▒██▒ ▒<▓▒< █░░ ▓█▓░▓ ▓░▓▓ ░▒█ ▓▒▒/ ░░░>',
    speed: 120

});

text.start();
text.reveal(4000);


