
let font;
let points = [];
let msg = "hello!";
let size = 200;
let r = 15;
let angle = 0;
let t = 0;

function preload() {
  font = loadFont("fonts/Roboto-Black.ttf");
}

function setup() {
  createCanvas(550, 500);
  points = font.textToPoints(msg, 0, 0, size, {
    sampleFactor: 0.5,
    simplifyThreshold: 0.0,
  });
  angleMode(DEGREES);
}

function draw() {
  background(255, 93, 100);
  stroke(255);
  let x = r * cos(angle);
  let y = r * sin(angle);
  translate(20, 300);
  for (let i = 0; i < points.length; i++) {
    line(points[i].x, points[i].y, points[i].x + x, points[i].y + y);
  }

  fill(255, 100);
  textSize(size);
  textFont(font);
  text(msg, x, y);

  let increment = 5 * sin(t);
  t++;
  angle += increment;
}
