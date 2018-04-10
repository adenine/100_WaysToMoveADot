


var speed = 80.0; //set the rate at which to move the dot

function setup() {
  commonSetup(); 
}

function draw() {
  commonDraw();
  drawMovingDot();
  drawOriginDot(); 
  drawDestinationDot(); 

  if ( ((destinationDot[0] - movingDot[0]) > 1) && ((destinationDot[1] - movingDot[1]) > 1) ) {
  	movingDot[0] = movingDot[0] + ((destinationDot[0] - movingDot[0]) / speed);
  	movingDot[1] = movingDot[1] + ((destinationDot[1] - movingDot[1]) / speed);
  }

  drawFooter("Dot 1: Simple Code, Emergent Behavior", "Following from the previous " +
    "example we may think that we want to simply see more of the steps between " +
    "the origin and the destination. In that case we can look at where we want " +
    "to go (the destination) and where we are starting from (the origin) and move " +
    "a percent of that distance. An interesting visual effect happens when we do this. " +
    "The moving dot appears to slow down as it reaches it's destination because the " +
    "percent it is moving means less overall at each step.");
}
