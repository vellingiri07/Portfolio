$(document).ready(function() {
    // When the user hovers over a project title, show the description.
    $('.project h3').hover(function() {
        $(this).next().toggle();
    });
});
function changeTheme(theme) {
    // Set the background color and font color of the body element.
    $('body').css('background-color', theme.background);
    $('body').css('color', theme.font);

    // Change the color of the project titles.
    $('.project h3').css('color', theme.title);

    // Change the color of the links.
    $('a').css('color', theme.link);
}
<button id="theme-toggle">Toggle Theme</button>
$(document).ready(function() {
    var theme1 = {
        background: '#333',
        font: '#fff',
        title: '#007BFF',
        link: '#46d4c9'
    };

    var theme2 = {
        background: '#fff',
        font: '#333',
        title: '#46d4c9',
        link: '#007BFF'
    };
