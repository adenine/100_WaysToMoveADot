


var speed = 40.0;

function setup() {
  commonSetup(); 
}

function draw() {
  commonDraw();
  // x, y, size, size
  drawMovingDot();


  if ( ((destinationDot[0] - movingDot[0]) > 1) && ((destinationDot[1] - movingDot[1]) > 1) ) {
  	movingDot[0] = movingDot[0] + ((destinationDot[0] - movingDot[0]) / speed);
  	movingDot[1] = movingDot[1] + ((destinationDot[1] - movingDot[1]) / speed);
  	//console.log(((destinationDot[0] - movingDot[0]) > 1));
  } else {
  	movingDot[0] = originDot[0];
  	movingDot[1] = originDot[1];
  	console.log("reset to originDot");
  }



  drawOriginDot(); 
  drawDestinationDot(); 

  if (originDot[4] == true) {
  	originDot[0] = mouseX;
  	originDot[1] = mouseY;
  }

  if (destinationDot[4] == true) {
  	destinationDot[0] = mouseX;
  	destinationDot[1] = mouseY;
  }

}


// NEXT STEPS
// * Check on mobile and desktop
// 