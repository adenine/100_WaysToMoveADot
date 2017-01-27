/// Naive Implementation

var originDot = [];
var destinationDot = [];
var movingDot = [];
var speed = 40.0;

function setup() {
	createCanvas(600,600);
	originDot = new Array(10,10,10,10);
	destinationDot = new Array(590,590,10,10);
	movingDot = new Array(originDot[0], originDot[1], 40, 40);
}

function draw() {
  background(100);
  noStroke();
  fill(255);
  // x, y, size, size
  ellipse(movingDot[0],movingDot[1],movingDot[2],movingDot[3]);
  if ( ((destinationDot[0] - movingDot[0]) > 1) && ((destinationDot[1] - movingDot[1]) > 1) ) {
  	movingDot[0] = movingDot[0] + ((destinationDot[0] - movingDot[0]) / speed);
  	movingDot[1] = movingDot[1] + ((destinationDot[1] - movingDot[1]) / speed);
  	//console.log(((destinationDot[0] - movingDot[0]) > 1));
  } else {
  	movingDot[0] = originDot[0];
  	movingDot[1] = originDot[1];
  	console.log("reset to originDot");
  }


  fill(255,0,0);
  ellipse(originDot[0],originDot[1],originDot[2],originDot[3]);
  ellipse(destinationDot[0],destinationDot[1],destinationDot[2],destinationDot[3]);

  if (originDot[4] == true) {
  	originDot[0] = mouseX;
  	originDot[1] = mouseY;
  }

  if (destinationDot[4] == true) {
  	destinationDot[0] = mouseX;
  	destinationDot[1] = mouseY;
  }

}

function mousePressed() {
	    // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= originDot[0] && originDot[0] <= originDot[0] + originDot[2] &&
    mouseY >= originDot[1] && mouseY <= originDot[1] + originDot[3]) {
  		originDot[4] = true;
  		console.log("Over originDot");

  }

  	    // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= destinationDot[0] && destinationDot[0] <= destinationDot[0] + destinationDot[2] &&
    mouseY >= destinationDot[1] && mouseY <= destinationDot[1] + destinationDot[3]) {
  		destinationDot[4] = true;

  		console.log("Over destinationDot");
  }
}

function mouseReleased() {
	originDot[4] = false;
	destinationDot[4] = false;
}
// NEXT STEPS
// * Check on mobile and desktop
// 