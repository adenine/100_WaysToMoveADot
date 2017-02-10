var originSquare = [];
var destinationTriangle = [];
var movingDot = [];
var speed = 40.0;

/*
 *  100 Ways to Move a Dot: 0 - Jump
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
 */

function setup() {
	createCanvas(600,600);
	originSquare = new Array(10,10,10,10);
	destinationTriangle = new Array(580,580,590,590);
	movingDot = new Array(originSquare[0], originSquare[1], 40, 40);
}

function draw() {
  background(100,100,100);
  stroke(255,255,255);
  noFill();


  rectMode(CENTER);
  rect(originSquare[0], 
       originSquare[1], 
       originSquare[2], 
       originSquare[3]
       );

  triangle(destinationTriangle[0], 
       destinationTriangle[1],
       destinationTriangle[0]+3,
       destinationTriangle[1]+5,
       destinationTriangle[0]-3,
       destinationTriangle[1]+5
       );

  //destinationTriangle[0] = originSquare[0];
  //destinationTriangle[1] = originSquare[1];

  line(originSquare[0], originSquare[1], destinationTriangle[0], destinationTriangle[1]+3);

  if (originSquare[4] == true) {
    originSquare[0] = mouseX;
    originSquare[1] = mouseY;
  }

  if (destinationTriangle[4] == true) {
    destinationTriangle[0] = mouseX;
    destinationTriangle[1] = mouseY;
  }

}

function mousePressed() {
	    // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= originSquare[0] && originSquare[0] <= originSquare[0] + originSquare[2] &&
    mouseY >= originSquare[1] && mouseY <= originSquare[1] + originSquare[3]) {
  		originSquare[4] = true;
  		console.log("Over originDot");

  }

  	    // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= destinationTriangle[0] && destinationTriangle[0] <= destinationTriangle[0] + destinationTriangle[2] &&
    mouseY >= destinationTriangle[1] && mouseY <= destinationTriangle[1] + destinationTriangle[3]) {
  		destinationTriangle[4] = true;

  		console.log("Over destinationDot");
  }
}

function mouseReleased() {
	originSquare[4] = false;
	destinationTriangle[4] = false;
}
// NEXT STEPS
// * Check on mobile and desktop
// 