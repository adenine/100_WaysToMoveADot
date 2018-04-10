

function setup() {
  commonSetup(); 
}

function draw() {
  commonDraw();
  drawMovingDot();
  drawOriginDot(); 
  drawDestinationDot(); 

  // move in an arc towards the destination

  drawFooter("Dot 4: Projectile", "Imagine you have an origin point, in " +
    "this case represented by a square, and a destination point, represented " +
    "by a triangle, and you would like to move a dot from the origin " +
    "to the destination. The first way to get the dot from A to B " +
    "is to change the dots location to be equal to the destination. Because " +
    "this happens in one frame it appears to quickly \'jump\' to the destination.");

}