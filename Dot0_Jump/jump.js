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
  commonSetup(); 
}

function draw() {
  commonDraw();
  drawMovingDot();
  drawOriginDot(); 
  drawDestinationDot(); 

  // 'jump' to the location of the destination
  movingDot[0] = destinationDot[0];
  movingDot[1] = destinationDot[1];

  drawFooter("Dot 0: Jump", "Imagine you have an origin point, in " +
  	"this case represented by a square, and a destination point, represented " +
  	"by a triangle, and you would like to move a dot from the origin " +
  	"to the destination. The first way to get the dot from A to B " +
  	"is to change the dots location to be equal to the destination. Because " +
  	"this happens in one frame it appears to quickly \'jump\' to the destination.");
}
