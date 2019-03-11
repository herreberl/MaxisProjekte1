console.log("abrakadabra");
var canvas = document.querySelector("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
console.log(canvas);
var c = canvas.getContext("2d");
c.fillRect(200, 200, 400, 100);
c.fillRect(200, 300, 100, 300);
c.fillRect(200, 600, 400, 100);
c.fillRect(600, 200, 100, 500);

c.lineWidth = 4
c.strokeStyle = "red"
c.beginPath();
c.moveTo(600, 200);
c.lineTo(200, 600);
c.stroke();

c.lineWidth = 4
c.strokeStyle = "red"
c.beginPath();
c.moveTo(700, 300);
c.lineTo(300, 700);
c.stroke();

