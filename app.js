var MenuCoffee = document.getElementById("MenuCoffee");
var getCoffee = document.getElementById('getCoffee');
var getMenu = document.getElementById('getMenu');
var getcoffehouse = document.getElementById('getcoffehouse');
var getrespons = document.getElementById('getrespons');
var getabout = document.getElementById('getabout');
var Menuh = document.getElementById('Menuh');
var coffehouse = document.getElementById('coffehouse');
var responsibility = document.getElementById('responsibility');
var about = document.getElementById('about');

MenuCoffee.addEventListener('mouseenter', (event) => {
    getCoffee.style.display = "inline-block";
});

MenuCoffee.addEventListener('mouseleave', (event) => {
    getCoffee.style.display = "none";
});

Menuh.addEventListener('mouseenter', (event) => {
    getMenu.style.display = "inline-block";
});

Menuh.addEventListener('mouseleave', (event) => {
    getMenu.style.display = "none";
});

coffehouse.addEventListener('mouseenter', (event) => {
    getcoffehouse.style.display = "inline-block";
});

coffehouse.addEventListener('mouseleave', (event) => {
    getcoffehouse.style.display = "none";
});

responsibility.addEventListener('mouseenter', (event) => {
    getrespons.style.display = "inline-block";
});

responsibility.addEventListener('mouseleave', (event) => {
    getrespons.style.display = "none";
});

about.addEventListener('mouseenter', (event) => {
    getabout.style.display = "inline-block";
});

about.addEventListener('mouseleave', (event) => {
    getabout.style.display = "none";
});