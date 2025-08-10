// Apply saved font size on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedSize = localStorage.getItem('fontSize');
    if (savedSize) {
        document.documentElement.style.setProperty('--size-mult', savedSize);
    }
    const activeClass = localStorage.getItem('activeFontSize');
    if (activeClass) {
        noUnderlinesFontButtons();
        const activeButton = document.querySelector('.${activeClass}');
        if (activeButton) {
            activeButton.style.textDecoration = 'underline';
        }
    }
});


document.getElementById('font-size-1').addEventListener('click', function() {
    console.log('Font size 1 clicked!');
    changeFontSmall();
});
document.getElementById('font-size-2').addEventListener('click', function() {
    console.log('Font size 2 clicked!');
    changeFontMedium();
});
document.getElementById('font-size-3').addEventListener('click', function() {
    console.log('Font size 3 clicked!');
    changeFontLarge();
});


function changeFontSmall(){
    document.documentElement.style.setProperty('--size-mult', '1em');
    localStorage.setItem('fontSize', '1em');
    localStorage.setItem('activeFontSize', 'font-size-1');

    noUnderlinesFontButtons();
    document.querySelector('.font-size-1').style.textDecoration = 'underline';
}
function changeFontMedium(){
    document.documentElement.style.setProperty('--size-mult', '1.25em');
    localStorage.setItem('fontSize', '1.25em');
    localStorage.setItem('activeFontSize', 'font-size-2');

    noUnderlinesFontButtons();
    document.getElementById('font-size-2').style.textDecoration = 'underline';
}
function changeFontLarge(){
    document.documentElement.style.setProperty('--size-mult', '1.75em');
    localStorage.setItem('fontSize', '1.5em');
    localStorage.setItem('activeFontSize', 'font-size-3');

    noUnderlinesFontButtons();
    document.getElementById('font-size-3').style.textDecoration = 'underline';
}


function noUnderlinesFontButtons() {
    // Remove underlines from each font button
    /*
    document.querySelector('.font-size-1').style.textDecoration = 'none';
    document.querySelector('.font-size-2').style.textDecoration = 'none';
    document.querySelector('.font-size-3').style.textDecoration = 'none';
    */
    document.querySelectorAll('.font-size-1, .font-size-2, .font-size-3').forEach(el => {
        el.style.textDecoration = 'none';
    });
}
//TODO: Apply acrost all pages
