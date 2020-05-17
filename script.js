var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");



function randomColor(){
	var min = Math.ceil(0);
 	var max = Math.floor(255);
	var rand = Math.floor(Math.random() * (max - min) + min);
	return(rand);
	
}

function randomColor1(){
	var min = Math.ceil(0);
 	var max = Math.floor(255);
	var rand = Math.floor(Math.random() * (max - min) + min);
	return(rand);

}

function randomColor2(){
	var min = Math.ceil(0);
 	var max = Math.floor(255);
	var rand = Math.floor(Math.random() * (max - min) + min);
	return(rand);

}

function randomGradient(){
	body.style.background = "linear-gradient(to right, rgb(" + randomColor() + ", " + randomColor1() + ", "+ randomColor2() + ")," + "rgb(" + randomColor() + ", " + randomColor1() + ", " + randomColor2() + "))";
	css.textContent = body.style.background + ";";
}


function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomGradient);


