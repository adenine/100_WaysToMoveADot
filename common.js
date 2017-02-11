/*
 *  100 Ways to Move a Dot: 1 - Simple Move
 *  
 *  SUMMARY: Draw a rectangle which follows the mouse around at a steady rate.
 *
 *  DESCRIPTION: Creating a simple shape that follows the mouse around reveals 
 *  many details about programming motion and the relationship of visual intent 
 *  and code. People usually begin by dividing the distance, but that will cause
 *  the object to move and slow down as it approaches it's goal. You can instead
 *  use some Trigonomtry to calculate a steady path.
 * 
 *  Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php 

 * f8f3df
 * df002d or c50d29
 * 000509
 * 
 * ced6c1
 * aa3a26
 * 1d1b1e
 * 
 */

var originDot = [];
var destinationDot = [];
var movingDot = [];

function commonSetup() {
	createCanvas(438,600);
	originDot = new Array(100,100,40,40);
	destinationDot = new Array(438-100,438-100,40,40);
	movingDot = new Array(originDot[0], originDot[1], 120, 120);
}

function commonDraw() {
	background("#f8f3df");
  	
  	stroke("#000509");
  	noFill();
  	rectMode(CORNER);
	rect(30,30,438-60,378);
	drawFooter();
}

function drawOriginDot() {
	noStroke();
	fill("#c50d29");
	//ellipse(originDot[0],originDot[1],originDot[2],originDot[3]);
	  rectMode(CENTER);
  rect(originDot[0], 
       originDot[1], 
       originDot[2], 
       originDot[3]
       );
}

function drawDestinationDot() {
	noStroke();
	fill("#c50d29");
	//ellipse(destinationDot[0],destinationDot[1],destinationDot[2],destinationDot[3]);

	push();
	translate(0,-20);

	  triangle(
	   destinationDot[0], 
       destinationDot[1],
       destinationDot[0]+22,
       destinationDot[1]+40,
       destinationDot[0]-22,
       destinationDot[1]+40
       );
	 pop();

}

function drawFooter() {
	noStroke();
	fill("#000509");
	text("Dot No. 1: Simple Move",30,424);
}

function drawMovingDot() {
	noStroke();
	fill("#000509");
  	ellipse(movingDot[0],movingDot[1],movingDot[2],movingDot[3]);
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