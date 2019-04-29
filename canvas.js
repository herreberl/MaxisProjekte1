function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	fill(0);
	textSize(50)
}
var x = window.innerWidth/2;
var y = 250;
var vx = 0;
var vy = 0;
var radius = 10;
var y1 = window.innerHeight/2;
var y2 = window.innerHeight/2;
var punkte1 = 0;
var punkte2 = 0;






//player2:


function keyPressed() {
		console.log(keyCode);
	if (keyCode == 38) {
		y2 -= 45;
	}

	if (keyCode == 40) {
		y2 += 45;
	}
	if (keyCode == 87){
		y1 -= 45;
	}

	if (keyCode == 83) {
		y1 += 45;
	}

	if (keyCode == 32) {
		vx=5.5;
		vy=5.5;
	}
}


function draw() {


	background("blue")
	text(punkte1+" - "+punkte2,window.innerWidth/2-30,200)
	x = x + vx;
	y = y + vy;

	movement()

	ellipse(x, y, radius*2, radius*2);
	rect(30, y1, 10, 150)
	rect(window.innerWidth-30, y2, 10, 150)
}

function movement () {
	if (x >= window.innerWidth) {
		x = window.innerWidth/2;
		y = 400;
		punkte1 += 1
		vx=7*(2-Math.random()*4);
		vy=7*(2-Math.random()*4);

	}

	if (x <= 0) {
		x = window.innerWidth/2;
		y = 400;
		punkte2 += 1;
		vx=7*(2-Math.random()*4);
		vy=7*(2-Math.random()*4);


	}

	if (y >= window.innerHeight - radius) {
		vy= -vy;
	}

	if (y <= radius) {
		vy= -vy;
	}
	kollision()

	if(y1 >= window.innerHeight) {
	y1 = 0;
	}
	if(y1 + 100 <= 0) {
	y1 = window.innerHeight ;
	}
	if(y2 >= window.innerHeight) {
	y2 = 0;
	}
	if(y2 + 100 <= 0) {
	y2 = window.innerHeight ;
	}


}

function kollision(){
	if (x >= window.innerWidth-35) {
		if (y >= y2 && y <= y2 + 150) {

			vx = -vx;

		}
	}
	if (x <=35) {
		if (y >= y1 && y <= y1 + 150) {
			vx=-vx;
		}
	}
}
