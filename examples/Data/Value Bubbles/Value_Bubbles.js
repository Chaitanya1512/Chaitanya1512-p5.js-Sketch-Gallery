let bubbles = [];
let numBubbles = 20;

function setup() {
  createCanvas(600, 800);
  for (let i = 0; i < numBubbles; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(30, 70);
    let value = random(100, 1000);
    let density = random(50, 255);
    bubbles.push(new Bubble(x, y, size, value, density));
  }
  bubbles.sort((a, b) => a.density - b.density);
}

function draw() {
  background(240);
  for (let bubble of bubbles) {
    bubble.display();
    bubble.checkHover();
  }
}

class Bubble {
  constructor(x, y, size, value, density) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.value = value;
    this.density = density;
    this.color = color(
      random(100, 255),
      random(100, 255),
      random(100, 255),
      this.density
    );
    this.hover = false;
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size * (this.hover ? 1.5 : 1));
    if (this.hover) {
      fill(0, 255);
      textAlign(CENTER, CENTER);
      text(this.value, this.x, this.y);
    }
  }

  checkHover() {
    if (
      dist(mouseX, mouseY, this.x, this.y) <
      (this.size / 2) * (this.hover ? 1.5 : 1)
    ) {
      this.hover = true;
    } else {
      this.hover = false;
    }
  }
}
