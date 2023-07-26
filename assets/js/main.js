var root = document.querySelector(':root');
var switcher = document.querySelector('input[type="checkbox"]');

switcher.addEventListener('change', function(e) {
    var isChecked = e.currentTarget.checked;
    if(isChecked) {
	    root.style.setProperty("--colorBg", "#333333");
        root.style.setProperty("--primaryFontClr", "#ffffff");
	    return;
    }
    root.style.setProperty("--colorBg", "#ffffff");
    root.style.setProperty("--primaryFontClr", "#333333");
});

document.addEventListener('mousemove', function(e) {
    var x = e.clientX;
    var y = e.clientY;

    var middleX = window.innerWidth / 2;
    var middleY = window.innerHeight / 2;

    var offsetX  = ((x - middleX) / middleX) * 45;
    var offsetY = ((y - middleY) / middleY) * 45;

    root.style.setProperty('--boxRotateX', -1 * offsetY + "deg");
    root.style.setProperty('--boxRotateY', offsetX + "deg");
});
