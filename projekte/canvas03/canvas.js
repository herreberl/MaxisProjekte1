var canvas = document.querySelector("canvas");
canvas.width = 500;
canvas.height = 600;
console.log(canvas);

var c = canvas.getContext("2d");

c.beginPath();
c.ellipse(250, 200, 80, 100, 0, 2*Math.PI, 0, false);
c.fillStyle = "#F7D358";
c.fill();
c.strokestyle = "black";
c.stroke();

c.beginPath();
c.fillStyle = "#B18904";
c.fillRect(252, 250, 30, 10);
c.stroke();
c.fillStyle = "white";
c.fillRect(282, 250, 60, 10);
c.stroke();

c.beginPath();
c.arc(250, 160, 81, Math.PI, 0, false);
c.fillStyle = "#61380B";
c.lineWidth = "10";
c.strokeStyle = "#61380B";
c.fill();
c.moveTo(100, 160);
c.lineTo(400, 160);
c.stroke();

c.beginPath();
c.lineWidth="2";
c.strokeStyle="black";
c.moveTo(200, 190);
c.lineTo(230, 200);
c.moveTo(400, 190);
c.lineTo(330, 200);

c.stroke();

