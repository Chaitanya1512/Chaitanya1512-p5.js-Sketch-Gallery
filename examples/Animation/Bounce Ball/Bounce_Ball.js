let ball;

function setup() {
  createCanvas(600, 600);
  ball = {
    x: width / 2,
    y: height / 2,
    xSpeed: 3,
    ySpeed: 2,
    radius: 20,
  };
}

function draw() {
  background(200);

  ball.x += ball.xSpeed;
  ball.y += ball.ySpeed;

  if (ball.x > width - ball.radius || ball.x < ball.radius) {
    ball.xSpeed *= -1;
  }
  if (ball.y > height - ball.radius || ball.y < ball.radius) {
    ball.ySpeed *= -1;
  }

  fill(255, 0, 200);
  ellipse(ball.x, ball.y, ball.radius * 3, ball.radius * 3);
}
