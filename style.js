
function changeHeaderBackgroundColor() {
    const header = document.querySelector('header');
    header.style.backgroundColor = getRandomColor();
}


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function addPulsatingEffect() {
    const moreAboutLink = document.getElementById('moreabout');
    moreAboutLink.style.animation = 'pulsate 1s infinite';
}
window.addEventListener('load', changeHeaderBackgroundColor);

window.addEventListener('load', addPulsatingEffect);
