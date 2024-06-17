let strokeColor = 0; 
let strokeWidth = 4;
let isDrawing = false;
let lastX, lastY; 

function setup() {
  createCanvas(600, 600);
  background(255);
}

function draw() {
  if (isDrawing) {
    stroke(strokeColor);
    strokeWeight(strokeWidth);
    line(lastX, lastY, mouseX, mouseY);
    lastX = mouseX;
    lastY = mouseY;
  }
}

function mousePressed() {
  isDrawing = true;
  lastX = mouseX;
  lastY = mouseY;
}

function mouseReleased() {
  isDrawing = false;
}

function keyPressed() {
  if (key === "c") {
    background(255);
  }

  if (key === "r") {
    strokeColor = color(255, 0, 0); 
  } else if (key === "g") {
    strokeColor = color(0, 255, 0); 
  } else if (key === "b") {
    strokeColor = color(0, 0, 255);
  }

  if (key === "+") {
    strokeWidth += 1;
  }

  if (key === "-" && strokeWidth > 1) {
    strokeWidth -= 1;
  }
}