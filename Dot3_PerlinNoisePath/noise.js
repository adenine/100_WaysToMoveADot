
var speed = 5.0;
var xoff = 0;

function setup() {
    commonSetup(); 
}

function draw() {
  commonDraw();
  drawMovingDot();
  drawOriginDot(); 
  drawDestinationDot(); 
    
  xoff += .01;
  speed += noise(xoff); //this is working but it's hard to see the effect and reset is broken
  // perhaps the pythagreon method would show this better because it would be a variation 
  // from the steady rate

  if ( ((destinationDot[0] - movingDot[0]) > 1) && ((destinationDot[1] - movingDot[1]) > 1) ) {
    movingDot[0] = movingDot[0] + ((destinationDot[0] - movingDot[0]) / speed);
    movingDot[1] = movingDot[1] + ((destinationDot[1] - movingDot[1]) / speed);
  } 

  drawFooter("Dot 3: Perlin Noise Path", "Imagine you have an origin point, in " +
    "this case represented by a square, and a destination point, represented " +
    "by a triangle, and you would like to move a dot from the origin " +
    "to the destination. The first way to get the dot from A to B " +
    "is to change the dots location to be equal to the destination. Because " +
    "this happens in one frame it appears to quickly \'jump\' to the destination.");
}
