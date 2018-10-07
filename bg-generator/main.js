var css = document.querySelector("h2");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var picker1 = document.getElementById("picker1");
var picker2 = document.getElementById("picker2");

color1.onchange = function() {
	picker1.style.backgroundColor = color1.value;
}

color2.onchange = function() {
	picker2.style.backgroundColor = color2.value;
}

picker1.style.backgroundColor = color1.value;
picker2.style.backgroundColor = color2.value;

function displayCSS() {
    css.textContent = body.style.background + ";";
}

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    displayCSS();
}

document.addEventListener("DOMContentLoaded", setGradient);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);