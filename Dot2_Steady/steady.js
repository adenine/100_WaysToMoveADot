
var speed = 5.0;

function setup() {
    commonSetup(); 
}

function draw() {
  commonDraw();
  drawMovingDot();
  drawOriginDot(); 
  drawDestinationDot(); 
    
  // Great reference - http://processing.org/learning/trig/
  // Pythagorean Theorem - http://en.wikipedia.org/wiki/Pythagorean_theorem
  //   |\
  //   | \             Then you can use this theorem to find out what the
  // 3 |  \ c          third side is.
  //   |   \           3*3 + 4*4 = 9 + 16 = 25 = 5*5, so c=5
  //   |____\
  //      4
  // pow(a,2) + pow(b,2) = sqrt(c)  

  var a = destinationDot[0] - movingDot[0];
  var b = destinationDot[1] - movingDot[1];
  var c = Math.sqrt((a*a)+(b*b));

  if (c < speed) {
    movingDot[0] = destinationDot[0];
    movingDot[1] = destinationDot[1];
  } else {
    var rads = Math.atan2(b,a);
    movingDot[0] += cos(rads) * speed;
    movingDot[1] += sin(rads) * speed;
  }

  drawFooter("Dot 2: Steady Movement", "What if we'd like to move at a steady rate? " +
    "To do this we need to use the Pythagorean theorem to move a portion of the " +
    "way from the starting point to the destination. LERPing? ");
}
