// GRADIENT BACKGROUND GENERATOR

var css = document.querySelector("h2");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var picker1 = document.getElementById("picker1");
var picker2 = document.getElementById("picker2");
var buttonRight = document.querySelector(".right");
var buttonLeft = document.querySelector(".left");
var buttonUp = document.querySelector(".up");
var buttonDown = document.querySelector(".down");
var direction = "to right";

// set dummy picker bg colors
color1.onchange = function () {
    picker1.style.backgroundColor = color1.value;
}

color2.onchange = function () {
    picker2.style.backgroundColor = color2.value;
}

// display selected value
function displayCSS() {
    css.textContent = body.style.background + ";";
}

// set gradient bg
function setGradient() {
    body.style.background = "linear-gradient(" + direction + ", " + color1.value + ", " + color2.value + ")";
    displayCSS();
}

// display initial value before interaction
document.addEventListener("DOMContentLoaded", setGradient);

// set initial bg color for the dummy pickers
picker1.style.backgroundColor = color1.value;
picker2.style.backgroundColor = color2.value;

// change the bg gradient on input
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// change gradient directions
buttonLeft.addEventListener("click",
    function () {
        direction = "to left";
        setGradient();
    });

buttonRight.addEventListener("click",
    function () {
        direction = "to right";
        setGradient();
    });

buttonUp.addEventListener("click",
    function () {
        direction = "to top";
        setGradient();
    });

buttonDown.addEventListener("click",
    function () {
        direction = "to bottom";
        setGradient();
    });