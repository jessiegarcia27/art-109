let canvas;
let xPos = 0;
let yPos = 0;
let easing = .5;


function setup () {
    canvas = createCanvas(windowWidth, windowHeight); 
    canvas.position(0, 0);
  canvas.style('z-index', '-1');
    // background(125);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw () {
 clear();

  xPos = xPos + ((mouseX - xPos) * easing);
  yPos = yPos + ((mouseY - yPos) * easing);

    drawThings(xPos, yPos); 

}


function drawThings (_x, _y) {

  // heart color
  fill(255, 0, 100);
  noStroke();

  // left bump
  ellipse(_x - 10, _y - 10, 30, 30);

  // right bump
  ellipse(_x + 10, _y - 10, 30, 30);

  // bottom point
  triangle(
    _x - 25, _y,
    _x + 25, _y,
    _x, _y + 40
  );
}