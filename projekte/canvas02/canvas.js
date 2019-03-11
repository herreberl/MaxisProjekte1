var canvas = document.querySelector("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
console.log(canvas);

var c = canvas.getContext("2d");

c.lineWidth = "2";
c.strokeStyle = "green";
c.beginPath();
c.moveTo(200, 300);
c.lineTo(200, 200);
c.lineTo(250, 150);
c.lineTo(300, 200);
c.lineTo(300, 300);
c.lineTo(200, 200);
c.lineTo(300, 200);
c.lineTo(200, 300);
c.lineTo(300, 300);
c.stroke();
