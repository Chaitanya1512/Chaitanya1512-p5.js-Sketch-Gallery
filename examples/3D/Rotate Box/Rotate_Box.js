function setup() {
  createCanvas(600, 400, WEBGL);
}

function draw() {
  background(235);

  push();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill(150, 0, 0);
  box(200);
  pop();
}
