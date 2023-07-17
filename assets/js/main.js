var root = document.querySelector(':root');
var switcher = document.querySelector('input[type="checkbox"]');

switcher.addEventListener('change', function(e) {
    var isChecked = e.currentTarget.checked;
    if(isChecked) {
	root.style.setProperty("--color-bg", "#333333");
        root.style.setProperty("--primary-font-clr", "#ffffff");
	return;
    }
    root.style.setProperty("--color-bg", "#ffffff");
    root.style.setProperty("--primary-font-clr", "#333333");
});
