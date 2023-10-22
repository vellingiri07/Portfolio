// Function to change the header background color when the page loads
function changeHeaderBackgroundColor() {
    const header = document.querySelector('header');
    header.style.backgroundColor = getRandomColor();
}

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to add a pulsating effect to the "More About Me" link
function addPulsatingEffect() {
    const moreAboutLink = document.getElementById('moreabout');
    moreAboutLink.style.animation = 'pulsate 1s infinite';
}

// Event listener for changing the header background color
window.addEventListener('load', changeHeaderBackgroundColor);

// Event listener for the "More About Me" link pulsating effect
window.addEventListener('load', addPulsatingEffect);
