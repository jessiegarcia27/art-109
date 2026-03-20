let canvas;

function setup () {
    canvas = createCanvas(windowWidth, windowHeight); 
    canvas.position(0, 0);
    canvas.style('z-index', '-.5');
    // background(125);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw () {
    // strokeWeight(0);
    // fill (random(200, 255), random(200, 255), random(200, 255));
    // ellipse(mouseX, mouseY,30, 30); 
}

function mouseMoved() {
drawThings(mouseX, mouseY);
drawThings(mouseX -50 , mouseY +75);
}

function drawThings (_x,_y) {
          strokeWeight(0);
    fill (random(200, 255), random(200, 255), random(200, 255));
    ellipse(_x, _y,30, 30);  
}