var canvas = document.querySelector("canvas");


var c = canvas.getContext("2d");

var height = window.innerHeight;
var width = window.innerWidth;
canvas.width = width;
	canvas.height = height;

function krice() {
	
	var x = Math.random()*canvas.width;
	var y = Math.random()*canvas.height;
	var r = 20+Math.random()*30;

	var rot = Math.random()*255;
	var gruen = Math.random()*255;
	var blau = Math.random()*255;
	
	c.strokeStyle = "rgb("+rot+","+gruen+","+blau+")";
	c.lineWidth = r;
	var rot = Math.random()*255;
	var gruen = Math.random()*255;
	var blau = Math.random()*255;
	
	c.fillStyle = "rgb("+rot+","+gruen+","+blau+")";
	
	c.beginPath();

	c.arc(x, y, r, 0, Math.PI*2);
	c.fill();
	c.stroke();
}
setInterval(krice, 10);