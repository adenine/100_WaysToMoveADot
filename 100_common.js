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
 * 
 * f8f3df  
 * df002d or c50d29  
 * 000509  
 *   
 * ced6c1  
 * aa3a26  
 * 1d1b1e  
 *   
 * 2F2BAD, AD2BAD, E42692, F71568, F7DB15
 *
 * Moreover, their work was to be organized around three core principles of:
 * "tectonics (politically and socially appropriate use of industrial materials
 * with regard to a given purpose), construction (process of organizing the
 * material) and faktura (the choice of material and its appropriate treatment)." 
 * 
 * TODO:
 * - make movement work well with touch or mouse for sqaure and triangle
 * - figure out why title isn't showing up
 * - get text description below graphic working
 * - make it so you can't drag out square or triangle
 * - make the square / triangle cropped out
*/

var originDot = [];
var destinationDot = [];
var movingDot = [];

var topSketchMargin = 30;
var leftSketchMargin = 30;
var rightSketchMargin = 30;
var bottomSketchMargin = 300;
var canvasWidth = 438;
var canvasHeight = 600;
var sketchSize = 378;
var titleHeight = topSketchMargin+sketchSize+18;
var value = 0;

function commonSetup() {
	createCanvas(canvasWidth,canvasHeight);
	originDot = new Array(100,100,40,40);
	destinationDot = new Array(canvasWidth-100,canvasWidth-100,40,40);
	movingDot = new Array(originDot[0], originDot[1], 120, 120);
}

function commonDraw() {
	//background("#f8f3df");
	background("#F71568");
  	
  	//stroke("#000509");
  	stroke("#2F2BAD");
  	noFill();
  	rectMode(CORNER);
    // draw sketch outline
	 rect(leftSketchMargin,topSketchMargin,sketchSize,sketchSize);
}

function drawOriginDot() {
	noStroke();
	//fill("#c50d29");
	fill("#F7DB15");
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
	//fill("#c50d29");
	fill("#F7DB15");
	//ellipse(destinationDot[0],destinationDot[1],destinationDot[2],destinationDot[3]);

  if (originDot[4] == true) {
  	originDot[0] = mouseX;
  	originDot[1] = mouseY;
  }

  if (destinationDot[4] == true) {
  	destinationDot[0] = mouseX;
  	destinationDot[1] = mouseY;
  }
  
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

function drawFooter(_title, _desc) {
	noStroke();
  fill("#F71568");
  //draw rect mask
  rectMode(CORNER);
  rect(0,0,width,topSketchMargin); //top
  rect(0,0,leftSketchMargin,height); //left
  rect(width-rightSketchMargin+1,0,rightSketchMargin,height); //right
  rect(0,sketchSize+topSketchMargin+1,width,height); //bottom
	fill("#2F2BAD");
	text(''+_title,leftSketchMargin,titleHeight);
  text('reset', leftSketchMargin+sketchSize-27, titleHeight);
  stroke("#2F2BAD");
  line(leftSketchMargin+sketchSize-27, titleHeight+2, leftSketchMargin+sketchSize, titleHeight+2);
  noStroke();
  text(_desc, leftSketchMargin, titleHeight+20, sketchSize, titleHeight+200);
}

function drawMovingDot() {
	noStroke();
	//fill("#000509");
	fill("#2F2BAD");

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

function keyPressed() {
  console.log(key);
  switch(key) {
    case 'R':
      console.log('reset');
      // what should happen here to reset?
      movingDot[0] = originDot[0];
      movingDot[1] = originDot[1];
      break;
    case 'D':
      console.log('debug');
      break;
  }
}

function mouseReleased() {
	originDot[4] = false;
	destinationDot[4] = false;
}